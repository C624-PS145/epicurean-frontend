import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker tidak support dengan browser');
    return;
  }
  const wb = new WorkboxWindow.Workbox('/sw.bundle.js');
  try {
    await wb.register();
    console.log('Servis worker berhasil terfaftar');
  } catch (error) {
    console.log('Servis worker gagal terdaftar', error);
  }
};

export default swRegister;
