import React from "react";
import { FaBook } from "react-icons/fa";

function Home() {
	return (
		<div className="w-50 p-4 container">
			<div className="d-flex  justify-content-center">
				<FaBook size={100} />
				<h1 className="p-4">A journey to your life</h1>
			</div>
			<div className="d-flex align-items-center flex-column">
				<h2>Tell your story</h2>
				<h2>Journal from anywhere</h2>
				<p className="p-4">
					Whether you’re looking for a tool to record your daily emotions and
					activities in a reflective journal, keep track of milestones in a diet
					or Workout journal, or even record your dreams in a dream journal,
					e-Journal has you covered.
				</p>
				<br />
				<p className="px-4">
					Privacy is our #1 Concern Even when carefully kept, paper journals can
					be read by anyone who happens upon them. e-Journal keeps your journals
					safe with double password protection and military strength encryption
					so you can rest easy knowing that your entries are secure in the
					e-Journal Vault.
				</p>
				<b>
					Made with ❤️ by{" "}
					<a href="https://github.com/shwetasharma21">Shweta Sharma</a>
				</b>
			</div>
		</div>
	);
}

export default Home;
