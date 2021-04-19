(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/tms-api/src/app/app.controller.ts":
/*!************************************************!*\
  !*** ./apps/tms-api/src/app/app.controller.ts ***!
  \************************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/tms-api/src/app/app.service.ts");
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/tms-api/src/app/app.module.ts":
/*!********************************************!*\
  !*** ./apps/tms-api/src/app/app.module.ts ***!
  \********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.controller */ "./apps/tms-api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/tms-api/src/app/app.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share/share.module */ "./apps/tms-api/src/app/share/share.module.ts");
/* harmony import */ var _share_app_share_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share-app/share-app.module */ "./apps/tms-api/src/app/share-app/share-app.module.ts");
/* harmony import */ var _tenders_tenders_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tenders/tenders.module */ "./apps/tms-api/src/app/tenders/tenders.module.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.module */ "./apps/tms-api/src/app/users/users.module.ts");
/* harmony import */ var _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exception/http-exception.filter */ "./apps/tms-api/src/app/exception/http-exception.filter.ts");
/* harmony import */ var _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transaction/transaction.module */ "./apps/tms-api/src/app/transaction/transaction.module.ts");
/* harmony import */ var _contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-us/contact-us.module */ "./apps/tms-api/src/app/contact-us/contact-us.module.ts");
/* harmony import */ var _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password/forgot-password.module */ "./apps/tms-api/src/app/forgot-password/forgot-password.module.ts");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forRoot(process.env.MONGO_DB_CONNECTION_URL),
            _users_users_module__WEBPACK_IMPORTED_MODULE_8__["UsersModule"],
            _share_share_module__WEBPACK_IMPORTED_MODULE_5__["ShareModule"],
            _share_app_share_app_module__WEBPACK_IMPORTED_MODULE_6__["ShareAppModule"],
            _forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordModule"],
            _tenders_tenders_module__WEBPACK_IMPORTED_MODULE_7__["TendersModule"],
            _transaction_transaction_module__WEBPACK_IMPORTED_MODULE_10__["TransactionModule"],
            _contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_11__["ContactUsModule"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_1__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_9__["HttpExceptionFilter"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/tms-api/src/app/app.service.ts":
/*!*********************************************!*\
  !*** ./apps/tms-api/src/app/app.service.ts ***!
  \*********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to tms-api!' };
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/tms-api/src/app/auth/auth.controller.ts":
/*!******************************************************!*\
  !*** ./apps/tms-api/src/app/auth/auth.controller.ts ***!
  \******************************************************/
/*! exports provided: AuthController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthController", function() { return AuthController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_key_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/key-generator.service */ "./apps/tms-api/src/app/auth/services/key-generator.service.ts");
var _a;



let AuthController = class AuthController {
    constructor(keyGeneratorService) {
        this.keyGeneratorService = keyGeneratorService;
    }
    generateKey() {
        return this.keyGeneratorService.generateKey();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('generateKey'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AuthController.prototype, "generateKey", null);
AuthController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('auth'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services_key_generator_service__WEBPACK_IMPORTED_MODULE_2__["KeyGeneratorService"] !== "undefined" && _services_key_generator_service__WEBPACK_IMPORTED_MODULE_2__["KeyGeneratorService"]) === "function" ? _a : Object])
], AuthController);



/***/ }),

/***/ "./apps/tms-api/src/app/auth/auth.module.ts":
/*!**************************************************!*\
  !*** ./apps/tms-api/src/app/auth/auth.module.ts ***!
  \**************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.controller */ "./apps/tms-api/src/app/auth/auth.controller.ts");
/* harmony import */ var _services_key_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/key-generator.service */ "./apps/tms-api/src/app/auth/services/key-generator.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/token.service */ "./apps/tms-api/src/app/auth/services/token.service.ts");





let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Module"])({
        controllers: [_auth_controller__WEBPACK_IMPORTED_MODULE_1__["AuthController"]],
        providers: [_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"], _services_key_generator_service__WEBPACK_IMPORTED_MODULE_2__["KeyGeneratorService"]]
    })
], AuthModule);



/***/ }),

/***/ "./apps/tms-api/src/app/auth/middlewares/auth-token-middleware.service.ts":
/*!********************************************************************************!*\
  !*** ./apps/tms-api/src/app/auth/middlewares/auth-token-middleware.service.ts ***!
  \********************************************************************************/
/*! exports provided: AuthTokenMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenMiddleware", function() { return AuthTokenMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token.service */ "./apps/tms-api/src/app/auth/services/token.service.ts");
var _a;



let AuthTokenMiddleware = class AuthTokenMiddleware {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    use(req, res, next) {
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log(`################# REQUEST BEGIN ${req.method} - ${req.originalUrl} ###################`);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log(`Request IP: ${req.ip}`);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log(`Request Method: ${req.method}`);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log(`Request Original URL: ${req.originalUrl}`);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log(`Request Body: ${JSON.stringify(req.body, null, '\t')}`);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log(`Request Headers: ${JSON.stringify(req.headers, null, '\t')}`);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log(`Request Cookies: ${req.cookies}`);
        _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log(`################# REQUEST END ${req.method} - ${req.originalUrl} ###################`);
        this.tokenService.verifyAccessToken(req, res, next);
    }
};
AuthTokenMiddleware = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] !== "undefined" && _services_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]) === "function" ? _a : Object])
], AuthTokenMiddleware);



/***/ }),

/***/ "./apps/tms-api/src/app/auth/services/key-generator.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/tms-api/src/app/auth/services/key-generator.service.ts ***!
  \*********************************************************************/
/*! exports provided: KeyGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyGeneratorService", function() { return KeyGeneratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);



let KeyGeneratorService = class KeyGeneratorService {
    generateKey() {
        const accessTokenKey = crypto__WEBPACK_IMPORTED_MODULE_2__["randomBytes"](32).toString('hex');
        const refreshTokenKey = crypto__WEBPACK_IMPORTED_MODULE_2__["randomBytes"](32).toString('hex');
        return { accessTokenKey, refreshTokenKey };
    }
};
KeyGeneratorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({})
], KeyGeneratorService);



/***/ }),

/***/ "./apps/tms-api/src/app/auth/services/token.service.ts":
/*!*************************************************************!*\
  !*** ./apps/tms-api/src/app/auth/services/token.service.ts ***!
  \*************************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);



let TokenService = class TokenService {
    signAccessToken(username) {
        return new Promise((resolve, reject) => {
            const payload = {
                username
            };
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: '30m',
                issuer: 'tms-ebharat.com',
                audience: username
            };
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["sign"](payload, secret, options, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
        });
    }
    verifyAccessToken(req, res, next) {
        if (!req.headers.authorization)
            next(new Error('Invalid Token'));
        const authHeader = req.headers.authorization;
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        const secret = process.env.ACCESS_TOKEN_SECRET;
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["verify"](token, secret, (error, payload) => {
            if (error)
                return next(error);
            req.payload = payload;
            return next();
        });
    }
};
TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({})
], TokenService);



/***/ }),

/***/ "./apps/tms-api/src/app/contact-us/contact-us.module.ts":
/*!**************************************************************!*\
  !*** ./apps/tms-api/src/app/contact-us/contact-us.module.ts ***!
  \**************************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_middlewares_auth_token_middleware_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/middlewares/auth-token-middleware.service */ "./apps/tms-api/src/app/auth/middlewares/auth-token-middleware.service.ts");
