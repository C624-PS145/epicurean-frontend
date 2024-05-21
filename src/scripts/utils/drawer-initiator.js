const Inisiatordrawer = {
    init({
      button, drawer, content, skip,
    }) {
      button.addEventListener('click', (event) => {
        this._drawertoggle(event, drawer);
      });
  
      content.addEventListener('click', (event) => {
        this._drawertutup(event, drawer);
      });
  
      skip.addEventListener('click', () => {
        const mainElement = document.getElementById('main');
        if (mainElement) {
          mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const firstFocusableElement = mainElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (firstFocusableElement) {
            firstFocusableElement.focus();
          }
        }
      });
    },
  
    _drawertoggle(event, drawer) {
      event.stopPropagation();
      drawer.classList.toggle('open');
    },
  
    _drawertutup(event, drawer) {
      event.stopPropagation();
      drawer.classList.remove('open');
    },
  };
  
  export default Inisiatordrawer;
  