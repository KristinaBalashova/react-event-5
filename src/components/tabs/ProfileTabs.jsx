import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { ProfilePanel } from '../profile/ProfilePanel';
import TelegramIcon from '../../assets/telegram.svg?react';
import VkIcon from '../../assets/vk.svg?react';
import WhatsappIcon from '../../assets/whatsapp.svg?react';
import RequestsList from '../RequestsList/RequestsList';
import ToggleButtons from '../ToggleButtons/ToggleButtons';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function formatBirthdate(birthdate) {
  const date = new Date(birthdate);

  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
}

const subtitleStyle = {
  mb: 1.25,
};

const listWrapStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const listStyle = {
  p: 0,
};

const itemStyle = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '4px',
  m: 0,
};

export const ProfileTabs = ({ userData }) => {
  const [value, setValue] = useState(0);
  const formattedBirthdate = formatBirthdate(userData?.birthdate);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper variant="outlined" sx={{ flex: '0 1 80%', p: '10px 36px 40px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '30px',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Личные данные" {...a11yProps(0)} />
          <Tab label="Контакты" {...a11yProps(1)} />
          <Tab label="Избранное" {...a11yProps(2)} />
        </Tabs>

        {value === 2 && <ToggleButtons />}
      </Box>
      <ProfilePanel value={value} index={0}>
        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Профиль
          </Typography>
          <List sx={listStyle}>
            <ListItem disablePadding>
              <ListItemText primary="Фамилия:" secondary={userData?.lastName} sx={itemStyle} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Имя:" secondary={userData?.name} sx={itemStyle} />
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Дата рождения
          </Typography>
          <List sx={listStyle}>
            <ListItem disablePadding>
              <ListItemText secondary={formattedBirthdate} sx={itemStyle} />
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Локация для помощи
          </Typography>
          <Box sx={listWrapStyle}>
            {userData?.baseLocations.map((data) => (
              <List key={uuidv4()} sx={listStyle}>
                <ListItem disablePadding>
                  <ListItemText primary="Область:" secondary={data.district} sx={itemStyle} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Насленный пункт:" secondary={data.city} sx={itemStyle} />
                </ListItem>
              </List>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Образование
          </Typography>
          <Box sx={listWrapStyle}>
            {userData?.educations.map((data) => (
              <List key={uuidv4()} sx={listStyle}>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Учреждение:"
                    secondary={data.organizationName}
                    sx={itemStyle}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Уровень образования:"
                    secondary={data.level}
                    sx={itemStyle}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Специализация:"
                    secondary={data.specialization}
                    sx={itemStyle}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Год окончания:"
                    secondary={data.graduationYear}
                    sx={itemStyle}
                  />
                </ListItem>
              </List>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Обо мне
          </Typography>
          <List sx={listStyle}>
            <ListItem disablePadding>
              <ListItemText secondary={userData?.additionalInfo} sx={itemStyle} />
            </ListItem>
          </List>
        </Box>
      </ProfilePanel>

      <ProfilePanel value={value} index={1}>
        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            E-mail
          </Typography>
          <List sx={listStyle}>
            <ListItem disablePadding>
              <Link color="inherit" underline="hover" href={`mailto:${userData?.contacts.email}`}>
                {userData?.contacts.email}
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Телефон
          </Typography>
          <List sx={listStyle}>
            <ListItem disablePadding>
              <Link color="inherit" underline="hover" href={`tel:${userData?.contacts.phone}`}>
                {userData?.contacts.phone}
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h6" component="h3" sx={subtitleStyle}>
            Социальные сети
          </Typography>
          <List sx={{ ...listStyle, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <ListItem disablePadding>
              <ListItemIcon>
                <VkIcon />
              </ListItemIcon>
              <Link
                color="inherit"
                underline="hover"
                href={userData?.contacts.social.vk}
                target="_blank"
                rel="noopener"
              >
                Vkontakte
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <TelegramIcon />
              </ListItemIcon>
              <Link
                color="inherit"
                underline="hover"
                href={userData?.contacts.social.telegram}
                target="_blank"
                rel="noopener"
              >
                Telegram
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <WhatsappIcon />
              </ListItemIcon>
              <Link
                color="inherit"
                underline="hover"
                href={userData?.contacts.social.whatsapp}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </Link>
            </ListItem>
          </List>
        </Box>
      </ProfilePanel>

      <ProfilePanel value={value} index={2}>
        <RequestsList variant={'favourites'} data={userData?.favouriteRequests} />
      </ProfilePanel>
    </Paper>
  );
};
