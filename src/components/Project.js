import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
            projectName,
            startDate,
            endDate,
            projectUrl,
			      description,
        }`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	return (
		<main className="px-5 align-middle sm:mt-2 mb-10 md:mt-8 lg:mt-18">
			<section className="container mx-auto">
				<h1 className="text-5xl flex text-center justify-center underline main-font page-header font-bold">
					My Projects
				</h1>
				<section className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-4">
					{projectData &&
						projectData.map((project, index) => (
							<article className="relative rounded-lg shadow-xl card-body p-16">
								<h3 className="text-3xl font-bold mb-2">
									<a
										className="nav-item no-underline"
										href={project.projectUrl}
										alt={project.projectName}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.projectName}
									</a>
								</h3>
								<div className="main-font text-xs">
									<span>
										<strong className="font-bold">
											Started on
										</strong>
										:{' '}
										{new Date(
											project.startDate
										).toLocaleDateString('en-GB')}
									</span>
									<br></br>
									<span>
										<strong className="font-bold">
											Finished on
										</strong>
										:{' '}
										{new Date(
											project.endDate
										).toLocaleDateString('en-GB')}
									</span>
									<p className="my-6 text-lg main-font leading-relaxed">
										<BlockContent
											blocks={project.description}
											projectId="0qak8qh4"
											dataset="production"
										/>
									</p>
									<a
										href={project.projectUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FontAwesomeIcon
											className="text-xl nav-item"
											icon={faExternalLinkAlt}
										/>
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
