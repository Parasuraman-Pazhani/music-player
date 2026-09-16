// Local playlist pointing to assets/music/ and assets/covers/
const playlist = [
  {
    title: "Track One",
    artist: "Artist Name",
    src: "assets/music/song1.mp3",
    cover: "assets/covers/song1.jpg"
  },
  {
    title: "Track Two",
    artist: "Artist Name",
    src: "assets/music/song2.mp3",
    cover: "assets/covers/song2.jpg"
  }
];

let currentIndex = 0;
let isPlaying = false;

// DOM Elements
const audio = document.getElementById("audio-element");
const playBtn = document.getElementById("play-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const trackArt = document.getElementById("track-art");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const totalDurationEl = document.getElementById("total-duration");
const volumeSlider = document.getElementById("volume-slider");

// Load track metadata and source
function loadTrack(index) {
  const track = playlist[index];
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  trackArt.src = track.cover;
  audio.src = track.src;
  progressBar.value = 0;
  currentTimeEl.textContent = "0:00";
}

// Playback handlers
function playTrack() {
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
  trackArt.classList.add("playing");
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playBtn.textContent = "▶";
  trackArt.classList.remove("playing");
}

function togglePlay() {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function nextTrack() {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadTrack(currentIndex);
  if (isPlaying) playTrack();
}

function prevTrack() {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentIndex);
  if (isPlaying) playTrack();
}

// Convert seconds to mm:ss format
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Event Listeners
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

// Update progress bar and timestamp as audio plays
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
});

// Update total duration once audio metadata loads
audio.addEventListener("loadedmetadata", () => {
  totalDurationEl.textContent = formatTime(audio.duration);
});

// Auto-advance to next track when finished
audio.addEventListener("ended", nextTrack);

// Manual scrubbing on the progress bar
progressBar.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
});

// Volume control
volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

// Keyboard controls (Space = Play/Pause, Arrows = Seek & Volume)
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  } else if (e.code === "ArrowRight") {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
  } else if (e.code === "ArrowLeft") {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
  }
});

// Initial boot
loadTrack(currentIndex);
audio.volume = volumeSlider.value;