/* harmony import */ var _auth_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/services/token.service */ "./apps/tms-api/src/app/auth/services/token.service.ts");
/* harmony import */ var _contact_us_contact_us_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.controller */ "./apps/tms-api/src/app/contact-us/contact-us/contact-us.controller.ts");
/* harmony import */ var _models_contact_us_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/contact-us.schema */ "./apps/tms-api/src/app/contact-us/models/contact-us.schema.ts");
/* harmony import */ var _services_contact_us_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/contact-us.service */ "./apps/tms-api/src/app/contact-us/services/contact-us.service.ts");








let ContactUsModule = class ContactUsModule {
    configure(consumer) {
        consumer.apply(_auth_middlewares_auth_token_middleware_service__WEBPACK_IMPORTED_MODULE_3__["AuthTokenMiddleware"]).forRoutes({ path: 'contact-us/*', method: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].ALL });
    }
};
ContactUsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: _models_contact_us_schema__WEBPACK_IMPORTED_MODULE_6__["ContactUs"].name, schema: _models_contact_us_schema__WEBPACK_IMPORTED_MODULE_6__["ContactUsSchema"] }
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
        ],
        controllers: [_contact_us_contact_us_controller__WEBPACK_IMPORTED_MODULE_5__["ContactUsController"]],
        providers: [_services_contact_us_service__WEBPACK_IMPORTED_MODULE_7__["ContactUsService"], _auth_services_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]],
        exports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: _models_contact_us_schema__WEBPACK_IMPORTED_MODULE_6__["ContactUs"].name, schema: _models_contact_us_schema__WEBPACK_IMPORTED_MODULE_6__["ContactUsSchema"] }
            ])
        ]
    })
], ContactUsModule);



/***/ }),

/***/ "./apps/tms-api/src/app/contact-us/contact-us/contact-us.controller.ts":
/*!*****************************************************************************!*\
  !*** ./apps/tms-api/src/app/contact-us/contact-us/contact-us.controller.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactUsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsController", function() { return ContactUsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exception/http-exception.filter */ "./apps/tms-api/src/app/exception/http-exception.filter.ts");
/* harmony import */ var _services_contact_us_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contact-us.service */ "./apps/tms-api/src/app/contact-us/services/contact-us.service.ts");
var _a;




let ContactUsController = class ContactUsController {
    constructor(contactUsService) {
        this.contactUsService = contactUsService;
    }
    createQuery(req) {
        return this.contactUsService.createQuery(req.body);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ContactUsController.prototype, "createQuery", null);
ContactUsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('contact-us'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseFilters"])(new _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_2__["HttpExceptionFilter"]()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services_contact_us_service__WEBPACK_IMPORTED_MODULE_3__["ContactUsService"] !== "undefined" && _services_contact_us_service__WEBPACK_IMPORTED_MODULE_3__["ContactUsService"]) === "function" ? _a : Object])
], ContactUsController);



/***/ }),

/***/ "./apps/tms-api/src/app/contact-us/models/contact-us.schema.ts":
/*!*********************************************************************!*\
  !*** ./apps/tms-api/src/app/contact-us/models/contact-us.schema.ts ***!
  \*********************************************************************/
/*! exports provided: ContactUs, ContactUsSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return ContactUs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsSchema", function() { return ContactUsSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);

// eslint-disable-next-line max-classes-per-file


let ContactUs = class ContactUs extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ContactUs.prototype, "username", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ContactUs.prototype, "caseId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ContactUs.prototype, "subject", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ContactUs.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ContactUs.prototype, "isOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ContactUs.prototype, "date", void 0);
ContactUs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], ContactUs);

const ContactUsSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(ContactUs);


/***/ }),

/***/ "./apps/tms-api/src/app/contact-us/services/contact-us.service.ts":
/*!************************************************************************!*\
  !*** ./apps/tms-api/src/app/contact-us/services/contact-us.service.ts ***!
  \************************************************************************/
/*! exports provided: ContactUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsService", function() { return ContactUsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_contact_us_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/contact-us.schema */ "./apps/tms-api/src/app/contact-us/models/contact-us.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let ContactUsService = class ContactUsService {
    constructor(contactUs) {
        this.contactUs = contactUs;
    }
    createQuery(query) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const allQueries = yield this.contactUs.find().exec();
                query.caseId = allQueries.length + 1;
                const newQuery = yield this.contactUs(query);
                const createdQuery = yield newQuery.save();
                return createdQuery;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
};
ContactUsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_models_contact_us_schema__WEBPACK_IMPORTED_MODULE_1__["ContactUs"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _a : Object])
], ContactUsService);



/***/ }),

/***/ "./apps/tms-api/src/app/exception/http-exception.filter.ts":
/*!*****************************************************************!*\
  !*** ./apps/tms-api/src/app/exception/http-exception.filter.ts ***!
  \*****************************************************************/
/*! exports provided: HttpExceptionFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpExceptionFilter", function() { return HttpExceptionFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        const message = exception.getResponse();
        response
            .status(status)
            .json({
            statusCode: status,
            path: request.url,
            message: message['error']
        });
    }
};
HttpExceptionFilter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Catch"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"])
], HttpExceptionFilter);



/***/ }),

/***/ "./apps/tms-api/src/app/forgot-password/forgot-password.module.ts":
/*!************************************************************************!*\
  !*** ./apps/tms-api/src/app/forgot-password/forgot-password.module.ts ***!
  \************************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_forgot_password_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/forgot-password.schema */ "./apps/tms-api/src/app/forgot-password/models/forgot-password.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_forgot_password_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/forgot-password.services */ "./apps/tms-api/src/app/forgot-password/services/forgot-password.services.ts");
/* harmony import */ var _forgot_password_forgot_password_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.controller */ "./apps/tms-api/src/app/forgot-password/forgot-password/forgot-password.controller.ts");






let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([
                { name: _models_forgot_password_schema__WEBPACK_IMPORTED_MODULE_2__["ForgotPassword"].name, schema: _models_forgot_password_schema__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordSchema"] }
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
        ],
        controllers: [_forgot_password_forgot_password_controller__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordController"]],
        providers: [_services_forgot_password_services__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordService"]],
        exports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([
                { name: _models_forgot_password_schema__WEBPACK_IMPORTED_MODULE_2__["ForgotPassword"].name, schema: _models_forgot_password_schema__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordSchema"] }
            ])
        ]
    })
], ForgotPasswordModule);



/***/ }),

/***/ "./apps/tms-api/src/app/forgot-password/forgot-password/forgot-password.controller.ts":
/*!********************************************************************************************!*\
  !*** ./apps/tms-api/src/app/forgot-password/forgot-password/forgot-password.controller.ts ***!
  \********************************************************************************************/
/*! exports provided: ForgotPasswordController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordController", function() { return ForgotPasswordController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exception/http-exception.filter */ "./apps/tms-api/src/app/exception/http-exception.filter.ts");
/* harmony import */ var _services_forgot_password_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/forgot-password.services */ "./apps/tms-api/src/app/forgot-password/services/forgot-password.services.ts");
var _a;




let ForgotPasswordController = class ForgotPasswordController {
    constructor(forgotPassword) {
        this.forgotPassword = forgotPassword;
    }
    generateForgotPasswordLink(params) {
        console.log('came here');
        return this.forgotPassword.generateForgotPasswordLink(params.email);
    }
    verifyForgotPasswordToken(params) {
        return this.forgotPassword.verifyForgotPasswordToken(params.email, params.token);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('generate-link/:email'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ForgotPasswordController.prototype, "generateForgotPasswordLink", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('verify-token/:email/:token'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ForgotPasswordController.prototype, "verifyForgotPasswordToken", null);
ForgotPasswordController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('forgot-password'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseFilters"])(new _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_2__["HttpExceptionFilter"]()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services_forgot_password_services__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordService"] !== "undefined" && _services_forgot_password_services__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordService"]) === "function" ? _a : Object])
], ForgotPasswordController);



/***/ }),

