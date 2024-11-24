import React from 'react';
import Box from '@mui/material/Box';
import Digits from '@/features/calculator/components/Digits';
import Display from '@/features/calculator/components/Display';
import Operations from '@/features/calculator/components/Operations';
import SpecialButtons from '@/features/calculator/components/SpecialButtons/SpecialButtons';
import CalculatorContainer from '@/features/calculator/components/Calculator.styles';

const Calculator: React.FC = () => (
  <CalculatorContainer>
    <Display />

    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box sx={{ flex: 3 }}>
        <SpecialButtons />
        <Digits />
      </Box>
      <Operations />
    </Box>
  </CalculatorContainer>
);

export default Calculator;
