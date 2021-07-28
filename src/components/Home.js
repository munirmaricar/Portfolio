import React from 'react';
import TypeIt from 'typeit-react';
import coding from '../media/Coding.webp';
export default function Home() {
	return (
		<main className="py-12 px-5 align-middle pt-20 mt-18">
			<section className="row one">
				<div className="col-md-8">
					<TypeIt
						className="main-font text-6xl cursor"
						options={{
							waitUntilVisible: true,
							speed: 50,
							startDelay: 1000,
						}}
						getBeforeInit={(instance) => {
							instance
								.type(
									'Hello! My name is Munirudeen Maricar, and I am a final-year Artificial Intelligence and Computer Science student.'
								)
								.pause(2000)
								.delete(66)
								.type('a software developer.')
								.pause(2000)
								.delete(21)
								.type('a gym enthusiast???')
								.pause(2000)
								.delete(19)
								.type('quite honestly, just a nerd.');

							// Remember to return it!
							return instance;
						}}
					/>
				</div>
				<div class="col-md-3">
					<img
						src={coding}
						alt="An illustration of me coding."
						style={{
							height: 'auto',
							width: '275px',
							marginLeft: '75px',
						}}
					/>
				</div>
			</section>
		</main>
	);
}
