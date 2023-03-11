$(function(){
    $('.validate_mobile').on('change', () => {
        var count = 0;
        $('.validate_mobile').each(function () {
            var fldcurr = $(this);
            let valid = validateMobile(fldcurr);
            if(!valid){
                count++;
            }
        });
        if(count > 0){
            return false;
        }
    });

    $('.validate_email').on('change', () => {
        var count = 0;
        $('.validate_email').each(function () {
            var fldcurr = $(this);
            let valid = validateEmail(fldcurr);
            if(!valid){
                count++;
            }
        });
        if(count > 0){
            return false;
        }
    });

    $('.parent_wrapper').on('click', '#save', () => {
        var currfld = $(this);
        var validity = validateField();
        if(validity > 0){
            return false;
        }
        formSubmit('frm', '/signup', currfld, 'save_admin');
    });
})