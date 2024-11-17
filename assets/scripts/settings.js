document.addEventListener("DOMContentLoaded", function () {
  const volumeControl = document.getElementById("volume-control");
  let currentVolume = volumeControl.value;

  // Function to adjust volume of audio elements
  function adjustVolume(volume) {
    // Adjust volume for all HTML audio elements
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach(function (audio) {
      audio.volume = volume;
    });

    // Adjust volume for Audio objects (if using Audio API)
    if (window.audioMap) {
      Object.values(window.audioMap).forEach(function (item) {
        item.audio.volume = volume;
      });
    }

    // Adjust volume for SpeechSynthesisUtterance
    if (window.currentUtterance) {
      window.currentUtterance.volume = volume;
    }
  }

  // Event listener for volume control slider
  volumeControl.addEventListener("input", function () {
    currentVolume = parseFloat(volumeControl.value);
    adjustVolume(currentVolume);
  });

  // Expose currentVolume globally if needed
  window.currentVolume = currentVolume;
});
