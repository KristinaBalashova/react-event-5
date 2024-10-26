import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { MainContainer } from '../container/MainContainer';
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: '1px solid #e0e0e0' }}
    >
      <MainContainer>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', paddingBlock: 1.5 }}>
          <Box>
            <img src={logo} alt="Logo" />
          </Box>

          <Typography variant="body1" color="common.black">
            Запросы о помощи
          </Typography>

          <Button
            variant="outlined"
            endIcon={<span>&#8250;</span>}
            color="primary"
            sx={{ alignItems: 'baseline', padding: '8px 22px' }}
          >
            Войти
          </Button>
        </Toolbar>
      </MainContainer>
    </AppBar>
  );
};
