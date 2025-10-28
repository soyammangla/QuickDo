"use client";
import { useState } from "react";
import { PlusCircle, Trash2, CheckCircle } from "lucide-react";

type Task = {
  id: number;
  text: string;
  done: boolean;
};

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), done: false }]);
    setNewTask("");
  };

  const toggleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 py-12 px-4 flex justify-center transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-800 shadow-xl rounded-2xl p-8 transition-colors duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          QuickDo Tasks
        </h1>

        {/* Input Section */}
        <div className="flex items-center gap-2 mb-8">
          <input
            type="text"
            className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 outline-none bg-white dark:bg-neutral-700 transition-colors duration-300"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="flex items-center gap-2 bg-black dark:bg-neutral-900 text-white px-5 py-3 rounded-xl transition font-medium hover:opacity-90"
          >
            <PlusCircle size={20} /> Add
          </button>
        </div>

        {/* Task List */}
        {tasks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg">✨ No tasks yet. Start by adding one!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center bg-gray-50 dark:bg-neutral-700 border border-gray-300 dark:border-gray-600 rounded-xl p-4 hover:shadow-md transition-colors duration-300"
              >
                <span
                  className={`flex-1 text-lg ${
                    task.done ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.text}
                </span>

                <div className="flex gap-3">
                  <button
                    onClick={() => toggleDone(task.id)}
                    className="text-green-600 hover:scale-110 transition"
                    title={task.done ? "Mark as not done" : "Mark as done"}
                  >
                    <CheckCircle />
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-600 hover:scale-110 transition"
                    title="Delete task"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
