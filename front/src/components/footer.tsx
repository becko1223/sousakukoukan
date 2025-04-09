'use client'

import axios from 'axios';
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react';
import { User } from '../../types/user';
import { FooterContext } from '@/app/layout';

export default function Footer(){
    const [Imageurl,setImagerul]=useState<string>();
    const  {FooterIndex, setFooterIndex } = useContext(FooterContext)

    async function getuser() {
        const res= await axios.get<User>("http://localhost:3000/users/show/"+"1"+"/1")
        setImagerul(res.data.avatar);
    }

    useEffect(()=>{
        getuser();
        
    },[])

    useEffect(()=>{
        console.log("footer!"+String(FooterIndex))
    },[FooterIndex])


    return(
        <>
        <div className="bg-white flex gap-12 justify-center fixed pb-2 pt-4 bottom-0 w-full h-50 box-border">
        <Link href="/" className={'text-sm text-center '+((FooterIndex==0?"font-bold text-cyan-600":" text-slate-700"))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className={"size-10 "+ ((FooterIndex==0) ? "stroke-cyan-600 stroke-2" : "")}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
            </svg>
            交換
        </Link>
        <Link href="/buntsu" className={'text-sm text-center '+((FooterIndex==1?"font-bold text-cyan-600":" text-slate-700"))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className={"size-10 "+ ((FooterIndex==1)?"stroke-cyan-600 stroke-2":"")}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

            文通
        </Link>
        <Link href="/friend" className={'text-sm text-center '+((FooterIndex==2?"font-bold text-cyan-600":" text-slate-700"))}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  className={"size-10 icon icon-tabler icons-tabler-outline icon-tabler-users "+ ((FooterIndex==2)?"stroke-cyan-600 stroke-2":"")}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
        友達
        </Link>
        <Link href="/userprofile/1" className={'text-sm text-center '+((FooterIndex==3?"font-bold text-cyan-600":" text-slate-700"))}>
        <img src={Imageurl} className='w-10 h-10 mx-auto object-cover rounded-full object-top'></img>
        マイページ
        </Link>
        </div>
        </>
    );
}10