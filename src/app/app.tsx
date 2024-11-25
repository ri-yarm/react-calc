import { useEffect } from 'react';
import './index.css';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Calculator from '@/features/calculator/components/Calculator';
import History from '@/features/History';
import { useAppDispatch } from '@/app/hooks/useStore';
import { fetchHistory } from '@/features/calculator/model/api';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHistory());
  }, []);

  return (
    <div className="App">
      <Link href="https://t.me/ri_yarm" underline="always">
        https://t.me/ri_yarm
      </Link>
      <Box sx={{ display: 'flex', margin: '12px 0 auto' }}>
        <Calculator />
        <History />
      </Box>
    </div>
  );
};

export default App;
