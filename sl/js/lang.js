/**
 * This will change langugae for this session
 */
$(function(){
	$("select#langChange").val(Html5App['lang']);
	$('select#langChange').on('change', function() {
		var newLang = $(this).val();
		window.location.href = 'http://oai.sidih.si/' + newLang + '/welcome.htm';
	});
});