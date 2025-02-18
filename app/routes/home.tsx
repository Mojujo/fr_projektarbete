import type { Route } from "./+types/home";
import { CustomHeader } from "./components/CustomHeader";
import DarkThemeToggle from "./components/DarkThemeToggle";
import TaskList from "./components/TaskList";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <CustomHeader></CustomHeader>
      <div>
        <TaskList />
      </div>
    </>
  )
}
