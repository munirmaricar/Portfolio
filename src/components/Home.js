import React from 'react';
import TypeIt from 'typeit-react';
import coding from '../media/Coding.webp';

export default function Home() {
	return (
		<main className="px-5 align-middle sm:mt-4 md:mt-16 lg:mt-36">
			<section className="grid grid-cols-1 lg:grid-cols-3">
				<div className="col-span-2">
					<TypeIt
						className="main-font text-4xl cursor md:text-6xl"
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
				</div>
				<div class="col-span-1">
					<center>
						<img
							src={coding}
							className="mx-auto mt-10 md:mt-14 lg:mt-auto h-auto sm:w-64 md:w-96 lg:position-relative"
							alt="An illustration of me coding."
						/>
					</center>
				</div>
			</section>
		</main>
	);
}
