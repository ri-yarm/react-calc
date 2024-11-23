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
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      {digits.map((digit) => (
        <Box
          key={digit}
          sx={{
            flex: digit === '0' ? '0 0 64%' : '0 0 30%',
            textAlign: 'center',
          }}
        >
          <Button onClick={() => handleClick(digit)}>{digit}</Button>
        </Box>
      ))}
    </Box>
  );
};

export default Digits;
