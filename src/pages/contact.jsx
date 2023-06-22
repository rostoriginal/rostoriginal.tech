import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch
						</div>

						<div className="subtitle contact-subtitle">
							I am excited to collaborate on new projects and
							explore innovative solutions together. Whether you
							need a fullstack developer who can handle both
							frontend and backend development or a versatile team
							player who can seamlessly integrate into your
							existing project, I am ready to bring my expertise
							and enthusiasm to the table. Let's connect and
							embark on a journey of turning ideas into impactful
							digital experiences. Thank you for your interest in
							getting in touch with me. I welcome your feedback,
							questions, and suggestions. Please feel free to
							email me directly at &nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							, or use my{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/rostoriginal/"
							>
								LinkedIn
							</a>
							.
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
