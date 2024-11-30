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

  
  

  function donate() {
    var amount = document.getElementById('amount').value;
    var paymentMethod = document.getElementById('payment').value;
    
    // تحقق من المدخلات
    if (amount && paymentMethod) {
        // نسخ الرقم إلى الحافظة
        var donationNumber = "30647036"; // رقم التبرع
        navigator.clipboard.writeText(donationNumber).then(function() {
            // إظهار رسالة التبرع بعد نسخ الرقم
            var messageDiv = document.getElementById('donation-message');
            messageDiv.style.display = 'block'; // إظهار الرسالة
        }).catch(function(error) {
            console.error("لم يتم نسخ الرقم: " + error);
        });
    } else {
        alert("من فضلك اختر المبلغ وطريقة الدفع.");
    }
}




