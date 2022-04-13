import React, { useState } from "react";

const Home = () => {
	const [lightSwitch, setLightSwitch] = useState("red");
	const [trafficLight, setTrafficLight] = useState("single");

	const switchTrafficLights = () => {
		trafficLight == "single" ? setTrafficLight("double") : "";
		trafficLight == "double" ? setTrafficLight("single") : "";
	};

	const switchLights = () => {
		lightSwitch == "red" ? setLightSwitch("green") : "";
		lightSwitch == "green" && trafficLight == "single"
			? setLightSwitch("yellow")
			: "";
		lightSwitch == "green" && trafficLight == "double"
			? setLightSwitch("greenYellow")
			: "";
		lightSwitch == "greenYellow" ? setLightSwitch("yellow") : "";
		lightSwitch == "yellow" ? setLightSwitch("red") : "";
	};

	return (
		<div>
			<div className="d-flex justify-content-center">
				<button
					className="btn bg-primary text-light mt-5"
					onClick={switchTrafficLights}>
					{trafficLight == "single" ? "Make me a turn lane" : ""}
					{trafficLight == "double" ? "Make me a single lane" : ""}
				</button>
			</div>
			<div className="content">
				<div
					className={`blackBox ${
						trafficLight == "double" ? "hideFromView" : ""
					}`}>
					<div
						onClick={() => setLightSwitch("red")}
						className={`light redLight ${
							lightSwitch == "red" ? "on" : ""
						}`}></div>
					<div
						onClick={() => setLightSwitch("yellow")}
						className={`light yellowLight ${
							lightSwitch == "yellow" ? "on" : ""
						}`}></div>
					<div
						onClick={() => setLightSwitch("green")}
						className={`light greenLight ${
							lightSwitch == "green" ? "on" : ""
						}`}></div>
				</div>
				<div
					className={`doubleBlackBox ${
						trafficLight == "single" ? "hideFromView" : ""
					}`}>
					<div
						onClick={() => setLightSwitch("red")}
						className={`row mx-auto light redLight ${
							lightSwitch == "red" ? "on" : ""
						}`}></div>
					<div className="row">
						<div
							onClick={() => setLightSwitch("yellow")}
							className={`col-4 mx-auto`}>
							<i
								className={`fas fa-arrow-left yellowArrow 
									${lightSwitch == "yellow" ? "on blink" : ""}
									${lightSwitch == "greenYellow" ? "on" : ""}`}></i>
						</div>
						<div
							onClick={() => setLightSwitch("yellow")}
							className={`col-4 mx-auto light yellowLight ${
								lightSwitch == "yellow" ? "on" : ""
							}`}></div>
					</div>
					<div className="row">
						<div
							onClick={() => setLightSwitch("green")}
							className={`col-4 mx-auto`}>
							<i
								className={`fas fa-arrow-left greenArrow ${
									lightSwitch == "green" ? "on" : ""
								}`}></i>
						</div>
						<div
							onClick={() => setLightSwitch("green")}
							className={`col-4 mx-auto light greenLight ${
								lightSwitch == "green" ||
								lightSwitch == "greenYellow"
									? "on"
									: ""
							}`}></div>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<button
					className="btn bg-primary text-light"
					onClick={switchLights}>
					Manual Switch
				</button>
			</div>
		</div>
	);
};

export default Home;

//light type button should change text & hide/show each light

// red
// green= green with solid green arrow
// greenYellow= green with solid yellow arrow
// yellow= yellow with yellow flashing arrow
// red

//manual button should stop auto & switch lights
//auto button should switch lights in sequence every 3-5 seconds starting at red
