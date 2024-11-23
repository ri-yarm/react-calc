import React from 'react';
import Grid from '@mui/material/Grid2';
import Digits from '@/features/calculator/components/Digits';

const Calculator: React.FC = () => (
  <Grid container direction="column" style={{ maxWidth: '300px', margin: '0 auto' }}>
    <Grid container>
      <Grid size={12}>
        <Digits />
      </Grid>
    </Grid>
  </Grid>
);

export default Calculator;
