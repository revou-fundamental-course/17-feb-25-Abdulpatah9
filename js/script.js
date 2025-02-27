// Abdul Patah
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".image-slide"); // Mengambil semua elemen slide gambar
    let currentIndex = 0; // Menginisialisasi indeks slide saat ini

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Menghitung indeks slide berikutnya dengan siklus
        slides.forEach((slide, index) => { // Loop melalui setiap slide
            slide.style.transform = `translateX(-${currentIndex * 100}%)`; // Menggeser slide berdasarkan indeks saat ini
        });
    }

    setInterval(nextSlide, 3000); // Geser otomatis setiap 3 detik
});

document.getElementById("send-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah tombol mengirim form tanpa validasi

    let isValid = true; // Mengatur validasi awal menjadi true

    // Ambil nilai input
    let name = document.getElementById("name").value.trim(); // Mengambil nilai input nama
    let email = document.getElementById("email").value.trim(); // Mengambil nilai input email
    let pilihmenu = document.getElementById("pilihmenu").value; // Mengambil nilai input pilihan menu

    // Validasi Nama
    if (name === "") {
        document.getElementById("error-name").innerText = "Nama tidak boleh kosong!"; // Menampilkan pesan kesalahan jika nama kosong
        isValid = false; // Mengatur validasi menjadi false jika nama kosong
    } else {
        document.getElementById("error-name").innerText = ""; // Menghapus pesan kesalahan jika nama valid
    }

    // Validasi Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Pola untuk memvalidasi format email
    if (email === "") {
        document.getElementById("error-email").innerText = "Email tidak boleh kosong!"; // Menampilkan pesan kesalahan jika email kosong
        isValid = false; // Mengatur validasi menjadi false jika email kosong
    } else if (!email.match(emailPattern)) {
        document.getElementById("error-email").innerText = "Format email tidak valid!"; // Menampilkan pesan kesalahan jika format email tidak valid
        isValid = false; // Mengatur validasi menjadi false jika format email tidak valid
    } else {
        document.getElementById("error-email").innerText = ""; // Menghapus pesan kesalahan jika email valid
    }

    // Validasi Pilihan Menu
    if (pilihmenu === "") {
        document.getElementById("error-pilihmenu").innerText = "Pilih menu terlebih dahulu!"; // Menampilkan pesan kesalahan jika pilihan menu kosong
        isValid = false; // Mengatur validasi menjadi false jika pilihan menu kosong
    } else {
        document.getElementById("error-pilihmenu").innerText = ""; // Menghapus pesan kesalahan jika pilihan menu valid
    }

    // Jika semua valid, tampilkan alert (atau bisa dikirim ke backend)
    if (isValid) {
        alert("Form berhasil dikirim!"); // Menampilkan pesan sukses jika semua validasi berhasil
    }
});
