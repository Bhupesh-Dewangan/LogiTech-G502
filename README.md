# LogoTech G502

A modern, animated landing page for the Logitech G502 gaming mouse, built with React and Vite.

## Preview
<img width="1902" height="912" alt="image" src="https://github.com/user-attachments/assets/cb353fbf-ad1b-433c-be4f-af8a35b34b75" />

---
<img width="1905" height="922" alt="image" src="https://github.com/user-attachments/assets/b9c2982e-9881-474c-8311-a0374f8769c1" />

---
<img width="1898" height="910" alt="image" src="https://github.com/user-attachments/assets/51137d64-a33a-45f1-86a6-34bf03e21694" />

## Overview

This project showcases a polished product experience with sections for:
- Hero introduction
- Product highlights
- Key features
- Technical specifications
- Contact information

The site uses smooth transitions and a responsive layout to present the product in an engaging way.

## 🚀 Product Features & Capabilities

### 🎯 Core Performance & Tracking

- **HERO 25K Optical Sensor:**
  - Ground-up sub-micron optical architecture engineered for competition-level accuracy.
  - Sensitivity range from **100 up to 25,600 DPI** with pinpoint tracking precision.
  - Delivers **400+ IPS** (Inches Per Second) maximum tracking speed and **> 40G** acceleration.
  - Zero smoothing, filtering, or acceleration across the full DPI spectrum for consistent 1:1 muscle-memory tracking.

- **11 Fully Programmable Buttons:**
  - Map essential game commands, macro sequences, melee attacks, building binds, or healing actions to 11 programmable controls.
  - Customized through Logitech G HUB to put critical actions immediately at your fingertips.
  - Includes integrated gesture button capabilities for enhanced workflow and tactical inputs.

- **On-the-Fly DPI Switching & Sniper Shift:**
  - Cycle up and down between up to 5 customizable DPI presets with a single click.
  - Built-in 3-stage LED DPI indicator lights provide instant visual sensitivity confirmation.
  - Dedicated thumb DPI Shift (Sniper Button) enables momentary low-DPI stability for pixel-perfect precision aiming in FPS titles.

### ⚙️ Ergonomics, Customization & Ecosystem

- **Tunable Weight & Balance System:**
  - Includes **five 3.6 g weights** (up to 18 g total) for tailored weight customization.
  - Repositionable across front, rear, left, right, and center balance points to calibrate center of gravity.
  - Convenient magnetic weight cavity door on the underside for rapid, tool-free adjustments.

- **Dual-Mode Hyper-Fast Scroll Wheel:**
  - Weighted metal scroll wheel offering two operational modes.
  - **Click-to-Click Ratchet Mode:** Tactile stepped scrolling for accurate weapon selections and inventory cycling.
  - **Hyper-Fast Free-Spinning Mode:** Low-friction, continuous scrolling to power through lengthy documents and web pages.

- **LIGHTSYNC Dynamic RGB:**
  - Full-spectrum lighting supporting approximately **16.8 million colors**.
  - Reactive effects driven by gameplay actions, audio visualizations, or on-screen colors.
  - Ecosystem synchronization across Logitech G keyboards, headsets, and mouse pads via Logitech G HUB.

- **Onboard Memory Profiles:**
  - Store up to **5 ready-to-play hardware profiles** directly on the mouse (firmware 127.1.7).
  - Travel-ready convenience: your personalized binds and DPI presets work on any PC without requiring background software or login.

### 🛡️ Build Quality & Durability

- **Mechanical Switch Reliability:** Primary left and right buttons feature mechanical switches rated for up to **50-million clicks**.
- **PTFE Low-Friction Feet:** High-grade PTFE feet engineered to sustain **> 250 km** of glide endurance.
- **Ergonomic Side Grips:** Dual-injected rubberized side contours that provide secure handling during fast sweeps.
- **Braided Cable:** 2.1-meter low-friction braided USB cable minimizing drag and tangles.
- **32-Bit ARM Microprocessor:** High-speed onboard processing delivering a **1000 Hz (1ms) USB polling rate** and 16 bits/axis data precision.

### 📋 Technical Specifications Matrix

| Category | Specification | Value / Detail |
| :--- | :--- | :--- |
| **Physical Dimensions** | Height × Width × Depth | 131.2 mm × 75.0 mm × 40.0 mm |
| **Weight** | Base Weight / Extra | 121 g (mouse only) / + up to 18 g (5 × 3.6 g weights) |
| **Cable Length** | Connection & Cable | 2.1 m Braided Lightweight USB Cable |
| **Sensor** | Sensor Architecture | HERO 25K Optical Sensor |
| **Resolution** | DPI Sensitivity Range | 100 – 25,600 DPI (with 0 smoothing/filtering/acceleration) |
| **Speed & Acceleration**| Max Speed / Acceleration | > 400 IPS / > 40 G |
| **Responsiveness** | Report Rate & Microprocessor | 1000 Hz (1 ms) report rate, 32-bit ARM processor |
| **Durability** | Buttons & Glide Travel | 50 million clicks (Left/Right), > 250 km PTFE feet |
| **Onboard Memory** | Hardware Stored Profiles | Up to 5 profiles (requires firmware 127.1.7) |
| **Lighting** | RGB Zones & Spectrum | LIGHTSYNC RGB (1 zone, 16.8 million colors) |
| **OS Compatibility** | System Requirements | Windows 7+, macOS 10.11+, ChromeOS, USB port |

### 🌐 Interactive Web Showcase Features

- **Interactive 3D Product Viewer:** Real-time 3D model exploration with 360° orbital rotation, pan, and zoom powered by Three.js/React.
- **Multi-Angle Gallery:** Modal gallery displaying high-resolution top, bottom, profile, and angled photography.
- **Reactive Framer Motion Animations:** Smooth scroll-driven transitions, animated specification cards, and interactive side navigation bars.
- **Custom Loading Screen:** Engaging introductory bootloader animation ensuring assets are primed before presentation.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion (via the Motion library)
- React Icons
- ESLint

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open your browser at:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
  App.jsx
  main.jsx
  index.css
  assets/
  Components/
  Pages/
```

## Scripts

- npm run dev - Start the Vite development server
- npm run build - Build the app for production
- npm run preview - Preview the production build locally
- npm run lint - Run ESLint checks

## License

This project is for demonstration and learning purposes.
