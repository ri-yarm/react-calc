import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '@/app/hooks/useStore';
import Button from '@/ui/Button';
import { setOperator } from '@/features/calculator/model/slice';
import Colors from '@/app/constant/Styles/colors';
import { calculateAndAddToHistory } from '@/features/calculator/model/api';

const operations = ['/', '*', '-', '+', '='];

const Operations = () => {
  const dispatch = useAppDispatch();
  const operator = useAppSelector((state) => state.calculator.operator);
  // const history = useAppSelector((state) => state.calculator.history);

  const isActiveOperator = (op: string) => operator === op;

  const handleClick = (item: string) => {
    if (item === '=') {
      dispatch(calculateAndAddToHistory());
    } else if (item === operator) {
      dispatch(calculateAndAddToHistory());
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
      }}
    >
      {operations.map((op) => (
        <Button
          key={op}
          onClick={() => handleClick(op)}
          sx={{
            backgroundColor: isActiveOperator(op) ? Colors.RED : Colors.ORANGE,
            color: Colors.WHITE,
          }}
        >
          {op}
        </Button>
      ))}
    </Box>
  );
};

export default Operations;
