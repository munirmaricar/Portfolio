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
            mainImage{
				asset->{
					_id,
					url,
				},
				alt
            },
        }`
			)
			.then((data) => setExperience(data))
			.catch(console.error);
	}, []);

	return (
		<main className="px-5 align-middle mb-10 sm:mt-2 md:mt-8 lg:mt-18">
			<section className="container mx-auto">
				<h1 className="text-5xl flex text-center justify-center underline main-font page-header font-bold">
					Work Experience
				</h1>
				<div className="py-4 -mt-8 lg:mt-4 items-center flex justify-end content-evenly items-end  grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
									<img
										className="mx-auto mt-10 h-auto w-60"
										src={experience.mainImage.asset.url}
										alt={experience.mainImage.alt}
									/>
									<button class="experience-button py-3.5 px-4 mt-2 text-lg shadow-2xl font-medium rounded-3xl">
										{experience.jobTitle} at{' '}
										{experience.company}
									</button>
								</Link>
							</article>
						))}
				</div>
			</section>
		</main>
	);
}
