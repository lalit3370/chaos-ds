import React from "react";
import PropTypes from "prop-types";
import "./Stepper.scss";
import { classname } from "../../utils/helper";

const Stepper = ({ steps, stepCount }) => {

	return (
		<>
			{steps.map((x, index) => {
				const { label } = x;
				const isActive = index + 1 <= stepCount;
				return (
					<div className="stepper">
						<div className="step">
							<div className={classname("count", { active: isActive })}>
								<span>{index + 1}</span>
							</div>
							{index < steps.length - 1 ? (
								<div className={classname("connector", { active: isActive })} />
							) : null}
						</div>

						<div className="label">
							<span>{label}</span>
						</div>
					</div>
				);
			})}
		</>
	);
};

Stepper.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentStep: PropTypes.number,
};
export default Stepper;
