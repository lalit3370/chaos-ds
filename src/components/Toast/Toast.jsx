import React from "react";
import PropTypes from "prop-types";
import "./Toast.scss";

const Toast = ({ toasts, handleClose }) => {

	return (
		<>
			<div className="toast-container">
				{toasts.map((toast) => (
					<>
						<div className={`toast ${toast?.type}`}>
							{toast?.message}
							<span className="close" onClick={() => handleClose(toast?.id)}>
								x
							</span>
						</div>
					</>
				))}
			</div>

		</>
	);
};

Toast.propTypes = {
	children: PropTypes.node,
};

export default Toast;
