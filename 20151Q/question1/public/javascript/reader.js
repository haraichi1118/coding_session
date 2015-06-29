$(function() {
	// 商品の読み込み
	$.getJSON("public/data/itemList.json", function(data) {
		for (var i=0; i < data.length; i++) {
			$("#itemList").append($('<div id="item">'));
			$("#item").append('<div>').append(
				$('<img>').attr({
					src: data[i].img,
					title: "item_img",
					alt: data[i].name,
					width: "100",
					height: "140"
				})
			);
			$("#item").append(
				$("<div>").attr("class", "content-font")
					.text(data[i].name + " ￥" +data[i].price)
			);
			$("#item").append('<div>').append($("<input>", {
					type: "button",
					value: "購入",
					class: "btn-main btn-main:hover",
					id: "addCart",
					itemid: data[i].id,
					itemname: data[i].name
			}));
		}
	});
});