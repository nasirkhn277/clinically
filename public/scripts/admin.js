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
         var queryString = {};
         $('#frm').serializeArray().map(function(item) {
            queryString[item.name] = item.value;
        });

        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(queryString)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if(data.status == true){
                 window.location.href = '/';
            } else {
                return false;
            }
        });
    });

    $('.parent_wrapper').on('click', '#login', () => {
        var queryString = {};
        $('#frm').serializeArray().map(function(item) {
           queryString[item.name] = item.value;
       });
       
       fetch('/login', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(queryString)
       }).then((res) => {
           return res.json();
       }).then((data) => {
           if(data.status == true){
                window.location.href = '/clinics';
           } else {
               return false;
           }
       });
   });

   $('.parent_wrapper').on('click', '#addClinic', () => {
    var check = validateField();
    if(check > 0){
        return false;
    }
    $('#frm').on('submit', function(event) {
        // prevent the default form submission behavior
        event.preventDefault();
        // create a new FormData object and populate it with the form data
        var formData = new FormData(this);
       fetch('/clinics/addclinic', {
            method: 'POST',
            body: formData,
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if(data.status == true){
                window.location.href = '/clinics';
           } else {
               return false;
           }
        });
      });
      $('#frm').submit();
    });

    $(".cancel_page").click(function(){
        if(confirm("Are you sure you want to delete this?")){
          window.location.href = '/clinics';
        }
        else{
            return false;
        }
    });

    $('.availradiobtn').on('change', function() {
        var selected = $('input[name="day_type"]:checked').val();
        if(selected == 0){
            $('#customised_schedule').addClass('hide');
            $('input[name="day[]"]').removeAttr('checked');
            $('input[name="from[]"]').val('');
            $('input[name="till[]"]').val('');
        } else {
            $('#customised_schedule').removeClass('hide');
            $('input[name="day[]"]').attr('checked','checked');
        }
     });

     $('#same_for_all').on('change', function() {
        var selected = $('input[name="same_for_all"]:checked').val();
        var from = $('input[name="from[]"]').val();
        var till = $('input[name="till[]"]').val();
        if(selected == 1){
            $('input[name="day[]"]:checked').each(function() {
              $(this).closest('.ccltime').find('.open_time').val(from);
              $(this).closest('.ccltime').find('.close_time').val(till);
             });             
        } else {
            $('.open_time').val('');
            $('.close_time').val('');
        }
     });
})