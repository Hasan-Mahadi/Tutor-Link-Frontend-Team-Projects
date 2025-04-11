"use server"

import { FormValues } from "@/app/login/page";

export const loginUser =async(data: FormValues)=>{

    const res = await fetch(`${process.env.BACKEND_URL}/login`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
        cache:"no-store",
    });

    const userInfo = await res.json();

    return userInfo;
}