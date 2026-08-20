export default function MobileModule() {
    const burgerBtn = document.getElementById("hamburger");
    const mobilemb = document.querySelector(".mobile");
    const mobileOverLaymb = document.querySelector(".mobile-overlay");
    const bodymb = document.getElementsByTagName("body")[0];
    const headermb = document.querySelector(".header");
    const mobileClosemb = document.querySelector(".mobile-close");
    
    let isOpen = false;
    
    // Toggle mobile menu
    if (burgerBtn) {
        burgerBtn.addEventListener("click", () => {
            isOpen = !isOpen;
            if (isOpen) {
                burgerBtn.classList.add("active");
                mobilemb.classList.add("open");
                mobileOverLaymb.classList.add("open");
                bodymb.style.overflowY = "hidden";
                stopLenis();
    
                // Kiểm tra và đảm bảo header không bị ẩn khi mở menu
                if (headermb && headermb.classList.contains("hide")) {
                    headermb.classList.remove("hide");
                }
            } else {
                burgerBtn.classList.remove("active");
                mobilemb.classList.remove("open");
                mobileOverLaymb.classList.remove("open");
                bodymb.style.overflowY = "scroll";
                startLenis();
            }
        });
    }
    document.addEventListener("click", (event) => {
        const isClickInsideMenu = mobilemb.contains(event.target) || burgerBtn.contains(event.target);
    
        if (!isClickInsideMenu && isOpen) {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobilemb.classList.remove("open");
            mobileOverLaymb.classList.remove("open");
            bodymb.style.overflowY = "scroll";
            startLenis();
        }
    });
    
    // Close mobile menu
    if (mobileClosemb) {
        mobileClosemb.addEventListener("click", () => {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobilemb.classList.remove("open");
            mobileOverLaymb.classList.remove("open");
            bodymb.style.overflowY = "scroll";
            startLenis();
        });
    }
    
    // Overlay click to close mobile menu
    if (mobileOverLaymb) {
        mobileOverLaymb.addEventListener("click", () => {
            isOpen = false;
            burgerBtn.classList.remove("active");
            mobilemb.classList.remove("open");
            mobileOverLaymb.classList.remove("open");
            bodymb.style.overflowY = "scroll";
            startLenis();
        });
    }

    const menuNavs_mobile = document.querySelectorAll(".header .mobile .menu-nav");
    if (menuNavs_mobile) {
        menuNavs_mobile.forEach((item) => {
            const menuLinks = item.querySelectorAll(".menu-item.dropdown>.menu-link");
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                const contentNew = `${contentOld} <i class="fa-solid fa-caret-down"></i>`;
                item.innerHTML = contentNew;
            });
        });
    }
    const menuIcons = document.querySelectorAll(".mobile-nav .menu-list .menu-item.dropdown a i");
    
    if (menuIcons) {
        menuIcons.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const menu =
                    item.parentElement.parentElement.querySelectorAll(".menu-list")[0];
                $(menu).slideToggle();
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }
    const menuMgIcons = document.querySelectorAll(".mobile-nav .menu-list .menu-item.mega a i");
    
    if (menuMgIcons) {
        menuMgIcons.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const menu =
                    item.parentElement.parentElement.querySelectorAll(".menu-mega")[0];
                $(menu).slideToggle();
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }
    
    const mobilecons = document.querySelectorAll('.mobile-con'); // Lấy tất cả tiêu đề
    if(mobilecons){
        mobilecons.forEach(mobilecon => {
            const mobilemxh = document.querySelector('.mobile-mxh'); // Lấy tất cả tiêu đề
            if(mobilemxh){
                const mobilemxhHeight = mobilemxh.offsetHeight; // Lấy chiều cao của từng tiêu đề
                mobilecon.style.setProperty('--mobilecon-height', `${mobilemxhHeight}px`); // Gán biến CSS cho từng mô tả
            }
          });
          
    }
    
}