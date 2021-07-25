import React from 'react';

export default function Home() {
	return (
		<main>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<h2 className="text-6xl text-green-100 main-font leading-none lg:leading-snug">
					Hello! My name is Munirudeen Maricar, and here is a sneak
					peek into my life as a Computer Science student.
				</h2>
				<img
					src="{image}"
					className="absolute object-cover w-full h-full"
					alt="Me frantically coding, not giving a care in the world, to meet a deadline."
				/>
			</section>
		</main>
	);
}
