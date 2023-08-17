import { ChakraProvider } from '@chakra-ui/react';

interface GornyProviderProps {
	children: React.ReactNode;
}

export const GornyProvider = ({
	children,
	...props
}: GornyProviderProps & React.ComponentProps<typeof ChakraProvider>) => {
	return <ChakraProvider {...props}>{children}</ChakraProvider>;
};
