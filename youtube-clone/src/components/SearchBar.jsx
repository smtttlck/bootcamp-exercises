import React, { useRef } from 'react'
import {Paper, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {

  const inputRef = useRef()

  const navigate = useNavigate()

  return (
    <Paper 
        component="form" onSubmit={() => {navigate(`/search/${inputRef.current.value}`)}}
        sx={{outline: '1px solid #e3e3e3', borderRadius: '10px'}}
    >
        <input ref={inputRef} className="search-bar" placeholder="Search" />

        <IconButton>
          <SearchIcon />
        </IconButton>

    </Paper>
  )
}
