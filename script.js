// 1) العناصر بتظهر بالتدريج وانت نازل في الصفحة
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => observer.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}

// 2) زرار المتابعة الثابت: يظهر بعد ما الزائر يعدّي الواجهة، ويختفي عند قسم المنصات
const sticky = document.getElementById("stickyFollow");
const hero = document.querySelector(".hero");
const follow = document.getElementById("follow");
let heroVisible = true;
let followVisible = false;

const update = () => sticky.classList.toggle("show", !heroVisible && !followVisible);

if ("IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; update(); }).observe(hero);
  new IntersectionObserver(([e]) => { followVisible = e.isIntersecting; update(); }, { threshold: 0.2 }).observe(follow);
}

// 3) السنة في الفوتر بتتحدث لوحدها
document.getElementById("year").textContent = new Date().getFullYear();
