(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-procedural-textures", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-procedural-textures"] = factory(require("babylonjs"));
	else
		root["PTLIB"] = factory(root["BABYLON"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_babylonjs__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./legacy/legacy.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./legacy/legacy.ts":
/*!**************************!*\
  !*** ./legacy/legacy.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var ProceduralTexturesLib = __webpack_require__(/*! ../src/index */ "./src/index.ts");
/**
 * Legacy support, defining window.BABYLON.GridMaterial... (global variable).
 *
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = (typeof global !== 'undefined') ? global : ((typeof window !== 'undefined') ? window : undefined);
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    for (var mat in ProceduralTexturesLib) {
        if (ProceduralTexturesLib.hasOwnProperty(mat)) {
            globalObject.BABYLON[mat] = ProceduralTexturesLib[mat];
        }
    }
}
__export(__webpack_require__(/*! ../src/index */ "./src/index.ts"));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/brick/brickProceduralTexture.fragment.fx":
/*!******************************************************!*\
  !*** ./src/brick/brickProceduralTexture.fragment.fx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 vPosition;\nvarying vec2 vUV;\nuniform float numberOfBricksHeight;\nuniform float numberOfBricksWidth;\nuniform vec3 brickColor;\nuniform vec3 jointColor;\nfloat rand(vec2 n) {\nreturn fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);\n}\nfloat noise(vec2 n) {\nconst vec2 d=vec2(0.0,1.0);\nvec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));\nreturn mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);\n}\nfloat fbm(vec2 n) {\nfloat total=0.0,amplitude=1.0;\nfor (int i=0; i<4; i++) {\ntotal+=noise(n)*amplitude;\nn+=n;\namplitude*=0.5;\n}\nreturn total;\n}\nfloat roundF(float number){\nreturn sign(number)*floor(abs(number)+0.5);\n}\nvoid main(void)\n{\nfloat brickW=1.0/numberOfBricksWidth;\nfloat brickH=1.0/numberOfBricksHeight;\nfloat jointWPercentage=0.01;\nfloat jointHPercentage=0.05;\nvec3 color=brickColor;\nfloat yi=vUV.y/brickH;\nfloat nyi=roundF(yi);\nfloat xi=vUV.x/brickW;\nif (mod(floor(yi),2.0) == 0.0){\nxi=xi-0.5;\n}\nfloat nxi=roundF(xi);\nvec2 brickvUV=vec2((xi-floor(xi))/brickH,(yi-floor(yi))/brickW);\nif (yi<nyi+jointHPercentage && yi>nyi-jointHPercentage){\ncolor=mix(jointColor,vec3(0.37,0.25,0.25),(yi-nyi)/jointHPercentage+0.2);\n}\nelse if (xi<nxi+jointWPercentage && xi>nxi-jointWPercentage){\ncolor=mix(jointColor,vec3(0.44,0.44,0.44),(xi-nxi)/jointWPercentage+0.2);\n}\nelse {\nfloat brickColorSwitch=mod(floor(yi)+floor(xi),3.0);\nif (brickColorSwitch == 0.0)\ncolor=mix(color,vec3(0.33,0.33,0.33),0.3);\nelse if (brickColorSwitch == 2.0)\ncolor=mix(color,vec3(0.11,0.11,0.11),0.3);\n}\ngl_FragColor=vec4(color,1.0);\n}"

/***/ }),

/***/ "./src/brick/brickProceduralTexture.ts":
/*!*********************************************!*\
  !*** ./src/brick/brickProceduralTexture.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["brickProceduralTexturePixelShader"] = __webpack_require__(/*! ./brickProceduralTexture.fragment.fx */ "./src/brick/brickProceduralTexture.fragment.fx");
var BrickProceduralTexture = /** @class */ (function (_super) {
    __extends(BrickProceduralTexture, _super);
    function BrickProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "brickProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._numberOfBricksHeight = 15;
        _this._numberOfBricksWidth = 5;
        _this._jointColor = new babylonjs_1.Color3(0.72, 0.72, 0.72);
        _this._brickColor = new babylonjs_1.Color3(0.77, 0.47, 0.40);
        _this.updateShaderUniforms();
        return _this;
    }
    BrickProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("numberOfBricksHeight", this._numberOfBricksHeight);
        this.setFloat("numberOfBricksWidth", this._numberOfBricksWidth);
        this.setColor3("brickColor", this._brickColor);
        this.setColor3("jointColor", this._jointColor);
    };
    Object.defineProperty(BrickProceduralTexture.prototype, "numberOfBricksHeight", {
        get: function () {
            return this._numberOfBricksHeight;
        },
        set: function (value) {
            this._numberOfBricksHeight = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrickProceduralTexture.prototype, "numberOfBricksWidth", {
        get: function () {
            return this._numberOfBricksWidth;
        },
        set: function (value) {
            this._numberOfBricksWidth = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrickProceduralTexture.prototype, "jointColor", {
        get: function () {
            return this._jointColor;
        },
        set: function (value) {
            this._jointColor = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrickProceduralTexture.prototype, "brickColor", {
        get: function () {
            return this._brickColor;
        },
        set: function (value) {
            this._brickColor = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this brick procedural texture
     * @returns a serialized brick procedural texture object
     */
    BrickProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.BrickProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Brick Procedural Texture from parsed brick procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing brick procedural texture information
     * @returns a parsed Brick Procedural Texture
     */
    BrickProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new BrickProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serialize()
    ], BrickProceduralTexture.prototype, "numberOfBricksHeight", null);
    __decorate([
        babylonjs_1.serialize()
    ], BrickProceduralTexture.prototype, "numberOfBricksWidth", null);
    __decorate([
        babylonjs_1.serializeAsColor3()
    ], BrickProceduralTexture.prototype, "jointColor", null);
    __decorate([
        babylonjs_1.serializeAsColor3()
    ], BrickProceduralTexture.prototype, "brickColor", null);
    return BrickProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.BrickProceduralTexture = BrickProceduralTexture;


/***/ }),

/***/ "./src/brick/index.ts":
/*!****************************!*\
  !*** ./src/brick/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./brickProceduralTexture */ "./src/brick/brickProceduralTexture.ts"));


/***/ }),

/***/ "./src/cloud/cloudProceduralTexture.fragment.fx":
/*!******************************************************!*\
  !*** ./src/cloud/cloudProceduralTexture.fragment.fx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 vUV;\nuniform vec4 skyColor;\nuniform vec4 cloudColor;\nfloat rand(vec2 n) {\nreturn fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);\n}\nfloat noise(vec2 n) {\nconst vec2 d=vec2(0.0,1.0);\nvec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));\nreturn mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);\n}\nfloat fbm(vec2 n) {\nfloat total=0.0,amplitude=1.0;\nfor (int i=0; i<4; i++) {\ntotal+=noise(n)*amplitude;\nn+=n;\namplitude*=0.5;\n}\nreturn total;\n}\nvoid main() {\nvec2 p=vUV*12.0;\nvec4 c=mix(skyColor,cloudColor,fbm(p));\ngl_FragColor=c;\n}\n"

/***/ }),

