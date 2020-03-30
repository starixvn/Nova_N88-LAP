/* jshint freeze: false */

"use strict";

var NAP = (function ($) {
    return {
        NAPRoot: null,
        dialogMsg: null,
        dialogPopup: null,
        headlineMsgBox: null,
        loadingBox: null,
        alertCallback: null,
        confirmCallback: null,

        initCoreValues: function () {
            NAP.NAPRoot = $('#RootPath').val();
            NAP.dialogPopup = $('<div id="dialog-popup"></div>').appendTo('body');
        },
        resolveClientUrl: function (relativeUrl) {
            return NAP.NAPRoot + relativeUrl;
        },        
        // Handles common error when making ajax request
        handleAjaxError: function (xhr) {
            if (xhr.status === 403) {
                NAP.headlineMsgBox.showErr('Unauthorized request rejected!', { sticky: true });
            } else if (xhr.status === 404) {
                NAP.headlineMsgBox.showErr('Resources not found!', { sticky: true });
            } else {
                NAP.headlineMsgBox.showErr('An unexpected error has occurred!', { sticky: true });
            }
        },              
        popup: function (title, html) {
            NAP.dialogPopup.html(html).dialog({
                width: 'auto',
                modal: true,
                position: ['center', 160]
            });

            NAP.dialogPopup.dialog('option', { title: title });
        },
        closePopup: function () {
            NAP.dialogPopup.dialog('close');
        },
        redirect: function (url, msec) {
            setTimeout('NAP.navigateTo("' + url + '")', msec);
        },
        navigateTo: function (url) {
            window.location.replace(NAP.resolveClientUrl(url));
        },
        htmlEncode: function (value) {
            return $('<div/>').text(value).html();
        },
        htmlDecode: function (value) {
            return $('<div/>').html(value).text();
        },
        showSuccessMsg: function (msg, url, msec) {
            var msgWrp = $('.validation-summary-valid');

            msgWrp.addClass('success').find('li:first').html(NAP.htmlDecode(msg)).show();

            NAP.showSuccessMsgCountDown(url, msec / 1000);
        },
        showSuccessMsgCountDown: function (url, msec) {
            if (msec-- > 0) {
                setTimeout('NAP.showSuccessMsgCountDown("' + url + '", ' + msec + ')', 1000);
                $('.validation-summary-valid .msec').html(msec);
            } else {
                window.location.replace(NAP.resolveClientUrl(url));
            }
        }
    };
}(jQuery));

$(document).ready(function () {
    NAP.initCoreValues();    

    NAP.headlineMsgBox = $.msgbox({
        message: '',
        //containerId: 'msg-bar',
        type: 'err',
        modal: false,
        position: ['top:130', 'center'],
        theme: '',
        zIndex: 9999,
        useAnimation: false
    });
});

// -- Utilities -- //

// String Format
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] !== 'undefined' ? args[number] : match;
    });
};

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};