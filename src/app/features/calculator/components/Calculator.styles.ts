import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Colors from '@/app/constant/Styles/colors';

const CalculatorContainer = styled(Box)({
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${Colors.GRAY}`,
  borderRadius: '8px',
  overflow: 'hidden',
  marginRight: '16px',
});

export default CalculatorContainer;