/***/ "./apps/tms-api/src/app/forgot-password/models/forgot-password.schema.ts":
/*!*******************************************************************************!*\
  !*** ./apps/tms-api/src/app/forgot-password/models/forgot-password.schema.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgotPassword, ForgotPasswordSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword", function() { return ForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordSchema", function() { return ForgotPasswordSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable max-classes-per-file */


let ForgotPassword = class ForgotPassword extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, unique: true, lowercase: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ForgotPassword.prototype, "owner", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ForgotPassword.prototype, "token", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ForgotPassword.prototype, "date", void 0);
ForgotPassword = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], ForgotPassword);

const ForgotPasswordSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(ForgotPassword);


/***/ }),

/***/ "./apps/tms-api/src/app/forgot-password/services/forgot-password.services.ts":
/*!***********************************************************************************!*\
  !*** ./apps/tms-api/src/app/forgot-password/services/forgot-password.services.ts ***!
  \***********************************************************************************/
/*! exports provided: ForgotPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordService", function() { return ForgotPasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_forgot_password_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/forgot-password.schema */ "./apps/tms-api/src/app/forgot-password/models/forgot-password.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
var _a;







const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");
let ForgotPasswordService = class ForgotPasswordService {
    constructor(forgotPassword) {
        this.forgotPassword = forgotPassword;
    }
    generateForgotPasswordLink(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])();
            const currentDate = (new Date()).getTime();
            const owner = yield this.forgotPassword.findOne({ owner: email }).exec();
            if (!owner) {
                const query = yield this.forgotPassword({
                    owner: email,
                    token: token,
                    date: currentDate
                });
                yield query.save();
            }
            else {
                const owner = yield this.forgotPassword.findOne({ owner: email }).exec();
                owner.token = token;
                owner.date = currentDate;
                yield this.forgotPassword.findOneAndUpdate({ owner: email }, owner, { upsert: true }).exec();
            }
            const forgotPasswordUrl = `http://localhost:4200/reset-password?email=${email}&token=${token}`;
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "ebharat.tms@gmail.com",
                    pass: "TMSPortal@123",
                },
            });
            let info = yield transporter.sendMail({
                from: '"Ebharat TMS" <ebharat.tms@gmail.com>',
                to: "ankittanna@hotmail.com",
                subject: "TMS - Reset Password",
                html: `Hi User,<p>Please click on below link for resetting your passworrd. If you are unable to reset your password, please contact us at ebharat.tms@gmail.com!</p><p><a href='${forgotPasswordUrl}' target='_blank'>Click Here!</a></p><p>Thanks - Team E-bharat TMS.</p>`
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        });
    }
    verifyForgotPasswordToken(email, token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const owner = yield this.forgotPassword.findOne({ owner: email }).exec();
            if (!owner) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST,
                    error: 'Invalid reset password link.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST);
            }
            const currentDate = (new Date()).getTime();
            const tokenDate = Number(owner.date);
            if (currentDate - tokenDate > 1800000) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST,
                    error: 'Password link expired. Please try again.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST);
            }
            if (owner.token === token) {
                return owner;
            }
        });
    }
    verifyMobileNumber(number) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!number) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid number.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const sharingOwners = [];
                const owners = yield this.forgotPassword.find().exec();
                owners.forEach(owner => {
                    if (owner.stakeholders.length > 0) {
                        owner.stakeholders.forEach(stakeholder => {
                            if (stakeholder.mobileNumber === number) {
                                sharingOwners.push(owner.owner);
                            }
                        });
                    }
                });
                return sharingOwners;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
        });
    }
    getAllStakeHolders(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.forgotPassword.findOne({ owner: username }).exec();
                return owner.stakeholders;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
        });
    }
    addStakeHolder(stakeholderDTO) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!stakeholderDTO.owner) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.forgotPassword
                    .findOne({ owner: stakeholderDTO.owner })
                    .exec();
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber: stakeholderDTO.stakeholders[0].mobileNumber
                })) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].CONFLICT,
                        error: 'Stakeholder already present.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].CONFLICT);
                }
                owner.stakeholders.push(stakeholderDTO.stakeholders[0]);
                const modifiedOwner = this.forgotPassword(owner);
                const result = yield modifiedOwner.save();
                return result;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    blockStakeHolder(username, mobileNumber, isBlocked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            if (!mobileNumber) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid Mobile Number!',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.forgotPassword.findOne({ owner: username }).exec();
                if (!owner) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not exist.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (!owner.stakeholders.length) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not have any stakeholder.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber
                })) {
                    owner.stakeholders = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](owner.stakeholders, (stakeholder) => {
                        if (stakeholder.mobileNumber === mobileNumber)
                            stakeholder.isBlocked = !!isBlocked;
                        return stakeholder;
                    });
                    yield this.forgotPassword
                        .findOneAndUpdate({
                        owner: username
                    }, owner, { upsert: true })
                        .exec();
                    const modifiedOwner = yield this.forgotPassword
                        .findOne({ owner: username })
                        .exec();
                    return modifiedOwner;
                }
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Stakeholder does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    deleteStakeHolder(username, mobileNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'User does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            if (!mobileNumber) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Mobile number does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.forgotPassword.findOne({ owner: username }).exec();
                if (!owner.stakeholders.length) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not have any stakeholder.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber
                })) {
                    lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](owner.stakeholders, {
                        mobileNumber
                    });
                    yield this.forgotPassword
                        .findOneAndUpdate({
                        owner: username
                    }, owner, { upsert: true })
                        .exec();
                    const modifiedOwner = yield this.forgotPassword
                        .findOne({ owner: username })
                        .exec();
                    return modifiedOwner;
                }
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Stakeholder does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
};
ForgotPasswordService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])(_models_forgot_password_schema__WEBPACK_IMPORTED_MODULE_2__["ForgotPassword"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object])
], ForgotPasswordService);



/***/ }),

/***/ "./apps/tms-api/src/app/share-app/models/share-tms.schema.ts":
/*!*******************************************************************!*\
  !*** ./apps/tms-api/src/app/share-app/models/share-tms.schema.ts ***!
  \*******************************************************************/
/*! exports provided: Stakeholder, ShareTMS, ShareTMSSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stakeholder", function() { return Stakeholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareTMS", function() { return ShareTMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareTMSSchema", function() { return ShareTMSSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable max-classes-per-file */


class Stakeholder extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Stakeholder.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, unique: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Stakeholder.prototype, "mobileNumber", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Stakeholder.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Stakeholder.prototype, "isBlocked", void 0);
let ShareTMS = class ShareTMS extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, unique: true, lowercase: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ShareTMS.prototype, "owner", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({
        type: [
            {
                name: String,
                mobileNumber: String,
                description: String,
                isBlocked: Boolean
            }
        ],
        default: []
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], ShareTMS.prototype, "stakeholders", void 0);
ShareTMS = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], ShareTMS);

const ShareTMSSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(ShareTMS);


/***/ }),

/***/ "./apps/tms-api/src/app/share-app/services/share-app.services.ts":
/*!***********************************************************************!*\
  !*** ./apps/tms-api/src/app/share-app/services/share-app.services.ts ***!
  \***********************************************************************/
/*! exports provided: ShareAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareAppService", function() { return ShareAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/share-tms.schema */ "./apps/tms-api/src/app/share-app/models/share-tms.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
var _a;






