'use client'

import { createElement, use, useEffect, useState } from "react";
import { Exchangedletter } from "../../types/exchangedlettertypes";
import axios from "axios";
import  { useRouter } from "next/navigation";

import Link from "next/link";






export default function ShowExchangedletter(props:{id:number}){
    const [Data,setData]=useState<Exchangedletter>();
    const router=useRouter()
    

    async function getdata(){
        try{
            const res= await axios.get<Exchangedletter>('http://localhost:3000/exchangeletters/show/'+String(props.id));
            setData(res.data);
            
        }catch(err){
            console.log(err);
        }

    }


  



    useEffect(()=>{
        getdata();
        console.log("data get");
        
    },[])


    

    return(
        <>
        <Link href={"/userprofile/"+Data?.author.id}>
            <div className="flex h-14">
                <img className="w-14 object-cover rounded-full object-top" src={Data?.author.avatar}></img>
                <div className="text-xl font-bold text-slate-600 mt-1 ml-5">{Data?.author.name}</div>
            </div><span className="block h-2"></span>
        </Link>
        <ul className="flex overflow-x-auto">
            
            {
            
                    Data?.media.map(url=>(
                        <li className='flex-none w-4/5 h-auto' key={url}>
                            <img src={url} onError={(e)=>{(e.target as HTMLImageElement).style.display="none"; const video=document.createElement("video"); video.src=url; video.controls=true; (e.target as HTMLImageElement).parentElement?.appendChild(video)}}></img>
                            
                        </li>
                    ))
            
            
            
            
            
            }
        </ul>
        <span className="block h-2"></span>
        
        <div className=" inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">{Data?.genre}</div><br/>
        <div className="w-full mt-5  mb-16">{Data?.description}</div>
        </>
    )

}