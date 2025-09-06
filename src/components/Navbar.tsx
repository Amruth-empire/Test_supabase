import React from "react";

export default function Navbar() {
	return (
		<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="h-16 flex items-center">
					<span className="text-lg font-semibold text-gray-900">Task Manager App</span>
				</div>
			</div>
		</nav>
	);
}
