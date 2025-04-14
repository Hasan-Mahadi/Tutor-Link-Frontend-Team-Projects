/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData:FieldValues)=>{
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/user`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userData)
        });
        return res.json();
    } catch (err:any) {
        return Error(err)
    }
};

export const loginUser = async (userData:FieldValues)=>{
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userData)
        });
        return res.json();
    } catch (err:any) {
        return Error(err)
    }
}