// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // --------------------
  // Existing MP3 Playback
  // --------------------
  const readAloudButton = document.getElementById("readAloudButton");
  const audio = new Audio("assets/tts/onxy-test.mp3"); // Update the path if necessary

  // Play or pause the audio when the MP3 button is clicked
  readAloudButton.addEventListener("click", function () {
    if (audio.paused) {
      // Pause Speech Synthesis if it's active
      if (!speechSynthesis.paused && speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }

      audio.play();
      readAloudButton.textContent = "Pause";
      readAloudButton.setAttribute("aria-label", "Pause reading from MP3");
    } else {
      audio.pause();
      readAloudButton.textContent = "Read Aloud (MP3)";
      readAloudButton.setAttribute(
        "aria-label",
        "Read the content aloud from MP3"
      );
    }
  });

  // Reset the button text when the audio ends
  audio.addEventListener("ended", function () {
    readAloudButton.textContent = "Read Aloud (MP3)";
    readAloudButton.setAttribute(
      "aria-label",
      "Read the content aloud from MP3"
    );
  });

  // Handle audio load errors
  audio.addEventListener("error", function (e) {
    console.error("Error loading audio file:", e);
    alert("Sorry, the audio file could not be loaded.");
  });

  // -------------------------------
  // New Text-to-Speech Functionality
  // -------------------------------
  const ttsButton = document.getElementById("ttsButton");
  let isSpeaking = false;
  let isPaused = false;
  let utterance = null;

  ttsButton.addEventListener("click", function () {
    // Check if Speech Synthesis is supported
    if ("speechSynthesis" in window) {
      // Pause the MP3 audio if it's playing
      if (!audio.paused) {
        audio.pause();
        readAloudButton.textContent = "Read Aloud (MP3)";
        readAloudButton.setAttribute(
          "aria-label",
          "Read the content aloud from MP3"
        );
      }

      if (!isSpeaking) {
        // Get the text to read
        const text = document.getElementById("textToRead").innerText;

        // Create a new utterance
        utterance = new SpeechSynthesisUtterance(text);

        // Optional: Customize the voice, rate, and pitch
        // utterance.voice = speechSynthesis.getVoices()[0];
        // utterance.rate = 1;
        // utterance.pitch = 1;

        // Update button state
        ttsButton.textContent = "Pause";
        ttsButton.setAttribute("aria-label", "Pause reading with TTS");
        isSpeaking = true;

        // Handle when speech ends
        utterance.onend = function () {
          ttsButton.textContent = "Read Aloud (TTS)";
          ttsButton.setAttribute(
            "aria-label",
            "Read the content aloud using Text-to-Speech"
          );
          isSpeaking = false;
          isPaused = false;
        };

        // Speak the text
        speechSynthesis.speak(utterance);
      } else if (isPaused) {
        // Resume speaking
        speechSynthesis.resume();
        ttsButton.textContent = "Pause";
        ttsButton.setAttribute("aria-label", "Pause reading with TTS");
        isPaused = false;
      } else {
        // Pause speaking
        speechSynthesis.pause();
        ttsButton.textContent = "Resume";
        ttsButton.setAttribute("aria-label", "Resume reading with TTS");
        isPaused = true;
      }
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  });

  // Cancel speech synthesis if the user leaves the page
  window.addEventListener("beforeunload", function () {
    speechSynthesis.cancel();
  });
});
