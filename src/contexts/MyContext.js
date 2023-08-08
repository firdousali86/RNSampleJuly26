import React, {createContext, useContext, useState} from 'react';

const MyContext = createContext();

export function MyContextProvider({children}) {
  const [data, setData] = useState({city: 'London'});

  const updateData = newdata => {
    setData(newdata);
  };

  return (
    <MyContext.Provider value={{data, updateData}}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
