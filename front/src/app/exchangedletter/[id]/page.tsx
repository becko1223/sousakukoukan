'use client'
import ShowExchangedletter from "@/components/exchangedletter";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Showreply from "@/components/reply";
import { useRouter } from "next/navigation";

export default function exchangeletterpage({params}:{ params: Promise<{ id: string }>}){
        const [Matchid,setMatchid]=useState<number>();
        const useparams=use(params);
        const router=useRouter();

        async function getdata(){
            try{
                const res= await axios.get<{id:number}>('http://localhost:3000/exchangeletters/matchnumber/'+useparams.id)
                setMatchid(res.data.id)
                console.log(res.data.id)
                
            }
            catch(err){
                console.log(err);
            }
        }

        useEffect(()=>{
            getdata();
            
        },[])
    
        return(
            <>
            <div className="mx-3">

                <div className=" mt-3 mb-10">
                    <button className="mb-2" onClick={()=>{router.back()}}><img className="w-10" src="https://icongr.am/feather/arrow-left.svg?size=128&color=currentColor"></img></button>
                    <div className="bg-stone-100 shadow-md p-4">
                        <div className="text-2xl text-slate-600 font-bold mb-1">もらった手紙</div>
                        <ShowExchangedletter id={Number(useparams.id)} />
                    </div>
                    <span className="block h-16"></span>
                    <div className="bg-stone-100 shadow-md p-4">
                        <div className="text-2xl text-slate-600 font-bold mb-1">送った返事</div>
                        <Showreply id={Number(useparams.id)}/>
                    </div>
                    <span className="block h-20"></span>

                    <div className="w-screen border-t-2"></div>

                    <span className="block h-20"></span>

                    <div className="bg-stone-100 shadow-md p-4">
                        <div className="text-2xl text-slate-600 font-bold mb-1">あげた手紙</div>
                        {(Matchid!=undefined) && <ShowExchangedletter id={Number(Matchid)}/>}
                    </div>

                    <span className="block h-16"></span>

                    <div className="bg-stone-100 shadow-md p-4">
                        <div className="text-2xl text-slate-600 font-bold mb-1">もらった返事</div>
                        {(Matchid!=undefined) && <Showreply id={Number(Matchid)}/>}
                    </div>
                    <span className="block h-24"></span>
                </div>

            </div>
            </>
        )
    
}