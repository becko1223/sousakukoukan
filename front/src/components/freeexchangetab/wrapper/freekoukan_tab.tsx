import { useContext } from "react"

import { TabContext } from "./freekoukancontent"

export default function Freekoukan_tab() {
    const  {tabIndex, setTabIndex } = useContext(TabContext)
    return (
      <>
      <div className="flex justify-center">
        <div onClick={() =>setTabIndex(0)} className={`tab ${tabIndex === 0 && "selected"}`}>tab1</div>
        <div onClick={() =>setTabIndex(1)} className={`tab ${tabIndex === 1 && "selected"}`}>tab2</div>
        
      </div>
      </>
    )
  }