/***/ "./src/cloud/cloudProceduralTexture.ts":
/*!*********************************************!*\
  !*** ./src/cloud/cloudProceduralTexture.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["cloudProceduralTexturePixelShader"] = __webpack_require__(/*! ./cloudProceduralTexture.fragment.fx */ "./src/cloud/cloudProceduralTexture.fragment.fx");
var CloudProceduralTexture = /** @class */ (function (_super) {
    __extends(CloudProceduralTexture, _super);
    function CloudProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "cloudProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._skyColor = new babylonjs_1.Color4(0.15, 0.68, 1.0, 1.0);
        _this._cloudColor = new babylonjs_1.Color4(1, 1, 1, 1.0);
        _this.updateShaderUniforms();
        return _this;
    }
    CloudProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setColor4("skyColor", this._skyColor);
        this.setColor4("cloudColor", this._cloudColor);
    };
    Object.defineProperty(CloudProceduralTexture.prototype, "skyColor", {
        get: function () {
            return this._skyColor;
        },
        set: function (value) {
            this._skyColor = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CloudProceduralTexture.prototype, "cloudColor", {
        get: function () {
            return this._cloudColor;
        },
        set: function (value) {
            this._cloudColor = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this cloud procedural texture
     * @returns a serialized cloud procedural texture object
     */
    CloudProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.CloudProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Cloud Procedural Texture from parsed cloud procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing cloud procedural texture information
     * @returns a parsed Cloud Procedural Texture
     */
    CloudProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new CloudProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serializeAsColor4()
    ], CloudProceduralTexture.prototype, "skyColor", null);
    __decorate([
        babylonjs_1.serializeAsColor4()
    ], CloudProceduralTexture.prototype, "cloudColor", null);
    return CloudProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.CloudProceduralTexture = CloudProceduralTexture;


/***/ }),

/***/ "./src/cloud/index.ts":
/*!****************************!*\
  !*** ./src/cloud/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cloudProceduralTexture */ "./src/cloud/cloudProceduralTexture.ts"));


/***/ }),

/***/ "./src/fire/fireProceduralTexture.fragment.fx":
/*!****************************************************!*\
  !*** ./src/fire/fireProceduralTexture.fragment.fx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nuniform float time;\nuniform vec3 c1;\nuniform vec3 c2;\nuniform vec3 c3;\nuniform vec3 c4;\nuniform vec3 c5;\nuniform vec3 c6;\nuniform vec2 speed;\nuniform float shift;\nuniform float alphaThreshold;\nvarying vec2 vUV;\nfloat rand(vec2 n) {\nreturn fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);\n}\nfloat noise(vec2 n) {\nconst vec2 d=vec2(0.0,1.0);\nvec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));\nreturn mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);\n}\nfloat fbm(vec2 n) {\nfloat total=0.0,amplitude=1.0;\nfor (int i=0; i<4; i++) {\ntotal+=noise(n)*amplitude;\nn+=n;\namplitude*=0.5;\n}\nreturn total;\n}\nvoid main() {\nvec2 p=vUV*8.0;\nfloat q=fbm(p-time*0.1);\nvec2 r=vec2(fbm(p+q+time*speed.x-p.x-p.y),fbm(p+q-time*speed.y));\nvec3 c=mix(c1,c2,fbm(p+r))+mix(c3,c4,r.x)-mix(c5,c6,r.y);\nvec3 color=c*cos(shift*vUV.y);\nfloat luminance=dot(color.rgb,vec3(0.3,0.59,0.11));\ngl_FragColor=vec4(color,luminance*alphaThreshold+(1.0-alphaThreshold));\n}"

/***/ }),

/***/ "./src/fire/fireProceduralTexture.ts":
/*!*******************************************!*\
  !*** ./src/fire/fireProceduralTexture.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["fireProceduralTexturePixelShader"] = __webpack_require__(/*! ./fireProceduralTexture.fragment.fx */ "./src/fire/fireProceduralTexture.fragment.fx");
