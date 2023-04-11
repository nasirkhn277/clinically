$(document).ready(function () {

    $('#cancel_popup').live('click', function (event) {
        $('#popup').hide().html('');
        $('#mini_local_stream_div').animate({
            'left': "+=660px",
            'height': "-=100px",
            'width': "-=100px"
        }, 1000);
        $('#local-player').animate({
            'height': "-=100px",
            'width': "-=100px"
        }, 1000);
    });

    $('.consult_feedback').live('click', function () {
        var tab = $(this).attr('id');
        var bookingid = $('#channel').val();
        var membership = $('#membership').val();
        var companyid = $('#companyid').val();
        var userid = $('#userid').val();
        $('#popup').load('popup/consultFeedback.php?tab=' + tab + '&bookingid=' + bookingid + '&membership=' + membership + '&companyid=' + companyid + '&userid=' + userid, function () {
            $('#mini_local_stream_div').animate({
                'left': "-=660px",
                'height': "+=100px",
                'width': "+=100px"
            }, 1000);
            $('#local-player').animate({
                'height': "+=100px",
                'width': "+=100px"
            }, 1000);
            $('.consult_tab' + tab).addClass('active');
            $('.consult_btn').attr('id', tab);
            $('#popup').show();
        });
    });

    $(".consult_tab1").live("click", function () {
        var tab = 1;
        var bookingid = $('#channel').val();
        var userid = $('#userid').val();
        $('#popup').load('popup/consultFeedback.php?tab=' + tab + '&bookingid=' + bookingid + '&userid=' + userid, function () {
            $('.consult_tab' + tab).addClass('active');
            $('.consult_btn').attr('id', tab);
            $('#popup').show();
        });
    });

    $(".consult_tab2").live("click", function () {
        var tab = 2;
        var bookingid = $('#channel').val();
        var userid = $('#userid').val();
        $('#popup').load('popup/consultFeedback.php?tab=' + tab + '&bookingid=' + bookingid + '&userid=' + userid, function () {
            $('.consult_tab' + tab).addClass('active');
            $('.consult_btn').attr('id', tab);
            $('#popup').show();
        });
    });

    $(".consult_tab3").live("click", function () {
        var tab = 3;
        var bookingid = $('#channel').val();
        var userid = $('#userid').val();
        $('#popup').load('popup/consultFeedback.php?tab=' + tab + '&bookingid=' + bookingid + '&userid=' + userid, function () {
            $('.consult_tab' + tab).addClass('active');
            $('.consult_btn').attr('id', tab);
            $('#popup').show();
        });
    });

    $(".consult_tab4").live("click", function () {
        var tab = 4;
        var bookingid = $('#channel').val();
        var userid = $('#userid').val();
        $('#popup').load('popup/consultFeedback.php?tab=' + tab + '&bookingid=' + bookingid + '&userid=' + userid, function () {
            $('.consult_tab' + tab).addClass('active');
            $('.consult_btn').attr('id', tab);
            $('#popup').show();
        });
    });

    $(".consult_tab5").live("click", function () {
        var tab = 5;
        var bookingid = $('#channel').val();
        var userid = $('#userid').val();
        $('#popup').load('popup/consultFeedback.php?tab=' + tab + '&bookingid=' + bookingid + '&userid=' + userid, function () {
            $('.consult_tab' + tab).addClass('active');
            $('.consult_btn').attr('id', tab);
            $('#popup').show();
        });
    });

    $(".consult_tab6").live("click", function () {
        var tab = 6;
        var bookingid = $('#channel').val();
        var userid = $('#userid').val();
        $('#popup').load('popup/consultFeedback.php?tab=' + tab + '&bookingid=' + bookingid + '&userid=' + userid, function () {
            $('.consult_tab' + tab).addClass('active');
            $('.consult_btn').attr('id', tab);
            $('#popup').show();
        });
    });

    $('.brPic').live('click', function () {
        $('.browsePic').click();
    });

    $('.browsePic').live('change', function () {
        // GET THE FILE INPUT.
        var id = $(this).attr('id');
        var fi = document.getElementById(id);

        // RUN A LOOP TO CHECK EACH SELECTED FILE.
        var filec = 0;
        var filecount = 0;
        for (var i = 0; i <= fi.files.length - 1; i++) {
            var fname = fi.files.item(i).name;      // THE NAME OF THE FILE.
            var fsize = fi.files.item(i).size / 1024;    // THE SIZE OF THE FILE.
            var ext = fname.split(".");
            ext = ext[ext.length - 1].toLowerCase();
            var arrayExtensions = ["jpg", "jpeg", "png", "pdf"];
            if (arrayExtensions.lastIndexOf(ext) == -1) {
                filec++;
            }
            filecount++;
        }
        if (filec > 0) {
            $.confirm({
                title: "Alert",
                message: "Only image & pdf file type is allowed.",
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
                message: "You can not upload image or pdf more than 5 MB.",
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
        //var filename = $(this).val().split('\\').pop();
        $('#plctxt').html(filecount + ' files selected');
    });

    $('.consult_btn').live('click', function () {
        var id = $(this).attr('id');
        var canvas = document.getElementById('iframe').contentWindow.document.getElementById('canvas');
        var dataURL = canvas.toDataURL();
        var blank = document.createElement('canvas');
        blank.width = canvas.width;
        blank.height = canvas.height;
        if (canvas.toDataURL() === blank.toDataURL()) {
            var dataURL = '';
        }
        $(this).unbind('click').live('click', function () {
            return false;
        });
        $("#frm").on('submit', function (event) {
            event.preventDefault();
            var postData = new FormData(this);
            postData.append('bookingid', $('#channel').val());
            postData.append('dataURL', dataURL);
            if (id == '1') {
                postData.append('action', 'save_patient_description');
            } else if (id == '2') {
                postData.append('action', 'save_patient_findings');
            } else if (id == '3') {
                postData.append('action', 'save_patient_treatment');
            } else if (id == '4') {
                postData.append('action', 'save_patient_diagnosis');
            } else if (id == '5') {
                postData.append('action', 'save_patient_medicines');
            } else if (id == '6') {
                if ($('.chkSpec:checked').length == 1) {
                    postData.append('action', 'refer_specialist');
                } else {
                    $.confirm({
                        title: "Alert",
                        message: "Please select atleast one specialist.",
                        buttons: {
                            "OK": {
                                "class": "curr_btn",
                                action: function () {
                                    $('#' + id).unbind('click').live('click', function () {
                                        return true;
                                    });
                                }
                            }
                        }
                    });
                    return false;
                }
            }
            var formURL = "action/appointmentAction.php";
            $('.consult_btn').text('Please wait...');
            $.ajax({
                url: formURL,
                type: "POST",
                data: postData,
                processData: false,
                contentType: false,
                success: function (data, textStatus, jqXHR) {
                    var response_data = JSON.parse(data);
                    $('.consult_btn').text('save');
                    if (response_data['status'] == '-1') {
                    } else if (response_data['status'] == '1') {
                        var msg = '<div class="success_wrap">' + response_data['message'] + '</div>';
                        $('#popup').html(msg).show();
                        setTimeout(function () {
                            $('#overlay, #popup').hide();
                            var tab = id;
                            var bookingid = $('#channel').val();
                            $('#popup').load('popup/consultFeedback.php?tab=' + tab + '&bookingid=' + bookingid, function () {
                                $('.consult_tab' + tab).addClass('active');
                                $('.consult_btn').attr('id', tab);
                                $('#popup').show();
                            });
                        }, 2200);
                    } else if (response_data['status'] == '0') {
                        var msg = '<div class="success_wrap">' + response_data['message'] + '</div>';
                        $('#popup').html(msg).show();
                        setTimeout(function () {
                            $('#overlay, #popup').hide();
                            window.location.reload();
                        }, 2200);
                    } else {
                        var msg = '<div class="success_wrap">' + response_data['message'] + '</div>';
                        $('#popup').html(msg).show();
                        setTimeout(function () {
                            $('#overlay, #popup').hide();
                            window.location.reload();
                        }, 2200);
                    }
                }
            });
            e.preventDefault();	//STOP default action
        });
        $("#frm").submit(); //SUBMIT FORM
    });

    $('.rmmedia').live('click', function () {
        var curr = $(this);
        $.confirm({
            title: "Remove Confirmation",
            message: "Are you sure want to remove media?",
            buttons: {
                "Yes": {
                    "class": "curr_btn",
                    action: function (e) {
                        var curr_btn = $(this);
                        curr_btn.unbind('click').click(function () {
                            return false;
                        });
                        $('.curr_btn').text('Please wait...');
                        var splitid = curr.attr('id').split('_');
                        var id = splitid[1];
                        var tab = splitid[0];
                        if (tab == '1') {
                            var action = 'delete_patient_description_media';
                        } else if (tab == '2') {
                            var action = 'delete_patient_findings_media';
                        } else if (tab == '3') {
                            var action = 'delete_patient_treatment_media';
                        } else if (tab == '4') {
                            var action = 'delete_patient_diagnosis_media';
                        } else if (tab == '5') {
                            var action = 'delete_patient_medicines_media';
                        }
                        var dataString = 'id=' + id + '&action=' + action;
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
                                        curr.closest('.doc-box-wrap').remove();
                                        $('#confirmOverlay').remove();
                                    }, 3000);
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

    $('.chkSpec').live('click', function () {
        if ($(this).is(':checked') === true) {
            $('.splst-wrp').removeClass('row-highlight-green');
            $(this).closest('.splst-wrp').addClass('row-highlight-green');
            $('.chkSpec').removeAttr('checked');
            $(this).attr('checked', true);
            $('#doctorid').val($(this).val());
        } else {
            $('.splst-wrp').removeClass('row-highlight-green');
        }
    });
});