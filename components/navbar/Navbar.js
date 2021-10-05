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
import PersistentDrawerLeft from "./MobileNav";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";


function Navbar() {
	return (
		useMediaQuery('(max-width: 430px)')?<AppBar style={{padding:'10px 0px 10px 0px',boxShadow: 'none',backgroundColor:'rgba(248, 245, 245, 0.377)'}} position="sticky">
		<CssBaseline />
		<Toolbar>
			<Typography variant="h4" className="nav-logo">
				<Slide left>
					<Image height="50" width="50" src={logo} />
				</Slide>
			</Typography>
		</Toolbar>
	</AppBar>:
		<AppBar style={{padding:'10px 0px 10px 0px',boxShadow: 'none',backgroundColor:'rgba(248, 245, 245, 0.377)'}} position="sticky">
			<CssBaseline />
			<Toolbar>
				<Typography variant="h4" className="nav-logo">
					<Slide left>
						<Image height="50" width="50" src={logo} />
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
