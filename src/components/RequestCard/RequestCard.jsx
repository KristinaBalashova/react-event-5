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

const card = {
  image: 'src/assets/image-card.svg',
  title: 'Сбор средств для пенсионерки Ангелины Ивановны',
};

const RequestCard = () => {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card sx={{ width: 320, height: 843, borderRadius: 4 }}>
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
          <IconButton aria-label="favorites" onClick={handleFavorite}>
            {favorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        }
        title={card.title}
      />
      <CardContent>
        <Typography align="left">Организатор</Typography>
        <Typography align="left">Фонд помощи для ветеранов и инвалидов "Вера"</Typography>
      </CardContent>
    </Card>
  );
};
export default RequestCard;
