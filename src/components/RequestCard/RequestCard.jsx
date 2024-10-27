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

// variant = "full" | "short"
const RequestCard = ({ variant }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card sx={{ width: 320, borderRadius: '4px' }}>
      {variant === 'full' && (
        <>
          <CardMedia
            sx={{ objectFit: 'contain' }}
            component="img"
            height="220"
            image={card.image}
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
            title={card.title}
          />
        </>
      )}

      {variant === 'short' && (
        <Typography variant="h6" sx={{ mb: '10px', p: '20px 16px 0' }}>
          Вместе для добрых дел
        </Typography>
      )}

      <CardContent sx={{ padding: '0' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2.5,
            padding: '10px 16px 20px 16px',
          }}
        >
          {variant === 'full' && (
            <>
              <Box>
                <Typography align="left" sx={titleStyles}>
                  Организатор
                </Typography>
                <Typography align="left" sx={contentStyles}>
                  {card.organization}
                </Typography>
              </Box>
              <Box>
                <Typography align="left" sx={titleStyles}>
                  Локация
                </Typography>
                <Typography align="left" sx={contentStyles}>
                  {card.location}
                </Typography>
              </Box>
            </>
          )}

          <Box>
            <Typography align="left" sx={titleStyles}>
              Цель сбора
            </Typography>
            <Typography align="left" sx={contentStyles}>
              {card.goalDescription}
            </Typography>
          </Box>
          <Box>
            <Typography align="left" sx={titleStyles}>
              Завершение
            </Typography>
            <Typography align="left" sx={contentStyles}>
              {card.endingDate}
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
              defaultValue={card.requestGoalCurrentValue}
              min={0}
              max={card.requestGoal}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '4px',
              }}
            >
              <Typography sx={captionStyle}>{card.requestGoalCurrentValue} руб</Typography>
              <Typography sx={captionStyle}>{card.requestGoal} руб</Typography>
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
            size="large"
            sx={{
              borderRadius: '4px',
              padding: '8px 24px',
              marginTop: '10px',
              width: '100%',
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
