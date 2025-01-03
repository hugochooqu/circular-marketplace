'use server'

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "..";
import { appWriteConfig } from "../appwrite/config";
import { parseStringify } from "../utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export const getUserByEmail = async(email) => {
    const {databases} = await createAdminClient()

    const result = await databases.listDocuments(
        appWriteConfig.databaseId,
        appWriteConfig.usersCollectionsId,
        [Query.equal('email', [email])]
    );

    return result.total > 0 ? result.documents[0] : null
}

const handleError = (error, message) => {
    console.log(error, message);

    throw error
}

export const sendEmailOTP = async(email) => {
    const {account} = await createAdminClient()

    try {
        const session = await account.createEmailToken(ID.unique(), email)

        return session.userId
    } catch (error) {
        return handleError(error, 'Error with email')
    }
}

export const createAccount = async(fullName, email, role) => {
console.log(fullName, email)
    const existingUser = await getUserByEmail(email);

    const accountId = await sendEmailOTP(email)
    if (!accountId) throw new Error('Failed to send OTP')

    if(!existingUser) {
        console.log('no user')
        const {databases} = await createAdminClient()

        await databases.createDocument(
            appWriteConfig.databaseId,
            appWriteConfig.usersCollectionsId,
            ID.unique(),
            {
                fullName,
                email,
                accountId,
                role
            }
        )
    }

    return parseStringify({accountId: accountId})
}

export const verifySecret = async (accountId, password) => {
    try {
      const { account } = await createAdminClient();
  
      const session = await account.createSession(accountId, password);
  
      (await cookies()).set('appwrite-session', session.secret, {
          path:'/',
          httpOnly: true,
          sameSite: 'strict',
          secure: true
      });
  
      return parseStringify({sessionId: session.$id })
    } catch (error) {
      handleError(error, 'Failed to verify OTP')
    } 
  }

  export const getCurrentUser = async() => {
    try {
        const {databases, account} = await createSessionClient()

        const result = await account.get()

        const user = await databases.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.usersCollectionsId,
            [Query.equal("accountId", result.$id)]
        )

        if (user.total <= 0) return null;

        return parseStringify(user.documents[0])
    } catch(error) {
        console.log(error)
    }
  }

  export const signInUser = async (email) => {
    try {
        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            await sendEmailOTP(email);
            return parseStringify({accountId: existingUser.accountId})
        }

        return parseStringify({accountId: null, error: 'Cannot find account'})
    } catch (error) {
        handleError(error, 'Failed to sign user in')
    }
}

export const signOutUser = async() => {
    const { account } = await createSessionClient();

    try {
        await account.deleteSession("current");
        (await cookies()).delete('appwrite-session')
    } catch (error) {
        handleError(error, 'Failed to sign user out')
    } finally {
        redirect('/')
    }
}

export const updateProfile = async (updatedUser, path) => {
    const {databases} = await createAdminClient()

    const id = updatedUser.$id
    console.log(id)
    
    try{
        const { $id, $databaseId, $collectionId, $createdAt, $updatedAt, ...sanitizedUser } = updatedUser;

        // if (sanitizedUser.phone) {
        //     sanitizedUser.phone = parseInt(sanitizedUser.phone, 10);
        //     if (isNaN(sanitizedUser.phone)) {
        //       throw new Error("Invalid phone number. Phone must be numeric.");
        //     }
        //   }

        const updatedFile = await databases.updateDocument(
            appWriteConfig.databaseId,
            appWriteConfig.usersCollectionsId,
            id,
            sanitizedUser
        )
        console.log("Update successful:", updatedFile);

        // Revalidate the path (if Next.js supports ISR revalidation for this path)
        if (path) {
          revalidatePath(path);
        }
        return parseStringify(updatedFile)
    } catch (error) {
        handleError(error, 'Failed to update user')
    }

}