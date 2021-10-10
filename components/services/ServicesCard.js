import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Image from 'next/image'


const styles = (muiBaseTheme) => ({
	card: {
		transform: 'rotate(2deg)',
		maxWidth: 360,
		minHeight: 540,
		margin: "auto",
		transition: "0.3s",
		borderRadius: '100px 5px 100px 5px',
		boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
		"&:hover": {
			boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
		},
	},
	media: {
		paddingTop: "56.25%",
	},
	content: {
		textAlign: "center",
		fontSize: 15,
		padding: muiBaseTheme.spacing.unit * 3,
	},
	divider: {
		margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
	},
	heading: {
		fontWeight: "bold",
	},
	subheading: {
		lineHeight: 1.8,
	},
});

function App({ classes, para, title, image }) {
	return (
		<div className="App">
			<Card className={classes.card}>
				<Image width={400} height={300} className={classes.media} alt="Services-Image" src={image}/>
				<CardContent className={classes.content}>
					<Typography
						className={"MuiTypography--heading"}
						variant={"h6"}
						gutterBottom
					>
						{title}
					</Typography>
					<Divider className={classes.divider} light />
					<Typography
						className={"MuiTypography--subheading"}
						
					>
						{para}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export const ServicesCardComponent = withStyles(styles)(App);
