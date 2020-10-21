// Initiate when the byggsmaordning button is clicked
var byggsamordning = {
  // dialog: null,
  // dtb: null,
  show: function(no) {
    var layersBygg = {
      "0": ["ds_fgk_pg_olyckor_p", "	#F79EA3", [
        ['Skadegrad', 'skadegrad'],
        ['Olyckstyp', 'olyckstyp'],
        ['Datum', 'datum'],
        ['Tid', 'tid'],
        ['Val', '0']
      ],'Olyckor'],
      "1":  ["ds_fgk_pg_fgk_projekt_antura_p_test", "#ffae3d", [
      // "1":  ["ds_fgk_pg_fgk_projekt_antura_p", "#ffae3d", [
        ['Projekt ID', 'projid'],
        ['Projektnamn', 'projektnamn'],
        ['Kategori', 'kategori_eko'],
        ['Projektets start', 'aktivitetens_startdatum'],
        ['Projektets slut', 'aktivitetens_slutdatum'],
        ['Projektledare', 'projektledare'],
        ['Utredningar start', 'utredningar_startdatum'],
        ['Utredningar slutd', 'utredningar_startdatum'],
        ['Ide start', 'ide_startdatum'],
        ['Ide slut', 'ide_slutdatum'],
        ['Förstudie start', 'forstudie_startdatum'],
        ['Förstudie slut', 'forstudie_slutdatum'],
        ['Genomförande start', 'genomforande_startdatum'],
        ['Genomförande slut', 'genomforande_slutdatum'],
        ['Garanti start', 'garanti_startdatum'],
        ['Garanti slut', 'garanti_slutdatum'],
        ['Dagens Fas', 'dagens_fas_i_antura'],
        ['Projekt skede', 'projektskede_idag'],
        // ['Projekttyp', 'expl_invest_drift_pr'],
        ['Val', '1']
      ], 'FGK projekt'],
      "2": ["ds_fgk_pg_asfaltbelaggningbygg_p", "#BC5E51", [
        ['Gatuklass', 'gatuklass'],
        ['Start datum', 'startdatum2'],
        ['Slut datum', 'slutdatum2'],
        ['Sträckning', 'strackning'],
        ['Gatan', 'gata_objekt'],
        ['Val', '2']
      ], 'Beläggningsprogrammet'],
      "3": ["ds_fgk_pg_mu_ytor_bygg_bel", "#823C3E", [
        ['Tillstandsnr', 'avtal_tillstandsnr'],
        ['Namn', 'namn'],
        ['Startdatum', 'startdatum'],
        ['Slutdatum', 'slutdatum'],
        ['Kategori', 'kategori'],
        ['Anmärkning', 'anm'],
        ['Val', '3']
      ], 'Belamringar'],
      "4": ["ds_fgk_pg_vagarbeten_p", "#4B0082", [
        ['Sökande', 'sokande'],
        ['Entreprenör', 'entreprenor'],
        ['Status', 'status'],
        ['Startdatum', 'datumfrom'],
        ['Slutdatum', 'datumtom'],
        ['Plats', 'plats'],
        ['Beskrivning', 'beskrivning'],
        ['Val', '4']
      ], 'Grävningstillstånd'],
      "5": ["ds_fgk_pg_mu_uteservering_bygg", "#9999FF", [
        ['Tillstandsnr', 'avtal_tillstandsnr'],
        ['Namn', 'namn'],
        ['Startdatum', 'startdatum'],
        ['Slutdatum', 'slutdatum'],
        ['Kategori', 'kategori'],
        ['Anmärkning', 'anm'],
        ['Val', '5']
      ], 'Uteserveringar'],
      "6": ["ds_fgk_pg_mu_fri_for_bygg", "#00BFFF", [
        ['Tillstandsnr', 'avtal_tillstandsnr'],
        ['Namn', 'namn'],
        ['Startdatum', 'startdatum'],
        ['Slutdatum', 'slutdatum'],
        ['Kategori', 'kategori'],
        ['Anmärkning', 'anm'],
        ['Val', '6']
      ], 'Fritidsanläggningar/Försäljningsplatser'],
      // "6": ["ds_fgk_pg_gkarrangemang_p", "#00BFFF", [
      //   ['Typ', 'typ'],
      //   ['Information', 'kommentar'],
      //   ['Start datum', 'startdatum'],
      //   ['Slut datum', 'slutdatum'],
      //   ['Val', '6']
      // ], 'Arrangemang (GK)'],
      // "7": ["ds_fgk_pg_forvaltning_gis_p", "#EE8B78", [
      //   ['Typ', 'typ'],
      //   ['Information', 'kommentar'],
      //   ['Start datum', 'startdatum'],
      //   ['Slut datum', 'slutdatum'],
      //   ['Val', '7']
      // ], 'Övriga investeringar'],
      // "8": ["ds_fgk_pg_fkvy_explomrade_p", "#0033FF", [
      //   ['Text', 'text'],
      //   ['Projekt nummer', 'projektnr'],
      //   ['Typ', 'typ'],
      //   ['Förvaltning', 'forvaltning'],
      //   ['Start datum', 'startdatum'],
      //   ['Slut datum', 'slutdatum'],
      //   ['Projektstatus', 'projektstatus'],
      //   ['Val', '8']
      // ],'Projekt (FK)']
      // ,
      // "9": ["ds_fgk_pg_uteservering_p", "#8a8a8a", [
      //   ['Namn', 'namn'],
      //   ['Typ', 'typ'],
      //   ['Startdatum', 'datumfrom2'],
      //   ['Slutdatum', 'datumtom2'],
      //   ['Avtalsnr', 'avtalsnr'],
      //   ['Upphör', 'upphor'],
      //   ['Val', '9']
      // ],'Uteserveringar']
      // ,
      // "10": ["ds_fgk_trafikavstangningar_p_pg", "#1C2642", [
      //   ['Typ', 'typ'],
      //   ['Startdatum', 'startdatum'],
      //   ['Slutdatum', 'slutdatum'],
      //   ['Område', 'omrade'],
      //   ['Ansvarig', 'ansvarig'],
      //   ['Val', '10']
      // ],'Trafikavstängingar']
    };
    // "6":["ds_gk_pg_fel_pagaende_pt","#cd871f",['beskrivning','verksamhetsomrade_','klassificering2','underarendetyp','registrerat','status']],
    // "7":["ds_gk_pg_fraga_pagaende_pt","#ff6300",['beskrivning','verksamhetsomrade_','klassificering2','underarendetyp','registrerat','status']]
    if (no == 1) {

      window.console.log('test click')
      jq( "li#pan " ).click();
      // jq( "#pan " ).click();
      // window.console.log('test click2')
      // load in the lathund HTML skript
      jq('body').append('<div id="testSida2_container"></div>');
      jq('#testSida2_container').append('<div id="testSida2"></div>');
      jq('#testSida2').addClass('buttonContainer'); //eslint-disable-line
      jq('#testSida2').load("/modules/byggsamordning/html/byggsamordning.html", function() {
        jq('#testSida2').draggable();
        jq('input[name=layersBygg]').each(function() {
          jq('#legendBygg'+jq(this).val()).css('background',layersBygg[jq(this).val()][1]);
        });

        // add in the accordion event----------------------------------
        jq('.h3').accordion({
          event: "mouseover"
        });

        jq('.ui-accordion-content').addClass("accordionAntura");
        jq('.h3').addClass("Antura");

        // var dtb = new Gui.Draw.DrawToolBox({
          // id: "myArea",
          // domId: "myArea",
          // singleFeatureMode: true,
          // controlNameList: ["drawFeaturePolygon", "drawFeatureRegularPolygon", "drawFeatureCircle", "deleteFeatures"]
        // });

        // --------------------------------------Slider tool--------------------------

        jq('#testSida2_container').prepend('<div id="mapSlider"></div>')

        function InitDateSlider() {
          //Place in the months into slider
          var months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dec"];
          //Set the starting date  into slider
          var todaysDate = new Date();
          var todaysDate2 = new Date();
          var boundsStart = new Date();
          var boundsEnd = new Date();
          boundsStart.setMonth(boundsStart.getMonth() - 3);
          boundsEnd.setMonth(boundsEnd.getMonth() + 120);

          // Bounds of the slider
          sliderBounds = {
            min: boundsStart,
            max: boundsEnd
          };

          // Initialize date slider------------------------------
          jq("#mapSlider").dateRangeSlider({
            bounds: sliderBounds,
            defaultValues: {
              // min: todaysDate.setDate(todaysDate.getDate() - 14),
              // min: todaysDate.setDate(todaysDate.getDate() - 14),
              min: todaysDate.setMonth(boundsStart.getMonth() - 0),
              max: todaysDate2.setMonth(boundsEnd.getMonth() + 12)
            },
            scales: [{
              first: function(value) {
                return value;
              },
              end: function(value) {
                return value;
              },
              next: function(value) {
                var next = new Date(value);
                return new Date(next.setMonth(value.getMonth() + 1));
              },
              label: function(value) {
                return months[value.getMonth()];
              },
              // format: function(tickContainer, tickStart, tickEnd) {
              //   tickContainer.addClass("myCustomClass");
              // }
            }],
            arrows:false
          });
        };

        //End of the InitDateSlider

        InitDateSlider();

        // ----------initialize query with default dates ----------------
        var past = new Date();
        past.setDate(past.getDate() - 14);
        var future = new Date();
        future.setDate(future.getDate() + 14);
        var day = ("0" + past.getDate()).slice(-2);
        var day2 = ("0" + future.getDate()).slice(-2);
        var month = ("0" + (past.getMonth() + 1)).slice(-2);
        var month2 = ("0" + (future.getMonth() + 1)).slice(-2);
        var today = past.getFullYear() + "-" + (month) + "-" + (day);
        var today2 = future.getFullYear() + "-" + (month2) + "-" + (day2);

        console.log(today);
        console.log(today2);

        jq('.init_date').val(today);
        // -------------------Date picker that works in IE 11 and Firefox --------------------
        jq(function() {
          jq('.init_date').datepicker({ dateFormat: 'yy-mm-dd'});
        });
        jq('.init_date').prop('disabled', true);
        jq('.last_date').val(today2);
        jq(function() {
          jq('.last_date').datepicker({ dateFormat: 'yy-mm-dd'});
        });
        jq('.last_date').prop('disabled', true);
        // -----------------------------------------End of date picker kod--------------------------------------------
        removeAllLayers();


        jq('.chartcontainer').remove();
        jq('input[name=layersBygg]:checked').each(function() {
          updatesingle(jq(this).val());
        });


        // Run the query when a new layer is checked but the dates remain the same------------------------
        jq('input[name=layersBygg]').click(function() {
          if (cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0]) {
            select = cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0];
            select.deactivate();
            cbKort.mapObj.map.removeControl(select);
            select.destroy();
          }
          jq('#name').remove();
          if (jq(this).is(':checked')) {
            updatesingle(jq(this).val())
          } else {
            cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).val()][0])[0]);
            jq('.' + layersBygg[jq(this).val()][0]).remove();
            selectstuff();
          }
        });


        // When one of the dropdown selectors for investeringar is chosen, check the investeringar checkbox or rerun the query --------------------
        jq('select.querytag').change(function(){
          console.log("selector changed");
          jq('input:checkbox[value="1"]').prop('checked', true);
          removeAllLayers();
          jq('.chartcontainer').remove();
          jq('input[name=layersBygg]:checked').each(function() {
            updatesingle(jq(this).val());
          });
        });

        // Closing the layer button and slider --------------------
        jq('#byggsclose').click(function() {
          console.log("close button clicked");
          jq('#testSida2').remove();
          removeAllLayers();
          jq('#mapSlider').remove();
          jq('.chartcontainer').remove();
          jq('#name').remove();
        });

        // Help button --------------------
        jq('#byggshelp').click(function() {
          // jq('byggHelpFrame').load("http://www.google.com/");
            window.open('http://mmapdata.intra.malmo.se/fgk/lathunder/Byggsamordning.html','_blank');          // jq('.contentbeg[name=underarbete.html]').trigger("click");
        });



        jq('.last_date').on('change', function(e, data) {
          var fromDatePicker = jq('.init_date').val()
          var toDatePicker = jq('.last_date').val()

          // jq('.ui-rangeSlider-label-inner').val(fromDatePicker)

          jq('.ui-rangeSlider-label-value:eq(0)').text(fromDatePicker)
          jq('.ui-rangeSlider-label-value:eq( 1 )').text(toDatePicker)
          // jq('.ui-rangeSlider-leftLabel').effect("highlight", {}, 3000)

          // When the slider/datepicker is updated what do we want to happen? --------------------------

          console.log("to date has been changed")
          removeAllLayers();
          jq('input[name=layersBygg]:checked').each(function() {
            updatesingle(jq(this).val());
            console.log("Updated data - from date")
          });

          jq('input[name=points]').click(function() {
            if (jq(this).is(':checked')) {
              jq('input[name=layersBygg]:checked').each(function() {
                updatesingle(jq(this).val());
                console.log('work when slider moved')
              })
            } else {
              removeAllLayers();
              console.log('not work when slider moved')
            }
          });
        })

        jq('.init_date').on('change', function(e, data) {
          var fromDatePicker = jq('.init_date').val()
          var toDatePicker = jq('.last_date').val()

          jq('.ui-rangeSlider-label-value:eq(0)').text(fromDatePicker)
          jq('.ui-rangeSlider-label-value:eq( 1 )').text(toDatePicker)

          // When the slider/datepicker is updated what do we want to happen? --------------------------

          console.log("to date has been changed")
          removeAllLayers();
          jq('input[name=layersBygg]:checked').each(function() {
            updatesingle(jq(this).val());
            console.log("Updated data - from date")
          });

          jq('input[name=points]').click(function() {
            if (jq(this).is(':checked')) {
              jq('input[name=layersBygg]:checked').each(function() {
                updatesingle(jq(this).val());
                console.log('work when slider moved')
              })
            } else {
              removeAllLayers();
              console.log('not work when slider moved')
            }
          });
        })
            // ---------------------end of date picker updating ------------

        // Iniatiate event in the date section when event is disabled, i.e. nudge user towards slider ----------------------------------------------
        jq('#byggDatumBox').click(function (e) {
          var datePickerDisabled = String(jq('.init_date').is(':disabled'))
          if (datePickerDisabled === 'true') {
            jq('.ui-rangeSlider-rightLabel').effect("pulsate", { times:3 }, 2000)
            jq('.ui-rangeSlider-leftLabel').effect("pulsate", { times:3 }, 2000)
            jq('body').append("<div id='dialog-message' title='Byggsamordningsverktyg'><p>Justera tidsperiod genom att flytta tidslinjen nedan.</p></div>")
            jq('#dialog-message').css("min-height", "100%")
            jq('#dialog-message').dialog({
              modal: true,
              buttons: {
                OK: function() {
                  jq(this).dialog("close");
                }
              }
            });
            }
        });

        // Setting in motion the change event on slider---------------------------
        jq("#mapSlider").on("valuesChanged", function(e, data) {
          // console.log("Values are min: " + data.values.min + " max: " + data.values.max);
          var d = data.values.min;
          var d2 = data.values.max;
          startDate = d.toISOString().slice(0, 10);
          endDate = d2.toISOString().slice(0, 10);
          console.log(startDate);
          console.log(endDate);

          jq('#name_GroupDiv').remove()

          jq('.init_date').val(startDate)
          jq('.init_date').prop('disabled', false)
          jq('.last_date').val(endDate)
          jq('.last_date').prop('disabled', false)


          removeAllLayers();

          // jq('.chartcontainer').remove();
          jq('input[name=layersBygg]:checked').each(function() {
            updatesingle(jq(this).val());
          })


          // When the slider is moved what do we want to happen? --------------------------
          jq('.time').on('change', function() {
            console.log("time has been changed")
            removeAllLayers();
            jq('input[name=layersBygg]:checked').each(function() {
              updatesingle(jq(this).val());
              console.log("Updated data")
            });
          });

          jq('input[name=points]').click(function() {
            if (jq(this).is(':checked')) {
              jq('input[name=layersBygg]:checked').each(function() {
                updatesingle(jq(this).val());
                console.log('work when slider moved')
              })
            } else {
              removeAllLayers();
              console.log('not work when slider moved')
            }
          });
        });

      });

      // End of slider event ----------------------------------------------


      // DROPDOWN WITH CHECKBOXES

      // ------------------------------------SETUP-------------------------------------------
      // CODE FOR ALL DROPDOWNS
      var checkboxdropdowns = ['gent', 'gsts', 'gsok']

      function checkboxfunction(drop) {
        jq('.' + drop + 'button').click(function() {
          if (jq('.' + drop).hasClass('hidden')) {
            console.log('yes')
            jq('.' + drop).removeClass('hidden');
          } else {
            jq('.' + drop).addClass('hidden');
            jq('input[name=' + drop + 'text]').val('');
            jq('input[name=' + drop + ']:checked').each(function() {
              jq('input[name=' + drop + 'text]').val(jq('input[name=' + drop + 'text]').val() + ' ' + jq(this).val().trim());
            });
          }
          jq('input[name=' + drop + 'alla]').click(function() {
            if (this.checked == true) {
              jq('input[name=' + jq('input[name=' + drop + 'alla]').val() + ']').prop('checked', true);
            } else {
              jq('input[name=' + jq('input[name=' + drop + 'alla]').val() + ']').prop('checked', false);
            }
          });
          jq('input[name=' + drop + ']').click(function() {
            jq('input[name=' + drop + 'alla]').prop('checked', false);
          });
        });

      }
      for (i = 0; i < checkboxdropdowns.length; i++) {
        checkboxfunction(checkboxdropdowns[i])
      }

      // GETTING DATA FOR DROPDOWNS WITH QUERIES
      function start() {
        // jq('.init_date').val('2018-03-01');
        // jq('.last_date').val('2018-06-31');

        cbKort.getSession().getDatasource(layersBygg["1"][0]).executeSMQL(
          "select portfolj from this group by portfolj",
          function(resp) {
            for (i = 0; i < (resp.length - 1); i++) {
              jq(".port").append("<option value='" + resp[i]["portfolj"] + "'>" + resp[i]["portfolj"].toLowerCase() + "</option>");
              console.log('investering info')
            }

          });
        // cbKort.getSession().getDatasource(layersBygg["5"][0]).executeSMQL(
        //   "select sÃ¶kande from this group by sÃ¶kande",
        //   function(resp) {
        //     for (i = 0; i < resp.length; i++) {
        //       jq(".ta").append("<option value='" + resp[i]["sÃ¶kande"] + "'>" + resp[i]["sÃ¶kande"].toLowerCase() + "</option>");
        //       console.log('ta info')
        //     }
        //   });
        cbKort.getSession().getDatasource(layersBygg["4"][0]).executeSMQL(
          "select sokande from this group by sokande",
          function(resp) {
            for (i = 0; i < resp.length; i++) {
              // jq(".gsok").append("<option value='"+resp[i]["sokande"]+"'>"+resp[i]["sokande"].toLowerCase()+"</option>");
              jq(".gsok").append("<input type='checkbox' value='" + resp[i]["sokande"] + "' name='gsok' checked><p class='inline'>" + resp[i]["sokande"].toLowerCase() + "</p><br>");

            }
          });
        cbKort.getSession().getDatasource(layersBygg["4"][0]).executeSMQL(
          "select status from this group by status",
          function(resp) {
            for (i = 0; i < resp.length; i++) {
              // jq(".gsts").append("<option value='"+resp[i]["status"]+"'>"+resp[i]["status"].trim().toLowerCase()+"</option>");
              jq(".gsts").append("<input type='checkbox' value='" + resp[i]["status"] + "' name='gsts' checked><p class='inline'>" + resp[i]["status"].toLowerCase() + "</p><br>");
            }
          });

        cbKort.getSession().getDatasource(layersBygg["4"][0]).executeSMQL(
          "select entreprenÃ¶r from this group by entreprenÃ¶r",
          function(resp) {
            for (i = 0; i < resp.length; i++) {
              jq(".gent").append("<input type='checkbox' value='" + resp[i]["entreprenÃ¶r"] + "' name='gent' checked><p class='inline'>" + resp[i]["entreprenÃ¶r"].toLowerCase() + "</p><br>");
              // <input type="checkbox" id="hej" name="" value=""> <label for="hej">text</label><br>
            }

          });
      }
      start();

      // -----------------------------MAP FUNCTIONS----------------------
      function popups(e){
        var html;
        // var html="<div class='innerpop'>"++"</div>";
        var lonlat;
        if(e.feature.cluster){
          var val=e.feature.cluster[0].attributes['Val'];
          console.log(val)
          console.log(layersBygg[val][3])
          var html="<div class='popheading'>"+layersBygg[val][3]+"<i class='material-icons inline' id='closepopup'>close</i></div>";
          console.log(layersBygg[val])
          for(var i=0; i<e.feature.cluster.length; i++) {
            html+="<div class='innerpop'>";
            for(j=0;j<(layersBygg[val][2].length-1);j++){
              // window.console.log(e.feature.attributes[layersBygg[val][2][j][1]] )
              var stringAttribute = e.feature.attributes[layersBygg[val][2][j][1]];
              window.console.log(stringAttribute)
              if (String(stringAttribute) !== '-9999' || String(stringAttribute) === '-undefined') {
                window.console.log('test5')
                html += "<p><b>"+layersBygg[val][2][j][0]+": </b>"+e.feature.attributes[layersBygg[val][2][j][1]] + "</p>";
              }
            }
            html+="</div>";
          }
            lonlat = new OpenLayers.LonLat(
              e.feature.geometry.x,
              e.feature.geometry.y
            );
        }
        else{
          var val=e.feature.attributes['Val'];
          var html="<div class='popheading'>"+layersBygg[val][3]+"<i class='material-icons inline' id='closepopup'>close</i></div>";
          html+="<div class='innerpop'>";

          for(j=0;j<(layersBygg[val][2].length-1);j++){
            window.console.log(e.feature.attributes[layersBygg[val][2][j][1]] )
            var stringAttribute = e.feature.attributes[layersBygg[val][2][j][1]];
            window.console.log(stringAttribute)
            if (String(stringAttribute) !== '-9999' || String(stringAttribute) === '-undefined') {
              window.console.log('test4')
              html += "<p><b>"+layersBygg[val][2][j][0]+": </b>"+e.feature.attributes[layersBygg[val][2][j][1]] + "</p>";
            }
          }
          html+="</div>";
          var lonlat = new OpenLayers.LonLat(
          e.feature.geometry.bounds.right,
          e.feature.geometry.bounds.bottom
          );
        }
        var popup = new OpenLayers.Popup('name',
          lonlat,
          // new OpenLayers.Size(auto, 150),
          null,
          html,
          // Changing the location and size of the pop-up box (RT) ------------------
          // {size: {w: 14, h: 14}, offset: {x: -7, y: -7}},
          {size: {w: 2, h: 2}, offset: {x: 1, y: 1}},
          true
        );
        // jq('#name_GroupDiv').append("<div class='popheading'>"+layersBygg[val][3]+"<i class='material-icons inline closepopup'>close</i></div>")
        popup.autoSize = true;
        // popup.closeOnMove=true;
        popup.panMapIfOutOfView=true;

        e.feature.popup = popup;
        cbKort.mapObj.map.addPopup(popup);

        var dragPopup = new OpenLayers.Control.DragPopup(popup);
        cbKort.mapObj.map.addControl(dragPopup);

        // jq('.olPopup').draggable({ handle: ".popheading" });
        // jq('.olPopupContent').niceScroll({
        //   cursorwidth: "10px"
        // });

        jq('#closepopup').click(function(){
          jq('#name').remove();
          select=cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0];
          select.unselectAll();
        });

        // Make the info thing draggable - Ray
        // jq('#name').draggable();
        // console.log('check if the draggable function is working')
      }


        // -------------start of pop up draggable stuff ------------

        OpenLayers.Control.DragPopup = OpenLayers.Class(OpenLayers.Control, {
    down: false,
    popPnt: null,
    mapPnt: null,
    popup: null,
    docMouseUpProxy: null,
    /**
     * Constructor: OpenLayers.Control.DragPopup
     * Create a new control to drag a popup.
     *
     * Parameters:
     * @param {OpenLayers.Popup} popup
     * @param {Object} options
     */
    initialize: function(popup, options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        this.popup = popup;
        this.popup.autoSize = false;
        this.popup.events.register('mousedown', this, this.mouseDown);
        this.popup.events.register('mouseup', this, this.mouseUp);
        this.popup.events.register('mousemove', this, this.mouseMove);
        // Define a function bound to this used to listen for
        // document mouseout events
        this.docMouseUpProxy = OpenLayers.Function.bind(this.mouseUp, this);
    },

    /**
     * Method: setMap
     * Set the map property for the control.
     *
     * Parameters:
     * map - {<OpenLayers.Map>} The controls map.
     */
    setMap: function(map) {
        OpenLayers.Control.prototype.setMap.apply(this, [map]);
        this.map.events.register('mousemove', this, this.mouseMove);
    },

    mouseDown: function(evt) {
        //console.log('mouseDown');
        this.down = true;
        this.popPnt = this.popup.events.getMousePosition(evt);
        OpenLayers.Event.observe(document, 'mouseup', this.docMouseUpProxy);
        OpenLayers.Event.stop(evt);
    },

    mouseUp: function(evt) {
        //console.log('mouseUp');
        this.down = false;
        OpenLayers.Event.stopObserving(document, 'mouseup', this.docMouseUpProxy);
        OpenLayers.Event.stop(evt);
    },

    mouseOut: function(evt) {
        //console.log('map.mouseOut');
        this.down = false;
        OpenLayers.Event.stop(evt);
    },

    mouseMove: function(evt) {
        //console.log('mouseMove');
        if (this.down) {
            var mapPntPx = this.map.events.getMousePosition(evt);
            mapPntPx = mapPntPx.add((this.popPnt.x*-1), (this.popPnt.y*-1));
            this.popup.lonlat = this.map.getLonLatFromViewPortPx(mapPntPx);
            this.popup.updatePosition();
        }
        OpenLayers.Event.stop(evt);
    },

    destroy: function() {
        // Remove listeners
        this.popup.events.unregister('mousedown', this, this.mouseDown);
        this.popup.events.unregister('mouseup', this, this.mouseUp);
        this.popup.events.unregister('mousemove', this, this.mouseMove);
        this.map.events.unregister('mousemove', this, this.mouseMove);
        // Clear object references
        this.popup = null;

        this.popPnt = null;
        // allow our superclass to tidy up
        OpenLayers.Control.prototype.destroy.apply(this, []);
    },

    /** @final @type String */
    CLASS_NAME: "OpenLayers.Control.DragPopup"
});
        // var parentwidth = jq("#name_GroupDiv").width();
        // jq(".popheading").toggleClass("fixed").width(parentwidth-10);


