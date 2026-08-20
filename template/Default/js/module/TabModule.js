export default function TabModule() {

    let tab = document.querySelectorAll('.tabJS');
    if (tab) {
        tab.forEach((t) => {
            let tBtn = t.querySelectorAll('.tabBtn');
            let tPanel = t.querySelectorAll('.tabPanel');

            // for tab
            if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
                tBtn[0].classList.add('active');
                tPanel[0].classList.add('open');
                $(tPanel[0]).slideDown();

                for (let i = 0; i < tBtn.length; i++) {
                    tBtn[i].addEventListener('click', showPanel);

                    function showPanel(e) {
                        e.preventDefault();
                        for (let a = 0; a < tBtn.length; a++) {
                            tBtn[a].classList.remove('active');
                            tPanel[a].classList.remove('open');
                            $(tPanel[a]).slideUp(400);

                        }
                        tBtn[i].classList.add('active');
                        tPanel[i].classList.add('open');
                        $(tPanel[i]).slideDown(400);

                    }
                }
            }
        });
    }
    let tabGroups = document.querySelectorAll('.tabJS2');

    if (tabGroups) {
        tabGroups.forEach((tabGroup) => {
            let tabBtns = tabGroup.querySelectorAll('.tabBtn');
            let tabPanels = tabGroup.querySelectorAll('.tabPanel');

            // for tab
            if (tabBtns.length !== 0 && tabPanels.length === tabBtns.length) {
                tabBtns[0].classList.add('active');
                $(tabPanels[0]).slideDown();

                tabBtns.forEach((tabBtn, i) => {
                    let tabLinkJs = tabBtn.querySelector('.tabLinkJs');

                    if (tabLinkJs) {
                        tabLinkJs.addEventListener('click', function (e) {
                            e.stopPropagation(); // Ngăn chặn sự kiện click lan toả lên
                            e.preventDefault();

                            let link = tabLinkJs.getAttribute('href');
                            window.location.href = link;
                        });

                        tabBtn.addEventListener('click', function (e) {
                            for (let a = 0; a < tabBtns.length; a++) {
                                tabBtns[a].classList.remove('active');
                                $(tabPanels[a]).slideUp(400);
                            }
                            tabBtn.classList.add('active');
                            $(tabPanels[i]).slideDown(400);
                        });
                    }
                });
            }
        });
    }

    // Lấy tất cả các cụm tabJS
    var tabContainers = document.querySelectorAll('.tabFiterJs');
    if (tabContainers) {
        // Lặp qua từng cụm tabJS
        tabContainers.forEach(function (tabContainer) {
            var filterButtons = tabContainer.querySelectorAll('.btnFilter');
            var tabButtons = tabContainer.querySelectorAll('.btnTab');
            var tabPanels = tabContainer.querySelectorAll('.tabPN');

            function updateActivePanel() {
                var activeFilterBtn = tabContainer.querySelector('.btnFilter.active');
                var activeTabBtn = tabContainer.querySelector('.btnTab.active');

                if (activeFilterBtn && activeTabBtn) {
                    var selectedFilter = activeFilterBtn.getAttribute('data-filter');
                    var selectedTab = activeTabBtn.getAttribute('data-tab');

                    tabPanels.forEach(function (panel) {
                        if (panel.classList.contains('active')) {
                            $(panel).slideUp(400, function () {
                                panel.classList.remove('active');
                            });
                        }
                    });


                    var activePanel = tabContainer.querySelector('.tabPN[data-panel*="[' + selectedFilter + ',' + selectedTab + ']"]');
                    if (activePanel) {
                        $(activePanel).slideDown(400, function () {
                            activePanel.classList.add('active');

                        });
                    }
                }
            }


            // Mặc định cho trạng thái ban đầu
            filterButtons.forEach(function (filterBtn) {
                if (filterBtn.getAttribute('data-filter') === '0') {
                    filterBtn.classList.add('active');
                }
                filterBtn.addEventListener('click', function () {
                    filterButtons.forEach(function (fb) {
                        fb.classList.remove('active');
                    });

                    filterBtn.classList.add('active');
                    updateActivePanel();
                });
            });

            tabButtons.forEach(function (tabBtn) {
                if (tabBtn.getAttribute('data-tab') === '0') {
                    tabBtn.classList.add('active');
                }
                tabBtn.addEventListener('click', function () {
                    tabButtons.forEach(function (tb) {
                        tb.classList.remove('active');
                    });

                    tabBtn.classList.add('active');
                    updateActivePanel();
                });
            });

            // Khởi tạo tab panel active khi trang được tải
            updateActivePanel();
        });
    }



    const circlejs = document.querySelector(".circleJs");
    if (circlejs) {
        const circleList = circlejs.querySelector(".circleList");
        const items = circleList.querySelectorAll(".circleItem");

        const circletSize = circlejs.offsetWidth; // Lấy kích thước thực tế
        console.log("kích thước", circletSize);

        const itemSize = items[0]?.offsetWidth || 0; // Lấy kích thước item (nếu có)
        const radius = circletSize / 2 + itemSize / 6; // Điều chỉnh bán kính
        const centerX = circletSize / 2;
        const centerY = circletSize / 2;
        const totalItems = items.length;

        items.forEach((item, index) => {
            let startAngle = -Math.PI / 2; // Điều chỉnh góc bắt đầu (ví dụ: -90 độ để bắt đầu từ trên cùng)
            let angle = startAngle + (index / totalItems) * 2 * Math.PI;
            let x = centerX + radius * Math.cos(angle) - itemSize / 2;
            let y = centerY + radius * Math.sin(angle) - itemSize / 2;

            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
        });
    }

}