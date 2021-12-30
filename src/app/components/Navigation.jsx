import {connect} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";

const Navigation = () => (
	<>
		<Link to="/dashboard">
			<h1>My Express App</h1>
		</Link>
	</>
);

export const ConnectedNavigation = connect(state => state)(Navigation);
