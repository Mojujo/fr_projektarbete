import type { Route } from "./+types/home";
import { CustomHeader } from "./components/CustomHeader";
import TaskList from "./components/TaskList";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Homepage" },
    { name: "description", content: "Welcome to my site" },
  ];
}

export default function Home() {
  return (
    <>
      <CustomHeader />
      <main>
        <TaskList />
      </main>
    </>
  )
}
