# Hello World Web Component

A simple, customizable Web Component built with vanilla JavaScript that displays a styled "Hello World" message.

## Features

- 🎨 Beautiful gradient text styling
- 📦 Zero dependencies
- 🔧 Easy to customize
- 🌐 Works in all modern browsers
- 🎯 Uses Shadow DOM for style encapsulation

## Installation

1. Download or clone this repository
2. Extract all files to your project directory
3. Include the files in your HTML

## Usage

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <script src="wc-template.js" defer></script>
</head>
<body>
  <hello-world></hello-world>
</body>
</html>
```

### Files Included

- `index.html` - Demo page showing the component in action
- `wc-template.js` - The Web Component definition
- `styles.css` - Page styles (component has its own encapsulated styles)
- `README.md` - This file

## Customization

### Changing the Message

Edit `wc-template.js` and modify the text in the `connectedCallback` method:

```javascript
this.shadowRoot.innerHTML = `
  <div class="message">Your Custom Message</div>
`;
```

### Styling the Component

The component uses Shadow DOM, so its styles are in `wc-template.js`. Modify the `<style>` section:

```javascript
<style>
  .message {
    font-size: 1.5rem;
    color: #2c3e50;
    /* Add your custom styles here */
  }
</style>
```

### Styling the Page

Page-level styles are in `styles.css`. Modify colors, layout, and other elements there.

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

Web Components are supported in all modern browsers. For older browser support, consider using polyfills.

## Project Structure

```
wc-template-main/
├── index.html          # Demo page
├── wc-template.js      # Web Component code
├── styles.css          # Page styles
├── README.md           # Documentation
├── LICENSE             # License file
└── package.json        # Package metadata
```

## Development

This is a simple static project with no build process required. Just edit the files and refresh your browser.

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

MIT License - See LICENSE file for details

## Resources

- [Web Components Documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

## Author

Your Name - Initial work

## Acknowledgments

- Built with vanilla JavaScript
- No frameworks or dependencies required
