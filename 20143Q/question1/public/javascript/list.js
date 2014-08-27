$(function() {
	$.getJSON("public/data/name_list.json", function(data) {
		for (var i=0; i < data.length; i++) {
			$("#demo").append($('<p class="content-font">').text(data[i].id + "：" +data[i].name));
		}
	}); 
});