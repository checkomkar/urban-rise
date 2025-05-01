"use client";

export default function ContactForm() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Add your form submission logic here
		console.log("Form submitted");
	};

	return (
		<div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
			<h2 className="text-3xl font-bold text-center mb-8 text-[#0A192F]">
				Contact Us
			</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label
							htmlFor="firstName"
							className="block text-sm font-medium text-[#0A192F] mb-2"
						>
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
							placeholder="Enter your first name"
						/>
					</div>
					<div>
						<label
							htmlFor="lastName"
							className="block text-sm font-medium text-[#0A192F] mb-2"
						>
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
							placeholder="Enter your last name"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-[#0A192F] mb-2"
					>
						Email Address
					</label>
					<input
						type="email"
						id="email"
						className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
						placeholder="Enter your email"
					/>
				</div>
				<div>
					<label
						htmlFor="phone"
						className="block text-sm font-medium text-[#0A192F] mb-2"
					>
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
						placeholder="Enter your phone number"
					/>
				</div>
				{/* field for country */}
				<div>
					<label
						htmlFor="country"
						className="block text-sm font-medium text-[#0A192F] mb-2"
					>
						Country
					</label>
					<input
						type="text"
						id="country"
						className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
						placeholder="Enter your country"
					/>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-[#0A192F] mb-2"
					>
						Type of Property you are looking for?
					</label>
					<textarea
						id="message"
						rows={4}
						className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-500 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
						placeholder="Type of Property you are looking for?"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-[#ffda62] text-[#0A192F] py-3 px-6 rounded-lg font-semibold hover:bg-[#e8b921] transition-colors duration-200"
				>
					Send Message
				</button>
			</form>
		</div>
	);
}
