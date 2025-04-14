import { z } from "zod";

export const registerSchema =  z.object({
    name: z.string({required_error: "First name is required"})
    .min(2,"First name must be between 2 and 50 characters")
    .max(2,"First name must be between 2 and 50 characters"),
    email:z.string({ required_error: "Email is required"})
    .email("Invalid email address"),
    password:z.string({required_error:"Password Confirmation is required"})
    .min(8, "Password must be at least 8 characters"),
    passwordConfirm:z.string({ required_error:"Password is required"}).min(1),
});