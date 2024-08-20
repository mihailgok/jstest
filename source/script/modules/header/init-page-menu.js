export default function() {
    let menuBtn = document.querySelector("[data-sandwich]");
    let nav = document.querySelector("[data-main-nav]");
    let nav_items = document.querySelectorAll("[data-nav-item]");
    let logo = document.querySelector("[data-header-logo]");

    let menuActive = false;

    menuBtn.addEventListener("click", () => {
        menuActive = !menuActive;
        menuBtn.classList.toggle("is-active");
        nav.classList.toggle("is-active");
        document.body.classList.toggle("stop-scroll");
        logo.classList.toggle("is-menu");

        for (let i = 0; i < nav_items.length; i++) {
            setTimeout(() => {
                nav_items[i].classList.toggle("is-active");
            }, 200 * i)
        }
    });

    const resizeObserver = new ResizeObserver((entries, observer) => {
        for(let entry of entries){
            if(entry.contentRect.width > 1023) {
                if (menuActive) {
                    menuBtn.classList.remove("is-active");
                    nav.classList.remove("is-active");
                    document.body.classList.remove("stop-scroll");
                    logo.classList.remove("is-menu");
    
                    for (let i = 0; i < nav_items.length; i++) {
                        setTimeout(() => {
                            nav_items[i].classList.remove("is-active");
                        }, 200 * i)
                    }
                }
                menuActive = !menuActive;
            }
        }
    });

    resizeObserver.observe(document.querySelector("body"));

    // window.addEventListener("resize", () => {
    //     if (window.innerWidth >= 1024) {
    //         if (menuActive) {
    //             menuBtn.classList.remove("is-active");
    //             nav.classList.remove("is-active");
    //             document.body.classList.remove("stop-scroll");
    //             logo.classList.remove("is-menu");

    //             for (let i = 0; i < nav_items.length; i++) {
    //                 setTimeout(() => {
    //                     nav_items[i].classList.remove("is-active");
    //                 }, 200 * i)
    //             }
    //         }
    //         menuActive = !menuActive;
    //     }
    // });
};