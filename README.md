# Minimal Web Music Player 🎵

A clean, responsive, and lightweight audio player web application built entirely with vanilla HTML5, modern CSS3, and JavaScript. Designed with a glassmorphic dark UI, track scrubbing, volume control, and keyboard accessibility.

---

## 📸 Preview

![App Screenshot](assets/covers/song1.jpg)

---

## ✨ Features

* **Audio Controls:** Play, pause, skip forward, and jump backward seamlessly.
* **Interactive Seeking:** Real-time scrubbing via the progress bar with formatted timestamps (`mm:ss`).
* **Volume Control:** Built-in dynamic volume adjustment slider.
* **Keyboard Shortcuts:** Control playback without touching the mouse.
* **Auto-Play Queue:** Automatically advances to the next track when the current song ends.
* **Zero Dependencies:** Pure vanilla JavaScript—no heavy frameworks, bundlers, or external libraries.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `Space` | Toggle Play / Pause |
| `Right Arrow (→)` | Seek forward 5 seconds |
| `Left Arrow (←)` | Seek backward 5 seconds |

---

## 📁 Project Structure

```text
music-player/
├── assets/
│   ├── covers/          # Album art images (.jpg, .png)
│   │   ├── song1.jpg
│   │   └── song2.jpg
│   └── music/           # Audio files (.mp3, .ogg)
│       ├── song1.mp3
│       └── song2.mp3
├── index.html           # Layout and structure
├── style.css            # Dark glassmorphic styling
├── app.js               # Audio playback logic & controls
└── README.md            # Project documentation
