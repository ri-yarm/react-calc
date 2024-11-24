import Box from '@mui/material/Box';
import Button from '@/ui/Button';
import { calculatePercentage, clear, toggleSign } from '@/features/calculator/model/slice';
import { useAppDispatch } from '@/app/hooks/useStore';

const specialButtons = ['AC', '+/-', '%'];

const SpecialButtons = () => {
  const dispatch = useAppDispatch();

  const handleClick = (operator: string) => {
    if (operator === 'AC') {
      dispatch(clear());
    } else if (operator === '+/-') {
      dispatch(toggleSign());
    } else if (operator === '%') {
      dispatch(calculatePercentage());
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {specialButtons.map((button) => (
        <Button key={button} onClick={() => handleClick(button)}>
          {button}
        </Button>
      ))}
    </Box>
  );
};

export default SpecialButtons;
