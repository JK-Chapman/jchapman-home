import Sidebar from "../../components/sidebar";
import { GreetingTile } from "../../components/greetingTile";
import { GreetingText } from "../../components/greetingText";

export function Main() {
  return (
    <main className="grid grid-cols-[10%_90%]">
      <div className="ml-4">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <div>
          <GreetingText />
          {/* <h1 className="text-4xl font-bold text-center mb-4">Welcome to My Website!</h1> */}
        </div>
        <div className="flex flex-row items-center justify-center mb-4">
          <GreetingTile />
        </div>
        <div className="flex flex-row items-center justify-center mb-4">
          B
        </div>
        <div className="flex flex-row items-center justify-center mb-4">
          C
        </div>
      </div>
    </main>
  );
}

