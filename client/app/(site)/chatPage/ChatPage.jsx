import { Box, Dialog,styled } from '@mui/material'
import React from 'react'

import Menu from './menu/Menu'
import EmptyPage from './chat/Empty'
const ChatPage = () => {

  const Component = styled(Box)`
    display: flex;
  `
  const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px' ,
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden',
    backgroundColor: 'none',
}
  return (
    <Dialog
      open={true}
      PaperProps={{sx: dialogStyle}}
      hideBackdrop={true}
      maxWidth={'md'}
    >
      <Component>
        <Box className="min-w-[450px]">
            <Menu/>
        </Box>
        <Box className="w-[73%] min-w-[300px] h-[100%] border-l-[1px] border-neutral-400">
            <EmptyPage/>
        </Box>
      </Component>
    </Dialog>
    )
}

export default ChatPage