let ShareAppService = class ShareAppService {
    constructor(shareTMS) {
        this.shareTMS = shareTMS;
    }
    verifyMobileNumber(number) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!number) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid number.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const sharingOwners = [];
                const owners = yield this.shareTMS.find().exec();
                owners.forEach(owner => {
                    if (owner.stakeholders.length > 0) {
                        owner.stakeholders.forEach(stakeholder => {
                            if (stakeholder.mobileNumber === number) {
                                sharingOwners.push(owner.owner);
                            }
                        });
                    }
                });
                return sharingOwners;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
        });
    }
    getAllStakeHolders(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.shareTMS.findOne({ owner: username }).exec();
                return owner.stakeholders;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
        });
    }
    addStakeHolder(stakeholderDTO) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!stakeholderDTO.owner) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.shareTMS
                    .findOne({ owner: stakeholderDTO.owner })
                    .exec();
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber: stakeholderDTO.stakeholders[0].mobileNumber
                })) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].CONFLICT,
                        error: 'Stakeholder already present.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].CONFLICT);
                }
                owner.stakeholders.push(stakeholderDTO.stakeholders[0]);
                const modifiedOwner = this.shareTMS(owner);
                const result = yield modifiedOwner.save();
                return result;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    blockStakeHolder(username, mobileNumber, isBlocked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            if (!mobileNumber) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid Mobile Number!',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.shareTMS.findOne({ owner: username }).exec();
                if (!owner) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not exist.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (!owner.stakeholders.length) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not have any stakeholder.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber
                })) {
                    owner.stakeholders = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](owner.stakeholders, (stakeholder) => {
                        if (stakeholder.mobileNumber === mobileNumber)
                            stakeholder.isBlocked = !!isBlocked;
                        return stakeholder;
                    });
                    yield this.shareTMS
                        .findOneAndUpdate({
                        owner: username
                    }, owner, { upsert: true })
                        .exec();
                    const modifiedOwner = yield this.shareTMS
                        .findOne({ owner: username })
                        .exec();
                    return modifiedOwner;
                }
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Stakeholder does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    deleteStakeHolder(username, mobileNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'User does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            if (!mobileNumber) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Mobile number does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.shareTMS.findOne({ owner: username }).exec();
                if (!owner.stakeholders.length) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not have any stakeholder.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber
                })) {
                    lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](owner.stakeholders, {
                        mobileNumber
                    });
                    yield this.shareTMS
                        .findOneAndUpdate({
                        owner: username
                    }, owner, { upsert: true })
                        .exec();
                    const modifiedOwner = yield this.shareTMS
                        .findOne({ owner: username })
                        .exec();
                    return modifiedOwner;
                }
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Stakeholder does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
};
ShareAppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])(_models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMS"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object])
], ShareAppService);



/***/ }),

/***/ "./apps/tms-api/src/app/share-app/share-app.module.ts":
/*!************************************************************!*\
  !*** ./apps/tms-api/src/app/share-app/share-app.module.ts ***!
  \************************************************************/
/*! exports provided: ShareAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareAppModule", function() { return ShareAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/share-tms.schema */ "./apps/tms-api/src/app/share-app/models/share-tms.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _share_app_share_app_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share-app/share-app.controller */ "./apps/tms-api/src/app/share-app/share-app/share-app.controller.ts");
/* harmony import */ var _services_share_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/share-app.services */ "./apps/tms-api/src/app/share-app/services/share-app.services.ts");






let ShareAppModule = class ShareAppModule {
};
ShareAppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([
                { name: _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMS"].name, schema: _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMSSchema"] }
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
        ],
        controllers: [_share_app_share_app_controller__WEBPACK_IMPORTED_MODULE_4__["ShareAppController"]],
        providers: [_services_share_app_services__WEBPACK_IMPORTED_MODULE_5__["ShareAppService"]],
        exports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([
                { name: _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMS"].name, schema: _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMSSchema"] }
            ])
        ]
    })
], ShareAppModule);



/***/ }),

/***/ "./apps/tms-api/src/app/share-app/share-app/share-app.controller.ts":
/*!**************************************************************************!*\
  !*** ./apps/tms-api/src/app/share-app/share-app/share-app.controller.ts ***!
  \**************************************************************************/
/*! exports provided: ShareAppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareAppController", function() { return ShareAppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../exception/http-exception.filter */ "./apps/tms-api/src/app/exception/http-exception.filter.ts");
/* harmony import */ var _services_share_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/share-app.services */ "./apps/tms-api/src/app/share-app/services/share-app.services.ts");
var _a, _b, _c, _d;





let ShareAppController = class ShareAppController {
    constructor(shareAppService) {
        this.shareAppService = shareAppService;
    }
    verifyMobileNumber(params) {
        console.log(params.number);
        return this.shareAppService.verifyMobileNumber(params.number);
    }
    addStakeHolder(req) {
        console.log(req.body);
        return this.shareAppService.addStakeHolder(req.body);
    }
    blockStakeHolder(req) {
        return this.shareAppService.blockStakeHolder(req.body.owner, req.body.mobileNumber, req.body.isBlocked);
    }
    deleteStakeHolder(req) {
        return this.shareAppService.deleteStakeHolder(req.body.owner, req.body.mobileNumber);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('verify/:number'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ShareAppController.prototype, "verifyMobileNumber", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('add-stakeholder'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ShareAppController.prototype, "addStakeHolder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('block-stakeholder'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ShareAppController.prototype, "blockStakeHolder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])('delete-stakeholder'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ShareAppController.prototype, "deleteStakeHolder", null);
ShareAppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('share-app'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseFilters"])(new _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_3__["HttpExceptionFilter"]()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _services_share_app_services__WEBPACK_IMPORTED_MODULE_4__["ShareAppService"] !== "undefined" && _services_share_app_services__WEBPACK_IMPORTED_MODULE_4__["ShareAppService"]) === "function" ? _d : Object])
], ShareAppController);



/***/ }),

/***/ "./apps/tms-api/src/app/share/models/share-tms.schema.ts":
/*!***************************************************************!*\
  !*** ./apps/tms-api/src/app/share/models/share-tms.schema.ts ***!
  \***************************************************************/
/*! exports provided: Stakeholder, ShareTMS, ShareTMSSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stakeholder", function() { return Stakeholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareTMS", function() { return ShareTMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareTMSSchema", function() { return ShareTMSSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable max-classes-per-file */


class Stakeholder extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Stakeholder.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, unique: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Stakeholder.prototype, "mobileNumber", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Stakeholder.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Stakeholder.prototype, "isBlocked", void 0);
let ShareTMS = class ShareTMS extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, unique: true, lowercase: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ShareTMS.prototype, "owner", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({
        type: [
            {
                name: String,
                mobileNumber: String,
                description: String,
                isBlocked: Boolean
            }
        ],
        default: []
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], ShareTMS.prototype, "stakeholders", void 0);
ShareTMS = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], ShareTMS);

const ShareTMSSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(ShareTMS);


/***/ }),

/***/ "./apps/tms-api/src/app/share/services/share.service.ts":
/*!**************************************************************!*\
  !*** ./apps/tms-api/src/app/share/services/share.service.ts ***!
  \**************************************************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/share-tms.schema */ "./apps/tms-api/src/app/share/models/share-tms.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
var _a;






