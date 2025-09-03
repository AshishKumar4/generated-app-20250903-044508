import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidv4 } from 'uuid';
export type Task = {
  id: string;
  text: string;
  completed: boolean;
};
export type Filter = 'all' | 'active' | 'completed';
type TodoState = {
  tasks: Task[];
  filter: Filter;
  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  setFilter: (filter: Filter) => void;
};
export const useTodoStore = create<TodoState>()(
  persist(
    immer((set) => ({
      tasks: [],
      filter: 'all',
      addTask: (text) =>
        set((state) => {
          state.tasks.push({ id: uuidv4(), text, completed: false });
        }),
      toggleTask: (id) =>
        set((state) => {
          const task = state.tasks.find((task) => task.id === id);
          if (task) {
            task.completed = !task.completed;
          }
        }),
      deleteTask: (id) =>
        set((state) => {
          state.tasks = state.tasks.filter((task) => task.id !== id);
        }),
      setFilter: (filter) =>
        set((state) => {
          state.filter = filter;
        }),
    })),
    {
      name: 'clarity-todo-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);