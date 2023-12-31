import { Box, Typography, Link as MuiLink, Stack } from '@mui/material';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box
      sx={{
        position: isMobile ? 'relative' : 'static',
        marginLeft: isMobile ? '-20px' : '0px',
        marginRight: isMobile ? '-20px' : '0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Typography variant="body1" component="p" sx={{ mr: 4 }}>
        © 2023 | Developed by Oleksandr Mukhin
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
        <MuiLink
          href="https://github.com/AleksanderMukhin"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <BsGithub size={25} />
        </MuiLink>
        <MuiLink
          href="https://www.linkedin.com/in/aleksandr-mukhin-aa5a68254/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <BsLinkedin size={25} />
        </MuiLink>
      </Stack>
    </Box>
  );
};
