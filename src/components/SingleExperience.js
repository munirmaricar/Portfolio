import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

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
        }`
      )
      .then((data) => setSingleExperience(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleExperience) return <h1 className="text-white-100">Loading!</h1>;

  return (
    <main className="min-h-screen my-14">
      <article className="container shadow-lg mx-auto bg-white-500 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="main-font text-3xl lg:text-6xl mb-4">
                {singleExperience.jobTitle}
              </h1>
            </div>
          </div>
        </header>
        <div className="px-16 lg:px-48 py-20 lg:py-40 prose lg:prose-xl max-w-full">
          <BlockContent
            className="main-font"
            blocks={singleExperience.description}
            projectId="0qak8qh4"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
