import React, {createContext, useContext, useState, useEffect} from 'react';

const MyContext = createContext();

export function MyContextProvider({children, value}) {
  const [data, setData] = useState({city: value});

  useEffect(() => {
    setData({city: value});
  }, [value]);

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
