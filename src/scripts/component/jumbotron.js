class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <section>
        <h1>Jelajahi wisata kuliner <br><span>Madura</span> dengan mudah</h1>
        <p>Jelajahi ragam informasi wisata kuliner Madura <br> dan temukan tempat makan terbaik <br> untuk menikmatinya</p>
        <button id="explore-button">Explore</button>
      </section>
      <figure>
        <img src="./images/jumbotron.png" alt="gambar jumbotron" id="jumbotron-image">
      </figure>
    `;

    this.addAnimations();
    this.addEventListeners();
  }

  addAnimations() {
    // Animate the h1 element
    const h1 = this.querySelector('h1');
    const span = this.querySelector('span');
    const p = this.querySelector('p');
    const button = this.querySelector('button');
    const image = this.querySelector('#jumbotron-image');

    h1.style.opacity = 0;
    span.style.opacity = 0;
    p.style.opacity = 0;
    button.style.opacity = 0;
    image.style.opacity = 0;

    setTimeout(() => {
      h1.style.transition = 'opacity 1.5s';
      h1.style.opacity = 1;

      setTimeout(() => {
        span.style.transition = 'opacity 1.5s';
        span.style.opacity = 1;

        setTimeout(() => {
          p.style.transition = 'opacity 1.5s';
          p.style.opacity = 1;

          setTimeout(() => {
            button.style.transition = 'opacity 1.5s';
            button.style.opacity = 1;

            setTimeout(() => {
              image.style.transition = 'opacity 1.5s';
              image.style.opacity = 1;
            }, 150);
          }, 150);
        }, 150);
      }, 150);
    }, 150);
  }

  addEventListeners() {
    const exploreButton = this.querySelector('#explore-button');
    exploreButton.addEventListener('click', (event) => {
      event.preventDefault();
      exploreButton.style.transition = 'transform 0.3s';
      exploreButton.style.transform = 'scale(1.1)';
      setTimeout(() => {
        exploreButton.style.transform = 'scale(1)';
        setTimeout(() => {
          window.location.href = '#/pagekuliner';
        }, 300);
      }, 300);
    });
  }
}

customElements.define('jumbo-tron', Jumbotron);