var FireProceduralTexture = /** @class */ (function (_super) {
    __extends(FireProceduralTexture, _super);
    function FireProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "fireProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._time = 0.0;
        _this._speed = new babylonjs_1.Vector2(0.5, 0.3);
        _this._autoGenerateTime = true;
        _this._alphaThreshold = 0.5;
        _this._fireColors = FireProceduralTexture.RedFireColors;
        _this.updateShaderUniforms();
        return _this;
    }
    FireProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("time", this._time);
        this.setVector2("speed", this._speed);
        this.setColor3("c1", this._fireColors[0]);
        this.setColor3("c2", this._fireColors[1]);
        this.setColor3("c3", this._fireColors[2]);
        this.setColor3("c4", this._fireColors[3]);
        this.setColor3("c5", this._fireColors[4]);
        this.setColor3("c6", this._fireColors[5]);
        this.setFloat("alphaThreshold", this._alphaThreshold);
    };
    FireProceduralTexture.prototype.render = function (useCameraPostProcess) {
        var scene = this.getScene();
        if (this._autoGenerateTime && scene) {
            this._time += scene.getAnimationRatio() * 0.03;
            this.updateShaderUniforms();
        }
        _super.prototype.render.call(this, useCameraPostProcess);
    };
    Object.defineProperty(FireProceduralTexture, "PurpleFireColors", {
        get: function () {
            return [
                new babylonjs_1.Color3(0.5, 0.0, 1.0),
                new babylonjs_1.Color3(0.9, 0.0, 1.0),
                new babylonjs_1.Color3(0.2, 0.0, 1.0),
                new babylonjs_1.Color3(1.0, 0.9, 1.0),
                new babylonjs_1.Color3(0.1, 0.1, 1.0),
                new babylonjs_1.Color3(0.9, 0.9, 1.0)
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture, "GreenFireColors", {
        get: function () {
            return [
                new babylonjs_1.Color3(0.5, 1.0, 0.0),
                new babylonjs_1.Color3(0.5, 1.0, 0.0),
                new babylonjs_1.Color3(0.3, 0.4, 0.0),
                new babylonjs_1.Color3(0.5, 1.0, 0.0),
                new babylonjs_1.Color3(0.2, 0.0, 0.0),
                new babylonjs_1.Color3(0.5, 1.0, 0.0)
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture, "RedFireColors", {
        get: function () {
            return [
                new babylonjs_1.Color3(0.5, 0.0, 0.1),
                new babylonjs_1.Color3(0.9, 0.0, 0.0),
                new babylonjs_1.Color3(0.2, 0.0, 0.0),
                new babylonjs_1.Color3(1.0, 0.9, 0.0),
                new babylonjs_1.Color3(0.1, 0.1, 0.1),
                new babylonjs_1.Color3(0.9, 0.9, 0.9)
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture, "BlueFireColors", {
        get: function () {
            return [
                new babylonjs_1.Color3(0.1, 0.0, 0.5),
                new babylonjs_1.Color3(0.0, 0.0, 0.5),
                new babylonjs_1.Color3(0.1, 0.0, 0.2),
                new babylonjs_1.Color3(0.0, 0.0, 1.0),
                new babylonjs_1.Color3(0.1, 0.2, 0.3),
                new babylonjs_1.Color3(0.0, 0.2, 0.9)
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "autoGenerateTime", {
        get: function () {
            return this._autoGenerateTime;
        },
        set: function (value) {
            this._autoGenerateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "fireColors", {
        get: function () {
            return this._fireColors;
        },
        set: function (value) {
            this._fireColors = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "alphaThreshold", {
        get: function () {
            return this._alphaThreshold;
        },
        set: function (value) {
            this._alphaThreshold = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this fire procedural texture
     * @returns a serialized fire procedural texture object
     */
    FireProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.FireProceduralTexture";
        serializationObject.fireColors = [];
        for (var i = 0; i < this._fireColors.length; i++) {
            serializationObject.fireColors.push(this._fireColors[i].asArray());
        }
        return serializationObject;
    };
    /**
     * Creates a Fire Procedural Texture from parsed fire procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing fire procedural texture information
     * @returns a parsed Fire Procedural Texture
     */
    FireProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new FireProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        var colors = [];
        for (var i = 0; i < parsedTexture.fireColors.length; i++) {
            colors.push(babylonjs_1.Color3.FromArray(parsedTexture.fireColors[i]));
        }
        texture.fireColors = colors;
        return texture;
    };
    __decorate([
        babylonjs_1.serialize()
    ], FireProceduralTexture.prototype, "autoGenerateTime", null);
    __decorate([
        babylonjs_1.serialize()
    ], FireProceduralTexture.prototype, "time", null);
    __decorate([
        babylonjs_1.serializeAsVector2()
    ], FireProceduralTexture.prototype, "speed", null);
    __decorate([
        babylonjs_1.serialize()
    ], FireProceduralTexture.prototype, "alphaThreshold", null);
    return FireProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.FireProceduralTexture = FireProceduralTexture;


/***/ }),

/***/ "./src/fire/index.ts":
/*!***************************!*\
  !*** ./src/fire/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./fireProceduralTexture */ "./src/fire/fireProceduralTexture.ts"));


/***/ }),

/***/ "./src/grass/grassProceduralTexture.fragment.fx":
/*!******************************************************!*\
  !*** ./src/grass/grassProceduralTexture.fragment.fx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 vPosition;\nvarying vec2 vUV;\nuniform vec3 herb1Color;\nuniform vec3 herb2Color;\nuniform vec3 herb3Color;\nuniform vec3 groundColor;\nfloat rand(vec2 n) {\nreturn fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);\n}\nfloat noise(vec2 n) {\nconst vec2 d=vec2(0.0,1.0);\nvec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));\nreturn mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);\n}\nfloat fbm(vec2 n) {\nfloat total=0.0,amplitude=1.0;\nfor (int i=0; i<4; i++) {\ntotal+=noise(n)*amplitude;\nn+=n;\namplitude*=0.5;\n}\nreturn total;\n}\nvoid main(void) {\nvec3 color=mix(groundColor,herb1Color,rand(gl_FragCoord.xy*4.0));\ncolor=mix(color,herb2Color,rand(gl_FragCoord.xy*8.0));\ncolor=mix(color,herb3Color,rand(gl_FragCoord.xy));\ncolor=mix(color,herb1Color,fbm(gl_FragCoord.xy*16.0));\ngl_FragColor=vec4(color,1.0);\n}"

/***/ }),

/***/ "./src/grass/grassProceduralTexture.ts":
/*!*********************************************!*\
  !*** ./src/grass/grassProceduralTexture.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["grassProceduralTexturePixelShader"] = __webpack_require__(/*! ./grassProceduralTexture.fragment.fx */ "./src/grass/grassProceduralTexture.fragment.fx");
var GrassProceduralTexture = /** @class */ (function (_super) {
    __extends(GrassProceduralTexture, _super);
    function GrassProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "grassProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._groundColor = new babylonjs_1.Color3(1, 1, 1);
        _this._grassColors = [
            new babylonjs_1.Color3(0.29, 0.38, 0.02),
            new babylonjs_1.Color3(0.36, 0.49, 0.09),
            new babylonjs_1.Color3(0.51, 0.6, 0.28)
        ];
        _this.updateShaderUniforms();
        return _this;
    }
    GrassProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setColor3("herb1Color", this._grassColors[0]);
        this.setColor3("herb2Color", this._grassColors[1]);
        this.setColor3("herb3Color", this._grassColors[2]);
        this.setColor3("groundColor", this._groundColor);
    };
    Object.defineProperty(GrassProceduralTexture.prototype, "grassColors", {
        get: function () {
            return this._grassColors;
        },
        set: function (value) {
            this._grassColors = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrassProceduralTexture.prototype, "groundColor", {
        get: function () {
            return this._groundColor;
        },
        set: function (value) {
            this._groundColor = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this grass procedural texture
     * @returns a serialized grass procedural texture object
     */
    GrassProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.GrassProceduralTexture";
        serializationObject.grassColors = [];
        for (var i = 0; i < this._grassColors.length; i++) {
            serializationObject.grassColors.push(this._grassColors[i].asArray());
        }
        return serializationObject;
    };
    /**
     * Creates a Grass Procedural Texture from parsed grass procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing grass procedural texture information
     * @returns a parsed Grass Procedural Texture
     */
    GrassProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new GrassProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        var colors = [];
        for (var i = 0; i < parsedTexture.grassColors.length; i++) {
            colors.push(babylonjs_1.Color3.FromArray(parsedTexture.grassColors[i]));
        }
        texture.grassColors = colors;
        return texture;
    };
    __decorate([
        babylonjs_1.serializeAsColor3()
    ], GrassProceduralTexture.prototype, "groundColor", null);
    return GrassProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.GrassProceduralTexture = GrassProceduralTexture;


/***/ }),

/***/ "./src/grass/index.ts":
/*!****************************!*\
  !*** ./src/grass/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./grassProceduralTexture */ "./src/grass/grassProceduralTexture.ts"));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./brick */ "./src/brick/index.ts"));
__export(__webpack_require__(/*! ./cloud */ "./src/cloud/index.ts"));
__export(__webpack_require__(/*! ./fire */ "./src/fire/index.ts"));
__export(__webpack_require__(/*! ./grass */ "./src/grass/index.ts"));
__export(__webpack_require__(/*! ./marble */ "./src/marble/index.ts"));
__export(__webpack_require__(/*! ./normalMap */ "./src/normalMap/index.ts"));
__export(__webpack_require__(/*! ./perlinNoise */ "./src/perlinNoise/index.ts"));
__export(__webpack_require__(/*! ./road */ "./src/road/index.ts"));
__export(__webpack_require__(/*! ./starfield */ "./src/starfield/index.ts"));
__export(__webpack_require__(/*! ./wood */ "./src/wood/index.ts"));


/***/ }),

/***/ "./src/marble/index.ts":
/*!*****************************!*\
  !*** ./src/marble/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./marbleProceduralTexture */ "./src/marble/marbleProceduralTexture.ts"));


/***/ }),

