import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {Footer} from "./components/Footer";
import { TaskInput } from "./components/TaskInput";
import { Task } from "./components/Task";
import type { TaskCardProps } from "./libs/types";


function App() {
  const TaskCard: TaskCardProps[] = [
    {id: 1,title: "Read a book",description: "Vite + React + Boostrap + TS",isDone: false},
    {id: 2,title: "Write Code",description: "Finish project for class",isDone: false},
    {id: 3,title: "Deploy app",description: "Push project to GitHub Pages",isDone: false},
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />

      <div className="d-flex flex-grow-1">
        <Sidebar userName="Tanida" type="student"></Sidebar>


        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <TaskInput />
            {/* Card รายการ */}
            <Task {...TaskCard[0]} />
            <Task {...TaskCard[1]} />
            <Task {...TaskCard[2]} />
          </main>
        </div>
      </div>

      <Footer year="2026" fullName="Tanida Ruamsook" studentId="670610685"></Footer>
    </div>
  );
}

export default App;
