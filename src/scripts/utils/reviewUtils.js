import { formatDistanceToNow } from 'date-fns';
import EpicureanApiSource from '../data/sourceAPI';

const initReviewForm = (id) => {
  const form = document.querySelector('.form-review-container');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const namaPengulas = form.name.value;
    const ulasan = form.review.value;
    const rating = form.rating.value;

    const reviewData = {
      nama_pengulas: namaPengulas,
      ulasan,
      rating,
    };

    try {
      // Tambahkan review baru
      const response = await EpicureanApiSource.createReview(id, reviewData);
      alert(response.message);
      form.reset();

      // Ambil ulasan terbaru dari server
      const updatedDetail = await EpicureanApiSource.wisatakulinerid(id);

      // Perbarui tampilan daftar review dengan ulasan terbaru
      const reviewContainer = document.querySelector('.review-container2');
      reviewContainer.innerHTML = ''; // Kosongkan daftar review yang ada

      updatedDetail.reviews.forEach((review) => {
        // Ubah format tanggal menjadi waktu yang lalu
        const distanceToNow = formatDistanceToNow(new Date(review.tanggal), { addSuffix: true });

        const reviewTemplate = `
          <div class="user-review">
            <div class="judul">
              <h4>${review.nama_pengulas}</h4>
              <p>${distanceToNow}</p>
              <p>${review.rating}</p>
            </div>
            <section class="review">
              <p>${review.ulasan}</p>
            </section>
          </div>`;
        reviewContainer.innerHTML += reviewTemplate;
      });
    } catch (error) {
      console.error('Gagal mengirim ulasan:', error);
      alert('Gagal mengirim ulasan, silakan coba lagi.');
    }
  });
};

export default initReviewForm;
