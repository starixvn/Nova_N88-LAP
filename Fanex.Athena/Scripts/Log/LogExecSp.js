/* global NAP: false */

"use strict";

var LogExecSp = (function ($) {

	return {
		grid: null,
		buttonImage: null,
		form: null
	};

} (jQuery));

$(document).ready(function () {
	LogExecSp.grid = $('.table');
	LogExecSp.buttonImage = $('#imagePath').val();
	LogExecSp.form = $('form:first');

	$('.loginsert').click(function () {
		var logId = $(this).attr('logid');

		$.ajax({
			url: NAP.resolveClientUrl("Log/GetLogInsertDetail?id=" + logId),
			type: 'POST',
			contentType: 'application/json',
			dataType: 'html',
			cache: false,
			beforeSend: function () {
				//NAP.loadingBox.show();
			},
			complete: function () {
				//NAP.loadingBox.close();
			},
			success: function (result) {
				if (result.length > 0) {
					NAP.popup("Log detail", result);
				}
			},
			error: function (xhr, status, err) {
				NAP.handleAjaxError(xhr, status, err);
			}
		});
	});

	// shows loading on change page
	LogExecSp.form.submit(function () {
		//NAP.loadingBox.show();
	});

	// changes items/page
	LogExecSp.grid.on('change', '.items-per-page', function () {
		var $this = $(this),
			pageSize = $this.val(),
			username = $('#Username').val(),
			from = $('#From').val(),
			to = $('#To').val(),
			name = $('#Name').val(),
            filter = $('#filterBy').val();

		var url = NAP.resolveClientUrl('Log/LogExecSp'+
			'?name=' + name +
			'&username=' + username +
			'&from=' + from +
			'&to=' + to +
            '&filterBy=' + filter +
            '&page=' + 1 +
			'&size=' + pageSize);

		//NAP.loadingBox.show();
		window.location.replace(url);
	});
});