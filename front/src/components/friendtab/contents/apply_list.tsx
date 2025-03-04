
import { User_for_list } from "../../../../types/user_for_list"



export default function Apply_list(){
    async function Getfriendlist(){
        let applylist: User_for_list[];

        return(
            <>
            <div className="flex-row">
            {applylist.map(friend=>(
                <>
                <div className="flex">
                    <img src={friend.avatar}></img>
                    <div>{friend.name}</div>
                    <button>承認</button>
                </div>
                </>
            ))}
            </div>
            
            </>
        )
    }





    return(
        <>
        {Apply_list}
        </>
    )
}