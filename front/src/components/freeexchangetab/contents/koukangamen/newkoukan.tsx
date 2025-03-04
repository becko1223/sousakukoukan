import { useRouter } from 'next/router';
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
    };

    const isformvisiblechange=()=>{
        setisformvisible(!isformvisible);
    }

    const deleteform=()=>{

    }

    const sendform=(e: React.FormEvent<HTMLFormElement>)=>{
        router.replace("/")
    }

    

    return(
        <>
        <div className=" text-center mx-10">
            つくったものを共有してみましょう
        </div>
        <form onSubmit={sendform} ref={sendformRef}>
            <input  ref={inputRef} name="mediafiles[]" hidden type="file" multiple accept='image/*, video/*' onChange={onFileInputChange}></input>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4" onClick={()=>{onPostButtonClick(); isformvisiblechange();}}>
                手紙を送る
            </button>

            {/* 入力画面固定表示 */}
            <div  className={(isformvisible ? "hidden" : "block")+'fixed w-full h-screen'}>
                <button className='fixed top-10 left-10' onClick={deleteform}>
                    削除
                </button>

                <button type="submit" className='fixed top-10 right-10'>
                    送信
                </button>


                <ul className='flex overflow-x-auto'>
                    {
                        PostImages.map(fileObject=>(
                            <>
                            <li className='flex-none w-2/5 h-auto'>
                            {/^image\/\*$/.test(fileObject.type) && <img src={fileObject.url}></img>}
                            {/^video\/\*$/.test(fileObject.type) && <video src={fileObject.url}></video>}
                            </li>
                            </>
                        ))
                    }
                </ul>
                <textarea name='description' className='w-full h-20 overflow-y-auto'></textarea>
                <fieldset className='h-20 overflow-y-auto'>
                <input type='radio' name='genre' value="digitalillust">デジタルイラスト</input>
                <input type='radio' name='genre' value="analogillust">アナログイラスト</input>
                <input type='radio' name='genre' value="CG">CG</input>
                <input type='radio' name='genre' value="movie">映像</input>
                <input type='radio' name='genre' value="photo">写真</input>
                <input type='radio' name='genre' value="music">音楽</input>
                <input type='radio' name='genre' value="literature">字</input>
                <input type='radio' name='genre' value="3D">立体物</input>
                <input type='radio' name='genre' value="cook">料理</input>
                <input type='radio' name='genre' value="others">その他</input>
                </fieldset>

                <fieldset className='h-20 overflow-y-auto'>
                <input type='checkbox' name='expected_genre[]' value='all'>全て</input>
                <input type='checkbox' name='expected_genre[]' value="digitalillust">デジタルイラスト</input>
                <input type='checkbox' name='expected_genre[]' value="analogillust">アナログイラスト</input>
                <input type='checkbox' name='expected_genre[]' value="CG">CG</input>
                <input type='checkbox' name='expected_genre[]' value="movie">映像</input>
                <input type='checkbox' name='expected_genre[]' value="photo">写真</input>
                <input type='checkbox' name='expected_genre[]' value="music">音楽</input>
                <input type='checkbox' name='expected_genre[]' value="literature">字</input>
                <input type='checkbox' name='expected_genre[]' value="3D">立体物</input>
                <input type='checkbox' name='expected_genre[]' value="cook">料理</input>
                <input type='checkbox' name='expected_genre[]' value="others">その他</input>
                </fieldset>
                
            </div>
        </form>
        </>
    )
}