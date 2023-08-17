interface OtherwiseProps {
	children: React.ReactNode;
}

export const Otherwise = ({ children }: OtherwiseProps) => children;

Otherwise.defaultProps = {
	isOtherwise: true,
};
