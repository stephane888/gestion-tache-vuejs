((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[6],{

/***/ "1267":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4bd1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/AddNewProject.vue?vue&type=template&id=4d02948c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CRow',{staticClass:"ml-2 mt-n2 d-flex ",attrs:{"alignVertical":"center"}},[_c('CButton',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Nouveau projet'),expression:"'Nouveau projet'"}],attrs:{"size":"sm","color":"warning","shape":"pill"},on:{"click":_vm.modalAddOn}},[_c('CIcon',{staticClass:"text-white",attrs:{"name":"cilPlus","height":35,"size":"xl"}})],1),(_vm.showSideText)?_c('h6',{staticClass:"ml-1 mt-1"},[_vm._v("Nouveau projet")]):_vm._e()],1),_c('CModal',{attrs:{"size":"lg","title":"Nouveau projet","color":"warning","show":_vm.modalAdd,"footer":false},on:{"update:show":function($event){_vm.modalAdd=$event}}},[_c('PopUpContent',{ref:"child",attrs:{"formValues":_vm.formValues,"btn-state":_vm.btnStateAdd}}),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3 "},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.modalAdd = false}}},[_vm._v(" Cancel ")]),_c('CButton',{staticClass:"mx-1",attrs:{"color":_vm.btnStateAdd.state ? 'warning' : 'light'},on:{"click":_vm.PostNewProject}},[_vm._v(" Save ")])],1)])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/project/AddNewProject.vue?vue&type=template&id=4d02948c&

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__("1487");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/views/App/project/PopUpContent.vue + 5 modules
var PopUpContent = __webpack_require__("2a5d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/AddNewProject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AddNewProjectvue_type_script_lang_js_ = ({
  components: {
    PopUpContent: PopUpContent["default"]
  },
  props: {
    showSideText: {
      type: Boolean,
      default: null
    }
  },
  data: function data() {
    return {
      postData: {
        starttime: "",
        endtime: "",
        title: "",
        text: ""
      },
      btnStateAdd: {
        state: false
      },
      editorData: "<p>content...</p>",
      selected: "projet",
      modalAdd: false,
      editorConfig: {
        extraPlugins: "codesnippet",
        codeSnippet_theme: "monokai_sublime"
      },
      options: [{
        value: "projet",
        label: "Projet"
      }, {
        value: "tache",
        label: "Tâche"
      }, {
        value: "memos",
        label: "Mémos"
      }],
      formValues: {}
    };
  },
  mounted: function mounted() {},
  computed: {
    ser: function ser() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.editorData;
      newDiv.querySelectorAll("pre code").forEach(function (block) {
        lib_default.a.highlightBlock(block);
      });
      return newDiv.outerHTML;
    }
  },
  methods: {
    modalAddOn: function modalAddOn() {
      this.modalAdd = true;
      this.$refs.child.TimeNow();
    },
    PostNewProject: function PostNewProject() {
      if (this.btnStateAdd.state) {
        this.modalAdd = false;
        this.$refs.child.PostNewProject();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/project/AddNewProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_AddNewProjectvue_type_script_lang_js_ = (AddNewProjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/project/AddNewProject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_AddNewProjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddNewProject = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "5724":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1267");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "71b6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b8a6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

console.log("windon : ");
/* harmony default export */ __webpack_exports__["a"] = ({
  baseUrl: window.location.hostname === "localhost" ? "http://gestion-taches.kksa" : "",
  ModeDebug: true,
  post: function post(request) {
    var _this = this;

    var datas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolv) {
      var configs = {
        headers: {}
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_this.baseUrl + request, datas, configs).then(function (reponse) {
        //console.log("Config success : ", reponse);
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse
        });
      }).catch(function (error) {
        resolv({
          status: false,
          error: error.response
        });
      });
    });
  },
  get: function get(request) {
    var _this2 = this;

    var datas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // console.log("ssss");
    return new Promise(function (resolv) {
      var configs = {
        headers: {}
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_this2.baseUrl + request, datas, configs).then(function (reponse) {
        console.log("Config get success : ", reponse);
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse
        });
      }).catch(function (error) {
        resolv({
          status: false,
          error: error.response
        });
      });
    });
  }
});

/***/ }),

