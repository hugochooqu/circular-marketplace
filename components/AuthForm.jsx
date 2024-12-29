"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import  Button  from "@/components/UI/Button";
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select"

import { Input } from "./UI/input";
import Link from "next/link";
import { createAccount, signInUser } from "@/lib/actions/user.actions";
import OTPmodal from "./OTPmodal";
import Image from "next/image";
import { Separator } from "./UI/separator";

const authFormSchema = (type) => {
  return z.object({
    email:z.string().email(),
    fullName:
      type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    role: z.string()
  });
};

const AuthForm = ({ type }) => {
    const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountId, setAccountId] = useState("")
  

    const formSchema = authFormSchema(type);
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullName: "",
        email: "",
        role: "",
      },
    });

  const onSubmit = async (values) => {
    setIsLoading(true)
    setErrorMessage("")
 console.log(values)
    try {
      const user = 
        type === 'sign-up'?
      await createAccount(
         values.fullName || "",
         values.email, values.role
      ) : await signInUser( values.email);

      console.log(user)
      setAccountId(user.accountId)
    } catch {
      setErrorMessage("Failed to create account. please try again" )
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1 className="form-title">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          {type === 'sign-up' && (
            <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white z-10">
                    <SelectItem value="individual">Individual</SelectItem>
                    <Separator className='my-2 bg-green-400' />
                    <SelectItem value="ngo">NGO</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          )}
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="shad-form-item">
                    <FormLabel className="shad-form-label">Full Name</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Enter your Full Name"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                  </div>

                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="shad-form-item">
                  <FormLabel className="shad-form-label">E-mail</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter your Email"
                      className="shad-input"
                      {...field}
                    />
                  </FormControl>
                </div>

                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />
          <Button type="submit" className="form-submit-button">
          {type === "sign-in" ? "Sign In" : "Sign Up"}{" "}
          {isLoading && (
              <Image
                src="/assets/icons/loader.svg"
                alt="loading"
                className="ml-2 animate-spin"
                width={24}
                height={24}
              />
            )}
          </Button>

          <div className="flex body-2 justify-center">
            <p className="text-slate-600" >
              {type === "sign-in"
                ? 'Don"t have an acount?'
                : "Already Have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="ml-1 font-medium text-green-500">
                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </div>
        </form>
      </Form>

      {accountId && (
        <OTPmodal email={form.getValues("email")} accountId={accountId} />
      )}
    </div>
  );
};

export default AuthForm;
