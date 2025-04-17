# Blockchain.com Landing Page Clone

## Overview

This project is a front-end clone of the Blockchain.com landing page. I built it to demonstrate my proficiency in HTML, CSS, and JavaScript. The goal was to replicate the design and functionality of the original page and focusing on pixel-perfect accuracy, responsive design, and cross-browser compatibility. The development environment uses BrowserSync for live reloading and Neovim for coding.

## Features

- **Responsive Design**: Adapts to desktop, tablet, and mobile devices using CSS media queries and flexible layouts.
- **Pixel-Perfect Styling**: Mirrors Blockchain.com’s visual design: typography, colors, and spacing.
- **Interactive Elements**: Includes smooth navigation
- **Cross-Browser Compatibility**

## Technologies Used

- **Languages**: HTML5, CSS3, JavaScript
- **Frameworks & Tools**:
    - **BrowserSync**: Enabled live reloading for rapid development and testing across browsers.
    - **Neovim**: Primary code editor, customized for efficient front-end development.
    - **Chrome DevTools**: For design inspection and responsive testing.

## Setup Instructions

### Prerequisites

- **Node.js and npm**: Required for BrowserSync.
- Install dependencies:
    
    ```bash
    npm install
    ```
    

### Running the Project

1. **Clone the Repository**:
    
    ```bash
    git clone https://github.com/pyankie/Blockchain.com-clone-demo.git
    ```
    
2. **Navigate to the Project Directory**:
    
    ```bash
    cd blockchain
    ```
    
3. **Start the BrowserSync Server**:
    
    ```bash
    npm run br-server
    ```
    
    This uses the BrowserSync configuration to watch `*.html`, `*.css`, and `*.js` files to automatically refresh browsers on changes.
4. **View the Project**:
    - Open `index.html` in a browser, or access the BrowserSync server (typically at `http://localhost:3000`).
    - Alternatively, use VS Code’s Live Server for a simpler setup.

### BrowserSync Configuration

The project includes a `browser-sync.config.js` file for config:

```javascript
module.exports = {
  server: true,
  files: ["*.html", "*.css", "*.js"],
  notify: false, // Disable BrowserSync notifications
};
```

This config enables a local server, watches for changes in HTML, CSS, and JavaScript files, and disables intrusive notifications and optimizes Neovim’s terminal-based workflow.

## Project Structure

```
.
├── bs-config.js
├── components
│   ├── badges.html
│   ├── buttons.html
│   ├── callout-section.html
│   ├── card.html
│   ├── drop-down.html
│   ├── feature-block.html
│   ├── footer.html
│   ├── input-group.html
│   ├── link-list.html
│   ├── list-icon.html
│   ├── media-icon.html
│   ├── nav-bar.html
│   ├── nav-menu.html
│   ├── search-block.html
│   └── slider-icon.html
├── css
│   ├── normalize.css
│   └── styles.css
├── images
│   ├── home
│   │   ├── app-connect-defi@2x.png
│   │   ├── app-connect-defi.png
│   │   ├── app-earn-rewards@2x.png
│   │   ├── app-earn-rewards.png
│   │   ├── app-ease@2x.png
│   │   ├── app-ease.png
│   │   ├── app-self-custody@2x.png
│   │   ├── app-self-custody.png
│   │   ├── ex-landing-margin-image@2x.png
│   │   ├── ex-landing-margin-image.png
│   │   ├── home-hero-gradient.jpg
│   │   ├── homepage-app-shapes-bg@2x.png
│   │   ├── homepage-app-shapes-bg.png
│   │   ├── homepage-exchange-shapes-bg@2x.png
│   │   ├── homepage-exchange-shapes-bg.png
│   │   ├── homepage-explorer-shapes-bg@2x.png
│   │   ├── homepage-explorer-shapes-bg.png
│   │   ├── homepage-institutional-shapes-bg@2x.png
│   │   ├── homepage-institutional-shapes-bg.png
│   │   ├── prod-exchange-chat-support@2x.png
│   │   ├── prod-exchange-chat-support.png
│   │   ├── prod-exchange-chat-support-sm.png
│   │   ├── prod-exchange-fiat-currencies@2x.png
│   │   ├── prod-exchange-fiat-currencies.png
│   │   ├── prod-exchange-matching-engine@2x.png
│   │   ├── prod-exchange-matching-engine.png
│   │   ├── prod-explore-api@2x.png
│   │   ├── prod-explore-blockchains@2x.png
│   │   ├── prod-explore-blockchains.png
│   │   ├── prod-explore-charts@2x.png
│   │   ├── prod-explore-charts.png
│   │   ├── prod-explore-prices@2x.png
│   │   ├── prod-explore-prices.png
│   │   └── sites
│   │       ├── down-arrow.png
│   │       ├── facebook2.png
│   │       ├── instagram2.png
│   │       ├── linkedin2.png
│   │       ├── QR_code_for_mobile.png
│   │       └── x2.png
│   └── icons
│       ├── app-store.svg
│       ├── arrow.svg
│       ├── banner-bg.svg
│       ├── chevron-down-bold.svg
│       ├── chevron-down.svg
│       ├── favicon.ico
│       ├── play-store.svg
│       └── sprite.svg
├── index.html
├── main.js
└── package.json
```
``
## Contributions

- Designed and developed the landing page from scratch and replicated Blockchain.com’s look and feel.
- Integrated BrowserSync with Neovim for a streamlined workflow to enable real-time browser updates during development.
- Overcame challenges in achieving pixel-perfect design by leveraging Chrome DevTools to match the original site’s styling.
- Ensured responsiveness across devices by iteratively testing and refining CSS media queries.

## Contact

For questions or feedback, reach out to [pyankie] at [[zpyankie@gmail.com](mailto:zpyankie@gmail.com].
