# **Extra Dark Mode**

Extra Dark Mode is a simple Chrome extension that allows users to dynamically adjust the brightness of any active tab. With an intuitive slider in the popup interface, you can quickly customize the brightness of a webpage in real-time. Reset functionality is also included to revert the brightness effect.

---

## **Features**
- Real-time brightness adjustment using a slider.
- Reset button to remove brightness effects.
- Works on any active tab in the browser.

---

## **Getting Started**

### **Installation**
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/extra-dark-mode.git
   cd extra-dark-mode
   ```

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer Mode** using the toggle switch in the top right corner.

4. Click on **Load unpacked** and select the folder where this repository is cloned.

5. The extension will now appear in your toolbar.

---

## **Usage**
1. Click on the extension icon in the toolbar to open the popup.
2. Use the slider to adjust the brightness of the currently active tab.
3. To reset the brightness to default, click the "Reset" button.

---

## **Project Structure**
```
extra-dark-mode/
├── content-script.js       # Script injected into the active tab for brightness adjustment
├── index.html              # Popup HTML for the extension's interface
├── index.js                # Handles popup UI interactions and communication with content script
├── manifest.json           # Chrome extension configuration file
├── contrast.png            # Icon for the extension
└── README.md               # Documentation
```

---

## **Technologies Used**
- **JavaScript**: For logic and interaction in both popup and content scripts.
- **HTML/CSS**: For the popup interface.
- **Chrome Extensions API**: For injecting scripts and communicating between the popup and content scripts.

---

## **Permissions**
This extension uses the following permissions:
- `scripting`: To execute scripts in the context of active tabs.
- `tabs`: To query and interact with the currently active tab.
- `host_permissions`: To allow the extension to work on all HTTP and HTTPS pages.

---

## **Contributing**
Contributions are welcome! Feel free to:
- Open an issue for bugs or feature requests.
- Fork the repository and submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Future Improvements**
- Add additional filters like contrast and grayscale.
- Allow brightness customization for specific elements on a webpage.
