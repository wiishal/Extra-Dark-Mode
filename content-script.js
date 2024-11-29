chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "setBrightness") {
    document.body.style.filter = `brightness(${message.value}%)`;
  } else if (message.type === "reset") {
    document.body.style.filter = "";
  }
});
