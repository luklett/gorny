interface WhenProps {
	children: React.ReactNode;
	condition: boolean;
}

export const When = ({ children }: WhenProps) => children;
