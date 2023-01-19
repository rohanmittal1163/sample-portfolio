 $(document).ready(function(){
        $('button').click(function(){
          document.getElementById('cal').value+=$(this).html();
          document.getElementById('cal').style.cssText="font-size: 40px;padding:10px;";
        })
        $("input[value='AC']").click(function(){
          document.getElementById('cal').value=" ";
        })
        $("input[value='=']").click(function(){
document.getElementById('cal').value=eval(document.getElementById('cal').value);
        })
      })