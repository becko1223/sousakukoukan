'use client'
import Freiend_content from "@/components/friendtab/wrapper/freiend_content";
import { useContext, useEffect } from "react";
import { FooterContext } from "../layout";



export default function friend(){
    const  {FooterIndex, setFooterIndex } = useContext(FooterContext)
    
    useEffect(()=>{
        setFooterIndex(2);
    },[])
    return(
        <>
        <Freiend_content/>
        </>
    )
}