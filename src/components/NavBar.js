import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
	return (
		<header className="bg-none">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						activeClassName="nav-item-active"
						className="inline-flex items-center py-3 px-3 mr-4 text-2xl font-bold no-underline nav-item rounded"
						to="/"
						exact
					>
						Home
					</NavLink>
					<NavLink
						activeClassName="nav-item-active"
						className="inline-flex items-center py-3 px-3 mr-4 text-2xl font-bold no-underline nav-item rounded"
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						activeClassName="nav-item-active"
						className="inline-flex items-center py-3 px-3 mr-4 text-2xl font-bold no-underline nav-item rounded"
						to="/experience"
					>
						Experience
					</NavLink>
					<NavLink
						activeClassName="nav-item-active"
						className="inline-flex items-center py-3 px-3 mr-4 text-2xl font-bold no-underline nav-item rounded"
						to="/projects"
					>
						Projects
					</NavLink>
				</nav>
			</div>
			<div className="inline-flex py-3 px-3 my-6">
				<SocialIcon
					url="https://www.facebook.com/munirmaric"
					className="mr-4"
					target="_blank"
					fgColor="whitesmoke"
					bgColor="none"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://www.instagram.com/munirmaricar/"
					className="mr-4"
					target="_blank"
					fgColor="whitesmoke"
					bgColor="none"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://twitter.com/MunirMaricar"
					className="mr-4"
					target="_blank"
					fgColor="whitesmoke"
					bgColor="none"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://www.linkedin.com/in/munirmaricar/"
					className="mr-4"
					target="_blank"
					fgColor="whitesmoke"
					bgColor="none"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://github.com/munirmaricar?tab=repositories"
					className="mr-4"
					target="_blank"
					fgColor="whitesmoke"
					bgColor="none"
					style={{ height: 35, width: 35 }}
				/>
			</div>
		</header>
	);
}
