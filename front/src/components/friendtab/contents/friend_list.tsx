
import { useEffect, useState } from "react";
import { User_for_list } from "../../../../types/user_for_list"
import axios from "axios";
import Link from "next/link";



export default function Friend_list(){
    const [Friendlist,setFriendlist]=useState<User_for_list[]>([])
    async function Getfriendlist(){
        const res = await axios.get<User_for_list[]>("http://localhost:3000/users/friend/1");
        
        setFriendlist(res.data);
    }

    useEffect(()=>{
        Getfriendlist();
    },[])




    return(
        <>
        <div className="flex-row mx-3 mt-2">
            {Friendlist.map(friend=>(
                <>
                <Link  href={"/userprofile/"+String(friend.id)}>
                <div className="flex h-20 mb-4" >
                    <img className="w-20 object-cover rounded-full object-top" src={friend.avatar}></img>
                    <div className="font-bold text-xl text-gray-600 mt-2 ml-4">{friend.name}</div>
                </div>
                </Link>
                </>
            ))}
            </div>
        </>
    )
}