/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
// const Title = ({level, content, className}) => createElement(`h${level}`, {className}, content)
function Title({ level }) {
  return (
    <Typography
      variant={`h${level}`}
      sx={{
        position: 'absolute',
        top: '79px',
        width: '100%',
        height: '1px',
        pl: '400px',
        color: '#fff',
        backgroundColor: 'primary.border',
      }}
    />
  );
}

export default Title;
