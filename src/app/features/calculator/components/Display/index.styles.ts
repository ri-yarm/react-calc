import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const DisplayContainer = styled(Box)({
  position: 'relative',
  backgroundColor: '#dfdcdc',
  padding: '16px 8px 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const CircleContainer = styled(Box)({
  position: 'absolute',
  top: '8px',
  left: '8px',
  display: 'flex',
  gap: '8px',
});

const Circle = styled(Box)<{ color: string }>(({ color }) => ({
  width: '12px',
  height: '12px',
  backgroundColor: color,
  borderRadius: '50%',
}));

export { DisplayContainer, CircleContainer, Circle };
