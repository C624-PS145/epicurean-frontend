class jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.animate();
  }

  render() {
    this.innerHTML = `
    <section>
        <h1>Jelajahi  wisata kuliner <br><span>Madura</span> dengan mudah</h1>
        <p>Jelajahi ragam inforamsi wisata kuliner Madura <br> dan temukan tempat makan terbaik <br> untuk menikmatinya</p>
        <button>Explore</button>
        </section>
        <figure>
        <img src="./images/jumbotron.png" alt="gambar jumbotron">
    </figure>
`;
  }
}

customElements.define('jumbo-tron', jumbotron);
