"use client"
import Image from 'next/image'
import Login from './auth/login'
import ChatPage from './chatPage/ChatPage'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider';

import { AppBar, Toolbar, styled, Box } from '@mui/material';
const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;



export default function Home() {
  const { account, setAccount } = useContext(AccountContext);
  return (
    <>
      {
         account ?
        
          <>
          <Component>
            <Header>
              <Toolbar></Toolbar>
            </Header>
            <ChatPage />
          </Component>
          </>
          :
          <>
            <Login />
          </>
      }
    </>


  )
}


