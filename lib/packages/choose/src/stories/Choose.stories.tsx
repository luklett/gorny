import { Meta, StoryFn } from '@storybook/react';
import { Choose, ChooseProps } from '../main';

const meta: Meta = {
	title: 'Choose',
	component: Choose,
	argTypes: {
		multiple: {
			control: {
				type: 'boolean',
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;

const Template = ({ multiple, children }: ChooseProps) => (
	<Choose multiple={multiple}>{children}</Choose>
);

export const Single: StoryFn<ChooseProps> = Template.bind({});
Single.args = {
	multiple: false,
	children: [
		<Choose.When condition={true}>
			<div>When 1</div>
		</Choose.When>,

		<Choose.When condition={true}>
			<div>When 2</div>
		</Choose.When>,

		<Choose.Otherwise>
			<div>Otherwise</div>
		</Choose.Otherwise>,
	],
};

export const Multiple: StoryFn<ChooseProps> = Template.bind({});
Multiple.args = {
	multiple: true,
	children: [
		<Choose.When condition={true}>
			<div>When 1</div>
		</Choose.When>,

		<Choose.When condition={true}>
			<div>When 2</div>
		</Choose.When>,

		<Choose.Otherwise>
			<div>Otherwise</div>
		</Choose.Otherwise>,
	],
};