let ShareService = class ShareService {
    constructor(shareTMS) {
        this.shareTMS = shareTMS;
    }
    getAllStakeHolders(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.shareTMS.findOne({ owner: username }).exec();
                return owner.stakeholders;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
        });
    }
    addStakeHolder(stakeholderDTO) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!stakeholderDTO.owner) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.shareTMS
                    .findOne({ owner: stakeholderDTO.owner })
                    .exec();
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber: stakeholderDTO.stakeholders[0].mobileNumber
                })) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].CONFLICT,
                        error: 'Stakeholder already present.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].CONFLICT);
                }
                owner.stakeholders.push(stakeholderDTO.stakeholders[0]);
                const modifiedOwner = this.shareTMS(owner);
                const result = yield modifiedOwner.save();
                return result;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    blockStakeHolder(username, mobileNumber, isBlocked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            if (!mobileNumber) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Invalid Mobile Number!',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.shareTMS.findOne({ owner: username }).exec();
                if (!owner) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not exist.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (!owner.stakeholders.length) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not have any stakeholder.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber
                })) {
                    owner.stakeholders = lodash__WEBPACK_IMPORTED_MODULE_1__["map"](owner.stakeholders, (stakeholder) => {
                        if (stakeholder.mobileNumber === mobileNumber)
                            stakeholder.isBlocked = !!isBlocked;
                        return stakeholder;
                    });
                    yield this.shareTMS
                        .findOneAndUpdate({
                        owner: username
                    }, owner, { upsert: true })
                        .exec();
                    const modifiedOwner = yield this.shareTMS
                        .findOne({ owner: username })
                        .exec();
                    return modifiedOwner;
                }
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Stakeholder does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    deleteStakeHolder(username, mobileNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!username) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'User does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            if (!mobileNumber) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Mobile number does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            try {
                const owner = yield this.shareTMS.findOne({ owner: username }).exec();
                if (!owner.stakeholders.length) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                        error: 'User does not have any stakeholder.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
                }
                if (lodash__WEBPACK_IMPORTED_MODULE_1__["find"](owner.stakeholders, {
                    mobileNumber
                })) {
                    lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](owner.stakeholders, {
                        mobileNumber
                    });
                    yield this.shareTMS
                        .findOneAndUpdate({
                        owner: username
                    }, owner, { upsert: true })
                        .exec();
                    const modifiedOwner = yield this.shareTMS
                        .findOne({ owner: username })
                        .exec();
                    return modifiedOwner;
                }
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'Stakeholder does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
};
ShareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])(_models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMS"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object])
], ShareService);



/***/ }),

/***/ "./apps/tms-api/src/app/share/share.module.ts":
/*!****************************************************!*\
  !*** ./apps/tms-api/src/app/share/share.module.ts ***!
  \****************************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/share-tms.schema */ "./apps/tms-api/src/app/share/models/share-tms.schema.ts");
/* harmony import */ var _auth_middlewares_auth_token_middleware_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/middlewares/auth-token-middleware.service */ "./apps/tms-api/src/app/auth/middlewares/auth-token-middleware.service.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _share_share_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share/share.controller */ "./apps/tms-api/src/app/share/share/share.controller.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/share.service */ "./apps/tms-api/src/app/share/services/share.service.ts");
/* harmony import */ var _auth_services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/services/token.service */ "./apps/tms-api/src/app/auth/services/token.service.ts");








let ShareModule = class ShareModule {
    configure(consumer) {
        consumer.apply(_auth_middlewares_auth_token_middleware_service__WEBPACK_IMPORTED_MODULE_3__["AuthTokenMiddleware"]).forRoutes({ path: 'share/*', method: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].ALL });
    }
};
ShareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([
                { name: _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMS"].name, schema: _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMSSchema"] }
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
        ],
        controllers: [_share_share_controller__WEBPACK_IMPORTED_MODULE_5__["ShareController"]],
        providers: [_services_share_service__WEBPACK_IMPORTED_MODULE_6__["ShareService"], _auth_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]],
        exports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([
                { name: _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMS"].name, schema: _models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMSSchema"] }
            ])
        ]
    })
], ShareModule);



/***/ }),

/***/ "./apps/tms-api/src/app/share/share/share.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/tms-api/src/app/share/share/share.controller.ts ***!
  \**************************************************************/
/*! exports provided: ShareController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareController", function() { return ShareController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../exception/http-exception.filter */ "./apps/tms-api/src/app/exception/http-exception.filter.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/share.service */ "./apps/tms-api/src/app/share/services/share.service.ts");
var _a, _b, _c, _d;





let ShareController = class ShareController {
    constructor(shareService) {
        this.shareService = shareService;
    }
    getAllStakeHolders(params) {
        return this.shareService.getAllStakeHolders(params.owner);
    }
    addStakeHolder(req) {
        console.log(req.body);
        return this.shareService.addStakeHolder(req.body);
    }
    blockStakeHolder(req) {
        return this.shareService.blockStakeHolder(req.body.owner, req.body.mobileNumber, req.body.isBlocked);
    }
    deleteStakeHolder(req) {
        return this.shareService.deleteStakeHolder(req.body.owner, req.body.mobileNumber);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('stakeholders/:owner'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ShareController.prototype, "getAllStakeHolders", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('add-stakeholder'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ShareController.prototype, "addStakeHolder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('block-stakeholder'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ShareController.prototype, "blockStakeHolder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])('delete-stakeholder'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ShareController.prototype, "deleteStakeHolder", null);
ShareController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('share'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseFilters"])(new _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_3__["HttpExceptionFilter"]()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _services_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"] !== "undefined" && _services_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"]) === "function" ? _d : Object])
], ShareController);



/***/ }),

/***/ "./apps/tms-api/src/app/tenders/models/tenders.schema.ts":
/*!***************************************************************!*\
  !*** ./apps/tms-api/src/app/tenders/models/tenders.schema.ts ***!
  \***************************************************************/
/*! exports provided: TenderProperties, Tender, TendersSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenderProperties", function() { return TenderProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tender", function() { return Tender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendersSchema", function() { return TendersSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);

// eslint-disable-next-line max-classes-per-file


class TenderProperties extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TenderProperties.prototype, "owner", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TenderProperties.prototype, "createdDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, default: '' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TenderProperties.prototype, "document", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, default: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], TenderProperties.prototype, "isDeleted", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, default: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], TenderProperties.prototype, "isComplete", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true, default: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], TenderProperties.prototype, "isNotFilled", void 0);
let Tender = class Tender extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "amount", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "fee", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "emd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "referenceNumber", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "tenderId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "publishedDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "bidDueDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "bidCutOffTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "userKeyName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "userLoginId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "userPassword", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Tender.prototype, "userWebsite", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({
        type: {
            owner: String,
            createdDate: String,
            document: String,
            isDeleted: Boolean,
            isComplete: Boolean,
            isNotFilled: Boolean
        },
        required: true,
        default: {
            owner: 'unknown',
            createdDate: 'Thu Jan 01 1970 00:00:00 GMT+0530 (IST)'
        }
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TenderProperties)
], Tender.prototype, "properties", void 0);
Tender = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], Tender);

const TendersSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Tender);


/***/ }),

/***/ "./apps/tms-api/src/app/tenders/services/tender.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/tms-api/src/app/tenders/services/tender.service.ts ***!
  \*****************************************************************/
