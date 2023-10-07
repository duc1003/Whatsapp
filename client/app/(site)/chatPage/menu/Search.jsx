import React from 'react'

import { Box, styled} from '@mui/material'
import { Search as SearchIcon  } from '@mui/icons-material';
import { InputBase } from '@mui/material';
const SearchPage = () => {

    const Component = styled(Box)`
        height:45px;
        background-color:#fff;
        border-bottom: 1px solid #f2f2f2;
        display:flex;
        align-items: center;
    `
  return (
    <Component>
        <Box className=" bg-slate-200 relative  mx-3 w-[100%] rounded-xl flex items-center">
            <Box className="absolute h-[100%] px-2 py-1 text-[#878787]">
                <SearchIcon />
            </Box>
            <InputBase
                placeholder='Search or start new chats'
                className='w-[100%] p-4 h-4 pl-16 text-sm'
            />
        </Box>
    </Component>
  )
}

export default SearchPage