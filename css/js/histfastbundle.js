(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMap_Histfast_Dialog = require('./MMap_Histfast_Dialog');

var _MMap_Histfast_Dialog2 = _interopRequireDefault(_MMap_Histfast_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line

var MMap_histfast = function () {
  // eslint-disable-line
  function MMap_histfast(params) {
    _classCallCheck(this, MMap_histfast);

    this.config = params.config;

    this.dialog = new _MMap_Histfast_Dialog2.default({ // eslint-disable-line
      config: this.config
    });

    cbKort.events.addListener('THEME_CHANGED', this.eventListener.bind(this));
    themeActions.registerAction(this.themeAction());
    this.remove_buttons();
  }

  _createClass(MMap_histfast, [{
    key: 'themeAction',
    value: function themeAction() {
      var tooltip = this.config.tooltip;

      return new ThemeAction({
        name: 'themeaction-mmap-histfast',
        actionfunction: this.actionfunction.bind(this),
        conditionfunction: this.conditionfunction.bind(this),
        buttonoptions: {
          tooltip: tooltip,
          icon: '[module:mmap-histfast.webdir]/images/kugghjul.png'
        }
      });
    }
  }, {
    key: 'actionfunction',
    value: function actionfunction(theme, button) {
      var themeActive = theme.visible;
      themeActive ? this.dialog.showDialog() : false;
    }
  }, {
    key: 'conditionfunction',
    value: function conditionfunction(theme) {
      var t = theme.name === 'theme-mmap-histfast';
      // var t = this.config.themes[theme.name]
      if (!t) {
        return false;
      }
      return true;
    }
  }, {
    key: 'remove_buttons',
    value: function remove_buttons() {
      // eslint-disable-line
      var theme = themeActions.themegroup.getTheme('theme-mmap-histfast');
      var actions = theme.actions;
      var i = 0;
      while (i < actions.length) {
        if (actions[i].name !== 'themeaction-mmap-histfast' && actions[i].name !== 'metadata') {
          theme.actions.splice(i, 1);
          i--;
        }
        i++;
      }
    }
  }, {
    key: 'eventListener',
    value: function eventListener(evt, theme) {
      var visible = theme.visible;
      var themeName = theme.name;
      if (themeName === 'theme-mmap-histfast' && !visible) {
        this.dialog.clear();
        this.dialog.closeDialog();
      } else if (themeName === 'theme-mmap-histfast' && visible) {
        this.dialog.init({
          config: this.config
        });
      }
    }
  }]);

  return MMap_histfast;
}();

exports.default = MMap_histfast;

},{"./MMap_Histfast_Dialog":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MMap_Histfast_Dialog = function () {
  // eslint-disable-line
  function MMap_Histfast_Dialog(params) {
    _classCallCheck(this, MMap_Histfast_Dialog);

    this.config = params.config;
    this._dialog = null;
    this._date = null;
  }

  _createClass(MMap_Histfast_Dialog, [{
    key: 'init',
    value: function init() {
      if (!this._dialog) {
        var title = this.config.title;
        this._dialog = new Dialog({
          title: title,
          id: 'wms-histfast',
          width: 250,
          resizable: false,
          closeHandler: SpatialMap.Function.bind(this.closeHandler, this)
        });
      }
      var html = '\n      <div class="histfast-content" style="padding:10px 10px;">\n        <label for="histfast-slider" id="histfast-slider-label"></label><br><br>\n        <input style="width:100%;" id="histfast-slider" type="range" min="0" max="1" value="1" id="fader" />\n      </div>\n    ';
      this._dialog.addContentHTML(html);
      this.showDialog();

      var now = new Date();
      var start_year = now.getFullYear() - this.config.start_value; // eslint-disable-line
      var start_val = this.cleanNbr(start_year) + '-' + this.cleanNbr(now.getMonth() + 1) + '-' + this.cleanNbr(now.getDate()); // eslint-disable-line

      jq('#histfast-slider-label').html(start_val);
      this.min_value = this.config.min_value;
      jq('#histfast-slider').attr('min', this.toTimeStamp(this.min_value));
      jq('#histfast-slider').attr('max', this.toTimeStamp('-1'));
      jq('#histfast-slider').attr('step', 24 * 60 * 60 * 1000); // Steps of one week
      jq('#histfast-slider').attr('value', this.toTimeStamp(start_val));
      jq('#histfast-slider').on('change', this._change.bind(this));

      var url = this.config.wms.url;
      var layer = this.config.wms.layer;
      var srs = this.config.wms.srs;
      this.wms_layer = new OpenLayers.Layer.WMS('Histfast_WMS', url, {
        layers: layer,
        SRS: srs,
        transparent: true,
        format: 'image/png8',
        CQL_FILTER: this.fromTimeStamp() + ' >= fromdate AND ' + this.fromTimeStamp() + ' < todate'
      }, {
        singleTile: true,
        ratio: 1
      });
      cbKort.mapObj.map.addLayer(this.wms_layer);
    }
  }, {
    key: '_change',
    value: function _change(evt) {
      var timestamp = parseInt(jq('#histfast-slider').val(), 0);
      var d = new Date(timestamp);
      var prettyDate = d.getFullYear() + '-' + this.cleanNbr(d.getMonth() + 1) + '-' + this.cleanNbr(d.getDate());
      jq('#histfast-slider-label').html(prettyDate);
      this.wms_layer.mergeNewParams({
        CQL_FILTER: this.fromTimeStamp() + ' >= fromdate AND ' + this.fromTimeStamp() + ' < todate'
      });
    }
  }, {
    key: 'showDialog',
    value: function showDialog() {
      this._dialog.showDialog();
    }
  }, {
    key: 'closeDialog',
    value: function closeDialog() {
      this._dialog.closeDialog();
    }
  }, {
    key: 'clear',
    value: function clear() {
      cbKort.mapObj.map.removeLayer(this.wms_layer);
    }
  }, {
    key: 'toTimeStamp',
    value: function toTimeStamp(date) {
      if (date === '-1') {
        return new Date().getTime();
      } else {
        var d = date.split('-');
        return new Date(parseInt(d[0], 10), parseInt(d[1], 10) - 1, parseInt(d[2], 10)).getTime();
      }
    }
  }, {
    key: 'fromTimeStamp',
    value: function fromTimeStamp() {
      var d;
      var timestamp = parseInt(jq('#histfast-slider').val(), 0);
      d = new Date(timestamp);
      return d.getFullYear() + '' + this.cleanNbr(d.getMonth() + 1) + '' + this.cleanNbr(d.getDate());
    }
  }, {
    key: 'cleanNbr',
    value: function cleanNbr(nbr) {
      return nbr > 9 ? nbr : '0' + nbr;
    }
  }, {
    key: 'closeHandler',
    value: function closeHandler() {}
  }]);

  return MMap_Histfast_Dialog;
}();

exports.default = MMap_Histfast_Dialog;

},{}],3:[function(require,module,exports){
(function (global){
'use strict';

var _MMap_Histfast = require('./MMap_Histfast');

var _MMap_Histfast2 = _interopRequireDefault(_MMap_Histfast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mMap = global.mMap || {};

console.log('Histfast module version: 0.2.1');

// eslint-disable-line

mMap.MMap_histfast = _MMap_Histfast2.default; // eslint-disable-line

global.mMap = mMap;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./MMap_Histfast":1}]},{},[1,2,3]);
