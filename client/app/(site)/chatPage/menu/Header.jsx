import React from 'react'

import { useContext } from 'react'
import { AccountContext } from '@/app/context/AccountProvider'
import Image from 'next/image';
import { Box ,styled } from '@mui/material';
import {Chat as Message,MoreVert  } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu'

const Wrapper = styled(Box)`
    margin-left:auto;
    & > * {
        margin-left:20px;
        color:#000;
    }
    & :first-of-type {
        font-size:25px;
        margin-right:8px;
        margin-top: 4px
    }
`
function HeaderPage() {
    const {account} = useContext(AccountContext);
    console.log(account.photoURL);
    //:{ email , displayName , photoURL}

    
  return (
    <>
        <Box className="h-[60px] bg-slate-300 px-3 py-5 flex items-center">
            <Image 
            src={account.photoURL} 
            alt='avatar' 
            width={40} 
            height={40} 
            className='rounded-[50%]'
            />
            <Wrapper >
                <Message  />
                <HeaderMenu  />
            </Wrapper>
        </Box>
    </>
  )
}

export default HeaderPage