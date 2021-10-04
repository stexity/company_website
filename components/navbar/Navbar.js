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
		marginLeft: theme.spacing(10),
		display: "flex",
	},
	logo: {
		flexGrow: "1",
		cursor: "pointer",
	},
	link: {
		textDecoration: "none",
		color: "white",
		fontSize: "20px",
		marginLeft: theme.spacing(5),
		"&:hover": {
			color: "white",
			borderBottom: "1px solid blue",
		},
	},
}));

function Navbar() {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<CssBaseline />
			<Toolbar>
				<Typography variant="h4" className={classes.logo}>
					<Slide left>
						<Image height="50" width="50" src={logo} />
					</Slide>
				</Typography>
				<div className={classes.navlinks}>
					<Slide right>
						<a className={classes.link} href="">
							Services
						</a>
					</Slide>

					<Slide right>
						<a className={classes.link} href="">
							Portfolio
						</a>
					</Slide>
					<Slide right>
						<a className={classes.link} href="">
							Contact
						</a>
					</Slide>
				</div>
			</Toolbar>
		</AppBar>
	);
}
export default Navbar;
