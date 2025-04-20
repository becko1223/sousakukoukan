'use client'

import Userprofile from "@/components/userprofile";
import { useRouter } from "next/navigation";
import { use, useContext } from "react";
import { FooterContext } from "../../layout";


export default function profilepage({params}:{ params: Promise<{ id: string }>}){
    const useparams=use(params)
    const router=useRouter();

    const  {FooterIndex, setFooterIndex } = useContext(FooterContext)
    if(useparams.id=="1"){
        setFooterIndex(3)
    }
        

    return(
        <>
        <button className="mt-4 ml-2" onClick={()=>{router.back()}}><img className="w-10" src="https://icongr.am/feather/arrow-left.svg?size=128&color=currentColor"></img></button>
        <Userprofile id={Number(useparams.id)} />
        </>
    )
}