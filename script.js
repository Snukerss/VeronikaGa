// ---------- Дані карток ----------
const articles = [
  {
    img: "images/woman-tablet.png",
    alt: "Woman reading on a tablet",
    tag: "Sports",
    time: "5 min read",
    title: "Liki Trike – A Compact Trike with the Big Benefits",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
  },
  {
    img: "images/reading-headphones.png",
    alt: "Man with headphones reading a book",
    tag: "Pets",
    time: "5 min read",
    title: "Honoring Black History Month with Toddlers",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
  },
  {
    img: "images/runner.png",
    alt: "Runner at sunset",
    tag: "Core",
    time: "5 min read",
    title: "Setting Intentions Instead of Resolutions for 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
  }
];

const arrowIcon =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>';

function createCard(a) {
  return `
    <article class="card">
      <a href="#" class="card__img"><img src="${a.img}" alt="${a.alt}" loading="lazy" /></a>
      <div class="card__meta">
        <span class="tag">${a.tag}</span>
        <span class="card__time">${a.time}</span>
      </div>
      <h3>${a.title}</h3>
      <p>${a.text}</p>
      <a href="#" class="card__link">Read more ${arrowIcon}</a>
    </article>`;
}

// У макеті два ряди по три картки
const grid = document.getElementById("grid");
grid.innerHTML = [...articles, ...articles].map(createCard).join("");

// ---------- Мобільне меню ----------
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});

// ---------- Форми підписки ----------
const toast = document.createElement("div");
toast.className = "toast";
document.body.appendChild(toast);

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("show"), 2500);
}

function handleSubscribe(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type=email]");
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    input.classList.toggle("error", !valid);
    if (!valid) {
      showToast("Please enter a valid email");
      return;
    }
    showToast("Thanks for subscribing!");
    form.reset();
  });
}

handleSubscribe(document.getElementById("newsletterForm"));
handleSubscribe(document.getElementById("footerForm"));
