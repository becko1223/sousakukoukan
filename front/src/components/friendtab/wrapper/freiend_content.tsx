import { useContext } from 'react';
import Friend_tab from './friend_tab';


import { createContext, useState } from 'react';


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
      {tabIndex === 0 && <Koukan />}
      {tabIndex === 1 && <Kiroku />}
    </>
  );
}