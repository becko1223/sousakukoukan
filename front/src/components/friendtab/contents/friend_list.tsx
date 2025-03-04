
import { User_for_list } from "../../../../types/user_for_list"



export default function Friend_list(){
    async function Getfriendlist(){
        let friendlist: User_for_list[];

        return(
            <>
            <div className="flex-row">
            {friendlist.map(friend=>(
                <>
                <div className="flex">
                    <img src={friend.avatar}></img>
                    <div>{friend.name}</div>
                </div>
                </>
            ))}
            </div>
            
            </>
        )
    }





    return(
        <>
        {Friend_list}
        </>
    )
}