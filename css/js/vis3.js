var vis = {
      // dialog: null,
      // dtb: null,
      show: function(no) {
          // this.dialog = new Dialog({
          //     title: "Hjälpverktyg2!",
          //     id: "myDialog"
          // });
          // var no = '';
          // var contentDiv = jq("<div></div>");
          // contentDiv.load("/modules/conzoom/html/helpfunction.html", SpatialServer.Utils.bind(function() {
            //  var html = contentDiv.find(".main").children();//add 'var' later
            if (no == 1) {
            // load in the lathund HTML skript
            jq('body').append('<div id="testSida2"></div>'); //eslint-disable-line
            jq('#testSida2').addClass('buttonContainer'); //eslint-disable-line
            jq('#testSida2').load( "/modules/vis/html/vis.html",function(){

              // jq('#testSida2').resizable();
              jq('#testSida2').draggable();


              var geometry4 = new SpatialServer.Geometry({
                  wkt: "POINT(714623 6175981)"
              });
              var geometry2 = new SpatialServer.Geometry({
                wkt: "POLYGON((714571.4 6175977.2,714616.2 6175987.6,714619.4 6175974,714574.6 6175963.2,714571.4 6175977.2))"
              });
              geometry2.contains(geometry4, function(result) {
                // The expected result is true
                console.log(result);
              });
              // cbKort.mapObj.map.addLayer(geometry4);

              var featurething = new OpenLayers.Feature({
                  name: "Thing",
                  geometry: geometry2
              });
              // cbKort.mapObj.map.addLayer(featurething);


              jq('.timetype input').click(function(){
                value=jq('input[name=thing]:checked').val();
                if (value=='1'){
                  jq('.enkelt').addClass('hidden');
                  jq('.avancerat').removeClass('hidden');
                }
                else{
                  jq('.enkelt').removeClass('hidden');
                  jq('.avancerat').addClass('hidden');
                }
              });

              jq('.centering').click(function(){
                if (jq('.customoption').hasClass('hidden')){
                  jq('.customoption').removeClass('hidden');

                }
                else{
                  jq('.customoption').addClass('hidden');
                }
              });

              jq('.customsetting').click(function(){
                jq('.options').addClass('hidden');
                console.log('hello')
                var textval=jq(this).val();
                console.log(textval);
                jq('.'+textval).removeClass('hidden');
                // console.log(textval);

              });
              //stänger fönster
              jq('#closeviswindow').click(function(){
                jq('#testSida2').remove();
                });



              // om man vill lägga till helskärmsfunktion

              // jq('#fullsizewindow').click(function(){
              //   if(jq('#testSida').hasClass('fullscreen')){
              //       jq('#testSida').removeClass('fullscreen');
              //   }
              //   else{
              //     jq('#testSida').addClass('fullscreen');
              //   }
              //     });


            });
            // jq('.buttonContainer').append('<hr />'); //eslint-disable-line
            // jq('.buttonContainer').append('<button type="button" class="btn btn-primary closeButton">TEST</div>'); //eslint-disable-line
            // jq('.buttonContainer').append('<input type="checkbox" class = "newsremover" value="" id="checkbox" /> <label for="checkbox" class = "newsremover">Visa inte igen</label> </div>'); //eslint-disable-line


            // jq('#checkbox.newsremover').append('style="font-size:30px">')
            // jq('#testSida').html('<iframe src="google.com" frameborder="0" scrolling="no" id="myFrame"></iframe>');
            //  window.console.log(html);
            // this.dialog.addContentHTML(html);
            //this.dialog.addButtonsHTML(buttons);
            // this.dialog.showDialog();


          //  }, this));
      }
    }

  };
