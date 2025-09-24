// انتخاب نوع سفارش
const simpleOption = document.getElementById('simple');
const vipOption = document.getElementById('vip');
let selectedType = "simple";

[simpleOption, vipOption].forEach(opt => {
  opt.addEventListener('click', () => {
    // رفع برجستگی از همه
    simpleOption.classList.remove('selected');
    vipOption.classList.remove('selected');
    // اضافه کردن برجستگی به انتخاب‌شده
    opt.classList.add('selected');
    selectedType = opt.id;
  });
  opt.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      opt.click();
    }
  });
});

// Toast پیام موفقیت
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.className = "toast show";
  setTimeout(() => toast.className = "toast", 2800);
}

// ثبت سفارش دمو
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const telegramId = document.getElementById('telegramId').value.trim();
  const desc = document.getElementById('description').value.trim();
  if (!telegramId.match(/^@[a-zA-Z0-9_]{5,}$/)) {
    showToast('آیدی تلگرام معتبر وارد کنید (با @ و حداقل ۵ حرف)');
    return;
  }
  if (!desc) {
    showToast('لطفاً توضیحات سفارش را وارد کنید.');
    return;
  }
  showToast(`✅ سفارش "${selectedType === "simple" ? "ساده" : "VIP"}" با موفقیت ثبت شد.`);
  this.reset();
  simpleOption.classList.add('selected');
  vipOption.classList.remove('selected');
  selectedType = "simple";
});
