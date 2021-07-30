import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';

export default function SingleExperience() {
	const [singleExperience, setSingleExperience] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
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
            },
        }`
			)
			.then((data) => setSingleExperience(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!singleExperience) return <h1 className="text-white-100">Loading!</h1>;

	return (
		<main className="px-5 align-middle mb-10 sm:mt-2 md:mt-8 lg:mt-18">
			<h1 className="text-5xl flex text-center justify-center underline main-font page-header font-bold">
				{singleExperience.jobTitle} at {singleExperience.company}
			</h1>
			{/* <article className="container mt-10 shadow-lg mx-auto rounded-lg">
				<div className="px-16 lg:px-48 py-20 lg:py-40 prose lg:prose-xl max-w-full">
					<BlockContent
						className="main-font"
						blocks={singleExperience.description}
						projectId="0qak8qh4"
						dataset="production"
					/>
				</div>
			</article> */}
			<article className="relative my-10 lg:my-18 md:mx-16 md:mb-80 lg:mb-48 lg:mx-40 rounded-lg shadow-xl card-body p-16">
				<div className="main-font text-base">
					<span>
						<strong className="font-bold">Location</strong>:{' '}
						{singleExperience.location}
					</span>
					<br></br>
					<span>
						<strong className="font-bold">Started on</strong>:{' '}
						{new Date(
							singleExperience.startDate
						).toLocaleDateString('en-GB')}
					</span>
					<br></br>
					<span>
						<strong className="font-bold">Finished on</strong>:{' '}
						{new Date(singleExperience.endDate).toLocaleDateString(
							'en-GB'
						)}
					</span>
					<br></br>
					<span>
						<strong className="font-bold">Employment Type</strong>:{' '}
						{singleExperience.employmentType}
					</span>
					<p className="mt-6 text-2xl main-font leading-relaxed">
						<BlockContent
							blocks={singleExperience.description}
							projectId="0qak8qh4"
							dataset="production"
						/>
					</p>
				</div>
			</article>
		</main>
	);
}
