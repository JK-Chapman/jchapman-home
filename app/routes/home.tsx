import type { Route } from "./+types/home";
import { Main } from "../pages/root/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jonathan Chapman" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Main />;
}
