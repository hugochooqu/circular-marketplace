

import { signOutUser } from "@/lib/actions/user.actions";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

export const SignOut = () => {
  return (
    
      <button onClick={signOutUser}> 
        <FaSignOutAlt size="22px" />
      </button>
   
  );
};


