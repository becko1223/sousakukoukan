
import ShowExchangedletter from "@/components/exchangedletter";
import { Exchangedletter } from "../../../../../../types/exchangedlettertypes";
import { Reply } from "../../../../../../types/reply";


export default function My_letter(id:number){

    async function Getletter(){
        let letter:Exchangedletter;
        return(
            <>
            <ShowExchangedletter data= />
            </>
        )
    }

    async function Getreply(){
        let reply: Reply;
        return(
            <>
            <div className="flex-row w-full mx-10">
                <div>もらった返事</div>
                <div className="flex">
                    <img src={reply.author.avatar}></img>
                    <div>{reply.author.name}</div>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        {Getletter}
        {Getreply}
        </>
    )
}