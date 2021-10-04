import React from "react";
import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	makeStyles,
} from "@material-ui/core";
import Image from "next/image";
import logo from "../../public/assets/images/1.png";
import Slide from "react-reveal/Slide";

const useStyles = makeStyles((theme) => ({
	navlinks: {
		display: "flex",
		marginLeft: "20px",
	},
	logo: {
		flexGrow: "1",
		cursor: "pointer",
		alignSelf: "flex-start",
		justifySelf: "flex-start",
	},
	link: {
		justifySelf: "flex-end",
		alignSelf: "flex-end",
		textDecoration: "none",
		color: "white",
		fontSize: "20px",
		marginLeft: "20px",
		"&:hover": {
			color: "white",
			// borderBottom: "1px solid blue",
		},
	},
}));

function Navbar() {
	const classes = useStyles();

	return (
		<AppBar position="sticky">
			<CssBaseline />
			<Toolbar>
				<Typography variant="h4" className={classes.logo}>
					<Slide left>
						<Image height="50" width="50" src={logo} />
					</Slide>
				</Typography>
				<div className={classes.navlinks}>
					<Slide right>
						<a className={classes.link} href="#Home">
							Home
						</a>
					</Slide>
					<Slide right>
						<a className={classes.link} href="#Services">
							Services
						</a>
					</Slide>

					<Slide right>
						<a className={classes.link} href="#Portfolio">
							Portfolio
						</a>
					</Slide>
					<Slide right>
						<a className={classes.link} href="Contact">
							Contact
						</a>
					</Slide>
				</div>
			</Toolbar>
		</AppBar>
	);
}
export default Navbar;
