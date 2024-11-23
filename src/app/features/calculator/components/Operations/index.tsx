import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '@/app/hooks/useStore';
import Button from '@/ui/Button';
import { calculateResult, setOperator } from '@/features/calculator/model/slice';

const operations = ['+', '-', '*', '/', '='];

const Operations = () => {
  const dispatch = useAppDispatch();
  const operator = useAppSelector((state) => state.calculator.operator);

  const isActiveOperator = (op: string) => operator === op;

  const handleClick = (item: string) => {
    if (item === '=') {
      dispatch(calculateResult());
    } else {
      dispatch(setOperator(item));
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '8px',
      }}
    >
      {operations.map((op) => (
        <Button key={op} onClick={() => handleClick(op)} color={isActiveOperator(op) ? 'error' : 'primary'}>
          {op}
        </Button>
      ))}
    </Box>
  );
};

export default Operations;
