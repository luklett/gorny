import { Button as CButton } from '@chakra-ui/react';

interface ButtonProps {
	children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
	return <CButton {...props}>{children}</CButton>;
};
