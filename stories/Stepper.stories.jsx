import Stepper from "../src/components/Stepper";

export default {
	title: "Components/Stepper",
	component: Stepper,
	argTypes: {},
};

export const Primary = {
	args: {
		steps: [
			{
				label: "profile",
			},
			{
				label: "business",
			},
			{
				label: "contact",
			},
		],
		stepCount: 1,
	},
};
