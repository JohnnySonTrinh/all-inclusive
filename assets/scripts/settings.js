document.addEventListener("DOMContentLoaded", function () {
  const volumeControl = document.getElementById("volume-control");
  
  // Retrieve the volume setting from localStorage (if exists), else default to 1
  let currentVolume = localStorage.getItem("audioVolume");

  if (currentVolume === null) {
    // If no volume is saved, set it to the default value (1)
    currentVolume = 1;
  } else {
    // Parse the saved volume value to float
    currentVolume = parseFloat(currentVolume);
  }
  
  // Set the volume control slider position to the saved volume
  volumeControl.value = currentVolume;

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

  // Apply the volume setting initially
  adjustVolume(currentVolume);

  // Event listener for volume control slider change
  volumeControl.addEventListener("input", function () {
    currentVolume = parseFloat(volumeControl.value);
    adjustVolume(currentVolume);

    // Save the volume setting to localStorage
    localStorage.setItem("audioVolume", currentVolume);
  });

  // Expose currentVolume globally if needed
  window.currentVolume = currentVolume;
});
