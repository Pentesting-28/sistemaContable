(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Dialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Dialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["active", "editedItem", "edit", "image", "register"],
  data: function data() {
    return {
      img_preview: '',
      img_expand: '',
      loading: false
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? 'Datos de la empresa' : 'Editar empresa';
    },
    ItemsRole: function ItemsRole() {
      return this.$store.getters["role/GET_ROLE"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  methods: {
    close: function close() {
      this.$emit("dialog:change", "cerrar");
    },
    onFileSelected: function onFileSelected(event) {
      var _this = this;

      if (event === undefined) {
        this.img_expand = false;
        this.img_preview = '';
        return;
      }

      var reader = new FileReader(); // const imgtag = document.getElementById("photopreview");
      // imgtag.title = event.name;

      reader.onload = function (readEvent) {
        _this.img_preview = readEvent.target.result;
        _this.img_expand = true;
      };

      reader.onerror = function (event) {
        console.warn(event);
        reader.abort();
      };

      reader.onabort = function () {
        _this.img_preview = '';
        _this.img_expand = false;
      };

      reader.readAsDataURL(event);
    },
    readFile: function readFile(evt) {
      var vx = this;
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        vx.editedItem.Img = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    save: function save() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, response, formData, _request, _response, e, list, prop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //   editar
                _this2.loading = true;

                if (!(_this2.edit === true)) {
                  _context.next = 17;
                  break;
                }

                //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                request = {
                  id: _this2.editedItem.id,
                  ruc: _this2.editedItem.ruc,
                  name: _this2.editedItem.name,
                  phone: _this2.editedItem.phone,
                  address: _this2.editedItem.address,
                  photo: _this2.editedItem.photo
                };
                _context.prev = 3;
                _context.next = 6;
                return _this2.$store.dispatch("company/UPDATED", request);

              case 6:
                response = _context.sent;

                _this2.$refs.obs.reset();

                _this2.$emit("dialog:change", "editar"); // this.close()


                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);
                _this2.loading = false;

              case 15:
                _context.next = 39;
                break;

              case 17:
                _context.prev = 17;
                formData = new FormData();
                formData.append("ruc", _this2.editedItem.ruc);
                formData.append("name", _this2.editedItem.name);
                formData.append("phone", _this2.editedItem.phone);
                formData.append("address", _this2.editedItem.address);
                formData.append("photo", _this2.editedItem.photo);
                _request = {
                  formData: formData
                };
                _context.next = 27;
                return _this2.$store.dispatch("company/REGISTER", _request);

              case 27:
                _response = _context.sent;

                _this2.$refs.obs.reset();

                _this2.$emit("dialog:change", "registro"); // Swal.fire({
                //   icon: 'success',
                //   title: 'Empresa creada con exito',
                // })
                // this.close()


                _context.next = 39;
                break;

              case 32:
                _context.prev = 32;
                _context.t1 = _context["catch"](17);
                _this2.loading = false;
                e = _context.t1.response.data.message;
                list = "";

                for (prop in e) {
                  list = list + "<li>".concat(e[prop][0], "</li>");
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: list
                });

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11], [17, 32]]);
      }))();
    },
    saveImage: function saveImage() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, request, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this3.loading = true;
                formData = new FormData();
                formData.append("company_id", _this3.editedItem.id);
                formData.append("photo", _this3.editedItem.photo);
                request = {
                  formData: formData
                };
                _context2.next = 8;
                return _this3.$store.dispatch("company/UPDATED_IMAGE", request);

              case 8:
                response = _context2.sent;

                _this3.$refs.obs.reset();

                _this3.$emit("dialog:change", "imagen"); // Swal.fire({
                //   icon: 'success',
                //   title: 'Empresa creada con exito',
                // })
                // this.close()


                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                _this3.loading = false; // let e = error.response.data.message;
                // let list = "";
                // for (const prop in e) {
                //   list = list + `<li>${e[prop][0]}</li>`;
                // }
                // Swal.fire({
                //   icon: "error",
                //   title: "Oops...",
                //   html: list
                // });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./resources/js/components/Company/Dialog.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dialogCompany: _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      data_edit: {},
      active: false,
      edit: false,
      image: false,
      register: false,
      id_user: 0,
      itemsPerPage: 10,
      dialog: false,
      desserts: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? 'Agregar empresa' : 'Editar empresa';
    },
    itemCompany: function itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch("company/INDEX");

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    eventdialog: function eventdialog(message) {
      if (message === 'registro') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: 'success',
          title: 'Empresa creado con exito'
        });
        this.active = false;
        this.edit = false;
      } else if (message === 'editar') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: 'success',
          title: 'Empresa editado con exito'
        });
        this.active = false;
        this.edit = false;
      } else if (message === 'imagen') {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: 'success',
          title: 'Imagen actualizada con exito'
        });
        this.active = false;
        this.edit = false;
      } else {
        this.active = false;
        this.edit = false;
      }
    },
    registerItem: function registerItem() {
      this.data_edit = {};
      this.active = true;
      this.edit = false;
      this.register = true;
      this.image = true;
    },
    editItem: function editItem(item) {
      this.data_edit = {
        id: item[0].id,
        ruc: item[0].ruc,
        name: item[0].name,
        phone: item[0].phone,
        address: item[0].address
      };
      this.active = true;
      this.edit = true;
      this.register = false;
      this.image = false;
    },
    editItemImage: function editItemImage(item) {
      this.data_edit = {
        id: item[0].id,
        photo: item[0].photo
      };
      this.active = true;
      this.edit = false;
      this.register = false;
      this.image = true;
    },
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      setTimeout(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
        _this2.edit = false;
      }, 300);
    },
    getColor: function getColor(value) {
      if (value == 1) {
        return 'success';
      } else {
        return 'red';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["active", "editedItem", "edit"],
  data: function data() {
    return {
      menu_date: false
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? 'Nuevo gasto' : 'Editar gasto';
    },
    ItemsTypeExpenses: function ItemsTypeExpenses() {
      return this.$store.getters["type_expenses/GET_TYPE_EXPENSES"];
    },
    ItemsTypePayment: function ItemsTypePayment() {
      return this.$store.getters["customer/GET_TYPE_PAYMENT"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  methods: {
    close: function close() {
      this.$emit("dialog:change", "cerrar");
    },
    setAmount: function setAmount() {
      var _this = this;

      var id_type = this.ItemsTypeExpenses.find(function (index) {
        return index.id == _this.editedItem.type_expenses_id;
      });

      if (id_type !== undefined) {
        this.editedItem.quantity = id_type.quantity;
      }
    },
    save: function save() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, response, _request, _response, e, list, prop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this2.edit === true)) {
                  _context.next = 15;
                  break;
                }

                //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                request = {
                  id: _this2.editedItem.id,
                  type_expenses_id: _this2.editedItem.type_expenses_id,
                  quantity: _this2.editedItem.quantity,
                  type_payment_id: _this2.editedItem.type_payment_id,
                  date_payment_expense: _this2.editedItem.date_payment_expense
                };
                _context.prev = 2;
                _context.next = 5;
                return _this2.$store.dispatch("expenses/UPDATED", request);

              case 5:
                response = _context.sent;

                _this2.$refs.obs.reset();

                _this2.$emit("dialog:change", "editar"); // this.close()


                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 13:
                _context.next = 30;
                break;

              case 15:
                _context.prev = 15;
                _request = {
                  type_expenses_id: _this2.editedItem.type_expenses_id,
                  quantity: _this2.editedItem.quantity,
                  type_payment_id: _this2.editedItem.type_payment_id,
                  date_payment_expense: _this2.editedItem.date_payment_expense
                };
                _context.next = 19;
                return _this2.$store.dispatch("expenses/REGISTER", _request);

              case 19:
                _response = _context.sent;

                _this2.$refs.obs.reset();

                _this2.$emit("dialog:change", "registro"); // Swal.fire({
                //   icon: 'success',
                //   title: 'Empresa creada con exito',
                // })
                // this.close()


                _context.next = 30;
                break;

              case 24:
                _context.prev = 24;
                _context.t1 = _context["catch"](15);
                e = _context.t1.response.data.message;
                list = "";

                for (prop in e) {
                  list = list + "<li>".concat(e[prop][0], "</li>");
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: list
                });

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10], [15, 24]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./resources/js/components/Expenses/Expenses/Dialog.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dialogTypes: _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      data_edit: {},
      active: false,
      snackbar: false,
      text: "",
      loading: false,
      menu1: false,
      menu2: false,
      e1: 1,
      edit: false,
      position_array: "",
      id_user: 0,
      itemsPerPage: 10,
      dialog: false,
      headers: [// { text: 'Id', align: 'left', sortable: false, value: 'name', class: 'text-uppercase'},
      {
        text: "Tipo de gasto",
        align: "left",
        sortable: false,
        value: "type_expenses.name",
        "class": "text-uppercase"
      }, {
        text: "Tipo de pago",
        align: "left",
        sortable: false,
        value: "type_payment.name",
        "class": "text-uppercase"
      }, {
        text: "Cantidad",
        align: "left",
        sortable: false,
        value: "quantity",
        "class": "text-uppercase"
      }, {
        text: "Fecha de gasto",
        align: "left",
        sortable: false,
        value: "date_payment_expense",
        "class": "text-uppercase"
      }, {
        text: "Fecha de registro",
        align: "left",
        sortable: false,
        value: "created_at",
        "class": "text-uppercase"
      }, {
        text: "Acciones",
        value: "action",
        sortable: false,
        "class": "text-uppercase"
      }],
      desserts: []
    };
  },
  filters: {
    date: function date(value) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(value).locale("es").format("DD/MM/YYYY");
    }
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? "Nuevo gasto" : "Editar gasto";
    },
    ItemsExpenses: function ItemsExpenses() {
      return this.$store.getters["expenses/GET_EXPENSES"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
    this.type_expenses();
    this.type_payment();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch("expenses/INDEX");

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    type_expenses: function type_expenses() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.$store.dispatch("type_expenses/INDEX");

              case 3:
                response = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    type_payment: function type_payment() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this3.$store.dispatch("customer/TYPE_PAYMENT");

              case 3:
                response = _context3.sent;
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }))();
    },
    eventdialog: function eventdialog(message) {
      if (message === "registro") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Gasto creado con exito"
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Gasto editado con exito"
        });
        this.active = false;
        this.edit = false;
      } else {
        this.active = false;
        this.edit = false;
      }
    },
    registerItem: function registerItem(item) {
      this.data_edit = {};
      this.active = true;
      this.edit = false;
    },
    editItem: function editItem(item) {
      this.data_edit = _objectSpread(_objectSpread({}, item), {}, {
        position_array: this.ItemsExpenses.indexOf(item)
      });
      this.active = true;
      this.edit = true;
    },
    HandlerDeleteItem: function HandlerDeleteItem(item) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                try {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "Estas seguro?",
                    text: "No sera posible revertir este proceso",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar"
                  }).then(function (result) {
                    if (result.value) {
                      _this4.deleteItem(item);
                    }
                  });
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    deleteItem: function deleteItem(item) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                request = _objectSpread({
                  position_array: _this5.ItemsExpenses.indexOf(item)
                }, item);
                _context5.next = 4;
                return _this5.$store.dispatch("expenses/DELETE", request);

              case 4:
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "El gasto ha sido eliminado con exitos", "success");
                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "Ha ocurrido un error eliminando el gasto", "error");

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }))();
    },
    close: function close() {
      var _this6 = this;

      this.dialog = false;
      setTimeout(function () {
        _this6.editedItem = Object.assign({}, _this6.defaultItem);
        _this6.editedIndex = -1;
        _this6.edit = false;
      }, 300);
    },
    getColor: function getColor(value) {
      if (value == 1) {
        return "success";
      } else {
        return "red";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Dialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Types/Dialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["active", "editedItem", "edit"],
  data: function data() {
    return {};
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? 'Nuevo proveedor' : 'Editar proveedor';
    },
    ItemsProductService: function ItemsProductService() {
      return this.$store.getters["product_service/GET_PRODUCT_SERVICE"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  methods: {
    close: function close() {
      this.$emit("dialog:change", "cerrar");
    },
    save: function save() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, response, _request, _response, e, list, prop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.edit === true)) {
                  _context.next = 15;
                  break;
                }

                //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                request = {
                  id: _this.editedItem.id,
                  name: _this.editedItem.name,
                  quantity: _this.editedItem.quantity,
                  product_or_service_id: _this.editedItem.product_or_service_id
                };
                _context.prev = 2;
                _context.next = 5;
                return _this.$store.dispatch("type_expenses/UPDATED", request);

              case 5:
                response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "editar"); // this.close()


                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 13:
                _context.next = 30;
                break;

              case 15:
                _context.prev = 15;
                _request = {
                  name: _this.editedItem.name,
                  quantity: _this.editedItem.quantity,
                  product_or_service_id: _this.editedItem.product_or_service_id
                };
                _context.next = 19;
                return _this.$store.dispatch("type_expenses/REGISTER", _request);

              case 19:
                _response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "registro"); // Swal.fire({
                //   icon: 'success',
                //   title: 'Empresa creada con exito',
                // })
                // this.close()


                _context.next = 30;
                break;

              case 24:
                _context.prev = 24;
                _context.t1 = _context["catch"](15);
                e = _context.t1.response.data.message;
                list = "";

                for (prop in e) {
                  list = list + "<li>".concat(e[prop][0], "</li>");
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: list
                });

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10], [15, 24]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Types/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./resources/js/components/Expenses/Types/Dialog.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dialogTypes: _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      data_edit: {},
      active: false,
      snackbar: false,
      text: "",
      loading: false,
      menu1: false,
      menu2: false,
      e1: 1,
      edit: false,
      position_array: "",
      id_user: 0,
      itemsPerPage: 10,
      dialog: false,
      headers: [// { text: 'Id', align: 'left', sortable: false, value: 'name', class: 'text-uppercase'},
      {
        text: "Nombre",
        align: "left",
        sortable: false,
        value: "name",
        "class": "text-uppercase"
      }, {
        text: "Cantidad",
        align: "left",
        sortable: false,
        value: "quantity",
        "class": "text-uppercase"
      }, {
        text: "Tipo",
        align: "left",
        sortable: false,
        value: "product_or_service.name",
        "class": "text-uppercase"
      }, {
        text: "Acciones",
        value: "action",
        sortable: false,
        "class": "text-uppercase"
      }],
      desserts: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? "Nuevo proveedor" : "Editar proveedor";
    },
    ItemsTypeExpenses: function ItemsTypeExpenses() {
      return this.$store.getters["type_expenses/GET_TYPE_EXPENSES"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
    this.product_service(); // this.role();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch("type_expenses/INDEX");

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    product_service: function product_service() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.$store.dispatch("product_service/INDEX");

              case 3:
                response = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    eventdialog: function eventdialog(message) {
      if (message === "registro") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Proveedor creado con exito"
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Proveedor editado con exito"
        });
        this.active = false;
        this.edit = false;
      } else {
        this.active = false;
        this.edit = false;
      }
    },
    registerItem: function registerItem(item) {
      this.data_edit = {};
      this.active = true;
      this.edit = false;
    },
    editItem: function editItem(item) {
      this.data_edit = _objectSpread(_objectSpread({}, item), {}, {
        position_array: this.ItemsTypeExpenses.indexOf(item)
      });
      this.active = true;
      this.edit = true;
    },
    HandlerDeleteItem: function HandlerDeleteItem(item) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "Estas seguro?",
                    text: "No sera posible revertir este proceso",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar"
                  }).then(function (result) {
                    if (result.value) {
                      _this3.deleteItem(item);
                    }
                  });
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    deleteItem: function deleteItem(item) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                request = _objectSpread({
                  position_array: _this4.ItemsTypeExpenses.indexOf(item)
                }, item);
                _context4.next = 4;
                return _this4.$store.dispatch("type_expenses/DELETE", request);

              case 4:
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "El proveedor ha sido eliminado con exitos", "success");
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "Ha ocurrido un error eliminando el proveedor", "error");

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    close: function close() {
      var _this5 = this;

      this.dialog = false;
      setTimeout(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
        _this5.edit = false;
      }, 300);
    },
    getColor: function getColor(value) {
      if (value == 1) {
        return "success";
      } else {
        return "red";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Dialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Invoices/Dialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["active", "editedItem", "edit"],
  data: function data() {
    return {
      client_id: '',
      menu_birth: false,
      selected: [2],
      items: [],
      total: [0],
      loading: false
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? 'Nuevo Ingreso' : 'Editar Ingreso';
    },
    // status: {
    //     get () {
    //         return (this.editedItem.status === 1) ? true : false
    //     },
    //     set (val) {
    //         this.editedItem.status = val
    //     }
    // }
    ItemsCustomerSearch: function ItemsCustomerSearch() {
      return this.$store.getters["customer/GET_CUSTOMER_SEARCH"];
    },
    itemCompany: function itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    },
    ItemsDonation: function ItemsDonation() {
      return this.$store.getters["donations/GET_DONATION"];
    },
    ItemsTypePayment: function ItemsTypePayment() {
      return this.$store.getters["customer/GET_TYPE_PAYMENT"];
    },
    ItemsCustomer: function ItemsCustomer() {
      return this.$store.getters["customer/GET_CUSTOMERS"];
    },
    ItemsInvoice: function ItemsInvoice() {
      return this.$store.getters["invoice/GET_INVOICE"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    if (this.edit === true) {
      this.total_edit();
    } else {
      this.number_end();
    } // this.initialize();
    //this.ruc_type();

  },
  methods: {
    close: function close() {
      this.$emit("dialog:change", "cerrar");
    },
    save: function save() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, response, _request, _response, e, list, prop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //   editar
                _this.loading = true;

                if (!(_this.edit === true)) {
                  _context.next = 18;
                  break;
                }

                //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                request = [{
                  id: _this.editedItem.id,
                  number: _this.editedItem.number,
                  client_id: _this.editedItem.client_id,
                  amount: _this.total_value()
                }, _this.items, {
                  amount: _this.total_value(),
                  type_payment_id: _this.editedItem.type_payment_id
                }];
                _context.prev = 3;
                _context.next = 6;
                return _this.$store.dispatch("invoice/UPDATED", request);

              case 6:
                response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "editar");

                _this.loading = false; // this.close()

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);
                _this.loading = false;

              case 16:
                _context.next = 35;
                break;

              case 18:
                _context.prev = 18;
                _request = [{
                  // id: this.editedItem.id,
                  number: _this.editedItem.number,
                  client_id: _this.editedItem.client_id,
                  amount: _this.total_value()
                }, _this.items, {
                  amount: _this.total_value(),
                  type_payment_id: _this.editedItem.type_payment_id
                }];
                _context.next = 22;
                return _this.$store.dispatch("invoice/REGISTER", _request);

              case 22:
                _response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "registro");

                _this.loading = false; // Swal.fire({
                //   icon: 'success',
                //   title: 'Empresa creada con exito',
                // })
                // this.close()

                _context.next = 35;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context["catch"](18);
                _this.loading = false;
                e = _context.t1.response.data.message;
                list = "";

                for (prop in e) {
                  list = list + "<li>".concat(e[prop][0], "</li>");
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: list
                });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12], [18, 28]]);
      }))();
    },
    getFilter: function getFilter() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var client_id, customer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                client_id = _this2.editedItem.client_id;
                customer = _this2.ItemsCustomer.find(function (index) {
                  return index.id == client_id;
                });
                _this2.editedItem.name_client = customer.name;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    invoice_push: function invoice_push() {
      if (this.editedItem.donation_id && this.editedItem.amount && this.editedItem.quantity !== '') {
        var donation_id = this.editedItem.donation_id;
        var donation_name = this.ItemsDonation.find(function (index) {
          return index.id == donation_id;
        });
        var request = {
          id: 0,
          donation: donation_name.name_of_income,
          donation_id: this.editedItem.donation_id,
          amount: this.editedItem.amount,
          quantity: this.editedItem.quantity,
          sub_total: this.editedItem.amount * this.editedItem.quantity
        };
        this.total.push(request.sub_total);
        this.editedItem.donation_id = '';
        this.editedItem.amount = '';
        this.editedItem.quantity = '';
        this.$refs.obs.reset();
        this.items.push(request);
      }
    },
    total_value: function total_value() {
      return this.total.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    },
    total_edit: function total_edit() {
      var _this3 = this;

      var _iterator = _createForOfIteratorHelper(this.editedItem.donations_invoice),
          _step;

      try {
        var _loop = function _loop() {
          var value = _step.value;
          var donation_id = value.donation_id;

          var donation_name = _this3.ItemsDonation.find(function (index) {
            return index.id == donation_id;
          });

          var request = {
            id: value.id,
            donation: donation_name.name_of_income,
            donation_id: value.donation_id,
            amount: value.amount,
            quantity: value.quantity,
            sub_total: value.amount * value.quantity
          };

          _this3.total.push(request.sub_total);

          _this3.items.push(request);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    setAmount: function setAmount() {
      var donation_id = this.editedItem.donation_id;
      var donation = this.ItemsDonation.find(function (index) {
        return index.id == donation_id;
      });
      this.editedItem.amount = donation.value;
    },
    number_end: function number_end() {
      if (this.ItemsInvoice.length > 0) {
        // console.log(this.ItemsInvoice[this.ItemsInvoice.length - 1],'this.ItemsInvoice')
        // let num = this.ItemsInvoice[this.ItemsInvoice.length - 1].number;
        this.editedItem.number = this.ItemsInvoice.length + 1;
      } else {
        this.editedItem.number = 1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Invoices/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./resources/js/components/Invoices/Dialog.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dialogCustomer: _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      url_pdf: "",
      data_edit: {},
      active: false,
      snackbar: false,
      text: "",
      loading: false,
      menu1: false,
      menu2: false,
      e1: 1,
      edit: false,
      position_array: "",
      id_user: 0,
      itemsPerPage: 10,
      dialog: false,
      loadingEmail: false,
      headers: [{
        text: "Nombre del cliente",
        align: "left",
        sortable: false,
        value: "client.name",
        "class": "text-uppercase"
      }, {
        text: "Monto",
        align: "left",
        sortable: false,
        value: "amount",
        "class": "text-uppercase"
      }, {
        text: "Estatus",
        align: "left",
        sortable: false,
        value: "status",
        "class": "text-uppercase"
      }, {
        text: "Fecha",
        align: "left",
        sortable: false,
        value: "created_at",
        "class": "text-uppercase"
      }, // { text: 'Teléfono residencial', align: 'left', sortable: false, value: 'residential_phone', class: 'text-uppercase'},
      // { text: 'Correo', align: 'left', sortable: false, value: 'email', class: 'text-uppercase'},
      {
        text: "Acciones",
        value: "action",
        sortable: false,
        "class": "text-uppercase"
      }],
      desserts: []
    };
  },
  filters: {
    date: function date(value) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(value).locale("es").format("DD/MM/YYYY");
    },
    status_active: function status_active(value) {
      if (value == 1) {
        return "Activa";
      } else {
        return "Anulada";
      }
    }
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? "Nuevo Ingreso" : "Editar Ingreso";
    },
    ItemsInvoice: function ItemsInvoice() {
      return this.$store.getters["invoice/GET_INVOICE"];
    },
    itemCompany: function itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    } // ItemsDonation() {
    //   return this.$store.getters["donations/GET_DONATION"];
    // },

  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
    this.company();
    this.donation();
    this.type_payment();
    this.client();
  },
  methods: {
    whatsappSend: function whatsappSend(item) {
      var url = "https://api.whatsapp.com/send?";
      var url_server = process.env.MIX_APP_URL;
      var message = "Hemos recibido tu donacion porfavor visita el siguiente enlace para conocer mas detalles de la misma: ".concat(url_server, "/get_invoice/").concat(item.id);
      window.open("".concat(url, "phone=+507 ").concat(item.client.cellular, "&text=").concat(message));
    },
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch("invoice/INDEX");

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    company: function company() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.$store.dispatch("company/INDEX");

              case 3:
                response = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    type_payment: function type_payment() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this3.$store.dispatch("customer/TYPE_PAYMENT");

              case 3:
                response = _context3.sent;
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }))();
    },
    donation: function donation() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this4.$store.dispatch("donations/INDEX");

              case 3:
                response = _context4.sent;
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }))();
    },
    client: function client() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this5.$store.dispatch("customer/INDEX");

              case 3:
                response = _context5.sent;
                _context5.next = 9;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }))();
    },
    eventdialog: function eventdialog(message) {
      if (message === "registro") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Ingreso creado con exito"
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Ingreso editado con exito"
        });
        this.active = false;
        this.edit = false;
      } else {
        this.active = false;
        this.edit = false;
      }
    },
    registerItem: function registerItem(item) {
      this.data_edit = {};
      this.active = true;
      this.edit = false;
    },
    editItem: function editItem(item) {
      this.data_edit = _objectSpread(_objectSpread({}, item), {}, {
        name_client: item.client.name,
        type_payment_id: item.collect_money.type_payment_id,
        amount: "",
        position_array: this.ItemsInvoice.indexOf(item)
      });
      this.active = true;
      this.edit = true;
    },
    HandlerDeleteItem: function HandlerDeleteItem(item) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                try {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "Estas seguro de anular el ingreso?",
                    text: "No sera posible revertir este proceso",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#00BCD4",
                    cancelButtonColor: "grey",
                    confirmButtonText: "Anular",
                    cancelButtonText: "Cancelar"
                  }).then(function (result) {
                    if (result.value) {
                      _this6.deleteItem(item);
                    }
                  });
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    deleteItem: function deleteItem(item) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                request = _objectSpread({
                  position_array: _this7.ItemsInvoice.indexOf(item)
                }, item);
                _context7.next = 4;
                return _this7.$store.dispatch("invoice/DELETE", request);

              case 4:
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Anulada!", "La ingreso ha sido anulada con exito", "success");
                _context7.next = 10;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Opps!", "Ha ocurrido un error anulando la ingreso", "error");

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }))();
    },
    sendMail: function sendMail(item) {
      var _this8 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        title: "Esta seguro que desea enviar el correo electrónico",
        text: "No podra revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        cancelButtonColor: "grey",
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then(function (result) {
        if (result.value) {
          _this8.loadingEmail = true;

          _this8.mail(item);
        }
      });
    },
    mail: function mail(item) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var request, response, email_error;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                request = {
                  id: item.id
                };
                _context8.next = 4;
                return _this9.$store.dispatch("invoice/SEND_MAIL", request);

              case 4:
                response = _context8.sent;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  title: "Enviado!",
                  text: response.message,
                  icon: "success",
                  confirmButtonColor: "#00BCD4"
                });
                _this9.loadingEmail = false;
                _context8.next = 15;
                break;

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](0);
                console.log(_context8.t0);
                _this9.loadingEmail = false;
                email_error = _context8.t0.response.data.message;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: email_error,
                  confirmButtonColor: "#00BCD4"
                });

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 9]]);
      }))();
    },
    pdf: function pdf(item) {
      return "".concat(process.env.MIX_APP_URL, "/api/invoice/").concat(item.id, "/view");
    },
    forceFileDownload: function forceFileDownload(response, item) {
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "".concat(item.client.name.replace(" ", "_")).concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(item.created_at).locale("es").format("DD/MM/YYYY"), ".pdf")); //or any other extension

      document.body.appendChild(link);
      link.click();
    },
    close: function close() {
      var _this10 = this;

      this.dialog = false;
      setTimeout(function () {
        _this10.editedItem = Object.assign({}, _this10.defaultItem);
        _this10.editedIndex = -1;
        _this10.edit = false;
      }, 300);
    },
    getColor: function getColor(value) {
      if (value == 1) {
        return "success";
      } else {
        return "red";
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Dialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductService/Types/Dialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["active", "editedItem", "edit"],
  data: function data() {
    return {};
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? 'Nuevo tipo de gasto' : 'Editar tipo de gasto';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  methods: {
    close: function close() {
      this.$emit("dialog:change", "cerrar");
    },
    AmountFormat: function AmountFormat() {
      var value = this.editedItem.amount.toString().replace(",", "").replace(/^0+/g, "");

      if (value.length > 0 && parseInt(value) > 0) {
        var aux = value.padStart(3, "0");
        var decimal = aux.slice(aux.length - 2, aux.length);
        var integer = aux.slice(0, aux.length - 2);
        this.editedItem.amount = "".concat(integer, ",").concat(decimal);
      } else {
        this.editedItem.amount = "0,00";
      }
    },
    save: function save() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, response, _request, _response, e, list, prop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.edit === true)) {
                  _context.next = 15;
                  break;
                }

                //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                request = {
                  id: _this.editedItem.id,
                  name: _this.editedItem.name
                };
                _context.prev = 2;
                _context.next = 5;
                return _this.$store.dispatch("product_service/UPDATED", request);

              case 5:
                response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "editar"); // this.close()


                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 13:
                _context.next = 30;
                break;

              case 15:
                _context.prev = 15;
                _request = {
                  name: _this.editedItem.name
                };
                _context.next = 19;
                return _this.$store.dispatch("product_service/REGISTER", _request);

              case 19:
                _response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "registro");

                _context.next = 30;
                break;

              case 24:
                _context.prev = 24;
                _context.t1 = _context["catch"](15);
                e = _context.t1.response.data.message;
                list = "";

                for (prop in e) {
                  list = list + "<li>".concat(e[prop][0], "</li>");
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: list
                });

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10], [15, 24]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductService/Types/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./resources/js/components/ProductService/Types/Dialog.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dialogTypes: _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      data_edit: {},
      active: false,
      snackbar: false,
      text: "",
      loading: false,
      menu1: false,
      menu2: false,
      e1: 1,
      edit: false,
      position_array: "",
      id_user: 0,
      itemsPerPage: 10,
      dialog: false,
      headers: [// { text: 'Id', align: 'left', sortable: false, value: 'name', class: 'text-uppercase'},
      {
        text: "Nombre de tipo de gasto",
        align: "left",
        sortable: false,
        value: "name",
        "class": "text-uppercase"
      }, {
        text: "Acciones",
        value: "action",
        sortable: false,
        "class": "text-uppercase"
      }],
      desserts: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? "Nuevo cliente" : "Editar cliente";
    },
    ItemsProductService: function ItemsProductService() {
      return this.$store.getters["product_service/GET_PRODUCT_SERVICE"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize(); // this.role();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch("product_service/INDEX");

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    eventdialog: function eventdialog(message) {
      if (message === "registro") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Tipo de gasto creado con exito"
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Tipo de gasto editado con exito"
        });
        this.active = false;
        this.edit = false;
      } else {
        this.active = false;
        this.edit = false;
      }
    },
    registerItem: function registerItem(item) {
      this.data_edit = {};
      this.active = true;
      this.edit = false;
    },
    editItem: function editItem(item) {
      this.data_edit = _objectSpread(_objectSpread({}, item), {}, {
        position_array: this.ItemsProductService.indexOf(item)
      });
      this.active = true;
      this.edit = true;
    },
    HandlerDeleteItem: function HandlerDeleteItem(item) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "Estas seguro?",
                    text: "No sera posible revertir este proceso",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar"
                  }).then(function (result) {
                    if (result.value) {
                      _this2.deleteItem(item);
                    }
                  });
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteItem: function deleteItem(item) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                request = _objectSpread({
                  position_array: _this3.ItemsProductService.indexOf(item)
                }, item);
                _context3.next = 4;
                return _this3.$store.dispatch("product_service/DELETE", request);

              case 4:
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "El tipo de gasto ha sido eliminado con exito", "success");
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "Ha ocurrido un error eliminando el tipo de gasto", "error");

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      setTimeout(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
        _this4.edit = false;
      }, 300);
    },
    getColor: function getColor(value) {
      if (value == 1) {
        return "success";
      } else {
        return "red";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Dialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Dialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["active", "editedItem", "edit"],
  data: function data() {
    return {
      client_id: '',
      menu_birth: false,
      selected: [2],
      items: [],
      total: [0],
      loading: false
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? 'Nueva Factura' : 'Editar Factura';
    },
    // status: {
    //     get () {
    //         return (this.editedItem.status === 1) ? true : false
    //     },
    //     set (val) {
    //         this.editedItem.status = val
    //     }
    // }
    ItemsCustomerSearch: function ItemsCustomerSearch() {
      return this.$store.getters["customer/GET_CUSTOMER_SEARCH"];
    },
    itemCompany: function itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    },
    ItemsDonation: function ItemsDonation() {
      return this.$store.getters["donations/GET_DONATION"];
    },
    ItemsTypePayment: function ItemsTypePayment() {
      return this.$store.getters["customer/GET_TYPE_PAYMENT"];
    },
    ItemsCustomer: function ItemsCustomer() {
      return this.$store.getters["customer/GET_CUSTOMERS"];
    },
    ItemsInvoice: function ItemsInvoice() {
      return this.$store.getters["invoice/GET_INVOICE"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    if (this.edit === true) {
      this.total_edit();
    } else {
      this.number_end();
    } // this.initialize();
    //this.ruc_type();

  },
  methods: {
    close: function close() {
      this.$emit("dialog:change", "cerrar");
    },
    save: function save() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, response, _request, _response, e, list, prop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //   editar
                _this.loading = true;

                if (!(_this.edit === true)) {
                  _context.next = 18;
                  break;
                }

                //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                request = [{
                  id: _this.editedItem.id,
                  number: _this.editedItem.number,
                  client_id: _this.editedItem.client_id,
                  amount: _this.total_value()
                }, _this.items, {
                  amount: _this.total_value(),
                  type_payment_id: _this.editedItem.type_payment_id
                }];
                _context.prev = 3;
                _context.next = 6;
                return _this.$store.dispatch("invoice/UPDATED", request);

              case 6:
                response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "editar");

                _this.loading = false; // this.close()

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);
                _this.loading = false;

              case 16:
                _context.next = 35;
                break;

              case 18:
                _context.prev = 18;
                _request = [{
                  // id: this.editedItem.id,
                  number: _this.editedItem.number,
                  client_id: _this.editedItem.client_id,
                  amount: _this.total_value()
                }, _this.items, {
                  amount: _this.total_value(),
                  type_payment_id: _this.editedItem.type_payment_id
                }];
                _context.next = 22;
                return _this.$store.dispatch("invoice/REGISTER", _request);

              case 22:
                _response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "registro");

                _this.loading = false; // Swal.fire({
                //   icon: 'success',
                //   title: 'Empresa creada con exito',
                // })
                // this.close()

                _context.next = 35;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context["catch"](18);
                _this.loading = false;
                e = _context.t1.response.data.message;
                list = "";

                for (prop in e) {
                  list = list + "<li>".concat(e[prop][0], "</li>");
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: list
                });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12], [18, 28]]);
      }))();
    },
    getFilter: function getFilter() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var client_id, customer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                client_id = _this2.editedItem.client_id;
                customer = _this2.ItemsCustomer.find(function (index) {
                  return index.id == client_id;
                });
                _this2.editedItem.name_client = customer.name;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    invoice_push: function invoice_push() {
      if (this.editedItem.donation_id && this.editedItem.amount && this.editedItem.quantity !== '') {
        var donation_id = this.editedItem.donation_id;
        var donation_name = this.ItemsDonation.find(function (index) {
          return index.id == donation_id;
        });
        var request = {
          id: 0,
          donation: donation_name.name_of_income,
          donation_id: this.editedItem.donation_id,
          amount: this.editedItem.amount,
          quantity: this.editedItem.quantity,
          sub_total: this.editedItem.amount * this.editedItem.quantity
        };
        this.total.push(request.sub_total);
        this.editedItem.donation_id = '';
        this.editedItem.amount = '';
        this.editedItem.quantity = '';
        this.$refs.obs.reset();
        this.items.push(request);
      }
    },
    total_value: function total_value() {
      return this.total.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    },
    total_edit: function total_edit() {
      var _this3 = this;

      var _iterator = _createForOfIteratorHelper(this.editedItem.donations_invoice),
          _step;

      try {
        var _loop = function _loop() {
          var value = _step.value;
          var donation_id = value.donation_id;

          var donation_name = _this3.ItemsDonation.find(function (index) {
            return index.id == donation_id;
          });

          var request = {
            id: value.id,
            donation: donation_name.name_of_income,
            donation_id: value.donation_id,
            amount: value.amount,
            quantity: value.quantity,
            sub_total: value.amount * value.quantity
          };

          _this3.total.push(request.sub_total);

          _this3.items.push(request);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    setAmount: function setAmount() {
      var donation_id = this.editedItem.donation_id;
      var donation = this.ItemsDonation.find(function (index) {
        return index.id == donation_id;
      });
      this.editedItem.amount = donation.value;
    },
    number_end: function number_end() {
      if (this.ItemsInvoice.length > 0) {
        var num = this.ItemsInvoice[this.ItemsInvoice.length - 1].number;
        this.editedItem.number = parseInt(num) + 1;
      } else {
        this.editedItem.number = 1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./resources/js/components/Reports/Dialog.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dialogCustomer: _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      donation_id: 0,
      product_service_id: 0,
      type_expense_id: 0,
      loading: false,
      opc: '',
      loading_excel: false,
      loading_pdf: false,
      reports_data: [],
      items: [{
        id: 1,
        name: 'Ingresos'
      }, {
        id: 2,
        name: 'Gastos'
      }],
      menu: false,
      dates: [],
      headers_expense: [{
        text: "Tipo de gasto",
        align: "left",
        sortable: false,
        value: "type_expenses.name",
        "class": "text-uppercase"
      }, {
        text: "Proveedores",
        align: "left",
        sortable: false,
        value: "type_expenses.product_or_service.name",
        "class": "text-uppercase"
      }, {
        text: "Tipo de pago",
        align: "left",
        sortable: false,
        value: "type_payment.name",
        "class": "text-uppercase"
      }, {
        text: "Cantidad",
        align: "left",
        sortable: false,
        value: "quantity",
        "class": "text-uppercase"
      }, {
        text: "Fecha de gasto",
        align: "left",
        sortable: false,
        value: "created_at",
        "class": "text-uppercase"
      }],
      headers_invoice: [{
        text: "Nombre del cliente",
        align: "left",
        sortable: false,
        value: "client.name",
        "class": "text-uppercase"
      }, {
        text: "Tipo de pago",
        align: "left",
        sortable: false,
        value: "collect_money.type_payment.name",
        "class": "text-uppercase"
      }, {
        text: "Monto",
        align: "left",
        sortable: false,
        value: "amount",
        "class": "text-uppercase"
      }, {
        text: "Fecha",
        align: "left",
        sortable: false,
        value: "created_at",
        "class": "text-uppercase"
      }],
      headers: [],
      desserts: []
    };
  },
  filters: {
    date: function date(value) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(value).locale("es").format("DD/MM/YYYY");
    }
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? "Nueva Factura" : "Editar Factura";
    },
    ItemsInvoice: function ItemsInvoice() {
      return this.$store.getters["invoice/GET_INVOICE"];
    },
    itemCompany: function itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    },
    dateRangeText: function dateRangeText() {
      return this.dates.join(' ~ ');
    },
    ItemsDonation: function ItemsDonation() {
      return this.$store.getters["donations/GET_DONATION"];
    },
    ItemsTypeExpenses: function ItemsTypeExpenses() {
      return this.$store.getters["type_expenses/GET_TYPE_EXPENSES"];
    },
    ItemsProductService: function ItemsProductService() {
      return this.$store.getters["product_service/GET_PRODUCT_SERVICE"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.donation();
    this.type_expenses();
    this.product_service();
  },
  methods: {
    type_expenses: function type_expenses() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.$store.dispatch("type_expenses/INDEX");

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    product_service: function product_service() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.$store.dispatch("product_service/INDEX");

              case 3:
                response = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    search: function search() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var num_1, num_2, ini, end, request, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _this3.loading = true;

                if (_this3.dates[0] > _this3.dates[1] && _this3.menu == true) {
                  num_1 = _this3.dates[0];
                  num_2 = _this3.dates[1];
                  _this3.dates[0] = num_2;
                  _this3.dates[1] = num_1;
                }

                ini = '';
                end = '';

                if (_this3.dates.length > 0) {
                  ini = _this3.dates[0];
                  end = _this3.dates[1];
                } else {
                  ini = 0;
                  end = 0;
                }

                _this3.menu = _this3.menu == true ? false : false;
                request = {
                  opc: _this3.opc,
                  ini: ini,
                  end: end,
                  donation_id: _this3.opc == 1 ? _this3.donation_id : 0,
                  product_service_id: _this3.opc == 2 ? _this3.product_service_id : 0,
                  type_expense_id: _this3.opc == 2 ? _this3.type_expense_id : 0,
                  "export": 0
                };
                _context3.next = 10;
                return _this3.$store.dispatch("reports/FILTER_INVOICE_EXPENSES", request);

              case 10:
                response = _context3.sent;
                _this3.loading = false;

                if (_this3.opc == 1) {
                  _this3.headers = _this3.headers_invoice;
                } else {
                  _this3.headers = _this3.headers_expense;
                }

                _this3.reports_data = response;
                _context3.next = 20;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](0);
                _this3.loading = false;
                console.log(_context3.t0);

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 16]]);
      }))();
    },
    export_pdf_excel: function export_pdf_excel(name) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var export_type, num_1, num_2, ini, end, request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                export_type = '';

                if (name == 'pdf') {
                  _this4.loading_pdf = true;
                  export_type = 1;
                } else {
                  _this4.loading_excel = true;
                  export_type = 2;
                }

                if (_this4.dates[0] > _this4.dates[1] && _this4.menu == true) {
                  num_1 = _this4.dates[0];
                  num_2 = _this4.dates[1];
                  _this4.dates[0] = num_2;
                  _this4.dates[1] = num_1;
                }

                ini = 0;
                end = 0;

                if (_this4.dates.length > 0) {
                  ini = _this4.dates[0];
                  end = _this4.dates[1];
                }

                request = {
                  opc: _this4.opc,
                  ini: ini,
                  end: end,
                  donation_id: _this4.opc == 1 ? _this4.donation_id : 0,
                  product_service_id: _this4.opc == 2 ? _this4.product_service_id : 0,
                  type_expense_id: _this4.opc == 2 ? _this4.type_expense_id : 0,
                  "export": export_type
                }; // const url = `${process.env.MIX_APP_URL}/api/${item.id}/view`;
                // window.open(url,"_blank")
                // const request = {
                //   opc: this.opc,
                //   dates: this.dates,
                //   export: export_type
                // }

                axios__WEBPACK_IMPORTED_MODULE_4___default()({
                  method: "get",
                  url: "".concat(process.env.MIX_APP_URL, "/api/filter/").concat(request.opc, "/").concat(request.ini, "/").concat(request.end, "/").concat(request.donation_id, "/").concat(request.product_service_id, "/").concat(request.type_expense_id, "/").concat(request["export"]),
                  responseType: "arraybuffer",
                  headers: {
                    Authorization: " Bearer ".concat(localStorage.getItem("token"))
                  },
                  data: request
                }).then(function (response) {
                  _this4.loading = false;

                  _this4.forceFileDownload(response, name);

                  if (name == 'pdf') {
                    _this4.loading_pdf = false;
                  } else {
                    _this4.loading_excel = false;
                  }
                })["catch"](function (error) {
                  if (name == 'pdf') {
                    _this4.loading_pdf = false;
                  } else {
                    _this4.loading_excel = false;
                  }

                  console.log("error occured", error);
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    forceFileDownload: function forceFileDownload(response, name) {
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "reports".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date()).locale("es").format("DD/MM/YYYY"), ".").concat(name)); //or any other extension

      document.body.appendChild(link);
      link.click();
    },
    company: function company() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this5.$store.dispatch("company/INDEX");

              case 3:
                response = _context5.sent;
                _context5.next = 9;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }))();
    },
    type_payment: function type_payment() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this6.$store.dispatch("customer/TYPE_PAYMENT");

              case 3:
                response = _context6.sent;
                _context6.next = 9;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }))();
    },
    donation: function donation() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this7.$store.dispatch("donations/INDEX");

              case 3:
                response = _context7.sent;
                _context7.next = 9;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](0);
                console.log(_context7.t0);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 6]]);
      }))();
    },
    client: function client() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _this8.$store.dispatch("customer/INDEX");

              case 3:
                response = _context8.sent;
                _context8.next = 9;
                break;

              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](0);
                console.log(_context8.t0);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 6]]);
      }))();
    },
    eventdialog: function eventdialog(message) {
      if (message === "registro") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Factura creado con exito"
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Factura editado con exito"
        });
        this.active = false;
        this.edit = false;
      } else {
        this.active = false;
        this.edit = false;
      }
    },
    registerItem: function registerItem(item) {
      this.data_edit = {};
      this.active = true;
      this.edit = false;
    },
    editItem: function editItem(item) {
      this.data_edit = _objectSpread(_objectSpread({}, item), {}, {
        name_client: item.client.name,
        type_payment_id: item.collect_money.type_payment_id,
        amount: "",
        position_array: this.ItemsInvoice.indexOf(item)
      });
      this.active = true;
      this.edit = true;
    },
    HandlerDeleteItem: function HandlerDeleteItem(item) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                try {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "Estas seguro?",
                    text: "No sera posible revertir este proceso",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar"
                  }).then(function (result) {
                    if (result.value) {
                      _this9.deleteItem(item);
                    }
                  });
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    deleteItem: function deleteItem(item) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                request = _objectSpread({
                  position_array: _this10.ItemsInvoice.indexOf(item)
                }, item);
                _context10.next = 4;
                return _this10.$store.dispatch("invoice/DELETE", request);

              case 4:
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "La factura ha sido eliminado con exitos", "success");
                _context10.next = 10;
                break;

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "Ha ocurrido un error eliminando la factura", "error");

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 7]]);
      }))();
    },
    sendMail: function sendMail(item) {
      var _this11 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        title: "Esta seguro que desea enviar el correo electrónico",
        text: "No podra revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        cancelButtonColor: "grey",
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then(function (result) {
        if (result.value) {
          _this11.mail(item);
        }
      });
    },
    mail: function mail(item) {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var request, response, email_error;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                request = {
                  id: item.id
                };
                _context11.next = 4;
                return _this12.$store.dispatch("invoice/SEND_MAIL", request);

              case 4:
                response = _context11.sent;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  title: "Enviado!",
                  text: response.message,
                  icon: "success",
                  confirmButtonColor: "#00BCD4"
                });
                _context11.next = 13;
                break;

              case 8:
                _context11.prev = 8;
                _context11.t0 = _context11["catch"](0);
                console.log(_context11.t0);
                email_error = _context11.t0.response.data.message;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: email_error,
                  confirmButtonColor: "#00BCD4"
                });

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 8]]);
      }))();
    },
    close: function close() {
      var _this13 = this;

      this.dialog = false;
      setTimeout(function () {
        _this13.editedItem = Object.assign({}, _this13.defaultItem);
        _this13.editedIndex = -1;
        _this13.edit = false;
      }, 300);
    },
    getColor: function getColor(value) {
      if (value == 1) {
        return "success";
      } else {
        return "red";
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["active", "editedItem", "edit"],
  data: function data() {
    return {
      client_id: '',
      menu_birth: false,
      selected: [2],
      items: [],
      total: [0],
      loading: false
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? 'Nueva Factura' : 'Editar Factura';
    },
    // status: {
    //     get () {
    //         return (this.editedItem.status === 1) ? true : false
    //     },
    //     set (val) {
    //         this.editedItem.status = val
    //     }
    // }
    ItemsCustomerSearch: function ItemsCustomerSearch() {
      return this.$store.getters["customer/GET_CUSTOMER_SEARCH"];
    },
    itemCompany: function itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    },
    ItemsDonation: function ItemsDonation() {
      return this.$store.getters["donations/GET_DONATION"];
    },
    ItemsTypePayment: function ItemsTypePayment() {
      return this.$store.getters["customer/GET_TYPE_PAYMENT"];
    },
    ItemsCustomer: function ItemsCustomer() {
      return this.$store.getters["customer/GET_CUSTOMERS"];
    },
    ItemsInvoice: function ItemsInvoice() {
      return this.$store.getters["invoice/GET_INVOICE"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    if (this.edit === true) {
      this.total_edit();
    } else {
      this.number_end();
    } // this.initialize();
    //this.ruc_type();

  },
  methods: {
    close: function close() {
      this.$emit("dialog:change", "cerrar");
    },
    save: function save() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var request, response, _request, _response, e, list, prop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //   editar
                _this.loading = true;

                if (!(_this.edit === true)) {
                  _context.next = 18;
                  break;
                }

                //   Object.assign(this.desserts[this.editedIndex], this.editedItem)
                request = [{
                  id: _this.editedItem.id,
                  number: _this.editedItem.number,
                  client_id: _this.editedItem.client_id,
                  amount: _this.total_value()
                }, _this.items, {
                  amount: _this.total_value(),
                  type_payment_id: _this.editedItem.type_payment_id
                }];
                _context.prev = 3;
                _context.next = 6;
                return _this.$store.dispatch("invoice/UPDATED", request);

              case 6:
                response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "editar");

                _this.loading = false; // this.close()

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);
                _this.loading = false;

              case 16:
                _context.next = 35;
                break;

              case 18:
                _context.prev = 18;
                _request = [{
                  // id: this.editedItem.id,
                  number: _this.editedItem.number,
                  client_id: _this.editedItem.client_id,
                  amount: _this.total_value()
                }, _this.items, {
                  amount: _this.total_value(),
                  type_payment_id: _this.editedItem.type_payment_id
                }];
                _context.next = 22;
                return _this.$store.dispatch("invoice/REGISTER", _request);

              case 22:
                _response = _context.sent;

                _this.$refs.obs.reset();

                _this.$emit("dialog:change", "registro");

                _this.loading = false; // Swal.fire({
                //   icon: 'success',
                //   title: 'Empresa creada con exito',
                // })
                // this.close()

                _context.next = 35;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context["catch"](18);
                _this.loading = false;
                e = _context.t1.response.data.message;
                list = "";

                for (prop in e) {
                  list = list + "<li>".concat(e[prop][0], "</li>");
                }

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: list
                });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12], [18, 28]]);
      }))();
    },
    getFilter: function getFilter() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var client_id, customer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                client_id = _this2.editedItem.client_id;
                customer = _this2.ItemsCustomer.find(function (index) {
                  return index.id == client_id;
                });
                _this2.editedItem.name_client = customer.name;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    invoice_push: function invoice_push() {
      if (this.editedItem.donation_id && this.editedItem.amount && this.editedItem.quantity !== '') {
        var donation_id = this.editedItem.donation_id;
        var donation_name = this.ItemsDonation.find(function (index) {
          return index.id == donation_id;
        });
        var request = {
          id: 0,
          donation: donation_name.name_of_income,
          donation_id: this.editedItem.donation_id,
          amount: this.editedItem.amount,
          quantity: this.editedItem.quantity,
          sub_total: this.editedItem.amount * this.editedItem.quantity
        };
        this.total.push(request.sub_total);
        this.editedItem.donation_id = '';
        this.editedItem.amount = '';
        this.editedItem.quantity = '';
        this.$refs.obs.reset();
        this.items.push(request);
      }
    },
    total_value: function total_value() {
      return this.total.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    },
    total_edit: function total_edit() {
      var _this3 = this;

      var _iterator = _createForOfIteratorHelper(this.editedItem.donations_invoice),
          _step;

      try {
        var _loop = function _loop() {
          var value = _step.value;
          var donation_id = value.donation_id;

          var donation_name = _this3.ItemsDonation.find(function (index) {
            return index.id == donation_id;
          });

          var request = {
            id: value.id,
            donation: donation_name.name_of_income,
            donation_id: value.donation_id,
            amount: value.amount,
            quantity: value.quantity,
            sub_total: value.amount * value.quantity
          };

          _this3.total.push(request.sub_total);

          _this3.items.push(request);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    setAmount: function setAmount() {
      var donation_id = this.editedItem.donation_id;
      var donation = this.ItemsDonation.find(function (index) {
        return index.id == donation_id;
      });
      this.editedItem.amount = donation.value;
    },
    number_end: function number_end() {
      if (this.ItemsInvoice.length > 0) {
        var num = this.ItemsInvoice[this.ItemsInvoice.length - 1].number;
        this.editedItem.number = parseInt(num) + 1;
      } else {
        this.editedItem.number = 1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Monthly/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./resources/js/components/Reports/Monthly/Dialog.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    dialogCustomer: _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      donation_id: 0,
      product_service_id: 0,
      type_expense_id: 0,
      loading: false,
      opc: "",
      loading_excel: false,
      loading_pdf: false,
      reports_data: [],
      text_table: "Debe indicar el tipo de reporte a visualizar",
      items: [{
        id: 1,
        name: "Ingresos"
      }, {
        id: 2,
        name: "Gastos"
      }],
      menu: false,
      dates: [],
      headers_expense: [{
        text: "Nombre de gasto",
        align: "left",
        sortable: false,
        value: "name",
        "class": "text-uppercase"
      }, {
        text: "Cantidad",
        align: "left",
        sortable: false,
        value: "amount",
        "class": "text-uppercase"
      }],
      headers_invoice: [{
        text: "Nombre de donación",
        align: "left",
        sortable: false,
        value: "name",
        "class": "text-uppercase"
      }, {
        text: "Monto",
        align: "left",
        sortable: false,
        value: "amount",
        "class": "text-uppercase"
      }],
      headers: [],
      desserts: []
    };
  },
  filters: {
    date: function date(value) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(value).locale("es").format("DD/MM/YYYY");
    }
  },
  computed: {
    formTitle: function formTitle() {
      return this.edit === false ? "Nueva Factura" : "Editar Factura";
    },
    ItemsInvoice: function ItemsInvoice() {
      return this.$store.getters["invoice/GET_INVOICE"];
    },
    itemCompany: function itemCompany() {
      return this.$store.getters["company/GET_COMPANY"];
    },
    dateRangeText: function dateRangeText() {
      return this.dates.join(" ~ ");
    },
    ItemsDonation: function ItemsDonation() {
      return this.$store.getters["donations/GET_DONATION"];
    },
    ItemsTypeExpenses: function ItemsTypeExpenses() {
      return this.$store.getters["type_expenses/GET_TYPE_EXPENSES"];
    },
    ItemsProductService: function ItemsProductService() {
      return this.$store.getters["product_service/GET_PRODUCT_SERVICE"];
    },
    TotalCost: function TotalCost() {
      return this.$store.getters["reports/GET_TOTAL_COST"];
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.donation();
    this.type_expenses();
    this.product_service();
  },
  methods: {
    jsexport: function jsexport() {
      var _this = this;

      // URL Falsa para descargar
      var csvContent = "data:text/csv;charset=utf-8,"; // formatos

      var delimiter = ";";
      var fixedDecimal = 2; // cabecera

      var csvHeader = [["Reporte Mensual"]];
      csvHeader.forEach(function (rowArray) {
        var row = rowArray.join(delimiter);
        csvContent += row + "\r\n";
      });
      csvHeader[0] = [];
      this.headers.forEach(function (index, key) {
        csvHeader[0].push(index.text);
      }); // cuerpo

      var csvBody = [];
      var name = "";
      this.reports_data.forEach(function (element, key) {
        // columna padre
        var dispFatherRowArray = [];
        var name = element.name;
        dispFatherRowArray.push(name.replace(';', 'n'));
        dispFatherRowArray.push(parseFloat(element.amount).toFixed(2));
        csvBody.push(dispFatherRowArray); // inserta columna padre

        if (_this.reports_data.length - 1 == key) {
          var _dispFatherRowArray = [];

          _dispFatherRowArray.push('Total');

          _dispFatherRowArray.push(parseFloat(_this.TotalCost).toFixed(2));

          csvBody.push(_dispFatherRowArray);
        }
      }); // añadir resultados url falsa

      csvHeader.forEach(function (rowArray) {
        var row = rowArray.join(delimiter);
        csvContent += row + "\r\n";
      });
      csvBody.forEach(function (rowArray) {
        var row = rowArray.join(delimiter);
        csvContent += row + "\r\n";
      }); // primera *****************************************

      var nameCSV = "reporte_mensual.csv"; // generar elemento del dom para poner el enlace

      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", nameCSV);
      document.body.appendChild(link); // Required for FF
      // darle click

      link.click();
    },
    type_expenses: function type_expenses() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this2.$store.dispatch("type_expenses/INDEX");

              case 3:
                response = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    product_service: function product_service() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this3.$store.dispatch("product_service/INDEX");

              case 3:
                response = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    search: function search() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var num_1, num_2, ini, end, request, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _this4.loading = true;

                if (_this4.dates[0] > _this4.dates[1] && _this4.menu == true) {
                  num_1 = _this4.dates[0];
                  num_2 = _this4.dates[1];
                  _this4.dates[0] = num_2;
                  _this4.dates[1] = num_1;
                }

                ini = "";
                end = "";

                if (_this4.dates.length > 0) {
                  ini = _this4.dates[0];
                  end = _this4.dates[1];
                } else {
                  ini = 0;
                  end = 0;
                }

                _this4.menu = _this4.menu == true ? false : false;
                request = {
                  opc: _this4.opc,
                  ini: ini,
                  end: end,
                  donation_id: _this4.opc == 1 ? _this4.donation_id : 0,
                  product_service_id: _this4.opc == 2 ? _this4.product_service_id : 0,
                  type_expense_id: _this4.opc == 2 ? _this4.type_expense_id : 0,
                  "export": 0
                };
                _context3.next = 10;
                return _this4.$store.dispatch("reports/FILTER_INVOICE_EXPENSES_MONTHLY", request);

              case 10:
                response = _context3.sent;
                _this4.loading = false;

                if (_this4.opc == 1) {
                  _this4.headers = _this4.headers_invoice;
                  _this4.reports_data = _this4.group_invoises(response);
                } else {
                  _this4.headers = _this4.headers_expense;
                  _this4.reports_data = _this4.group_expenses(response);
                }

                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                _this4.loading = false;
                console.log(_context3.t0);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 15]]);
      }))();
    },
    export_pdf_excel: function export_pdf_excel(name) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var export_type, num_1, num_2, ini, end, request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                export_type = "";

                if (name == "pdf") {
                  _this5.loading_pdf = true;
                  export_type = 3;
                } else {
                  _this5.loading_excel = true;
                  export_type = 4;
                }

                if (_this5.dates[0] > _this5.dates[1] && _this5.menu == true) {
                  num_1 = _this5.dates[0];
                  num_2 = _this5.dates[1];
                  _this5.dates[0] = num_2;
                  _this5.dates[1] = num_1;
                }

                ini = 0;
                end = 0;

                if (_this5.dates.length > 0) {
                  ini = _this5.dates[0];
                  end = _this5.dates[1];
                }

                request = {
                  opc: _this5.opc,
                  ini: ini,
                  end: end,
                  donation_id: _this5.opc == 1 ? _this5.donation_id : 0,
                  product_service_id: _this5.opc == 2 ? _this5.product_service_id : 0,
                  type_expense_id: _this5.opc == 2 ? _this5.type_expense_id : 0,
                  "export": export_type
                }; // const url = `${process.env.MIX_APP_URL}/api/${item.id}/view`;
                // window.open(url,"_blank")
                // const request = {
                //   opc: this.opc,
                //   dates: this.dates,
                //   export: export_type
                // }

                axios__WEBPACK_IMPORTED_MODULE_4___default()({
                  method: "get",
                  url: "".concat(process.env.MIX_APP_URL, "/api/filter/").concat(request.opc, "/").concat(request.ini, "/").concat(request.end, "/").concat(request.donation_id, "/").concat(request.product_service_id, "/").concat(request.type_expense_id, "/").concat(request["export"]),
                  responseType: "arraybuffer",
                  headers: {
                    Authorization: " Bearer ".concat(localStorage.getItem("token"))
                  },
                  data: request
                }).then(function (response) {
                  _this5.loading = false;

                  _this5.forceFileDownload(response, name);

                  if (name == "pdf") {
                    _this5.loading_pdf = false;
                  } else {
                    _this5.loading_excel = false;
                  }
                })["catch"](function (error) {
                  if (name == "pdf") {
                    _this5.loading_pdf = false;
                  } else {
                    _this5.loading_excel = false;
                  }

                  console.log("error occured", error);
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    forceFileDownload: function forceFileDownload(response, name) {
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "reports".concat(moment__WEBPACK_IMPORTED_MODULE_3___default()(new Date()).locale("es").format("DD/MM/YYYY"), ".").concat(name)); //or any other extension

      document.body.appendChild(link);
      link.click();
    },
    company: function company() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this6.$store.dispatch("company/INDEX");

              case 3:
                response = _context5.sent;
                _context5.next = 9;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }))();
    },
    type_payment: function type_payment() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this7.$store.dispatch("customer/TYPE_PAYMENT");

              case 3:
                response = _context6.sent;
                _context6.next = 9;
                break;

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }))();
    },
    donation: function donation() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this8.$store.dispatch("donations/INDEX");

              case 3:
                response = _context7.sent;
                _context7.next = 9;
                break;

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](0);
                console.log(_context7.t0);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 6]]);
      }))();
    },
    client: function client() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return _this9.$store.dispatch("customer/INDEX");

              case 3:
                response = _context8.sent;
                _context8.next = 9;
                break;

              case 6:
                _context8.prev = 6;
                _context8.t0 = _context8["catch"](0);
                console.log(_context8.t0);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 6]]);
      }))();
    },
    eventdialog: function eventdialog(message) {
      if (message === "registro") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Factura creado con exito"
        });
        this.active = false;
        this.edit = false;
      } else if (message === "editar") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          icon: "success",
          title: "Factura editado con exito"
        });
        this.active = false;
        this.edit = false;
      } else {
        this.active = false;
        this.edit = false;
      }
    },
    registerItem: function registerItem(item) {
      this.data_edit = {};
      this.active = true;
      this.edit = false;
    },
    editItem: function editItem(item) {
      this.data_edit = _objectSpread(_objectSpread({}, item), {}, {
        name_client: item.client.name,
        type_payment_id: item.collect_money.type_payment_id,
        amount: "",
        position_array: this.ItemsInvoice.indexOf(item)
      });
      this.active = true;
      this.edit = true;
    },
    HandlerDeleteItem: function HandlerDeleteItem(item) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                try {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "Estas seguro?",
                    text: "No sera posible revertir este proceso",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar"
                  }).then(function (result) {
                    if (result.value) {
                      _this10.deleteItem(item);
                    }
                  });
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    deleteItem: function deleteItem(item) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var request;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                request = _objectSpread({
                  position_array: _this11.ItemsInvoice.indexOf(item)
                }, item);
                _context10.next = 4;
                return _this11.$store.dispatch("invoice/DELETE", request);

              case 4:
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "La factura ha sido eliminado con exitos", "success");
                _context10.next = 10;
                break;

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Eliminado!", "Ha ocurrido un error eliminando la factura", "error");

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 7]]);
      }))();
    },
    sendMail: function sendMail(item) {
      var _this12 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        title: "Esta seguro que desea enviar el correo electrónico",
        text: "No podra revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        cancelButtonColor: "grey",
        confirmButtonText: "Si",
        cancelButtonText: "No"
      }).then(function (result) {
        if (result.value) {
          _this12.mail(item);
        }
      });
    },
    mail: function mail(item) {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var request, response, email_error;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                request = {
                  id: item.id
                };
                _context11.next = 4;
                return _this13.$store.dispatch("invoice/SEND_MAIL", request);

              case 4:
                response = _context11.sent;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  title: "Enviado!",
                  text: response.message,
                  icon: "success",
                  confirmButtonColor: "#00BCD4"
                });
                _context11.next = 13;
                break;

              case 8:
                _context11.prev = 8;
                _context11.t0 = _context11["catch"](0);
                console.log(_context11.t0);
                email_error = _context11.t0.response.data.message;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: "error",
                  title: "Oops...",
                  html: email_error,
                  confirmButtonColor: "#00BCD4"
                });

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 8]]);
      }))();
    },
    close: function close() {
      var _this14 = this;

      this.dialog = false;
      setTimeout(function () {
        _this14.editedItem = Object.assign({}, _this14.defaultItem);
        _this14.editedIndex = -1;
        _this14.edit = false;
      }, 300);
    },
    getColor: function getColor(value) {
      if (value == 1) {
        return "success";
      } else {
        return "red";
      }
    },
    groupBy: function groupBy(arr, props, acum) {
      var elements = arr.reduce(function (groups, item) {
        var keys_prop = props.split(".");
        var val = item;

        for (var i = 0; i < keys_prop.length; i++) {
          val = val[keys_prop[i]];
        }

        groups[val] = groups[val] || {
          amount: 0,
          name: val
        };
        groups[val].amount += item[acum];
        return groups;
      }, {});
      var keys = Object.keys(elements);
      return keys.length > 0 ? keys.map(function (x) {
        return elements[x];
      }) : [];
    },
    group_expenses: function group_expenses(reports) {
      var group = this.groupBy(reports, "type_expenses.product_or_service.name", "quantity");
      return group;
    },
    group_invoises: function group_invoises(reports) {
      var donations = reports.reduce(function (accumulator, currentValue) {
        accumulator = accumulator.concat(currentValue.donations_invoice);
        return accumulator;
      }, []).reduce(function (accumulator, currentValue) {
        accumulator[currentValue.donation.name_of_income] = accumulator[currentValue.donation.name_of_income] + currentValue.amount * parseFloat(currentValue.quantity) || currentValue.amount * parseFloat(currentValue.quantity);
        return accumulator;
      }, {});
      var group = [];

      for (var key in donations) {
        if (donations.hasOwnProperty(key)) {
          group.push({
            name: key,
            amount: donations[key]
          });
        }
      } // const group = this.groupBy(reports, "donations_invoice.donation.0.name_of_income", "amount");


      return group;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.length_text {\r\n  font-size: 1rem !important\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.length_text {\r\n  font-size: 1rem !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.length_text {\r\n  font-size: 1rem !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.length_text {\r\n  font-size: 1rem !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.length_text {\r\n  font-size: 1rem !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.length_text {\r\n  font-size: 1rem !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.length_text {\r\n  font-size: 1rem !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Dialog.vue?vue&type=template&id=a34b9536&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Dialog.vue?vue&type=template&id=a34b9536& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "600px", persistent: "" },
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.formTitle))
            ])
          ]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "obs",
            attrs: { tag: "form" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var passes = ref.passes
                  return [
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _vm.image === true || _vm.register === true
                              ? _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { sm: "6", "offset-sm": "3" } },
                                      [
                                        _c(
                                          "v-expand-x-transition",
                                          [
                                            _vm.img_expand
                                              ? _c(
                                                  "v-col",
                                                  { attrs: { cols: "12" } },
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        src: _vm.img_preview,
                                                        alt: "foto cedula",
                                                        "aspect-ratio": "2",
                                                        dark: "",
                                                        contain: ""
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            typeof _vm.editedItem.photo_dni ==
                                            "string"
                                              ? _c(
                                                  "v-col",
                                                  { attrs: { cols: "12" } },
                                                  [
                                                    _c("v-img", {
                                                      attrs: {
                                                        src:
                                                          _vm.editedItem
                                                            .photo_dni,
                                                        alt: "foto cedula",
                                                        "aspect-ratio": "2",
                                                        dark: "",
                                                        contain: ""
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("ValidationProvider", {
                                          attrs: { name: "Cargar imagen" },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-file-input", {
                                                      attrs: {
                                                        label: "Cargar imagen",
                                                        accept: ".jpg,.png"
                                                      },
                                                      on: {
                                                        change:
                                                          _vm.onFileSelected
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.photo,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "photo",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.photo"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.image === false || _vm.register === true
                              ? _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("ValidationProvider", {
                                          attrs: { name: "Ruc", rules: "" },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Ruc",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.ruc,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "ruc",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.ruc"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Nombre",
                                            rules: "required"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Nombre",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.name,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "name",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.name"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Teléfono",
                                            rules: "required"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Teléfono",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.phone,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "phone",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.phone"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Dirección",
                                            rules: "required"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Dirección",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .address,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "address",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.address"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _vm.register === true
                          ? _c(
                              "v-btn",
                              {
                                attrs: {
                                  loading: _vm.loading,
                                  color: "primary"
                                },
                                on: {
                                  click: function($event) {
                                    return passes(_vm.save)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                  Guardar\n              "
                                )
                              ]
                            )
                          : _vm.edit === true
                          ? _c(
                              "v-btn",
                              {
                                attrs: {
                                  loading: _vm.loading,
                                  color: "primary"
                                },
                                on: {
                                  click: function($event) {
                                    return passes(_vm.save)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                  Guardar\n              "
                                )
                              ]
                            )
                          : _vm.image === true
                          ? _c(
                              "v-btn",
                              {
                                attrs: {
                                  loading: _vm.loading,
                                  color: "primary"
                                },
                                on: {
                                  click: function($event) {
                                    return passes(_vm.saveImage)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                  Guardar\n              "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { text: "" }, on: { click: _vm.close } },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Index.vue?vue&type=template&id=32edf445&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Company/Index.vue?vue&type=template&id=32edf445& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "round",
                  attrs: { flat: "", color: "transparent" }
                },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.itemCompany.length == 0
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "mb-2 font-weight-bold",
                          attrs: {
                            rounded: "",
                            text: "",
                            color: "secondary",
                            dark: ""
                          },
                          on: { click: _vm.registerItem }
                        },
                        [
                          _c("v-icon", { staticClass: "mr-3" }, [
                            _vm._v("mdi-plus")
                          ]),
                          _vm._v(
                            "\n\t                  Agregar Empresa\n\t              "
                          )
                        ],
                        1
                      )
                    : _c(
                        "v-btn",
                        {
                          staticClass: "mb-2 font-weight-bold",
                          attrs: {
                            rounded: "",
                            text: "",
                            color: "secondary",
                            dark: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.editItem(_vm.itemCompany)
                            }
                          }
                        },
                        [
                          _c("v-icon", { staticClass: "mr-3" }, [
                            _vm._v("mdi-pencil")
                          ]),
                          _vm._v(
                            "\n                    Editar Empresa\n                "
                          )
                        ],
                        1
                      ),
                  _vm._v(" "),
                  _vm.active
                    ? _c("dialogCompany", {
                        attrs: {
                          active: _vm.active,
                          editedItem: _vm.data_edit,
                          edit: _vm.edit,
                          image: _vm.image,
                          register: _vm.register
                        },
                        on: { "dialog:change": _vm.eventdialog }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "shadow-large round" },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "6" } },
                        [
                          _c(
                            "v-list-item",
                            [
                              _c("v-list-item-content", [
                                _vm.itemCompany.length > 0
                                  ? _c(
                                      "h2",
                                      {
                                        staticClass:
                                          "display-1 mb-2 dark-blue--text"
                                      },
                                      [_vm._v(_vm._s(_vm.itemCompany[0].name))]
                                    )
                                  : _c(
                                      "h2",
                                      {
                                        staticClass:
                                          "display-1 mb-2 dark-blue--text"
                                      },
                                      [_vm._v("Registrar datos de la empresa")]
                                    )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.itemCompany.length > 0
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "v-list-item",
                                    { attrs: { "two-line": "" } },
                                    [
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", [
                                            _vm._v("Ruc")
                                          ]),
                                          _vm._v(" "),
                                          _c("v-list-item-subtitle", [
                                            _vm._v(
                                              _vm._s(_vm.itemCompany[0].ruc)
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item",
                                    { attrs: { "two-line": "" } },
                                    [
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", [
                                            _vm._v("Teléfono")
                                          ]),
                                          _vm._v(" "),
                                          _c("v-list-item-subtitle", [
                                            _vm._v(
                                              _vm._s(_vm.itemCompany[0].phone)
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item",
                                    { attrs: { "two-line": "" } },
                                    [
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", [
                                            _vm._v("Dirección")
                                          ]),
                                          _vm._v(" "),
                                          _c("v-list-item-subtitle", [
                                            _vm._v(
                                              _vm._s(_vm.itemCompany[0].address)
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "6" } },
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _vm.itemCompany.length > 0 &&
                              _vm.itemCompany[0].image !== undefined
                                ? _c("v-img", {
                                    attrs: {
                                      src: _vm.itemCompany[0].image.path,
                                      "aspect-ratio": "2",
                                      contain: ""
                                    }
                                  })
                                : _c("v-img", {
                                    attrs: {
                                      src: "../img/folder_photo1.svg",
                                      "aspect-ratio": "2",
                                      contain: ""
                                    }
                                  }),
                              _vm._v(" "),
                              _vm.itemCompany.length > 0
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        absolute: "",
                                        dark: "",
                                        top: "",
                                        right: "",
                                        color: "secondary",
                                        small: "",
                                        rounded: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.editItemImage(
                                            _vm.itemCompany
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        Editar Imagen\n                      "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=template&id=6a82219a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=template&id=6a82219a& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "600px", persistent: "" },
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.formTitle))
            ])
          ]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "obs",
            attrs: { tag: "form" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var passes = ref.passes
                  return [
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Tipo de donación",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items:
                                                      _vm.ItemsTypeExpenses,
                                                    "item-text": "name",
                                                    "item-value": "id",
                                                    label: "Proveedores",
                                                    "error-messages": errors
                                                  },
                                                  on: { change: _vm.setAmount },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .type_expenses_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "type_expenses_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.type_expenses_id"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Tipo de pago",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items: _vm.ItemsTypePayment,
                                                    "item-text": "name",
                                                    "item-value": "id",
                                                    label: "Tipo de pago",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .type_payment_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "type_payment_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.type_payment_id"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Cantidad",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Cantidad",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.quantity,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "quantity",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.quantity"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c(
                                      "v-menu",
                                      {
                                        attrs: {
                                          "close-on-content-click": false,
                                          "nudge-right": 40,
                                          transition: "scale-transition",
                                          "offset-y": "",
                                          "min-width": "290px"
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return [
                                                  _c("ValidationProvider", {
                                                    attrs: {
                                                      name:
                                                        "Fecha de pago del gasto",
                                                      rules: "required"
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "default",
                                                          fn: function(ref) {
                                                            var errors =
                                                              ref.errors
                                                            return [
                                                              _c(
                                                                "v-text-field",
                                                                _vm._g(
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Fecha de pago del gasto",
                                                                      readonly:
                                                                        "",
                                                                      "error-messages": errors
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .date_payment_expense,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "date_payment_expense",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.date_payment_expense"
                                                                    }
                                                                  },
                                                                  on
                                                                )
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      null,
                                                      true
                                                    )
                                                  })
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          true
                                        ),
                                        model: {
                                          value: _vm.menu_date,
                                          callback: function($$v) {
                                            _vm.menu_date = $$v
                                          },
                                          expression: "menu_date"
                                        }
                                      },
                                      [
                                        _vm._v(" "),
                                        _c("v-date-picker", {
                                          attrs: { "no-title": "" },
                                          on: {
                                            input: function($event) {
                                              _vm.menu_date = false
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.editedItem
                                                .date_payment_expense,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "date_payment_expense",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "editedItem.date_payment_expense"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return passes(_vm.save)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                  Guardar\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { text: "" }, on: { click: _vm.close } },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=template&id=3d786e92&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=template&id=3d786e92& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "round",
                  attrs: { flat: "", color: "transparent" }
                },
                [
                  _c(
                    "v-toolbar-title",
                    { staticClass: "headline mb-2 dark-blue--text" },
                    [_vm._v("Gastos")]
                  ),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" }
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-2 font-weight-bold",
                      attrs: {
                        rounded: "",
                        text: "",
                        color: "secondary",
                        dark: ""
                      },
                      on: { click: _vm.registerItem }
                    },
                    [
                      _c("v-icon", { staticClass: "mr-3" }, [
                        _vm._v("mdi-account-plus")
                      ]),
                      _vm._v("Nuevo gasto\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.active
                    ? _c("dialogTypes", {
                        attrs: {
                          active: _vm.active,
                          editedItem: _vm.data_edit,
                          edit: _vm.edit
                        },
                        on: { "dialog:change": _vm.eventdialog }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "shadow-large round" },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-0",
                    attrs: { headers: _vm.headers, items: _vm.ItemsExpenses },
                    scopedSlots: _vm._u([
                      {
                        key: "item.date_payment_expense",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("date")(item.date_payment_expense)
                                )
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.created_at",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(_vm._s(_vm._f("date")(item.created_at)))
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.action",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              "x-small": "",
                                              icon: "",
                                              color: hover
                                                ? "amber"
                                                : "blue-grey"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editItem(item, 1)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: {
                                                  color: "gray darken-1",
                                                  bottom: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g({}, on),
                                                            [
                                                              _vm._v(
                                                                "mdi-account-edit"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v("Actualizar gasto")
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              "x-small": "",
                                              icon: "",
                                              color: hover ? "red" : "blue-grey"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.HandlerDeleteItem(
                                                  item,
                                                  1
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: {
                                                  color: "gray lighten-1",
                                                  bottom: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g({}, on),
                                                            [
                                                              _vm._v(
                                                                "mdi-account-remove"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v("Eliminar gasto")
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Dialog.vue?vue&type=template&id=7da153f7&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Types/Dialog.vue?vue&type=template&id=7da153f7& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "400px", persistent: "" },
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.formTitle))
            ])
          ]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "obs",
            attrs: { tag: "form" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var passes = ref.passes
                  return [
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Nombre",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Nombre",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.name"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Tipo",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items:
                                                      _vm.ItemsProductService,
                                                    "item-text": "name",
                                                    "item-value": "id",
                                                    label: "Tipo de gasto",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .product_or_service_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "product_or_service_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.product_or_service_id"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Cantidad",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Cantidad",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.quantity,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "quantity",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.quantity"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return passes(_vm.save)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                  Guardar\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { text: "" }, on: { click: _vm.close } },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Index.vue?vue&type=template&id=41dfbb73&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Expenses/Types/Index.vue?vue&type=template&id=41dfbb73& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "round",
                  attrs: { flat: "", color: "transparent" }
                },
                [
                  _c(
                    "v-toolbar-title",
                    { staticClass: "headline mb-2 dark-blue--text" },
                    [_vm._v("Proveedores")]
                  ),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" }
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-2 font-weight-bold",
                      attrs: {
                        rounded: "",
                        text: "",
                        color: "secondary",
                        dark: ""
                      },
                      on: { click: _vm.registerItem }
                    },
                    [
                      _c("v-icon", { staticClass: "mr-3" }, [
                        _vm._v("mdi-account-plus")
                      ]),
                      _vm._v("Nuevo proveedor\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.active
                    ? _c("dialogTypes", {
                        attrs: {
                          active: _vm.active,
                          editedItem: _vm.data_edit,
                          edit: _vm.edit
                        },
                        on: { "dialog:change": _vm.eventdialog }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "shadow-large round" },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-0",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.ItemsTypeExpenses
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.action",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              "x-small": "",
                                              icon: "",
                                              color: hover
                                                ? "amber"
                                                : "blue-grey"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editItem(item, 1)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: {
                                                  color: "gray darken-1",
                                                  bottom: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g({}, on),
                                                            [
                                                              _vm._v(
                                                                "mdi-account-edit"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v("Actualizar proveedor")
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              "x-small": "",
                                              icon: "",
                                              color: hover ? "red" : "blue-grey"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.HandlerDeleteItem(
                                                  item,
                                                  1
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: {
                                                  color: "gray lighten-1",
                                                  bottom: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g({}, on),
                                                            [
                                                              _vm._v(
                                                                "mdi-account-remove"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v("Eliminar proveedor")
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Dialog.vue?vue&type=template&id=8bd7f6d4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Invoices/Dialog.vue?vue&type=template&id=8bd7f6d4& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "800px", persistent: "" },
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { color: "#fafafa" } },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.formTitle))
            ])
          ]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "obs",
            attrs: { tag: "form" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var passes = ref.passes
                  return [
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-list",
                                      {
                                        staticClass: "shadow-small",
                                        attrs: {
                                          "two-line": "",
                                          subheader: "",
                                          color: "secondary round",
                                          dark: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-item",
                                          [
                                            _c(
                                              "v-list-item-avatar",
                                              {
                                                attrs: { size: "80", tile: "" }
                                              },
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    src:
                                                      _vm.itemCompany[0].image
                                                        .path,
                                                    contain: ""
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c(
                                                  "v-list-item-title",
                                                  {
                                                    staticClass: "headline mb-2"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          _vm.itemCompany[0]
                                                            .name
                                                        ) +
                                                        "\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle"),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("RUC: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0].ruc
                                                      ) +
                                                      "   \n                              "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("TLF: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0].phone
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("DIRECCIÓN: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0]
                                                          .address
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-action",
                                              [
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-uppercase mb-2"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    Recibo de caja\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-2",
                                                    staticStyle: {
                                                      border: "1px solid grey",
                                                      "border-radius": "5px"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    N° " +
                                                        _vm._s(
                                                          _vm.editedItem.number
                                                        ) +
                                                        "\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer")
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-subheader",
                                      { staticClass: "pb-0" },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "secondary" } },
                                          [_vm._v("mdi-account")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "pb-0 dark-blue--text font-weight-bold"
                                          },
                                          [_vm._v("Cliente  ")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mt-0" })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("v-autocomplete", {
                                      attrs: {
                                        items: _vm.ItemsCustomer,
                                        "item-text": "dni",
                                        "item-value": "id",
                                        label:
                                          "Buscar Cédula o  NIT del cliente",
                                        hint:
                                          "Indique el numero de cédula o NIT del cliente"
                                      },
                                      on: { change: _vm.getFilter },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "selection",
                                            fn: function(data) {
                                              return [
                                                _vm._v(
                                                  "\n                          " +
                                                    _vm._s(data.item.name) +
                                                    " " +
                                                    _vm._s(data.item.dni) +
                                                    "\n                      "
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item",
                                            fn: function(data) {
                                              return [
                                                [
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", {
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            data.item.name
                                                          )
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        {
                                                          domProps: {
                                                            innerHTML: _vm._s(
                                                              data.item.dni
                                                            )
                                                          }
                                                        }
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      ),
                                      model: {
                                        value: _vm.editedItem.client_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.editedItem,
                                            "client_id",
                                            $$v
                                          )
                                        },
                                        expression: "editedItem.client_id"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Nombre de cliente",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Nombre de cliente",
                                                    readonly: "",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .name_client,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "name_client",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.name_client"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-subheader",
                                      { staticClass: "pb-0" },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "secondary" } },
                                          [_vm._v("mdi-receipt")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "pb-0 dark-blue--text font-weight-bold"
                                          },
                                          [_vm._v("Ingreso  ")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mt-0" })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: { name: "Tipo de ingreso" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items: _vm.ItemsDonation,
                                                    "item-text":
                                                      "name_of_income",
                                                    "item-value": "id",
                                                    label: "Tipo de ingreso",
                                                    "error-messages": errors
                                                  },
                                                  on: { change: _vm.setAmount },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .donation_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "donation_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.donation_id"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Monto",
                                        rules: "numeric|min_value:1"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Monto",
                                                    hint: _vm.editedItem.amount,
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.amount,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "amount",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.amount"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Cantidad",
                                        rules: "numeric"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Cantidad",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.quantity,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "quantity",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.quantity"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          block: "",
                                          rounded: "",
                                          dark: "",
                                          color: "secondary"
                                        },
                                        on: { click: _vm.invoice_push }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          Agregar\n                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          "max-width": "500",
                                          color: "round"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list",
                                          [
                                            _c(
                                              "v-list-item-group",
                                              [
                                                _vm._l(_vm.items, function(
                                                  item,
                                                  index
                                                ) {
                                                  return [
                                                    _c("v-list-item", {
                                                      key: item.title,
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var active =
                                                                ref.active
                                                              var toggle =
                                                                ref.toggle
                                                              return [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        domProps: {
                                                                          textContent: _vm._s(
                                                                            item.donation
                                                                          )
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      {
                                                                        staticClass:
                                                                          "text--primary"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Monto: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              _vm._f(
                                                                                "currency"
                                                                              )(
                                                                                item.amount
                                                                              )
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Cantidad: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              item.quantity
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Subtotal: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              _vm._f(
                                                                                "currency"
                                                                              )(
                                                                                item.sub_total
                                                                              )
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
                                                    }),
                                                    _vm._v(" "),
                                                    index + 1 < _vm.items.length
                                                      ? _c("v-divider", {
                                                          key: index,
                                                          staticClass: "my-0"
                                                        })
                                                      : _vm._e()
                                                  ]
                                                })
                                              ],
                                              2
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-actions",
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "headline px-4" },
                                          [
                                            _vm._v(
                                              "\n                            Total: " +
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.total_value()
                                                  )
                                                ) +
                                                "\n                          "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Tipo de pago",
                                            rules: "required"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-autocomplete", {
                                                      attrs: {
                                                        items:
                                                          _vm.ItemsTypePayment,
                                                        "item-text": "name",
                                                        "item-value": "id",
                                                        label: "Tipo de pago",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .type_payment_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "type_payment_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.type_payment_id"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { loading: _vm.loading, color: "primary" },
                            on: {
                              click: function($event) {
                                return passes(_vm.save)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                  Guardar\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { text: "" }, on: { click: _vm.close } },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Index.vue?vue&type=template&id=4c14faf4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Invoices/Index.vue?vue&type=template&id=4c14faf4& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "round",
                  attrs: { flat: "", color: "transparent" }
                },
                [
                  _c(
                    "v-toolbar-title",
                    { staticClass: "headline mb-2 dark-blue--text" },
                    [_vm._v("Ingresos")]
                  ),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" }
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.itemCompany.length > 0
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "mb-2 font-weight-bold",
                          attrs: {
                            rounded: "",
                            text: "",
                            color: "secondary",
                            dark: ""
                          },
                          on: { click: _vm.registerItem }
                        },
                        [
                          _c("v-icon", { staticClass: "mr-3" }, [
                            _vm._v("mdi-account-plus")
                          ]),
                          _vm._v("Nuevo\n          Ingreso\n        ")
                        ],
                        1
                      )
                    : _c("span", [
                        _vm._v(
                          "\n          Debe tener registrada la empresa para poder crear\n          ingresos\n        "
                        )
                      ]),
                  _vm._v(" "),
                  _vm.active
                    ? _c("dialogCustomer", {
                        attrs: {
                          active: _vm.active,
                          editedItem: _vm.data_edit,
                          edit: _vm.edit
                        },
                        on: { "dialog:change": _vm.eventdialog }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "shadow-large round" },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-0",
                    attrs: { headers: _vm.headers, items: _vm.ItemsInvoice },
                    scopedSlots: _vm._u([
                      {
                        key: "item.amount",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(_vm._s(_vm._f("currency")(item.amount)))
                          ]
                        }
                      },
                      {
                        key: "item.created_at",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(_vm._s(_vm._f("date")(item.created_at)))
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.status",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-chip",
                              {
                                staticClass: "ma-2",
                                attrs: {
                                  color:
                                    item.status == 1 ? "teal" : "red darken-2",
                                  dark: ""
                                }
                              },
                              [
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm._f("status_active")(item.status))
                                  )
                                ])
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "item.action",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        item.status == 1
                                          ? _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  text: "",
                                                  icon: "",
                                                  color: hover
                                                    ? "red"
                                                    : "blue-grey"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.HandlerDeleteItem(
                                                      item,
                                                      1
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-tooltip",
                                                  {
                                                    attrs: {
                                                      color: "gray lighten-1",
                                                      bottom: ""
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            return [
                                                              _c(
                                                                "v-icon",
                                                                _vm._g({}, on),
                                                                [
                                                                  _vm._v(
                                                                    "mdi-account-remove"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      null,
                                                      true
                                                    )
                                                  },
                                                  [
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v(
                                                        "Cambiar estatus del ingreso"
                                                      )
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              text: "",
                                              icon: "",
                                              loading: _vm.loadingEmail,
                                              color: hover
                                                ? "indigo"
                                                : "blue-grey"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.sendMail(item)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: {
                                                  color: "gray lighten-1",
                                                  bottom: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g({}, on),
                                                            [_vm._v("mdi-mail")]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v("Enviar correo")
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              text: "",
                                              icon: "",
                                              color: hover
                                                ? "red darken-4"
                                                : "blue-grey",
                                              target: "_blank",
                                              href: _vm.pdf(item)
                                            }
                                          },
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: {
                                                  color: "gray lighten-1",
                                                  bottom: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g({}, on),
                                                            [
                                                              _vm._v(
                                                                "mdi-file-pdf"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v("Descargar archivo")
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            item.client.cellular != null
                              ? _c("v-hover", {
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var hover = ref.hover
                                          return [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  text: "",
                                                  icon: "",
                                                  color: hover
                                                    ? "success"
                                                    : "blue-grey"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.whatsappSend(
                                                      item
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-tooltip",
                                                  {
                                                    attrs: {
                                                      color: "gray lighten-1",
                                                      bottom: ""
                                                    },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            return [
                                                              _c(
                                                                "v-icon",
                                                                _vm._g({}, on),
                                                                [
                                                                  _vm._v(
                                                                    "mdi-whatsapp"
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      null,
                                                      true
                                                    )
                                                  },
                                                  [
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v("Enviar whatsapp")
                                                    ])
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                })
                              : _vm._e()
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Dialog.vue?vue&type=template&id=46a20dec&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductService/Types/Dialog.vue?vue&type=template&id=46a20dec& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "400px", persistent: "" },
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.formTitle))
            ])
          ]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "obs",
            attrs: { tag: "form" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var passes = ref.passes
                  return [
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Nombre de tipo de gasto",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Nombre de tipo de gasto",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.name"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
                            on: {
                              click: function($event) {
                                return passes(_vm.save)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                  Guardar\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { text: "" }, on: { click: _vm.close } },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Index.vue?vue&type=template&id=2f956ede&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductService/Types/Index.vue?vue&type=template&id=2f956ede& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "round",
                  attrs: { flat: "", color: "transparent" }
                },
                [
                  _c(
                    "v-toolbar-title",
                    { staticClass: "headline mb-2 dark-blue--text" },
                    [_vm._v("Tipos de gasto")]
                  ),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" }
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-2 font-weight-bold",
                      attrs: {
                        rounded: "",
                        text: "",
                        color: "secondary",
                        dark: ""
                      },
                      on: { click: _vm.registerItem }
                    },
                    [
                      _c("v-icon", { staticClass: "mr-3" }, [
                        _vm._v("mdi-account-plus")
                      ]),
                      _vm._v("Nuevo tipo de gasto\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.active
                    ? _c("dialogTypes", {
                        attrs: {
                          active: _vm.active,
                          editedItem: _vm.data_edit,
                          edit: _vm.edit
                        },
                        on: { "dialog:change": _vm.eventdialog }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "shadow-large round" },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-0",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.ItemsProductService
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.action",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              small: "",
                                              text: "",
                                              icon: "",
                                              color: hover
                                                ? "amber"
                                                : "blue-grey"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editItem(item, 1)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: {
                                                  color: "gray darken-1",
                                                  bottom: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g({}, on),
                                                            [
                                                              _vm._v(
                                                                "mdi-account-edit"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Actualizar tipo de gasto"
                                                  )
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("v-hover", {
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var hover = ref.hover
                                      return [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              text: "",
                                              icon: "",
                                              color: hover ? "red" : "blue-grey"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.HandlerDeleteItem(
                                                  item,
                                                  1
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: {
                                                  color: "gray lighten-1",
                                                  bottom: ""
                                                },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-icon",
                                                            _vm._g({}, on),
                                                            [
                                                              _vm._v(
                                                                "mdi-account-remove"
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    "Eliminar tipo de gasto"
                                                  )
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            })
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Dialog.vue?vue&type=template&id=807eba3a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Dialog.vue?vue&type=template&id=807eba3a& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "800px", persistent: "" },
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { color: "#fafafa" } },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.formTitle))
            ])
          ]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "obs",
            attrs: { tag: "form" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var passes = ref.passes
                  return [
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-list",
                                      {
                                        staticClass: "shadow-small",
                                        attrs: {
                                          "two-line": "",
                                          subheader: "",
                                          color: "secondary round",
                                          dark: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-item",
                                          [
                                            _c(
                                              "v-list-item-avatar",
                                              {
                                                attrs: { size: "80", tile: "" }
                                              },
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    src:
                                                      _vm.itemCompany[0].image
                                                        .path,
                                                    contain: ""
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c(
                                                  "v-list-item-title",
                                                  {
                                                    staticClass: "headline mb-2"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          _vm.itemCompany[0]
                                                            .name
                                                        ) +
                                                        "\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle"),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("RUC: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0].ruc
                                                      ) +
                                                      "   \n                              "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("TLF: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0].phone
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("DIRECCIÓN: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0]
                                                          .address
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-action",
                                              [
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-uppercase mb-2"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    Recibo de caja\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-2",
                                                    staticStyle: {
                                                      border: "1px solid grey",
                                                      "border-radius": "5px"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    N° " +
                                                        _vm._s(
                                                          _vm.editedItem.number
                                                        ) +
                                                        "\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer")
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-subheader",
                                      { staticClass: "pb-0" },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "secondary" } },
                                          [_vm._v("mdi-account")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "pb-0 dark-blue--text font-weight-bold"
                                          },
                                          [_vm._v("Cliente  ")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mt-0" })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("v-autocomplete", {
                                      attrs: {
                                        items: _vm.ItemsCustomer,
                                        "item-text": "dni",
                                        "item-value": "id",
                                        label:
                                          "Buscar Cédula o  NIT del cliente",
                                        hint:
                                          "Indique el numero de cédula o NIT del cliente"
                                      },
                                      on: { change: _vm.getFilter },
                                      model: {
                                        value: _vm.editedItem.client_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.editedItem,
                                            "client_id",
                                            $$v
                                          )
                                        },
                                        expression: "editedItem.client_id"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Nombre de cliente",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Nombre de cliente",
                                                    readonly: "",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .name_client,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "name_client",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.name_client"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-subheader",
                                      { staticClass: "pb-0" },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "secondary" } },
                                          [_vm._v("mdi-receipt")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "pb-0 dark-blue--text font-weight-bold"
                                          },
                                          [_vm._v("Factura  ")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mt-0" })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: { name: "Tipo de donación" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items: _vm.ItemsDonation,
                                                    "item-text":
                                                      "name_of_income",
                                                    "item-value": "id",
                                                    label: "Tipo de donación",
                                                    "error-messages": errors
                                                  },
                                                  on: { change: _vm.setAmount },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .donation_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "donation_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.donation_id"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      attrs: { name: "Monto" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Monto",
                                                    hint: _vm.editedItem.amount,
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.amount,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "amount",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.amount"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Cantidad",
                                        rules: "numeric"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Cantidad",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.quantity,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "quantity",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.quantity"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          block: "",
                                          rounded: "",
                                          dark: "",
                                          color: "secondary"
                                        },
                                        on: { click: _vm.invoice_push }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          Agregar\n                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          "max-width": "500",
                                          color: "round"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list",
                                          [
                                            _c(
                                              "v-list-item-group",
                                              [
                                                _vm._l(_vm.items, function(
                                                  item,
                                                  index
                                                ) {
                                                  return [
                                                    _c("v-list-item", {
                                                      key: item.title,
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var active =
                                                                ref.active
                                                              var toggle =
                                                                ref.toggle
                                                              return [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        domProps: {
                                                                          textContent: _vm._s(
                                                                            item.donation
                                                                          )
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      {
                                                                        staticClass:
                                                                          "text--primary"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Monto: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              _vm._f(
                                                                                "currency"
                                                                              )(
                                                                                item.amount
                                                                              )
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Cantidad: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              item.quantity
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Subtotal: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              _vm._f(
                                                                                "currency"
                                                                              )(
                                                                                item.sub_total
                                                                              )
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
                                                    }),
                                                    _vm._v(" "),
                                                    index + 1 < _vm.items.length
                                                      ? _c("v-divider", {
                                                          key: index,
                                                          staticClass: "my-0"
                                                        })
                                                      : _vm._e()
                                                  ]
                                                })
                                              ],
                                              2
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-actions",
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "headline px-4" },
                                          [
                                            _vm._v(
                                              "\n                            Total: " +
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.total_value()
                                                  )
                                                ) +
                                                "\n                          "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Tipo de pago",
                                            rules: "required"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-autocomplete", {
                                                      attrs: {
                                                        items:
                                                          _vm.ItemsTypePayment,
                                                        "item-text": "name",
                                                        "item-value": "id",
                                                        label: "Tipo de pago",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .type_payment_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "type_payment_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.type_payment_id"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { loading: _vm.loading, color: "primary" },
                            on: {
                              click: function($event) {
                                return passes(_vm.save)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                  Guardar\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { text: "" }, on: { click: _vm.close } },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Index.vue?vue&type=template&id=5f3641f2&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Index.vue?vue&type=template&id=5f3641f2& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12", sm: "6", md: "1" } }, [
            _c("span", { staticClass: "headline dark-blue--text" }, [
              _vm._v("Reporte")
            ])
          ]),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "mx-6",
            attrs: { inset: "", vertical: "" }
          }),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", md: "3" } },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.items,
                  "item-value": "id",
                  "item-text": "name",
                  label: "Seleccione el tipo de reporte"
                },
                on: { change: _vm.search },
                model: {
                  value: _vm.opc,
                  callback: function($$v) {
                    _vm.opc = $$v
                  },
                  expression: "opc"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", md: "4" } },
            [
              _c(
                "v-menu",
                {
                  ref: "menu",
                  attrs: {
                    "close-on-content-click": false,
                    "return-value": _vm.dates,
                    transition: "scale-transition",
                    "offset-y": "",
                    "min-width": "290px"
                  },
                  on: {
                    "update:returnValue": function($event) {
                      _vm.dates = $event
                    },
                    "update:return-value": function($event) {
                      _vm.dates = $event
                    }
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-text-field",
                            _vm._g(
                              _vm._b(
                                {
                                  attrs: {
                                    label: "Rango de fecha",
                                    "prepend-inner-icon": "mdi-calendar",
                                    readonly: ""
                                  },
                                  model: {
                                    value: _vm.dateRangeText,
                                    callback: function($$v) {
                                      _vm.dateRangeText = $$v
                                    },
                                    expression: "dateRangeText "
                                  }
                                },
                                "v-text-field",
                                attrs,
                                false
                              ),
                              on
                            )
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.menu,
                    callback: function($$v) {
                      _vm.menu = $$v
                    },
                    expression: "menu"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-date-picker",
                    {
                      attrs: { "no-title": "", range: "", color: "primary" },
                      model: {
                        value: _vm.dates,
                        callback: function($$v) {
                          _vm.dates = $$v
                        },
                        expression: "dates"
                      }
                    },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.search }
                        },
                        [_vm._v("Aceptar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              _vm.menu = false
                            }
                          }
                        },
                        [_vm._v("Cancelar")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.opc == 1
            ? _c(
                "v-col",
                { attrs: { cols: "12", sm: "6", md: "3" } },
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.ItemsDonation,
                      "item-value": "id",
                      "item-text": "name_of_income",
                      label: "Tipo de donación"
                    },
                    on: { change: _vm.search },
                    model: {
                      value: _vm.donation_id,
                      callback: function($$v) {
                        _vm.donation_id = $$v
                      },
                      expression: "donation_id"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.opc == 2
            ? _c(
                "v-col",
                { attrs: { cols: "12", sm: "6", md: "3" } },
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.ItemsTypeExpenses,
                      "item-value": "id",
                      "item-text": "name",
                      label: "Tipo de gasto"
                    },
                    on: { change: _vm.search },
                    model: {
                      value: _vm.type_expense_id,
                      callback: function($$v) {
                        _vm.type_expense_id = $$v
                      },
                      expression: "type_expense_id"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.opc == 2
            ? _c(
                "v-col",
                { attrs: { cols: "12", sm: "6", md: "3" } },
                [
                  _c("v-select", {
                    attrs: {
                      items: _vm.ItemsProductService,
                      "item-value": "id",
                      "item-text": "name",
                      label: "Proveedores"
                    },
                    on: { change: _vm.search },
                    model: {
                      value: _vm.product_service_id,
                      callback: function($$v) {
                        _vm.product_service_id = $$v
                      },
                      expression: "product_service_id"
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _vm.opc > 0
            ? _c(
                "v-col",
                { staticClass: "text-right", attrs: { cols: "12" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        loading: _vm.loading_pdf,
                        color: "red darken-2",
                        icon: "",
                        dark: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.export_pdf_excel("pdf")
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { large: "" } }, [
                        _vm._v("mdi-file-pdf")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        loading: _vm.loading_excel,
                        color: "green darken-3",
                        dark: "",
                        icon: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.export_pdf_excel("xlsx")
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { large: "" } }, [
                        _vm._v("mdi-file-excel")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                { staticClass: "shadow-large round" },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-0",
                    attrs: {
                      loading: _vm.loading,
                      headers: _vm.headers,
                      items: _vm.reports_data
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "no-data",
                        fn: function() {
                          return [
                            _c(
                              "v-alert",
                              {
                                staticClass: "mt-4",
                                attrs: {
                                  color: "secondary",
                                  dark: "",
                                  type: "info",
                                  dense: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n              Debe indicar el tipo de reporte a visualizar\n\n            "
                                )
                              ]
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "item.amount",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(_vm._s(_vm._f("currency")(item.amount)))
                          ]
                        }
                      },
                      {
                        key: "item.quantity",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(_vm._s(_vm._f("currency")(item.quantity)))
                          ]
                        }
                      },
                      {
                        key: "item.created_at",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(_vm._s(_vm._f("date")(item.created_at)))
                            ])
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=template&id=47cb7345&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=template&id=47cb7345& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "800px", persistent: "" },
      model: {
        value: _vm.active,
        callback: function($$v) {
          _vm.active = $$v
        },
        expression: "active"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { color: "#fafafa" } },
        [
          _c("v-card-title", [
            _c("span", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.formTitle))
            ])
          ]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "obs",
            attrs: { tag: "form" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var passes = ref.passes
                  return [
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-list",
                                      {
                                        staticClass: "shadow-small",
                                        attrs: {
                                          "two-line": "",
                                          subheader: "",
                                          color: "secondary round",
                                          dark: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-item",
                                          [
                                            _c(
                                              "v-list-item-avatar",
                                              {
                                                attrs: { size: "80", tile: "" }
                                              },
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    src:
                                                      _vm.itemCompany[0].image
                                                        .path,
                                                    contain: ""
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c(
                                                  "v-list-item-title",
                                                  {
                                                    staticClass: "headline mb-2"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          _vm.itemCompany[0]
                                                            .name
                                                        ) +
                                                        "\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle"),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("RUC: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0].ruc
                                                      ) +
                                                      "   \n                              "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("TLF: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0].phone
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "font-weight-bold"
                                                    },
                                                    [_vm._v("DIRECCIÓN: ")]
                                                  ),
                                                  _vm._v(
                                                    "\n                                  " +
                                                      _vm._s(
                                                        _vm.itemCompany[0]
                                                          .address
                                                      ) +
                                                      "\n                              "
                                                  )
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-action",
                                              [
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "text-uppercase mb-2"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    Recibo de caja\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "px-2",
                                                    staticStyle: {
                                                      border: "1px solid grey",
                                                      "border-radius": "5px"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                    N° " +
                                                        _vm._s(
                                                          _vm.editedItem.number
                                                        ) +
                                                        "\n                                "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer")
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-subheader",
                                      { staticClass: "pb-0" },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "secondary" } },
                                          [_vm._v("mdi-account")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "pb-0 dark-blue--text font-weight-bold"
                                          },
                                          [_vm._v("Cliente  ")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mt-0" })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("v-autocomplete", {
                                      attrs: {
                                        items: _vm.ItemsCustomer,
                                        "item-text": "dni",
                                        "item-value": "id",
                                        label:
                                          "Buscar Cédula o  NIT del cliente",
                                        hint:
                                          "Indique el numero de cédula o NIT del cliente"
                                      },
                                      on: { change: _vm.getFilter },
                                      model: {
                                        value: _vm.editedItem.client_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.editedItem,
                                            "client_id",
                                            $$v
                                          )
                                        },
                                        expression: "editedItem.client_id"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Nombre de cliente",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Nombre de cliente",
                                                    readonly: "",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .name_client,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "name_client",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.name_client"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c(
                                      "v-subheader",
                                      { staticClass: "pb-0" },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "secondary" } },
                                          [_vm._v("mdi-receipt")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "pb-0 dark-blue--text font-weight-bold"
                                          },
                                          [_vm._v("Factura  ")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-divider", { staticClass: "mt-0" })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: { name: "Tipo de donación" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items: _vm.ItemsDonation,
                                                    "item-text":
                                                      "name_of_income",
                                                    "item-value": "id",
                                                    label: "Tipo de donación",
                                                    "error-messages": errors
                                                  },
                                                  on: { change: _vm.setAmount },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .donation_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "donation_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.donation_id"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      attrs: { name: "Monto" },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Monto",
                                                    hint: _vm.editedItem.amount,
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.amount,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "amount",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.amount"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Cantidad",
                                        rules: "numeric"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Cantidad",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.quantity,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "quantity",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.quantity"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          block: "",
                                          rounded: "",
                                          dark: "",
                                          color: "secondary"
                                        },
                                        on: { click: _vm.invoice_push }
                                      },
                                      [
                                        _vm._v(
                                          "\n                          Agregar\n                        "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "mx-auto",
                                        attrs: {
                                          "max-width": "500",
                                          color: "round"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list",
                                          [
                                            _c(
                                              "v-list-item-group",
                                              [
                                                _vm._l(_vm.items, function(
                                                  item,
                                                  index
                                                ) {
                                                  return [
                                                    _c("v-list-item", {
                                                      key: item.title,
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function(ref) {
                                                              var active =
                                                                ref.active
                                                              var toggle =
                                                                ref.toggle
                                                              return [
                                                                _c(
                                                                  "v-list-item-content",
                                                                  [
                                                                    _c(
                                                                      "v-list-item-title",
                                                                      {
                                                                        domProps: {
                                                                          textContent: _vm._s(
                                                                            item.donation
                                                                          )
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      {
                                                                        staticClass:
                                                                          "text--primary"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Monto: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              _vm._f(
                                                                                "currency"
                                                                              )(
                                                                                item.amount
                                                                              )
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Cantidad: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              item.quantity
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "v-list-item-subtitle",
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "Subtotal: "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          "\n                                      " +
                                                                            _vm._s(
                                                                              _vm._f(
                                                                                "currency"
                                                                              )(
                                                                                item.sub_total
                                                                              )
                                                                            ) +
                                                                            "\n                                    "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              ]
                                                            }
                                                          }
                                                        ],
                                                        null,
                                                        true
                                                      )
                                                    }),
                                                    _vm._v(" "),
                                                    index + 1 < _vm.items.length
                                                      ? _c("v-divider", {
                                                          key: index,
                                                          staticClass: "my-0"
                                                        })
                                                      : _vm._e()
                                                  ]
                                                })
                                              ],
                                              2
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-actions",
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "headline px-4" },
                                          [
                                            _vm._v(
                                              "\n                            Total: " +
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    _vm.total_value()
                                                  )
                                                ) +
                                                "\n                          "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("ValidationProvider", {
                                          attrs: {
                                            name: "Tipo de pago",
                                            rules: "required"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "default",
                                                fn: function(ref) {
                                                  var errors = ref.errors
                                                  return [
                                                    _c("v-autocomplete", {
                                                      attrs: {
                                                        items:
                                                          _vm.ItemsTypePayment,
                                                        "item-text": "name",
                                                        "item-value": "id",
                                                        label: "Tipo de pago",
                                                        "error-messages": errors
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .type_payment_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "type_payment_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.type_payment_id"
                                                      }
                                                    })
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { loading: _vm.loading, color: "primary" },
                            on: {
                              click: function($event) {
                                return passes(_vm.save)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                  Guardar\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          { attrs: { text: "" }, on: { click: _vm.close } },
                          [_vm._v("Cancelar")]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Index.vue?vue&type=template&id=696d7a65&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reports/Monthly/Index.vue?vue&type=template&id=696d7a65& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12", sm: "6", md: "1" } }, [
            _c("span", { staticClass: "headline dark-blue--text" }, [
              _vm._v("Reporte mensual")
            ])
          ]),
          _vm._v(" "),
          _c("v-divider", {
            staticClass: "mx-6",
            attrs: { inset: "", vertical: "" }
          }),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", md: "3" } },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.items,
                  "item-value": "id",
                  "item-text": "name",
                  label: "Seleccione el tipo de reporte"
                },
                on: { change: _vm.search },
                model: {
                  value: _vm.opc,
                  callback: function($$v) {
                    _vm.opc = $$v
                  },
                  expression: "opc"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "6", md: "4" } },
            [
              _c(
                "v-menu",
                {
                  ref: "menu",
                  attrs: {
                    "close-on-content-click": false,
                    "return-value": _vm.dates,
                    transition: "scale-transition",
                    "offset-y": "",
                    "min-width": "290px"
                  },
                  on: {
                    "update:returnValue": function($event) {
                      _vm.dates = $event
                    },
                    "update:return-value": function($event) {
                      _vm.dates = $event
                    }
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-text-field",
                            _vm._g(
                              _vm._b(
                                {
                                  attrs: {
                                    label: "Rango de fecha",
                                    "prepend-inner-icon": "mdi-calendar",
                                    readonly: ""
                                  },
                                  model: {
                                    value: _vm.dateRangeText,
                                    callback: function($$v) {
                                      _vm.dateRangeText = $$v
                                    },
                                    expression: "dateRangeText"
                                  }
                                },
                                "v-text-field",
                                attrs,
                                false
                              ),
                              on
                            )
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.menu,
                    callback: function($$v) {
                      _vm.menu = $$v
                    },
                    expression: "menu"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-date-picker",
                    {
                      attrs: { "no-title": "", range: "", color: "primary" },
                      model: {
                        value: _vm.dates,
                        callback: function($$v) {
                          _vm.dates = $$v
                        },
                        expression: "dates"
                      }
                    },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary" },
                          on: { click: _vm.search }
                        },
                        [_vm._v("Aceptar")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              _vm.menu = false
                            }
                          }
                        },
                        [_vm._v("Cancelar")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _vm.opc > 0
            ? _c(
                "v-col",
                { staticClass: "text-right", attrs: { cols: "12" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        loading: _vm.loading_pdf,
                        color: "green darken-3",
                        icon: "",
                        dark: ""
                      },
                      on: { click: _vm.jsexport }
                    },
                    [
                      _c("v-icon", { attrs: { large: "" } }, [
                        _vm._v("mdi-file-excel")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                { staticClass: "shadow-large round" },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-0",
                    attrs: {
                      loading: _vm.loading,
                      headers: _vm.headers,
                      items: _vm.reports_data,
                      "hide-default-footer": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "no-data",
                        fn: function() {
                          return [
                            _c(
                              "v-alert",
                              {
                                staticClass: "mt-4",
                                attrs: {
                                  color: "secondary",
                                  dark: "",
                                  type: "info",
                                  dense: ""
                                }
                              },
                              [_vm._v(_vm._s(_vm.text_table))]
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "item.amount",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm._f("currency")(item.amount)) +
                                "\n          "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.quantity",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm._f("currency")(item.quantity)) +
                                "\n          "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.created_at",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", [
                              _vm._v(_vm._s(_vm._f("date")(item.created_at)))
                            ])
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.opc != 0
            ? _c(
                "v-col",
                { staticClass: "text-right", attrs: { cols: "12" } },
                [
                  _c(
                    "v-chip",
                    {
                      staticClass: "ma-2",
                      attrs: { color: "green", "text-color": "white" }
                    },
                    [
                      _vm._v(
                        "TOTAL: " + _vm._s(_vm._f("currency")(_vm.TotalCost))
                      )
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Company/Dialog.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Company/Dialog.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_vue_vue_type_template_id_a34b9536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.vue?vue&type=template&id=a34b9536& */ "./resources/js/components/Company/Dialog.vue?vue&type=template&id=a34b9536&");
/* harmony import */ var _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Company/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialog_vue_vue_type_template_id_a34b9536___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialog_vue_vue_type_template_id_a34b9536___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Company/Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Company/Dialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Company/Dialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Company/Dialog.vue?vue&type=template&id=a34b9536&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Company/Dialog.vue?vue&type=template&id=a34b9536& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_a34b9536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=template&id=a34b9536& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Dialog.vue?vue&type=template&id=a34b9536&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_a34b9536___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_a34b9536___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Company/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Company/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_32edf445___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=32edf445& */ "./resources/js/components/Company/Index.vue?vue&type=template&id=32edf445&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Company/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_32edf445___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_32edf445___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Company/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Company/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Company/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Company/Index.vue?vue&type=template&id=32edf445&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Company/Index.vue?vue&type=template&id=32edf445& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_32edf445___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=32edf445& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Company/Index.vue?vue&type=template&id=32edf445&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_32edf445___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_32edf445___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Expenses/Expenses/Dialog.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Expenses/Expenses/Dialog.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_vue_vue_type_template_id_6a82219a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.vue?vue&type=template&id=6a82219a& */ "./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=template&id=6a82219a&");
/* harmony import */ var _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialog_vue_vue_type_template_id_6a82219a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialog_vue_vue_type_template_id_6a82219a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Expenses/Expenses/Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=template&id=6a82219a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=template&id=6a82219a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_6a82219a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=template&id=6a82219a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Dialog.vue?vue&type=template&id=6a82219a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_6a82219a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_6a82219a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Expenses/Expenses/Index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Expenses/Expenses/Index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3d786e92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3d786e92& */ "./resources/js/components/Expenses/Expenses/Index.vue?vue&type=template&id=3d786e92&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Expenses/Expenses/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3d786e92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3d786e92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Expenses/Expenses/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Expenses/Expenses/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Expenses/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Expenses/Expenses/Index.vue?vue&type=template&id=3d786e92&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Expenses/Index.vue?vue&type=template&id=3d786e92& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d786e92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3d786e92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Expenses/Index.vue?vue&type=template&id=3d786e92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d786e92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3d786e92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Expenses/Types/Dialog.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Expenses/Types/Dialog.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_vue_vue_type_template_id_7da153f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.vue?vue&type=template&id=7da153f7& */ "./resources/js/components/Expenses/Types/Dialog.vue?vue&type=template&id=7da153f7&");
/* harmony import */ var _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Expenses/Types/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialog_vue_vue_type_template_id_7da153f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialog_vue_vue_type_template_id_7da153f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Expenses/Types/Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Expenses/Types/Dialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Types/Dialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Expenses/Types/Dialog.vue?vue&type=template&id=7da153f7&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Types/Dialog.vue?vue&type=template&id=7da153f7& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_7da153f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=template&id=7da153f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Dialog.vue?vue&type=template&id=7da153f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_7da153f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_7da153f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Expenses/Types/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Expenses/Types/Index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_41dfbb73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=41dfbb73& */ "./resources/js/components/Expenses/Types/Index.vue?vue&type=template&id=41dfbb73&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Expenses/Types/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_41dfbb73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_41dfbb73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Expenses/Types/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Expenses/Types/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Expenses/Types/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Expenses/Types/Index.vue?vue&type=template&id=41dfbb73&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Expenses/Types/Index.vue?vue&type=template&id=41dfbb73& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_41dfbb73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=41dfbb73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Expenses/Types/Index.vue?vue&type=template&id=41dfbb73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_41dfbb73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_41dfbb73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Invoices/Dialog.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Invoices/Dialog.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_vue_vue_type_template_id_8bd7f6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.vue?vue&type=template&id=8bd7f6d4& */ "./resources/js/components/Invoices/Dialog.vue?vue&type=template&id=8bd7f6d4&");
/* harmony import */ var _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Invoices/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialog_vue_vue_type_template_id_8bd7f6d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialog_vue_vue_type_template_id_8bd7f6d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Invoices/Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Invoices/Dialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Invoices/Dialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Invoices/Dialog.vue?vue&type=template&id=8bd7f6d4&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Invoices/Dialog.vue?vue&type=template&id=8bd7f6d4& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_8bd7f6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=template&id=8bd7f6d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Dialog.vue?vue&type=template&id=8bd7f6d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_8bd7f6d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_8bd7f6d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Invoices/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Invoices/Index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_4c14faf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4c14faf4& */ "./resources/js/components/Invoices/Index.vue?vue&type=template&id=4c14faf4&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Invoices/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4c14faf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_4c14faf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Invoices/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Invoices/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Invoices/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Invoices/Index.vue?vue&type=template&id=4c14faf4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Invoices/Index.vue?vue&type=template&id=4c14faf4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4c14faf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=4c14faf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Invoices/Index.vue?vue&type=template&id=4c14faf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4c14faf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4c14faf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ProductService/Types/Dialog.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/ProductService/Types/Dialog.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_vue_vue_type_template_id_46a20dec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.vue?vue&type=template&id=46a20dec& */ "./resources/js/components/ProductService/Types/Dialog.vue?vue&type=template&id=46a20dec&");
/* harmony import */ var _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductService/Types/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialog_vue_vue_type_template_id_46a20dec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialog_vue_vue_type_template_id_46a20dec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductService/Types/Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductService/Types/Dialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ProductService/Types/Dialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductService/Types/Dialog.vue?vue&type=template&id=46a20dec&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/ProductService/Types/Dialog.vue?vue&type=template&id=46a20dec& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_46a20dec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=template&id=46a20dec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Dialog.vue?vue&type=template&id=46a20dec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_46a20dec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_46a20dec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ProductService/Types/Index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/ProductService/Types/Index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2f956ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2f956ede& */ "./resources/js/components/ProductService/Types/Index.vue?vue&type=template&id=2f956ede&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductService/Types/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2f956ede___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2f956ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductService/Types/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductService/Types/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/ProductService/Types/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ProductService/Types/Index.vue?vue&type=template&id=2f956ede&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ProductService/Types/Index.vue?vue&type=template&id=2f956ede& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2f956ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2f956ede& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductService/Types/Index.vue?vue&type=template&id=2f956ede&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2f956ede___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2f956ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Reports/Dialog.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Reports/Dialog.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_vue_vue_type_template_id_807eba3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.vue?vue&type=template&id=807eba3a& */ "./resources/js/components/Reports/Dialog.vue?vue&type=template&id=807eba3a&");
/* harmony import */ var _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Reports/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialog_vue_vue_type_template_id_807eba3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialog_vue_vue_type_template_id_807eba3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reports/Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reports/Dialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Reports/Dialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reports/Dialog.vue?vue&type=template&id=807eba3a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Reports/Dialog.vue?vue&type=template&id=807eba3a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_807eba3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=template&id=807eba3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Dialog.vue?vue&type=template&id=807eba3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_807eba3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_807eba3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Reports/Index.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Reports/Index.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5f3641f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5f3641f2& */ "./resources/js/components/Reports/Index.vue?vue&type=template&id=5f3641f2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5f3641f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5f3641f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reports/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reports/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Reports/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Reports/Index.vue?vue&type=template&id=5f3641f2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Reports/Index.vue?vue&type=template&id=5f3641f2& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5f3641f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5f3641f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Index.vue?vue&type=template&id=5f3641f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5f3641f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5f3641f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Reports/Monthly/Dialog.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Reports/Monthly/Dialog.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dialog_vue_vue_type_template_id_47cb7345___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dialog.vue?vue&type=template&id=47cb7345& */ "./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=template&id=47cb7345&");
/* harmony import */ var _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dialog.vue?vue&type=script&lang=js& */ "./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dialog_vue_vue_type_template_id_47cb7345___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dialog_vue_vue_type_template_id_47cb7345___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reports/Monthly/Dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=template&id=47cb7345&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=template&id=47cb7345& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_47cb7345___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dialog.vue?vue&type=template&id=47cb7345& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Dialog.vue?vue&type=template&id=47cb7345&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_47cb7345___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dialog_vue_vue_type_template_id_47cb7345___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Reports/Monthly/Index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Reports/Monthly/Index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_696d7a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=696d7a65& */ "./resources/js/components/Reports/Monthly/Index.vue?vue&type=template&id=696d7a65&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Reports/Monthly/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_696d7a65___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_696d7a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reports/Monthly/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reports/Monthly/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Reports/Monthly/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Reports/Monthly/Index.vue?vue&type=template&id=696d7a65&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Reports/Monthly/Index.vue?vue&type=template&id=696d7a65& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_696d7a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=696d7a65& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reports/Monthly/Index.vue?vue&type=template&id=696d7a65&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_696d7a65___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_696d7a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);