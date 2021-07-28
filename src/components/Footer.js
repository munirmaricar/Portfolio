import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faLinkedinIn,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<footer>
			<center>
				<div className="px-2">
					<a
						className="nav-item text-xl mr-6 lg:text-lg"
						href="https://www.facebook.com/munirmaric"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="nav-item"
							icon={faFacebookF}
						/>
					</a>
					<a
						className="nav-item text-xl mr-6 lg:text-lg"
						href="https://twitter.com/MunirMaricar"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="nav-item"
							icon={faTwitter}
						/>
					</a>
					<a
						className="nav-item text-xl mr-6 lg:text-lg"
						href="https://www.instagram.com/munirmaricar/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="nav-item"
							icon={faInstagram}
						/>
					</a>
					<a
						className="nav-item text-xl mr-6 lg:text-lg"
						href="https://www.linkedin.com/in/munirmaricar/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="nav-item"
							icon={faLinkedinIn}
						/>
					</a>
					<a
						className="nav-item text-xl mr-6 lg:text-lg"
						href="https://github.com/munirmaricar?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon className="nav-item" icon={faGithub} />
					</a>
					<a
						className="nav-item text-xl mr-6 lg:text-lg"
						href="mailto:maricar.munirudeen@gmail.com?subject=Inquiry"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon
							className="nav-item"
							icon={faEnvelope}
						/>
					</a>
				</div>
				<div className="mt-2">
					<h1 className="footer-item text-lg lg:text-base">
						© {getCurrentYear()}:{' '}
						<a
							className="nav-item font-bolder no-underline"
							href="/"
						>
							Munirudeen Maricar
						</a>
						. All rights reserved.
					</h1>
				</div>
			</center>
		</footer>
	);
}
