// વિધિ મોડલ ખોલવા માટે
function openVidhi() {
    document.getElementById("vidhi-modal").style.display = "block";
    document.body.style.overflow = "hidden";
}

// વિધિ મોડલ બંધ કરવા માટે
function closeVidhi() {
    document.getElementById("vidhi-modal").style.display = "none";
    document.body.style.overflow = "auto";
}

// ૧. ગેલેરી ખોલવા માટે
function openGallery() {
    document.getElementById("darshan-modal").style.display = "block";
    document.body.style.overflow = "hidden"; // પાછળનું પેજ સ્ક્રોલ ન થાય તે માટે
}

// ૨. ગેલેરી બંધ કરવા માટે
function closeGallery() {
    document.getElementById("darshan-modal").style.display = "none";
    document.body.style.overflow = "auto"; // સ્ક્રોલ પાછું ચાલુ કરવા માટે
}

// મોડલની બહાર ક્લિક કરવાથી પણ બંધ થાય
window.onclick = function(event) {
    let modal = document.getElementById("darshan-modal");
    let vModal = document.getElementById("vidhi-modal");
    if (event.target == dModal) closeGallery();
    if (event.target == vModal) closeVidhi();
}

// ૧. મ્યુઝિક પ્લેયર કંટ્રોલ
const audio = document.getElementById("shiv-mantra");
const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicIcon.innerHTML = "⏸️"; // Pause icon
        musicBtn.classList.add("playing");
    } else {
        audio.pause();
        musicIcon.innerHTML = "🎵"; // Play icon
        musicBtn.classList.remove("playing");
    }
}

// ૨. શેરિંગ ફંક્શન (Web Share API)
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'મહાશિવરાત્રી 2026',
            text: 'હિમાલયની દિવ્ય અનુભૂતિ અને મહાશિવરાત્રીના શુભ મુહૂર્ત જાણો.',
            url: window.location.href
        }).then(() => {
            console.log('સફળતાપૂર્વક શેર કર્યું');
        }).catch((error) => {
            console.log('શેર કરવામાં ભૂલ આવી', error);
        });
    } else {
        // જો બ્રાઉઝર શેર સપોર્ટ ન કરે તો લિંક કોપી થશે
        navigator.clipboard.writeText(window.location.href);
        alert("લિંક કોપી કરી લીધી છે! તમે તેને વોટ્સએપ પર શેર કરી શકો છો.");
    }
}

// અગાઉનો ટાઈમર અને સ્ક્રોલ કોડ અહીં ચાલુ રાખવો...

// ૧. મહાશિવરાત્રી ૨૦૨૬ માટેનું કાઉન્ટડાઉન
const countdownDate = new Date("Feb 15, 2026 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // ગણતરી
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    if(timerElement) {
        // સમયને 00 ફોર્મેટમાં બતાવવા માટે
        const h = hours < 10 ? "0" + hours : hours;
        const m = minutes < 10 ? "0" + minutes : minutes;
        const s = seconds < 10 ? "0" + seconds : seconds;
        
        timerElement.innerHTML = `${h} : ${m} : ${s}`;
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "BHOLE NATH PRASANN";
    }
}, 1000);

// ૨. સ્મૂથ સ્ક્રોલ ફંક્શન
function scrollToSignificance() {
    const section = document.getElementById("significance-section");
    section.scrollIntoView({ behavior: 'smooth' });
    
    // હાઇલાઇટ ઇફેક્ટ
    section.style.background = "rgba(56, 189, 248, 0.1)";
    setTimeout(() => {
        section.style.background = "rgba(255, 255, 255, 0.04)";
    }, 1500);
}