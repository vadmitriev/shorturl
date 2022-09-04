import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchFilterProps {
  search: string;
  placeholder?: string;
  onClear: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  search,
  placeholder = '',
  onChange,
  onClear,
}) => {
  return (
    <TextField
      fullWidth
      value={search}
      placeholder={placeholder}
      size="small"
      sx={{ width: '80%' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={onClear}
            sx={{
              cursor: 'pointer',
              visibility: search.length > 0 ? 'visible' : 'hidden',
            }}
          >
            <ClearIcon />
          </InputAdornment>
        ),
      }}
      onChange={onChange}
    />
  );
};

export default SearchFilter;
