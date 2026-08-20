// Hàm Mở Popup Đánh Giá
function openExpertPopup() {
    const popup = document.getElementById("expertPopup");
    popup.classList.add("os-show");
    document.body.style.overflow = "hidden"; // Khóa cuộn trang khi mở popup
}

// Hàm Đóng Popup Đánh Giá
function closeExpertPopup(event) {
    const popup = document.getElementById("expertPopup");
    if (popup) {
        popup.classList.remove("os-show");
        document.body.style.overflow = "auto"; // Mở lại cuộn trang
    }
}

// Đóng Popup khi nhấn phím ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeExpertPopup();
    }
});
