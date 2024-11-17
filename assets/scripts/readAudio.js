import audioFiles from "./audioFiles.js";

document.addEventListener("DOMContentLoaded", function () {
  // Get all Read Audio buttons
  const readAudioButtons = document.querySelectorAll("button[data-audio-id]");

  // Create a map to store audio objects keyed by their IDs
  const audioMap = {};

  // Initialize audio objects for each audio file
  audioFiles.forEach((item) => {
    const audio = new Audio(item.audioPath);

    // Set the volume to currentVolume or default to 1
    audio.volume = window.currentVolume || 1;

    audioMap[item.id] = {
      audio: audio,
      isPlaying: false,
      button: null,
    };
  });

  // Attach audioMap to the global window object
  window.audioMap = audioMap;

  // Attach event listeners to each button
  readAudioButtons.forEach((button) => {
    const audioId = button.getAttribute("data-audio-id");
    const audioItem = audioMap[audioId];

    if (audioItem) {
      audioItem.button = button;

      // Play or pause the audio when the button is clicked
      button.addEventListener("click", function () {
        if (audioItem.audio.paused) {
          // Pause any other playing audio
          Object.values(audioMap).forEach((item) => {
            if (!item.audio.paused) {
              item.audio.pause();
              item.button.textContent = "Continue";
              item.button.setAttribute("aria-label", "Read the content");
            }
          });

          audioItem.audio.play();
          button.textContent = "Pause";
          button.setAttribute("aria-label", "Pause reading");
          audioItem.isPlaying = true;
        } else {
          audioItem.audio.pause();
          button.textContent = "Continue";
          button.setAttribute("aria-label", "Read the content ");
          audioItem.isPlaying = false;
        }
      });

      // Reset the button text when the audio ends
      audioItem.audio.addEventListener("ended", function () {
        button.textContent = "Listen Again";
        button.setAttribute("aria-label", "Read the content");
        audioItem.isPlaying = false;
      });

      // Handle audio load errors
      audioItem.audio.addEventListener("error", function (e) {
        console.error(`Error loading audio file for ${audioId}:`, e);
        alert("Sorry, the audio file could not be loaded.");
      });
    } else {
      console.warn(`No audio file found for ID: ${audioId}`);
    }
  });
});
