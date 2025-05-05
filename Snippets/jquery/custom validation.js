var validationOptions = {
    rules: {
        "FirstAmount": {
            max: maximumDebitAmount
        },
        "RegularAmount": {
            max: maximumDebitAmount
        },
        EndDate: { isAfter: "StartDate" }
    }
}

$(function () {
$.validator.addMethod("isAfter",
    function (value, element, params) {
        var startDate = moment($("#" + params).datepicker("getDate"));
        if (!startDate.isValid()) {
            return true;
        }

        var dateParts = value.split("/");
        var endDate = moment(new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]));

        return endDate.isValid() ? endDate.isAfter(startDate) : true;

    }, 'Must be after {0}.');
});

var inputs = $('#notification-dialog').find('input.form-control, .dropdown-parent input');
$.each(inputs, (function(index, value) {
    $(value).addClass('ignore');
    $(value).blur(function () {
        $(this).removeClass('ignore');
        $form.find('form').validate(validationOptions);
        debugger;
        $(this).valid();
    });
}));