/***/ "./src/marble/marbleProceduralTexture.fragment.fx":
/*!********************************************************!*\
  !*** ./src/marble/marbleProceduralTexture.fragment.fx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 vPosition;\nvarying vec2 vUV;\nuniform float numberOfTilesHeight;\nuniform float numberOfTilesWidth;\nuniform float amplitude;\nuniform vec3 marbleColor;\nuniform vec3 jointColor;\nconst vec3 tileSize=vec3(1.1,1.0,1.1);\nconst vec3 tilePct=vec3(0.98,1.0,0.98);\nfloat rand(vec2 n) {\nreturn fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);\n}\nfloat noise(vec2 n) {\nconst vec2 d=vec2(0.0,1.0);\nvec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));\nreturn mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);\n}\nfloat turbulence(vec2 P)\n{\nfloat val=0.0;\nfloat freq=1.0;\nfor (int i=0; i<4; i++)\n{\nval+=abs(noise(P*freq)/freq);\nfreq*=2.07;\n}\nreturn val;\n}\nfloat roundF(float number){\nreturn sign(number)*floor(abs(number)+0.5);\n}\nvec3 marble_color(float x)\n{\nvec3 col;\nx=0.5*(x+1.);\nx=sqrt(x); \nx=sqrt(x);\nx=sqrt(x);\ncol=vec3(.2+.75*x); \ncol.b*=0.95; \nreturn col;\n}\nvoid main()\n{\nfloat brickW=1.0/numberOfTilesWidth;\nfloat brickH=1.0/numberOfTilesHeight;\nfloat jointWPercentage=0.01;\nfloat jointHPercentage=0.01;\nvec3 color=marbleColor;\nfloat yi=vUV.y/brickH;\nfloat nyi=roundF(yi);\nfloat xi=vUV.x/brickW;\nif (mod(floor(yi),2.0) == 0.0){\nxi=xi-0.5;\n}\nfloat nxi=roundF(xi);\nvec2 brickvUV=vec2((xi-floor(xi))/brickH,(yi-floor(yi))/brickW);\nif (yi<nyi+jointHPercentage && yi>nyi-jointHPercentage){\ncolor=mix(jointColor,vec3(0.37,0.25,0.25),(yi-nyi)/jointHPercentage+0.2);\n}\nelse if (xi<nxi+jointWPercentage && xi>nxi-jointWPercentage){\ncolor=mix(jointColor,vec3(0.44,0.44,0.44),(xi-nxi)/jointWPercentage+0.2);\n}\nelse {\nfloat t=6.28*brickvUV.x/(tileSize.x+noise(vec2(vUV)*6.0));\nt+=amplitude*turbulence(brickvUV.xy);\nt=sin(t);\ncolor=marble_color(t);\n}\ngl_FragColor=vec4(color,0.0);\n}"

/***/ }),

