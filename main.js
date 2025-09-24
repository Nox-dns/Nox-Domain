// تب‌بندی سایت با ایموجی
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Toast پیام
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.className = "toast show";
  setTimeout(() => toast.className = "toast", 3000);
}

// دمو برای فرم سفارش (در صورت نیاز به اتصال فایربیس، کد مربوطه را جایگزین کن)
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  showToast("✅ سفارش شما ثبت شد!");
  this.reset();
});

// دمو ورود ادمین (در صورت نیاز به اتصال فایربیس، کد مربوطه را جایگزین کن)
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('adminPanel').style.display = 'block';
  showToast("🔒 وارد پنل شدید!");
});
