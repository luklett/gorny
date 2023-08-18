import { Otherwise } from '../Otherwise';
import { When } from '../When';

export interface ChooseProps {
	children: React.ReactNode;
	multiple?: boolean;
}

export const Choose = ({ children, multiple }: ChooseProps) => {
	const childrenArray = Array.isArray(children) ? children : [children];

	// MULTIPLE
	if (multiple) {
		let otherwise;

		const arr = childrenArray.reduce((acc, child) => {
			if (child.props.isOtherwise) {
				otherwise = child.props.children;
			}

			if (child.props.condition && !child.props.isOtherwise) {
				acc.push(child.props.children);
			}

			return acc;
		}, []);

		return arr.length ? arr : otherwise || null;
	}

	// SINGLE
	const child = childrenArray.find(
		(child) => child.props.condition && !child.props.isOtherwise
	);

	if (child) return child.props.children;

	const otherwise = childrenArray.find((child) => child.props.isOtherwise);

	return otherwise ? otherwise.props.children : null;
};

Choose.When = When;
Choose.Otherwise = Otherwise;
