/* global NAP: false */

"use strict";

var ManageGroup = (function () {
    return {
        grid: null,
        getSingleResource: function (enghlishName) {
            if (enghlishName == null) {
                return enghlishName;
            }

            const keyName = '_language_' + $('#PageLanguage').val().replace('-', '_');

            let resources = window[keyName];
            if (!resources) {
                resources = window._language_en_US; // jshint ignore:line
            }

            const mapResource = function (key) {
                let item = resources[key];
                if (item === undefined) {
                    item = window._language_en_US[key]; // jshint ignore:line
                    return item !== undefined ? item : key;
                } else {
                    return item;
                }
            };
            if (enghlishName.indexOf('@') > -1) {
                const keys = enghlishName.match(/\@{1}\[{1}[a-zA-Z\d\_]+\]{1}/g);
                if (keys != null) {
                    let temp = enghlishName;
                    for (var i = 0; i < keys.length; i++) {
                        var realKey = keys[i].replace('@[', '').replace(']', '');
                        temp = temp.replace(keys[i], mapResource(realKey));
                    }
                    return temp;
                }
                return mapResource(enghlishName);
            }
            else {
                return mapResource(enghlishName);
            }
        }
    };
}(jQuery));

$(document).ready(function () {
    ManageGroup.grid = $('.table');

    // #region tooltips
    $('.tip').tipsy({ gravity: 'se' });
    $('#headline h1 .lnk').tipsy({ gravity: 'w' });
    $('.table input[type=checkbox][gid]').tipsy({ gravity: 's' });
    $('.table .lnk-group-info').tipsy({ gravity: 'w' });
    $('.table .num-of-user').tipsy({ gravity: 'w' });
    // #endregion

    // #region view details
    ManageGroup.grid.on('click', '.lnk-group-info', function () {
        var $this = $(this),
            groupId = $this.attr('gid'),
            groupName = $this.text();

        $.ajax({
            url: NAP.resolveClientUrl("Group/GroupInfo/?id=" + groupId),
            type: 'GET',
            dataType: 'html',
            cache: false,
            success: function (result) {
                if (result.length > 0) {
                    NAP.popup("Details of '" + groupName + "'", result);
                }
            },
            error: function (xhr, status, err) {
                NAP.handleAjaxError(xhr, status, err);
            }
        });
    });
    // #endregion

    // #region activate/deactivate functions
    ManageGroup.grid.on('mousedown', 'input[type=checkbox][gid]', function () {
        var $this = $(this),
            groupName = $this.attr('gname'),
            active = !$this.is(':checked'),
            action = active ? 'activate' : 'deactivate',
            msgTemplate = ManageGroup.getSingleResource('ActiveGroupConfirm'),
            msg = msgTemplate.replace('{0}', ManageGroup.getSingleResource(action)).replace('{1}', groupName);

        var isConfirm = confirm(msg);

        if (isConfirm) {
            var groupId = $this.attr('gid');

            $this.prop('checked', active);

            $.ajax({
                url: NAP.resolveClientUrl("Group/Activate" + "?id=" + groupId + "&isActive=" + active),
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                cache: false,
                //beforeSend: function () {
                //	NAP.loadingBox.show();
                //},
                //complete: function () {
                //	NAP.loadingBox.close();
                //},
                success: function (response) {
                    $('#resultMessage').toggleClass('field-validation-success', response.IsSuccessful)
                        .toggleClass('field-validation-error', !response.IsSuccessful)
                        .text(response.Message);

                    $('.response-area').show()
                        .animate({ "opacity": "hidden" }, 10000, function () { $(this).fadeOut(1000); });

                    if (active) {
                        $this.attr('original-title', $this.attr('original-title').replace('Activate', 'Deactivate'));
                    } else {
                        $this.attr('original-title', $this.attr('original-title').replace('Deactivate', 'Activate'));
                    }
                },
                error: function (xhr, status, err) {
                    NAP.handleAjaxError(xhr, status, err);
                }
            });
        }
    });
    // #endregion

    ManageGroup.grid.on('click', '.btn-action:not(.disabled)', function (e) {
        var $this = $(this),
            parent = $this.parent(),
            dropdown = parent.find('.dropdown');

        if (parent.hasClass('active')) {
            parent.removeClass('active');
            dropdown.hide();
        } else {
            ManageGroup.grid.find('.active').removeClass('active').find('.dropdown').hide();
            dropdown.show();
            parent.addClass('active');
        }

        e.stopPropagation();
    });

    $('body, header, #headline, #body').on('click', function () {
        ManageGroup.grid.find('.col-action.active').removeClass('active').find('.dropdown').hide();
    });
    // #endregion
});