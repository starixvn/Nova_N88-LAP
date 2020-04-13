'use strict';

define([
    'common/site',
    './recheckin',
    'lib/jquery.cookie',
    'lib/jquery.marquee',
    'components/selectlist',
    'lib/jquery.jclock',
    'vendor-materialize'],
    function (Site, Recheckin) {
        function initialize() {
            Site.initialize();
            initEvent();
            activeDefaultMenuItem();

            if ($('#HasRecheckIn').val() === '1') {
                Recheckin.init();
            }
        }

        // init clock
        $('#clock').jclock({
            utc: true,
            utcOffset: -4,
            format: '%H:%M:%S %b %d, %Y GMT'
        });

        function initEvent() {
            $('#languagesite').on('click', '.languageItem', function () {
                changeLanguage($(this));
            });

            $('.collapsible2').on('click.menuevent', '.menu-item.has-sub .collapsible-body a', function () {
                const $currentMenuItem = $(this);
                document.title = $('.active > .menu-title').text() + ' - ' + $currentMenuItem.text();

                $('#page-title').text($currentMenuItem.text());
            });

            $('.collapsible2').on('click.menuevent', '.menu-item:not(.has-sub) a', function () {
                const $currentMenuItem = $(this);
                document.title = $currentMenuItem.text();

                $('#page-title').text($currentMenuItem.text());
            });

            $(window).on('blur', function () {
                $('.dropdown-button', '.languages-block').dropdown('close');
                $('#suggestionDropdown').hide();
            });
        }

        function changeLanguage($target) {
            const lang = $target.attr('langkey');
            const mainFrame = top.frames['main'];
            if (mainFrame && mainFrame.Site && mainFrame.Site.blockUI) {
                mainFrame.Site.blockUI();
            }

            $.ajax({
                url: Site.resolveClientUrl('Header/ChangeLanguage?languagesite=') + lang,
                async: false,
                type: 'GET',
                cache: false,
                success: function (result) {
                    if (result === '1') {
                        if ($.cookie('isClosedNotification') !== '1') {
                            $.cookie('isFirstLoad', '1', {
                                path: '/'
                            });
                        }
                        top.location.reload();
                    }
                }
            });
        }

        function activeDefaultMenuItem() {
            const $menuItem = $('#left-menu .menu-item a').filter(function () {
                const url = $(this).attr('href');
                return url && url.length > 0;
            });

            if ($menuItem && $menuItem.length > 0) {
                $('.collapsible2').collapsibleMenu('activeMenuItem', $($menuItem[0]));
                $($menuItem[0]).trigger('click.menuevent');

                setTimeout(function () {
                    const $mainFrame = $('#mainFrame');

                    $mainFrame.attr('src', $($menuItem[0]).attr('href'));
                    $mainFrame.attr('data-src', $($menuItem[0]).attr('href'));
                }, 100);
            }
        }

        return {
            initialize: initialize
        };
    });