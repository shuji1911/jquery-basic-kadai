$(function() {
     // id属性要素がクリックされたら
      $('#target').on('load', function(){
       // id属性がtargetの要素にclass属性'h1'を追加
        $('#target').addClass('h1');
      });
    });
    
    