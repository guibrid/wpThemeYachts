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
var RichText = wp.blockEditor.RichText;
var ALLOWED_BLOCKS = ['core/button'];
/* Accordion Block */

registerBlockType('alecaddd/accordion-block', {
  title: 'Accordion block',
  description: 'Bloc à intégrer dans l\'accordion.',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    id: {
      type: 'string',
      default: 'One'
    },
    title: {
      type: 'string'
    },
    content: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var id = attributes.id,
        title = attributes.title,
        content = attributes.content; // custom functions

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

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card"
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "div",
      value: content,
      placeholder: "Votre contenu",
      onChange: updateContent
    }))))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var id = attributes.id,
        title = attributes.title,
        content = attributes.content;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "card"
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "div",
      value: content
    }))));
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
var RichText = wp.blockEditor.RichText;
var ALLOWED_BLOCKS = ['core/button'];
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
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        content = attributes.content; // custom functions

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

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "boatInfosBloc",
      "data-aos": "zoom-in"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h4",
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
        content = attributes.content;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "boatInfosBloc",
      "data-aos": "zoom-in"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h4",
      value: title
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "div",
      value: content
    }));
  }
});

/***/ }),

/***/ "./src/blocks/custom-cta.js":
/*!**********************************!*\
  !*** ./src/blocks/custom-cta.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
var ALLOWED_BLOCKS = ['core/button'];
registerBlockType('alecaddd/custom-cta', {
  title: 'Call to aLign',
  description: 'Block to generate a custom Call to Action',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p',
      default: 'Block content can be aligned with toolbar.'
    },
    alignment: {
      type: 'string',
      default: 'center'
    }
  },
  // custom functions
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        focus = _ref.focus;
    var content = attributes.content,
        alignment = attributes.alignment;

    function onChangeContent(updatedContent) {
      setAttributes({
        content: updatedContent
      });
    }

    function onChangeAlignment(updatedAlignment) {
      setAttributes({
        alignment: updatedAlignment
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: onChangeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      value: content,
      style: {
        textAlign: alignment
      },
      onChange: onChangeContent,
      onFocus: focus
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes,
        setAttributes = _ref2.setAttributes;
    var content = attributes.content,
        alignment = attributes.alignment;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        textAlign: alignment
      }
    }, content));
  }
});

/***/ }),

/***/ "./src/blocks/custom-cta2.js":
/*!***********************************!*\
  !*** ./src/blocks/custom-cta2.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('alecaddd/custom-cta2', {
  title: 'Call to Action 2',
  description: 'Block to generate a custom Call to Action',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    title: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    // custom functions
    function updateTitle(event) {
      //console.log(event.target.value);
      setAttributes({
        title: event.target.value
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      value: attributes.title,
      onChange: updateTitle,
      type: "text"
    });
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Title is : ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", null, attributes.title));
  }
});

/***/ }),

/***/ "./src/blocks/custom-cta4.js":
/*!***********************************!*\
  !*** ./src/blocks/custom-cta4.js ***!
  \***********************************/
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
registerBlockType('alecaddd/custom-cta4', {
  title: 'Call to Action 4',
  description: 'Block to generate a custom Call to Action',
  icon: 'format-image',
  category: 'layout',
  supports: {
    // Hey WP, I want to use your alignment toolbar!
    align: true
  },
  // custom attributes
  attributes: {
    align: {
      type: 'string',
      default: 'center'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    titleColor: {
      type: 'string',
      default: 'black'
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    backgroundImage: {
      type: 'string',
      default: null
    },
    overlayColor: {
      type: 'string',
      default: 'black'
    },
    overlayOpacity: {
      type: 'number',
      default: 0.3
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var align = attributes.align,
        title = attributes.title,
        body = attributes.body,
        titleColor = attributes.titleColor,
        backgroundImage = attributes.backgroundImage,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity; // custom functions

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function onTitleColorChange(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    function onSelectImage(newImage) {
      console.log(newImage);
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    }

    function onOverlayColor(newColor) {
      console.log(newColor);
      setAttributes({
        overlayColor: newColor
      });
    }

    function onOverlayOpacity(newOpacity) {
      console.log(newOpacity);
      setAttributes({
        overlayOpacity: newOpacity
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Title color'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select title color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: titleColor,
      onChange: onTitleColorChange
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Background image settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a Background Image")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onSelectImage,
      type: "image",
      value: backgroundImage,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "editor-media-placeholder__button is-button is-default is-large",
          icon: "upload",
          onClick: open
        }, "Background Image");
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginTop: '20px',
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Overlay color:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: overlayColor,
      onChange: onOverlayColor
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: 'Overlay opacity',
      value: overlayOpacity,
      onChange: onOverlayOpacity,
      min: 0,
      max: 1,
      step: 0.05
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: align
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-overlay",
      style: {
        background: overlayColor,
        opacity: overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Your Title",
      value: title,
      onChange: onChangeTitle,
      style: {
        color: titleColor
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Your body",
      value: body,
      onChange: onChangeBody
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      className: "monBoutton"
    }))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var align = attributes.align,
        title = attributes.title,
        body = attributes.body,
        titleColor = attributes.titleColor,
        backgroundImage = attributes.backgroundImage,
        overlayColor = attributes.overlayColor,
        overlayOpacity = attributes.overlayOpacity;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-container",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: align
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "cta-overlay",
      style: {
        background: overlayColor,
        opacity: overlayOpacity
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: titleColor
      }
    }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      value: body
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, {
      className: "monBoutton"
    }));
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
      selector: 'h1'
    },
    titleColor: {
      type: 'string',
      default: '#C69C6C'
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
        subtitle = attributes.subtitle,
        titleColor = attributes.titleColor; // custom functions

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

    function onTitleColorChange(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Title color'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select title color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: titleColor,
      onChange: onTitleColorChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "titre-h1-style2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Votre titre",
      value: title,
      onChange: onChangeTitle,
      style: {
        color: titleColor
      }
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
        subtitle = attributes.subtitle,
        titleColor = attributes.titleColor;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "titre-h1-style2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: titleColor
      }
    }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
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
/*
* GALERY BLOCK
*/

registerBlockType('alecaddd/custom-galery', {
  title: 'Custom Galery slider',
  description: 'Block to generate a custom Call to Action',
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
      title: 'Background image settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "S\xE9lectionnez vos images")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
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
        }, "Background Image");
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "toto", console.log(images), images !== undefined ? images.map(function (img) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: img.sizes.full.url
      });
    }) : console.log('tota'))];
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var images = attributes.images;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "toto", console.log(images), images !== undefined ? images.map(function (img) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: img.sizes.full.url
      });
    }) : console.log('tota'));
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
/* harmony import */ var _blocks_custom_cta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/custom-cta */ "./src/blocks/custom-cta.js");
/* harmony import */ var _blocks_custom_cta2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/custom-cta2 */ "./src/blocks/custom-cta2.js");
/* harmony import */ var _blocks_boat_infos_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/boat-infos-block */ "./src/blocks/boat-infos-block.js");
/* harmony import */ var _blocks_custom_titre_style2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/custom-titre-style2 */ "./src/blocks/custom-titre-style2.js");
/* harmony import */ var _blocks_galery_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/galery-block */ "./src/blocks/galery-block.js");
/* harmony import */ var _blocks_custom_cta4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/custom-cta4 */ "./src/blocks/custom-cta4.js");
/* harmony import */ var _blocks_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/accordion */ "./src/blocks/accordion.js");
/* harmony import */ var _blocks_accordion_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/accordion-block */ "./src/blocks/accordion-block.js");









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