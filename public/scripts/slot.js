$(document).ready(function () {
    var max_txt_count;
    $(".full-column").on("mouseover", ".showAction, .drop-actns", function () {
        $(this).closest(".tbl-actn").find(".drop-actns").show();
    });

    $(".full-column").on("mouseleave", ".showAction, .drop-actns", function () {
        $(this).closest(".tbl-actn").find(".drop-actns").hide();
    });

    $('.full-column').on('click', '#select_all_days', function () {
        if ($(this).is(':checked') === true) {
            $('.multi_days').attr('checked', 'checked');
        } else {
            $('.multi_days').removeAttr('checked');
        }
        $('#consultTime').hide();
        $('#appendDiv').html('');
        $('#consult_time').val('');
    });

    $('.full-column').on('click', '.multi_days', function () {
        $('#consultTime').hide();
        $('#appendDiv').html('');
        $('#consult_time').val('');
    });

    $('.full-column').on('change', '#consult_time, #break_time', function () {
        if ($('.multi_days:checked').length != 0) {
            var curr = $(this);
            var consult_time = curr.val();
            var days = [];
            if (consult_time) {
                $(".multi_days:checked").each(function () {
                    days.push($(this).val());
                });
                var dataString = 'consult_time=' + consult_time + '&days=' + days;
                $.ajax({
                    url: "ajax/defineSlots.php",
                    type: "POST",
                    data: dataString,
                    cache: false,
                    success: function (data) {
                        $('#consultTime').show();
                        $('#appendDiv').html(data);
                    }
                });
            }
        }
    });

    $('.full-column').on('click', '.add_time_slot', function () {
        var curr = $(this);
        var str = '';
        str += '<div class="slotDiv">';
        str += curr.closest('.dayplan-wrap').find('.slotDiv').html();
        str += '</div>';
        curr.closest('.dayplan-wrap').find('.appendTime').append(str);
        curr.closest('.dayplan-wrap').find('.appendTime').find('.slot-chips').html('');
        str += $('<a style="cursor:pointer;" class="delete_time_slot">Delete Timings</a>').insertAfter(curr.closest('.dayplan-wrap').find('.slotDiv').find('.clear_time_slot').last());
    });

    $('.full-column').on('click', '.clear_time_slot', function () {
        var curr = $(this);
        curr.closest('.slotDiv').find('.sptime').val('');
        curr.closest('.day-console').find('.slotTime').html('');
        curr.closest('.slotDiv').find('.doc_clinic').val('');
    });

    $('.full-column').on('click', '.delete_time_slot', function () {
        var curr = $(this);
        curr.closest('.slotDiv').remove();
    });

    $('.full-column').on('change', '.stime, .etime', function () {
        var curr = $(this);
        var stime = curr.closest('.day-console').find('.stime').val();
        var etime = curr.closest('.day-console').find('.etime').val();
        if (stime && etime) {
            var interval = $('#consult_time').val();
            var break_interval = $('#break_time').val();
            var dataString = 'stime=' + stime + '&etime=' + etime + '&interval=' + interval + '&break_interval=' + break_interval;
            $.ajax({
                url: "ajax/getTimeSlots.php",
                type: "POST",
                data: dataString,
                cache: false,
                success: function (data) {
                    curr.closest('.day-console').find('.slotTime').html(data);
                    var lastslot = curr.closest('.day-console').find('.slot-chips').find('span:last-child').text().split('-');
                    curr.closest('.day-console').find('.etime').val(lastslot[1]);
                    var dataString = '';
                    $.ajax({
                        url: "ajax/getDoctorClinic.php",
                        type: "POST",
                        data: dataString,
                        cache: false,
                        success: function (data) {
                            curr.closest('.day-console').find('.doc_clinic').html(data);
                            curr.closest('.day-console').find('.stime').attr('value', stime);
                            curr.closest('.day-console').find('.etime').attr('value', etime);
                        }
                    });
                    curr.closest('.day-console').find('.doc_clinic').parent().removeClass('hide');
                }
            });
        } else {
            curr.closest('.day-console').find('.doc_clinic').parent().addClass('hide');
        }
    });

    $('.full-column').on('click', '#copy_all', function () {
        var curr = $(this);
        if ($(this).is(':checked') === true) {
            var wrap = curr.closest('.dayplan-wrap').find('.slotWrap').eq(0);
            wrap.find('.doc_clinic').each(function () {
                var selvalues = $(this).find('option:selected').val();
                $(this).find('option').removeAttr('selected');
                $(this).find('option').prop('selected', false);
                $(this).find('option[value="' + selvalues + '"]').attr('selected', 'selected');
                $(this).find('option[value="' + selvalues + '"]').prop('selected', true);
            });
            $('.dayplan-wrap').each(function (index) {
                if (index > 0) {
                    $(this).find('.slotWrap').html(wrap.html());
                    $(this).find('.day_name').val($(this).find('.day-name').text());
                }
            });
        }
    });

    $('.full-column').on('click', '.save_consult_time', function () {
        var check = 0;
        $('.fldrequired').each(function () {
            $('.frm-txtbox').removeClass('frm-focus');
            if ($(this).val() == '') {
                check++;
                $(this).closest('.dev_req_msg').next('.frm-er-msg').text('This field is required');
                $(this).addClass('frm-error');
            } else {
                $(this).closest('.dev_req_msg').next('.frm-er-msg').text('');
                $(this).removeClass('frm-error');
            }
        });
        if (check > 0) {
            return false;
        }
        $(this).unbind('click').live('click', function () {
            return false;
        });
        $("#frm").on('submit', function (event) {
            event.preventDefault();
            var postData = new FormData(this);
            postData.append('action', 'save_consult_time');
            var formURL = "action/appointmentAction.php";
            $('.save_consult_time').text('Please wait...');
            $.ajax({
                url: formURL,
                type: "POST",
                data: postData,
                processData: false,
                contentType: false,
                success: function (data, textStatus, jqXHR) {
                    var response_data = JSON.parse(data);
                    $('.save_consult_time').text('save');
                    if (response_data['status'] == '-1') {
                        $('body').append('<div class="float-alertwrap posfix row-highlight-red"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.href = 'viewslot';
                        }, 10000);
                    } else if (response_data['status'] == '1') {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.href = 'viewslot';
                        }, 3500);
                    } else if (response_data['status'] == '0') {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    } else {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    }
                }
            });
            e.preventDefault();	//STOP default action
        });
        $("#frm").submit(); //SUBMIT FORM
    });

    $('.full-column').on('click', '.brPic', function () {
        $(this).closest('.frm-fileadd').find('.browsePic').click();
    });

    $('.full-column').on('change', '.browsePic', function () {
        // GET THE FILE INPUT.
        var id = $(this).attr('id');
        var fi = document.getElementById(id);

        // RUN A LOOP TO CHECK EACH SELECTED FILE.
        var filec = 0;
        for (var i = 0; i <= fi.files.length - 1; i++) {
            var fname = fi.files.item(i).name;      // THE NAME OF THE FILE.

            var fsize = fi.files.item(i).size / 1024;    // THE SIZE OF THE FILE.
            var ext = fname.split(".");
            ext = ext[ext.length - 1].toLowerCase();
            var arrayExtensions = ["jpg", "jpeg", "png"];
            if (arrayExtensions.lastIndexOf(ext) == -1) {
                filec++;
            }
        }
        if (filec > 0) {
            $.confirm({
                title: "Alert",
                message: "Only image file type is allowed.",
                buttons: {
                    "OK": {
                        "class": "curr_btn",
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }
        if (fsize > 5120) {
            $.confirm({
                title: "Alert",
                message: "You can not upload image more than 5 MB.",
                buttons: {
                    "OK": {
                        "class": "curr_btn",
                        action: function () {
                        }
                    }
                }
            });
            return false;
        }
        var filename = $(this).val().split('\\').pop();
        $('.file-add-itm').html(filename);
    });

    $('.full-column').on('click', '.save_profile', function () {
        var check = 0;
        $('.fldrequired').each(function () {
            $('.frm-txtbox').removeClass('frm-focus');
            if ($(this).val() == '') {
                check++;
                $(this).addClass('frm-error');
            } else {
                $(this).removeClass('frm-error');
            }
        });
        if (check > 0) {
            return false;
        }
        $(this).unbind('click').live('click', function () {
            return false;
        });
        $("#frm").on('submit', function (event) {
            event.preventDefault();
            var postData = new FormData(this);
            postData.append('action', 'update_profile');
            var formURL = "action/appointmentAction.php";
            $('.save_profile').text('Please wait...');
            $.ajax({
                url: formURL,
                type: "POST",
                data: postData,
                processData: false,
                contentType: false,
                success: function (data, textStatus, jqXHR) {
                    var response_data = JSON.parse(data);
                    $('.save_profile').text('save');
                    if (response_data['status'] == '-1') {
                        $('body').append('<div class="float-alertwrap posfix row-highlight-red"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    } else if (response_data['status'] == '1') {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.href = 'viewprofile';
                        }, 3500);
                    } else if (response_data['status'] == '0') {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    } else {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    }
                }
            });
            e.preventDefault();	//STOP default action
        });
        $("#frm").submit(); //SUBMIT FORM
    });

    $('.full-column').on('click', '#open_mark_unavailable', function () {
        var str = '';
        str += '<div class="content-block unvlblty">';
        str += '<div class="content-title redtxt" style="margin-right: 40px; margin-bottom: 10px;">Select Date Range</div>';
        str += '<div style="margin-bottom: 10px;">';
        str += '<div class="left rmarg"><input type="text" class="fltr-datebox spadate" placeholder="From Date*" id="sdate"></div>';
        str += '<div class="left rmarg"><input type="text" class="fltr-datebox spaedate" placeholder="Upto Date*" id="edate"></div>';
        str += '<div class="left fltr-btn"><a style="cursor:pointer;" id="go_mark_unavailable">GO</a></div>';
        str += '<div class="left rest-btn"><a style="cursor:pointer; display:none;" id="clr_unav" onclick="window.location.reload();"><img src="img/clear.svg" alt="" width="12px"></a></div>';
        str += '<div class="clr"></div>';
        str += '</div>';
        str += '<div class="clr"></div>';
        str += '<div class="dayplan-wrap">';
        str += '<div class="blank-table-data">Select a date range to proceed.</div>';
        str += '<div class="clr"></div>';
        str += '<div class="left content-notation">Past dates &amp; time slots can not be editable anymore.<br>Slots which have already booked appointment, would be cancelled automatically.<br>';
        str += 'A date can fall in a one range only.</div>';
        str += '<div class="clr"></div>';
        str += '</div>';
        str += '<div class="actionbuttons right" style="display:none;">';
        str += '<a style="cursor:pointer;" class="tertiary left rmarg" onclick="window.location.reload();">CANCEL</a>';
        str += '<a style="cursor:pointer;" class="primary left rmarg" id="save_mark_unavailability">SAVE</a>';
        str += '</div>';
        str += '<div class="clr"></div>';
        str += '</div>';
        $('.blank-widget').remove();
        $('#appendDiv').html(str);
    });

    $('.full-column').on('click', '#clr_unav', function () {
        window.location.reload();
    });

    $('.full-column').on('click', '#go_mark_unavailable', function () {
        var sdate = $('#sdate').val();
        var edate = $('#edate').val();
        if (sdate && edate) {

            var change_pubdate_format = sdate.split('-');
            var change_expdate_format = edate.split('-');
            // format in mm/dd/yyyy
            var make_pubdate_format = change_pubdate_format[1] + '/' + change_pubdate_format[0] + '/' + change_pubdate_format[2];
            var make_expdate_format = change_expdate_format[1] + '/' + change_expdate_format[0] + '/' + change_expdate_format[2];

            var timeStart = new Date(make_pubdate_format);
            var timeEnd = new Date(make_expdate_format);

            var diff = (timeEnd - timeStart) / 60000; //dividing by seconds and milliseconds
            var minutes = diff % 60;
            var hours = (diff - minutes) / 60;

            if (hours > 144) {
                $.confirm({
                    'title': 'Alert',
                    'message': "Date range can\'t be more than 7 days.",
                    'buttons': {
                        'OK': {
                            'class': '',
                            'action': function () {
                            }
                        }
                    }
                });
                return false;
            }

            $('.blank-table-data').html('<div class="spinner" id="load"></div>');
            var dataString = 'sdate=' + sdate + '&edate=' + edate;
            $.ajax({
                url: "ajax/markUnavailable.php",
                type: "POST",
                data: dataString,
                cache: false,
                success: function (data) {
                    if (data) {
                        setTimeout(function () {
                            $('#appendDiv').find('.dayplan-wrap').addClass('row-highlight-yellow');
                            $('#appendDiv').find('.dayplan-wrap').html(data);
                            $('#appendDiv').find('#clr_unav, .actionbuttons').show();
                            max_txt_count = $('#reason').attr('maxlength');
                        }, 400);
                    } else {
                        window.location.reload();
                    }
                }
            });
        }
    });

    $('.full-column').on('click', '.check_all_unav', function () {
        if ($(this).is(':checked') === true) {
            $(this).closest('.slot-chips').find('.check_unav').attr('checked', 'checked');
            $(this).closest('.slot-chips').find('.check_unav').parent().addClass('row-highlight-red redtxt');
        } else {
            $(this).closest('.slot-chips').find('.check_unav').removeAttr('checked');
            $(this).closest('.slot-chips').find('.check_unav').parent().removeClass('row-highlight-red redtxt');
        }
    });

    $('.full-column').on('click', '.check_unav', function () {
        if ($(this).is(':checked') === true) {
            $(this).parent().addClass('row-highlight-red redtxt');
        } else {
            $(this).parent().removeClass('row-highlight-red redtxt');
        }
    });

    $('.full-column').on('click', '#save_mark_unavailability', function () {
        var check = 0;
        $('.fldrequired').each(function () {
            $('.frm-txtbox').removeClass('frm-focus');
            if ($(this).val() == '') {
                check++;
                $(this).addClass('frm-error');
            } else {
                $(this).removeClass('frm-error');
            }
        });
        if (check > 0) {
            return false;
        }
        $(this).unbind('click').live('click', function () {
            return false;
        });
        $("#frm").on('submit', function (event) {
            event.preventDefault();
            var postData = new FormData(this);
            postData.append('action', 'save_mark_unavailability');
            var formURL = "action/appointmentAction.php";
            $('#save_mark_unavailability').text('Please wait...');
            $.ajax({
                url: formURL,
                type: "POST",
                data: postData,
                processData: false,
                contentType: false,
                success: function (data, textStatus, jqXHR) {
                    var response_data = JSON.parse(data);
                    $('#save_mark_unavailability').text('save');
                    if (response_data['status'] == '-1') {
                        $('body').append('<div class="float-alertwrap posfix row-highlight-red"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    } else if (response_data['status'] == '1') {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    } else if (response_data['status'] == '0') {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    } else {
                        $('body').append('<div class="float-alertwrap posfix"><div class="flrt-msg left text-wrapping">' + response_data['message'] + '</div><div class="clr"></div></div>');
                        setTimeout(function () {
                            $('.float-alertwrap').remove();
                            window.location.reload();
                        }, 3500);
                    }
                }
            });
            e.preventDefault();	//STOP default action
        });
        $("#frm").submit(); //SUBMIT FORM
    });

    $('.full-column').on('click', '.cancel_unavailability', function () {
        var curr = $(this);
        $.confirm({
            title: "Cancel Confirmation",
            message: "Are you sure want to cancel unavailablity ?",
            buttons: {
                "Yes": {
                    "class": "curr_btn",
                    action: function (e) {
                        var curr_btn = $(this);
                        curr_btn.unbind('click').click(function () {
                            return false;
                        });
                        $('.curr_btn').text('Please wait...');
                        var id = curr.attr('id');
                        var dataString = 'id=' + id + '&action=cancel_unavailability';
                        $.ajax({
                            url: "action/appointmentAction.php",
                            type: "POST",
                            data: dataString,
                            cache: false,
                            success: function (data) {
                                var response_data = JSON.parse(data);
                                if (response_data['status'] == '1') {
                                    $('.popup-cnfbody').text(response_data['message']).show();
                                    setTimeout(function () {
                                        $('#confirmOverlay').remove();
                                        curr.closest('.content-block').slideUp().remove(500);
                                    }, 2500);
                                } else if (response_data['status'] == '0') {
                                    $('.popup-cnfbody').text(response_data['message']).show();
                                    setTimeout(function () {
                                        window.location.reload();
                                    }, 2000);
                                } else {
                                    $('.popup-cnfbody').text(response_data['message']).show();
                                    setTimeout(function () {
                                        window.location.reload();
                                    }, 2000);
                                }
                            }
                        });
                        e.preventDefault();
                    }
                },
                No: {
                    "class": "",
                    action: function () {}
                }
            }
        });
    });

    $('.full-column').on('keyup', '#reason', function () {
        var char_count = max_txt_count - $(this).val().length;
        if (char_count >= 0) {
            if (char_count == 1 || char_count == 0) {
                $('.msg_txt').text('* ' + char_count + ' character remaining.');
            } else {
                $('.msg_txt').text('* ' + char_count + ' characters remaining.');
            }
        }
    });
});