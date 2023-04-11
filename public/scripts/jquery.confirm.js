!(function (i) {
    (i.confirm = function (c) {
        if (i("#confirmOverlay").length)
            return !1;
        var n = "";
        i.each(c.buttons, function (i, c) {
            (n += '<div class="popup-cnfrmwrap right"><a style="cursor:pointer;" class="clickbutton ' + c["class"] + '">' + i + "</a></div>"), c.action || (c.action = function () {});
        });
        var o = [
            '<div id="confirmOverlay">',
            '<div class="popup_cnfwrap clasmov" id="confirmBox">',
            '<div class="popup-cnftop">',
            "<h2>",
            c.title,
            "</h2>",
            '<div class="clr"></div>',
            "</div>",
            '<div class="popup-cnfbody">',
            "",
            c.message,
            "",
            '<div class="close-cnfpop">',
            n,
            '<div class="clr"></div>',
            "</div>",
            "</div>",
            "</div>",
            "</div>",
        ].join("");
        i(o).hide().appendTo("body").fadeIn();
        var t = i("#confirmBox .clickbutton"),
                a = 0;
        i.each(c.buttons, function (c, n) {
            t.eq(a++).click(function () {
                return i(this).unbind("click"), n.action(), i.confirm.hide(), !1;
            });
        });
    }),
            (i.confirm.hide = function () {
                i("#confirmOverlay").fadeOut(function () {
                    i(this).remove();
                });
            });
})(jQuery);
