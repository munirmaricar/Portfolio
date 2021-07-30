import React from 'react';
import TypeIt from 'typeit-react';
import coding from '../media/Coding.webp';

export default function Home() {
	return (
		<main className="px-5 align-middle mt-8 mb-44 md:mt-16 md:mb-14 lg:mt-36 lg:mb-48">
			<section className="grid grid-cols-1 lg:grid-cols-3">
				<div className="col-span-2">
					<TypeIt
						className="main-font font-medium text-4xl cursor md:text-6xl"
						options={{
							waitUntilVisible: true,
							speed: 50,
							startDelay: 1000,
						}}
						getBeforeInit={(instance) => {
							instance
								.type(
									'Hi! My name is Munirudeen Maricar, and I am a technology-obsessed nerd.'
								)
								.pause(2000)
								.delete(25)
								.type('software developer.')
								.pause(2000)
								.delete(19)
								.type('gym enthusiast???')
								.pause(2000)
								.delete(17)
								.type(
									'final-year Artificial Intelligence and Computer Science student.'
								);

							return instance;
						}}
					/>
					{/* <h1 className="text-4xl cursor md:text-6xl main-font font-medium">
						Hi! My name is Munirudeen Maricar, and I am a final-year
						Artificial Intelligence and Computer Science student.
					</h1> */}
				</div>
				<div class="col-span-1">
					<center>
						<img
							src={coding}
							className="mx-auto mt-6 h-auto w-screen md:w-full md:mt-10 lg:mt-auto"
							alt="An illustration of me coding."
						/>
					</center>
				</div>
			</section>
		</main>
	);
}