/***/ "c71b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/search/Search.vue?vue&type=template&id=208b948c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.styled ? 'searchForm' : ''},[_c('multiselect',{attrs:{"options":_vm.project,"placeholder":"Tapez une recherche","hide-selected":true,"max-height":600,"option-height":20,"show-labels":false,"searchable":true,"loading":_vm.isLoading,"track-by":"titre","internal-search":true,"showPointer":true,"label":"titre"},on:{"search-change":_vm.TypingSearch},scopedSlots:_vm._u([{key:"singleLabel",fn:function(props){return [_c('span',{staticClass:"option__desc d-inline-flex flex-column"},[_c('span',{staticClass:"option__title"},[_vm._v(_vm._s(props.option.titre))])])]}},{key:"option",fn:function(props){return [(_vm.styled)?_c('div',{staticClass:"option__desc d-inline-flex flex-column align-items-start"},[_c('span',{staticClass:"option__title mb-2"},[_c('CIcon',{staticClass:"mr-1 text-info ",attrs:{"name":"cilFolder"}}),_vm._v(" "+_vm._s(props.option.titre)+" ")],1),_c('div',{staticClass:"d-flex aling-items-center"},[_c('span',{staticClass:"text-info bg-light p-1 mt-2 h6"},[_vm._v(_vm._s(props.option.type))]),_c('router-link',{attrs:{"to":'/projets/' + props.option.idcontents}},[_c('CButton',{staticClass:"ml-4",attrs:{"variant":"ghost","color":"warning","size":"sm"}},[_c('CIcon',{attrs:{"name":"cilPencil"}})],1)],1)],1)]):_vm._e(),(!_vm.styled)?_c('div',{staticClass:"option__desc d-inline-flex flex-column align-items-start",on:{"click":function($event){return _vm.ParentSelected(props)}}},[_c('span',{staticClass:"option__title mb-2"},[_c('CIcon',{staticClass:"mr-1 text-dark ",attrs:{"name":"cilFolder"}}),_vm._v(" "+_vm._s(props.option.titre)+" "),_c('small',{staticClass:"text-dark  p-1 mt-2 ml-2 text-type"},[_vm._v(_vm._s(props.option.type))])],1)]):_vm._e()]}}]),model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/search/Search.vue?vue&type=template&id=208b948c&

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("8e5f");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./src/views/App/config/config.js
var config = __webpack_require__("b8a6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/search/Search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // register globally

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("multiselect", vue_multiselect_min_default.a);
/* harmony default export */ var Searchvue_type_script_lang_js_ = ({
  // OR register locally
  props: {
    styled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Multiselect: vue_multiselect_min_default.a
  },
  data: function data() {
    return {
      value: "",
      searchValue: "",
      options: ["list", "of", "options"],
      project: [],
      isLoading: false,
      timer: null
    };
  },
  mounted: function mounted() {//this.LoadProjectData();
  },
  watch: {},
  computed: {
    pOptions: function pOptions() {
      var tab = [];

      if (this.project.length) {
        for (var i in this.project) {
          tab.push(this.project[i].titre);
        }
      }

      return tab;
    }
  },
  methods: {
    ParentSelected: function ParentSelected(data) {
      console.log("dataSelected :", data.option);
      this.$emit("parent-selected", data.option);
    },
    // Recherche des informations 1.5s après la saisie
    TypingSearch: function TypingSearch(value) {
      if (value.length >= 2) {
        this.isLoading = true;
        this.value = value;
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function () {
          self.LoadProjectData();
        }, 1500);
      }
    },
    // Request for Loading data on DB
    LoadProjectData: function LoadProjectData() {
      var _this = this;

      this.isLoading = true;
      config["a" /* default */].post("/gestion-project/search?key=" + this.value, {
        level: 0
      }).then(function (reponse) {
        if (reponse.status) {
          if (reponse) {
            _this.project = reponse.data;
            console.log("Project search load", reponse);
          }
        }

        _this.isLoading = false;
      }).catch(function (error) {
        console.log("error", error);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/search/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&
var vue_multiselect_minvue_type_style_index_0_lang_css_ = __webpack_require__("60bc");

// EXTERNAL MODULE: ./src/views/App/search/Search.vue?vue&type=style&index=1&lang=scss&
var Searchvue_type_style_index_1_lang_scss_ = __webpack_require__("5724");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/search/Search.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Search = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "d111":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c1df");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Utilities = {
  /**
   * Prepare les données pour la sauvagarde.
   */
  formatData: function formatData(datas) {
    return new Promise(function (resolv) {
      //console.log("fdate : ", datas);
      var result = [];

      if (datas && datas.titre) {
        var ddp = moment__WEBPACK_IMPORTED_MODULE_0___default()(datas.date_depart_proposer + " " + datas.heure_debut, "YYYY-MM-DD  HH:mm").unix();
        var dfp = moment__WEBPACK_IMPORTED_MODULE_0___default()(datas.date_fin_proposer + " " + datas.heure_fin, "YYYY-MM-DD  HH:mm").unix(); //edition de la table contents

        var table1 = {
          table: "gestion_project_contents",
          fields: {
            text: datas.text,
            titre: datas.titre,
            type: datas.type
          },
          action: "update"
        };

        if (datas.idcontents) {
          table1.where = [{
            column: "idcontents",
            value: datas.idcontents
          }];
        } //Edition de la table times


        if (datas.date_depart_proposer.length && datas.date_fin_proposer.length) {
          var table2 = {
            table: "gestion_project_times",
            fields: {
              status: datas.status,
              date_depart_proposer: ddp,
              date_fin_proposer: dfp
            },
            action: "update",
            where: [{
              column: "idcontents",
              value: datas.idcontents
            }]
          };

          if (parseInt(datas.status) === 1 && (!datas.date_fin_reel || datas.date_fin_reel === "")) {
            table2.fields.date_fin_reel = moment__WEBPACK_IMPORTED_MODULE_0___default()().unix();
          }

          result.push(table2);
        } //mise à jour de la table gestion times


        result.push(table1);
        console.log("ligne", result);
      }

      resolv(result);
    });
  },

  /**
   * preparation des données pour la mise à jour de la hiérachie
   */
  formatHierarchie: function formatHierarchie(datas, nid) {
    return new Promise(function (resolv) {
      console.log("fdate : ", nid);
      var result = [];

      if (datas && datas.titre) {
        //Edition de la table times
        var table3 = {
          table: "gestion_project_hierachie",
          fields: {
            idcontentsparent: nid.id,
            idcontents: datas.idcontents,
            ordre: nid.ordre
          },
          action: "update",
          where: [{
            column: "idcontents",
            value: datas.idcontents
          }]
        }; //mise à jour de la table gestion times

        result.push(table3);
        console.log("ligne", result);
      }

      resolv(result);
    });
  },

  /**
   * un tableau
   * @param [] cards
   */
  formCard: function formCard(cards) {
    var results = [];

    for (var i in cards) {
      var card = cards[i];

      if (card.cards) {
        card.cards = this.formCard(card.cards);
      }

      results.push(_objectSpread(_objectSpread({}, card), {}, {
        open: false
      }));
    }

    return results;
  },

  /**
   * Format les données pour la creation d'un nouveau project, taches, memos, à faire , bugs ...
   * @param datas Array
   * @param idc Number, id du contenu encours.
   */
  formatAddData: function formatAddData(datas) {
    var idc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    //console.log("formatAddData datas :", datas, "\n idc", idc);
    return new Promise(function (resolv) {
      var childstable = [];
      var state = parseInt(datas.status, 10);
      level = parseInt(level, 10);

      if (datas.date_depart_proposer.length && datas.date_fin_proposer) {
        var ddp = moment__WEBPACK_IMPORTED_MODULE_0___default()(datas.date_depart_proposer + " " + datas.heure_debut, "YYYY-MM-DD  HH:mm").unix();
        var dfp = moment__WEBPACK_IMPORTED_MODULE_0___default()(datas.date_fin_proposer + " " + datas.heure_fin, "YYYY-MM-DD  HH:mm").unix();
        childstable.push({
          table: "gestion_project_times",
          fields: {
            date_depart_proposer: ddp,
            date_fin_proposer: dfp,
            status: state
          }
        });
      }

      childstable.push({
        table: "gestion_project_hierachie",
        fields: {
          idcontentsparent: idc,
          ordre: 0,
          level: level
        }
      });
      var result = [];

      if (datas && datas.titre) {
        var ligne = {
          table: "gestion_project_contents",
          fields: {
            text: datas.text,
            titre: datas.titre,
            type: datas.type
          }
        };
        ligne.childstable = {
          colum_id_name: "idcontents",
          tables: childstable
        };
        result.push(ligne);
      }

      resolv(result);
    });
  },
  // Remplissage des champs pour l’édition d’un contenu du pop-up avec les contenus à éditer
  fomatVal: function fomatVal(result, postData) {
    return new Promise(function (resolv) {
      /*
      if (result.date_depart_proposer || result.date_fin_proposer) {
        console.log("val.date_depart_proposer ", result);
      }
      /**/
      if (result.idcontents) {
        postData.idcontents = result.idcontents;
      }

      for (var i in postData) {
        if (result[i]) {
          if (i === "date_depart_proposer") {
            postData[i] = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(result[i]).format("YYYY-MM-DD");
            postData.heure_debut = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(result[i]).format("HH:mm");
          } else if (i === "date_fin_proposer") {
            postData[i] = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(result[i]).format("YYYY-MM-DD");
            postData.heure_fin = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(result[i]).format("HH:mm");
          } else {
            postData[i] = result[i];
          }
        }
      }

      resolv();
    });
  },
  // format data for deleted action
  formatDeleteData: function formatDeleteData(datas) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas && datas.titre) {
        var ligne = {
          table: "gestion_project_contents",
          fields: {}
        };
        ligne.action = "delete";

        if (datas.idcontents) {
          ligne.where = [{
            column: "idcontents",
            value: datas.idcontents
          }];
        }

        ligne.childstable = {
          tables: [{
            table: "gestion_project_times",
            fields: {},
            action: "delete",
            where: [{
              column: "idcontents",
              value: datas.idcontents
            }]
          }, {
            table: "gestion_project_hierachie",
            fields: {},
            action: "delete",
            where: [{
              column: "idcontents",
              value: datas.idcontents
            }]
          }]
        };
        result.push(ligne);
        console.log("ligne", result);
      }

      resolv(result);
    });
  },
  //client and societé format

  /**
   * preparation des données pour l'ajout d'un nouveau client
   */
  formatDataClient: function formatDataClient(datas) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas && datas.nom) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_client",
          fields: {
            nom: datas.nom,
            uid: datas.uid,
            prenom: datas.prenom,
            phone: datas.phone,
            adresse: datas.adresse,
            fonction: datas.fonction,
            idsociete: datas.idsociete
          },
          action: "update"
        };

        if (datas.idclient) {
          table1.where = [{
            column: "idclient",
            value: datas.idclient
          }];
        } //mise à jour de la table gestion times


        result.push(table1);
      }

      resolv(result);
    });
  },

  /**
   * preparation des données pour l'ajout d'une nouvelle société
   */
  formatDataSte: function formatDataSte(datas) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas && datas.nom) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_societe",
          fields: {
            nom: datas.nom,
            email: datas.email,
            phone: datas.phone,
            adresse: datas.adresse,
            siteweb: datas.siteweb
          },
          action: "update"
        };

        if (datas.idsociete) {
          table1.where = [{
            column: "idsociete",
            value: datas.idsociete
          }];
        } //mise à jour de la table societe


        result.push(table1);
      }

      resolv(result);
    });
  },
  // format data for deleted action of entitie client or societe
  formatDeleteClient: function formatDeleteClient(datas) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas.idclient) {
        var ligne = {
          table: "gestion_project_client",
          fields: {},
          action: "delete",
          where: [{
            column: "idclient",
            value: datas.idclient
          }]
        };
        result.push(ligne);
        console.log("ligne 1", result);
      } else if (datas.idsociete) {
        ligne = {
          table: "gestion_project_client",
          fields: {},
          action: "delete",
          where: [{
            column: "idsociete",
            value: datas.idsociete
          }]
        };
        var ligne1 = {
          table: "gestion_project_societe",
          fields: {},
          action: "delete",
          where: [{
            column: "idsociete",
            value: datas.idsociete
          }]
        };
        result.push(ligne);
        result.push(ligne1);
        console.log("ligne2", result);
      }

      resolv(result);
    });
  },
  // Format data for create new invoice
  formatAddInvoice: function formatAddInvoice(datas, update) {
    return new Promise(function (resolv) {
      var result = [];
      var cat = moment__WEBPACK_IMPORTED_MODULE_0___default()().unix();
      var uat = moment__WEBPACK_IMPORTED_MODULE_0___default()().unix();
      console.log("fadin :", datas);

      if (datas && datas.numero) {
        // Edition de la table contents.
        var table1 = {
          table: "gestion_project_invoice",
          fields: {
            numero: datas.numero,
            idcontents: datas.idcontents !== "" ? datas.idcontents : null,
            idclients: datas.idclients,
            objet: datas.objet,
            creaated: cat,
            proprietaire: datas.proprietaire,
            updated: uat
          }
        };

        if (update == true) {
          table1.where = [{
            column: "numero",
            value: datas.numero
          }];
          table1.action = "update";
        } //mise à jour de la table societe


        result.push(table1);
      }

      resolv(result);
    });
  },
  // suppression d’une facture
  formatDeleteInvoice: function formatDeleteInvoice(datas) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas && datas.numero) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_invoice",
          fields: {},
          action: "delete",
          where: [{
            column: "numero",
            value: datas.numero
          }]
        };
        var table2 = {
          table: "gestion_project_invoice_list",
          fields: {},
          action: "delete",
          where: [{
            column: "idinvoice",
            value: datas.numero
          }]
        }; //mise à jour de la table societe

        result.push(table2);
        result.push(table1);
      }

      resolv(result);
    });
  },
  formatAddInvoiceList: function formatAddInvoiceList(datas, update) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas && datas.titre) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_invoice_list",
          fields: {
            titre: datas.titre,
            idcontents: datas.idcontents !== "" ? datas.idcontents : null,
            description: datas.description,
            cout: datas.cout,
            idinvoice: datas.idinvoice
          }
        };

        if (update == true) {
          table1.where = [{
            column: "idinvoicelist",
            value: datas.idinvoicelist
          }];
          table1.action = "update";
        } //mise à jour de la table societe


        result.push(table1);
      }

      resolv(result);
    });
  },
  formatDeleteInvoiceList: function formatDeleteInvoiceList(datas) {
    return new Promise(function (resolv) {
      var result = [];
      console.log("fadin :", datas);

      if (datas && datas.idinvoicelist) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_invoice_list",
          fields: {},
          action: "delete",
          where: [{
            column: "idinvoicelist",
            value: datas.idinvoicelist
          }]
        }; //mise à jour de la table societe

        result.push(table1);
      }

      resolv(result);
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Utilities);