/***/ "./src/marble/marbleProceduralTexture.ts":
/*!***********************************************!*\
  !*** ./src/marble/marbleProceduralTexture.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["marbleProceduralTexturePixelShader"] = __webpack_require__(/*! ./marbleProceduralTexture.fragment.fx */ "./src/marble/marbleProceduralTexture.fragment.fx");
var MarbleProceduralTexture = /** @class */ (function (_super) {
    __extends(MarbleProceduralTexture, _super);
    function MarbleProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "marbleProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._numberOfTilesHeight = 3;
        _this._numberOfTilesWidth = 3;
        _this._amplitude = 9.0;
        _this._jointColor = new babylonjs_1.Color3(0.72, 0.72, 0.72);
        _this.updateShaderUniforms();
        return _this;
    }
    MarbleProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("numberOfTilesHeight", this._numberOfTilesHeight);
        this.setFloat("numberOfTilesWidth", this._numberOfTilesWidth);
        this.setFloat("amplitude", this._amplitude);
        this.setColor3("jointColor", this._jointColor);
    };
    Object.defineProperty(MarbleProceduralTexture.prototype, "numberOfTilesHeight", {
        get: function () {
            return this._numberOfTilesHeight;
        },
        set: function (value) {
            this._numberOfTilesHeight = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarbleProceduralTexture.prototype, "amplitude", {
        get: function () {
            return this._amplitude;
        },
        set: function (value) {
            this._amplitude = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarbleProceduralTexture.prototype, "numberOfTilesWidth", {
        get: function () {
            return this._numberOfTilesWidth;
        },
        set: function (value) {
            this._numberOfTilesWidth = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarbleProceduralTexture.prototype, "jointColor", {
        get: function () {
            return this._jointColor;
        },
        set: function (value) {
            this._jointColor = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this marble procedural texture
     * @returns a serialized marble procedural texture object
     */
    MarbleProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.MarbleProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Marble Procedural Texture from parsed marble procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing marble procedural texture information
     * @returns a parsed Marble Procedural Texture
     */
    MarbleProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new MarbleProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serialize()
    ], MarbleProceduralTexture.prototype, "numberOfTilesHeight", null);
    __decorate([
        babylonjs_1.serialize()
    ], MarbleProceduralTexture.prototype, "amplitude", null);
    __decorate([
        babylonjs_1.serialize()
    ], MarbleProceduralTexture.prototype, "numberOfTilesWidth", null);
    __decorate([
        babylonjs_1.serialize()
    ], MarbleProceduralTexture.prototype, "jointColor", null);
    return MarbleProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.MarbleProceduralTexture = MarbleProceduralTexture;


/***/ }),

/***/ "./src/normalMap/index.ts":
/*!********************************!*\
  !*** ./src/normalMap/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./normalMapProceduralTexture */ "./src/normalMap/normalMapProceduralTexture.ts"));


/***/ }),

/***/ "./src/normalMap/normalMapProceduralTexture.fragment.fx":
/*!**************************************************************!*\
  !*** ./src/normalMap/normalMapProceduralTexture.fragment.fx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nuniform sampler2D baseSampler;\nuniform float size;\n\nvarying vec2 vUV;\n\nconst vec3 LUMA_COEFFICIENT=vec3(0.2126,0.7152,0.0722);\nfloat lumaAtCoord(vec2 coord)\n{\nvec3 pixel=texture2D(baseSampler,coord).rgb;\nfloat luma=dot(pixel,LUMA_COEFFICIENT);\nreturn luma;\n}\nvoid main()\n{\nfloat lumaU0=lumaAtCoord(vUV+vec2(-1.0,0.0)/size);\nfloat lumaU1=lumaAtCoord(vUV+vec2( 1.0,0.0)/size);\nfloat lumaV0=lumaAtCoord(vUV+vec2( 0.0,-1.0)/size);\nfloat lumaV1=lumaAtCoord(vUV+vec2( 0.0,1.0)/size);\nvec2 slope=(vec2(lumaU0-lumaU1,lumaV0-lumaV1)+1.0)*0.5;\ngl_FragColor=vec4(slope,1.0,1.0);\n}\n"

/***/ }),

/***/ "./src/normalMap/normalMapProceduralTexture.ts":
/*!*****************************************************!*\
  !*** ./src/normalMap/normalMapProceduralTexture.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["normalMapProceduralTexturePixelShader"] = __webpack_require__(/*! ./normalMapProceduralTexture.fragment.fx */ "./src/normalMap/normalMapProceduralTexture.fragment.fx");
