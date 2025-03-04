import { use } from "react";
import { User } from "../../types/user"

export default function Userprofile(){
    async function Profile(){
        let user: User;

        return(
            <>
            <div>
                <div className="flex w-full">
                    <img src={user.avatar}></img>
                    <div className="flex-col ">
                        <div>{user.name}</div>
                        {user.relation==0 && <></>}
                        {user.relation==0 && <></>}
                        {user.relation==0 && <></>}
                        {user.relation==0 && <></>}
                    </div>
                </div>
            </div>
            </>
        )
    }

    return(
        <>
        </>
    )
}