'use client'
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import ShowExchangedletter from '@/components/exchangedletter';
import axios from 'axios';
import Image from 'next/image';

export default function Exchanged(props:{letter_id:number}){
    const [islettervisible,setislettervisible]=useState<boolean>(false);
    const [isformvisible,setisformvisible]=useState<boolean>(false);
    const [id,setid]=useState<number>();
    const router=useRouter();

    

    function islettervisiblechange(){
        setislettervisible(!islettervisible);
    }

    function isformvisiblechange(){
        setisformvisible(!isformvisible);
    }

    const sendform=async (e: React.FormEvent<HTMLFormElement>)=>{
            //router.replace("/")
            e.preventDefault();
            const submit_data=new FormData(e.target as HTMLFormElement);

            try {
           
                await axios.post('http://localhost:3000/replies/create', submit_data)
          
               
          
                
                window.location.reload();
              } catch (error) {
                console.error(error);
              }
    
    }

    return(
        <>
        <div className='text-center mx-10 text-4xl font-bold text-gray-500 mt-32 mb-16'>手紙が交換されました</div>
        <Image src='/ポスト.png' alt="ポスト画像" width={500} height={500}/>
        <div className='w-full flex justify-center mt-20'>
            <button onClick={islettervisiblechange} className='bg-black text-xl text-white p-2 rounded mb-48'>開ける</button>
        </div>

        {/* 手紙固定表示*/}
        <div className={(islettervisible ? "block " : "hidden ")+'fixed w-full px-3 pb-64  h-screen top-16 left-0 bg-gray-50 overflow-y-auto'}>
            <div className='h-12'></div>
            <div className="bg-stone-100 shadow-lg p-4">
            <ShowExchangedletter  id={props.letter_id}/>
            </div>
            <button className='fixed bottom-20 right-5 bg-black text-white text-xl p-2 rounded' onClick={isformvisiblechange}>返事</button>
            <button className='fixed top-20 left-5' onClick={islettervisiblechange}><img className="w-10 bg-white bg-opacity-65 rounded-full" src="https://icongr.am/feather/arrow-left.svg?size=128&color=currentColor"></img></button>
            
            {/* フォーム表示 */}
            <div className={(isformvisible ? "block " : "hidden ")+'fixed w-full h-screen bg-[#00000066] left-0 top-0 '}>
                <form onSubmit={sendform}>
                    <div className='w-full px-10 h-96 mt-24'>
                        <textarea name='text' className=' overflow-y-auto w-full h-full bg-gray-200 opacity-80 rounded'></textarea>
                    </div>
                    <input type='hidden' name="toletter_id" defaultValue={String(props.letter_id)}></input>
                    <input type='hidden' name="user_id" defaultValue="1"></input>
                    <button type='submit'  className='fixed text-gray-50 top-7 right-5 bg-blue-500 p-3 text-lg rounded-lg'>送信</button>
                    <button type='button' onClick={isformvisiblechange} className='fixed text-gray-50 top-8 left-5 invert'><img className="w-10" src="https://icongr.am/feather/arrow-left.svg?size=128&color=currentColor"></img></button>
                </form>
                
            </div>
        </div>
        </>
    )
}