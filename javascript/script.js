
  // ... (Existing JavaScript code) ...

  // Function to format the input text based on the selected format
  function generateFormattedText(text, format) {
    switch (format) {
      case 'lowercase':
        return text.toLowerCase();
      case 'uppercase':
        return text.toUpperCase();
      case 'sentencecase':
        return text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
      case 'titlecase':
        return text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      case 'capitalizedcase':
        return text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      case 'alternatingcase':
        return text.toLowerCase().split('').map((c, index) => index % 2 === 0 ? c.toUpperCase() : c).join('');
      case 'invertedcase':
        return text.split('').map((c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
      case 'camelcase':
        return text.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
      case 'pascalcase':
        return text.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, '');
      case 'snakecase':
        return text.toLowerCase().replace(/\s+/g, '_');
      default:
        return "Default random text";
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const mulaiButton = document.querySelector('a[href="#generator"]');
    mulaiButton.addEventListener('click', function (event) {
      event.preventDefault();
      const generatorSection = document.getElementById('generator');
      const offsetTop = generatorSection.getBoundingClientRect().top;
      const headerHeight = document.querySelector('header').offsetHeight;
      const offset = 40; // Add offset in pixels (adjust as needed)
      const scrollToPosition = offsetTop - headerHeight + offset;
      window.scrollBy({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    });
  });
  // Event listener for the Generate button
  document.getElementById('generate-btn').addEventListener('click', function () {
    const textInput = document.getElementById('text-input');
    const textOutput = document.getElementById('text-output');
    const selectedFormat = document.querySelector('.dropdown-menu a.active').id;

    const generatedText = generateFormattedText(textInput.value, selectedFormat);
    textOutput.value = generatedText;
  });

  // Event listener for the Paste button
  document.getElementById('paste-btn').addEventListener('click', function () {
    navigator.clipboard.readText().then(function (text) {
      document.getElementById('text-input').value = text;
    }).catch(function (error) {
      console.error('Failed to read clipboard contents: ', error);
    });
  });

  // Event listener for the Copy button
  document.getElementById('copy-btn').addEventListener('click', function () {
    const textOutput = document.getElementById('text-output');
    textOutput.select();
    document.execCommand('copy');
  });

  // Event listener for the dropdown items
  document.querySelectorAll('.dropdown-item').forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelectorAll('.dropdown-item').forEach(function (item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });  
  