$(function () {
    $("#next-to-noidungchinh").click(function () {                                                                 /*Click nút xuống nội dung chính*/
        $('html, body').animate({
            scrollTop: $('#noidungchinh').offset().top
        }, 500);
    });
});