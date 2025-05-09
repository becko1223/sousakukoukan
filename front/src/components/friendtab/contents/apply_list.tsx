
import { useEffect, useState } from "react";
import { User_for_list } from "../../../../types/user_for_list"
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";



export default function Apply_list(){
    const [Applylist,setApplylist]=useState<User_for_list[]>([]);
    const router=useRouter();

    async function Getapplylist(){
        const res = await axios.get<User_for_list[]>("http://localhost:3000/users/friendapplyer/1");
        setApplylist(res.data);

       
    }

    const approve= async (id:number)=>{
        const res= await axios.get("http://localhost:3000/friendapplies/approve/1/"+String(id))
        Getapplylist();
        }

    const reject = async(id:number)=>{
        const res= await axios.get("http://localhost:3000/friendapplies/reject/1/"+String(id))
        Getapplylist();
    }


    useEffect(()=>{
        Getapplylist();
    },[])



    return(
        <>
        <div className="flex-row mx-3 mt-2">
            {Applylist.map(friend=>(
                <>
                <div className="flex h-20 mb-4" key={friend.id}>
                    <Link className="flex" href={"/userprofile/"+String(friend.id)}>
                        <img className="w-20 object-cover rounded-full object-top" src={friend.avatar}></img>
                        <div className="font-bold text-xl text-gray-600 mt-2 ml-4">{friend.name}</div>
                    </Link>
                    <button className="ml-32 bg-gray-900 rounded text-white h-10 px-2 mt-4" onClick={()=>{approve(friend.id)}}>承認</button>
                    <button className="ml-5 border border-red-500 rounded text-red-500 h-10 px-2 mt-4" onClick={()=>{reject(friend.id)}}>拒否</button>
                </div>
                </>
            ))}
            </div>
        </>
    )
}