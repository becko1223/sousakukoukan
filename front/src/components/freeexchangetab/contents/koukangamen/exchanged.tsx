import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import ShowExchangedletter from '@/components/exchangedletter';

export default function Exchanged(){
    const [islettervisible,setislettervisible]=useState<boolean>(false);
    const [isformvisible,setisformvisible]=useState<boolean>(false);
    const router=useRouter();


    function islettervisiblechange(){
        setislettervisible(!islettervisible);
    }

    function isformvisiblechange(){
        setisformvisible(!isformvisible);
    }

    const sendform=(e: React.FormEvent<HTMLFormElement>)=>{
            router.replace("/")
        }

    return(
        <>
        <div className='w-full mt-96 text-lg text-center'>手紙が交換されました</div>
        <div className='w-full flex justify-center mt-20'>
            <button>あける</button>
        </div>

        {/* 手紙固定表示*/}
        <div className={(islettervisible ? "hidden" : "block")+'fixed w-full h-screen'}>
            <ShowExchangedletter  />
            <button className='fixed bottom-10 right-5' onClick={isformvisiblechange}>返事</button>
            <button className='fixed bottom-10 left-5' onClick={islettervisiblechange}>戻る</button>
            
            {/* フォーム表示 */}
            <div className={(isformvisible ? "hidden" : "block")+'fixed w-full h-screen bg-black opacity-50'}>
                <form>
                    <div className='fixed overflow-y-auto mx-10 top-10 '>
                        <textarea></textarea>
                    </div>
                    <button type='submit' className='fixed bottom-10 right-5'>送信</button>
                    <button onClick={isformvisiblechange} className='fixed bottom-10 left-5'>戻る</button>
                </form>
                
            </div>
        </div>
        </>
    )
}