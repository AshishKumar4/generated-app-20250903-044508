# Clarity: A Minimalist Todo App

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/AshishKumar4/generated-app-20250903-044508)

Clarity is a minimalist, visually-driven todo list application designed to provide a serene and focused task management experience. Built on the principles of 'less is more', it features a clean, spacious layout, a calming color palette, and fluid animations. The core functionality allows users to add, complete, delete, and filter tasks. All tasks are persisted in the browser's local storage for a seamless session-to-session experience.

## ✨ Key Features

- **Add, Complete, and Delete Tasks**: Effortless task management with intuitive controls.
- **Task Filtering**: View all, active, or completed tasks with a single click.
- **Local Storage Persistence**: Your tasks are saved in your browser, so they're always there when you return.
- **Stunning Minimalist UI**: A clean, spacious, and calming interface designed for focus.
- **Fluid Animations**: Smooth and satisfying animations for all interactions, powered by Framer Motion.
- **Responsive Design**: A flawless experience on any device, from mobile phones to desktops.
- **Light & Dark Mode**: Beautifully crafted themes to match your preference.

## 🚀 Technology Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/clarity_todo.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd clarity_todo
    ```
3.  Install the dependencies:
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
bun dev
```

The application will be available at `http://localhost:3000` (or another port if 3000 is in use).

## 🛠️ Development

The core application logic is contained within the `src` directory.

-   `src/App.tsx`: The main application component containing the layout and primary UI.
-   `src/store/todoStore.ts`: The Zustand store that manages all application state.
-   `src/components/`: Contains reusable React components.
-   `src/components/ui/`: Pre-built shadcn/ui components.
-   `src/index.css`: Global styles and Tailwind CSS directives.

## ☁️ Deployment

This project is optimized for deployment on the Cloudflare platform.

To deploy your application, simply run the build command followed by the deploy command:

```bash
# Build the application for production
bun run build

# Deploy to Cloudflare
bun run deploy
```

Alternatively, you can deploy directly to Cloudflare with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/AshishKumar4/generated-app-20250903-044508)