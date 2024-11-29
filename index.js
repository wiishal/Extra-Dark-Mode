
async function popup() {
  try {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content-script.js"],
    });
  } catch (error) {
    console.error("Error executing script:", error);
  }
}


const slider = document.getElementById("slider");
const sliderValueDisplay = document.getElementById("sliderValue");

slider.addEventListener("input", async () => {
  sliderValueDisplay.textContent = slider.value;
  const value = slider.value;

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tab.id, { type: 'setBrightness', value: value });
});

async function reset() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tab.id, { type: 'reset' });
}

document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("btn").addEventListener("click", popup);