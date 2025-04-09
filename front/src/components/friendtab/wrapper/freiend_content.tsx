'use client'
import { createContext, useState } from 'react';
import { useContext } from 'react';
import Friend_tab from './friend_tab';



import Apply_list from '../contents/apply_list';
import Friend_list from '../contents/friend_list';


export const TabContext = createContext(
    {} as {
      tabIndex: number;
      setTabIndex: React.Dispatch<React.SetStateAction<number>>;
    },
  );

export default function () {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <TabContext.Provider value={{ tabIndex, setTabIndex }}>
       <Friend_tab />
      </TabContext.Provider>
      {tabIndex === 0 && <Friend_list />}
      {tabIndex === 1 && <Apply_list />}
    </>
  );
}