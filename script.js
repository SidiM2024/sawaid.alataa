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




  
