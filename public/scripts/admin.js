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
       }).then((data) => { alert(data.status);
           if(data.status == true){
                window.location.href = '/clinics';
           } else {

               return false;
           }
       });
   });
})