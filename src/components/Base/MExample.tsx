import { Box, Divider, Paper, Typography, useTheme } from '@mui/material';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  title?: string;
}

function MExample(props: IProps) {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
        {props.title}
      </Typography>

      <Divider
        sx={{
          mb: 4,
          width: '10%',
          mt: -2,
          height: '10px',
          bgcolor: theme.palette.info.main,
        }}
      />

      <Paper>{props.children}</Paper>
    </Box>
  );
}

export default MExample;
