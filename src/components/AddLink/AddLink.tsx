import React, { useState } from 'react';

import { TextField, IconButton, Stack } from '@mui/material';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';

interface AddLinkProps {
  add: (link: string) => void;
}

const AddLink: React.FC<AddLinkProps> = ({ add }) => {
  const [link, setLink] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleAdd = () => {
    if (link.length < 3) return;
    const value = link;
    setLink('');
    add(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <TextField
        margin="normal"
        fullWidth
        placeholder="Вставьте ссылку"
        name="short-link"
        autoFocus
        value={link}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <IconButton color="primary" onClick={handleAdd}>
              <KeyboardDoubleArrowRightTwoToneIcon />
            </IconButton>
          ),
        }}
      />
    </Stack>
  );
};

export default AddLink;