/***/ }),

/***/ "eecf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_bdb6ee02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("71b6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_bdb6ee02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheContainer_vue_vue_type_style_index_0_id_bdb6ee02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f593":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/containers/TheContainer.vue?vue&type=template&id=bdb6ee02&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-app"},[_c('TheSidebar'),_c('CWrapper',[_c('TheHeader'),_c('div',{staticClass:"c-body"},[_c('main',{staticClass:"c-main"},[_c('CContainer',{attrs:{"fluid":""}},[_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[_c('router-view',{key:_vm.$route.path})],1)],1)],1)]),_c('TheFooter')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/containers/TheContainer.vue?vue&type=template&id=bdb6ee02&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/containers/TheSidebar.vue?vue&type=template&id=9bed6404&
var TheSidebarvue_type_template_id_9bed6404_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CSidebar',{attrs:{"fixed":"","minimize":_vm.minimize,"show":_vm.show},on:{"update:show":function (value) { return _vm.$store.commit('set', ['sidebarShow', value]); }}},[_c('CSidebarBrand',{staticClass:"d-md-down-none",attrs:{"to":"/"}},[_c('CIcon',{staticClass:"c-sidebar-brand-full",attrs:{"name":"logo","size":"custom-size","height":35,"viewBox":"0 0 556 134"}}),_c('CIcon',{staticClass:"c-sidebar-brand-minimized",attrs:{"name":"logo","size":"custom-size","height":35,"viewBox":"0 0 110 134"}})],1),_c('CRenderFunction',{attrs:{"flat":"","content-to-render":_vm.$options.nav}}),_c('CSidebarMinimizer',{staticClass:"d-md-down-none",nativeOn:{"click":function($event){return _vm.$store.commit('set', ['sidebarMinimize', !_vm.minimize])}}})],1)}
var TheSidebarvue_type_template_id_9bed6404_staticRenderFns = []


// CONCATENATED MODULE: ./src/containers/TheSidebar.vue?vue&type=template&id=9bed6404&

// CONCATENATED MODULE: ./src/containers/_nav.js
/* harmony default export */ var _nav = ([{
  _name: "CSidebarNav",
  _children: [{
    _name: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashbord",
    icon: "cil-speedometer"
  }, {
    _name: "CSidebarNavItem",
    name: "Projets",
    to: "/projets",
    icon: "cil-folder"
  }, {
    _name: "CSidebarNavItem",
    name: "Clients",
    to: "/clients",
    icon: "cil-group"
  }, {
    _name: "CSidebarNavItem",
    name: "Factures",
    to: "/factures",
    icon: "cil-inbox"
  }, {
    _name: "CSidebarNavDropdown",
    name: "Theme Documentation",
    route: "/docs",
    icon: "cil-star",
    items: [{
      _name: "CSidebarNavItem",
      name: "Documentation",
      to: "/docs",
      icon: "cil-folder"
    }]
  }, // {
  //   _name: "CSidebarNavItem",
  //   name: "Dashboard",
  //   to: "/dashboard",
  //   icon: "cil-speedometer",
  //   badge: {
  //     color: "primary",
  //     text: "NEW"
  //   }
  // },
  // {
  //   _name: "CSidebarNavTitle",
  //   _children: ["Theme"]
  // },
  // {
  //   _name: "CSidebarNavItem",
  //   name: "Colors",
  //   to: "/theme/colors",
  //   icon: "cil-drop"
  // },
  // {
  //   _name: "CSidebarNavItem",
  //   name: "Typography",
  //   to: "/theme/typography",
  //   icon: "cil-pencil"
  // },
  // {
  //   _name: "CSidebarNavTitle",
  //   _children: ["Components"]
  // },
  // {
  //   _name: "CSidebarNavDropdown",
  //   name: "Base",
  //   route: "/base",
  //   icon: "cil-puzzle",
  //   items: [
  //     {
  //       name: "Breadcrumbs",
  //       to: "/base/breadcrumbs"
  //     },
  //     {
  //       name: "Cards",
  //       to: "/base/cards"
  //     },
  //     {
  //       name: "Carousels",
  //       to: "/base/carousels"
  //     },
  //     {
  //       name: "Collapses",
  //       to: "/base/collapses"
  //     },
  //     {
  //       name: "Forms",
  //       to: "/base/forms"
  //     },
  //     {
  //       name: "Jumbotrons",
  //       to: "/base/jumbotrons"
  //     },
  //     {
  //       name: "List Groups",
  //       to: "/base/list-groups"
  //     },
  //     {
  //       name: "Navs",
  //       to: "/base/navs"
  //     },
  //     {
  //       name: "Navbars",
  //       to: "/base/navbars"
  //     },
  //     {
  //       name: "Paginations",
  //       to: "/base/paginations"
  //     },
  //     {
  //       name: "Popovers",
  //       to: "/base/popovers"
  //     },
  //     {
  //       name: "Progress Bars",
  //       to: "/base/progress-bars"
  //     },
  //     {
  //       name: "Switches",
  //       to: "/base/switches"
  //     },
  //     {
  //       name: "Tables",
  //       to: "/base/tables"
  //     },
  //     {
  //       name: "Tabs",
  //       to: "/base/tabs"
  //     },
  //     {
  //       name: "Tooltips",
  //       to: "/base/tooltips"
  //     }
  //   ]
  // },
  // {
  //   _name: "CSidebarNavDropdown",
  //   name: "Buttons",
  //   route: "/buttons",
  //   icon: "cil-cursor",
  //   items: [
  //     {
  //       name: "Buttons",
  //       to: "/buttons/standard-buttons"
  //     },
  //     {
  //       name: "Button Dropdowns",
  //       to: "/buttons/dropdowns"
  //     },
  //     {
  //       name: "Button Groups",
  //       to: "/buttons/button-groups"
  //     },
  //     {
  //       name: "Brand Buttons",
  //       to: "/buttons/brand-buttons"
  //     }
  //   ]
  // },
  // {
  //   _name: "CSidebarNavItem",
  //   name: "Charts",
  //   to: "/charts",
  //   icon: "cil-chart-pie"
  // },
  // {
  //   _name: "CSidebarNavDropdown",
  //   name: "Icons",
  //   route: "/icons",
  //   icon: "cil-star",
  //   items: [
  //     {
  //       name: "CoreUI Icons",
  //       to: "/icons/coreui-icons",
  //       badge: {
  //         color: "info",
  //         text: "NEW"
  //       }
  //     },
  //     {
  //       name: "Brands",
  //       to: "/icons/brands"
  //     },
  //     {
  //       name: "Flags",
  //       to: "/icons/flags"
  //     }
  //   ]
  // },
  // {
  //   _name: "CSidebarNavDropdown",
  //   name: "Notifications",
  //   route: "/notifications",
  //   icon: "cil-bell",
  //   items: [
  //     {
  //       name: "Alerts",
  //       to: "/notifications/alerts"
  //     },
  //     {
  //       name: "Badges",
  //       to: "/notifications/badges"
  //     },
  //     {
  //       name: "Modals",
  //       to: "/notifications/modals"
  //     }
  //   ]
  // },
  {
    _name: "CSidebarNavDivider",
    _class: "m-2"
  }, {
    _name: "CSidebarNavTitle",
    _children: ["Extras"]
  }, {
    _name: "CSidebarNavDropdown",
    name: "Pages",
    route: "/pages",
    icon: "cil-star",
    items: [{
      name: "Login",
      to: "/pages/login"
    }, {
      name: "Register",
      to: "/pages/register"
    }, {
      name: "Error 404",
      to: "/pages/404"
    }, {
      name: "Error 500",
      to: "/pages/500"
    }]
  } // {
  //   _name: "CSidebarNavItem",
  //   name: "Download CoreUI",
  //   href: "http://coreui.io/vue/",
  //   icon: { name: "cil-cloud-download", class: "text-white" },
  //   _class: "bg-success text-white",
  //   target: "_blank"
  // },
  // {
  //   _name: "CSidebarNavItem",
  //   name: "Try CoreUI PRO",
  //   href: "http://coreui.io/pro/vue/",
  //   icon: { name: "cil-layers", class: "text-white" },
  //   _class: "bg-danger text-white",
  //   target: "_blank"
  // }
  ]
}]);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/containers/TheSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TheSidebarvue_type_script_lang_js_ = ({
  name: "TheSidebar",
  nav: _nav,
  computed: {
    show: function show() {
      return this.$store.state.sidebarShow;
    },
    minimize: function minimize() {
      return this.$store.state.sidebarMinimize;
    }
  }
});
// CONCATENATED MODULE: ./src/containers/TheSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var containers_TheSidebarvue_type_script_lang_js_ = (TheSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/containers/TheSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  containers_TheSidebarvue_type_script_lang_js_,
  TheSidebarvue_type_template_id_9bed6404_render,
  TheSidebarvue_type_template_id_9bed6404_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TheSidebar = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/containers/TheHeader.vue?vue&type=template&id=5824dbf4&
var TheHeadervue_type_template_id_5824dbf4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CHeader',{attrs:{"fixed":"","with-subheader":"","light":""}},[_c('CToggler',{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{"click":function($event){return _vm.$store.commit('toggleSidebarMobile')}}}),_c('CToggler',{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{"click":function($event){return _vm.$store.commit('toggleSidebarDesktop')}}}),_c('CHeaderNav',[_c('CButton',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:({
        content: 'Afficher les dernieres taches visités.',
        html: true,
        placement: 'bottom-start'
      }),expression:"{\n        content: 'Afficher les dernieres taches visités.',\n        html: true,\n        placement: 'bottom-start'\n      }"}],attrs:{"size":"sm","variant":"ghost","color":"warning"},on:{"click":function($event){_vm.modalLast = !_vm.modalLast}}},[_c('CIcon',{attrs:{"name":"cilEyedropper"}})],1),_c('CButton',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:({
        content: 'Afficher les taches encours.',
        html: true,
        placement: 'bottom-start'
      }),expression:"{\n        content: 'Afficher les taches encours.',\n        html: true,\n        placement: 'bottom-start'\n      }"}],attrs:{"size":"sm","variant":"ghost","color":"warning"},on:{"click":function($event){_vm.tacheEncoursModal = !_vm.tacheEncoursModal}}},[_c('CIcon',{attrs:{"name":"cil-settings"}})],1)],1),_c('CHeaderBrand',{staticClass:"mx-auto d-lg-none",attrs:{"to":"/"}},[_c('CIcon',{attrs:{"name":"logo","height":"48","alt":"Logo"}})],1),_c('CHeaderNav',{staticClass:"mr-5 ml-sm-auto mt-1"},[_c('AddNewProject')],1),_c('CSubheader',{staticClass:"px-3"},[_c('BreadCrumb'),_c('div',{staticClass:"ml-auto d-flex flex-wrap aling-items-end"},[_c('SSearch',{attrs:{"styled":true}}),_c('CDropdown',{staticClass:"ml-sm-n5 mt-2",attrs:{"color":"dark","toggler-text":"Options"}},[_c('CDropdownItem',[_vm._v("name")]),_c('CDropdownItem',[_vm._v("statut")]),_c('CDropdownItem',[_vm._v("Role")]),_c('CDropdownDivider'),_c('CDropdownItem',[_vm._v("date")])],1)],1)],1),_c('CModal',{attrs:{"title":"Last Updated","color":"light","size":"lg","show":_vm.modalLast},on:{"update:show":function($event){_vm.modalLast=$event}}},[_c('CDataTable',{staticClass:"m-0  table-borderless ",attrs:{"hover":"","responsive":"","items":_vm.itemsTache,"fields":_vm.tableFields,"header":false,"cleaner":"","table-filter":"","items-per-page-select":"","items-per-page":10,"pagination":""},scopedSlots:_vm._u([{key:"user",fn:function(ref){
      var item = ref.item;
return _c('td',{},[_c('CLink',{staticClass:"text-decoration-none",attrs:{"to":{
            path: 'projets/' + item.idcontents
          }}},[_c('div',{on:{"click":function($event){_vm.modalLast = !_vm.modalLast}}},[_vm._v(" "+_vm._s(item.titre)+" ")]),_c('div',{staticClass:"small text-muted mt-1"},[_c('span',[[_vm._v("New")],(false)?undefined:_vm._e()],2),_vm._v(" | Crée le: "+_vm._s(item.created_at)+" ")])])],1)}},{key:"usage",fn:function(ref){
          var item = ref.item;
return _c('td',{},[_c('div',{staticClass:"clearfix"},[_c('div',{staticClass:"float-left"}),_c('div',{staticClass:"float-right"},[_c('small',{staticClass:"text-bold"},[_c('strong',[_vm._v("Updated: ")]),_vm._v(" "+_vm._s(item.update_at))])])])])}},{key:"activity",fn:function(ref){
          var item = ref.item;
return _c('td',{},[_c('CRow',{staticClass:"ml-4 d-flex justify-content-arround flex-nowrap"},[_c('CLink',{staticClass:"mx-3",attrs:{"color":"primary","variant":"ghost","shape":"pill","size":"sm"}},[_vm._v(" "+_vm._s(item.type)+" ")])],1)],1)}}])}),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"})])],2),_c('TacheEncours',{attrs:{"modalLast":_vm.tacheEncoursModal},on:{"update-modal":_vm.UpdateModal}})],1)}
var TheHeadervue_type_template_id_5824dbf4_staticRenderFns = []


// CONCATENATED MODULE: ./src/containers/TheHeader.vue?vue&type=template&id=5824dbf4&

// EXTERNAL MODULE: ./src/views/App/search/Search.vue + 4 modules
var Search = __webpack_require__("c71b");

// EXTERNAL MODULE: ./src/views/App/project/AddNewProject.vue + 4 modules
var AddNewProject = __webpack_require__("4bd1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Steph/Crumb/BreadCrumb.vue?vue&type=template&id=c59d2570&
var BreadCrumbvue_type_template_id_c59d2570_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CBreadcrumb',{staticClass:"border-0 mb-0 ",attrs:{"items":_vm.links}},[_vm._t("default")],2)],1)}
var BreadCrumbvue_type_template_id_c59d2570_staticRenderFns = []


// CONCATENATED MODULE: ./src/Steph/Crumb/BreadCrumb.vue?vue&type=template&id=c59d2570&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Steph/Crumb/CustomCBreadcrumb.vue?vue&type=template&id=66cb9c94&
var CustomCBreadcrumbvue_type_template_id_66cb9c94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ol',{staticClass:"breadcrumb",attrs:{"doc-title":_vm.docTitle}},[_vm._l((_vm.linkItems),function(item,index){return _c('li',{key:index,class:[item.addClasses, _vm.sharedClasses, _vm.addLinkClasses],attrs:{"role":"presentation"}},[_c('CLink',_vm._b({},'CLink',Object.assign({}, item, { addClasses: null, text: null }),false),[_vm._v(" "+_vm._s(item.text)+" ")])],1)}),(_vm.lastItem && _vm.lastItem.to.length)?_c('li',{class:_vm.lastItemClasses,attrs:{"role":"presentation"}},[_c('CLink',_vm._b({},'CLink',Object.assign({}, _vm.lastItem, { addClasses: null, text: null }),false),[_vm._v(" "+_vm._s(_vm.lastItem.text)+" ")])],1):(_vm.lastItem)?_c('li',{class:_vm.lastItemClasses,attrs:{"role":"presentation"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.lastItem.text)}})]):_vm._e(),_vm._t("default")],2)}
var CustomCBreadcrumbvue_type_template_id_66cb9c94_staticRenderFns = []


// CONCATENATED MODULE: ./src/Steph/Crumb/CustomCBreadcrumb.vue?vue&type=template&id=66cb9c94&

// EXTERNAL MODULE: ./node_modules/@coreui/vue/src/components/link/CLink.vue + 3 modules
var CLink = __webpack_require__("7559");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Steph/Crumb/CustomCBreadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CustomCBreadcrumbvue_type_script_lang_js_ = ({
  name: "CBreadcrumb",
  components: {
    CLink: CLink["a" /* default */]
  },
  props: {
    items: Array,
    addClasses: [String, Array, Object],
    addLinkClasses: [String, Array, Object],
    addLastItemClasses: [String, Array, Object]
  },
  data: function data() {
    return {
      siteName: "Gestion des projets"
    };
  },
  computed: {
    lastItem: function lastItem() {
      return this.items ? this.items[this.items.length - 1] : null;
    },
    linkItems: function linkItems() {
      return this.items ? this.items.slice(0, -1) : [];
    },
    sharedClasses: function sharedClasses() {
      return [this.addClasses, "breadcrumb-item"];
    },
    lastItemClasses: function lastItemClasses() {
      return ["active", this.lastItem.addClasses, this.sharedClasses, this.addLastItemClasses];
    },
    docTitle: function docTitle() {
      if (this.lastItem) {
        document.title = this.lastItem.text + " | " + this.siteName;
        return document.title;
      } else {
        return this.siteName;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/Steph/Crumb/CustomCBreadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Crumb_CustomCBreadcrumbvue_type_script_lang_js_ = (CustomCBreadcrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Steph/Crumb/CustomCBreadcrumb.vue





/* normalize component */

var CustomCBreadcrumb_component = Object(componentNormalizer["a" /* default */])(
  Crumb_CustomCBreadcrumbvue_type_script_lang_js_,
  CustomCBreadcrumbvue_type_template_id_66cb9c94_render,
  CustomCBreadcrumbvue_type_template_id_66cb9c94_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CustomCBreadcrumb = (CustomCBreadcrumb_component.exports);
// EXTERNAL MODULE: ./src/views/App/config/config.js
var config = __webpack_require__("b8a6");

// CONCATENATED MODULE: ./src/Steph/Crumb/Utilities.js

var Utilities = {
  /**
   * Recupere les projets parents pour le project en cours.
   */
  GetCrumbs: function GetCrumbs(project) {
    var _this = this;

    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return new Promise(function (resolv) {
      config["a" /* default */].post("/gestion-project/select/get-crumb", project).then(function (response) {
        if (response.status) {
          response.data.reverse();
          response.data.forEach(function (item) {
            result.push(_this.formatTocrumb(item));
          });
          console.log(" customRoute :: ", result);
          resolv(result);
        } else {
          resolv(result);
        }
      });
    });
  },
  formatTocrumb: function formatTocrumb(project) {
    return {
      to: "/projets/" + project.idcontents,
      text: project.titre
    };
  }
};
/* harmony default export */ var Crumb_Utilities = (Utilities);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Steph/Crumb/BreadCrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//import CBreadcrumb from "@coreui/vue/src/components/breadcrumb/CBreadcrumb";


/* harmony default export */ var BreadCrumbvue_type_script_lang_js_ = ({
  name: "Breadcrumb",
  components: {
    CBreadcrumb: CustomCBreadcrumb
  },
  props: {
    addClasses: [String, Array, Object],
    addLinkClasses: [String, Array, Object],
    addLastItemClasses: [String, Array, Object]
  },
  data: function data() {
    return {
      customRoute: []
    };
  },
  computed: {
    items: function items() {
      var trueRoute = "";

      if (this.$route.params.idcontents) {
        trueRoute = "/projets";
      }

      var routes = this.$route.matched.filter(function (route) {
        return route.name || route.meta && route.meta.label;
      }); // Ajout des routes par defaut.

      return routes.map(function (route) {
        var meta = route.meta || {};
        return {
          to: trueRoute,
          text: meta.label || route.name
        };
      });
    },
    props: function props() {
      return {
        items: this.links,
        addClasses: this.addClasses,
        addLinkClasses: this.addLinkClasses,
        addLastItemClasses: this.addLastItemClasses
      };
    },
    links: function links() {
      var elts = [];

      if (this.items.length) {
        this.items.forEach(function (item) {
          elts.push(item);
        });
      }

      if (this.customRoute.length) {
        this.customRoute.forEach(function (item) {
          elts.push(item);
        });
      }

      return elts;
    }
  },
  mounted: function mounted() {
    this.GetCustomRoute(this.$route);
  },
  watch: {
    $route: function $route(to) {
      this.GetCustomRoute(to);
    }
  },
  methods: {
    GetCustomRoute: function GetCustomRoute(to) {
      var _this = this;

      //console.log("to : ", to.params.idcontents);
      this.customRoute = [];

      if (to.params.idcontents) {
        Crumb_Utilities.GetCrumbs(to.params.idcontents).then(function (rep) {
          _this.customRoute = rep;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/Steph/Crumb/BreadCrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var Crumb_BreadCrumbvue_type_script_lang_js_ = (BreadCrumbvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Steph/Crumb/BreadCrumb.vue





/* normalize component */

var BreadCrumb_component = Object(componentNormalizer["a" /* default */])(
  Crumb_BreadCrumbvue_type_script_lang_js_,
  BreadCrumbvue_type_template_id_c59d2570_render,
  BreadCrumbvue_type_template_id_c59d2570_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BreadCrumb = (BreadCrumb_component.exports);
// EXTERNAL MODULE: ./src/views/App/config/SelectDb.js
var SelectDb = __webpack_require__("f0ae");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Steph/Header/TacheEncours.vue?vue&type=template&id=b161ac88&scoped=true&lang=html&
var TacheEncoursvue_type_template_id_b161ac88_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CModal',{attrs:{"title":"Last Updated","color":"info","size":"lg","show":_vm.modalLastStatus},on:{"update:show":function($event){_vm.modalLastStatus=$event}}},[_c('CDataTable',{staticClass:"m-0  table-borderless ",attrs:{"hover":"","responsive":"","items":_vm.itemsTache,"fields":_vm.tableFields,"header":false,"cleaner":"","table-filter":"","items-per-page-select":"","items-per-page":10,"pagination":""},scopedSlots:_vm._u([{key:"user",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('CLink',{staticClass:"text-decoration-none",attrs:{"to":{
          path: 'projets/' + item.idcontents
        }}},[_c('div',{staticClass:"small text-muted mt-1"},[_c('span',[[_vm._v("New")],(false)?undefined:_vm._e()],2),_vm._v(" | Crée le: "+_vm._s(item.created_at)+" ")])])],1)}},{key:"usage",fn:function(ref){
        var item = ref.item;
return _c('td',{},[_c('div',{staticClass:"clearfix"},[_c('div',{staticClass:"float-left"}),_c('div',{staticClass:"float-right"},[_c('small',{staticClass:"text-bold"},[_c('strong',[_vm._v("Updated: ")]),_vm._v(" "+_vm._s(item.update_at))])])])])}},{key:"activity",fn:function(ref){
        var item = ref.item;
return _c('td',{},[_c('CRow',{staticClass:"ml-4 d-flex justify-content-arround flex-nowrap"},[_c('CLink',{staticClass:"mx-3",attrs:{"color":"primary","variant":"ghost","shape":"pill","size":"sm"}},[_vm._v(" "+_vm._s(item.type)+" ")])],1)],1)}}])}),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"})])],2)}
var TacheEncoursvue_type_template_id_b161ac88_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/Steph/Header/TacheEncours.vue?vue&type=template&id=b161ac88&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Steph/Header/TacheEncours.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TacheEncoursvue_type_script_lang_js_ = ({
  name: "TacheEncours",
  props: {
    modalLast: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  components: {//
  },
  data: function data() {
    return {
      itemsTache: [],
      tableFields: [{
        key: "user",
        _style: "min-width:550px;",
        filter: false
      }, {
        key: "usage",
        _style: "min-width:200px;"
      }, {
        key: "activity",
        _style: "width:600px;"
      }]
    };
  },
  mounted: function mounted() {
    this.LoadTacheData();
  },
  watch: {//
  },
  computed: {
    modalLastStatus: {
      get: function get() {
        return this.modalLast;
      },
      set: function set(val) {
        this.$emit("update-modal", val);
      }
    }
  },
  methods: {
    LoadTacheData: function LoadTacheData() {
      var _this = this;

      this.isLoading = true;
      SelectDb["a" /* default */].SelectTacheEnours().then(function (response) {
        _this.itemsTache = response;
        _this.isLoading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/Steph/Header/TacheEncours.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_TacheEncoursvue_type_script_lang_js_ = (TacheEncoursvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Steph/Header/TacheEncours.vue





/* normalize component */

var TacheEncours_component = Object(componentNormalizer["a" /* default */])(
  Header_TacheEncoursvue_type_script_lang_js_,
  TacheEncoursvue_type_template_id_b161ac88_scoped_true_lang_html_render,
  TacheEncoursvue_type_template_id_b161ac88_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "b161ac88",
  null
  
)

/* harmony default export */ var TacheEncours = (TacheEncours_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/containers/TheHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";





/* harmony default export */ var TheHeadervue_type_script_lang_js_ = ({
  name: "TheHeader",
  components: {
    SSearch: Search["a" /* default */],
    AddNewProject: AddNewProject["a" /* default */],
    BreadCrumb: BreadCrumb,
    TacheEncours: TacheEncours //TheHeaderDropdownAccnt

  },
  data: function data() {
    return {
      modalLast: false,
      itemsTache: [],
      tableFields: [{
        key: "user",
        _style: "min-width:550px;",
        filter: false
      }, {
        key: "usage",
        _style: "min-width:200px;"
      }, {
        key: "activity",
        _style: "width:600px;"
      }],
      tacheEncoursModal: false
    };
  },
  mounted: function mounted() {
    this.LoadTacheData();
  },
  methods: {
    LoadTacheData: function LoadTacheData() {
      var _this = this;

      this.isLoading = true;
      SelectDb["a" /* default */].selectAll().then(function (response) {
        _this.itemsTache = response;
        _this.isLoading = false;
      });
    },
    UpdateModal: function UpdateModal(val) {
      this.tacheEncoursModal = val;
    }
  }
});
// CONCATENATED MODULE: ./src/containers/TheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var containers_TheHeadervue_type_script_lang_js_ = (TheHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/containers/TheHeader.vue





/* normalize component */

var TheHeader_component = Object(componentNormalizer["a" /* default */])(
  containers_TheHeadervue_type_script_lang_js_,
  TheHeadervue_type_template_id_5824dbf4_render,
  TheHeadervue_type_template_id_5824dbf4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TheHeader = (TheHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/containers/TheFooter.vue?vue&type=template&id=033d6f22&
var TheFootervue_type_template_id_033d6f22_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CFooter',{attrs:{"fixed":false}},[_c('div',[_c('a',{attrs:{"href":"https://coreui.io","target":"_blank"}},[_vm._v("CoreUI")]),_c('span',{staticClass:"ml-1"},[_vm._v("© "+_vm._s(new Date().getFullYear())+" creativeLabs.")])]),_c('div',{staticClass:"mfs-auto"},[_c('span',{staticClass:"mr-1",attrs:{"target":"_blank"}},[_vm._v("Powered by")]),_c('a',{attrs:{"href":"https://coreui.io/vue"}},[_vm._v("CoreUI for Vue")])])])}
var TheFootervue_type_template_id_033d6f22_staticRenderFns = []


// CONCATENATED MODULE: ./src/containers/TheFooter.vue?vue&type=template&id=033d6f22&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/containers/TheFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({
  name: "TheFooter"
});
// CONCATENATED MODULE: ./src/containers/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var containers_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/containers/TheFooter.vue





/* normalize component */

var TheFooter_component = Object(componentNormalizer["a" /* default */])(
  containers_TheFootervue_type_script_lang_js_,
  TheFootervue_type_template_id_033d6f22_render,
  TheFootervue_type_template_id_033d6f22_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TheFooter = (TheFooter_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/containers/TheContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var TheContainervue_type_script_lang_js_ = ({
  name: "TheContainer",
  components: {
    TheSidebar: TheSidebar,
    TheHeader: TheHeader,
    TheFooter: TheFooter
  }
});
// CONCATENATED MODULE: ./src/containers/TheContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var containers_TheContainervue_type_script_lang_js_ = (TheContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/containers/TheContainer.vue?vue&type=style&index=0&id=bdb6ee02&scoped=true&lang=css&
var TheContainervue_type_style_index_0_id_bdb6ee02_scoped_true_lang_css_ = __webpack_require__("eecf");

// CONCATENATED MODULE: ./src/containers/TheContainer.vue






/* normalize component */

var TheContainer_component = Object(componentNormalizer["a" /* default */])(
  containers_TheContainervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "bdb6ee02",
  null
  
)

/* harmony default export */ var TheContainer = __webpack_exports__["default"] = (TheContainer_component.exports);

/***/ })

}]);
//# sourceMappingURL=gestionTache.common.6.js.map