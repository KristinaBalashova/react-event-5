import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThemeSwitcher from './ThemeSwitcher';
import FormComponent from './FormComponent';
import { DialogModal } from './DialogModal';
import CardComponent from './CardComponent';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeSwitcher>
      {' '}
      {/* Оборачиваем в новый компонент для переключения темы */}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline>
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              ></IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                MUI
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
          <Box component="main" sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
            <Toolbar />
            <Typography variant="h2" gutterBottom>
              Some not very important headline
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam
              eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi
              quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium
              et aperiam? Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti
              alias distinctio nostrum. Minima ex dolor modi inventore sapiente necessitatibus
              aliquam fuga et. Sed numquam quibusdam at officia sapiente porro maxime corrupti
              perspiciatis asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
              assumenda et!
            </Typography>
          </Box>
        </CssBaseline>
      </Box>
      <FormComponent />
      {/* Адаптивное модальное окно для подписки на рассылку */}
      <DialogModal />
      <CardComponent />
    </ThemeSwitcher>
  );
}
