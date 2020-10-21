var vis = {
      // dialog: null,
      // dtb: null,
      dialog: null,
      dtb: null,

      show: function() {
          this.dialog = new Dialog({
              title: "Conzoom verktyg!",
              id: "myDialog"
          });
          var contentDiv = jq("<div></div>");
          contentDiv.load("/modules/vis/html/sps_mozafar.html", SpatialServer.Utils.bind(function() {
              var html = contentDiv.find("#spstraining_template").children();
              var buttons = contentDiv.find("#spstraining_buttons").children();
              this.dialog.addContentHTML(html);
              this.dialog.addButtonsHTML(buttons);
              this.dialog.showDialog();


              // var wkt='POINT(124963.93334236 6162277.9999878)';
              // console.log(wkt);
              //
              // var format = new OpenLayers.Format.WKT(wkt);
              // var feature1 = format.readFeature(wkt, {
              //   dataProjection: 'EPSG:3008',
              //   featureProjection: 'EPSG:3008'
              // });
              //
console.log('hello');
              // my geometry object
              // var geometry4 = new SpatialServer.Geometry({
              //     wkt: "POINT(124963.93334236 6162277.9999878)"
              // });

              // var feature2 = format.readFeature(geometry4, {
              //   dataProjection: 'EPSG:3008',
              //   featureProjection: 'EPSG:3008'
              // });

              console.log('hello');
              // console.log(feature2);
              // var vector = new OpenLayers.layer.Vector({
              //   source: new OpenLayers.source.Vector({
              //     features: [feature1]
              //   })
              // });

              // var vector2 = new OpenLayers.Feature.Vector({
              //   geometry: geometry4
              // });
              // console.log('hello');
              // cbKort.mapObj.map.addLayer(vector);
              // cbKort.addLayer(vector);

              cbKort.mapObj.map.addLayer(vector2);
              cbKort.addLayer(vector2);
              console.log('hello');
              jq("#showlinje").click(SpatialServer.Utils.bind(this.getStatisticsByArea, this));
              jq("#antalnummer").click(SpatialServer.Utils.bind(this.getStatisticsByArea, this));
              this.dtb = new Gui.Draw.DrawToolBox({
                  id: "myDTB",
                  domId: "myDTB",
                  singleFeatureMode: true,
                  controlNameList: ["drawFeaturePoint", "drawFeatureLine", "drawFeaturePolygon"]
              });
          }, this));
      },

      getStatisticsByArea: function() {
            if (this.dtb.hasFeatures()) {
            // if(1==1){
                // var wkt = this.dtb.getFeatures()[0].wkt;

              // POINT(124963.93334236 6162277.9999878)
              //   var TotalNo2= j
              //   window.console.log(TotalNo);
                cbKort.getSession().getDatasource("ds_mod_skola_pg_vy_fristaende_forskola_pt").executeSMQL(
                    "select count(*) as ant from this where intersects(shape_wkt, ToGeometry('" + wkt +
                        "')) ",
                    function(resp) {
                      //   for (var i = 0; i < resp.length; i++) {
                      // window.console.log(resp.length);
                       // window.alert("test");
                       console.log(resp)
                       // jq("#antal").val(parseInt(resp[0].ant));
                      //   window.console.log(TotalNo2);
                      // }
                      }
                );

        }
        }
  };
