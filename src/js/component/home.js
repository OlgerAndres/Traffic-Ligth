//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import React, { useState } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState("roja");
	const Colores = ["roja", "anaranjada", "verde"];
	return (
		<div className="trafficligth">
			{Colores.map(c => (
				<div className={`luz ${c} ${color === c ? "cambiarluz" : ""}`}>
					onClick={() => setColor(c)}
					{c}
				</div>
			))}
		</div>
	);
}
