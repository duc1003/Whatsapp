
import React from 'react'

import { useState } from 'react';
import {MoreVert  } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';

const HeaderMenu = () => {

    const [open, setOpen] = useState(null);

    const handleOpenMeny = (e)=>{
        setOpen(e.currentTarget);
    }

    const handleClose = () =>{
        setOpen(null);
    }
  return (
    <>
     <MoreVert onClick={handleOpenMeny}/>
     <Menu
        keepMounted
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default HeaderMenu