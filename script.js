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
            // إظهار نافذة منبثقة عند إدخال المدخلات بشكل صحيح
            var donationWindow = window.open("", "Donation Success", "width=400,height=200");
            donationWindow.document.write("<h2>تم نسخ رقم التبرع إلى الحافظة بنجاح!</h2><p>رقم التبرع: " + donationNumber + "</p>");
            donationWindow.document.write("<p>يمكنك الآن توجه إلى تطبيق البنكي ولصق رقم.</p>");
            donationWindow.document.write("<button onclick='window.close()'>إغلاق</button>");
        }).catch(function(error) {
            console.error("لم يتم نسخ الرقم: " + error);
        });
    } else {
        alert("من فضلك اختر المبلغ وطريقة الدفع.");
    }
}

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


