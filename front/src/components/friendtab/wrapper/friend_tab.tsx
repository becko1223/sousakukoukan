import { useContext } from "react"

import { TabContext } from "./freiend_content"

export default function Friend_tab() {
    const  {tabIndex, setTabIndex } = useContext(TabContext)
    return (
      <>
      <div className="flex space-x-8 justify-center z-10">
        <div onClick={() =>setTabIndex(0)} className={`w-52 py-4 px-6 text-center font-bold text-gray-600 ${tabIndex === 0 &&  "py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2  border-blue-500"}`}>友達</div>
        <div onClick={() =>setTabIndex(1)} className={`w-52 py-4 px-6 text-center font-bold text-gray-600 ${tabIndex === 1 && "py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2  border-blue-500"}`}>友達リクエスト</div>
        
      </div>
      </>
    )
  }