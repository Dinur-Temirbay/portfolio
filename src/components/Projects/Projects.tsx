export function Projects() {
  return (
    <div className="flex justify-center w-full bg-red-50" id="projects">
      <div className="py-20 w-4/5">
        <h2 className="text-4xl text-center">Projects</h2>
        <div className="border-2 mt-1 border-red-500 w-[7%] mx-auto rounded-sm "></div>
        <div className="flex justify-between mt-20">
          <div className="w-56 rounded-md p-3 shadow-xl bg-red-200 cursor-pointer hover:scale-105 transition ease-in-out">
            <img
              src="project1.png"
              alt="project1"
              className="rounded-lg h-40 w-full object-contain bg-black"
            />
            <p className="text-center text-lg mt-2">Spotify Clone</p>
            <p className="text-center text-sm py-2">
              React, TypeScript, TailWindCss, ReactRouter, ReactSlick
            </p>
            <p className="text-center text-sm">
              Spotify Clone - where users can browse playlists, subscribe to
              artists, add tracks to favorites, and view lyrics.
            </p>
          </div>
          <div className="w-56 rounded-md p-3 shadow-xl bg-red-200 cursor-pointer hover:scale-105 transition ease-in-out">
            <img
              src="project2.png"
              alt="project1"
              className="rounded-lg h-40 w-full object-contain bg-black"
            />
            <p className="text-center text-lg mt-2">Weather App</p>
            <p className="text-center text-sm py-2">Html, Css, JavaScript</p>
            <p className="text-center text-sm">
              Whether App - to get up-to-date information about the weather in
              the selected city.
            </p>
          </div>
          <div className="w-56 rounded-md p-3 shadow-xl bg-red-200 cursor-pointer hover:scale-105 transition ease-in-out">
            <img
              src="project3.png"
              alt="project1"
              className="rounded-lg h-40 w-full object-contain bg-black"
            />
            <p className="text-center text-lg mt-2">Platformer</p>
            <p className="text-center text-sm py-2">Html, Css, JavaScript</p>
            <p className="text-center text-sm">
              A 2D JavaScript game using Canvas, where the player controls a
              character by overcoming obstacles and moving between levels.
            </p>
          </div>
          <div className="w-56 rounded-md p-3 shadow-xl bg-red-200 cursor-pointer hover:scale-105 transition ease-in-out">
            <img
              src="project4.png"
              alt="project1"
              className="rounded-lg h-40 w-full object-contain bg-black"
            />
            <p className="text-center text-lg mt-2">Card Manager</p>
            <p className="text-center text-sm py-2">Java Script, Html, Sass</p>
            <p className="text-center text-sm">
              Card Manager - Interface for selecting and adding payment methods
              with the ability to enter card details, check expiry date and CVV.
            </p>
          </div>
          <div className="w-56 rounded-md p-3 shadow-xl bg-red-200 cursor-pointer hover:scale-105 transition ease-in-out">
            <img
              src="project5.png"
              alt="project1"
              className="rounded-lg h-40 w-full object-contain bg-black"
            />
            <p className="text-center text-lg mt-2">To-Do-List</p>
            <p className="text-center text-sm py-2">React, TailWindCss</p>
            <p className="text-center text-sm">
              ToDo-list for task management: add, edit, complete and delete with
              a user-friendly interface. Implemented using React and CSS
              modules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
