lfunction switchLang(lang) {
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.getElementById("hero-title").innerText = "أفضل الأحذية لأفضل أداء";
        document.getElementById("hero-description").innerText = "اكتشف أحدث مجموعاتنا الآن.";
        document.getElementById("hero-button").innerText = "تسوق الآن";
        document.getElementById("products-title").innerText = "منتجاتنا";
        document.getElementById("offers-title").innerText = "عروضنا";
        document.getElementById("offers-description").innerText = "خصومات تصل إلى 30% على أحدث الموديلات!";
        document.getElementById("contact-title").innerText = "اتصل بنا";
        document.getElementById("contact-description").innerText = "للتواصل معنا، يرجى الاتصال على 0123456789 أو زيارة مقرنا الرئيسي.";
    } else {
        document.body.style.direction = 'ltr';
        document.getElementById("hero-title").innerText = "The Best Shoes for The Best Performance";
        document.getElementById("hero-description").innerText = "Discover our latest collections now.";
        document.getElementById("hero-button").innerText = "Shop Now";
        document.getElementById("products-title").innerText = "Our Products";
        document.getElementById("offers-title").innerText = "Our Offers";
        document.getElementById("offers-description").innerText = "Up to 30% off on the latest models!";
        document.getElementById("contact-title").innerText = "Contact Us";
        document.getElementById("contact-description").innerText = "To contact us, please call 0123456789 or visit our headquarters.";
    }
}
