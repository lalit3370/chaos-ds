import Toast from "../src/components/Toast";
import Button from "../src/components/Button";
import React, { useState, useRef } from "react";

export default {
	title: "Components/Toast",
};

export const Default = () => {
  const [toasts, setToasts] = useState([]);
	const timerRefs = useRef([]);

	function handleShow(message, type) {
		let id = +new Date();
		let newToastList = [...toasts, { message, type, id }];
		setToasts(newToastList);
		let timer = setTimeout(() => handleClose(id), 5000);
		timerRefs.current[id] = timer;
	}
	function handleClose(id) {
		delete timerRefs.current[id];
		setToasts((prev) => {
			let newToastList = prev.filter((toast) => toast.id != id);
			return newToastList;
		});
	}

	return (
		<>
      <Toast toasts={toasts} handleClose={handleClose} />
			<Button
      variant="primary"
				onClick={() =>
					handleShow("Information updated successfully", "success")
				}
			>
				Success Toast
			</Button>
			<Button
      // variant="warning"
				onClick={() => handleShow("Information wont be updated", "warning")}
			>
				Warning Toast
			</Button>
			<Button
      variant="secondary"
				onClick={() => handleShow("Information will be updated", "information")}
			>
				Info Toast
			</Button>
			<Button
      variant="danger"
				onClick={() =>
					handleShow("Information didnt update successfully", "error")
				}
			>
				Error Toast
			</Button>
		</>
	);
};
