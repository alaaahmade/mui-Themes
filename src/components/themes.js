import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#0D1117',
      second: '#161B22',
      border: '#979797',
      contrastText: '#fff',
    },

  },
  spacing: 4,

  components: {
    MuiLink: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            color: '#1f76f2',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '18px',
          },
        },
      ],

    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'myDescription' },
          style: {
            padding: '10px',
          },
        },
      ],
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      second: '#D0D0D0',
      border: '#0D1117',
      contrastText: '#000',
    },

  },
  spacing: 4,

  components: {
    MuiLink: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            color: '#1f76f2',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '18px',
          },
        },
      ],

    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'myDescription' },
          style: {
            padding: '10px',
          },
        },
      ],
    },
  },
});
