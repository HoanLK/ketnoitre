$(function () {
    $("#next-to-noidungdichvu").click(function () {                                                                 /*Click nút xuống nội dung dịch vụ*/
        $('html, body').animate({
            scrollTop: $('#noidungdichvu').offset().top
        }, 500);
    });
});