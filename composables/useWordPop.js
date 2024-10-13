import anime from 'animejs';

export function useWordPop(elements, options = {}) {
  const { letterDelay = 30 } = options;

  function play() {
    elements.forEach(async (element) => {
      if (!element?.classList)
        return;

      element.classList.add('word-pop');

      const text = element.textContent;
      const words = text.split(' ');

      // Clear current element
      element.innerHTML = '';

      // Loop through each word, wrap each letter in a span
      words.forEach((word, i) => {
        const wordSplit = word.replace(/./g, '<span class=\'letter\'>$&</span>');

        // Wrap another span around each word, add word to header
        element.innerHTML += `<span class="word">${wordSplit}</span>`;

        // Add space between words unless it is the last word
        if (i < words.length - 1) {
          element.innerHTML += '&nbsp;';
        }
      });

      setTimeout(() => {
        element.style.visibility = 'visible';
      }, 100);
    });

    anime({
      targets: '.word-pop .letter',
      translateY: [1000, 0],
      easing: 'easeOutExpo',
      duration: 1400,
      delay: function (el, i) {
        return letterDelay * i;
      },
    });
  }

  return {
    play,
  };
}
