import { useState } from "react";
import Image from "next/image";
import Slide from 'react-reveal/Slide';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	return (
		<div id="Portfolio" className="portfolio-section">
			<Slide right>
				<div className="section-header">Portfolio</div>
			</Slide>
      <Slide bottom>

			<div className="portfolio-projects">

				{projectsList.map((project) => {
          return (
						// eslint-disable-next-line react/jsx-key
						<div className="project-image-container">
               <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {project.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {project.description}
            </Typography>
          </Box>
        </Fade>
      </Modal>
							<Image
								src={project.image}
								alt={project.alt}
								width={600}
								height={500}
								className="portfolio-card"
                onClick={handleOpen}
                />
						</div>
					);
				})}
			</div>
        </Slide>
		</div>
	);
};

export default Portfolio;
