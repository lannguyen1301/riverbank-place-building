{
document.addEventListener("DOMContentLoaded", function () {
    var hidebtn = 'none'; // Mặc định ẩn nút
    if (isReferredFromGoogle()) {
        hidebtn = 'block'; // Hiển thị nếu đến từ Google
    }
    var targetDiv = document.getElementById("elemaduthuong");
    if (targetDiv) {
        targetDiv.innerHTML = `<div style="text-align: center !important; margin: 15px;">
                        <span class="btnMaDuThuong back-top-maduthuong" id="maduthuong1" style="display: ${hidebtn}; width: fit-content;
    margin: auto;">Mini Game</span></div>`;
    } else {
        // Mini Game dưới Footer - Traffic Option - tfuser
        var targetDiv_footer = document.getElementById("tfuserfooter");
        if(targetDiv_footer) {
            targetDiv_footer.innerHTML = `<div class="" style="text-align: center !important; margin: 0px; display: ${hidebtn};"> <span class="btnMaDuThuong_footer back-top-maduthuong" id="maduthuong" style="width: 18rem !important;
    display: block; background-color: #133b71; color: #fafafa; padding: .5rem; border-radius: .6rem;" onclick="startCountdown();">Mã Download tài liệu</span> </div>`;
        }
    }
});

// Kiểm tra referrer từ Google
function isReferredFromGoogle() {
    const referrer = document.referrer;
    return referrer && referrer.includes("google.com"); // Kiểm tra referrer không rỗng và có chứa "google.com"
}


// Button mã dự thưởng
$(function () {
    const $btnMiniGame = $(".back-top-maduthuong"); // Nút Mini Game

    // $(window).scroll(function () {
    //     if ($btnMiniGame.css("display") === "block") { // Chỉ xử lý nếu nút đang hiển thị
    //         if ($(this).scrollTop() > 50) {
    //             $btnMiniGame.fadeIn();
    //         } else {
    //             $btnMiniGame.fadeOut();
    //         }
    //     }
    // });

    $btnMiniGame.click(function () {
        // alert("Chào mừng bạn đến với Mini Game của Office Saigon! Nhấn OK để nhận mã dự thưởng.");
        if (!isReferredFromGoogle()) {
            // alert("Bạn cần đến từ tìm kiếm Google để tham gia Mini Game!");
            return false; // Dừng lại nếu không đến từ Google
        }
        const btn_maduthuong = document.getElementById('maduthuong');
        btn_maduthuong.textContent = 'OSG:';
        startCountdown();
        // return $("body, html").stop(!1, !1).animate({ scrollTop: 0 }, 500), !1;
    });
});

function startCountdown() {
    const btnMaDuThuong = document.getElementById("maduthuong");

    // Gọi hàm để kiểm tra và tạo mã nếu hợp lệ
    const result = generateUnique8DigitNumber();

    // Kiểm tra kết quả trả về và hiển thị nội dung tương ứng
    if (result === "Ngoài khung giờ Mini game" || result === "Ngày mai nhé!") {
        // btnMaDuThuong.textContent = result;
        // return;
    }

    // Nếu trong khung giờ và chưa tạo mã, bắt đầu đếm ngược
    let countdown = 10; // Thời gian đếm ngược từ 150 giây

    const interval = setInterval(() => {
        btnMaDuThuong.textContent = `Còn lại: ${countdown}s`;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            btnMaDuThuong.textContent = result;
        }
    }, 1000);
}

// Hàm tạo mã ngẫu nhiên, cookie, và khung giờ giữ nguyên như đã có
function generateUnique8DigitNumber() {
    const timeFrame = isWithinTimeFrame();
    const cookieName = "uniqueCode_" + timeFrame;

    // Nếu ngoài khung giờ, thông báo cho người dùng
    if (!timeFrame) {
        // return "Ngoài khung giờ Mini game";
    }

    // Kiểm tra xem đã tạo mã trong khung giờ này chưa
    let savedCode = getCookie(cookieName);
    if (savedCode) {
        return "Ngày mai nhé!";
    }

    // Tạo mã ngẫu nhiên mới nếu chưa có
    let number = Math.floor(10000000 + Math.random() * 90000000); // Tạo số ngẫu nhiên từ 10000000 đến 99999999

    // Lưu mã vào cookie để dùng lại trong ngày
    setCookie(cookieName, number, 1);
    return `Mã: ${number}`;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function isWithinTimeFrame() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Kiểm tra khung giờ 08:15 - 14:00
    const morningSlot = (currentHour === 8 && currentMinute >= 15) || (currentHour > 8 && currentHour < 14) || (currentHour === 14 && currentMinute === 0);
    
    // Kiểm tra khung giờ 18:00 - 20:30
    const eveningSlot = (currentHour >= 18 && currentHour < 20) || (currentHour === 20 && currentMinute <= 30);

    if (morningSlot) return "morning";
    if (eveningSlot) return "evening";

    return null; // Ngoài khung giờ
}
}