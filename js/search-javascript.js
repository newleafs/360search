$('#search').bind('keydown',function(){
		var seaText = $('#search').val();
		$.ajax({
			type:"get",
			url:'https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word,obdata&word='+seaText,
			dataType: "jsonp",
			jsonp: "callback",
			/*jsonpCallback:"newleaf",*/
			success:function(jsons){
				var result = jsons.result;
				var html = '';
				for(i=0;i<result.length;i++){
					html +='<li>'+ result[i].word +'</li>';
				}
				
				$('.search-result').html(html);
				$('#search').bind('keydown',function(ev){
					var oEvent = ev || window.event;
					oEvent.preventDefault(oEvent);
				if (oEvent.keyCode == 13){
					location.href ='https://www.haosou.com/s?q='+seaText;
				}
				$('#list').show().css({
					top:$('.box').offset().top+$('.box').height(),
					left:$('.box').offset().left,
					position:'absolute'
				});

			});
		}
	});

	$(document).delegate('li','click',function(){
			var searchText = $(this).text();
			location.href ='https://www.haosou.com/s?q='+searchText;
	});
 });
