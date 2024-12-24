// تحديد تاريخ رمضان 2025
const targetDate = new Date("2025-03-01T00:00:00").getTime(); // افترض أن رمضان في 01 مارس 2025

// تحديث العد التنازلي كل ثانية
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتائج في العناصر
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // إذا انتهى العد التنازلي
    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "رمضان 2025 قد وصل!";
    }
}, 1000);


document.getElementById("membershipForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const occupation = document.getElementById("occupation").value;
    const address = document.getElementById("address").value;

    const message = `
        مرحبًا،
        أريد الانتساب للجمعية:
        الاسم الكامل: ${fullName}
        رقم الهاتف: ${phone}
        التخصص الدراسي أو العمل: ${occupation}
        مكان السكن: ${address}
    `;

    // فتح واتساب مع الرسالة
    const whatsappUrl = `https://wa.me/30647036?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
});

const donateButton = document.getElementById("donateButton");
const confirmationModal = document.getElementById("confirmationModal");
const closeButtons = document.querySelectorAll(".close-modal");
const copyButton = document.getElementById("copyButton");
const uploadForm = document.getElementById("uploadForm");

// فتح نافذة التأكيد
donateButton.addEventListener("click", () => {
    const bank = document.getElementById("bankSelect").value;
    if (!bank) {
        alert("يرجى اختيار التطبيق البنكي.");
        return;
    }
    document.getElementById("bankMessage").innerText = `لقد اخترت تطبيق ${bank}.`;
    confirmationModal.style.display = "flex";
});

// غلق النافذة
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        confirmationModal.style.display = "none";
    });
});

// نسخ الرقم
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText("30647036");
    alert("تم نسخ الرقم.");
});

// إرسال صورة الدفع
uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = document.getElementById("paymentProof").files[0];
    if (!file) {
        alert("يرجى اختيار صورة تأكيد الدفع.");
        return;
    }
    alert("تم رفع صورة تأكيد الدفع! يرجى إرسالها إلى الواتساب 30647036.");
    confirmationModal.style.display = "none";
});



