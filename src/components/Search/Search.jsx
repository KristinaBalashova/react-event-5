import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { TextField, Typography, Box, InputAdornment } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`${currentPath}?search=${encodeURIComponent(searchQuery)}`);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    navigate(currentPath);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
        padding: '20px 36px 40px',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '32px',
          letterSpacing: '0.15px',
          textAlign: 'left',
          color: 'black',
        }}
      >
        Найти запрос
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'end',
          padding: '8px',
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        <SearchIcon
          sx={{
            color: 'action.active',
            mr: 1,
            width: '24px',
            height: '24px',
            cursor: 'pointer',
          }}
          onClick={handleSearchSubmit}
        />
        <TextField
          id="input-with-sx"
          label="Введите название задачи или организации"
          variant="standard"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSearchSubmit();
          }}
          sx={{
            flex: 1,
            '& .MuiInputBase-input': {
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '0.15px',
              color: 'black',
              opacity: 0.38,
            },
          }}
          InputProps={{
            disableUnderline: true,
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <ClearIcon
                  sx={{
                    color: 'action.active',
                    cursor: 'pointer',
                    width: '20px',
                    height: '20px',
                  }}
                  onClick={handleClearSearch}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Search;