// ------------------------------------------END OF POP UP DRAG STUFF ---

      function selectstuff(){
        console.log(cbKort.mapObj.map.getControlsBy("id", "Mycontrol").length)
        if (cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0]) {
          var select2 = cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0];
          select2.deactivate();
          cbKort.mapObj.map.removeControl(select2);
          select2.destroy();
        }
        var activelayerlist=[];
        jq('input[name=layersBygg]:checked').each(function(){
          if(cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).val()][0])[0]){
                activelayerlist.push(cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).val()][0])[0]);
          }
        });
        var select = new OpenLayers.Control.SelectFeature(
          activelayerlist, {hover: false,
          id: 'Mycontrol'}
        );
        console.log(activelayerlist)
        cbKort.mapObj.map.addControl(select);
        select.activate();
        select.events.on({
          featurehighlighted: function(evt) {
              popups(evt);
          },
          featureunhighlighted: function(evt) {
              if(evt.feature.popup){
                  cbKort.mapObj.map.removePopup(evt.feature.popup);
              }
          }});
      }

      // --------------------------------------ADDING VECTORDATA------------------------------

      // CREATING VECTOR OBJECTS
      function addAll(respObj, name, color, attr) {
        var myFeatures = [];
        // console.log(attr)
        console.log(name, color)
        console.log(name.length)
        // console.log(respObj)
        for (i=0; i<respObj.length; i++){
          attrlist={};
          for(j=0;j<attr.length-1;j++){
            attrlist[attr[j][0]] = attr[j][0];
            attrlist[attr[j][1]] = respObj[i][attr[j][1]];
          }
          attrlist['Val'] =  attr[attr.length-1][1];

          // var coords=respObj[i]['shape_wkt']['wkt'].replace('((','').replace('))','').replace('(','').replace(')','').split(' ');
          // myFeatures.push(new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(coords[1],coords[2]),attrlist));
          myFeatures.push(new OpenLayers.Feature.Vector(new OpenLayers.Geometry.fromWKT(respObj[i]['shape_wkt']['wkt']), attrlist));
          if (i == respObj.length - 1) {
            if (name == "ds_fgk_pg_mu_ytor_bygg_bel" || name == "ds_fgk_pg_fgk_projekt_antura_p_test" ||  name == "ds_fgk_pg_asfaltbelaggningbygg_p" || name == "ds_fgk_pg_vagarbeten_p" ||   name == "ds_fgk_pg_mu_uteservering_bygg" ||   name == "ds_fgk_pg_mu_fri_for_bygg" ) {
            // if (name == "ds_fgk_pg_mu_ytor_bygg_bel" || name == "ds_fgk_pg_fgk_projekt_antura_p" ||  name == "ds_fgk_pg_vagarbeten_p" ||   name == "ds_fgk_pg_mu_ytor_bygg" ) {
              addPol(myFeatures, name, color, attr).then(selectstuff);
            } else {
              addCluster(myFeatures, name, color, attr).then(selectstuff);
            }
          }
        }
      }



      // ADDING POLYGONS
      "use strict";

      var addPol = (function() {
      var _ref = _asyncToGenerator(
        /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
          feature,
          name,
          color,
          attr
        ) {
          var style, vectorLayer;
          return regeneratorRuntime.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    style = new OpenLayers.Style({
                      pointRadius: "${radius}",
                      fillColor: color,
                      fillOpacity: 0.2,
                      // fillOpacity: 0.6,
                      strokeColor: color,
                      strokeOpacity: 1,
                      width: 3,
                      fontSize: "12px",
                      fontFamily: "Courier New, monospace",
                      fontWeight: "normal"
                    });
                    vectorLayer = new OpenLayers.Layer.Vector(name, {
                      styleMap: new OpenLayers.StyleMap({
                        default: style,
                        select: {
                          fillColor: "#8aeeef",
                          strokeColor: "#32a8a9"
                        }
                      })
                    });

                    vectorLayer.addFeatures(feature);
                    cbKort.mapObj.map.addLayer(vectorLayer);
                  // selectstuff()

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            },
            _callee,
            this
          );
        })
      );

      return function addPol(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    })();


    function _asyncToGenerator(fn) {
      return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
          function step(key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              return Promise.resolve(value).then(
                function(value) {
                  step("next", value);
                },
                function(err) {
                  step("throw", err);
                }
              );
            }
          }
          return step("next");
        });
      };
    }

      // ADDING CLUSTERS
      var addCluster = (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
        feature,
        name,
        color,
        attr
      ) {
        var style, strategy, clusters;
        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  style = new OpenLayers.Style(
                    {
                      pointRadius: "${radius}",
                      fillColor: color,
                      // fillOpacity: 0.6,
                      fillOpacity: 0.2,
                      strokeColor: color,
                      strokeWidth: "${width}",
                      strokeOpacity: 1,
                      width: 3,
                      // strokeOpacity: 0.8,
                      label: "${getLabel}",
                      fontSize: "12px",
                      fontFamily: "Courier New, monospace",
                      fontWeight: "normal"
                    },
                    {
                      context: {
                        width: function width(feature) {
                          return feature.cluster ? 2 : 1;
                        },
                        radius: function radius(feature) {
                          var pix = 2;
                          if (feature.cluster) {
                            // pix = Math.min(feature.attributes.count, 7) + 2;
                            pix = Math.min(feature.attributes.count, 20) + 2;
                          }
                          return pix;
                        },
                        getLabel: function getLabel(feature) {
                          if (feature.cluster) {
                            if (feature.cluster.length > 1) {
                              return feature.cluster.length;
                            }
                          }
                          return "";
                        }
                      }
                    }
                  );
                  strategy = new OpenLayers.Strategy.Cluster();
                  clusters = new OpenLayers.Layer.Vector(name, {
                    strategies: [strategy],
                    styleMap: new OpenLayers.StyleMap({
                      default: style,
                      select: {
                        fillColor: "#8aeeef",
                        strokeColor: "#32a8a9"
                      }
                    })
                  });

                  cbKort.mapObj.map.addLayer(clusters);
                  reset(strategy, clusters, feature);
                  console.log("done");
                // selectstuff();

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          },
          _callee,
          this
        );
      })
    );

    return function addCluster(_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  })();

  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(
              function(value) {
                step("next", value);
              },
              function(err) {
                step("throw", err);
              }
            );
          }
        }
        return step("next");
      });
    };
  }




