
$(document).ready(function() {

    //custome-dropdown
    $(".custom-dropdown").each(function() { 
        var _this = $(this);
        var jQuerypl = _this.attr("data-placeholder");
        _this.select2({
            dropdownParent: _this.closest("div"),
            placeholder: jQuerypl, 
        });
    })
    .change(function () {
        var current_value = jQuery(this).val();
        setTimeout(function () {
            window.location.href = current_value;
        }, 500);
    });

});