/*! exports provided: TenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenderService", function() { return TenderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_tenders_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tenders.schema */ "./apps/tms-api/src/app/tenders/models/tenders.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let TenderService = class TenderService {
    constructor(tenders) {
        this.tenders = tenders;
    }
    getAllTenders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const tenders = yield this.tenders.find().exec();
                return tenders;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    // eslint-disable-next-line max-len
    getAllTendersByUserName(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!username) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid username.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                const allTendersByUsername = yield this.tenders.find({
                    'properties.owner': username
                }).exec();
                return allTendersByUsername;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    getTendersByUserName(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!username) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid username.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                const tendersByUsername = yield this.tenders.find({
                    'properties.owner': username,
                    'properties.isDeleted': false
                }).exec();
                return tendersByUsername;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    getActiveTendersByUser(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!username) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid username.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                const tendersByUsername = yield this.tenders.find({
                    'properties.owner': username,
                    'properties.isDeleted': false,
                    'properties.isComplete': false,
                    'properties.isNotFilled': false
                }).exec();
                return tendersByUsername;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    getCompleteTendersByUser(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!username) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid username.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                const tendersByUsername = yield this.tenders.find({
                    'properties.owner': username,
                    'properties.isDeleted': false,
                    'properties.isComplete': true
                }).exec();
                return tendersByUsername;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    getNotFilledTendersByUser(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!username) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid username.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                const tendersByUsername = yield this.tenders.find({
                    'properties.owner': username,
                    'properties.isDeleted': false,
                    'properties.isNotFilled': true
                }).exec();
                return tendersByUsername;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    createTender(tender) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.checkAndThrowException(tender);
                const newTender = yield this.tenders(tender);
                const createdTender = yield newTender.save();
                return createdTender;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    // eslint-disable-next-line max-len
    updateTender(tender, tenderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!tenderId) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid tender id.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                this.checkAndThrowException(tender);
                const currentTender = tender;
                yield this.tenders
                    .findOneAndUpdate({
                    _id: tenderId
                }, currentTender, { upsert: true })
                    .exec();
                const updatedTender = yield this.tenders.findOne({ _id: tenderId });
                return updatedTender;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    deleteTender(tenderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!tenderId) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid tender id.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                const currentTender = yield this.tenders.findOne({ _id: tenderId });
                currentTender.properties.isDeleted = true;
                yield this.tenders
                    .findOneAndUpdate({
                    _id: tenderId
                }, currentTender, { upsert: true })
                    .exec();
                const updatedTender = yield this.tenders.findOne({ _id: tenderId });
                return updatedTender;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    retrieveTender(tenderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!tenderId) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid tender id.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                const currentTender = yield this.tenders.findOne({ _id: tenderId });
                currentTender.properties.isDeleted = false;
                yield this.tenders
                    .findOneAndUpdate({
                    _id: tenderId
                }, currentTender, { upsert: true })
                    .exec();
                const updatedTender = yield this.tenders.findOne({ _id: tenderId });
                return updatedTender;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    deleteTenderPermanently(tenderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!tenderId) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                        error: 'Invalid tender id.',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
                }
                yield this.tenders.deleteOne({ _id: tenderId });
                return true;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    checkAndThrowException(tender) {
        if (!tender) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender details.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.name) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender name.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.amount) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender amount.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.fee) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender fees.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.emd) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender emd.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.bidDueDate) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender Bid Due Date.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.bidCutOffTime) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender Bid Cut Off Time.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.referenceNumber) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender Reference Number.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.tenderId) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender ID.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.publishedDate) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender Published Date.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.properties.owner) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender owner.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
        if (!tender.properties.createdDate) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]({
                status: _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST,
                error: 'Invalid tender Create Date.',
            }, _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].BAD_REQUEST);
        }
    }
};
TenderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_models_tenders_schema__WEBPACK_IMPORTED_MODULE_1__["Tender"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _a : Object])
], TenderService);



/***/ }),

/***/ "./apps/tms-api/src/app/tenders/tenders.module.ts":
/*!********************************************************!*\
  !*** ./apps/tms-api/src/app/tenders/tenders.module.ts ***!
  \********************************************************/
/*! exports provided: TendersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendersModule", function() { return TendersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_tenders_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/tenders.schema */ "./apps/tms-api/src/app/tenders/models/tenders.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_tender_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/tender.service */ "./apps/tms-api/src/app/tenders/services/tender.service.ts");
/* harmony import */ var _tenders_tenders_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tenders/tenders.controller */ "./apps/tms-api/src/app/tenders/tenders/tenders.controller.ts");
/* harmony import */ var _auth_middlewares_auth_token_middleware_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/middlewares/auth-token-middleware.service */ "./apps/tms-api/src/app/auth/middlewares/auth-token-middleware.service.ts");
/* harmony import */ var _auth_services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/services/token.service */ "./apps/tms-api/src/app/auth/services/token.service.ts");








let TendersModule = class TendersModule {
    configure(consumer) {
        consumer.apply(_auth_middlewares_auth_token_middleware_service__WEBPACK_IMPORTED_MODULE_6__["AuthTokenMiddleware"]).forRoutes({ path: 'tenders/*', method: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].ALL });
    }
};
TendersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([
                { name: _models_tenders_schema__WEBPACK_IMPORTED_MODULE_2__["Tender"].name, schema: _models_tenders_schema__WEBPACK_IMPORTED_MODULE_2__["TendersSchema"] }
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
        ],
        controllers: [_tenders_tenders_controller__WEBPACK_IMPORTED_MODULE_5__["TendersController"]],
        providers: [_services_tender_service__WEBPACK_IMPORTED_MODULE_4__["TenderService"], _auth_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]],
        exports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([
                { name: _models_tenders_schema__WEBPACK_IMPORTED_MODULE_2__["Tender"].name, schema: _models_tenders_schema__WEBPACK_IMPORTED_MODULE_2__["TendersSchema"] }
            ])
        ]
    })
], TendersModule);



/***/ }),

/***/ "./apps/tms-api/src/app/tenders/tenders/tenders.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/tms-api/src/app/tenders/tenders/tenders.controller.ts ***!
  \********************************************************************/
/*! exports provided: TendersController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TendersController", function() { return TendersController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exception/http-exception.filter */ "./apps/tms-api/src/app/exception/http-exception.filter.ts");
/* harmony import */ var _services_tender_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tender.service */ "./apps/tms-api/src/app/tenders/services/tender.service.ts");
var _a;




