'use client'
import { useContext } from 'react';
import Freekoukan_tab from './freekoukan_tab';
import Freekoukancontent_koukan from '../contents/freekoukancontent_koukan';
import Freekoukankontet_kiroku from '../contents/freekoukancontent_kiroku';

import { createContext, useState } from 'react';


export const TabContext = createContext(
    {} as {
      tabIndex: number;
      setTabIndex: React.Dispatch<React.SetStateAction<number>>;
    },
  );

export default function Freekoukan_content() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <TabContext.Provider value={{ tabIndex, setTabIndex }}>
       <Freekoukan_tab />
      </TabContext.Provider>
      {tabIndex === 0 && <Freekoukancontent_koukan />}
      {tabIndex === 1 && <Freekoukankontet_kiroku />}
    </>
  );
}