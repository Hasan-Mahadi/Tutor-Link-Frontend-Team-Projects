"use client"

import { signIn } from "next-auth/react"
import { AlFacebookOriginal, AlGoogleOriginal } from "@/components/lib/icon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SingInForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <p className="text-3xl text-center mb-6 font-bold">Sign In</p>
                <form action="">
                    <Input
                        placeholder="Enter your phone number or email"
                        className="outline-primary shadow-none focus-visible:border-primary focus-visible:ring-0 py-6"
                    />
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        className="outline-primary shadow-none focus-visible:border-primary focus-visible:ring-0 py-6 mt-6"
                    />
                    <p className="text-right mt-1.5 text-accent text-sm">
                        {/* <Link to={"#"} className="hover:text-primary-foreground">Forgot password?</Link> */}
                    </p>

                    <div className="text-accent text-center mt-10 flex items-center gap-4">
                        <span className="block w-full h-px bg-gray-300"></span>
                        <span className="shrink-0">Or, Login With</span>
                        <span className="block w-full h-px bg-gray-300"></span>
                    </div>

                    <div className="flex justify-between gap-5 mt-5">
                        <button
                            onClick={() => signIn("google", {
                                callbackUrl: "http://localhost:3000"
                            })}
                            type="button"
                            className="border w-full flex items-center justify-center gap-3 py-2 cursor-pointer rounded-md hover:border-primary transition-all duration-300"
                        >
                            <AlGoogleOriginal className="size-6" />
                            <span>Google</span>
                        </button>
                        <button
                            onClick={() => signIn("facebook", {
                                callbackUrl: "http://localhost:3000"
                            })}
                            type="button"
                            className="border w-full flex items-center justify-center gap-3 py-2 cursor-pointer rounded-md hover:border-primary transition-all duration-300"
                        >
                            <AlFacebookOriginal className="size-6" />
                            <span>Facebook</span>
                        </button>
                    </div>

                    <Button size="lg" className="w-full mt-8 font-bold text-lg">Log In</Button>

                    <p className="text-accent text-sm mt-5 text-center">
                        Don&apos;t have an account?
                        <span className="font-semibold text-primary-foreground cursor-pointer ml-1">
                            Register
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SingInForm
