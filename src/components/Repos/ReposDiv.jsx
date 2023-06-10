/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, Link, Typography,
} from '@mui/material';
import Loading from '../Loading/Loading';

function ReposDiv({ data }) {
  return (
  // <ThemeProvider theme={darkTheme}>
    <Box sx={{
      // position: 'absolute',
      mt: '40px',
      top: '180px',
      maxWidth: '100%',
      color: '#fff',
      width: '100%',
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '25px',
      bgcolor: 'primary.main',
      paddingLeft: (theme) => theme.spacing(4),
      paddingRight: (theme) => theme.spacing(4),
    }}
    >
      {
          data?.length
            ? data.map((game) => (
              <Box
                sx={{
                  padding: '15px',
                  pb: 0,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: (theme) => theme.palette.primary.border,
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'primary.second',
                  color: 'primary.contrastText',
                }}
                key={game.id}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  pb: 0,
                  padding: '5px',
                }}
                >
                  <Link variant="custom" href={game.game_url}>{game.title}</Link>
                </Box>
                <Typography variant="myDescription">{game.short_description}</Typography>
                <img src={game.thumbnail} alt={game.title} />
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: (theme) => theme.spacing(2),
                  gap: (theme) => theme.spacing(2),
                }}
                >
                  <span>
                    Genre:
                    {' '}
                    {game.genre}
                  </span>
                  <span>
                    Platform:
                    {' '}
                    {game.platform}
                  </span>
                </Box>
                <span style={{
                  marginBottom: '5px',
                }}
                >
                  Release date:
                  {' '}
                  {game.release_date}

                </span>
              </Box>
            ))
            : <Loading />
        }
    </Box>
  // </ThemeProvider>
  );
}

export default ReposDiv;
