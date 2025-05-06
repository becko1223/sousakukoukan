'use client'
import Mediaoutput from "@/utils/Mediaotput";
import { Buntsu } from "../../types/buntsu";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


import Link from 'next/link'


export default function Showbuntsu(props:{id:number}){
    const [Isreplyvisible,setIsreplyvisible]=useState<boolean>(false);
    const [Isformvisible,setIsformvisible]=useState<boolean>(false);
    const [PostImages, setPostImages] = useState<{url: string, type: string}[]>([]);
    const [Buntsu,setBuntsu]=useState<Buntsu>();
    const [Blobs,setBlobs]=useState<Blob[]>([]);
    const inputRef = useRef<HTMLInputElement>(null!);
    const sendformRef = useRef<HTMLFormElement>(null!);
    const router=useRouter();

    const onPostButtonClick = () => {
        // useRef<HTMLInputElement>のcurrent要素を呼び出し、ファイル選択画面を表示
        inputRef.current.click();
    };

    const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const fileObjects: {url: string, type: string}[]=[];

        Array.from(e.target.files).map((fileObject)=>{
            fileObjects.push({url:window.URL.createObjectURL(fileObject), type:fileObject.type});
        });
        setPostImages(fileObjects);
        console.log(fileObjects);
    };


    function Formvisiblechange(){
        setIsformvisible(!Isformvisible);
    }


    const deleteform=()=>{
        sendformRef.current.reset();
        setIsformvisible(!Isformvisible);
        }
    
    const sendform=async(e: React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            const submit_data=new FormData(e.target as HTMLFormElement);

            try {
           
                const res = await axios.post('http://localhost:3000/buntsuletters/create', submit_data)
          
               
          
                
                router.push("/buntsu/"+String(res.data.id));
              } catch (error) {
                console.error(error);
              }
            
        }

    

    async function Getbuntsu(){
        const res= await axios.get<Buntsu>('http://localhost:3000/buntsuletters/show/'+String(props.id))
        setBuntsu(res.data);
        console.log(res.data);

        if (res.data.next_id==null && res.data.author_name!="kiri1"){
            setIsreplyvisible(true);
        }
        else{
            setIsreplyvisible(false);
        }

        
    }


    useEffect(()=>{
        Getbuntsu();
    },[])

   

    return(
        <>
        <div className="mx-2 mt-16 w-full h-full overflow-y-auto bg-stone-100 shadow-lg p-5">
            <Link href={"/userprofile/"+Buntsu?.author_id}>
            <div className="flex w-full h-20">
                <img className="w-20 object-cover rounded-full object-top" src={Buntsu?.author_avatar}></img>
                <div>{Buntsu?.author_name}</div>
            </div></Link><br/>
            <div className="flex overflow-x-auto">
            {Buntsu?.media.map(url=>(
            
            <div className='flex-none w-4/5 h-auto' >
            
                
                  <img src={url} onError={(e)=>{(e.target as HTMLImageElement).style.display="none"; const video=document.createElement("video"); video.src=url; video.controls=true; (e.target as HTMLImageElement).parentElement?.appendChild(video)}}></img>
    
            </div>
            ))}
    
    
            </div>
            <br/>
            <div>
                {Buntsu?.description}
            </div>
        </div>
        {(Buntsu?.next_id!=undefined) && <Link href={"/buntsu/"+Buntsu?.next_id} className="font-bold fixed top-16 right-2  overflow-hidden rounded-md bg-neutral-700 px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">次の手紙</Link>}
        {(Buntsu?.previous_id!=undefined) && <Link href={"/buntsu/"+Buntsu?.previous_id} className="font-bold fixed top-16 left-2  overflow-hidden rounded-md bg-neutral-700 px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110">前の手紙</Link>}
        <button onClick={()=>{onPostButtonClick(); }} className={(Isreplyvisible ? "block " : "hidden ")+"fixed bottom-24 right-5 bg-black text-white text-xl p-2 rounded"}>返事</button>


        <form  ref={sendformRef} onSubmit={sendform}>
        <input type="hidden" name="author_id" defaultValue={1}></input>
        <input type="hidden" name="partner_id" defaultValue={Buntsu?.author_id}></input>
        <input type="hidden" name="previousletter_id" defaultValue={Buntsu?.id}></input>
        <input  ref={inputRef} name="media" hidden type="file" multiple accept='image/*, video/*' onChange={(e)=>{onFileInputChange(e); Formvisiblechange();}}></input>
        <div className={(Isformvisible ? "block " : "hidden ")+'fixed w-full h-full bg-white top-0 px-5'}>
                <button type="button" className='fixed top-5 left-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={deleteform}>
                    削除
                </button>

                <button type="submit" className='fixed top-5 right-3 text-white bg-blue-500  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    送信
                </button>


                <ul className='flex overflow-x-auto mt-24 '>
                    {
                        PostImages.map(fileObject=>(
                            <>
                            <li className='flex-none w-4/5 h-auto'>
                            {/^image\/.+$/.test(fileObject.type) && <img src={fileObject.url}></img>}
                            {/^video\/.+$/.test(fileObject.type) && <video controls src={fileObject.url}></video>}
                            </li>
                            </>
                        ))
                    }
                </ul>

                <textarea name="text" placeholder="文章" className=" mt-20 w-full bg-slate-50 h-40"></textarea>
        </div>


        </form>



        </>
    ) 
}