import Sidebar from "../../components/sidebar";
import { GreetingTile } from "../../components/greetingTile";

export function Main() {
  return (
    <main className="grid grid-cols-[10%_90%]">
      <div className="ml-4">
        <Sidebar />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <GreetingTile />
        </div>
        <div className="">
          B
        </div>
        <div className="">
          C
        </div>
      </div>
    </main>
  );
}

