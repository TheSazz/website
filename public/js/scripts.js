"use strict";
$(".top-projects .project").each(function() {
    anime.remove(this);
    var e = $(this).find(".project-img").get(0);
    $(this).mouseenter(function() {
        anime({
            targets: e,
            scale: 1.1,
            duration: 500,
            opacity: .4
        })
    }),
    $(this).mouseleave(function() {
        anime({
            targets: e,
            scale: 1,
            duration: 500,
            opacity: 1
        })
    })
});
var timeout = null;
new ClipboardJS(".contact.is--discord",{
    text: function() {
        return "Windows#2797"
    }
}).on("success", function(e) {
    $(".contact.copied").removeClass("copied"),
    $(e.trigger).addClass("copied"),
    clearTimeout(timeout),
    timeout = setTimeout(function() {
        return $(e.trigger).removeClass("copied")
    }, 2e3)
}),
new ClipboardJS(".contact.is--skype",{
    text: function() {
        return "atw_adhil"
    }
}).on("success", function(e) {
    $(".contact.copied").removeClass("copied"),
    $(e.trigger).addClass("copied"),
    clearTimeout(timeout),
    timeout = setTimeout(function() {
        return $(e.trigger).removeClass("copied")
    }, 2e3)
});
