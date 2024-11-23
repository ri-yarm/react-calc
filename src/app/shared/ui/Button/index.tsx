import ButtonUI, { ButtonProps } from '@mui/material/Button';

type ButtonType = ButtonProps;

const Button = (props: ButtonType) => <ButtonUI variant="contained" {...props} />;

export default Button;
