import { projectsInfo } from './projectsInfo'

export function Projects() {
	return (
		<div className='w-full py-20 bg-red-50' id='projects'>
			<div className='flex flex-col container mx-auto'>
				<h2 className='text-4xl text-center'>Projects</h2>
				<div className='border-2 mt-1 border-red-500 w-[7%] mx-auto rounded-sm '></div>
				<div className='flex justify-center gap-10 mt-20 md:flex-wrap'>
					{projectsInfo.map((project, index) => (
						<div
							key={index}
							className='w-56 rounded-md p-3 shadow-xl bg-red-200 cursor-pointer hover:scale-105 transition ease-in-out'
						>
							<img
								src={project.img}
								alt={project.title}
								className='rounded-lg h-40 w-full object-contain bg-red-300'
							/>
							<p className='text-center text-lg mt-2'>{project.title}</p>
							<p className='text-center text-sm py-2'>{project.tech}</p>
							<p className='text-center text-sm'>{project.desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
