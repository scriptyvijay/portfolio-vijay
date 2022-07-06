import React from "react";
import avatar from "../../assets/img/avatar.png";

const Header = () => {
	return (
		<section className="flex flex-row text-white justify-around items-center pt-20">
			<section className="flex flex-col items-start gap-2 sm:gap-4 lg:gap-8">
				<h1 className="font-Nunito font-semibold text-2xl sm:text-5xl lg:text-7xl">Vijay Choudhary</h1>
				<h2 className="text-xl font-medium sm:text-3xl lg:text-5xl">
					Full-Stack<span className="font-light"> Developer</span>
				</h2>
				<button className="bg-red-600 text-white py-2 px-2 lg:p-4 rounded">Download Resume</button>
			</section>
			<img src={avatar} alt="avatar" className="w-1/3 lg:w-1/4 sm:w-1/5" />
		</section>
	);
};

export default Header;
