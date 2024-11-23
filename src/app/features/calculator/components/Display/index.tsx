import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/app/hooks/useStore';

const DisplayContainer = styled(Box)({
  position: 'relative',
  backgroundColor: '#ccc',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '80px',
  boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.2)',
});

const CircleContainer = styled(Box)({
  position: 'absolute',
  top: '8px',
  left: '8px',
  display: 'flex',
  gap: '8px',
});

const Circle = styled(Box)(({ color }) => ({
  width: '12px',
  height: '12px',
  backgroundColor: color,
  borderRadius: '50%',
}));

const Display: React.FC = () => {
  const display = useAppSelector((state) => state.calculator.display);

  return (
    <DisplayContainer>
      <CircleContainer>
        <Circle color="red" />
        <Circle color="yellow" />
        <Circle color="green" />
      </CircleContainer>

      <Typography
        variant="h4"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'monospace',
        }}
      >
        {display}
      </Typography>
    </DisplayContainer>
  );
};

export default Display;
