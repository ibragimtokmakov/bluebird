$(document).ready(function () {
    $(".top_menu_burger").on("click", function () {
        $(".top_menu_list").slideDown();
        $(".top_menu_burger").css("visibility", "hidden");
        $(".burger_close").css({"display": "block", "z-index": "2"}).fadeIn();
        $(".top_menu_list").css({"background-color": "rgba(0, 0, 0, 0.9)", "z-index": "1"});
    })
    $(".burger_close").on("click", function () {
        $(this).hide();
        $(".top_menu_list").slideUp();
        $(".top_menu_burger").css("visibility", "visible");
        $(".top_menu_list").css({"background-color": "rgba(0, 0, 0, 0)", "z-index": "0"}).delay(500);
    });
    $('.top_call-btn_link').fancybox({
        width: 300,
        maxWidth: 400,
        height: 332,
        padding: 0,
        closeClick: false,
        helpers: {
            overlay: {
                closeClick: true,
            }
        }
    });

    $(".phone").mask("+ 7 (999) 999 - 99 - 99?");
    $(".form1").submit(function () {
        $.fancybox.close();
        var tel = $(this).find('input[name="phone"]');
        var empty = false;
        if (tel.val() == "") {
            empty = true;
        }
        if (empty == true) {
            tel.addClass("error-input");
            tel.focus();
        } else {
            var form_data = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "sendmessage.php",
                data: form_data,
                success: function () {
                    cleanTnanks(this);
                }
            });
        }
        return false;
    });
    $('.window .dd-close').click(function (e) {
        $.fancybox.close();
    });
    $('.window .js-close').click(function (e) {
        $("#thanks").css("display", "none");
        $.fancybox.close();
    });

    function cleanTnanks(form) {
        $('input[type="text"]').removeClass("error-input");
        $("input[type=text], textarea").val("");
        $('.trigger').fancybox({
            closeClick: false,
            width: 250,
            maxWidth: 400,
            padding: 0,
            helpers: {
                overlay: {
                    closeClick: false,
                }
            }
        }).trigger('click');
    };
    $(window).on("resize", function () {
        if ($(window).width() > 768) {
            $(".top_menu").css("display", "inline-block");
        }
        if ($(window).width() > 768) {
            $(".top_menu_list").css("display", "block");
        } else {
            $(".top_menu_list").css("display", "none");
        }
    });
})