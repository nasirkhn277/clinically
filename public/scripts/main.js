$(document).ready(function () {

    $(".showAction, .drop-actns").live("mouseover", function () {
        $(this).closest(".tbl-actn").find(".drop-actns").show();
    });

    $(".showAction, .drop-actns").live("mouseleave", function () {
        $(this).closest(".tbl-actn").find(".drop-actns").hide();
    });
});