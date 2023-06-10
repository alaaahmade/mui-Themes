/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Nav from '../nav/Nav';
import Title from '../Title/Title';
import Repos from '../Repos/Repos';

function Page({ setModeState }) {
  const [title, setTitle] = useState('');

  return (
    <Box sx={{
      bgcolor: 'primary.main',
    }}
    >
      <Nav setModeState={setModeState} title={title} setTitle={setTitle} />
      <Title content="" level={4} />
      <Repos searchInput={title} />
    </Box>
  );
}

export default Page;
