"use server"
import { FieldValues } from "react-hook-form"
import { cookies } from "next/headers"

import axiosInstance from "@/src/lib/AxiosInstance"



export const registerUser = async(userData : FieldValues)=>{
    try {
        const {data} = await axiosInstance.post('/auth/register' , userData)

        if(data.success){
            (await cookies()).set("accessToken", data?.data?.accessToken);
            (await cookies()).set("refreshToken", data?.data?.refreshToken);
        }
    } catch (error : any) {
        throw new Error(error)
    }
}