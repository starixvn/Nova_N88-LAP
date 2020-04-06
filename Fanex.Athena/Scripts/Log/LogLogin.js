/* global NAP: false */

"use strict";

$(document).ready(function () {
	$('#table-loginlog').on('change', '.items-per-page', function () {
		var $this = $(this),
			pageSize = $this.val(),
			from = $('#From').val(),
			to = $('#To').val(),
			name = $('#Name').val();

		var url = NAP.resolveClientUrl('Log/LogUserLogin'+
			'?name=' + name +
			'&from=' + from +
			'&to=' + to +
			'&size=' + pageSize);

		window.location.replace(url);
	});
});