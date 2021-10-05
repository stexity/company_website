import React from "react";
import Image from "next/image";
import bannerSvg from "../../public/assets/images/Wave.svg";
import Particle from "react-particles-js";
import particlesConfig from "../../public/assets/particlesConfig.json";
import Flash from "react-reveal/Flash";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";

const Banner = () => {
	return (
		<div className="banner">
			<Particle
				params={
					(particlesConfig,
					{
						particles: {
							color: {
								value: "blue",
							},
							line_linked: {
								color: {
									value: "rgb(16, 16, 94)",
								},
							},
							number: {
								value: useMediaQuery('(max-width: 780px)')?60:160,
							},
							size: {
								value: 2,
							},
							move: {
								enable: true,
								speed: 1,
								direction: "none",
								random: false,
								straight: false,
								out_mode: "out",
								bounce: false,
								attract: {
									enable: false,
									rotateX: 600,
									rotateY: 1200,
								},
							},
						},
						interactivity: {
							detect_on: "window",
							events: {
								onhover: {
									enable: true,
									mode: "repulse",
								},
								onclick: {
									enable: false,
									mode: "bubble",
								},
								resize: true,
							},
							modes: {
								grab: {
									distance: 400,
									line_linked: {
										opacity: 1,
									},
								},
								bubble: {
									distance: 400,
									size: 40,
									duration: 2,
									opacity: 8,
									speed: 3,
								},
								repulse: {
									distance: 100,
									duration: 0.4,
								},
								push: {
									particles_nb: 4,
								},
								remove: {
									particles_nb: 2,
								},
							},
						},
					})
				}
				className="App-particles__container"
			/>
			<Flash>
				<div className="banner-title">Stexity</div>
				<div className="banner-tagline">Innovation Meets Efficiency</div>
			</Flash>
			<div className="banner-image">
				<Image
					className="banner-image"
					alt="Wave"
					layout="responsive"
					objectFit="fill"
					quality={100}
					src={bannerSvg}
				/>
			</div>
		</div>
	);
};

export default Banner;
