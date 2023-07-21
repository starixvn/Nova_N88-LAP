'use strict';
$(document).ready(function () {
    initCheckBox();

    $("input[type='checkbox']").change(function () {
        $(this).siblings("ul").find("input[type='checkbox']").prop("checked", this.checked);

        const checkAll = $(this).closest("ul").find(":checked").length > 0;

        $(this).parentsUntil("input[type=checkbox]").children("input.check-all[type='checkbox']").prop("checked", checkAll);
        $(this).parentsUntil("input[type=checkbox]").siblings("label").find("input").prop("disabled", !checkAll);
    });

    $("input.checkbox-input").change(function () {
        $(this).siblings("label").find("input").prop("disabled", !this.checked);
    });
});

const initCheckBox = function() {
    $("input.check-all[type='checkbox']").each(function () {
        $(this).prop("checked", () => $(this).siblings("ul").find("input[type='checkbox']:checked").length > 0);
    });

    $("input.checkbox-input").each(function () {
        $(this).siblings("label").find("input").prop("disabled", !this.checked);
    });
}