// CHECK IN ON THIS ANOTHER TIME RT------------------
        // cbKort.mapObj.map.addLayer(clusters);
        // reset(strategy, clusters, feature);
        // console.log('done');
        // selectstuff();

      }




      function reset(strategy, clusters, features) {
        var distance = 42;
        var threshold = 1;
        strategy.distance = distance || strategy.distance;
        strategy.threshold = threshold || strategy.threshold;
        clusters.removeFeatures(clusters.features);
        clusters.addFeatures(features);
      }




      // BUTTONs
      jq('.timetype input').click(function() {
        value = jq('input[name=timeval]:checked').val();
        if (value == '1') {
          jq('.avancerat').removeClass('hidden');
        } else {
          jq('.avancerat').addClass('hidden');
        }
      });

      jq('.centering').click(function() {
        if (jq('.customoption').hasClass('hidden')) {
          jq('.customoption').removeClass('hidden');

        } else {
          jq('.customoption').addClass('hidden');
        }
      });

      jq('.customsetting').click(function() {
        jq('.options').addClass('hidden');
        var textval = jq(this).val();
        jq('.' + textval).removeClass('hidden');
      });

      jq('input[name=layersBygg]').click(function(){
        if(cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0]){
          select=cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0];
          select.deactivate();
          cbKort.mapObj.map.removeControl(select);
          select.destroy();
        }
        jq('#name').remove();
        if(jq(this).is(':checked')){
          updatesingle(jq(this).val())
        }
        else{
          cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).val()][0])[0]);
          jq('.'+layersBygg[jq(this).val()][0]).remove();
        }
      });


      function updatesingle(value) {
        if(cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0]){
          select=cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0];
          console.log(cbKort.mapObj.map.getControlsBy("id", "Mycontrol").length)
          select.deactivate();
          cbKort.mapObj.map.removeControl(select);
          select.destroy();
          console.log(cbKort.mapObj.map.getControlsBy("id", "Mycontrol").length)
        }

        var queries = {
          "1": createInvQuery(),
          "2": createBelaggQuery(),
          "3": createBelQuery(),
          "4": createGrQuery(),
          "5": createuppQuery(),
          "6": createuppQuery() ,
          "7": createForvaltningQuery(),
          "8": createFkprojektQuery(),
          "9": createBelQuery(),
          "10": createTrafikAvQuery()
        };
        console.log('The updatesSingle is working')
        // checkedPoints = jq('input[name=points]:checked').val
        // console.log('work? ' + checkedPoints)

        if (jq('input[name=layersBygg][value="' + value + '"]').is(':checked')) {
          console.log('checked' + value)
          console.log('The updatesSingle is working2')
          // console.log('query' - queries)

          cbKort.getSession().getDatasource(layersBygg[value][0]).executeSMQL(
            queries[value][0],
            function(resp) {
              addAll(resp, layersBygg[value][0], layersBygg[value][1], layersBygg[value][2]);
              console.log(layersBygg)
              console.log(queries)
            });
        } else {
          console.log('Input checks not found')
        }
      }

      jq('input[name=graphs]').click(function() {
        if (jq(this).is(':checked')) {
          jq('.chartcontainer').css('visibility', 'visible')
        } else {
          jq('.chartcontainer').css('visibility', 'hidden')
        }
      });

      jq('.querytag').change(function() {
        if (cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).attr('value')][0])[0]) {
          cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).attr('value')][0])[0]);
        }
        jq('.' + layersBygg[jq(this).attr('value')][0]).remove();
        updatesingle(jq(this).attr('value'));
      });

      jq('button[name=gr]').click(function() {
        if (cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).attr('value')][0])[0]) {
          cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).attr('value')][0])[0]);
        }
        jq('.' + layersBygg[jq(this).attr('value')][0]).remove();
        updatesingle(jq(this).attr('value'));
      });

      jq('.updateButton').click(function() {
        removeAllLayers();
        jq('.chartcontainer').remove();
        jq('input[name=layersBygg]:checked').each(function() {
          updatesingle(jq(this).val());

        });
      });

      function removeAllLayers() {
        if(cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0]){
          select=cbKort.mapObj.map.getControlsBy("id", "Mycontrol")[0];
          console.log(cbKort.mapObj.map.getControlsBy("id", "Mycontrol"))
          select.deactivate();
          cbKort.mapObj.map.removeControl(select);
          select.destroy();
        }
        for (i = 1; i < 6; i++) {
          if (cbKort.mapObj.map.getLayersByName(layersBygg[String(i)][0])[0]) {
            cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layersBygg[String(i)][0])[0]);
          }
        }
        //   jq('input[name=layersBygg]:checked').each(function() {
        //   console.log(jq(this).val())
        //   console.log(layersBygg[jq(this).val()][0])
        //   if (cbKort.mapObj.map.getLayersByName(layersBygg[String(jq(this).val())][0])[0]) {
        //     cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layersBygg[String(jq(this).val())][0])[0]);
        //   }
        // });
      }

      // SEARCH
      jq('input[name=invname]').keyup(function() {
          jq('.invname').empty();
          if (jq('input[name=invname]').val().length > 0) {
            cbKort.getSession().getDatasource("ds_fgk_pg_fgk_projekt_antura_p_test").executeSMQL(
            // cbKort.getSession().getDatasource("ds_fgk_pg_fgk_projekt_antura_p").executeSMQL(
              'select projid from this where projid like \'' + jq('input[name=invname]').val() + '\'+\'%\' ',
              function(resp) {
                if (resp.length > 0) {
                  if (jq('.invname').hasClass('hidden')) {
                    jq('.invname').removeClass('hidden');
                  }
                  for (i = 0; i < resp.length; i++) {
                    jq(".invname").append("<p class='inline invnamechoice' value=\"1\">" + resp[i]["projid"] + "</p><br>");
                  }
                  jq('.invnamechoice').click(function() {
                    jq('input[name=invname]').val(jq(this).text());
                    jq('.invname').addClass('hidden');
                    if (cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).attr('value')][0])[0]) {
                      cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).attr('value')][0])[0]);
                    }
                    jq('.' + layersBygg[jq(this).attr('value')][0]).remove();
                    updatesingle(jq(this).attr('value'));
                  });
                } else {
                  jq('.invname').addClass('hidden');
                }
              });
          } else {
            jq('.invname').addClass('hidden');
            if (cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).attr('num')][0])[0]) {
              cbKort.mapObj.map.removeLayer(cbKort.mapObj.map.getLayersByName(layersBygg[jq(this).attr('num')][0])[0]);
            }
            updatesingle(jq(this).attr('num'));
          }
        });

        function createcheckboxquery(varlist) {
          var currentquery = '';

          if (jq('input[name="' + varlist[0] + 'alla"]').is(':checked')) {
            currentquery = '';
          } else {
            jq('input[name=' + varlist[0] + ']:checked').each(function() {
              currentquery += ' ' + varlist[1] + '="' + jq(this).val() + '" OR ';
            });
            currentquery = ' AND (' + currentquery.slice(0, -4) + ')';
          }
          return currentquery
          // return currentquery
        }

        function createGrQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          var datequery = " slutdatum>=\"" + fromdate + "\" and startdatum<=\"" + todate + "\"";
          var query = "select * from this where " + datequery
          // console.log('Gravning - ' + query)
          return [query]
        }

        function createFelPagaendeQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          var datequery = " datum_registrerade>=\"" + fromdate + "\"";
          var query = "select * from this where " + datequery
          // console.log('Ongoing felanmalan - ' + query)
          return [query]
        }

        function createBelQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '');
          var todate = jq('.last_date').val().replace(/-/g, '');
          var datequery = " startdatum_bygg<=\"" + todate + "\" and slutdatum_bygg>=\"" + fromdate + "\"";
          var query = "select * from this where" + datequery;
          window.console.log('Bel: ' + query + '  '  + todate);

          return [query]
        }

        function createUteQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '');
          var todate = jq('.last_date').val().replace(/-/g, '');
          var datequery = " datumfrom2<=\"" + todate + "\" and datumtom2>=\"" + fromdate + "\"";
          var query = "select * from this where" + datequery;
          console.log('Ute: ' + query);
          return [query]
        }

        function createSynPagaendeQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          var datequery = " datum_registrerade>=\"" + fromdate + "\"";
          var query = "select * from this where " + datequery;
          // console.log('Ongoing felanmalan - ' + query)
          return [query]
        }

        function createuppQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          // var datequery="(datumfrom<=\""+fromdate+"\" and datumfrom>=\""+todate+"\")";
          var datequery = " startdatum_bygg<=\"" + todate + "\" and slutdatum_bygg>=\"" + fromdate + "\"";
          query = "select * from this where " + datequery
          // var query="select * from this where (datumfrom<='20150101' and datumtom>='20150112')"
          // console.log('TA - ' + query)
          return [query]
        }

        function createBelaggQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          // var datequery="(datumfrom<=\""+fromdate+"\" and datumfrom>=\""+todate+"\")";
          var datequery = " startdatum<=\"" + todate + "\" and slutdatum>=\"" + fromdate + "\"";
          query = "select * from this where " + datequery;
          // var query2 = query.replace('*', 'count(fas) as antal,fas as cat') + ' group by fas';
          return [query]
        }

        function createArrangemangQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          // var datequery="(datumfrom<=\""+fromdate+"\" and datumfrom>=\""+todate+"\")";
          var datequery = " startdatum2<=\"" + todate + "\" and slutdatum2>=\"" + fromdate + "\"";
          query = "select * from this where " + datequery;
          // var query2 = query.replace('*', 'count(fas) as antal,fas as cat') + ' group by fas';
          return [query]
        }

        function createTrafikAvQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          // var datequery="(datumfrom<=\""+fromdate+"\" and datumfrom>=\""+todate+"\")";
          var datequery = "startdatum2<=\"" + todate + "\" and slutdatum2>=\"" + fromdate + "\"";
          query = "select * from this where " + datequery;
          // var query2 = query.replace('*', 'count(fas) as antal,fas as cat') + ' group by fas';
          return [query]
        }


        function createForvaltningQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          // var datequery="(datumfrom<=\""+fromdate+"\" and datumfrom>=\""+todate+"\")";
          var datequery = "startdatum2<=\"" + todate + "\" and slutdatum2>=\"" + fromdate + "\"";
          var datequery = "startdatum2<=\"" + todate + "\" and slutdatum2>=\"" + fromdate + "\"";
          query = "select * from this where " + datequery;
          // console.log('Förvaltning - ' + query)
          // var query2 = query.replace('*', 'count(fas) as antal,fas as cat') + ' group by fas';
          return [query]
        }

        function createFkprojektQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
          // var datequery="(datumfrom<=\""+fromdate+"\" and datumfrom>=\""+todate+"\")";
          var datequery = "startdatum2<=\"" + todate + "\" and slutdatum2>=\"" + fromdate + "\"";
          query = "select * from this where " + datequery;
          // console.log('Fast - ' + query)
          // var query2 = query.replace('*', 'count(fas) as antal,fas as cat') + ' group by fas';
          return [query]
        }

        function createInvQuery() {
          var fromdate = jq('.init_date').val().replace(/-/g, '')
          var todate = jq('.last_date').val().replace(/-/g, '')
           // var datequery = "(startdatum2>=\"" + fromdate + "\" and slutdatum2<=\"" + todate + "\")";
          var datequery = "aktivitetens_startdatum<=\"" + todate + "\" and aktivitetens_slutdatum>=\"" + fromdate + "\"";
          var query = "select * from this where " + datequery;
          // var query = "select * from this";
          console.log('Antura4 - ' + query)
          var phase=jq('.phase').val();
          var kategori=jq('.kategori').val();

          // --------------------------------drop down kod -------------------------
                var port=jq('.port').val();
                // var kategori=jq('.kategori').val();
                var query;
                var portquery='';
                // var kategoriQuery = '';
                if(port!=='Alla' && port!=='NA'){
                  portquery=' and kategori_eko=\"'+port+'\"';
                  console.log('portfolj1: '+portquery)
                  query="select * from this where "+datequery+portquery;
                }
                // if(kategori!=='Alla'){
                  // kategoriQuery=' and expl_invest_drift_pr =\"'+kategori+'\"';
                  // console.log('kategoriQuery: '+kategoriQuery)
                // }
                // if (phase=='Alla'){
                  // query="select * from this where "+datequery+portquery;
                  // query="select * from this where "+datequery+portquery+kategoriQuery;
                  // console.log('portfolj2: '+query)
                // }
                else{
                  // query="select * from this where " + datequery  + portquery + kategoriQuery;
                  query="select * from this where " + datequery  + portquery;
                  // query="select * from this where fas_antura=\""+phase+"\" and "+datequery+portquery;
                  // query="select * from this where fas_antura=\""+phase+"\" and "+datequery+portquery+kategoriQuery;
                  console.log('Phase and portfolj and kategoriQuery: '+query)
                }



                var intquery;
                // if (dtb.hasFeatures()) {
                //     var wkt = dtb.getFeatures()[0].wkt;
                //     query= query+" and intersects(shape_wkt, ToGeometry('" + wkt +"')) ";
                //   }
                var query2=query.replace('*','count(fas_antura) as antal,fas_antura as cat')+' group by fas_antura';
                console.log('INV: '+query)
                // return [query,query2]
          // window.console.log('Inv - ' + query2)
          return [query]
        }

        // });


        function createInvGraph(query2, datasource, title) {
          if (jq("." + datasource).length > 0) {
            jq("." + datasource).remove();
          }
          jq('body').append('<div class="' + datasource + ' chartcontainer"> <canvas id="bar-' + datasource + '" width="400" height="300"></canvas><i class="material-icons inline closegraph" id="" value="' + datasource + '">close</i></div>'); //eslint-disable-line
          jq('.' + datasource).draggable();
          jq('.closegraph').click(function() {
            var val = jq(this).attr('value');
            jq('.' + val).remove();
          });
          var antal = [];
          var cat = [];
          cbKort.getSession().getDatasource(datasource).executeSMQL(
            query2,
            function(resp) {

              for (i = 0; i < resp.length; i++) {
                antal.push(resp[i]["antal"]);
                cat.push(resp[i]["cat"].toLowerCase());
                if (i == resp.length - 1) {
                  // require(["https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"], function () {
                  require(["/modules/vis/js/Chart.js"], function() {
                    Chart.scaleService.updateScaleDefaults('linear', {
                      ticks: {
                        min: 0,
                      }
                    });
                    var chart = new Chart(document.getElementById("bar-" + datasource), {
                      type: 'bar',
                      data: {
                        labels: cat,
                        datasets: [{
                          label: "Antal",
                          backgroundColor: "#3e95cd",
                          data: antal
                        }]
                      },
                      options: {
                        responsive: true,
                        legend: {
                          display: false
                        },
                        title: {
                          display: true,
                          text: title
                        }
                      },
                      scales: {
                        xAxes: [{
                          ticks: {
                            stepSize: 1,
                            min: 0,
                            autoSkip: false,
                            fontSize: 6

                          }
                        }],
                        yAxes: [{
                          ticks: {
                            min: 0,
                            fontSize: 6
                          }
                        }]
                      }

                    });
                  });
                }
              }
            });
          // require(["/modules/vis/js/Chart.js"], function () {

        }


        //  }, this));
      }
    }
