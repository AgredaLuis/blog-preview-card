import "./App.css";
import { imageAvatar, illustration } from "./assets/images";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-Yellow p-4">
      <div className="bg-White p-6 rounded-2xl border border-black flex flex-col gap-3 max-w-[385px] duration-500 ease-out my-custom-shadow">
        <img src={illustration} alt="svg" className="mb-3 w-full h-[200px] rounded-lg object-cover object-center" />
        {/* tags */}
        <div className="text-Black bg-Yellow rounded px-4 py-1 text-base w-fit font-extrabold">
          Learning
        </div>
        <p className="text-base text-Gray font-extrabold">
          Published 21 Dec 2023
        </p>
        <h1 className="hover:text-Yellow text-2xl text font-extrabold cursor-pointer duration-500 ease-out">
          HTML & CSS foundations
        </h1>
        <p className="text-Gray text-base pb-2">
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
