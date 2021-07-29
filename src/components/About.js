import React from 'react';
import me from '../media/Me.webp';

export default function About() {
	const getAge = () => {
		var today = new Date();
		var birthDate = new Date('2000-02-21');
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	};

	return (
		<main className="px-5 align-middle sm:mt-2 mb-10 md:mt-8 lg:mt-18">
			<h1 className="text-5xl flex justify-center underline main-font page-header font-bold">
				About Me
			</h1>
			<section className="grid grid-cols-1 lg:grid-cols-3">
				<div className="col-span-2">
					<h1 className="main-font text-2xl font-normal mt-8 lg:mt-14">
						I usually go by Munir, and I am {getAge()} years old. I
						am a student at the{' '}
						<a
							className="nav-item no-underline"
							target="_blank"
							rel="noopener noreferrer"
							href="https://cs.ui.ac.id/"
						>
							University of Indonesia
						</a>
						, presently undergoing a double-degree study-abroad
						programme, majoring in BSc Artificial Intelligence and
						Computer Science at the{' '}
						<a
							className="nav-item no-underline"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.birmingham.ac.uk/schools/computer-science/index.aspx"
						>
							University of Birmingham
						</a>
						. A brief description of me is that I am an ambitious
						and hard-working person who strives to learn from his
						mistakes. I am eagerly motivated to perpetually develop
						my skills and grow professionally in a working
						environment. <br></br>
						<br></br>I consider myself an extrovert who likes to
						work out and spend time with friends and family,
						highlighting the{' '}
						<a
							className="nav-item no-underline"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.16personalities.com/enfj-personality"
						>
							ENFJ
						</a>{' '}
						in me. Being a student in the technology industry, I was
						never the biggest fan of programming because it was not
						my forté. However, I started enjoying it a lot more once
						I took up projects I was interested in. Another reason
						for my boost of productivity is my music choice while
						writing code. Although it might not be
						&#8220;soothing&#8221;, it definitely gets my brain
						working. Check out the music below if you are curious!
					</h1>
				</div>
				<div class="col-span-1 items-center">
					<center>
						<img
							src={me}
							alt="A portrait of me."
							className="mx-auto mt-10 h-auto sm:w-64 md:w-96"
						/>
					</center>
				</div>
			</section>
			<iframe
				title="My Spotify Playlist"
				className="mt-10 h-96 w-full"
				src="https://open.spotify.com/embed/playlist/6I48zZYGqvzqPrr6g8feZE?theme=0"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
			></iframe>
		</main>
	);
}
