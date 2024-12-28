"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import  Button  from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./UI/input";
import Link from "next/link";

const authFormSchema = (type) => {
  return z.object({
    email:z.string().email(),
    fullName:
      type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
  });
};

const AuthForm = ({ type }) => {
    const formSchema = authFormSchema(type);
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        fullName: "",
        email: "",
        user: "",
      },
    });

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1 className="form-title">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
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
    </div>
  );
};

export default AuthForm;
