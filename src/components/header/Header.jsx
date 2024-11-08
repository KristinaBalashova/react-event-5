import React from 'react';
import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MainContainer } from '../container/MainContainer';
import logo from '../../assets/logo.svg';
import { useAuthContext } from '../../context/AuthContext';
import AccountMenu from '../AccountMenu/AccountMenu';

export const Header = () => {
  const { auth } = useAuthContext();

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

          {auth ? (
            <AccountMenu />
          ) : (
            <Link href="/">
              <Button
                variant="outlined"
                size="large"
                endIcon={<ChevronRightIcon />}
                color="inherit"
              >
                Войти
              </Button>
            </Link>
          )}
        </Toolbar>
      </MainContainer>
    </AppBar>
  );
};
