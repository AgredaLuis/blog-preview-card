import "./App.css";
import { imageAvatar, illustration } from "./assets/images";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-Yellow p-4">
      <div className="bg-White p-4 rounded-2xl border border-black flex flex-col gap-4 max-w-[365px] duration-500 ease-out my-custom-shadow">
        <img src={illustration} alt="svg" className="rounded-lg" />
        {/* tags */}
        <div className="text-black bg-Yellow rounded px-3 py-1 text-sm w-fit font-bold">
          Leaning
        </div>
        <p className="text-base font-bold">
          Published 21 Dec 2023
        </p>
        <h1 className="hover:text-Yellow text-2xl text font-bold cursor-pointer duration-500 ease-out">
          HTML & CSS foundations
        </h1>
        <p className="text-Gray text-base">
            These languages are the backgbon of every website, definnig
            structure, content, and presentation.
          </p>
          <div className="flex gap-4 items-center">
            {/* image */}

            <img className="h-8 w-8 " src={imageAvatar} alt="user-image" />
            <p className="font-bold text-sm">Greg Hooper</p>
          </div>
        </div>
    </main>
  );
}

export default App;