var NormalMapProceduralTexture = /** @class */ (function (_super) {
    __extends(NormalMapProceduralTexture, _super);
    function NormalMapProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "normalMapProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this.updateShaderUniforms();
        return _this;
    }
    NormalMapProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setTexture("baseSampler", this._baseTexture);
        this.setFloat("size", this.getRenderSize());
    };
    NormalMapProceduralTexture.prototype.render = function (useCameraPostProcess) {
        _super.prototype.render.call(this, useCameraPostProcess);
    };
    NormalMapProceduralTexture.prototype.resize = function (size, generateMipMaps) {
        _super.prototype.resize.call(this, size, generateMipMaps);
        // We need to update the "size" uniform
        this.updateShaderUniforms();
    };
    Object.defineProperty(NormalMapProceduralTexture.prototype, "baseTexture", {
        get: function () {
            return this._baseTexture;
        },
        set: function (texture) {
            this._baseTexture = texture;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this normal map procedural texture
     * @returns a serialized normal map procedural texture object
     */
    NormalMapProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.NormalMapProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Normal Map Procedural Texture from parsed normal map procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing normal map procedural texture information
     * @returns a parsed Normal Map Procedural Texture
     */
    NormalMapProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new NormalMapProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serializeAsTexture()
    ], NormalMapProceduralTexture.prototype, "baseTexture", null);
    return NormalMapProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.NormalMapProceduralTexture = NormalMapProceduralTexture;


/***/ }),

/***/ "./src/perlinNoise/index.ts":
/*!**********************************!*\
  !*** ./src/perlinNoise/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./perlinNoiseProceduralTexture */ "./src/perlinNoise/perlinNoiseProceduralTexture.ts"));


/***/ }),

/***/ "./src/perlinNoise/perlinNoiseProceduralTexture.fragment.fx":
/*!******************************************************************!*\
  !*** ./src/perlinNoise/perlinNoiseProceduralTexture.fragment.fx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nprecision highp float;\n\nuniform float size;\nuniform float time;\nuniform float translationSpeed;\n\nvarying vec2 vUV;\n\nfloat r(float n)\n{\nreturn fract(cos(n*89.42)*343.42);\n}\nvec2 r(vec2 n)\n{\nreturn vec2(r(n.x*23.62-300.0+n.y*34.35),r(n.x*45.13+256.0+n.y*38.89)); \n}\nfloat worley(vec2 n,float s)\n{\nfloat dis=1.0;\nfor(int x=-1; x<=1; x++)\n{\nfor(int y=-1; y<=1; y++)\n{\nvec2 p=floor(n/s)+vec2(x,y);\nfloat d=length(r(p)+vec2(x,y)-fract(n/s));\nif (dis>d)\ndis=d;\n}\n}\nreturn 1.0-dis;\n}\nvec3 hash33(vec3 p3)\n{\np3=fract(p3*vec3(0.1031,0.11369,0.13787));\np3+=dot(p3,p3.yxz+19.19);\nreturn -1.0+2.0*fract(vec3((p3.x+p3.y)*p3.z,(p3.x+p3.z)*p3.y,(p3.y+p3.z)*p3.x));\n}\nfloat perlinNoise(vec3 p)\n{\nvec3 pi=floor(p);\nvec3 pf=p-pi;\nvec3 w=pf*pf*(3.0-2.0*pf);\nreturn mix(\nmix(\nmix(\ndot(pf-vec3(0,0,0),hash33(pi+vec3(0,0,0))),\ndot(pf-vec3(1,0,0),hash33(pi+vec3(1,0,0))),\nw.x\n),\nmix(\ndot(pf-vec3(0,0,1),hash33(pi+vec3(0,0,1))),\ndot(pf-vec3(1,0,1),hash33(pi+vec3(1,0,1))),\nw.x\n),\nw.z\n),\nmix(\nmix(\ndot(pf-vec3(0,1,0),hash33(pi+vec3(0,1,0))),\ndot(pf-vec3(1,1,0),hash33(pi+vec3(1,1,0))),\nw.x\n),\nmix(\ndot(pf-vec3(0,1,1),hash33(pi+vec3(0,1,1))),\ndot(pf-vec3(1,1,1),hash33(pi+vec3(1,1,1))),\nw.x\n),\nw.z\n),\nw.y\n);\n}\n\nvoid main(void)\n{\nvec2 uv=gl_FragCoord.xy+translationSpeed;\nfloat dis=(\n1.0+perlinNoise(vec3(uv/vec2(size,size),time*0.05)*8.0))\n*(1.0+(worley(uv,32.0)+ 0.5*worley(2.0*uv,32.0)+0.25*worley(4.0*uv,32.0))\n);\ngl_FragColor=vec4(vec3(dis/4.0),1.0);\n}\n"

/***/ }),

/***/ "./src/perlinNoise/perlinNoiseProceduralTexture.ts":
/*!*********************************************************!*\
  !*** ./src/perlinNoise/perlinNoiseProceduralTexture.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["perlinNoiseProceduralTexturePixelShader"] = __webpack_require__(/*! ./perlinNoiseProceduralTexture.fragment.fx */ "./src/perlinNoise/perlinNoiseProceduralTexture.fragment.fx");
var PerlinNoiseProceduralTexture = /** @class */ (function (_super) {
    __extends(PerlinNoiseProceduralTexture, _super);
    function PerlinNoiseProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "perlinNoiseProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this.time = 0.0;
        _this.timeScale = 1.0;
        _this.translationSpeed = 1.0;
        _this._currentTranslation = 0;
        _this.updateShaderUniforms();
        return _this;
    }
    PerlinNoiseProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("size", this.getRenderSize());
        var scene = this.getScene();
        if (!scene) {
            return;
        }
        var deltaTime = scene.getEngine().getDeltaTime();
        this.time += deltaTime;
        this.setFloat("time", this.time * this.timeScale / 1000);
        this._currentTranslation += deltaTime * this.translationSpeed / 1000.0;
        this.setFloat("translationSpeed", this._currentTranslation);
    };
    PerlinNoiseProceduralTexture.prototype.render = function (useCameraPostProcess) {
        this.updateShaderUniforms();
        _super.prototype.render.call(this, useCameraPostProcess);
    };
    PerlinNoiseProceduralTexture.prototype.resize = function (size, generateMipMaps) {
        _super.prototype.resize.call(this, size, generateMipMaps);
    };
    /**
     * Serializes this perlin noise procedural texture
     * @returns a serialized perlin noise procedural texture object
     */
    PerlinNoiseProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.PerlinNoiseProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Perlin Noise Procedural Texture from parsed perlin noise procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing perlin noise procedural texture information
     * @returns a parsed Perlin Noise Procedural Texture
     */
    PerlinNoiseProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new PerlinNoiseProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serialize()
    ], PerlinNoiseProceduralTexture.prototype, "time", void 0);
    __decorate([
        babylonjs_1.serialize()
    ], PerlinNoiseProceduralTexture.prototype, "timeScale", void 0);
    __decorate([
        babylonjs_1.serialize()
    ], PerlinNoiseProceduralTexture.prototype, "translationSpeed", void 0);
    return PerlinNoiseProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.PerlinNoiseProceduralTexture = PerlinNoiseProceduralTexture;


