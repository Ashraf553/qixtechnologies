# QIX Technologies — Next-Gen AI & Associative Computing Platform

A premium, futuristic software development studio and agency portfolio website. Built with React, Vite, and custom high-fidelity interactive elements, it features smooth scrolling, dynamic particle canvases, 3D overlays, glassmorphic UI components, and state management.

---

## 🚀 Key Features

*   **Custom Trailing Cursor**: A dual cursor trailing effect utilizing Lerp interpolation that scales and morphs when hovering over interactive elements.
*   **Smooth Scroll**: Powered by `Lenis` smooth-scroll library for high-end scrolling dynamics.
*   **3D / Particle Canvas**: Morphing interactive dot structures (`ResearchCanvas`, `NumbersCanvas`) that shift patterns dynamically.
*   **Stacking Cards**: A sticky portfolio showcase section (`HubRecipeCook`, `Aether Analytics Suite`, `Nebula Cloud Console`) where cards stack over each other with scale, blur, and opacity adjustments on scroll.
*   **Interactive Synthesizer Panel**: A floating action button drawer that allows users to tweak real-time visualization settings.
*   **Authentications Flow**: Integrates a glassmorphic authorization login/logout state via `Zustand` store.
*   **Interactive Drawer**: A "Start a Project" drawer allowing interactive onboarding forms.
*   **Modern Typography**: Utilizes `Geist` (modern clean sans-serif) for structure and `Instrument Serif` (elegant serif) for dramatic emphasis.

---

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
*   **Styling**: Pure high-performance Vanilla CSS (custom design system, grid, animations)
*   **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
*   **3D & Graphics**: [Three.js](https://threejs.org/) (used in background & visualizer canvases)
*   **State Management**: [Zustand](https://github.com/pmndrs/zustand) (for client auth and interactive states)

---

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ashraf553/qixtechnologies.git
    cd qixtechnologies
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser to view the application.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This compiles the production assets into the `dist/` directory.

---

## 📂 Project Structure

```text
├── public/                 # Static assets (logos, images)
├── src/
│   ├── components/         # Reusable interactive components
│   │   ├── FluidBackground.jsx
│   │   ├── InteractiveDots.jsx
│   │   ├── LoginModal.jsx
│   │   ├── Magnetic.jsx
│   │   ├── NumbersCanvas.jsx
│   │   ├── ProjectSidebar.jsx
│   │   ├── ResearchCanvas.jsx
│   │   └── SettingsPanel.jsx
│   ├── store/              # Global state management
│   │   └── useAuthStore.js # Zustand authentication store
│   ├── App.jsx             # Main Application layout and scroll hooks
│   ├── main.jsx            # React Entry point
│   └── index.css           # Global custom style tokens & utilities
├── index.html              # HTML shell & font injections
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite bundler configurations
```

---

## 📄 License

This project is private and proprietary. All rights reserved by QIX Technologies Inc. 2026.
