/*global _page, resolveClientUrl */

define(['jquery', 'crypto-js'], function ($, CryptoJS) {
    'use strict';
    function isIE() { return (/msie/i).test(navigator.userAgent) && !/opera/i.test(navigator.userAgent); }
    window.IE = isIE();

    const LanguageMessages = {
        errUserName: 'Please input username and password',
        errValidCode: 'You must input validation code.'
    };

    function getValidateImage() {
        const url = $('#captchaUrl').val();
        $('#imgCode').attr('src', url);

        setTimeout(getValidateImage, 120000);
    }

    function checkInputValid() {
        const $username = $('#userName');
        const $password = $('#passWord');
        const $captcha = $('#captcha');

        if ($username.val() && $password.val() && $captcha.val()) {
            return true;
        }

        const $errorMessage = $('#errmsg');
        $errorMessage.html(LanguageMessages.errUserName);

        if ($username.val() === '') {
            $username.focus();
        }
        else if ($password.val() === '') {
            $password.focus();
        }
        else {
            $errorMessage.html(LanguageMessages.errValidCode);
            $('#captcha').focus();
        }

        $errorMessage.css('opacity', 1);
        return false;
    }

    function InitLogin() {
        // Do not allow wrapping sign-in page
        if (window.parent !== window) { // jshint ignore:line
            window.parent.location = location.href;
        }

        getValidateImage();
        const pageResult = window._page;

        if (typeof pageResult.errCode !== 'undefined' && pageResult.errCode !== 0) {
            $('#errmsg').html(pageResult.errMsg).css('opacity', 1);
            if (pageResult.errCode === 101) {
                $('#txtCaptcha').focus().select();
            }
        }

        document.fLogin.onsubmit = function () {
            const $username = $('#userName');
            $username.val($.trim($username.val()));
            if (!checkInputValid()) {
                return false;
            }

            $('#btnLogin').prop('disabled', true);

            const $loginToken = $('#LogInToken');
            const $loginTokenTemp = $('#LogInTokenTemp');

            $loginToken.val($loginTokenTemp.val());
            const $password = $('#passWord');
            const hashPassword = CryptoJS.SHA1($password.val()).toString(CryptoJS.enc.Hex).toUpperCase();
            const encryptedPass = CryptoJS.SHA1(hashPassword + $loginToken.val() + userSalt).toString(CryptoJS.enc.Hex).toUpperCase();
            $password.val(encryptedPass);
            return true;
        };

        $('#captcha-img').on('click', function () {
            getValidateImage();
        });
    }

    return {
        InitLogin: InitLogin
    };
});