// WhatsApp Link Generator
function runWhatsApp() {
    const phoneInput = document.getElementById('wa-phone');
    const msgInput = document.getElementById('wa-msg');
    const resBox = document.getElementById('wa-res');
    const urlOut = document.getElementById('wa-url');

    if (!phoneInput) return;

    const phone = phoneInput.value.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent(msgInput.value);

    if (!phone) {
        alert('Please enter a valid phone number with country code');
        return;
    }

    const url = `https://wa.me/${phone}?text=${msg}`;
    urlOut.innerText = url;
    resBox.style.display = 'block';
}

// SERP Checker
function runSERP() {
    const title = document.getElementById('serp-title-input').value;
    const desc = document.getElementById('serp-desc-input').value;

    document.getElementById('serp-title-count').innerText = (title.length * 10) + ' px / ~600px max (' + title.length + ' chars)';
    document.getElementById('serp-desc-count').innerText = (desc.length * 6) + ' px / ~960px max (' + desc.length + ' chars)';
}

// Freelance Calculator
function runFreelance() {
    const inc = parseFloat(document.getElementById('fr-income').value) || 0;
    const exp = parseFloat(document.getElementById('fr-expenses').value) || 0;
    const hrs = parseFloat(document.getElementById('fr-hours').value) || 1;

    const rate = ((inc + exp) / (hrs * 4)).toFixed(2);
    document.getElementById('fr-out').innerText = 'Minimum Target Rate: $' + rate + ' / hour';
    document.getElementById('fr-res').style.display = 'block';
}

// Word Counter
function runCounter() {
    const txt = document.getElementById('counter-text').value.trim();
    const words = txt ? txt.split(/\s+/).length : 0;

    document.getElementById('cnt-words').innerText = words;
    document.getElementById('cnt-chars').innerText = txt.length;
    document.getElementById('cnt-time').innerText = Math.ceil(words / 200) + ' min';
}

// Engagement Calculator
function runEngagement() {
    const fol = parseFloat(document.getElementById('eg-followers').value) || 1;
    const lik = parseFloat(document.getElementById('eg-likes').value) || 0;
    const com = parseFloat(document.getElementById('eg-comments').value) || 0;

    const er = (((lik + com) / fol) * 100).toFixed(2);
    document.getElementById('eg-out').innerText = 'Engagement Rate: ' + er + '%';
    document.getElementById('eg-res').style.display = 'block';
}

// Dynamic FAQ Loader (30 Questions)
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    const faqs = [
        "Are these marketing tools 100% free?", "Do I need to create an account?", "Do you store personal inputs on servers?",
        "How does WhatsApp Link Generator work?", "Why measure SERP title pixel width?", "What is recommended Meta Description length?",
        "How is Freelance Hourly Rate calculated?", "How is TikTok Engagement Rate calculated?", "What is a good Instagram engagement rate?",
        "How does Word Counter assist SEO copywriters?", "What are UTM parameters in Analytics?", "Which UTM tags are mandatory?",
        "What does Text Case Converter tool do?", "What is Return on Ad Spend (ROAS)?", "How do you calculate ROAS?",
        "What is target acceptable e-commerce ROAS?", "What is Aspect Ratio in graphics?", "Recommended ratio for Instagram posts?",
        "What is an Open Graph (OG) meta tag?", "Why is OG image previewer helpful?", "Are micro-tools mobile responsive?",
        "Will tools slow down browser execution?", "Can I embed these utilities on sites?", "How often are keyword tools updated?",
        "Is there a word limit in Word Counter?", "Does WhatsApp tool work on WhatsApp Business?", "How to clear calculator inputs?",
        "Where can I read detailed SEO guides?", "How do tools contribute to SEO strategy?", "Who created ProMarketer Tools Hub?"
    ];

    faqs.forEach((q, idx) => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `
            <div class="faq-question">${idx + 1}. ${q} <span>+</span></div>
            <div class="faq-answer">All utility calculations execute client-side in real-time within your browser for maximum security, privacy, and performance.</div>
        `;
        div.onclick = () => div.classList.toggle('active');
        faqContainer.appendChild(div);
    });
});