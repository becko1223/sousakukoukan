import {User} from  '../../../../types/user'
import Exchanged from './koukangamen/exchanged';
import Newkoukan from './koukangamen/newkoukan';
import Sendcompleted from './koukangamen/sendcompleted';

export default function Freekoukancontent_koukan(){
    async function Userdata(){
        let user: User;
        if(user.status==0){
            return(
                <>
                <Newkoukan/>
                </>
            )
        }

        else if(user.status==1){
            return(
                <>
                <Sendcompleted></Sendcompleted>
                </>
            )
        }

        else if(user.status==2){
            return(
                <>
                <Exchanged></Exchanged>
                </>
            )
        }

    }


    return(
        <>
        {Userdata();}
        </>
    )
}