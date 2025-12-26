// Fungsi untuk galeri modal
function showImage(img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fungsi untuk formulir kontak (simulasi pengiriman)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('response').textContent = `Terima kasih, ${name}! Pesan Anda telah dikirim.`;
    // Di dunia nyata, kirim data ke server (misalnya, menggunakan fetch API ke backend).
});