import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = (muiBaseTheme) => ({
	card: {
		maxWidth: 400,
		margin: "auto",
		transition: "0.3s",
		borderRadius: '80px 0px 80px 0px',
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

function App({ classes, para, title }) {
	return (
		<div className="App">
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					image={
						"https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
					}
				/>
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
						variant={"caption"}
					>
						{para}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export const ServicesCardComponent = withStyles(styles)(App);
