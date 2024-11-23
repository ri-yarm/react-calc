import React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Digits from '@/features/calculator/components/Digits';
import Display from '@/features/calculator/components/Display';
import Operations from '@/features/calculator/components/Operations';
import SpecialButtons from '@/features/calculator/components/SpecialButtons/SpecialButtons';

const Calculator: React.FC = () => (
  <Box sx={{ flexGrow: 1, width: '350px', margin: '0 auto' }}>
    <Display />
    <Grid container direction="column" spacing={2}>
      <Grid size={12}>
        <SpecialButtons />
      </Grid>

      <Grid container spacing={2}>
        <Grid size={8}>
          <Digits />
        </Grid>

        <Grid size={4}>
          <Operations />
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default Calculator;
