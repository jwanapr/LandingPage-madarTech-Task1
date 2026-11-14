/* ==========================================================
   Madar Tech Landing Page — main.js
   ========================================================== */

// رقم واتساب مدار تك (بالصيغة الدولية بدون + أو أصفار بالبداية)
// ⚠️ غيّري الرقم هنا للرقم الرسمي قبل النشر
const WHATSAPP_NUMBER = "970590000000";

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("siteNav");
  const menu = document.getElementById("mainMenu");
  const navLinks = document.querySelectorAll(".nav-links .nav-link");
  const toTop = document.getElementById("toTop");
  const form = document.getElementById("contactForm");
  const messageField = document.getElementById("message");

  /* 0) تفعيل التدوير التلقائي مع احترام إعداد تقليل الحركة */
  const heroSlider = document.getElementById("heroSlider");
  if (heroSlider && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    bootstrap.Carousel.getOrCreateInstance(heroSlider, { interval: 6000, pause: "hover", ride: "carousel" });
  }

  /* 1) تغيير شكل الـ Navbar وإظهار زر العودة للأعلى عند التمرير */
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 600);
    highlightActiveLink();
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  /* 2) تفعيل رابط القسم الظاهر حالياً في القائمة (Scrollspy بسيط) */
  const sections = [...navLinks]
    .filter(link => link.getAttribute("href").startsWith("#"))
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function highlightActiveLink() {
    if (!sections.length) return;
    const pos = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0];
    sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec; });
    navLinks.forEach(link =>
      link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`)
    );
  }

  /* 3) إغلاق القائمة المتنقلة بعد الضغط على أي رابط (للموبايل) */
  const collapse = bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false });
  menu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      if (menu.classList.contains("show")) collapse.hide();
    })
  );

  /* 4) تعبئة الرسالة مسبقاً عند الانتقال من رابط برنامج أو حجز */
  if (messageField) {
    const presetMessage = new URLSearchParams(window.location.search).get("message");
    if (presetMessage) messageField.value = presetMessage;
  }

  /* 5) ظهور العناصر بشكل تدريجي عند الوصول لها */
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 90}ms`;
    observer.observe(el);
  });

  /* 6) نموذج التواصل: التحقق من البيانات ثم الإرسال على واتساب */
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      form.querySelector(":invalid").focus();
      return;
    }

    const data = new FormData(form);
    const text =
      `مرحباً مدار تك 👋\n\n` +
      `*الاسم:* ${data.get("name").trim()}\n` +
      `*البريد الإلكتروني:* ${data.get("email").trim()}\n` +
      `*رقم الهاتف:* ${data.get("phone").trim()}\n\n` +
      `*الرسالة:*\n${data.get("message").trim()}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");

    form.reset();
    form.classList.remove("was-validated");
  });

  /* 7) سنة حقوق النشر تتحدث تلقائياً */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  onScroll();
});
