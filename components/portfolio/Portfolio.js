import { useState } from "react";
import Image from "next/image";
import Modal from "../modal/Modal";
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const projectsList = [
		{
			name: "Hug A Pet",
			image: "/assets/images/hug_a_pet.jpg",
			imageAlt: "Hug A pet",
			repo: "#",
			url: "#",
			description:
				"Velit nostrud fugiat mollit velit adipisicing et. Excepteur quisenim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur adipisicing et aliqua enim sunt ad dolore aliqua. In veniam excepteur elit laborum ipsum nulla sunt. Lorem exercitation deserunt sint amet consectetur.",
			tech: ["React", "NextJS", "Apollo GraphQL", "MongoDB"],
		},
		{
			name: "Emmora.de | Funeral Services",
			image: "/assets/images/emmora.jpg",
			imageAlt: "Emmora",
			repo: "#",
			url: "#",
			description:
				"Velit nostrud fugiat mollit velit adipisicing et. Excepteur quisenim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur adipisicing et aliqua enim sunt ad dolore aliqua. In veniam excepteur elit laborum ipsum nulla sunt. Lorem exercitation deserunt sint amet consectetur.",
			tech: ["React", "NextJS", "Apollo GraphQL", "MongoDB"],
		},
		{
			name: "Retrac",
			image: "/assets/images/retrac.jpg",
			imageAlt: "Retrac",
			repo: "#",
			url: "#",
			description:
				"Velit nostrud fugiat mollit velit adipisicing et. Excepteur quisenim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur adipisicing et aliqua enim sunt ad dolore aliqua. In veniam excepteur elit laborum ipsum nulla sunt. Lorem exercitation deserunt sint amet consectetur.",
			tech: ["React", "NextJS", "Apollo GraphQL", "MongoDB"],
		},
		{
			name: "Oknoname.com | Forum",
			image: "/assets/images/ok_no_name.jpg",
			imageAlt: "Oknoname",
			repo: "#",
			url: "#",
			description:
				"Velit nostrud fugiat mollit velit adipisicing et. Excepteur quisenim ad in aliquip sunt. Mollit ea nisi enim labore aute pariatur adipisicing et aliqua enim sunt ad dolore aliqua. In veniam excepteur elit laborum ipsum nulla sunt. Lorem exercitation deserunt sint amet consectetur.",
			tech: ["React", "NextJS", "Apollo GraphQL", "MongoDB"],
		},
	];

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="portfolio-section">
			<Fade right>
				<div className="section-header">Portfolio</div>
			</Fade>
			<div className="portfolio-projects">
				{projectsList.map((project) => {
					return (
						// eslint-disable-next-line react/jsx-key
						<div className="project-image-container">
							<Image
								src={project.image}
								alt={project.alt}
								width={600}
								height={500}
								className="portfolio-card"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Portfolio;
