'use client'
import Buntsulist from "@/components/buntsu_list";
import { useContext, useEffect } from "react";
import { FooterContext } from "../layout";


export default function buntsulistpage(){
    const  {FooterIndex, setFooterIndex } = useContext(FooterContext)
        

        useEffect(()=>{
            setFooterIndex(1);
        },[])

    return(
        <>
        <Buntsulist/>
        </>
    )
}