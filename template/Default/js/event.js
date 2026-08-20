document.oncopy = function (event) {
    event.preventDefault();
    var clipboardData = event.clipboardData || window.clipboardData;
    clipboardData.setData(
        "text",
        "https://www.officesaigon.vn/ | Office Saigon Cho thuê văn phòng chuyên nghiệp | Hotline 0987110011",
    );
};
