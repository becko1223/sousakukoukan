import { useContext } from "react"

import { TabContext } from "./exchangedlettercontent"

export default function Exchangedletter_tab() {
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