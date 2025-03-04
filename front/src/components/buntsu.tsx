import Mediaoutput from "@/utils/Mediaotput";
import { Buntsu } from "../../types/buntsu";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";


export default function Showbuntsu(){
    const [Isreplyvisible,setIsreplyvisible]=useState<boolean>(false);
    const [Isformvisible,setIsformvisible]=useState<boolean>(false);
    const [PostImages, setPostImages] = useState<{url: string, type: string}[]>([]);
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


    function Formvisiblechange(){
        setIsformvisible(!Isformvisible);
    }


    const deleteform=()=>{
    
        }
    
        const sendform=(e: React.FormEvent<HTMLFormElement>)=>{
            router.replace("/")
        }

    

    async function Getbuntsu(){
        let buntsu:Buntsu;

        if (buntsu.next_id==null && buntsu.author_name==){
            setIsreplyvisible(!Isreplyvisible);
        }

        return(
            <>
            <div className="flex overflow-x-auto">
            {buntsu.media.map(url=>(
                <>
                {Mediaoutput(url)}
                </>
            ))}
            </div>
            <div className="flex">
                <img src={buntsu.author_avatar}></img>
                <div>{buntsu.author_name}</div>
            </div><br/>
            <div>
                {buntsu.description}
            </div>
            
            </>
        )
    }

    return(
        <>
        <div className="m-10 w-full h-full overflow-y-auto">
            {Showbuntsu()}
        </div>
        <button className="fixed top-1/4 right-2">次</button>
        <button className="fixed top-1/4 left-2">前</button>
        <button onClick={()=>{onPostButtonClick(); }} className={(Isreplyvisible ? "hidden" : "block")+"fixed bottom-2 right-2"}>返事</button>


        <form  ref={sendformRef}>
        <input  ref={inputRef} name="mediafiles[]" hidden type="file" multiple accept='image/*, video/*' onChange={()=>{onFileInputChange; Formvisiblechange();}}></input>
        <div className={(Isformvisible ? "hidden" : "block")+'fixed w-full h-screen'}>
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

                <textarea name="text"></textarea>
        </div>


        </form>



        </>
    ) 
}