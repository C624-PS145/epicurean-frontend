const createStars = (rating) => {
  const roundedRating = Math.round(rating); // Memperoleh nilai rating yang sudah dibulatkan
  const fullStars = Math.floor(roundedRating); // Menghitung jumlah bintang penuh
  const halfStars = roundedRating % 1 >= 0.5 ? 1 : 0; // Menghitung apakah terdapat setengah bintang
  const emptyStars = 5 - fullStars - halfStars; // Menghitung jumlah bintang kosong

  let stars = '★'.repeat(fullStars); // Membuat bintang penuh
  if (halfStars) {
    stars += '<span class="half-star">★</span>'; // Menambahkan setengah bintang jika ada
  }
  stars += '☆'.repeat(emptyStars); // Menambahkan bintang kosong

  return stars;
};
export default createStars;
