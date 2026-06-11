/* ============================================
   Alper Kaya — Portfolio
   i18n (TR/EN), daktilo efekti, scroll reveal
   ============================================ */

const translations = {
  tr: {
    nav_about: "Hakkımda",
    nav_services: "Hizmetler",
    nav_projects: "Projeler",
    nav_experience: "Deneyim",
    nav_skills: "Yetenekler",
    nav_contact: "İletişim",

    hero_hello: "Merhaba, ben Alper 👋",
    hero_title_1: "Bilgisayar Mühendisi &",
    hero_title_2: "Web Developer",
    hero_btn1: "Birlikte Çalışalım",
    hero_btn2: "Projelerimi Gör",

    feature1_title: "Yeni Mezun Bilgisayar Mühendisiyim",
    feature1_text:
      "Selçuk Üniversitesi Bilgisayar Mühendisliği'nden Haziran 2025'te mezun " +
      "oldum. Staj dönemlerimde HTML, CSS ve PHP ile kurumsal web siteleri " +
      "geliştirdim; responsive arayüz tasarımı ve içerik entegrasyonunda " +
      "deneyim kazandım.",
    feature1_link: "Deneyimime göz at",
    feature2_title: "Yapay Zekâ ile Geliştiriyorum",
    feature2_text:
      "Claude Code ve GitHub Copilot gibi modern yapay zekâ araçlarını " +
      "geliştirme sürecime entegre ediyorum. Gömülü sistemlerden bilgisayarlı " +
      "görüye uzanan projelerimde çözüm odaklı ve takım çalışmasına yatkın " +
      "bir yaklaşım benimsiyorum.",
    feature2_link: "Yeteneklerimi incele",

    services_title: "Size Nasıl Yardımcı Olabilirim?",
    services_sub: "İhtiyacınıza göre uçtan uca web çözümleri.",
    svc1_title: "Web Geliştirme",
    svc1_text: "Sıfırdan modern, hızlı ve güvenilir web siteleri geliştiriyorum.",
    svc2_title: "Responsive Tasarım",
    svc2_text: "Her ekran boyutunda kusursuz görünen arayüzler tasarlıyorum.",
    svc3_title: "AI Destekli Geliştirme",
    svc3_text: "Claude Code ve Copilot ile geliştirme süreçlerini hızlandırıyorum.",
    svc4_title: "Performans",
    svc4_text: "Siteleri hız ve verimlilik için optimize ediyorum.",
    svc5_title: "Gömülü Sistemler & IoT",
    svc5_text: "Arduino ve sensörlerle akıllı otomasyon sistemleri kuruyorum.",
    svc6_title: "Bakım & Destek",
    svc6_text: "Yayındaki sitelerin güncel ve sorunsuz kalmasını sağlıyorum.",

    projects_title: "Projelerim",
    projects_sub: "Geliştirdiğim bazı çalışmalar.",
    project1_title: "Akıllı Sera Otomasyon Sistemi",
    project1_desc:
      "Sıcaklık, nem ve toprak nemini izleyerek sulama, havalandırma ve " +
      "aydınlatmayı otomatik kontrol eden Arduino tabanlı otomasyon sistemi.",
    project2_title: "Gerçek Zamanlı Nesne Tanıma",
    project2_desc:
      "Python ve OpenCV ile geliştirilen, görüntü işleme teknikleriyle " +
      "canlı görüntü üzerinde nesne tespiti yapan uygulama.",
    project3_title: "Kurumsal Web Siteleri",
    project3_desc:
      "Interio'daki stajım sırasında HTML, CSS ve PHP ile geliştirdiğim " +
      "responsive kurumsal web siteleri.",

    exp_title: "Deneyim & Eğitim",
    exp_sub: "Bugüne kadarki yolculuğum.",
    exp1_date: "Şubat 2025 – Mayıs 2025",
    exp1_title: "Web Geliştirme Stajyeri",
    exp1_place: "Interio Kurumsal Reklam Hizmetleri · Konya",
    exp1_text:
      "HTML, CSS ve PHP ile kurumsal web siteleri geliştirdim; responsive " +
      "arayüzler tasarladım ve içerik entegrasyonunu yürüttüm.",
    exp2_date: "Temmuz 2024 – Ağustos 2024",
    exp2_title: "Stajyer Bilgisayar Mühendisi",
    exp2_place: "Manavgat Belediyesi – Bilgi İşlem · Antalya",
    exp2_text:
      "Bilgi işlem biriminde yazılım ve donanım süreçlerine destek verdim; " +
      "BT altyapısını gözlemleyip belgeledim.",
    exp3_date: "Mezuniyet: Haziran 2025",
    exp3_title: "Bilgisayar Mühendisliği Lisans",
    exp3_place: "Selçuk Üniversitesi · Konya",
    exp3_text:
      "Yazılım geliştirme, web teknolojileri, gömülü sistemler ve yapay zekâ " +
      "üzerine lisans eğitimi. Selçuk Teknofest Topluluğu üyesi.",

    skills_title: "Yetenekler",
    skills_sub: "Çalıştığım teknolojiler ve araçlar.",
    skills_g1_title: "Programlama & Web",
    skills_g2_title: "Yapay Zekâ & Gömülü Sistemler",
    skills_g3_title: "Araçlar & Sertifikalar",

    contact_title: "Birlikte harika bir şeyler yapalım",
    contact_text:
      "Yeni fırsatlara her zaman açığım. Bir projeniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Bana yazın!",
    contact_btn: "E-posta Gönder",

    footer_rights: "Tüm hakları saklıdır.",

    typewriter: [
      "Responsive web siteleri geliştiriyorum.",
      "Python ve OpenCV ile görüntü işliyorum.",
      "Arduino ile akıllı sistemler kuruyorum.",
      "Yapay zekâ destekli araçlarla hızlı geliştiriyorum."
    ]
  },

  en: {
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_contact: "Contact",

    hero_hello: "Hi, I'm Alper 👋",
    hero_title_1: "Computer Engineer &",
    hero_title_2: "Web Developer",
    hero_btn1: "Let's Work Together",
    hero_btn2: "View My Work",

    feature1_title: "Recent Computer Engineering Graduate",
    feature1_text:
      "I graduated in Computer Engineering from Selçuk University in June 2025. " +
      "During my internships I developed corporate websites with HTML, CSS and " +
      "PHP, gaining hands-on experience in responsive interface design and " +
      "content integration.",
    feature1_link: "Check out my experience",
    feature2_title: "I Develop with AI",
    feature2_text:
      "I integrate modern AI tools like Claude Code and GitHub Copilot into my " +
      "development workflow. Across projects ranging from embedded systems to " +
      "computer vision, I bring a solution-driven, team-oriented approach.",
    feature2_link: "Check out my skills",

    services_title: "How Can I Help You?",
    services_sub: "End-to-end web solutions tailored to your needs.",
    svc1_title: "Web Development",
    svc1_text: "I build modern, fast and reliable websites from scratch.",
    svc2_title: "Responsive Design",
    svc2_text: "Interfaces that look flawless on every screen size.",
    svc3_title: "AI-Assisted Development",
    svc3_text: "I accelerate development workflows with Claude Code and Copilot.",
    svc4_title: "Performance",
    svc4_text: "I optimize websites for speed and efficiency.",
    svc5_title: "Embedded Systems & IoT",
    svc5_text: "I build smart automation systems with Arduino and sensors.",
    svc6_title: "Maintenance & Support",
    svc6_text: "I keep live websites up-to-date and running smoothly.",

    projects_title: "My Projects",
    projects_sub: "Some of the work I've built.",
    project1_title: "Smart Automated Greenhouse System",
    project1_desc:
      "An Arduino-based automation system that monitors temperature, humidity " +
      "and soil moisture to automatically control irrigation, ventilation and lighting.",
    project2_title: "Real-Time Object Recognition",
    project2_desc:
      "A real-time object detection app built with Python and OpenCV, applying " +
      "image processing techniques to live video.",
    project3_title: "Corporate Websites",
    project3_desc:
      "Responsive corporate websites I built with HTML, CSS and PHP during my " +
      "internship at Interio.",

    exp_title: "Experience & Education",
    exp_sub: "My journey so far.",
    exp1_date: "February 2025 – May 2025",
    exp1_title: "Web Development Intern",
    exp1_place: "Interio Kurumsal Reklam Hizmetleri · Konya",
    exp1_text:
      "Developed corporate websites with HTML, CSS and PHP; designed responsive " +
      "interfaces and handled content integration.",
    exp2_date: "July 2024 – August 2024",
    exp2_title: "Intern Computer Engineer",
    exp2_place: "Manavgat Municipality – IT Department · Antalya",
    exp2_text:
      "Assisted with software and hardware processes in the IT unit; observed " +
      "and documented the IT infrastructure.",
    exp3_date: "Graduated: June 2025",
    exp3_title: "B.Sc. Computer Engineering",
    exp3_place: "Selçuk University · Konya",
    exp3_text:
      "Degree focused on software development, web technologies, embedded " +
      "systems and AI. Member of the Selçuk Teknofest Community.",

    skills_title: "Skills",
    skills_sub: "Technologies and tools I work with.",
    skills_g1_title: "Programming & Web",
    skills_g2_title: "AI & Embedded Systems",
    skills_g3_title: "Tools & Certifications",

    contact_title: "Let's build something amazing together",
    contact_text:
      "I'm always open to new opportunities. Got a project in mind, or just want to say hi? Drop me a line!",
    contact_btn: "Send an Email",

    footer_rights: "All rights reserved.",

    typewriter: [
      "I build responsive websites.",
      "I work with Python & OpenCV.",
      "I build smart systems with Arduino.",
      "I develop fast with AI-assisted tools."
    ]
  }
};

