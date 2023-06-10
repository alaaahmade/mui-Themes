import React, { Component, useState } from 'react'
import Nav from '../nav/Nav';
import Title from '../Title/Title';
import Repos from '../Repos/Repos';
import { Box } from '@mui/material';


const Page = ({modeState, setModeState}) => {

  const [title, setTitle] = useState('')


    return (
      <Box sx={{
        bgcolor: 'primary.main'
      }} >
        <Nav setModeState={setModeState} title={title} setTitle={setTitle} />
        <Title content={''} level={4}/>
        <Repos searchInput={title}/>
      </Box>
    )
  }


export default Page