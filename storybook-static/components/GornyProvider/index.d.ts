/// <reference types="react" />
import { ChakraProvider } from '@chakra-ui/react';
interface GornyProviderProps {
    children: React.ReactNode;
}
export declare const GornyProvider: ({ children, ...props }: GornyProviderProps & React.ComponentProps<typeof ChakraProvider>) => import("react/jsx-runtime").JSX.Element;
export {};
