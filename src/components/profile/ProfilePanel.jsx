import { Box } from '@mui/material';

export const ProfilePanel = ({ value, index, children, ...rest }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
      {...rest}
    >
      {value === index && children}
    </Box>
  );
};
