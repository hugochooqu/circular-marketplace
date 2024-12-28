'use server'

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "..";
import { appWriteConfig } from "../appwrite/config";
import { parseStringify } from "../utils";
import { cookies } from "next/headers";


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

export const createAccount = async(fullName, email) => {
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
                accountId
            }
        )
    }

    return parseStringify(accountId)
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
