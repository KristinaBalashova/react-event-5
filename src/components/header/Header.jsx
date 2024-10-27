import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
            <img src={logo} alt="" />
          </Box>

          <Link href="/catalog" color="common.black" underline="hover">
            <Typography variant="body1">Запросы о помощи</Typography>
          </Link>

          <Button variant="outlined" size="large" endIcon={<ChevronRightIcon />} color="inherit">
            Войти
          </Button>
        </Toolbar>
      </MainContainer>
    </AppBar>
  );
};
