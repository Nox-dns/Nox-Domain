// انتخاب آیکون برجسته و نمایش حالت انتخاب‌شده
const icons = document.querySelectorAll('.icon-item');
let selectedType = document.querySelector('.icon-item.selected')?.id || "edit";

icons.forEach(opt => {
  opt.addEventListener('click', () => {
    icons.forEach(i => i.classList.remove('selected'));
    opt.classList.add('selected');
    selectedType = opt.id;
  });
});

// Toast پیام موفقیت
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.className = "toast show";
  setTimeout(() => toast.className = "toast", 2800);
}

// ثبت حالت دمو
document.getElementById('stateForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const desc = document.getElementById('description').value.trim();
  if (!desc) {
    showToast('لطفاً توضیحات را وارد کنید.');
    return;
  }
  let title = document.getElementById(selectedType).querySelector('.icon-title').innerText;
  showToast(`✅ حالت "${title}" با توضیحات ثبت شد.`);
  document.getElementById('description').value = "";
});
