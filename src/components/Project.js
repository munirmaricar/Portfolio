import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';

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
		<main className="min-h-screen py-2">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center underline main-font page-header font-bold">
					My Projects
				</h1>
				<section className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
					{projectData &&
						projectData.map((project, index) => (
							<article className="relative rounded-lg shadow-xl bg-white p-16">
								<h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
									<a
										href={project.projectUrl}
										alt={project.projectName}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.projectName}
									</a>
								</h3>
								<div className="text-gray-500 text-xs space-x-4">
									<span>
										<strong className="font-bold">
											Finished on
										</strong>
										:{' '}
										{new Date(
											project.endDate
										).toLocaleDateString()}
									</span>
									<p className="my-6 text-lg text-gray-700 leading-relaxed">
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
										className="text-red-500 font-bold hover:underline hover:text-red-400"
									>
										View The Project{' '}
										<span
											role="img"
											aria-label="right pointer"
										>
											👉
										</span>
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
