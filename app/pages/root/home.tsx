import NavBar from "../../components/navbar";
import { GreetingTile } from "../../components/greetingTile";
import TypingText from "../../components/typingText";

export function Main() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen min-h-0 grid grid-rows-[auto_1fr]">
      <div className="h-full mb-2">
        <NavBar />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-12 px-4">
        <div>
          <TypingText text="Welcome!" speed={150} />
          <div className="text-lg text-gray-400 max-w-md">
            <p>
              I'm Jon Chapman, a full stack developer with a passion for creating awesome applications, solving challenging problems, and learning new technologies!
            </p>
          </div>
        </div>
        <div>
          <GreetingTile />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center h-full gap-12 pt-4">
        <h1 className="text-5xl">My Experience</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="block p-6 bg-slate-900 border border-slate-400 rounded-lg shadow-sm hover:bg-slate-800 transition-colors duration-300">
          <div className="flex flex-row justify-between mb-1">
            <h2 className="text-xl">G.A. Richards Group; Applications Developer II</h2>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-xs text-gray-200 font-bold">GRAND RAPIDS, MI</p>
            <p className="text-xs text-gray-200 font-bold">06/2022 - PRESENT</p>
          </div>
          <hr className="my-2"></hr>
          <p className="text-md">
            I worked as a full stack developer at G.A. Richards Group, where I developed and maintained web applications using React, Node.js, and MongoDB. I also collaborated with cross-functional teams to deliver high-quality software solutions.
          </p>
        </div>
      </div>
    </main>
  );
}