export function Header() {
	return (
		<>
			<nav className='p-4 w-full bg-red-500'>
				<div className='container mx-auto flex justify-between items-center'>
					<span className='text-white text-2xl hover:text-black transition ease-in-out'>
						Dinur Temirbay
					</span>
					<div className='flex text-white text-xl gap-8'>
						<a
							href='#about'
							className='hover:text-black transition ease-in-out'
						>
							About
						</a>
						<a
							href='#projects'
							className='hover:text-black transition ease-in-out'
						>
							Projects
						</a>
						<a
							href='#skills'
							className='hover:text-black transition ease-in-out'
						>
							Skills
						</a>
						<a href='#beta' className='hover:text-black transition ease-in-out'>
							Beta
						</a>
					</div>
				</div>
			</nav>
		</>
	)
}
