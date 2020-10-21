
jq(document).ready(function(){
  jq('#lathund1').click(function(){
    jq('iframe').attr('src','lathund.html');
  });

  jq('#lathund2').click(function(){
    jq('iframe').attr('src','installningar.html');
  });
  jq('#lathund3').click(function(){
    jq('iframe').attr('src','exportdata.html');
  });
});