/* ============ Dil yönetimi ============ */
let currentLang = localStorage.getItem("lang") || "tr";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  restartTypewriter();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

/* ============ Daktilo efekti ============ */
const typeEl = document.getElementById("typewriter");
let typeTimer = null;

function restartTypewriter() {
  clearTimeout(typeTimer);
  const words = translations[currentLang].typewriter;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];

    if (!deleting) {
      charIndex++;
      typeEl.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        typeTimer = setTimeout(tick, 2000);
        return;
      }
      typeTimer = setTimeout(tick, 65);
    } else {
      charIndex--;
      typeEl.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      typeTimer = setTimeout(tick, 35);
    }
  }

  typeEl.textContent = "";
  tick();
}

/* ============ Nesne tanıma etiketi (hero) ============ */
const detectText = document.getElementById("detectText");
const detectLabels = [
  "web_developer · 0.99",
  "computer_engineer · 0.98",
  "ai_enthusiast · 0.97",
  "arduino_builder · 0.95",
  "coffee_lover · 1.00"
];
let detectIndex = 0;

if (detectText && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    detectIndex = (detectIndex + 1) % detectLabels.length;
    detectText.style.opacity = 0;
    setTimeout(() => {
      detectText.textContent = detectLabels[detectIndex];
      detectText.style.opacity = 1;
    }, 250);
  }, 2800);
}

/* ============ Scroll reveal ============ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ============ Navbar ============ */
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (window.scrollY / scrollable) * 100 + "%";
  highlightNav();
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

/* Aktif bölümün nav linkini vurgula */
const sections = document.querySelectorAll("section[id]");

function highlightNav() {
  const pos = window.scrollY + 120;
  sections.forEach((section) => {
    const link = navLinks.querySelector(`a[href="#${section.id}"]`);
    if (!link) return;
    const inSection = pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight;
    link.classList.toggle("active", inSection);
  });
}

/* ============ Başlangıç ============ */
document.getElementById("year").textContent = new Date().getFullYear();
setLang(currentLang);
