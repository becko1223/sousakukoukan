'use client'
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';


export default function Newkoukan(){
    const [PostImages, setPostImages] = useState<{url: string, type: string}[]>([]);
    const [isformvisible,setisformvisible]=useState<boolean>(false);
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

    const isformvisiblechange=()=>{
        isformvisible ? setisformvisible(false) : setisformvisible(true);
    }

    const deleteform=()=>{
        sendformRef.current.reset();
        setisformvisible(!isformvisible);
    }

    const sendform= async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        //let elements=(e.target as HTMLFormElement).elements
        

        const submit_data=new FormData(e.target as HTMLFormElement);
        /*
        Array.from((elements["mediafiles"].files) as FileList).map((media)=>{
            submit_data.append("media",media);
        });
        submit_data.append("user_id","1");
        submit_data.append("description",elements["description"]);
        submit_data.append("genre",elements["genre"]);
        (elements["expected_genre[]"] as string[]).map((expected_genre)=>{
            submit_data.append("genres",expected_genre)
        }) 
        */
        try {
           
            await axios.post('http://localhost:3000/exchangeletters/create', submit_data)
      
           
      
            
            window.location.reload();
          } catch (error) {
            console.error(error);
          }



    }

    

    return(
        <>
        <div className=" text-center mx-10 text-4xl font-bold text-gray-500 mt-32 mb-6">
            つくったものを共有してみましょう
        </div>
        <Image src="/イラスト共有しましょう.png" alt='' width={900} height={900} className='mr-10'/>
        <form onSubmit={sendform} ref={sendformRef}>
            <input hidden name="user_id" defaultValue="1"></input>
            <input ref={inputRef} name="media[]"  className='mx-auto hidden' type="file" multiple accept="image/*,video/*" onChange={(e)=>{console.log('changeevent'); isformvisiblechange();  onFileInputChange(e); console.log(isformvisible);}}></input>
            <button type='button' className="block h-12 mt-16 mb-64  rounded-md  px-6 font-medium text-neutral-50 transition active:scale-110 bg-blue-500   mx-auto " onClick={()=>{onPostButtonClick();}}>
                手紙を送る
            </button>

            {/* 入力画面固定表示 */}
            <div  className={(isformvisible ? "block " : "hidden ")+'fixed w-full h-full  top-0  px-4 z-100 bg-white  overflow-scroll'}>
                <div className='flex flex-col gap-10'>

                <div  className='fixed top-0 w-full h-20 bg-white'></div>
                <button type='button' className='fixed top-5 left-3 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={deleteform}>
                    削除
                </button>

                <button type="submit" className='fixed top-5 right-3 text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    送信
                </button>

                


                <ul className='flex  overflow-x-auto mt-20 '>
                    {
                        PostImages.map(fileObject=>(
                            
                            <li className='flex-none w-4/5 h-auto' key={fileObject.url}>
                            {/^image\/.+$/.test(fileObject.type) && <img src={fileObject.url}></img>}
                            {/^video\/.+$/.test(fileObject.type) && <video controls src={fileObject.url}></video>}
                            </li>
                            
                        ))
                    }
                </ul>
                <div className='border-b-2 border-t-2 pt-2  pb-4'>
                <textarea placeholder='説明文' name='description' className='w-full h-20 overflow-y-auto  '></textarea>
                </div>
                
                <div className='border-b-2 pb-4'>
                <fieldset className='h-40 overflow-y-auto '>
                <legend className='mb-4 font-bold text-zinc-500'>作品ジャンル</legend>
                <div className='flex flex-col gap-2 '>
                <label><input type='radio' name='genre' value="digitalillust" required/>デジタルイラスト</label>
                <label><input type='radio' name='genre' value="analogillust"/>アナログイラスト</label>
                <label><input type='radio' name='genre' value="CG"/>CG</label>
                <label><input type='radio' name='genre' value="movie"/>映像</label>
                <label><input type='radio' name='genre' value="photo"/>写真</label>
                <label><input type='radio' name='genre' value="music"/>音楽</label>
                <label><input type='radio' name='genre' value="literature"/>字</label>
                <label><input type='radio' name='genre' value="3D"/>立体物</label>
                <label><input type='radio' name='genre' value="cook"/>料理</label>
                <label><input type='radio' name='genre' value="others"/>その他</label>
                </div>
                </fieldset>
                </div>

                <fieldset className='h-40 overflow-y-auto'>
                <legend className='mb-4 font-bold text-zinc-500'>交換希望ジャンル</legend>
                <div className='flex flex-col gap-2 '>
                <label><input type='checkbox' name='expected_genre[]' value='all'/>全て</label>
                <label><input type='checkbox' name='expected_genre[]' value="digitalillust"/>デジタルイラスト</label>
                <label><input type='checkbox' name='expected_genre[]' value="analogillust"/>アナログイラスト</label>
                <label><input type='checkbox' name='expected_genre[]' value="CG"/>CG</label>
                <label><input type='checkbox' name='expected_genre[]' value="movie"/>映像</label>
                <label><input type='checkbox' name='expected_genre[]' value="photo"/>写真</label>
                <label><input type='checkbox' name='expected_genre[]' value="music"/>音楽</label>
                <label><input type='checkbox' name='expected_genre[]' value="literature"/>字</label>
                <label><input type='checkbox' name='expected_genre[]' value="3D"/>立体物</label>
                <label><input type='checkbox' name='expected_genre[]' value="cook"/>料理</label>
                <label><input type='checkbox' name='expected_genre[]' value="others"/>その他</label>
                </div>
                </fieldset>
                
                <div className='w-full h-96'></div>

                </div>
            </div>
        </form>
        </>
    )
}