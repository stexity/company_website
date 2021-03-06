import React from "react";
import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
} from "@material-ui/core";
import Image from "next/image";
import logo from "../../public/assets/images/1.png";
import Slide from "react-reveal/Slide";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";
import MobileNav from "./MobileNav";


function Navbar() {
	return (
		useMediaQuery('(max-width: 430px)')?<MobileNav/>:
		<AppBar style={{padding:'10px 0px 10px 0px',boxShadow: 'none',backgroundColor:'rgba(248, 245, 245, 0.377)'}} position="sticky">
			<CssBaseline />
			<Toolbar>
				<Typography variant="h4" className="nav-logo">
					<Slide left>
						<Image alt="logo" height="50" width="50" src={logo} />
					</Slide>
				</Typography>
				<div className="nav-links">
					<Slide right>
						<a className="link" href="#Home">
							Home
						</a>
					</Slide>
					<Slide right>
						<a className="link" href="#Services">
							Services
						</a>
					</Slide>

					<Slide right>
						<a className="link" href="#Portfolio">
							Portfolio
						</a>
					</Slide>
					<Slide right>
						<a className="link" href="Contact">
							Contact
						</a>
					</Slide>
				</div>
			</Toolbar>
		</AppBar>
	);
}
export default Navbar;
