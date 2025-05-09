import { useEffect, useState } from 'react';
import {User} from  '../../../../types/user'
import Exchanged from './koukangamen/exchanged';
import Newkoukan from './koukangamen/newkoukan';
import Sendcompleted from './koukangamen/sendcompleted';
import axios from 'axios';

export default function Freekoukancontent_koukan(){
    const [Status, setStatus] = useState<number>(3);
    const [Letter_id,setLetter_id]=useState<number>(0);

    async function Userdata(){
        try{
            const res= await axios.get<{status:number,letter_id:number}>('http://localhost:3000/users/status/1');
            setStatus(res.data.status);
            setLetter_id(res.data.letter_id)
            console.log("status catched");
            
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        Userdata();
    },[])


        if(Status==0){
            return(
                <>
                <Newkoukan/>
                </>
            )
        }

        else if(Status==1){
            return(
                <>
                <Sendcompleted></Sendcompleted>
                </>
            )
        }

        else if(Status==2){
            return(
                <>
                <Exchanged letter_id={Letter_id}></Exchanged>
                </>
            )
        }

        else{
            return(
                <></>
            )
        }


     

    }

