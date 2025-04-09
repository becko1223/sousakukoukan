'use client'

import { use, useEffect, useState } from "react";
import { Exchangedletter } from "../../types/exchangedlettertypes";
import axios from "axios";
import  { useRouter } from "next/navigation";
import { Router } from "next/router";
import Link from "next/link";

async function Mediaoutput(url:string){
    const response = await fetch(url);
    const blob = await response.blob();
    const objUrl = window.URL.createObjectURL(blob);
    
    /*if(/^image\/.+$/.test(blob.type)){
        return(
            <>
            <img src={objUrl} className="flex-none w-4/5 h-auto"></img>
            </>
        )
    }

    else if(/^video\/.+$/.test(blob.type)){
        return(
            <>
            <video src={objUrl} className="flex-none w-4/5 h-auto"></video>
            </>
        )
    } */
}




export default function ShowExchangedletter(props:{id:number}){
    const [Data,setData]=useState<Exchangedletter>();
    const [Blobs,setBlobs]=useState<Blob[]>([]);
    const [Dummy,setDummy]=useState<String>();
    const router=useRouter()
    

    async function getdata(){
        try{
            const res= await axios.get<Exchangedletter>('http://localhost:3000/exchangeletters/show/'+String(props.id));
            setData(res.data);
            console.log(res.data)
            
        }catch(err){
            console.log(err);
        }

    }


    async function Mediablobs(){
        let bloblist: Blob[]=[];
        Data?.media.map(async url=>{
            console.log("loop");
            const response = await fetch(url);
            const blob = await response.blob();
            bloblist.push(blob)
        })
        setBlobs(bloblist);
        console.log(bloblist);
    }



    useEffect(()=>{
        getdata();
        console.log("data get");
        
    },[])


    useEffect(()=>{
        
        Mediablobs();
    },[Data])

    useEffect(()=>{
        console.log(Blobs);
        setDummy("setted");
        router.refresh();
    },[Blobs])

    return(
        <>
        <Link href={"/userprofile/"+Data?.author.id}>
        <div className="flex h-14">
            <img className="w-14 object-cover rounded-full object-top" src={Data?.author.avatar}></img>
            <div className="text-xl font-bold text-slate-600 mt-1 ml-5">{Data?.author.name}</div>
        </div><span className="block h-2"></span>
        </Link>
        <ul className="flex overflow-x-auto">
            {Blobs.map(blob=>(
            
                    <li className='flex-none w-4/5 h-auto' key={String(blob.size)+blob.type}>
                    {
                        (()=>{
                        const objUrl = window.URL.createObjectURL(blob);
                        console.log(objUrl);
                        if(/^image\/.+$/.test(blob.type)){
                            return(
                                <>
                                <img src={objUrl} className="flex-none w-4/5 h-auto"></img>
                                </>
                            )
                        }
                    
                        else if(/^video\/.+$/.test(blob.type)){
                            return(
                                <>
                                <video src={objUrl} className="flex-none w-4/5 h-auto"></video>
                                </>
                            )
                        }
                    })()
                    }
                    </li>
            
            ))}
        </ul>
        <span className="block h-2"></span>
        
        <div className=" inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">{Data?.genre}</div><br/>
        <div className="w-full mt-5  mb-16">{Data?.description}</div>
        </>
    )

}