// assets/js/include.js
async function include(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        el.innerHTML = await res.text();
    } catch (err) {
        console.error("Include error:", url, err);

        let msg = "Komponent yuklanmadi";
        let style = "padding:20px; border:1px dashed #ec4899; color:#ec4899; font-family:sans-serif; background:rgba(236, 72, 153, 0.1); border-radius:8px; font-size:14px; line-height:1.5";

        if (window.location.protocol === 'file:') {
            msg = `<strong>Diqqat!</strong> Siz faylni to'g'ridan-to'g'ri (file://) ochgansiz.<br>
      Xavfsizlik qoidalari tufayli brauzer boshqa fayllarni yuklashga ruxsat bermaydi.<br>
      Iltimos, saytni ko'rish uchun <strong>lokal serverdan</strong> foydalaning.<br>
      <br>
      Masalan, shu papkada terminal ochib quyidagini yozing:<br>
      <code>python -m http.server</code><br>
      yoki<br>
      <code>npx serve</code><br>
      <br>
      Keyin brauzerda <code>http://localhost:8000</code> manzilini oching.`;
        }

        el.innerHTML = `<div style="${style}">
      ${msg} <br>
      <small style="opacity:0.7">URL: ${url}</small>
    </div>`;
    }
}

async function bootIncludes() {
    await include("#navbar", "components/navbar.html");
    await include("#hero", "components/hero.html");
    await include("#projects", "components/projects-home.html");
    await include("#about", "components/about-home.html");
    await include("#news", "components/news-home.html");
    await include("#partners", "components/partners.html");
    await include("#contacts", "components/contacts-home.html");
    await include("#footer", "components/footer.html");

    markActiveNavLink();
    wireNavbar();
}

function markActiveNavLink() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav]").forEach(a => {
        const href = a.getAttribute("href") || "";
        // loose match because sometimes href is ./projects.html
        if (href.includes(path)) a.setAttribute("aria-current", "page");
    });
}

function wireNavbar() {
    // Wait a bit or retry if navbar not loaded yet?
    // Since we await include(), navbar should be in DOM now.
    const btn = document.querySelector("[data-menu-btn]");
    const panel = document.querySelector("[data-menu-panel]");

    if (!btn || !panel) return;

    btn.addEventListener("click", () => {
        const open = panel.getAttribute("data-open") === "true";
        panel.setAttribute("data-open", String(!open));
        btn.setAttribute("aria-expanded", String(!open));
    });

    document.addEventListener("click", (e) => {
        if (!panel.contains(e.target) && !btn.contains(e.target) && panel.getAttribute('data-open') === 'true') {
            panel.setAttribute("data-open", "false");
            btn.setAttribute("aria-expanded", "false");
        }
    });
}

document.addEventListener("DOMContentLoaded", bootIncludes);
