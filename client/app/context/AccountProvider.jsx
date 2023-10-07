"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';



export const AccountContext = createContext(undefined);

function AccountProvider({ children }) {
  const [account, setAccount] = useState(false); // Điều này cũng có thể thay đổi thành kiểu dữ liệu cụ thể của bạn
  
  
  return (
    <AccountContext.Provider value={{
      account,
      setAccount
    }}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountProvider;
