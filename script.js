const countdown = () => {
    const ramadanDate = new Date("March 10, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = ramadanDate - now;
  
    // حساب الوقت
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    // عرض النتائج
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  };
  
  // تحديث العد كل ثانية
  setInterval(countdown, 1000);


function donate() {
    const payment = document.getElementById("payment").value;
    let accountNumber;

    // تحديد رقم الحساب لكل بنك
    switch (payment) {
        case "bankily":
            accountNumber = "30647036";
            break;
        case "masrafy":
            accountNumber = "30647036";
            break;
        case "bim":
            accountNumber = "30647036";
            break;
        case "click":
            accountNumber = "30647036";
            break;
        case "amanty":
            accountNumber = "30647036";
            break;
        default:
            alert("يرجى اختيار طريقة الدفع!");
            return;
    }

    // نسخ رقم الحساب إلى الحافظة
    navigator.clipboard.writeText(accountNumber).then(() => {
        alert(`شكراً لتبرعك! رقم الحساب (${accountNumber}) تم نسخه إلى الحافظة. يمكنك الآن التوجه إلى تطبيق البنك لإتمام العملية.`);
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
 

// Import the functions you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDtNky0qQbKDGC45pxuqJ4Tq_AMmXpANwI",
  authDomain: "sawaid-4939e.firebaseapp.com",
  projectId: "sawaid-4939e",
  storageBucket: "sawaid-4939e.firebasestorage.app",
  messagingSenderId: "817695160648",
  appId: "1:817695160648:web:f34385ce7ec33c88ba9b7d",
  measurementId: "G-44YGD8B1W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

// طلب إذن المستخدم لإرسال الإشعارات
Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
        console.log("Permission granted!");

        // الحصول على التوكن الخاص بالجهاز
        getToken(messaging, { vapidKey: 'YOUR_VAPID_KEY' }).then((currentToken) => {
            if (currentToken) {
                console.log("Device token: ", currentToken);
                // يمكنك إرسال هذا التوكن إلى الخادم أو تخزينه لاستخدامه في المستقبل
            } else {
                console.log("No registration token available. Request permission to generate one.");
            }
        }).catch((err) => {
            console.log("Error getting token: ", err);
        });
    } else {
        console.log("Notification permission denied.");
    }
});

onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    // يمكن هنا إضافة منطق لعرض إشعار خاص داخل الصفحة أو تعديل واجهتك بناءً على الإشعار
});



  