/***/ }),

/***/ "./src/road/index.ts":
/*!***************************!*\
  !*** ./src/road/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./roadProceduralTexture */ "./src/road/roadProceduralTexture.ts"));


/***/ }),

/***/ "./src/road/roadProceduralTexture.fragment.fx":
/*!****************************************************!*\
  !*** ./src/road/roadProceduralTexture.fragment.fx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 vUV; \nuniform vec3 roadColor;\nfloat rand(vec2 n) {\nreturn fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);\n}\nfloat noise(vec2 n) {\nconst vec2 d=vec2(0.0,1.0);\nvec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));\nreturn mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);\n}\nfloat fbm(vec2 n) {\nfloat total=0.0,amplitude=1.0;\nfor (int i=0; i<4; i++) {\ntotal+=noise(n)*amplitude;\nn+=n;\namplitude*=0.5;\n}\nreturn total;\n}\nvoid main(void) {\nfloat ratioy=mod(gl_FragCoord.y*100.0 ,fbm(vUV*2.0));\nvec3 color=roadColor*ratioy;\ngl_FragColor=vec4(color,1.0);\n}"

/***/ }),

/***/ "./src/road/roadProceduralTexture.ts":
/*!*******************************************!*\
  !*** ./src/road/roadProceduralTexture.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["roadProceduralTexturePixelShader"] = __webpack_require__(/*! ./roadProceduralTexture.fragment.fx */ "./src/road/roadProceduralTexture.fragment.fx");
var RoadProceduralTexture = /** @class */ (function (_super) {
    __extends(RoadProceduralTexture, _super);
    function RoadProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "roadProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._roadColor = new babylonjs_1.Color3(0.53, 0.53, 0.53);
        _this.updateShaderUniforms();
        return _this;
    }
    RoadProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setColor3("roadColor", this._roadColor);
    };
    Object.defineProperty(RoadProceduralTexture.prototype, "roadColor", {
        get: function () {
            return this._roadColor;
        },
        set: function (value) {
            this._roadColor = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this road procedural texture
     * @returns a serialized road procedural texture object
     */
    RoadProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.RoadProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Road Procedural Texture from parsed road procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing road procedural texture information
     * @returns a parsed Road Procedural Texture
     */
    RoadProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new RoadProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serializeAsColor3()
    ], RoadProceduralTexture.prototype, "roadColor", null);
    return RoadProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.RoadProceduralTexture = RoadProceduralTexture;


/***/ }),

/***/ "./src/starfield/index.ts":
/*!********************************!*\
  !*** ./src/starfield/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./starfieldProceduralTexture */ "./src/starfield/starfieldProceduralTexture.ts"));


/***/ }),

/***/ "./src/starfield/starfieldProceduralTexture.fragment.fx":
/*!**************************************************************!*\
  !*** ./src/starfield/starfieldProceduralTexture.fragment.fx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\n#define volsteps 20\n#define iterations 15\nvarying vec2 vPosition;\nvarying vec2 vUV;\nuniform float time;\nuniform float alpha;\nuniform float beta;\nuniform float zoom;\nuniform float formuparam;\nuniform float stepsize;\nuniform float tile;\nuniform float brightness;\nuniform float darkmatter;\nuniform float distfading;\nuniform float saturation;\nvoid main()\n{\nvec3 dir=vec3(vUV*zoom,1.);\nfloat localTime=time*0.0001;\n\nmat2 rot1=mat2(cos(alpha),sin(alpha),-sin(alpha),cos(alpha));\nmat2 rot2=mat2(cos(beta),sin(beta),-sin(beta),cos(beta));\ndir.xz*=rot1;\ndir.xy*=rot2;\nvec3 from=vec3(1.,.5,0.5);\nfrom+=vec3(-2.,localTime*2.,localTime);\nfrom.xz*=rot1;\nfrom.xy*=rot2;\n\nfloat s=0.1,fade=1.;\nvec3 v=vec3(0.);\nfor (int r=0; r<volsteps; r++) {\nvec3 p=from+s*dir*.5;\np=abs(vec3(tile)-mod(p,vec3(tile*2.))); \nfloat pa,a=pa=0.;\nfor (int i=0; i<iterations; i++) {\np=abs(p)/dot(p,p)-formuparam; \na+=abs(length(p)-pa); \npa=length(p);\n}\nfloat dm=max(0.,darkmatter-a*a*.001); \na*=a*a; \nif (r>6) fade*=1.-dm; \n\nv+=fade;\nv+=vec3(s,s*s,s*s*s*s)*a*brightness*fade; \nfade*=distfading; \ns+=stepsize;\n}\nv=mix(vec3(length(v)),v,saturation); \ngl_FragColor=vec4(v*.01,1.);\n}"

/***/ }),

/***/ "./src/starfield/starfieldProceduralTexture.ts":
/*!*****************************************************!*\
  !*** ./src/starfield/starfieldProceduralTexture.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["starfieldProceduralTexturePixelShader"] = __webpack_require__(/*! ./starfieldProceduralTexture.fragment.fx */ "./src/starfield/starfieldProceduralTexture.fragment.fx");
