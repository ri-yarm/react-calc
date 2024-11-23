import ButtonUI, { ButtonProps } from '@mui/material/Button';

type ButtonType = ButtonProps;

const Button = (props: ButtonType) => <ButtonUI {...props} />;

export default Button;
