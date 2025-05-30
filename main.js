console.log("main.js is loaded");

function startVoice() {
  console.log("startVoice() was called");

  const output = document.getElementById("output");
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    output.innerHTML += `<p style="color:red;">Speech recognition not supported in this browser.</p>`;
    console.log("SpeechRecognition not supported.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  console.log("Speech recognition started...");

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    output.innerHTML += `<p>You said: ${transcript}</p>`;
    console.log("Voice result:", transcript);
  };

  recognition.onerror = function(event) {
    output.innerHTML += `<p style="color:red;">Error: ${event.error}</p>`;
    console.log("Speech recognition error:", event.error);
  };
}