var StarfieldProceduralTexture = /** @class */ (function (_super) {
    __extends(StarfieldProceduralTexture, _super);
    function StarfieldProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "starfieldProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._time = 1;
        _this._alpha = 0.5;
        _this._beta = 0.8;
        _this._zoom = 0.8;
        _this._formuparam = 0.53;
        _this._stepsize = 0.1;
        _this._tile = 0.850;
        _this._brightness = 0.0015;
        _this._darkmatter = 0.400;
        _this._distfading = 0.730;
        _this._saturation = 0.850;
        _this.updateShaderUniforms();
        return _this;
    }
    StarfieldProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("time", this._time);
        this.setFloat("alpha", this._alpha);
        this.setFloat("beta", this._beta);
        this.setFloat("zoom", this._zoom);
        this.setFloat("formuparam", this._formuparam);
        this.setFloat("stepsize", this._stepsize);
        this.setFloat("tile", this._tile);
        this.setFloat("brightness", this._brightness);
        this.setFloat("darkmatter", this._darkmatter);
        this.setFloat("distfading", this._distfading);
        this.setFloat("saturation", this._saturation);
    };
    Object.defineProperty(StarfieldProceduralTexture.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (value) {
            this._alpha = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "beta", {
        get: function () {
            return this._beta;
        },
        set: function (value) {
            this._beta = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "formuparam", {
        get: function () {
            return this._formuparam;
        },
        set: function (value) {
            this._formuparam = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "stepsize", {
        get: function () {
            return this._stepsize;
        },
        set: function (value) {
            this._stepsize = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        set: function (value) {
            this._zoom = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "tile", {
        get: function () {
            return this._tile;
        },
        set: function (value) {
            this._tile = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "brightness", {
        get: function () {
            return this._brightness;
        },
        set: function (value) {
            this._brightness = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "darkmatter", {
        get: function () {
            return this._darkmatter;
        },
        set: function (value) {
            this._darkmatter = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "distfading", {
        get: function () {
            return this._distfading;
        },
        set: function (value) {
            this._distfading = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (value) {
            this._saturation = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this starfield procedural texture
     * @returns a serialized starfield procedural texture object
     */
    StarfieldProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.StarfieldProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Starfield Procedural Texture from parsed startfield procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing startfield procedural texture information
     * @returns a parsed Starfield Procedural Texture
     */
    StarfieldProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new StarfieldProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "time", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "alpha", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "beta", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "formuparam", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "stepsize", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "zoom", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "tile", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "brightness", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "darkmatter", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "distfading", null);
    __decorate([
        babylonjs_1.serialize()
    ], StarfieldProceduralTexture.prototype, "saturation", null);
    return StarfieldProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.StarfieldProceduralTexture = StarfieldProceduralTexture;


/***/ }),

/***/ "./src/wood/index.ts":
/*!***************************!*\
  !*** ./src/wood/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./woodProceduralTexture */ "./src/wood/woodProceduralTexture.ts"));


/***/ }),

/***/ "./src/wood/woodProceduralTexture.fragment.fx":
/*!****************************************************!*\
  !*** ./src/wood/woodProceduralTexture.fragment.fx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nvarying vec2 vPosition;\nvarying vec2 vUV;\nuniform float ampScale;\nuniform vec3 woodColor;\nfloat rand(vec2 n) {\nreturn fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);\n}\nfloat noise(vec2 n) {\nconst vec2 d=vec2(0.0,1.0);\nvec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));\nreturn mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);\n}\nfloat fbm(vec2 n) {\nfloat total=0.0,amplitude=1.0;\nfor (int i=0; i<4; i++) {\ntotal+=noise(n)*amplitude;\nn+=n;\namplitude*=0.5;\n}\nreturn total;\n}\nvoid main(void) {\nfloat ratioy=mod(vUV.x*ampScale,2.0+fbm(vUV*0.8));\nvec3 wood=woodColor*ratioy;\ngl_FragColor=vec4(wood,1.0);\n}"

/***/ }),

/***/ "./src/wood/woodProceduralTexture.ts":
/*!*******************************************!*\
  !*** ./src/wood/woodProceduralTexture.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["woodProceduralTexturePixelShader"] = __webpack_require__(/*! ./woodProceduralTexture.fragment.fx */ "./src/wood/woodProceduralTexture.fragment.fx");
var WoodProceduralTexture = /** @class */ (function (_super) {
    __extends(WoodProceduralTexture, _super);
    function WoodProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "woodProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._ampScale = 100.0;
        _this._woodColor = new babylonjs_1.Color3(0.32, 0.17, 0.09);
        _this.updateShaderUniforms();
        return _this;
    }
    WoodProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("ampScale", this._ampScale);
        this.setColor3("woodColor", this._woodColor);
    };
    Object.defineProperty(WoodProceduralTexture.prototype, "ampScale", {
        get: function () {
            return this._ampScale;
        },
        set: function (value) {
            this._ampScale = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WoodProceduralTexture.prototype, "woodColor", {
        get: function () {
            return this._woodColor;
        },
        set: function (value) {
            this._woodColor = value;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this wood procedural texture
     * @returns a serialized wood procedural texture object
     */
    WoodProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.WoodProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Wood Procedural Texture from parsed wood procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing wood procedural texture information
     * @returns a parsed Wood Procedural Texture
     */
    WoodProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new WoodProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serialize()
    ], WoodProceduralTexture.prototype, "ampScale", null);
    __decorate([
        babylonjs_1.serializeAsColor3()
    ], WoodProceduralTexture.prototype, "woodColor", null);
    return WoodProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.WoodProceduralTexture = WoodProceduralTexture;


/***/ }),

/***/ "babylonjs":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs__;

/***/ })

/******/ });
});
//# sourceMappingURL=babylonjs.proceduralTextures.js.map