// تحديد تاريخ رمضان 2025
const targetDate = new Date("2025-03-29T00:00:00").getTime(); // افترض أن رمضان في 29 مارس 2025

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

