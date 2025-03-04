

export default async function Mediaoutput(url:string){
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