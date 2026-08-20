export default function CollapseModule() {
    const clBlock = document.querySelectorAll(".collapse-block");
    if (clBlock) {
        clBlock.forEach((block) => {
            const clItems = block.querySelectorAll(".collapse-item");


            const firstBody = block.querySelector(".collapse-body");
            if (firstBody) {
                $(firstBody).slideDown();
                firstBody.parentElement.classList.add("active");
            }

            const heads = block.querySelectorAll(".collapse-head");

            heads.forEach(head => {
                head.addEventListener("click", () => {
                    const parentItem = head.parentElement;
                    const body = parentItem.querySelector(".collapse-body");

                    if (parentItem.classList.contains("active")) {
                        // Đóng item hiện tại nếu đang active
                        $(body).slideUp();
                        parentItem.classList.remove("active");
                    } else {
                        // Đóng tất cả các item khác trước khi mở item được click
                        clItems.forEach(item => {
                            const itemBody = item.querySelector(".collapse-body");
                            if (item !== parentItem && item.classList.contains("active")) {
                                $(itemBody).slideUp();
                                item.classList.remove("active");
                            }
                        });

                        // Mở item được click
                        $(body).slideDown();
                        parentItem.classList.add("active");
                    }
                });
            });
        });
    }

    const clBlock2 = document.querySelectorAll(".collapse2-block");
    if (clBlock2) {
        clBlock2.forEach((item) => {
            const clBody = item.querySelectorAll('.collapse2-body');
            const clItems = item.querySelectorAll('.collapse2-item');


            const head = item.querySelectorAll('.collapse2-head');
            head.forEach(headItem => {
                headItem.addEventListener('click', () => {
                    const parentItem = headItem.parentElement;
                    const body = parentItem.querySelector(".collapse2-body");

                    if (!$(body).is(':animated')) {
                        if (parentItem.classList.contains("active")) {
                            $(body).slideUp();
                            parentItem.classList.remove("active");
                        } else {
                            $(body).slideDown();
                            parentItem.classList.add("active");
                        }
                    }
                });
            });
        });
    }
}