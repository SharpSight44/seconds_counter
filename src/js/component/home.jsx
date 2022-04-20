import React from "react";

const Home = (props) => {
	return (
		<div
			className="bigCounter"
			style={{
				background: "black",
				color: "white",
				margin: "50px",
				display: "flex",
				fontSize: "50px",
				height: "50px",
				lineHeight: "50px",
			}}>
			<div className="icon " style={{ marginLeft: "30px" }}>
				<i className="fa-regular fa-clock-eight-thirty"></i>
			</div>
			<div className="six " style={{ marginLeft: "30px" }}>
				{props.seconds[5]}
			</div>
			<div className="five" style={{ marginLeft: "30px" }}>
				{props.seconds[4]}
			</div>
			<div className="four" style={{ marginLeft: "30px" }}>
				{props.seconds[3]}
			</div>
			<div className="three" style={{ marginLeft: "30px" }}>
				{props.seconds[2]}
			</div>
			<div className="two" style={{ marginLeft: "30px" }}>
				{props.seconds[1]}
			</div>
			<div className="one" style={{ marginLeft: "30px" }}>
				{props.seconds[0]}
			</div>
		</div>
	);
};

export default Home;

