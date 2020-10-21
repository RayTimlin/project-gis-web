var sps_mozafar = {
    dialog: null,
    dtb: null,

    show: function() {
        this.dialog = new Dialog({
            title: "Conzoom verktyg!",
            id: "myDialog"
        });
        var contentDiv = jq("<div></div>");
        contentDiv.load("/modules/sps_mozafar/html/sps_mozafar.html", SpatialServer.Utils.bind(function() {
            var html = contentDiv.find("#spstraining_template").children();
            var buttons = contentDiv.find("#spstraining_buttons").children();
            this.dialog.addContentHTML(html);
            this.dialog.addButtonsHTML(buttons);
            this.dialog.showDialog();
            // jq("#showlinje").click(SpatialServer.Utils.bind(this.getStatisticsByArea, this));
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
              var wkt = this.dtb.getFeatures()[0].wkt;
            //   var TotalNo2= j
            //   window.console.log(TotalNo);
              cbKort.getSession().getDatasource("smdb_bus_station").executeSMQL(
                  "select count(*) as ant from this where intersects(shape_wkt, ToGeometry('" + wkt +
                      "')) ",
                  function(resp) {
                    //   for (var i = 0; i < resp.length; i++) {
                    // window.console.log(resp.length);
                     window.alert("test");
                     jq("#antal").val(parseInt(resp[0].ant));
                    //   window.console.log(TotalNo2);
                    // }
                    }
              );

      }
      }
};
