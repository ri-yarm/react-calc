import React from 'react';

import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/app/hooks/useStore';

import { DisplayContainer, CircleContainer, Circle } from '@/features/calculator/components/Display/index.styles';
import Colors from '@/app/constant/Styles/colors';

const Display: React.FC = () => {
  const display = useAppSelector((state) => state.calculator.display);

  return (
    <DisplayContainer>
      <CircleContainer>
        <Circle color={Colors.RED} />
        <Circle color={Colors.YELLOW} />
        <Circle color={Colors.GREEN} />
      </CircleContainer>

      <Typography
        data-testid="display"
        variant="h3"
        sx={{
          color: Colors.WHITE,
        }}
      >
        {display}
      </Typography>
    </DisplayContainer>
  );
};

export default Display;
