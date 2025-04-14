"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./registerValidation";

const RegisterForm = () => {
    const form = useForm({
        resolver: zodResolver(registerSchema)
    });
    
    const onSubmit:SubmitHandler<FieldValues> =(data)=>{
        console.log(data);
    }
    return (
        <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
            <div className="flex items-center space-x-4">
                <div>
                    <h1 className="text-xl font-semibold">Register</h1>
                    <p className="font-extralight text-sm text-gray-600">Join us today and start your journey!</p>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                    <Input {...field} value={field.value || ''}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>)}
                    />
                <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input {...field} value={field.value || ''}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>)}
                    />
                <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input {...field} value={field.value || ''}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>)}
                    />
                <FormField
                control={form.control}
                name="passwordConfirm"
                render={({field}) => (
                <FormItem>
                    <FormLabel>Password Confirm</FormLabel>
                    <FormControl>
                    <Input {...field} value={field.value || ''}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>)}
                    />
                    <Button type="submit">Register</Button>
                </form>
            </Form>
            <p className="text-sm text-gray-600 text-center my-3">
            Already have an account?
                <Link href="/login" className="text-primary">Login</Link> 
            </p>
        </div>
    );
};

export default RegisterForm;