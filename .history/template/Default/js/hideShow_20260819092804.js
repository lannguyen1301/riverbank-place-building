function osToggleProfile() {
    const textBody = document.getElementById("osProfileText");
    const toggleIcon = document.getElementById("osToggleIcon");
    const toggleText = document.getElementById("osToggleText");

    // Nếu đang mở rộng -> Thu gọn lại
    if (textBody.classList.contains("os-expanded")) {
        textBody.classList.remove("os-expanded");
        toggleIcon.classList.remove("os-rotate");
        toggleText.innerText = "Xem toàn bộ hồ sơ";
    }
    // Nếu đang thu gọn -> Mở rộng ra
    else {
        textBody.classList.add("os-expanded");
        toggleIcon.classList.add("os-rotate");
        toggleText.innerText = "Thu gọn hồ sơ";
    }
}
