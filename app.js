const app = document.getElementById("app");

const pages = {
  home: () => `
    <h1>EduReminder</h1>
    <p>Pilih fitur utama:</p>
    <div>
      <button onclick="navigate('schedule')">Jadwal Belajar Cerdas</button>
      <button onclick="navigate('reminder')">Reminder Interaktif</button>
      <button onclick="navigate('focus')">Mode Fokus</button>
      <button onclick="navigate('progress')">Progress Tracker</button>
      <button onclick="navigate('flashcard')">Flashcard</button>
      <button onclick="navigate('calendar')">Integrasi Kalender</button>
    </div>
  `,
  schedule: () => `
    <div class="card">
      <button onclick="navigate('home')">← Kembali</button>
      <h2>Jadwal Belajar Cerdas</h2>
      <p>Masukkan mata pelajaran dan waktu luangmu. Jadwal akan disusun otomatis.</p>
    </div>
  `,
  reminder: () => `
    <div class="card">
      <button onclick="navigate('home')">← Kembali</button>
      <h2>Reminder Interaktif</h2>
      <p>Atur pengingat belajar berdasarkan waktu, lokasi, atau sebelum ujian.</p>
    </div>
  `,
  focus: () => `
    <div class="card">
      <button onclick="navigate('home')">← Kembali</button>
      <h2>Mode Fokus</h2>
      <p>Aktifkan mode "Jangan Ganggu" dan gunakan timer Pomodoro dengan suara ambient.</p>
    </div>
  `,
  progress: () => `
    <div class="card">
      <button onclick="navigate('home')">← Kembali</button>
      <h2>Progress Tracker</h2>
      <p>Lihat statistik belajar mingguan dan raih pencapaian.</p>
    </div>
  `,
  flashcard: () => `
    <div class="card">
      <button onclick="navigate('home')">← Kembali</button>
      <h2>Flashcard & Review</h2>
      <p>Buat flashcard atau import, dan dapatkan review dari AI.</p>
    </div>
  `,
  calendar: () => `
    <div class="card">
      <button onclick="navigate('home')">← Kembali</button>
      <h2>Integrasi Kalender</h2>
      <p>Sinkronisasi dengan Google Calendar untuk menambahkan deadline dan ujian.</p>
    </div>
  `,
};

function navigate(page) {
  window.location.hash = page;
  render();
}

function render() {
  const hash = window.location.hash.slice(1) || 'home';
  app.innerHTML = pages[hash]() || pages['home']();
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
