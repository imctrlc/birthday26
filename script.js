let password = "";
const correctPassword = "1111"; // Ganti dengan tanggal lahirnya (DDMMYY)
let currentGallery = 0;

const galleryData = [,
    { img: "foto1.jpeg", text: "ini foto awal kita mulai ngobroll lagi" },
    { img: "foto3.jpeg", text: "dari sini kita mulai deket lagi dan akhirnya pacaran" },
    { img: "foto2.jpg", text: "ini Fotobox pertama kita..." },
    { img: "foto5.jpg", text: "Kamu cantik banget di sini..." },
    { img: "foto4.jpeg", text: "Terima kasih sudah bertahan sejauh ini." }
];

// Fungsi Password
function addNumber(num) {
    if (password.length < 4) {
        password += num;
        updateDots();
        if (password.length === 4) {
            checkPassword();
        }
    }
}

function deleteNumber() {
    password = password.slice(0, -1);
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < password.length) dot.classList.add('filled');
        else dot.classList.remove('filled');
    });
}

function checkPassword() {
    if (password === correctPassword) {
        nextPage(2);
        document.getElementById('background-music').play();
    } else {
        alert("Password salah! Coba lagi.");
        password = "";
        updateDots();
    }
}

// Navigasi Halaman
function nextPage(pageNum) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(`page${pageNum}`).classList.add('active');
    
    if (pageNum === 5) {
        startTyping();
    }
}

// Navigasi Galeri
function nextGallery() {
    currentGallery++;
    if (currentGallery < galleryData.length) {
        document.getElementById('gallery-img').src = galleryData[currentGallery].img;
        document.getElementById('gallery-text').innerText = galleryData[currentGallery].text;
    } else {
        nextPage(5);
    }
}

// Efek Mengetik
function startTyping() {
    const text = "Selamat Ulang tahun Rosi sayangkuu. Di hari spesialmu ini, aku cuma mau bilang terima kasih sudah jadi bagian dari hidupku. Maaf ya kalo aku masih banyak kekurangan sebagai pasangan kamu. terimakasih udah mau sabar sama aku. maaf kalo aku banyak nuntut kamu. kita sama sama terus ya Sayang. I LOVE YOU SAYANGG... ❤️";
    let i = 0;
    const target = document.getElementById("typing-text");
    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}