export function Header() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 h-20 w-full bg-red-500">
        <span className="text-white text-2xl">Dinur Temirbay</span>
        <div className="flex text-white text-xl">
          <a href="#about" className="px-5">
            About
          </a>
          <a href="#projects" className="px-5">
            Projects
          </a>
          <a href="#skills" className="px-5">
            Skills
          </a>
          <a href="#beta" className="px-5">
            Beta
          </a>
        </div>
      </nav>
    </>
  );
}
