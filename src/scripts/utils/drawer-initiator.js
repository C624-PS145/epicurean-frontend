const Inisiatordrawer = {
  init({
    button, drawer, content, skip,
  }) {
    button.addEventListener('click', (event) => {
      this._drawertoggle(event, drawer);
    });

    drawer.addEventListener('click', (event) => {
      this._drawertutup(event, drawer);
    });

    skip.addEventListener('click', () => {
      const mainElement = document.getElementById('populer');
      if (mainElement) {
        mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const firstFocusableElement = mainElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (firstFocusableElement) {
          firstFocusableElement.focus();
        }
      }
    });

    // Prevent closing when clicking inside the content area
    content.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    // Add event listener for all links to scroll to top on click
    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = link.getAttribute('href');
        window.scrollTo(0, 0);
        setTimeout(() => {
          window.location.href = href;
        }, 200); // Add slight delay if needed
      });
    });

    const specificIds = ['populer', 'testimoni', 'abouters'];

    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = link.getAttribute('href');
        window.scrollTo(0, 0);
        if (specificIds.includes(link.id)) {
          setTimeout(() => {
            window.location.href = href;
          }, 590);
        } else {
          window.location.href = href;
        }
      });
    });

    // Ensure scroll restoration is manual
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.addEventListener('hashchange', () => {
      if (window.location.hash.startsWith('#/detail/')) {
        window.scrollTo(0, 0);
      }
    });
  },

  _drawertoggle(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _drawertutup(event, drawer) {
    drawer.classList.remove('open');
  },
};

export default Inisiatordrawer;
