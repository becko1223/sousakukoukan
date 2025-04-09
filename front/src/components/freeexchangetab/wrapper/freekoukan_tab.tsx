import { useContext } from "react"

import { TabContext } from "./freekoukancontent"

export default function Freekoukan_tab() {
    const  {tabIndex, setTabIndex } = useContext(TabContext)
    return (
      <>
      <div className="fixed top-0 w-full bg-white flex space-x-10 justify-center ">
        <button onClick={() =>setTabIndex(0)} className={`w-52 font-bold text-gray-600 ${tabIndex === 0 && " py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2  border-blue-500"}`}>フリー交換</button>
        <button onClick={() =>setTabIndex(1)} className={`w-52 font-bold text-gray-600 ${tabIndex === 1 && " py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2  border-blue-500"}`}>記録</button>
        
      </div>
      </>
    )
  }