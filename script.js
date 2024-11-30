const countdown = () => {
    // تاريخ بداية رمضان
    const ramadanDate = new Date("2025-03-10T00:00:00Z").getTime(); // تأكد من تنسيق التاريخ بشكل صحيح
    const now = new Date().getTime(); // الوقت الحالي
    const gap = ramadanDate - now; // الفارق بين التاريخين

    // حساب الوقت (الثواني، الدقائق، الساعات، الأيام)
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // عرض النتائج في العناصر
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // إذا انتهت الفترة الزمنية، إيقاف العد التنازلي
    if (gap <= 0) {
        clearInterval(countdownInterval); // إيقاف العد التنازلي
        document.getElementById("days").innerText = "رمضان قد بدأ!";
        document.getElementById("hours").innerText = "";
        document.getElementById("minutes").innerText = "";
        document.getElementById("seconds").innerText = "";
    }
};

// تحديث العد التنازلي كل ثانية
const countdownInterval = setInterval(countdown, 1000);

function donate() {
    const payment = document.getElementById("payment").value;
    let accountNumber;

    // تحديد رقم الحساب لكل بنك
    switch (payment) {
        case "bankily":
        case "masrafy":
        case "bim":
        case "click":
        case "amanty":
            accountNumber = "30647036";
            break;
        default:
            alert("يرجى اختيار طريقة الدفع!");
            return;
    }

    // نسخ رقم الحساب إلى الحافظة
    navigator.clipboard.writeText(accountNumber).then(() => {
        alert(شكراً لتبرعك! رقم الحساب (${accountNumber}) تم نسخه إلى الحافظة. يمكنك الآن التوجه إلى تطبيق البنك لإتمام العملية.);
    }).catch(err => {
        alert("حدث خطأ أثناء نسخ رقم الحساب. يرجى المحاولة مرة أخرى.");
    });
}

// دالة لعرض الرسالة للمستخدم 4 مرات يوميًا
function showReminder() {
    let lastReminderDate = localStorage.getItem('lastReminderDate');
    let reminderCount = localStorage.getItem('reminderCount');
    let currentDate = new Date().toDateString(); // الحصول على تاريخ اليوم

    // إذا كان تاريخ آخر تذكير يختلف عن التاريخ الحالي، إعادة تعيين عدد التذكيرات إلى 0
    if (lastReminderDate !== currentDate) {
        localStorage.setItem('lastReminderDate', currentDate);
        localStorage.setItem('reminderCount', 0); // إعادة تعيين العداد
    }

    // إذا كانت الرسالة قد ظهرت أقل من 4 مرات اليوم، عرض الرسالة
    if (reminderCount < 4) {
        document.getElementById('reminderMessage').style.display = 'block'; // إظهار الرسالة
        localStorage.setItem('reminderCount', parseInt(reminderCount) + 1); // زيادة عدد التذكيرات
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker تم تسجيله بنجاح:', registration);
            })
            .catch((error) => {
                console.log('خطأ في تسجيل Service Worker:', error);
            });
    });
} else {
    console.log('المتصفح لا يدعم Service Worker');
}
 
// Import Firebase functions (ensure you have installed Firebase SDK)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
  
