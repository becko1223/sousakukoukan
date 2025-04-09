import { useEffect, useState } from "react";
import { Exchangedletter_for_list } from "../../../../types/exchangedletter_for_list"
import axios from "axios";
import Link from "next/link";


export default function Freekoukankontet_kiroku(){
    const [Letterlist,setLetterlist]=useState<Exchangedletter_for_list[]>([]);
    async function Listdata(){
        
        try{
            const res= await axios.get<Exchangedletter_for_list[]>('http://localhost:3000/exchangeletters/list/1');
            setLetterlist(res.data);
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        Listdata();
    },[])


        
        return(
            <>
            <ul className="mt-20">
            {
                Letterlist.map(item=>(
                    
                    
                    <li className="mb-4">
                    <Link href={'/exchangedletter/'+String(item.id)} key={item.id} >
                    <div className="flex h-20 mx-3">
                        <img src={item.partner_avatar} className="w-20 h-20 object-cover object-top rounded-full"></img>
                        <div className="flex flex-col ml-4">
                            <div className="font-bold text-xl text-gray-600 mt-2">{item.partner_name}</div>
                            <div className=" truncate w-72">{item.description}</div>
                        </div>
                    </div>
                    </Link>
                    </li>
                    
                    
                ))
            }
            </ul>
            </>
        )
    }


    