# React Project Manager

A simple project and task management app built with React and Tailwind CSS.

## Features

- Create, view, and delete projects
- Add and remove tasks for each project
- Responsive and modern UI with Tailwind CSS
- Modal validation for project creation

## Project Structure

```
.
├── public/
│   └── logo.png
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── no-projects.png
│   └── components/
│       ├── Button.jsx
│       ├── Default.jsx
│       ├── Input.jsx
│       ├── Modal.jsx
│       ├── NewProject.jsx
│       ├── ShowProject.jsx
│       ├── SideBar.jsx
│       └── Tasks.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd 01-starting-project
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

To build the app for production:

```sh
npm run build
# or
yarn build
```

### Preview Production Build

```sh
npm run preview
# or
yarn preview
```

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
