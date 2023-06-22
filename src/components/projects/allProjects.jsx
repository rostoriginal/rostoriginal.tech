import React from "react";

import Project from "./project";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			<div className="all-projects-project">
				<div className="project">
					<Link to="https://lightstudio.ua/" target="_blank">
						<div className="project-container">
							<div className="project-logo">
								<img
									src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
									alt="javascript"
								/>
								<img
									src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png"
									alt="php"
								/>
							</div>
							<div className="project-title">Light Studio</div>
							<div className="project-description">
								<p>
									Released a custom booking web application
									for a photo studio, which helped to decrease
									managers (from 4 to 2) and increase online
									turnover to 50%.
								</p>
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">
									View Project
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="all-projects-project">
				<div className="project">
					<Link to="https://heaven.ua/en/" target="_blank">
						<div className="project-container">
							<div className="project-logo">
							<img
									src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
									alt="javascript"
								/>
								<img
									src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png"
									alt="php"
								/>
								<img
									src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
									alt="html"
								/>
							</div>
							<div className="project-title">Heaven</div>
							<div className="project-description">
								<p>
									For this exciting portfolio case, I had the
									opportunity to design and develop a vibrant
									and dynamic corporate website for a
									thrilling night club in Kyiv.
								</p>
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">
									View Project
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="all-projects-project">
				<div className="project">
					<Link to="https://10hryven.com.ua/en/" target="_blank">
						<div className="project-container">
							<div className="project-logo">
								<img
									src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
									alt="javascript"
								/>
								<img
									src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png"
									alt="php"
								/>
								<img
									src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
									alt="html"
								/>
							</div>
							<div className="project-title">10 Hryven</div>
							<div className="project-description">
								<p>
									The goal was to create an online platform
									that effectively communicated the
									organization's mission, showcased their
									impactful initiatives, and inspired visitors
									to get involved and support their cause.
								</p>
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>
								<div className="project-link-text">
									View Project
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AllProjects;
