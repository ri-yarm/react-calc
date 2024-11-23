import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@/ui/Button';
import { updateDisplay } from '@/features/calculator/model/slice';
import { useAppDispatch, useAppSelector } from '@/app/hooks/useStore';

const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

const Digits = () => {
  const dispatch = useAppDispatch();
  const display = useAppSelector((state) => state.calculator.display);

  const handleClick = (value: string) => {
    dispatch(updateDisplay(display === '0' ? value : display + value));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {digits.map((digit) => (
          <Grid size={2} key={digit}>
            <Button onClick={() => handleClick(digit)}>{digit}</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Digits;
