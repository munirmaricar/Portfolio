import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Experience() {
	const [experienceData, setExperience] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "experience"]{
            jobTitle,
            slug,
            company,
            location,
            startDate,
            endDate,
            employmentType,
            description,
            mainImage{
              asset->{
                _id,
                url,
              },
              alt
            }
        }`
			)
			.then((data) => setExperience(data))
			.catch(console.error);
	}, []);

	return (
		<main className="min-h-screen py-2">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center main-font">
					Work Experience
				</h1>
				<div className="py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{experienceData &&
						experienceData.map((experience, index) => (
							<article>
								<Link
									className="no-underline"
									to={
										'/experience/' + experience.slug.current
									}
									key={experience.slug.current}
								>
									<span
										className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
										key={index}
									>
										<span className="block relative h-full flex justify-end items-end pr-4 pb-4">
											<h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
												{experience.jobTitle}
											</h3>
										</span>
									</span>
								</Link>
							</article>
						))}
				</div>
			</section>
		</main>
	);
}