let TendersController = class TendersController {
    constructor(tendersService) {
        this.tendersService = tendersService;
    }
    // All the APIs should work if the owner of the tender is the modifier
    // This should work for admin only - RBAC
    getAllTenders(req) {
        return this.tendersService.getAllTenders();
    }
    // This gives you all tenders, including deleted(soft)
    getAllTendersByUser(params) {
        return this.tendersService.getAllTendersByUserName(params.username);
    }
    // This gives you all non-deleted(soft) tenders
    getTendersByUser(params) {
        return this.tendersService.getTendersByUserName(params.username);
    }
    getActiveTendersByUser(params) {
        return this.tendersService.getActiveTendersByUser(params.username);
    }
    getCompleteTendersByUser(params) {
        return this.tendersService.getCompleteTendersByUser(params.username);
    }
    getNotFilledTendersByUser(params) {
        return this.tendersService.getNotFilledTendersByUser(params.username);
    }
    createTender(req) {
        return this.tendersService.createTender(req.body);
    }
    // should be soft delete
    // Check ownership
    deleteTender(req, params) {
        return this.tendersService.deleteTender(params.tenderId);
    }
    // should be soft delete
    // Check ownership
    retrieveTender(req, params) {
        return this.tendersService.retrieveTender(params.tenderId);
    }
    // should be hard delete
    // This should work for admin only - RBAC
    deleteTenderPermanently(params) {
        return this.tendersService.deleteTenderPermanently(params.tenderId);
    }
    updateTender(req, params) {
        return this.tendersService.updateTender(req.body, params.tenderId);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('all'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "getAllTenders", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('all/:username'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "getAllTendersByUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('all-tenders/:username'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "getTendersByUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('active/:username'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "getActiveTendersByUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('complete/:username'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "getCompleteTendersByUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('not-filled/:username'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "getNotFilledTendersByUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "createTender", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])('delete/:tenderId'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "deleteTender", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('retrieve/:tenderId'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "retrieveTender", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])('delete-permanently/:tenderId'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "deleteTenderPermanently", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('update/:tenderId'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TendersController.prototype, "updateTender", null);
TendersController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('tenders'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseFilters"])(new _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_2__["HttpExceptionFilter"]()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services_tender_service__WEBPACK_IMPORTED_MODULE_3__["TenderService"] !== "undefined" && _services_tender_service__WEBPACK_IMPORTED_MODULE_3__["TenderService"]) === "function" ? _a : Object])
], TendersController);



/***/ }),

/***/ "./apps/tms-api/src/app/transaction/models/transaction.schema.ts":
/*!***********************************************************************!*\
  !*** ./apps/tms-api/src/app/transaction/models/transaction.schema.ts ***!
  \***********************************************************************/
/*! exports provided: Transaction, TransactionSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionSchema", function() { return TransactionSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
var _a;

// eslint-disable-next-line max-classes-per-file


let Transaction = class Transaction extends mongoose__WEBPACK_IMPORTED_MODULE_2__["Document"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Transaction.prototype, "username", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Transaction.prototype, "orderId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], Transaction.prototype, "amount", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Transaction.prototype, "currency", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Transaction.prototype, "razorpay_payment_id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Transaction.prototype, "razorpay_signature", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Transaction.prototype, "orderDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Prop"])({ required: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], Transaction.prototype, "successful", void 0);
Transaction = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"])()
], Transaction);

const TransactionSchema = _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaFactory"].createForClass(Transaction);


/***/ }),

/***/ "./apps/tms-api/src/app/transaction/services/transaction.service.ts":
/*!**************************************************************************!*\
  !*** ./apps/tms-api/src/app/transaction/services/transaction.service.ts ***!
  \**************************************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_transaction_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/transaction.schema */ "./apps/tms-api/src/app/transaction/models/transaction.schema.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
var _a, _b;





const Razorpay = __webpack_require__(/*! razorpay */ "razorpay");
let TransactionService = class TransactionService {
    constructor(transaction, http) {
        this.transaction = transaction;
        this.http = http;
    }
    createTransactionId(transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const newTransaction = yield this.transaction(transaction);
                const createdTransaction = yield newTransaction.save();
                return createdTransaction;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    updateTransaction(transaction, transactionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.transaction
                    .findOneAndUpdate({
                    _id: transactionId
                }, transaction, { upsert: true })
                    .exec();
                const modifiedTransaction = yield this.transaction
                    .findOne({ _id: transactionId })
                    .exec();
                return modifiedTransaction;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    generateOrderId(orderInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const instance = new Razorpay({
                key_id: 'rzp_test_OhEHEss3A6g4fh',
                key_secret: 'gUS1wjhY85L3lYYCIyUDpGrQ',
            });
            const orderId = yield instance.orders.create({
                amount: orderInfo.amount,
                currency: orderInfo.currency,
                receipt: orderInfo.receipt
            });
            return orderId;
        });
    }
    verifyOrder(orderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const instance = new Razorpay({
                key_id: 'rzp_test_OhEHEss3A6g4fh',
                key_secret: 'gUS1wjhY85L3lYYCIyUDpGrQ',
            });
            const order = yield instance.orders.fetch(orderId);
            return order;
        });
    }
};
TransactionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_models_transaction_schema__WEBPACK_IMPORTED_MODULE_3__["Transaction"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpService"] !== "undefined" && _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpService"]) === "function" ? _b : Object])
], TransactionService);



/***/ }),

/***/ "./apps/tms-api/src/app/transaction/transaction.module.ts":
/*!****************************************************************!*\
  !*** ./apps/tms-api/src/app/transaction/transaction.module.ts ***!
  \****************************************************************/
/*! exports provided: TransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_services_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/services/token.service */ "./apps/tms-api/src/app/auth/services/token.service.ts");
/* harmony import */ var _models_transaction_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/transaction.schema */ "./apps/tms-api/src/app/transaction/models/transaction.schema.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/transaction.service */ "./apps/tms-api/src/app/transaction/services/transaction.service.ts");
/* harmony import */ var _transaction_transaction_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction/transaction.controller */ "./apps/tms-api/src/app/transaction/transaction/transaction.controller.ts");







let TransactionModule = class TransactionModule {
};
TransactionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: _models_transaction_schema__WEBPACK_IMPORTED_MODULE_4__["Transaction"].name, schema: _models_transaction_schema__WEBPACK_IMPORTED_MODULE_4__["TransactionSchema"] }
            ]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
        ],
        controllers: [_transaction_transaction_controller__WEBPACK_IMPORTED_MODULE_6__["TransactionController"]],
        providers: [_auth_services_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _services_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]],
        exports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: _models_transaction_schema__WEBPACK_IMPORTED_MODULE_4__["Transaction"].name, schema: _models_transaction_schema__WEBPACK_IMPORTED_MODULE_4__["TransactionSchema"] }
            ])
        ]
    })
], TransactionModule);



/***/ }),

/***/ "./apps/tms-api/src/app/transaction/transaction/transaction.controller.ts":
/*!********************************************************************************!*\
  !*** ./apps/tms-api/src/app/transaction/transaction/transaction.controller.ts ***!
  \********************************************************************************/
/*! exports provided: TransactionController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionController", function() { return TransactionController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exception/http-exception.filter */ "./apps/tms-api/src/app/exception/http-exception.filter.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/transaction.service */ "./apps/tms-api/src/app/transaction/services/transaction.service.ts");
var _a;




let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    createTransaction(req) {
        return this.transactionService.createTransactionId(req.body);
    }
    updateTransaction(req, params) {
        return this.transactionService.updateTransaction(req.body, params.transactionId);
    }
    generateOrderId(req) {
        return this.transactionService.generateOrderId(req.body);
    }
    verifyOrder(params) {
        return this.transactionService.verifyOrder(params.orderId);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TransactionController.prototype, "createTransaction", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('update-transaction/:transactionId'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TransactionController.prototype, "updateTransaction", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('order-id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TransactionController.prototype, "generateOrderId", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('order-id/:orderId'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], TransactionController.prototype, "verifyOrder", null);
TransactionController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('transaction'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseFilters"])(new _exception_http_exception_filter__WEBPACK_IMPORTED_MODULE_2__["HttpExceptionFilter"]()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"] !== "undefined" && _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"]) === "function" ? _a : Object])
], TransactionController);



/***/ }),

/***/ "./apps/tms-api/src/app/users/models/schemas/user.schema.ts":
/*!******************************************************************!*\
  !*** ./apps/tms-api/src/app/users/models/schemas/user.schema.ts ***!
  \******************************************************************/
/*! exports provided: UserSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSchema", function() { return UserSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);



const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"]({
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    registrationDate: { type: Date, required: true },
    subscriptionStartDate: { type: String, required: true },
    subscriptionEndDate: { type: String, required: true },
    isPremiumMember: { type: Boolean, required: true },
    premiumMembershipReferenceId: { type: String, required: true },
    companyName: { type: String, required: true },
    address: { type: String, required: true },
    panCardNumber: { type: String, required: false },
    mobileNumber: { type: String, required: true },
});
UserSchema.pre('save', function (next) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            console.log('Encrypting user password!');
            const salt = yield bcrypt__WEBPACK_IMPORTED_MODULE_2__["genSalt"](10);
            const hashedPassword = yield bcrypt__WEBPACK_IMPORTED_MODULE_2__["hash"](this.password, salt);
            this.password = hashedPassword;
            console.log('Password Encrypted!');
            next();
        }
        catch (error) {
            console.log('Error saving the user. ', error.message);
            next(error);
        }
    });
});
UserSchema.post('save', function (next) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            console.log('User is saved!');
        }
        catch (error) {
            console.log('Error saving the user. ', error.message);
            next(error);
        }
    });
});


/***/ }),

