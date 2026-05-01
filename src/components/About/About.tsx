import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export function About() {
	return (
		<>
			<div className='flex justify-center w-full bg-red-200' id='about'>
				<div className='w-1/2 py-20'>
					<h1 className='text-4xl text-center'>Hello World, I`m Dinur!</h1>
					<div className='border-2 mt-1 border-red-500 w-[12%] mx-auto rounded-sm '></div>
					<img
						src='me.jpg'
						alt='me'
						className='w-60 h-60 rounded-full shadow-2xl block mx-auto my-6 object-cover'
					/>
					<p className='text-center text-xl'>
						I'm a frontend developer, creating user-friendly and modern
						websites. I'm proficient with React, TypeScript, and modern styles
						(Tailwind, SCSS). I love learning new things and turning ideas into
						high-quality products.
					</p>
					<div className='flex justify-center mt-6'>
						<a href='#'>
							<FaInstagram
								size={30}
								className='mx-3 text-red-500 hover:scale-105 transition ease-in-out'
							/>
						</a>
						<a href='https://www.linkedin.com/in/dinur-temirbay-295662274/'>
							<FaLinkedin
								size={30}
								className='mx-3 text-red-500 hover:scale-105 transition ease-in-out'
							/>
						</a>
						<a href='https://github.com/Dinur-Temirbay'>
							<FaGithub
								size={30}
								className='mx-3 text-red-500 hover:scale-105 transition ease-in-out'
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
