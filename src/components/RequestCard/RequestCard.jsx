import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

const card = {
  image: 'src/assets/image-card.svg',
  title: 'Сбор средств для пенсионерки Ангелины Ивановны',
  organization: 'Фонд помощи для ветеранов и инвалидов "Вера"',
  location: 'Область: Владимирская Населенный пункт: Владимир',
  goalDescription: 'Оплатить лечение МКБ в клинике "Здоровье". Купить одежду на...',
  endingDate: '20.03.2025',
  requestGoalCurrentValue: 1102563,
  requestGoal: 2056489,
  contributorsCount: 3566987,
};

const titleStyles = {
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '157%',
  letterSpacing: '0.01em',
  color: 'rgba(0, 0, 0, 0.87)',
  paddingBottom: '4px',
};

const contentStyles = {
  fontSize: '14px',
  lineHeight: '143%',
  letterSpacing: '0.01em',
  color: 'rgba(0, 0, 0, 0.87)',
};

const captionStyle = {
  fontSize: '14px',
  lineHeight: '143%',
  letterSpacing: '0.01em',
  color: 'rgba(0, 0, 0, 0.6)',
};

const RequestCard = ({ request }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card sx={{ width: 320, height: 843, borderRadius: '4px' }}>
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component="img"
        height="220"
        image="src/assets/image-card.svg"
        alt="frontend"
      />
      <CardHeader
        align="left"
        action={
          <IconButton
            sx={{
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: '4px',
              padding: '4px',
              width: '32px',
              height: '32px',
            }}
            aria-label="favorites"
            onClick={handleFavorite}
          >
            {favorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        }
        title={request?.title.split(']')[1] || ''}
      />
      <CardContent sx={{ padding: '0' }}>
        <Box sx={{ height: 402, padding: '10px 16px 20px 16px' }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography align="left" sx={titleStyles}>
              Организатор
            </Typography>
            <Typography align="left" sx={contentStyles}>
              {request?.organization?.title || ''}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography align="left" sx={titleStyles}>
              Локация
            </Typography>
            <Typography align="left" sx={contentStyles}>
              {request?.location?.district || ''}
              <br />
              {request?.location?.city || ''}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography align="left" sx={titleStyles}>
              Цель сбора
            </Typography>
            <Typography align="left" sx={contentStyles}>
              {request?.goalDescription || ''}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography align="left" sx={titleStyles}>
              Завершение
            </Typography>
            <Typography align="left" sx={contentStyles}>
              {request?.endingDate.split('T')[0].split('-').reverse().join('.') || ''}
            </Typography>
          </Box>
          <Box fontSize="0">
            <Typography align="left" sx={titleStyles}>
              Мы собрали
            </Typography>
            <Slider
              sx={{
                width: 288,
                height: 4,
                padding: 0,
                borderRadius: '16px',
                '& .MuiSlider-thumb': {
                  width: 0,
                  height: 0,
                },
                '&.Mui-disabled': {
                  color: '#1976d2',
                },
              }}
              disabled={true}
              aria-label="Small"
              valueLabelDisplay="auto"
              defaultValue={request?.requestGoalCurrentValue || 0}
              min={0}
              max={request?.requestGoal || 0}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '4px',
              }}
            >
              <Typography sx={captionStyle}>{request?.requestGoalCurrentValue || 0} руб</Typography>
              <Typography sx={captionStyle}>{request?.requestGoal || 0} руб</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: 92,
            padding: '0px 16px 20px 16px',
          }}
        >
          <Typography align="left" sx={captionStyle}>
            Нас уже: {card.contributorsCount}
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: '4px',
              padding: '8px 24px',
              width: 288,
              height: 42,
              marginTop: '10px',
            }}
          >
            Помочь
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
export default RequestCard;
