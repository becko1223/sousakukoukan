import Image from "next/image";


export default function Sendcompleted(){
    return(
        <>
        <p className=" text-center mx-10 text-4xl font-bold text-gray-500  mt-20 mb-10">
            手紙を送りました。<br />
            交換されるまでお待ちください。
            
        </p>
        <Image src="/おくりました.png" alt="" width={500} height={500} />
        </>
    )

}