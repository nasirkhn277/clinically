//validate password
var validatePassword = () => {
    var pass = $('#cpass').val();
    if($('#cpass').val() != $('#pass').val()){
        $('#cpass').closest('.parent_div').find('.frm-er-msg').text('Passoword did not matched');
        return false;
    } else {
        // Validate small letters
        var lowerCaseLetters = /[a-z]/g;
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
         // Validate numbers
        var numbers = /[0-9]/g;
        if(pass.match(lowerCaseLetters) && pass.match(upperCaseLetters) && pass.match(numbers) && pass.length >= 8){
             // Validate length
             $('#cpass').closest('.parent_div').find('.frm-er-msg').text('');
             return true;
        } else { alert(pass);
            $('#cpass').closest('.parent_div').find('.frm-er-msg').text('Passoword must have atleast one Capital letter, One small letter, one number and minimum 8 char');
            return false;
        }
    } 
}

//validate mobile number
var validateMobile = (fld) => {
    var mobile = fld.val();
    var pattern = /^\d{10}$/;
    if(!(mobile.match(pattern) && mobile.split('')[0] > 5)){
        fld.closest('.parent_div').find('.frm-er-msg').text('Please enter valid mobile.');
        return false;
    } else {
        fld.closest('.parent_div').find('.frm-er-msg').text('');
        return true;
    }
}

var validateEmail = (fld) => {
    var email = fld.val();
    var pattern = /\S+@\S+\.\S+/;
    if(!(email.match(pattern))){
        fld.closest('.parent_div').find('.frm-er-msg').text('Please enter valid email.');
        return false;
    } else {
        fld.closest('.parent_div').find('.frm-er-msg').text('');
        return true;
    }
}

var validateField = () => {
    var check = 0;
        $(".fldrequired").each(function () {
            if ($(this).val().trim() == "") {
                check++;
                $(this).closest(".parent_div").next(".frm-er-msg").text("This field is required");
                $(this).addClass("frm-error");
            } else {
                $(this).closest(".parent_div").next(".frm-er-msg").text("");
                $(this).removeClass("frm-error");
            }
        });
    return check;
}

var formSubmit = (id, url, event_button, action) => {
    $("#"+id).on('submit', function (event) { alert('===');
        event.preventDefault();
        var postData = new FormData(this);
        postData.append('action', action);
        $('#'+event_button).text('Please wait...');
        $.ajax({
            url: url,
            type: "POST",
            data: postData,
            processData: false,
            contentType: false,
            success: function (data, textStatus, jqXHR) { alert(data);
                var response_data = JSON.parse(data);
                $('#'+event_button).text('Continue');
                if (response_data['status'] == '-1') {
                    $('#popupDiv').hide();
                    $('#popup_conf_msg').show();
                    $('#popup_conf_msg').find('.cnfrm-task').text(response_data['message']).show();
                    setTimeout(function () {
                        $('#popup_conf_msg').find('.cnfrm-task').text('');
                        $('#popup_conf_msg').hide();
                        $('#popupDiv').show();
                        $('.act_btn_ovrly').hide();
                    }, 2000);
                } else if (response_data['status'] == '1') {
                    $('#popupDiv').hide();
                    $('#popup_conf_msg').show();
                    $('#popup_conf_msg').find('.cnfrm-task').text(response_data['message']).show();
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                } else if (response_data['status'] == '0') {
                    $('#popupDiv').hide();
                    $('#popup_conf_msg').show();
                    $('#popup_conf_msg').find('.cnfrm-task').text(response_data['message']).show();
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                } else {
                    $('#popupDiv').hide();
                    $('#popup_conf_msg').show();
                    $('#popup_conf_msg').find('.cnfrm-task').text('Something went wrong').show();
                    setTimeout(function () {
                        window.location.reload();
                    }, 2000);
                }
            }
        });
        e.preventDefault();	//STOP default action
    });
    $("#frm").submit(); //SUBMIT FORM
}