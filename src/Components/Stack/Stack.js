import React from "react";
import { FaBeer } from "react-icons/fa";

const Stack = () => {
	const tech = [
		{
			name: "HTML/CSS",
			icon: {},
			description: "HTML5 and CSS3 are the core technologies of the web. HTML5 is the latest version of the HTML language, and CSS3 is the latest version of the CSS language.",
		},
		{
			name: "HTML/CSS",
			icon: {},
			description: "HTML5 and CSS3 are the core technologies of the web. HTML5 is the latest version of the HTML language, and CSS3 is the latest version of the CSS language.",
		},
		{
			name: "HTML/CSS",
			icon: {},
			description: "HTML5 and CSS3 are the core technologies of the web. HTML5 is the latest version of the HTML language, and CSS3 is the latest version of the CSS language.",
		},
		{
			name: "HTML/CSS",
			icon: {},
			description: "HTML5 and CSS3 are the core technologies of the web. HTML5 is the latest version of the HTML language, and CSS3 is the latest version of the CSS language.",
		},
		{
			name: "HTML/CSS",
			icon: {},
			description: "HTML5 and CSS3 are the core technologies of the web. HTML5 is the latest version of the HTML language, and CSS3 is the latest version of the CSS language.",
		},
		{
			name: "HTML/CSS",
			icon: {},
			description: "HTML5 and CSS3 are the core technologies of the web. HTML5 is the latest version of the HTML language, and CSS3 is the latest version of the CSS language.",
		},
	];
	return (
		<section className="text-white font-Nunito">
			<section>
				<h3>
					HOW CAN I <span>HELP YOU?</span>
				</h3>
				<h3>Tech Stack</h3>
			</section>
			<section>
				<h2>TECHNOLOGIES</h2>
			</section>
			<section className="grid grid-cols-4">
				{tech.map((items, id) => {
					return (
						<section className="flex gap-2 items-center justify-center flex-col " key={id}>
							<FaBeer />
							<h3 className="">{items.name}</h3>
							<p className="">{items.description}</p>
						</section>
					);
				})}
			</section>
		</section>
	);
};

export default Stack;
