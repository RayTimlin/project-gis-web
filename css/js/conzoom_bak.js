  var conzoom = {
        dialog: null,
        dtb: null,

        show: function() {
            this.dialog = new Dialog({
                title: "Hjälpverktyg!",
                id: "myDialog"
            });
            var contentDiv = jq("<div></div>");
            contentDiv.load("/modules/conzoom/html/helpfunction.html", SpatialServer.Utils.bind(function() {
               var html = contentDiv.find(".main").children();//add 'var' later
              this.dialog.addContentHTML(html);
              //this.dialog.addButtonsHTML(buttons);
              this.dialog.showDialog();
              jq('#beginner').click(function(){
                jq('#currentguide').attr('src','/modules/conzoom/html/lorem.html');
                // jq('#currentguide').load('http://mmapdev1.intra.malmo.se/admin?command=reloadconfig #contentcontainer');
                // jq('#currentguide').attr('src','https://cityofmalmo.sharepoint.com/sites/Digitilisering');
                if(jq('#begsection').hasClass('hidecontent')){
                    jq('#begsection').removeClass('hidecontent');
                    jq('#openclosesymbolbeg').text('-');
                }
                else{
                  jq('#begsection').addClass('hidecontent');
                  jq('#openclosesymbolbeg').text('+');
                }
              });

              jq('#advanced').click(function(){
                jq('#currentguide').attr('/modules/conzoom/html/lorem.html');
                if(jq('#advsection').hasClass('hidecontent')){
                    jq('#advsection').removeClass('hidecontent');
                    jq('#openclosesymboladv').text('-');
                }
                else{
                  jq('#advsection').addClass('hidecontent');
                  jq('#openclosesymboladv').text('+');
                }
              });

              // hämtar filnamn från html som användaren klickat på
              jq('.listitem').click(function(event){
                var textdoc = jq(this).attr('name');
                jq('#currentguide').attr('src','/modules/conzoom/html/'+textdoc);
                });

                jq('#dialogmyDialog').resizable(); //eslint-disable-line
                jq('#currentguide').resizable(); //eslint-disable-line
                jq('.col-4 col-md-3 col-lg-2 navcol').resizable(); //eslint-disable-line

                  window.console.log("working");

                  //laddar data från vald div och lägger den under iframen

                  // jq('#currentguide').attr('src','/modules/conzoom/html/emptyfile.html');
                  // var contentDiv2 = jq("<div></div>");
                  // contentDiv2.load("http://mmapdev1.intra.malmo.se/admin?command=reloadconfig",function(){
                  //   html2 = contentDiv2.find("#contentcontainer").children();//add 'var' later
                  //   jq('.results').append(html2);
                  // });

                  // laddar data från div och lägger den i en annan div kan inte användas med bilder

                  // jq('#currentguide').load('http://mmapdev1.intra.malmo.se/admin?command=reloadconfig #contentcontainer');


             }, this));
        },



        testLog: function() {
                window.console.log("bussQuery");

        }
    };
