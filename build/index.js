/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/accordion-block.js":
/*!***************************************!*\
  !*** ./src/blocks/accordion-block.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var PanelBody = wp.components.PanelBody;
/* Accordion Block */

registerBlockType('alecaddd/accordion-block', {
  title: 'Accordion block',
  description: 'Bloc à intégrer dans l\'accordion.',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    id: {
      type: 'string'
    },
    title: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var id = attributes.id,
        title = attributes.title; // custom functions

    function updateid(event) {
      //console.log(newId)
      setAttributes({
        id: event.target.value
      });
    }

    function updateTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'ID du block accordion'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Chaque block doit avoir un id diff\xE9rent. Par exemple: block1, Block2, Block3,..."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      value: id,
      onChange: updateid,
      type: "text",
      required: true
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card",
      "data-aos": "zoom-in"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card-header",
      id: "heading" + id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
      className: "mb-0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: "btn btn-link",
      "data-toggle": "collapse",
      "data-target": "#collapse" + id,
      "aria-expanded": "true",
      "aria-controls": "collapse" + id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "span",
      value: title,
      placeholder: "Votre titre",
      onChange: updateTitle
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "collapse" + id,
      className: "collapse show",
      "aria-labelledby": "heading" + id,
      "data-parent": "#accordion"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var id = attributes.id,
        title = attributes.title;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card",
      "data-aos": "zoom-in"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card-header",
      id: "heading" + id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", {
      className: "mb-0"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      className: "btn btn-link",
      "data-toggle": "collapse",
      "data-target": "#collapse" + id,
      "aria-expanded": "true",
      "aria-controls": "collapse" + id
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "span",
      value: title
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "collapse" + id,
      className: "collapse show",
      "aria-labelledby": "heading" + id,
      "data-parent": "#accordion"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null))));
  }
});

/***/ }),

/***/ "./src/blocks/accordion.js":
/*!*********************************!*\
  !*** ./src/blocks/accordion.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var ALLOWED_BLOCKS = ['alecaddd/accordion-block'];
/* Accordion */

registerBlockType('alecaddd/accordion', {
  title: 'Accordion',
  description: 'Ajoute une liste d\'accordion',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    title: {
      type: 'string',
      default: 'accordion'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes;
    var title = attributes.title;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: title
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var title = attributes.title;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: title
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/boat-infos-block.js":
/*!****************************************!*\
  !*** ./src/blocks/boat-infos-block.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var PanelBody = wp.components.PanelBody;
/* Bateaux Infos Block */

registerBlockType('alecaddd/bateau-infos-bloc', {
  title: 'Bateau Infos Bloc',
  description: 'Bloc dinformation sur un bateau.',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    title: {
      type: 'string'
    },
    content: {
      type: 'string'
    },
    icone: {
      type: 'string',
      default: 'Default'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        content = attributes.content,
        icone = attributes.icone; // custom functions

    function updateTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function updateContent(newContent) {
      setAttributes({
        content: newContent
      });
    }

    function updateIcone(event) {
      setAttributes({
        icone: event.target.value
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Selection de l\'icone'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", {
      onChange: updateIcone
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Default"
    }, "Default"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Presta"
    }, "Prestation"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Capacite"
    }, "Capacit\xE9"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Dispo"
    }, "Mise \xE0 disposition"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Details"
    }, "D\xE9tails"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Infos"
    }, "Informations"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Firework"
    }, "Firework"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Offre"
    }, "Offre"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Alarm"
    }, "Alarme"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Paiement"
    }, "Paiement"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Zoom"
    }, "Zoom"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "Check"
    }, "Check")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "boatInfosBloc",
      "data-aos": "zoom-in"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h4",
      className: "icon" + icone,
      value: title,
      placeholder: "Votre titre",
      onChange: updateTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "div",
      value: content,
      placeholder: "Votre contenu",
      onChange: updateContent
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var title = attributes.title,
        content = attributes.content,
        icone = attributes.icone;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "boatInfosBloc",
      "data-aos": "zoom-in"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h4",
      className: "icon" + icone,
      value: title
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "div",
      value: content
    }));
  }
});

/***/ }),

/***/ "./src/blocks/custom-button.js":
/*!*************************************!*\
  !*** ./src/blocks/custom-button.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var PanelBody = wp.components.PanelBody;
/*****
CUSTOm BUTTON
*/

registerBlockType('alecaddd/custom-button', {
  title: 'Yatchs bouton',
  description: 'Block bouton noir ou blanc',
  icon: 'format-image',
  category: 'common',
  // custom attributes
  attributes: {
    title: {
      type: 'string'
    },
    style: {
      type: 'string',
      default: 'blackButton'
    },
    link: {
      type: 'string',
      default: '#'
    },
    alignment: {
      type: 'string',
      default: 'none'
    },
    target: {
      type: 'string',
      default: '_self'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        style = attributes.style,
        link = attributes.link,
        alignment = attributes.alignment,
        target = attributes.target;

    (function () {
      console.log(target);
    })(); // custom functions


    function onChangeStyle(event) {
      setAttributes({
        style: event.target.value
      });
    }

    function onChangeLink(event) {
      setAttributes({
        link: event.target.value
      });
    }

    function onChangeAlignment(newAlignment) {
      setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    }

    ;

    function onChangeTarget(event) {
      if (event.target.checked === true) {
        setAttributes({
          target: '_blank'
        });
      } else {
        setAttributes({
          target: '_self'
        });
      }
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Lien du bouton'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      value: link,
      onChange: onChangeLink,
      type: "text"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Style du bouton',
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", {
      onChange: onChangeStyle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "",
      disabled: true,
      selected: true
    }, style), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "blackButton"
    }, "Noir"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      value: "whiteButton"
    }, "Blanc"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Cible du lien',
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      onChange: onChangeTarget,
      type: "checkbox"
    }), " Cochez pour ouvrir dans une nouvelle fen\xEAtre "))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        textAlign: alignment,
        margin: '20px 0'
      }
    }, console.log(target), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "a",
      className: "customButton " + style,
      placeholder: "Texte du bouton",
      href: link,
      value: title,
      rel: "noopener noreferrer",
      target: target,
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        });
      }
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var title = attributes.title,
        style = attributes.style,
        link = attributes.link,
        alignment = attributes.alignment,
        target = attributes.target;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        textAlign: alignment,
        margin: '20px 0'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: link,
      target: target,
      rel: "noopener noreferrer",
      className: "customButton " + style
    }, title, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
      class: "fas fa-chevron-right fa-xs"
    })));
  },
  example: {
    attributes: {
      title: 'Votre bouton',
      link: '#',
      alignment: 'center'
    }
  }
});

