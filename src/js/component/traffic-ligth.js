import React, { useState } from "react";
import style from "/workspace/react-hello/src/styles/index.scss";
import PropTypes from "prop-types";
export function TrafficLigth() {
	const [color, setColor] = useState("roja");
	const Colores = ["roja", "anaranjada", "verde"];

	return (
		<div>
			<div id="cable"></div>

			<div id="container">
				{Colores.map(c => (
					<div
						className={`luz ${c} ${
							color === c ? "cambiarluz" : ""
						}`}
						onClick={() => setColor(c)}>
						{c}
					</div>
				))}
			</div>
		</div>
	);
}
