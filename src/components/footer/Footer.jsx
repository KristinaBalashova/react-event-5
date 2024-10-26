import { Box, Link, Toolbar, Typography } from '@mui/material';
import { MainContainer } from '../container/MainContainer';

export const Footer = () => {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid #e0e0e0' }}>
      <MainContainer>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link href="#" target="_blank" rel="noopener" color="common.black" underline="hover">
            <Typography variant="body1">Об ивенте</Typography>
          </Link>
          <Link
            href="https://github.com/KristinaBalashova/react-event-5"
            target="_blank"
            rel="noopener"
            color="common.black"
            underline="hover"
          >
            <Typography variant="body1">Github проекта</Typography>
          </Link>
          <Link
            href="https://t.me/natti_jun_front_chat"
            target="_blank"
            rel="noopener"
            color="common.black"
            underline="hover"
          >
            <Typography variant="body1">Чат для джунов</Typography>
          </Link>
        </Toolbar>
      </MainContainer>
    </Box>
  );
};