/***/ }),

/***/ "./src/blocks/custom-titre-style2.js":
/*!*******************************************!*\
  !*** ./src/blocks/custom-titre-style2.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    RangeControl = _wp$components.RangeControl;
var ALLOWED_BLOCKS = ['core/button'];
/*****
TITRE STYLE 2
*/

registerBlockType('alecaddd/custom-titre-style2', {
  title: 'Titre - Style 2',
  description: 'Block pour créer titre de la page',
  icon: 'format-image',
  category: 'common',
  // custom attributes
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    subtitle: {
      type: 'string',
      source: 'html',
      selector: 'p'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        subtitle = attributes.subtitle; // custom functions

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onChangeSubtitle(newSubtitle) {
      setAttributes({
        subtitle: newSubtitle
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "titre-h1-style2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Votre titre",
      value: title,
      onChange: onChangeTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Votre sous-titre",
      value: subtitle,
      onChange: onChangeSubtitle
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var title = attributes.title,
        subtitle = attributes.subtitle;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "titre-h1-style2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      value: subtitle
    }));
  },
  example: {
    attributes: {
      title: 'Votre titre',
      subtitle: 'Votre sous-titre'
    }
  }
});
/*****
TITRE STYLE 2 END
*/

/***/ }),

/***/ "./src/blocks/galery-block.js":
/*!************************************!*\
  !*** ./src/blocks/galery-block.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button;
/*
* GALERY BLOCK
*/

registerBlockType('alecaddd/custom-galery', {
  title: 'Galerie slider',
  description: 'Génère un galerie de photo avec slider',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    images: {
      type: 'array'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var images = attributes.images; // custom functions

    function onSelectImage(newImage) {
      console.log(newImage);
      setAttributes({
        images: newImage
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Sélectionnez les images de votre galerie'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      multiple: "true",
      value: images,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "editor-media-placeholder__button is-button is-default is-large",
          icon: "upload",
          onClick: open
        }, "Choisir images");
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "carouselExampleIndicators",
      className: "carousel slide customSlider",
      "data-ride": "carousel",
      "data-aos": "zoom-in"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "carousel-inner"
    }, images !== undefined ? images.map(function (img) {
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "carousel-item"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "img",
        style: {
          backgroundImage: "url(".concat(img.sizes.full.url, ")")
        }
      }))];
    }) : console.log('No pics')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "carousel-control-prev",
      href: "#carouselExampleIndicators",
      role: "button",
      "data-slide": "prev"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "carousel-control-prev-icon",
      "aria-hidden": "true"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "sr-only"
    }, "Previous")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "carousel-control-next",
      href: "#carouselExampleIndicators",
      role: "button",
      "data-slide": "next"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "carousel-control-next-icon",
      "aria-hidden": "true"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "sr-only"
    }, "Next")))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var images = attributes.images;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "carouselExampleIndicators",
      className: "carousel slide customSlider",
      "data-ride": "carousel",
      "data-aos": "zoom-in"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "carousel-inner"
    }, images !== undefined ? images.map(function (img) {
      return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        class: "carousel-item"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "img",
        style: {
          backgroundImage: "url(".concat(img.sizes.full.url, ")")
        }
      }))];
    }) : console.log('No pic')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "carousel-control-prev",
      href: "#carouselExampleIndicators",
      role: "button",
      "data-slide": "prev"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "carousel-control-prev-icon",
      "aria-hidden": "true"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "sr-only"
    }, "Previous")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "carousel-control-next",
      href: "#carouselExampleIndicators",
      role: "button",
      "data-slide": "next"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "carousel-control-next-icon",
      "aria-hidden": "true"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "sr-only"
    }, "Next")));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_boat_infos_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/boat-infos-block */ "./src/blocks/boat-infos-block.js");
/* harmony import */ var _blocks_custom_titre_style2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/custom-titre-style2 */ "./src/blocks/custom-titre-style2.js");
/* harmony import */ var _blocks_galery_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/galery-block */ "./src/blocks/galery-block.js");
/* harmony import */ var _blocks_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/accordion */ "./src/blocks/accordion.js");
/* harmony import */ var _blocks_accordion_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/accordion-block */ "./src/blocks/accordion-block.js");
/* harmony import */ var _blocks_custom_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/custom-button */ "./src/blocks/custom-button.js");
//import './blocks/custom-cta';
//import './blocks/custom-cta2';


 //import './blocks/custom-cta4';





/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map