/* eslint-disable react/prop-types */
import {
  Box, FormControlLabel, Input, Switch,
} from '@mui/material';
import React from 'react';

function Nav({ setTitle, title, setModeState }) {
  const handleMod = () => {
    setModeState((prev) => !prev);
  };

  return (
    <Box sx={{
      bgcolor: 'primary.second',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: (theme) => theme.spacing(2),
    }}
    >
      <Input
        sx={{
          bgcolor: 'primary.second',
          color: 'primary.border',
          height: '30px',
          width: '50%',
          padding: '20px',
          br: '4px',
          outline: '0',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'primary.border',
        }}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Username"
      />
      <FormControlLabel
        sx={{
          color: 'primary.contrastText',
        }}
        control={<Switch defaultChecked onChange={handleMod} />}
        label="Dark mod"
      />
    </Box>
  );
}

export default Nav;
