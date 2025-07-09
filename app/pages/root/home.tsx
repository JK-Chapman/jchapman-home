import NavBar from "../../components/navbar";
import { GreetingTile } from "../../components/greetingTile";
import TypingText from "../../components/typingText";

export function Main() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 h-screen min-h-0 grid grid-rows-[auto_1fr]">
      <div className="h-full">
        <NavBar />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-12 px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <TypingText text="Welcome!" speed={150} />
          <div className="mt-4 text-lg text-gray-400 max-w-md">
            <p>
              I'm Jon Chapman, a full stack developer with a passion for creating awesome applications, solving challenging problems, and learning new technologies!
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <GreetingTile />
        </div>
      </div>
    </main>
  );
}