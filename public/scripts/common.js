$(function (e) {
    $("body").on("keypress", ".integer", function (e) {
        return 8 != e.which && 110 != e.which && 0 != e.which && (e.which < 48 || e.which > 57) ? !1 : void 0;
    });
    $("body").on("keypress", ".alphabet_spec_chars", function (e) {
        return e.which > 47 && e.which < 58 && 32 != e.which ? !1 : void 0;
    });
    $("body").on("focus", ".spdate", function () {
        $(this).datepicker({changeMonth: !0, showAnim: "slideDown", changeYear: !0, dateFormat: "dd-mm-yy"}).datepicker("show");
    });
    $("body").on("focus", ".spsdate", function () {
        $(this).datepicker({changeMonth: !0, showAnim: "slideDown", changeYear: !0, dateFormat: "dd-mm-yy"}).datepicker("show");
    });
    $("body").on("focus", ".spedate", function () {
        $(this).datepicker("destroy"),
                (sdate = $(".spsdate").val().split("-")),
                (firstDate = new Date(sdate[1] + "/" + sdate[0] + "/" + sdate[2])),
                $(this).datepicker({changeMonth: !0, showAnim: "slideDown", changeYear: !0, dateFormat: "dd-mm-yy", minDate: firstDate}).datepicker("show");
    });
    $("body").on("focus", ".spaedate", function () {
        $(this).datepicker("destroy"),
                (sdate = $(".spadate").val().split("-")),
                (firstDate = new Date(sdate[1] + "/" + sdate[0] + "/" + sdate[2])),
                $(this).datepicker({changeMonth: !0, showAnim: "slideDown", changeYear: !0, dateFormat: "dd-mm-yy", minDate: firstDate}).datepicker("show");
    });
    $("body").on("focus", ".spbdate", function () {
        var e = new Date();
        $(this).datepicker({changeMonth: !0, showAnim: "slideDown", changeYear: !0, dateFormat: "dd-mm-yy", maxDate: e}).datepicker("show");
    });
    $("body").on("focus", ".spadate", function () {
        var e = new Date();
        $(this).datepicker({changeMonth: !0, showAnim: "slideDown", changeYear: !0, dateFormat: "dd-mm-yy", minDate: e}).datepicker("show");
    });
    $("body").on("focus", ".spmdate", function () {
        var e = new Date();
        $(this).datepicker({changeMonth: !0, showAnim: "slideDown", changeYear: !0, dateFormat: "dd-mm-yy", maxDate: e}).datepicker("show");
    });
    $("body").on("focus", ".sptime", function () {
        $(this).timepicker({timeFormat: "h:i A", minTime: "12:00 AM", maxTime: "11:59 PM"}).datepicker("show");
    });
    $("body").on("focus", ".spctime", function () {
        $(this).timepicker({timeFormat: "h:i A", minTime: "6:00 AM", maxTime: "10:00 PM"}).datepicker("show");
    });
    $("body").on("focus", ".spstime", function () {
        $(this).timepicker({timeFormat: "h:i A", minTime: "0:00 AM", maxTime: "11:59 PM"}).timepicker("show");
    });
    $("body").on("focus", ".spetime", function () {
        $(this).timepicker({timeFormat: "h:i A", minTime: "0:00 AM", maxTime: "11:59 PM"}).timepicker("show");
    });
    $("body").on("keydown", ".decimal", function (event) {
        if (event.shiftKey == !0) {
            event.preventDefault();
        }
        if (
                (event.keyCode >= 48 && event.keyCode <= 57) ||
                (event.keyCode >= 96 && event.keyCode <= 105) ||
                event.keyCode == 8 ||
                event.keyCode == 9 ||
                event.keyCode == 37 ||
                event.keyCode == 39 ||
                event.keyCode == 46 ||
                event.keyCode == 190
                ) {
        } else {
            event.preventDefault();
        }
        if ($(this).val().indexOf(".") !== -1 && event.keyCode == 190) {
            event.preventDefault();
        }
    });
    $("body").on("focus", ".frm-txtbox", function () {
        $(".frm-txtbox").removeClass("frm-focus");
        $(this).addClass("frm-focus");
    });
    $('body').on('keyup', '.frm-txtbox', function () {
        if ($(this).hasClass('nolabel') === false) {
            if ($(this).val() && $(this).hasClass('fldrequired') === true) {
                $(this).closest('.form-field-wrap').find('.frm-lbl-actv').text($(this).attr('placeholder') + '*');
                $(this).closest('.form-field-wrap').find('.frm-er-msg').text('');
            } else if ($(this).val() && $(this).hasClass('fldrequired') === false) {
                $(this).closest('.form-field-wrap').find('.frm-lbl-actv').text($(this).attr('placeholder'));
                $(this).closest('.form-field-wrap').find('.frm-er-msg').text('');
            } else {
                $(this).closest('.form-field-wrap').find('.frm-lbl-actv').text('');
            }
        }
    });
    $('body').on('keyup', '.frm-txarea', function () {
        if ($(this).hasClass('nolabel') === false) {
            if ($(this).val() && $(this).hasClass('fldrequired') === true) {
                $(this).closest('.form-field-wrap').find('.frm-lbl-actv').text($(this).attr('placeholder') + '*');
                $(this).closest('.form-field-wrap').find('.frm-er-msg').text('');
            } else if ($(this).val() && $(this).hasClass('fldrequired') === false) {
                $(this).closest('.form-field-wrap').find('.frm-lbl-actv').text($(this).attr('placeholder'));
                $(this).closest('.form-field-wrap').find('.frm-er-msg').text('');
            } else {
                $(this).closest('.form-field-wrap').find('.frm-lbl-actv').text('');
            }
        }
    });
    $('body').on('keypress', '.alphanum', function (event) {
        var regex = new RegExp("^[a-zA-Z0-9\b ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    $('body').on('keypress', '.alphabet', function (event) {
        var regex = new RegExp("^[a-zA-Z\b ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    $('body').on('keypress', '.numeric', function (event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
});