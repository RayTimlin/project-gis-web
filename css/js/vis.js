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
            // jq('head').append('<script src="/modules/vis/js/plotly-latest.min.js"></script>');
              // jq('#testSida2').resizable();
            jq('#testSida2').draggable();

                   // var data = [
                   //   {
                   //     x: ['a', 'b', 'c'],
                   //     y: [20, 14, 23],
                   //     type: 'bar'
                   //   }
                   // ];
                   //
                   // Plotly.newPlot('tester', data);


              // setTimeout(function () {
              //   var data = [
              //     {
              //       x: ['a', 'b', 'c'],
              //       y: [20, 14, 23],
              //       type: 'bar'
              //     }
              //   ];
              //
              //   Plotly.newPlot('tester', data);
              //
              // }, 5000);

              // jq.getScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js", function() {
              //    // console.log("Script loaded but not necessarily executed.");
              //    setTimeout(function () {
              //      new Chart(document.getElementById("bar-chart"), {
              //          type: 'bar',
              //          data: {
              //            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
              //            datasets: [
              //              {
              //                label: "Population (millions)",
              //                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              //                data: [2478,5267,734,784,433]
              //              }
              //            ]
              //          },
              //          options: {
              //            responsive: false,
              //            legend: { display: false },
              //            title: {
              //              display: true,
              //              text: 'Predicted world population (millions) in 2050'
              //            }
              //          }
              //      });
              //
              //    }, 1000);
              //
              // });
              // jq.ajax({
              //   url:"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js",
              //   success: function(){
              //
              //         new Chart(document.getElementById("bar-chart"), {
              //             type: 'bar',
              //             data: {
              //               labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
              //               datasets: [
              //                 {
              //                   label: "Population (millions)",
              //                   backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              //                   data: [2478,5267,734,784,433]
              //                 }
              //               ]
              //             },
              //             options: {
              //               responsive: false,
              //               legend: { display: false },
              //               title: {
              //                 display: true,
              //                 text: 'Predicted world population (millions) in 2050'
              //               }
              //             }
              //         });
              //     }
              //   });

              var dtb = new Gui.Draw.DrawToolBox({
                  id: "myArea",
                  domId: "myArea",
                  singleFeatureMode: true,
                  controlNameList: ["drawFeaturePolygon","drawFeatureRegularPolygon","drawFeatureCircle", "deleteFeatures"]
              });
              // // HOW TO ADD POINTS TO MAP
              // var geometry5 = new OpenLayers.Geometry.Point(124963, 6160000);
              // var vectorLayer = new OpenLayers.Layer.Vector("Test");
              // var feature2 = new OpenLayers.Feature.Vector(
              //  geometry5,
              //  {some:'data'});
              //
              // vectorLayer.addFeatures([feature2]);
              // cbKort.mapObj.map.addLayer(vectorLayer);




              // GETTING DATA WITH QUERY
              function start(){
                cbKort.getSession().getDatasource("ds_gk_pg_olyckor_p").executeSMQL(
                    "select min(year) as minY,max(year) as maxY from this",
                    function(resp) {
                       // console.log(resp)

                       jq('.fromdate').val(resp[0]['miny'].toString()+'-01-01');
                       jq('.todate').val(resp[0]['maxy'].toString()+'-12-31');

                      });

                      cbKort.getSession().getDatasource("ds_gk_pg_antura_pt").executeSMQL(
                          "select fas from this group by fas",
                          function(resp) {
                             console.log(resp)
                             // addAll(resp)
                             // console.log(resp[0])
                             // var coords=resp[0]['shape_wkt']['wkt'].replace('(','').replace(')','').replace('((','').replace('))','').split(' ');
                             // console.log(coords)
                            });
                      // cbKort.getSession().getDatasource("ds_gk_pg_olyckor_p").executeSMQL(
                      //     "select olyckstyp from this group by olyckstyp",
                      //     function(resp) {
                      //        console.log(resp)
                      //       });
              }
              start();



              function addAll(respObj,name,color){
                var myFeatures=[];
                for (i=0; i<respObj.length; i++){
                  var coords=respObj[i]['shape_wkt']['wkt'].replace('((','').replace('))','').replace('(','').replace(')','').split(' ');

                  myFeatures.push(new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[1],coords[2]),{name:'name'}));

                  if (i==respObj.length-1){


                     addCluster(myFeatures,name,color);
                  }
                  // console.log(myFeatures);
                }
              }
              layers={"0":["ds_gk_pg_olyckor_p","#FFA500"],"1":["ds_gk_pg_antura_pt","#FF8888"]};

              function addCluster(feature,name,color){

                var style = new OpenLayers.Style({
                    pointRadius: "${radius}",
                    fillColor: color,
                    fillOpacity: 0.6,
                    strokeColor: color,
                    strokeWidth: "${width}",
                    strokeOpacity: 0.8,
                    label: "${getLabel}",
                    fontSize: "12px",
                    fontFamily: "Courier New, monospace",
                    fontWeight: "normal"
                }, {
                    context: {
                        width: function(feature) {
                            return (feature.cluster) ? 2 : 1;
                        },
                        radius: function(feature) {
                            var pix = 2;
                            if(feature.cluster) {
                                // pix = Math.min(feature.attributes.count, 7) + 2;
                                pix = Math.min(feature.attributes.count,20)+ 2;
                            }
                            return pix;
                        },
                        getLabel: function(feature) {
                          if (feature.cluster) {
                            if (feature.cluster.length > 1) {
                              return feature.cluster.length;
                            }
                          }
                          return '';
                        }
                    }
                });

                strategy = new OpenLayers.Strategy.Cluster();

                clusters = new OpenLayers.Layer.Vector(name, {
                    strategies: [strategy],
                    styleMap: new OpenLayers.StyleMap({
                        "default": style,
                        "select": {
                            fillColor: "#8aeeef",
                            strokeColor: "#32a8a9"
                        }
                    })
                });

                // var select = new OpenLayers.Control.SelectFeature(
                //     clusters, {hover: true}
                // );


                // clusters.events.on({"featureselected": display});
                // clusters.addFeatures([feature])
                // clusters.addFeatures(feature)
                cbKort.mapObj.map.addLayer(clusters);
                reset(strategy,clusters,feature)
                console.log('done');
              }

              function reset(strategy,clusters,features) {
                  // var distance = parseInt(document.getElementById("distance").value);
                  var distance=42;
                  // var threshold = parseInt(document.getElementById("threshold").value);
                  var threshold=1;
                  strategy.distance = distance || strategy.distance;
                  strategy.threshold = threshold || strategy.threshold;
                  // document.getElementById("distance").value = strategy.distance;
                  // document.getElementById("threshold").value = strategy.threshold || "null";
                  clusters.removeFeatures(clusters.features);
                  clusters.addFeatures(features);
              }

              // getData()


              // BUTTONs
              jq('.timetype input').click(function(){
                value=jq('input[name=timeval]:checked').val();
                if (value=='1'){
                  jq('.avancerat').removeClass('hidden');
                }
                else{
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
                var textval=jq(this).val();
                jq('.'+textval).removeClass('hidden');
                // console.log(textval);

              });
              //stänger fönster
              jq('#closeviswindow').click(function(){
                jq('#testSida2').remove();
                });


              jq('.updateButton').click(function(){
                allChecked=[];

                for (i=0; i<2;i++){

                  if(cbKort.mapObj.map.getLayersByName(layers[String(i)][0])[0]){
                      cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layers[String(i)][0])[0]);

                  }
                }

                jq('input[name=layers]:checked').each(function() {
                  allChecked.push(jq(this).val());
                  if(jq(this).val()=="1"){

                    cbKort.getSession().getDatasource(layers["1"][0]).executeSMQL(
                        "select * from this",
                        function(resp) {


                          addAll(resp,layers["1"][0],layers["1"][1]);

                          });
                  }
                  if (jq(this).val()=="0") {
                    var query=createQuery();
                    cbKort.getSession().getDatasource(layers["0"][0]).executeSMQL(
                        query,
                        function(resp) {

                          // if(cbKort.mapObj.map.getLayersByName(layers["0"][0])[0]){
                          //     cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layers["0"][0])[0]);
                          // }
                          addAll(resp,layers["0"][0],layers["0"][1]);
                          });

                  }
                });

              });

              // function standardQuery(){
              //   var fromdate=jq('.fromdate').val();;
              //   var todate=jq('.todate').val();
              //   var datequery="fulldate<=\""+todate+"\" and fulldate>=\""+fromdate+"\" "
              //   var timequery;
              //
              //   if(jq('input[name=timeval]:checked').val()==1){
              //     var fromtime=jq('.fromtime').val().split(':')[0];
              //     var totime=jq('.totime').val().split(':')[0];
              //     timequery=' and tid>=\"'+fromtime+'\" and tid<=\"'+totime+'\"';
              //     console.log(timequery)
              //   }
              //   else{
              //     timequery='';
              //   }
              //   var intquery;
              //
              //   if (dtb.hasFeatures()) {
              //       var wkt = dtb.getFeatures()[0].wkt;
              //       intquery= " and intersects(shape_wkt, ToGeometry('" + wkt +
              //           "')) ";
              //     }
              //   else{
              //       intquery="";
              //     }
              //
              //   return datequery,timequery,intquery
              // }

              function createInvQuery(){
                var fromdate=jq('.fromdate').val();;
                var todate=jq('.todate').val();
                if(jq('input[name=timeval]:checked').val()==1){
                  var fromtime=jq('.fromtime').val().split(':')[0];
                  var totime=jq('.totime').val().split(':')[0];
                  timequery=' and tid>=\"'+fromtime+'\" and tid<=\"'+totime+'\"';
                  console.log(timequery)
                }
                else{
                  timequery='';
                }
                
              }

              function createQuery(){
                var serious=jq('.seriousness').val();
                var accType=jq('.accType').val();
                var fromdate=jq('.fromdate').val();;
                var todate=jq('.todate').val();
                var datequery="fulldate<=\""+todate+"\" and fulldate>=\""+fromdate+"\" "
                var timequery;

                if(jq('input[name=timeval]:checked').val()==1){
                  var fromtime=jq('.fromtime').val().split(':')[0];
                  var totime=jq('.totime').val().split(':')[0];
                  timequery=' and tid>=\"'+fromtime+'\" and tid<=\"'+totime+'\"';
                  console.log(timequery)
                }
                else{
                  timequery='';
                }
                var intquery;

                if (dtb.hasFeatures()) {
                    var wkt = dtb.getFeatures()[0].wkt;
                    intquery= " and intersects(shape_wkt, ToGeometry('" + wkt +
                        "')) ";
                  }
                else{
                    intquery="";
                  }

                var query;
                if(serious=='Alla' && accType=='Alla'){
                  query="select * from this where "+datequery+ intquery+timequery;
                }
                else if (serious=='NA' && accType=='Alla') {
                  query="select * from this where not(skadegrad=\"Lindrigt skadad\" OR skadegrad=\"Måttligt skadad\" or skadegrad=\"Svårt skadad\" or skadegrad=\"Dödad\") and "+ datequery+intquery+timequery;
                }
                else if (serious=='NA' && accType!='Alla') {
                  query="select * from this where not(skadegrad=\"Lindrigt skadad\" OR skadegrad=\"Måttligt skadad\" or skadegrad=\"Svårt skadad\" or skadegrad=\"Dödad\") and olyckstyp=\""+accType+"\" and "+ datequery+intquery+timequery;
                }
                else if (serious=='Alla') {
                  query="select * from this where olyckstyp=\""+accType+"\" and "+ datequery+intquery+timequery;
                }
                else if (accType=='Alla') {
                  query="select * from this where skadegrad=\""+serious+"\" and "+ datequery+intquery+timequery;
                }
                else {
                  query="select * from this where skadegrad=\""+serious+"\" and olyckstyp=\""+accType+"\" and "+ datequery+intquery+timequery;
                }

                console.log(query)
                return query
              }

            });



          //  }, this));
      }
    }

  };
