import { Exchangedletter } from "../../types/exchangedlettertypes";

async function Mediaoutput(url:string){
    const response = await fetch(url);
    const blob = await response.blob();
    const objUrl = window.URL.createObjectURL(blob);
    if(/^image\/\*$/.test(blob.type)){
        return(
            <>
            <img src={objUrl} className="flex-none w-4/5 h-auto"></img>
            </>
        )
    }

    else if(/^video\/\*$/.test(blob.type)){
        return(
            <>
            <video src={objUrl} className="flex-none w-4/5 h-auto"></video>
            </>
        )
    }
}

export default function ShowExchangedletter(data: Exchangedletter){
    return(
        <>
        <div className="flex overflow-x-auto">
            {data.media.map(url=>(
                <>
                    {Mediaoutput(url)}
                </>
            ))}
        </div><br/>
        <div className="flex h-20">
            <img src={data.author.avatar}></img>
            <div>{data.author.name}</div>
        </div><br/>
        <div className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">{data.genre}</div><br/>
        <div className="w-full mx-10">{data.description}</div>
        </>
    )

}