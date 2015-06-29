// カートに追加処理
$(document).on("click", "#addCart", function() {
	// カート追加時の商品情報を取得する
	// 商品ID
	var itemId = $(this).attr("itemid");
	// 商品名
	var itemName = $(this).attr("itemname");

	// すでに追加されているか判断
	if ($("div#item-" + itemId)[0]) {

	} else {
		// カートに追加
		$("div#cart").append($("<div>")
			.attr("class", "cartitem-" + itemId)
			.append($("<div>").attr("class", "cartitemname").text(itemName))
			.append($("<button>").attr("class", "delete btn-main").attr("id", itemId).text("削除"))
			);
	}
});

// カートの中身を削除
$(document).on("click", "button.delete", function() {
	$("div.cartitem-" + $(this).attr("id")).remove();
});
