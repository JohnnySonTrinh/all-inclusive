// Todo toggle for text and button to read text

// Filter the voices array to only include voices that are English

// Create array/data for the text to be read

// Create a new SpeechSynthesisUtterance object for text-to-speech
const speech = new SpeechSynthesisUtterance();

// Initialize an empty array to hold the available voices
let voices = [];

// Get the <select> element from the DOM to populate with voice options
const voiceSelect = document.querySelector("select");

// Event listener for when the list of available voices changes
window.speechSynthesis.onvoiceschanged = () => {
  // Get the list of available voices
  voices = window.speechSynthesis.getVoices();
  // Set the default voice to the first available voice
  speech.voice = voices[0];
  console.log(voices);

  // Populate the dropdown with voices
  voices.forEach((voice, i) => {
    // Create a new <option> element for each voice
    const option = new Option(voice.name + " (" + voice.lang + ")", i);
    // Add the <option> to the <select> element
    voiceSelect.add(option);
  });
};

// Event listener for when the selected voice changes
voiceSelect.addEventListener("change", () => {
  // Get the selected voice from the voices array
  const selectedVoice = voices[voiceSelect.value];
  // Set the speech voice to the selected voice
  speech.voice = selectedVoice;
});

// Event listener for when the button is clicked to speak the text
document.querySelector("button").addEventListener("click", () => {
  // Get the text from the <textarea> element
  speech.text = document.querySelector("textarea").value;
  // Speak the text using the selected voice
  window.speechSynthesis.speak(speech);
});
