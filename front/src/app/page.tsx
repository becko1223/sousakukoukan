'use client'
import Freekoukancontent from "@/components/freeexchangetab/wrapper/freekoukancontent";
import { useContext, useEffect } from "react";
import { FooterContext } from "./layout";

export default function Home() {
  const  {FooterIndex, setFooterIndex } = useContext(FooterContext)
      
      useEffect(()=>{
        setFooterIndex(0);
      },[])

      useEffect(()=>{
        console.log(FooterIndex)
      },[FooterIndex])


  return (
    <>
    <Freekoukancontent />
    </>
  )
}
