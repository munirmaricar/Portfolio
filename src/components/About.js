import React from 'react';
import me from '../media/Me.webp';

export default function About() {
	return (
		<main className="py-12 px-5 align-middle">
			<section className="row one">
				<div className="col-md-8"></div>
				<div class="col-md-3">
					<img
						src={me}
						alt="A portrait of me."
						style={{ height: 'auto', width: '275px' }}
					/>
				</div>
			</section>
		</main>
	);
}
