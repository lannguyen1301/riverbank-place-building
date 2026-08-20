document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("elemaduthuong");
    if (targetDiv) {
        targetDiv.innerHTML = '<div class="cate_box"> <div class="cate_box_child"> <div class="" style="text-align: center !important; margin: 15px;"> <span class="btnMaDuThuong back-top-maduthuong" id="maduthuong">Mini Game</span> </div> </div> </div>';
    }
});


// Button mã dự thưởng
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".back-top-maduthuong,.hfooter,.ft_mob").fadeIn();
        }
        else {
            $(".back-top-maduthuong,.hfooter,.ft_mob").fadeOut();
        }
    });

    $(".back-top-maduthuong").click(function () { 
        const btn_maduthuong = document.getElementById('maduthuong');
        btn_maduthuong.textContent = 'OSG:';
        startCountdown();
        return $("body, html").stop(!1, !1).animate({ scrollTop: 0 }, 500), !1; 
    })
});

function startCountdown() {
    const btnMaDuThuong = document.getElementById("maduthuong");

    // Gọi hàm để kiểm tra và tạo mã nếu hợp lệ
    const result = generateUnique8DigitNumber();

    // Kiểm tra kết quả trả về và hiển thị nội dung tương ứng
    if (result === "Ngoài khung giờ Mini game" || result === "Vui lòng chờ đến khung giờ tiếp theo") {
        btnMaDuThuong.textContent = result;
        return;
    }

    // Nếu trong khung giờ và chưa tạo mã, bắt đầu đếm ngược
    let countdown = 5; // Thời gian đếm ngược từ 30 giây

    const interval = setInterval(() => {
        btnMaDuThuong.textContent = `Còn lại: ${countdown}s`;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            btnMaDuThuong.textContent = result;
        }
    }, 1000);
}

// Thêm sự kiện click để khởi chạy hàm đếm ngược
// document.getElementById("maduthuong").addEventListener("click", startCountdown);


function generateUnique8DigitNumber() {
    const timeFrame = isWithinTimeFrame();
    const cookieName = "uniqueCode_" + timeFrame;

    // Nếu ngoài khung giờ, thông báo cho người dùng
    if (!timeFrame) {
        return "Ngoài khung giờ Mini game";
    }

    // Kiểm tra xem đã tạo mã trong khung giờ này chưa
    let savedCode = getCookie(cookieName);
    if (savedCode) {
        return "Vui lòng chờ đến khung giờ tiếp theo";
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

    // Kiểm tra 2 khung giờ hợp lệ
    const morningSlot = (currentHour >= 8 && currentHour < 13);
    const eveningSlot = (currentHour >= 18 && currentHour < 20);

    // const morningSlot = (currentHour >= 16 && currentHour < 18);
    // const eveningSlot = (currentHour >= 18 && currentHour < 20);

    if (morningSlot) return "morning";
    if (eveningSlot) return "evening";

    return null; // Ngoài khung giờ
}
