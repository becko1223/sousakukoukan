'use client'
import Showbuntsu from "@/components/buntsu";
import { useRouter } from "next/navigation";
import { use } from "react";


export default function({params}:{ params: Promise<{ id: string }>}){
    const useparams=use(params);
    const router = useRouter();
    return(
        <>
        <button className="mt-4 ml-2" onClick={()=>{router.back()}}><img className="w-10" src="https://icongr.am/feather/arrow-left.svg?size=128&color=currentColor"></img></button>
        <Showbuntsu partner_id={Number(useparams.id)}/>
        </>
    )
}