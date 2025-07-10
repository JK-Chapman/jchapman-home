import type { Route } from "./+types/home";
import { Main } from "../pages/root/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jon Chapman" },
    { name: "description", content: "Welcome to my website!" },
  ];
}

export default function Home() {
  return <Main />;
}
