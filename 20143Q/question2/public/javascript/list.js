// イベント
$(function(){
  loadJson();
  $("#more").click(function(){
    loadJson();
  });
});

// ページング処理
function loadJson() {
  var count = $("#demo").children().length;
  var lim = 5;
  var ofs;
  
  if(count == 0) {
    ofs = 0;
  } else {
    ofs = count;
  }
  
  $.ajax({
    dataType: "json",
    url: "public/data/name_list.json",
    success: function(data) {
      for(var i = count; i < count+lim; i++) {
        if(data[i] === undefined) {
          $("#more").hide();
          break;
        }
        $("#demo").append($('<p class="content-font" id="content">')
        	.text(data[i].id + "：" +data[i].name));
      }
    },
    error: function() {
      alert("データの読み込みに失敗しました");
    }
  });
}
