'use client'

import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import { getCurrentUser, updateProfile } from "@/lib/actions/user.actions";
import { Separator } from "./UI/separator";
import { AlertDialog } from "./UI/alert-dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./UI/form";
import { Input } from "./UI/input";
import { z } from "zod";
import CustomForm from "./CustomForm";
import { usePathname } from "next/navigation";


// const profileFormSchema = (role) => {
//   return z.object({
//     email: z.string().email(),
//     fullName : z.string().min(2).max(500),
//     phoneNo: z.string().min(2).max(20),
//     bio: z.string().min(2).max(1000)
//   })
// }

const Profile = (user) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(user)
  const path = usePathname()



  const handleFormSubmit = async (updatedUser) => {
    console.log("Updated User Data:", updatedUser);
    setCurrentUser((prev) => ({ ...prev, user: updatedUser }));
   
  try {
    const updatedData = await updateProfile(updatedUser, path)
    console.log('Profile, updated successfully', updatedData)
    setModalOpen(false);

    } catch(error) {
    console.error('Update profile failed', error)}

    // Add logic to save the updated user data (e.g., API call)
  };

  const roleSpecificField = (user) => {
    return {
      name: 'bio',
      label: user.role === "individual" ? "Bio" : "Mission Statement",
      type: "textarea",
      maxWords: 50,
      attributes: {
        rows: 4,
        style: {resize : 'none'}
      }
    };
  };

 

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between w-full">
      <div className="h-auto bg-white w-[55vw] rounded-2xl pt-6">
        <div className="flex flex-col justify-left items-left  gap-4 pb-6 mx-8">
          <Thumbnail url={""} />
          <div className="flex flex-col gap-1 text-left">

            <p className="font-bold text-3xl">{currentUser.user.fullName}</p>

            <div className="flex justify-between">

              <div>
                <p className="subtitle-2 !text-gray-400">{currentUser.user.email}</p>
                <p className='subtitle-2'>Phone:{' '}{currentUser.user.phone}</p>
                <p className='subtitle-2'>Address:{' '}{currentUser.user.address}</p>
                <p className="subtitle-2">
                  Joined:{" "}
                  {new Date(currentUser.user.$createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex h-12  gap-5">
                <button className="bg-green-500 p-3 rounded-3xl font-semibold text-sm" onClick={() => setModalOpen(!modalOpen)}>Edit Profile</button>
                <button className="bg-green-500 p-3 rounded-3xl font-semibold text-sm">{currentUser.user.role === 'individual' ? 'Pending claims' : 'View Requests'}</button>
              </div>
            </div>
          </div>
          <Separator className="bg-green-500 w-[100%] mb-4" />

          <div>
            <h3 className="text-lg font-semibold">{currentUser.user.role === 'individual' ? 'Bio:' : 'Mission statement:'}{" "}<span className= "!text-base !font-light capitalize">{currentUser.user.bio}</span></h3>
          </div>
        </div>
      </div>

      <div className="h-auto w-[30vw] bg-white py-6 px-6 rounded-2xl">
        <h1 className="xl text-black font-semibold">Recent Activities </h1>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50">
        <div className="bg-white w-[100%] max-w-lg my-8 rounded-lg p-6 shadow-lg flex flex-col overflow-scroll scroll-smooth scroll-m-0">
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="relative text-right font-bold text-3xl text-red-500 hover:text-gray-800"
          >
            &times;
          </button>
          <CustomForm
              initialValues={currentUser.user}
              onSubmit={handleFormSubmit}
              onClose={() => setModalOpen(false)}
              fields={[
                { name: "fullName", label: "Full Name", type: "text" },
                { name: "email", label: "Email", type: "email", disabled: true },
                { name: "phone", label: "Phone Number", type: "text" },
                { name: "address", label: "Address", type: "text" },
                {
                  name: "Website",
                  label: "Website",
                  type: "text",
                  condition: (user) => user.role === "ngo", // Only render if user is admin
                },
               roleSpecificField(currentUser.user)
              ]}
            />
        </div>
      </div>
      )}


    </div>

  );
};

export default Profile;
