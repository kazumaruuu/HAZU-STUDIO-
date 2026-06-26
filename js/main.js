console.log('main.js loaded');

// トグルボタン

const btn = document.querySelector('.toggle_btn');
const mask = document.querySelector('.mask');

btn.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

mask.addEventListener('click', () => {
  document.body.classList.remove('open');
});



// guide-page

// 1. .fadeinクラスを持つ全要素（各セクション）を取得
const targets = document.querySelectorAll(".fadein");

// 2. 発火の基準線を設定（画面の下から20%の位置）
const options = {
  root: null,
  rootMargin: "0px 0px -20% 0px",
  threshold: 0,
};

// 3. 監視ルール（Observer）を定義
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    // isIntersecting は、その「個別の要素」が基準線を越えたかだけを判定する
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // パフォーマンス最適化：一度表示されたセクションは監視から外す
      obs.unobserve(entry.target);
    }
  });
}, options);

// 4. 取得した各セクションを、一つずつ個別に監視対象として登録
targets.forEach((target) => {
  observer.observe(target);
});


