export default function SideModule() {
    const sideOpen = document.querySelector('.side-open');
    const sideClose = document.querySelector('.side-close');
    const sideFixed = document.querySelector('.side-fixed');
    const sideOverlay = document.querySelector('.side-overlay');
    const sidebody = document.getElementsByTagName("body")[0];
    
    function Open() {
        sideFixed?.classList.add('open');
        sideOverlay?.classList.add('open');
        sideOpen?.classList.add('close');
        sidebody.style.overflowY = "hidden";
    }
    
    function Close() {
        sideFixed?.classList.remove('open');
        sideOverlay?.classList.remove('open');
        sideOpen?.classList.remove('close');
        sidebody.style.overflowY = "auto";
    }
    
    if (sideOpen) {
        sideOpen.addEventListener('click', () => {
            Open();
            console.log("hello this is side click");
        });
    }
    
    if (sideClose) {
        sideClose.addEventListener('click', () => {
            Close();
        });
    }
    
    if (sideOverlay) {
        sideOverlay.addEventListener('click', () => {
            Close();
        });
    }
    
    document.addEventListener('click', (event) => {
        if (sideFixed && sideOpen && !sideFixed.contains(event.target) && !sideOpen.contains(event.target)) {
            Close();
        }
    });
    const side = document.querySelector('.side');
    
    function handleScroll() {
        if (side) {
            const currentScroll = window.scrollY;
    
            // Toggle sticky classes
            if (currentScroll > 0) {
                side.classList.add("sticky");
            } else {
                side.classList.remove("sticky");
            }
        }
    }
    window.addEventListener("scroll", handleScroll);
    
    
    const side2Open = document.querySelector('.side2-open');
    const side2Close = document.querySelector('.side2-close');
    const side2Fixed = document.querySelector('.side2-fixed');
    const side2Overlay = document.querySelector('.side2-overlay');
    const side2body = document.getElementsByTagName("body")[0];
    
    function toggleSide2() {
        const isOpen = side2Fixed?.classList.contains('open');
    
        if (isOpen) {
            side2Fixed?.classList.remove('open');
            side2Overlay?.classList.remove('open');
            side2Open?.classList.remove('close');
            if (window.innerWidth < 1200) {
                side2body.style.overflowY = "auto";
            }
        } else {
            side2Fixed?.classList.add('open');
            side2Overlay?.classList.add('open');
            side2Open?.classList.add('close');
            if (window.innerWidth < 1200) {
                side2body.style.overflowY = "hidden";
            }
        }
    }
    
    if (side2Open) {
        side2Open.addEventListener('click', () => {
            toggleSide2();
            console.log("hello this is side2 click");
        });
    }
    
    if (side2Close) {
        side2Close.addEventListener('click', toggleSide2);
    }
    
    if (side2Overlay) {
        side2Overlay.addEventListener('click', toggleSide2);
    }
    
    document.addEventListener('click', (event) => {
        if (side2Fixed && side2Open && !side2Fixed.contains(event.target) && !side2Open.contains(event.target)) {
            side2Fixed.classList.remove('open');
            side2Overlay.classList.remove('open');
            side2Open.classList.remove('close');
            if (window.innerWidth < 1200) {
                side2body.style.overflowY = "auto";
            }
        }
    });
    
}