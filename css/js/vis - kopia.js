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


              // var geometry4 = new SpatialServer.Geometry({
              //     wkt: "POINT(124963 6160000)"
              // });

              var geometry5 = new OpenLayers.Geometry.Point(124963, 6160000);
              var geometry6 = new OpenLayers.Geometry.Point(123963, 6167000);
              var geometry7 = new OpenLayers.Geometry.Point(119963, 6120000);

              // var geometry2 = new SpatialServer.Geometry({
              //   wkt: "POLYGON((714571.4 6175977.2,714616.2 6175987.6,714619.4 6175974,714574.6 6175963.2,714571.4 6175977.2))"
              // });

              // var geometry2 = new OpenLayers.Geometry.Polygon([ geometry5, geometry6, geometry7]);
              // only seems to work with SpatialServer.Geometry

              // geometry2.contains(geometry5, function(result) {
              //   // The expected result is true
              //   console.log(result);
              // });

              // cbKort.mapObj.map.addLayer(geometry4);
              //

              // var featurething = new OpenLayers.Feature.Vector({
              //     name: "Thing",
              //     geometry: geometry4
              // });





              var vectorLayer = new OpenLayers.Layer.Vector("Test");
              //Todays test
              var feature2 = new OpenLayers.Feature.Vector(
               geometry5,
               {some:'data'});
               var feature3 = new OpenLayers.Feature.Vector(
                geometry6,
                {some:'data'});
                var feature4 = new OpenLayers.Feature.Vector(
                 geometry7,
                 {some:'data'});
              // vectorLayer.addFeatures([feature2,feature3,feature4]);
              //

              console.log('hello')

              // layerthin.addFeatures([vector2,vector3,vector4]);
              // cbKort.mapObj.map.addLayer(vectorLayer);


              cbKort.getSession().getDatasource("ds_mod_skola_pg_vy_oppen_forskola_pt").executeSMQL(
                  "select * from this",
                  function(resp) {
                    //   for (var i = 0; i < resp.length; i++) {
                    // window.console.log(resp.length);
                     // window.alert("test");
                     console.log(resp[0])
                     console.log(resp[0]['easting'],resp[0]['northing'])
                     // jq("#antal").val(parseInt(resp[0].ant));
                    //   window.console.log(TotalNo2);
                    // }
                    addAll(resp);
                    }
              );


              function addAll(respObj){
                var myFeatures=[];
                for (i=0; i<respObj.length; i++){


                  myFeatures.push(new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(respObj[i]['easting'],respObj[i]['northing'])));
                  if (i==respObj.length-1){
                     console.log(myFeatures);
                     vectorLayer.addFeatures(myFeatures);
                     cbKort.mapObj.map.addLayer(vectorLayer);
                     console.log('done')
                  }
                  // console.log(myFeatures);
                }
              }

              // var vecLyr = cbKort.mapObj.map.getLayersByName('Test')[0];
              // console.log( vecLyr)
              // console.log(cbKort.mapObj.map.getLayerIndex(vecLyr));
              // cbKort.mapObj.map.setLayerIndex(vecLyr,0);
              // console.log(cbKort.mapObj.map.getLayerIndex(vecLyr));
              // layerthin.refresh();
              // console.log(vecLyr.getVisibility());
              // cbKort.mapObj.map.render();



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
