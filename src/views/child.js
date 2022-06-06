import React, { useState, useEffect } from "react";
import { Button } from "antd";


export const Child = props => {
	const [visible, setVisible] = useState(false);
	const handleClick = () => {
		setVisible(!visible);
	};
	return (
		<div>
			<Button id="antd-btn" onClick={() => handleClick()} />
			<span>{visible ? "visible" : "dis-visible"}</span>
		</div>
	);
};
export default Child;
