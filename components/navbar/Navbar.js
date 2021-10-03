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
					<Image height="50" width="50" src={logo} />
				</Typography>
				<div className={classes.navlinks}>
					<a className={classes.link} href="">
						Services
					</a>

					<a className={classes.link} href="">
						Portfolio
					</a>
					<a className={classes.link} href="">
						Contact
					</a>
				</div>
			</Toolbar>
		</AppBar>
	);
}
export default Navbar;
