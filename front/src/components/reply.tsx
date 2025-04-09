import { useEffect, useState } from "react";
import { Reply } from "../../types/reply";
import axios from "axios";
import Link from "next/link";


export default function Showreply(props:{id:number}){
    const [Data,setData]=useState<Reply>();

    async function getdata(){
        try{
            const res= await axios.get<Reply>('http://localhost:3000/replies/show/'+String(props.id));
            setData(res.data);
            console.log(res.data);
            
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
            <img className="object-cover rounded-full w-14 object-top" src={Data?.author.avatar}></img>
            <div className="text-xl font-bold text-slate-600 mt-1 ml-5">{Data?.author.name}</div>
        </div></Link><br/>
        <div className="w-full ">{Data?.text}</div>
        </>
    )

    
    



}