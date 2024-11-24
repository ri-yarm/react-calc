import Box from '@mui/material/Box';
import Button from '@/ui/Button';
import { useAppDispatch } from '@/app/hooks/useStore';
import { inputNumber } from '@/features/calculator/model/slice';

const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

const Digits = () => {
  const dispatch = useAppDispatch();

  const handleClick = (number: string) => {
    dispatch(inputNumber(number));
  };

  return (
    <Box
      data-testid="digitsContain"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      {digits.map((digit) => (
        <Box
          key={digit}
          sx={{
            gridColumn: digit === '0' ? 'span 2' : 'auto',
          }}
        >
          <Button onClick={() => handleClick(digit)}>{digit}</Button>
        </Box>
      ))}
    </Box>
  );
};

export default Digits;
