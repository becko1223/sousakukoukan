import { useContext } from 'react';
import Exchangedletter_tab from './exchangedletter_tab';
import My_letter from '../contents/my-letter';
import Partner_letter from '../contents/partner_letter';

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
       <Exchangedletter_tab />
      </TabContext.Provider>
      {tabIndex === 0 && <Partner_letter id= />}
      {tabIndex === 1 && <My_letter id= />}
    </>
  );
}