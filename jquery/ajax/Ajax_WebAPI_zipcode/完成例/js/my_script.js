
$(function(){
    $("#search_button").click(function () {
        // リクエストパラメータ作成
        var param = 
        {
            zipcode: $('#zip_code').val(),
            limit:1
        }

      $.ajax({
        type: "GET",
        cache: false,
        data: param,
        url: "https://zipcloud.ibsnet.co.jp/api/search",
        dataType: "jsonp",
        success: function (data) {
            if (data.status == 200) {
                var result_txt = '';
                if(data.results==null){
                    result_txt += '<div>該当する住所がありません</div>';
                }
                else {
                    result_txt += '<div>住所：'+data.results[0].address1+data.results[0].address2+data.results[0].address3+'</div>'+
                    '<div>カナ:'+data.results[0].kana1+data.results[0].kana2+data.results[0].kana3+'</div></br>';
      
                }
                $('#search_result').html(result_txt);
            } 
            else {
                $('#search_result').html(data.message); // エラー表示
            }
          }
      });
  });

});
