class jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      section, figure {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 1s forwards;
      }

      section {
        animation-delay: 0.3s;
      }

      figure {
        animation-delay: 0.6s;
      }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      button#exploreButton {
        position: relative;
        overflow: hidden;
      }

      button#exploreButton:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        transform: scale(0);
        transition: transform 0.5s;
      }

      button#exploreButton:hover:after {
        transform: scale(2);
      }

      .typing {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        border-right: 2px solid;
        animation: typing 4s steps(40, end), blink-caret .75s step-end infinite;
      }

      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes blink-caret {
        from, to { border-color: transparent; }
        50% { border-color: black; }
      }

      .typing.finished {
        border-right: none;
      }
    </style>
    <section>
        <h1 id="typingText" class="typing">Jelajahi wisata kuliner <br><span>Madura</span> dengan mudah</h1>
        <p>Jelajahi ragam informasi wisata kuliner Madura <br> dan temukan tempat makan terbaik <br> untuk menikmatinya</p>
        <button id="exploreButton">Explore</button>
    </section>
    <figure>
        <img src="./images/jumbotron.png" alt="gambar jumbotron">
    </figure>
    `;

    const typingText = this.querySelector('#typingText');
    typingText.addEventListener('animationend', () => {
      typingText.classList.add('finished');
    });

    const exploreButton = this.querySelector('#exploreButton');
    exploreButton.addEventListener('click', () => {
      window.location.hash = '#/pagekuliner';
    });
  }
}

customElements.define('jumbo-tron', jumbotron);
