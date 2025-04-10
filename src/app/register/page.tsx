"use client"

import { AlFacebookOriginal, AlGoogleOriginal } from "@/components/lib/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";

export type UserData = {
    username:string;
    email:string;
    password:string;
};

const RegisterForm = () => {

    const { register, handleSubmit, formState: {errors}} = useForm<UserData>()
    

    const onSubmit = async (data: UserData) =>{
        console.log(data)
       
    }

    return (
        <div>
            <p className="text-2xl text-start mb-3 font-bold">Register</p>
            <form action="">
                <Input placeholder="Please enter your name" className="outline-primary shadow-none focus-visible:border-primary focus-visible:ring-0 py-6" />
                <Input placeholder="Please enter your phone number or email" className="outline-primary shadow-none focus-visible:border-primary focus-visible:ring-0 py-6 mt-6" />
                <Input type="password" placeholder="Please enter your password" className="outline-primary shadow-none focus-visible:border-primary focus-visible:ring-0 py-6 mt-6" />

                <p className="text-accent text-center mt-10 flex items-center gap-4">
                    <span className="block w-full h-px bg-[rgba(0,0,0,0.43)]"></span>
                    <span className="shrink-0">Or, Login With</span>
                    <span className="block w-full h-px bg-[rgba(0,0,0,0.43)]"></span>
                </p>
                <div className="flex justify-between gap-5 mt-5">
                    <div className="border w-full flex items-center justify-center gap-3 py-2 cursor-pointer rounded-md hover:border-[rgba(0,0,0,0.43)] transition-all duration-300">
                        <AlGoogleOriginal className="size-7" />
                        <span>Google</span>
                    </div>
                    <div className="border w-full flex items-center justify-center gap-3 py-2 cursor-pointer rounded-md hover:border-[rgba(0,0,0,0.43)] transition-all duration-300">
                        <AlFacebookOriginal className="size-7" />
                        <span>Facebook</span>
                    </div>
                </div>
                <Button size={"sm"} className="w-full mt-8 font-bold text-lg">Register</Button>
                <p className="text-accent text-sm mt-5 text-center">Already have an account? <span className="font-semibold text-primary-foreground cursor-pointer">Log in Now</span></p>
            </form>
        </div>
    )
}

export default RegisterForm