/***/ "./apps/tms-api/src/app/users/services/users.service.ts":
/*!**************************************************************!*\
  !*** ./apps/tms-api/src/app/users/services/users.service.ts ***!
  \**************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _share_models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share/models/share-tms.schema */ "./apps/tms-api/src/app/share/models/share-tms.schema.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/services/token.service */ "./apps/tms-api/src/app/auth/services/token.service.ts");
var _a, _b, _c;

/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */






let UserService = class UserService {
    constructor(userModel, shareTMS, tokenService) {
        this.userModel = userModel;
        this.shareTMS = shareTMS;
        this.tokenService = tokenService;
    }
    getUser(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.userModel.find({
                username: username.toLowerCase()
            });
            if (!result.length) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST,
                    error: 'User does not exist. Please enter a valid email id.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST);
            }
            delete result[0].password;
            return result;
        });
    }
    getUserSubscriptionDetails(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.userModel.find({
                username: username.toLowerCase()
            });
            if (!result.length) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST,
                    error: 'User does not exist. Please enter a valid email id.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST);
            }
            return {
                isPremiumMember: result[0].isPremiumMember,
                subscriptionEndDate: result[0].subscriptionEndDate,
                subscriptionStartDate: result[0].subscriptionStartDate,
                registrationDate: result[0].subscriptionStartDate,
                premiumMembershipReferenceId: result[0].premiumMembershipReferenceId
            };
        });
    }
    updateUser(premiumMembershipReferenceId, username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const users = yield this.userModel
                    .find({
                    username: username
                })
                    .exec();
                users[0].premiumMembershipReferenceId = premiumMembershipReferenceId;
                yield this.userModel.findOneAndUpdate({
                    username: username
                }, users[0], { upsert: true });
                const modifiedUsers = yield this.userModel.find({ username: username }).exec();
                return modifiedUsers[0];
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    registerUser(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newUser = this.userModel(user);
            try {
                const result = yield newUser.save();
                const createShareTMSEntry = new this.shareTMS({
                    owner: result.username,
                    stakeholders: []
                });
                yield createShareTMSEntry.save();
                return {
                    _id: result._id,
                    username: result.username,
                    status: result._id ? 'success' : 'failure'
                };
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    checkUserRegistration(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.userModel.find({
                username: username.toLowerCase()
            });
            if (result.length) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST,
                    error: 'User already exists. Chose a different username.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].BAD_REQUEST);
            }
            return {
                message: 'User does not exist. Go ahead with registeration.',
                status: 'success'
            };
        });
    }
    login(userAuthentication) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.userModel.findOne({
                    username: userAuthentication.username.toLowerCase()
                });
                if (user) {
                    const isPasswordMatching = yield bcrypt__WEBPACK_IMPORTED_MODULE_1__["compare"](userAuthentication.password, user.password);
                    if (isPasswordMatching) {
                        const accessToken = yield this.tokenService.signAccessToken(user.username);
                        return {
                            username: user.username,
                            accessToken,
                            refreshToken: '',
                            status: 'success'
                        };
                    }
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                        status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].UNAUTHORIZED,
                        error: 'Authentication failed!',
                    }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].UNAUTHORIZED);
                }
                // throw error - user does not exist
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND,
                    error: 'User does not exist.',
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].NOT_FOUND);
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpException"]({
                    status: _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR,
                    error: JSON.stringify(error),
                }, _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
        });
    }
    refreshToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
};
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])('User')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])(_share_models_share_tms_schema__WEBPACK_IMPORTED_MODULE_2__["ShareTMS"].name)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _b : Object, typeof (_c = typeof _auth_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] !== "undefined" && _auth_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"]) === "function" ? _c : Object])
], UserService);



/***/ }),

/***/ "./apps/tms-api/src/app/users/users.controller.ts":
/*!********************************************************!*\
  !*** ./apps/tms-api/src/app/users/users.controller.ts ***!
  \********************************************************/
/*! exports provided: UsersController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersController", function() { return UsersController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/users.service */ "./apps/tms-api/src/app/users/services/users.service.ts");
var _a, _b, _c, _d, _e, _f;




let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    updateUser(request, params) {
        return this.userService.updateUser(request.body.premiumMembershipReferenceId, params.username);
    }
    getUser(params) {
        return this.userService.getUser(params.username);
    }
    getUserSubscriptionDetails(params) {
        return this.userService.getUserSubscriptionDetails(params.username);
    }
    registerUser(request) {
        return this.userService.registerUser(request.body);
    }
    checkUserRegistration(params) {
        return this.userService.checkUserRegistration(params.username);
    }
    login(request) {
        return this.userService.login(request.body);
    }
    refreshToken(request) {
        return this.userService.refreshToken();
    }
    logout(request) {
        return this.userService.logout();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])('/:username'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _a : Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('details/:username'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('subscription-details/:username'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UsersController.prototype, "getUserSubscriptionDetails", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('register'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UsersController.prototype, "registerUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('check/:username'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UsersController.prototype, "checkUserRegistration", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('login'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UsersController.prototype, "login", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('refresh-token'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _d : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UsersController.prototype, "refreshToken", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])('logout'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Header"])('Cache-Control', 'none'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], UsersController.prototype, "logout", null);
UsersController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('user'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_f = typeof _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] !== "undefined" && _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]) === "function" ? _f : Object])
], UsersController);



/***/ }),

/***/ "./apps/tms-api/src/app/users/users.module.ts":
/*!****************************************************!*\
  !*** ./apps/tms-api/src/app/users/users.module.ts ***!
  \****************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.controller */ "./apps/tms-api/src/app/users/users.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/schemas/user.schema */ "./apps/tms-api/src/app/users/models/schemas/user.schema.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/users.service */ "./apps/tms-api/src/app/users/services/users.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.module */ "./apps/tms-api/src/app/auth/auth.module.ts");
/* harmony import */ var _auth_services_token_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/services/token.service */ "./apps/tms-api/src/app/auth/services/token.service.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/share.module */ "./apps/tms-api/src/app/share/share.module.ts");









let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["MongooseModule"].forFeature([{ name: 'User', schema: _models_schemas_user_schema__WEBPACK_IMPORTED_MODULE_4__["UserSchema"] }]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
            _share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        controllers: [_users_controller__WEBPACK_IMPORTED_MODULE_2__["UsersController"]],
        providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _auth_services_token_service__WEBPACK_IMPORTED_MODULE_7__["TokenService"]],
        exports: [],
    })
], UsersModule);



/***/ }),

/***/ "./apps/tms-api/src/main.ts":
/*!**********************************!*\
  !*** ./apps/tms-api/src/main.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./apps/tms-api/src/app/app.module.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_6__);
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */







function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_6__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);
        const globalPrefix = 'api';
        app.use(morgan__WEBPACK_IMPORTED_MODULE_2__('dev'));
        app.setGlobalPrefix(globalPrefix);
        app.enableCors();
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
            next();
        });
        const port = process.env.PORT || 3000;
        const options = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["DocumentBuilder"]()
            .setTitle('E-Bharat: Tender Management System')
            .setDescription('E-Bharat: TMS')
            .setVersion('1.0')
            .addBearerAuth()
            .addTag('tms')
            .build();
        const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].createDocument(app, options);
        _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].setup('api', app, document);
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_5__["Logger"].log(`Listening at http://localhost:${port}/${globalPrefix}`);
        });
        process.on('SIGINT', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield mongoose__WEBPACK_IMPORTED_MODULE_1__["connection"].close();
            process.exit(0);
        }));
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./apps/tms-api/src/main.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ankittanna/Desktop/tms-workspace/apps/tms-api/src/main.ts */"./apps/tms-api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "razorpay":
/*!***************************!*\
  !*** external "razorpay" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("razorpay");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map