// ----- تب‌بندی -----
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ----- Toast -----
function showToast(msg, type = "error") {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.className = "toast show " + type;
  setTimeout(() => toast.className = "toast", 3500);
}

// ----- Spinner -----
function showSpinner(id, show=true) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = show ? "block" : "none";
}

// ----- اعتبارسنجی تلگرام -----
function validateTelegramId(id) {
  return /^@[a-zA-Z0-9_]{5,}$/.test(id);
}

// ----- ثبت سفارش (غیرفعال تا راه‌اندازی Firebase) -----
// document.getElementById('orderForm').addEventListener('submit', async (e) => {
//   e.preventDefault();
//   // کدهای ثبت سفارش و اتصال به Firebase را بعداً اضافه کن
//   showToast("فعلاً ثبت سفارش فعال نیست. بعداً راه‌اندازی می‌شود.", "error");
// });

// ----- مشاهده اطلاعات دامنه (غیرفعال تا راه‌اندازی Firebase) -----
// document.getElementById('viewBtn').addEventListener('click', async () => {
//   showToast("فعلاً این بخش فعال نیست. بعداً راه‌اندازی می‌شود.", "error");
// });

// ----- چک کننده دامنه (لینک بعداً اضافه می‌شود) -----
document.getElementById('checkBtn').addEventListener('click', () => {
  const domain = document.getElementById('externalDomain').value.trim();
  if (!domain) {
    showToast("نام دامنه را وارد کن!", "error");
    return;
  }
  // window.open(DOMAIN_CHECKER_URL + encodeURIComponent(domain), '_blank');
  showToast("لینک چک کننده دامنه بعداً اضافه می‌شود.", "error");
});

// ----- ورود ادمین (غیرفعال تا راه‌اندازی Firebase) -----
// document.getElementById('adminLogin').addEventListener('click', () => {
//   showToast("پنل ادمین بعداً فعال می‌شود.", "error");
// });
