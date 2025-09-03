import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Plus, Trash2, X } from 'lucide-react';
import { useTodoStore, Filter } from './store/todoStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from './components/ThemeToggle';
const CalSansFontLoader = () => (
  <style>
    {`
      @font-face {
        font-family: 'Cal Sans';
        src: url('https://cdn.jsdelivr.net/gh/calcom/font@main/fonts/CalSans-SemiBold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
    `}
  </style>
);
export function App() {
  const tasks = useTodoStore((state) => state.tasks);
  const filter = useTodoStore((state) => state.filter);
  const { addTask, toggleTask, deleteTask, setFilter } = useTodoStore();
  const [newTaskText, setNewTaskText] = useState('');
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      addTask(newTaskText.trim());
      setNewTaskText('');
    }
  };
  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter(task => !task.completed);
    if (filter === 'completed') return tasks.filter(task => task.completed);
    return tasks;
  }, [tasks, filter]);
  const activeTasksCount = useMemo(() => tasks.filter(task => !task.completed).length, [tasks]);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CalSansFontLoader />
      <div className="min-h-screen w-full flex flex-col items-center py-16 sm:py-24 px-4 font-sans">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <main className="w-full max-w-2xl mx-auto flex flex-col space-y-8">
          <header className="text-center space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Cal Sans', sans-serif" }}>
              Clarity
            </h1>
            <p className="text-muted-foreground text-lg">A Minimalist Todo App</p>
          </header>
          <form onSubmit={handleAddTask} className="relative">
            <Input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add a new task..."
              className="h-12 text-lg pl-5 pr-12 rounded-lg shadow-sm focus:ring-2 focus:ring-primary/50"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-md"
              aria-label="Add task"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </form>
          <div className="bg-card/50 backdrop-blur-sm border rounded-lg shadow-sm overflow-hidden min-h-[200px]">
            <AnimatePresence>
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                    className="group flex items-center p-4 border-b last:border-b-0"
                  >
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="h-6 w-6 rounded-full transition-all duration-300"
                      aria-label={`Mark task as ${task.completed ? 'incomplete' : 'complete'}`}
                    />
                    <label
                      htmlFor={`task-${task.id}`}
                      className={cn(
                        "flex-1 ml-4 text-lg transition-all duration-300",
                        task.completed ? "text-muted-foreground line-through" : "text-foreground"
                      )}
                    >
                      {task.text}
                    </label>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTask(task.id)}
                      className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                      aria-label="Delete task"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full p-8 text-center text-muted-foreground"
                >
                  <Check className="h-12 w-12 mb-4" />
                  <p className="text-lg font-medium">All clear!</p>
                  <p>Looks like you're on top of things.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {tasks.length > 0 && (
            <footer className="flex items-center justify-between text-sm text-muted-foreground p-2 bg-card/50 backdrop-blur-sm border rounded-lg shadow-sm">
              <span>{activeTasksCount} {activeTasksCount === 1 ? 'item' : 'items'} left</span>
              <div className="flex items-center space-x-1">
                {(['all', 'active', 'completed'] as Filter[]).map((f) => (
                  <Button
                    key={f}
                    variant={filter === f ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setFilter(f)}
                    className="capitalize"
                  >
                    {f}
                  </Button>
                ))}
              </div>
            </footer>
          )}
        </main>
        <footer className="absolute bottom-8 text-center text-muted-foreground/80">
          <p>Built with ❤️ at Cloudflare</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}