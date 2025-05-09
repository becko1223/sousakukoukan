'use client'
import { use, useEffect, useRef, useState } from "react";
import { User } from "../../types/user"
import axios from "axios";
import Link from "next/link";

export default function Userprofile(props:{id:number}){
    const [User,setUser]=useState<User>();
    const [Buntsuid,setBuntsuid]=useState<{id:number}|{partner_id:number}>({id:-1});
    const [isformvisible,setisformvisible]=useState<boolean>(false);
    const [Editimage,setEditimage]=useState<string | undefined>("");
    const sendformRef = useRef<HTMLFormElement>(null!);
    const inputRef = useRef<HTMLInputElement>(null!);

    async function Profile(){
        const res= await axios.get<User>("http://localhost:3000/users/show/"+String(props.id)+"/1")
        setUser(res.data); 
        
        
    }

    async function getbuntsuid(){
        if(User?.relation==1){
        const res= await axios.get<{id:number}|{partner_id:number}>("http://localhost:3000/buntsuletters/fromprofile/"+"1/"+String(User.id))
        setBuntsuid(res.data);
        }
    }

    async function apply(){
        const res=await axios.get("http://localhost:3000/friendapplies/create/"+"1/"+String(User?.id))
        Profile();
        
    }

    const deleteform=()=>{
        sendformRef.current.reset();
        setisformvisible(!isformvisible);
        setEditimage(User?.avatar);
    }

    const sendform= async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        

        const submit_data=new FormData(e.target as HTMLFormElement);
        
        try {
           
            await axios.post('http://localhost:3000/users/update/'+'1', submit_data)
      
           
      
            
            window.location.reload();
          } catch (error) {
            console.error(error);
          }



    }


    const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files) return;
    
            
            setEditimage(window.URL.createObjectURL(e.target.files[0]))
            
        };





    useEffect(()=>{
        Profile();
        
    },[])

    useEffect(()=>{
        getbuntsuid();
        setEditimage(User?.avatar);
    },[User])

    return(
        <>
        <div className="m-5">
                <div className="flex w-full">
                    <img className="w-44 h-44 object-cover rounded-full object-top" src={User?.avatar}></img>
                    <div className="flex-col ml-2">
                        <div className="mt-5  ml-5 text-5xl text-slate-600 font-bold">{User?.nickname}</div>
                        {User?.id==1 && <button onClick={()=>{setisformvisible(true)}} className="ml-5 bg-gray-900 rounded text-white h-10 px-2 " >編集</button>}
                        {User?.relation==0 && User?.id!=1 && <button onClick={apply} className="bg-gray-900 rounded text-white h-10 px-2  ml-5">フレンド申請</button>}
                        {User?.relation==1 && 'id' in Buntsuid && <div className="flex flex-col">
                                                    <div className="bg-teal-100 border border-teal-300 rounded text-center w-3/5 ml-5 mt-1">友達</div>
                                                    <Link href={"/buntsu/"+String(Buntsuid.id)}><button className="ml-5 mt-3 bg-gray-900 rounded text-white h-10 px-2">文通を開く</button></Link>
                                              </div>}
                        {User?.relation==1 && 'partner_id' in Buntsuid && <div className="flex flex-col">
                                                    <div className="bg-teal-100 border border-teal-300 rounded text-center w-3/5 ml-5 mt-1">友達</div>
                                                    <Link href={"/buntsu/start/"+String(Buntsuid.partner_id)}><button className="ml-5 mt-3 bg-gray-900 rounded text-white h-10 px-2">文通を開く</button></Link>
                                              </div>}                      
                        {User?.relation==2 && <div className="bg-amber-200 border border-amber-400 rounded text-center ml-5">フレンド申請中</div>}
                        {User?.relation==3 && <div className="bg-amber-100 border border-amber-500 rounded text-center ml-5 w-3/4">フレンド申請されています</div>}
                    </div>
                </div>
                <div className="mt-7 ml-3">
                    {User?.description}
                </div>
        </div>
        <div  className={(isformvisible ? "block " : "hidden ")+'fixed w-full h-full  top-0  px-4 z-100 bg-white  overflow-scroll'}>
                
            <form ref={sendformRef} onSubmit={sendform}>

                <button className='fixed top-5 left-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={deleteform}>
                        戻る
                </button>

                <button type="submit" className='fixed top-5 right-3 text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    更新
                </button>

                <input ref={inputRef} name="avatar"  className='mx-auto hidden' type="file"  accept="image/*" onChange={(e)=>{ onFileInputChange(e); }}></input>
                <div className="flex flex-col">
                    <img src={Editimage} onClick={()=>{inputRef.current.click();}}  className="mt-20 mx-auto w-40 h-40 object-cover object-top rounded-full"></img>
                    <label>名前<input type="text" name="nickname" defaultValue={User?.nickname} className="ml-16 w-4/6 mt-10 text-sky-500"></input></label>
                    <label className="mt-10">自己紹介<textarea name="description" defaultValue={User?.description} className="ml-8 w-2/3 h-32 text-sky-500  align-top"></textarea></label>
                </div>
            </form>
        </div>
        </>
    )
}