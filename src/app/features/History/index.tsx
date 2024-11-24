import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useAppSelector } from '@/app/hooks/useStore';

const History = () => {
  const history = useAppSelector((state) => state.calculator.history);

  return (
    <Box
      sx={{
        border: '1px solid #ccc',
        padding: '8px',
        minWidth: '250px',
      }}
    >
      <Typography>История операций:</Typography>
      <List>
        {history.map(({ id, operation }) => (
          <ListItem key={id} sx={{ padding: 0 }}>
            <ListItemText primary={`${operation}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default History;
