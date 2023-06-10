import { Typography } from '@mui/material';
import { createElement } from "react";
// const Title = ({level, content, className}) => createElement(`h${level}`, {className}, content)
const Title = ({level, content}) => {

  return(
    <Typography variant={`h${level}`}
    sx={{
      position: 'absolute',
      top: '79px',
      width: '100%',
      height: '1px',
      pl: '400px',
      color: '#fff',
      backgroundColor: 'primary.border'
    }}
    ></Typography>
  )
  }

export default Title