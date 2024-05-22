'use client';
import React from 'react';
import {useRouter, useParams, useSelectedLayoutSegments} from 'next/navigation';
import {MenuItem, Select} from '@mui/material';

const ChangeLocale = () => {
  const router = useRouter();
  const params = useParams();
  const urlSegments = useSelectedLayoutSegments();

  const handleLocaleChange = event => {
    const newLocale = event.target.value;
    const filteredSegments = urlSegments.filter(
      segment => !/\(.*\)/.test(segment),
    );

    router.push(`/${newLocale}/${filteredSegments.join('/')}`);
  };

  return (
    <div>
      <Select
        value={params.locale}
        onChange={handleLocaleChange}
        displayEmpty
        
        sx={{
          height: 30,
          color: '#fff',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff',
            border: 'unset'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'unset',
          },
          '.MuiSvgIcon-root': {
            color: '#fff',
          },
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
      </Select>
    </div>
  );
};

export default ChangeLocale;
