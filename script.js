const menuOpenbutton = document.querySelector("#menu-open-button")
const menuClosebutton = document.querySelector("#menu-close-button")


menuOpenbutton.addEventListener("click",() => {
    /*Toggle mobile menu visibility(การมองเห็น)*/
    document.body.classList.toggle("show-mobile-menu");
});

menuClosebutton.addEventListener("click",() => menuOpenbutton.click
());

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  $(document).ready(function () {
    // ตรวจจับการเลื่อนหน้า
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) { // ใช้ scrollTop() แทน
            $(".scroll-up-btn").addClass("show"); // แสดงปุ่ม scroll up
        } else {
            $(".scroll-up-btn").removeClass("show"); // ซ่อนปุ่ม
        }
    });

    // คลิกปุ่มแล้วเลื่อนขึ้นไปด้านบนแบบ smooth
    $(".scroll-up-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});













