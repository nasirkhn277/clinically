$(document).ready(function () {
    function checkNewAppointment(val) {
        loadMyAppointment(val);
        setTimeout(checkNewAppointment.bind(null, 1), 120000);
    }
    checkNewAppointment(0);

    //month filter popup
    $(".full-column").on("click", "#month_filter", function () {
        var curr = $(this);
        var type = curr.attr('type');
        $('#popup').load('popup/comisisonDateFilterPopup.php?type=' + type, function () {
            $('#popup').show();
        });
    });

    // ## filter date wise ##
    $("#popup").on("click", "#view_details", function () {

        var dataString = '';
        if ($('#doc_comm').val() == 'consult_commission') {
            dataString = 'filter_month=' + $('#filter_month').val() + '&filter_year=' + $('#filter_year').val() + '&action=byDropDown';
            var url = "ajax/getFilterDoctorConsultCommission.php";
        } else if ($('#doc_comm').val() == 'referral_commission') {
            dataString = 'filter_month=' + $('#filter_month').val() + '&filter_year=' + $('#filter_year').val() + '&action=byDropDown';
            var url = "ajax/getFilterReferralCommission.php";
        } else if ($('#doc_comm').val() == 'medicine_commission') {
            dataString = 'filter_month=' + $('#filter_month').val() + '&filter_year=' + $('#filter_year').val() + '&action=byDropDown';
            var url = "ajax/getFilterMedicineCommission.php";
        } else if ($('#doc_comm').val() == 'diagnostic_commission') {
            dataString = 'filter_month=' + $('#filter_month').val() + '&filter_year=' + $('#filter_year').val() + '&action=byDropDown';
            var url = "ajax/getFilterDiagnosticLabCommission.php";
        }
        $('#view_details').text('Please wait...');
        $.ajax({
            url: url,
            type: "POST",
            data: dataString,
            cache: false,
            success: function (data, textStatus, jqXHR) {
                $('.table-body').html(data);
                $("#popup").hide();
            }
        });
    });

// page reload
    $(".full-column").on("click", "#reset", function () {
        location.reload();
    });

});

function loadMyAppointment(val) {
    if (val < 1) {
        $('#myAppointmentList').html('<div class="medical-spinner" id="load"></div>');
    }
    var dataString = 'val=' + val + '&action=byDropDown';
    $.ajax({
        url: "ajax/loadMyAppointment.php",
        type: "POST",
        data: dataString,
        cache: false,
        success: function (data) {
            if (data) {
                setTimeout(function () {
                    $('#myAppointmentList').html(data);
                }, 400);
            } else {
                $('#myAppointmentList').html('');
            }
        }
    });
}
