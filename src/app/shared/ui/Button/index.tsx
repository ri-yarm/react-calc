import ButtonUI, { ButtonProps } from '@mui/material/Button';
import Colors from '@/app/constant/Styles/colors';

const Button = (props: ButtonProps) => (
  <ButtonUI
    variant="outlined"
    {...props}
    sx={{
      width: '100%',
      color: Colors.BLACK,
      backgroundColor: Colors.GRAY,
      borderRadius: 0,
      height: '40px',
      // eslint-disable-next-line react/destructuring-assignment
      ...props.sx,
    }}
  />
);

export default Button;
