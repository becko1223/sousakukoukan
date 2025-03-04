import { Excangedletter_for_list } from "../../../../types/exchangedletter_for_list"


export default function Freekoukankontet_kiroku(){
    async function Listdata(){
        let list: Excangedletter_for_list[];
        return(
            <>
            <ul>
            {
                list.map(item=>(
                    <>
                    <li>
                    <div className="flex h-20 w-full">
                        <img src={item.partner_avatar} className="w-10"></img>
                        <div className="flex-col">
                            <div>{item.partner_name}</div>
                            <div className=" truncate">{item.description}</div>
                        </div>
                    </div>
                    </li>
                    </>
                ))
            }
            </ul>
            </>
        )
    }


    return(
        <>
        {Listdata()}
        </>
    )
}