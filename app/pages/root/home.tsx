import NavBar from "../../components/navbar";
import { GreetingTile } from "../../components/greetingTile";
import TypingText  from "../../components/typingText";

export function Main() {
  return (
    <main className="grid grid-rows-[auto_1fr] h-screen min-h-0">
      <div className="h-full mb-3">
        <NavBar />
      </div>
      <div className="flex justify-between mb-2 h-full overflow-auto">
        <div className="flex-col">
          <div className="flex-row ml-4">
            <div>
              <TypingText text="Welcome!" speed={125} />
            </div>
          </div>
          <div className="flex-row items-center justify-center mb-4">
            B
          </div>
          <div className="flex-row items-center justify-center mb-4">
            C
          </div>
        </div>
        <div className="flex-col">
          <div className="flex-row">
            <GreetingTile />
          </div>
        </div>
      </div>
    </main>
  );
}

