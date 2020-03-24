/* global NAP: false */

"use strict";

var AssignGroupPermission = (function ($) {
    return {
        updateForm: null,
        grid: null,
        updateParent: function (type) {
            var $this = $(this),
                pid = $this.attr('pid');

            if (pid && pid.length > 0) {
                var thisIsChecked = $this.is(':checked'),
                    parent = $('#func' + type + pid);

                if (thisIsChecked && !parent.is(':checked')) {
                    parent.prop('checked', true);
                }

                if (!thisIsChecked) {
                    var siblings = $('[name=func' + type + '][pid=' + parent.val() + ']:checked');

                    if (siblings.length === 0) {
                        parent.prop('checked', false);

                        if (type === 'Read') {
                            parent.parents('tr').find('[name=funcHost]').prop('checked', false);
                        }
                    }
                }

                AssignGroupPermission.updateParent.call(parent.get(0), type);
            }
        },
        // disabled parent if has child is disabled
        disabledParent: function () {
            AssignGroupPermission.grid.find('tr').each(function () {
                var $this = $(this),
                    chkHost = $this.find('[name=funcHost][type=hidden]'),
                    chkRead = $this.find('[name=funcRead][type=hidden]');

                var parent;

                if (chkRead !== undefined) {
                    parent = $('#funcRead' + chkRead.attr('pid'));
                    if (parent.is(':checked') && parent.attr('pdisabled') === undefined) {
                        parent.attr('pdisabled', '1');
                        parent.after('<input type="checkbox" checked="checked" disabled="disabled" class="checkbox" />');
                        parent.hide();
                    }
                }

                if (chkHost !== undefined) {
                    parent = $('#funcHost' + chkHost.attr('pid'));
                    if (parent.is(':checked') && parent.attr('pdisabled') === undefined) {
                        parent.attr('pdisabled', '1');
                        parent.after('<input type="checkbox" checked="checked" disabled="disabled" class="checkbox" />');
                        parent.hide();
                    }
                }
            });
        },
        hasHouseWLByProductsPermission: function (table, currentElement) {
            var houseWLByProductsFuncId = table
                .find("tr:contains('House Win Loss By Products - Product Permission') input").val();

            if (currentElement.attr('pid') === houseWLByProductsFuncId || currentElement.val() === houseWLByProductsFuncId) {
                var hasPermissionIsHouseWLByProducts = table
                    .find('[type=checkbox][pid=' + houseWLByProductsFuncId + '][value!=' + currentElement.val() + ']')
                    .filter(':checked').length > 0;

                if (currentElement.is(':checked') && (hasPermissionIsHouseWLByProducts || currentElement.val() === houseWLByProductsFuncId)) {
                    NAP.headlineMsgBox.showErr('You must select ONLY ONE function House Win Loss by Products - Product Permission');
                    currentElement.prop('checked', false);
                    return true;
                }
            }
            return false;
        },
        hasCN88WLByProductsPermission: function (table, currentElement) {
            var cn88WLByProductsFuncId = table
                .find("tr:contains('CN88 Win Loss By Products - Product Permission') input").val();

            if (currentElement.attr('pid') === cn88WLByProductsFuncId || currentElement.val() === cn88WLByProductsFuncId) {
                var hasPermissionIsCN88WLByProducts = table
                    .find('[type=checkbox][pid=' + cn88WLByProductsFuncId + '][value!=' + currentElement.val() + ']')
                    .filter(':checked').length > 0;

                if (currentElement.is(':checked') && (hasPermissionIsCN88WLByProducts || currentElement.val() === cn88WLByProductsFuncId)) {
                    NAP.headlineMsgBox.showErr('You must select ONLY ONE function CN88 Win Loss by Products - Product Permission');
                    currentElement.prop('checked', false);
                    return true;
                }
            }
            return false;
        }
    };
}(jQuery));

$(document).ready(function () {
    AssignGroupPermission.grid = $('.table:first');
    AssignGroupPermission.updateForm = $('form:last');
    AssignGroupPermission.disabledParent();

    AssignGroupPermission.updateForm.submit(function () {
        AssignGroupPermission.grid.find('tr').each(function () {
            var $this = $(this),
                chkHost = $this.find('[name=funcHost]'),
                chkRead = $this.find('[name=funcRead]');

            if (chkHost.is(':checked')) {
                chkRead.removeAttr('name');
            } else {
                chkHost.removeAttr('name');
            }
        });

        NAP.loadingBox.show();
    });

    AssignGroupPermission.grid.find('[type=checkbox]').change(function () {
        var $this = $(this),
            thisIsChecked = $this.is(':checked'),
            row = $this.parents('tr'),
            table = row.parents('table');

        if (AssignGroupPermission.hasHouseWLByProductsPermission(table, $this)) {
            return;
        }

        if (AssignGroupPermission.hasCN88WLByProductsPermission(table, $this)) {
            return;
        }

        if ($this.attr('name') === 'funcHost') {
            // host checked -> read checked
            if (thisIsChecked) {
                AssignGroupPermission.updateParent.call(row.find('[name=funcRead]').prop('checked', true).get(0), 'Read');
                table.find('[name=funcRead][pid=' + $this.val() + ']').prop('checked', true).change();
            }

            // parent changed -> children changed
            table.find('[name=funcHost][pid=' + $this.val() + ']').prop('checked', thisIsChecked).change();

            // child checked -> parent checked
            // last child unchecked -> parent unchecked
            AssignGroupPermission.updateParent.call($this.get(0), 'Host');
        } else { // funcRead
            // read unchecked -> host unchecked
            if (!thisIsChecked) {
                AssignGroupPermission.updateParent.call(row.find('[name=funcHost]').prop('checked', false).get(0), 'Host');
            }

            // parent changed -> children changed
            table.find('[name=funcRead][pid=' + $this.val() + ']').prop('checked', thisIsChecked).change();

            // child checked -> parent checked
            // last child unchecked -> parent unchecked
            AssignGroupPermission.updateParent.call($this.get(0), 'Read');
        }
    });

    var hasAssignFunction = $('#HasAssignFunction').val();
    if (!hasAssignFunction) {
        $('[type=checkbox]').attr('disabled', 'disabled');
        $('#btnSaveAssign').hide();
    }
});