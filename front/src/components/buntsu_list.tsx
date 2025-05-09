'use client'
import { useEffect, useState } from "react";
import { Buntsu_for_list } from "../../types/buntsu_for_list"
import axios from "axios";
import Link from 'next/link'

export default function Buntsulist(){
    const [Data,setData]=useState<Buntsu_for_list[]>([]);

    async function getdata(){
        const res=await axios.get<Buntsu_for_list[]>('http://localhost:3000/buntsuletters/list/1')
        setData(res.data);
        console.log(res.data);
    }

    useEffect(()=>{
        getdata();
    },[])


    return(
        <>
        <div className="mt-5 mx-3">
            <div className=" text-center text-3xl text-slate-600 font-bold">文通相手</div>
        <ul>
            {
                Data.map((letter)=>(
                    
                    <li key={letter.id}>
                        <Link className="mb-4" href={"/buntsu/"+String(letter.id)}>
                            <div className="flex h-20 w-full">
                                <img src={letter.partner_avatar} className="w-20 object-cover rounded-full object-top"></img>
                                <div className="font-bold text-xl text-gray-600 mt-2 ml-4">{letter.partner_name}</div>
                            </div>
                        </Link>

                    </li>
                    
                ))
            }
        </ul>
        </div>
        </>
    )
}