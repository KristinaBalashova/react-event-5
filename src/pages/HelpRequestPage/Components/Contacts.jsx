import React from 'react';
import { Link, Grid2, Typography } from '@mui/material';

const Contacts = ({ data }) => {
  const email = `mailto:${data.contacts.email}`;
  const phone = `tel:${data.contacts.phone}`;

  return (
    <Grid2 size={12}>
      <Typography variant="h6" component="h6">
        Контакты
      </Typography>
      <Grid2 container size={12} columnSpacing={5} sx={{ mt: '10px' }}>
        <Grid2 size={3}>
          <Typography sx={{ mb: '4px', fontWeight: '500' }}>Телефон</Typography>
          <Link
            href={phone}
            variant="inherit"
            color="inherit"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            {data.contacts.phone}
          </Link>
        </Grid2>
        <Grid2 size={5}>
          <Typography sx={{ mb: '4px', fontWeight: '500' }}>E-mail</Typography>
          <Link
            href={email}
            variant="inherit"
            color="inherit"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            {data.contacts.email}
          </Link>
        </Grid2>
        <Grid2 size={4}>
          <Typography sx={{ mb: '4px', fontWeight: '500' }}>Сайт</Typography>
          <Link
            href={data.contacts.website}
            variant="inherit"
            color="inherit"
            underline="none"
            target="_blank"
            rel="noopener"
          >
            {data.contacts.website}
          </Link>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Contacts;
