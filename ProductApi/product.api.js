"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProductApi = void 0;
var fatoraEndpoint_1 = require("../fatoraEndpoint");
var ProductApi = /** @class */ (function () {
    function ProductApi(headers) {
        this.ProductBaseAPi = "".concat(fatoraEndpoint_1["default"], "/products");
        this.headers = headers;
    }
    ProductApi.prototype.CreateNewProduct = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch("".concat(this.ProductBaseAPi), {
                                method: "POST",
                                headers: this.headers,
                                body: JSON.stringify(input)
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductApi.prototype.UpdateProduct = function (_a, input) {
        var product_id = _a.product_id;
        return __awaiter(this, void 0, void 0, function () {
            var res, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch("".concat(this.ProductBaseAPi, "/").concat(product_id), {
                                method: "PUT",
                                headers: this.headers,
                                body: JSON.stringify(input)
                            })];
                    case 1:
                        res = _b.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        err_2 = _b.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductApi.prototype.DeleteProduct = function (_a) {
        var product_id = _a.product_id;
        return __awaiter(this, void 0, void 0, function () {
            var res, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch("".concat(this.ProductBaseAPi, "/").concat(product_id), {
                                method: "DELETE",
                                headers: this.headers
                            })];
                    case 1:
                        res = _b.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        err_3 = _b.sent();
                        console.log(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductApi.prototype.GetProduct = function (_a) {
        var product_id = _a.product_id;
        return __awaiter(this, void 0, void 0, function () {
            var res, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch("".concat(this.ProductBaseAPi, "/").concat(product_id), {
                                method: "GET",
                                headers: this.headers
                            })];
                    case 1:
                        res = _b.sent();
                        return [2 /*return*/, res.json()];
                    case 2:
                        err_4 = _b.sent();
                        console.log(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductApi.prototype.buildQueryString = function (params) {
        var queryParams = [];
        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] !== undefined) {
                var value = params[key];
                queryParams.push("".concat(key, "=").concat(encodeURIComponent(String(value))));
            }
        }
        return queryParams.join("&");
    };
    ProductApi.prototype.SearchProducts = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var res, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fetch("".concat(this.ProductBaseAPi, "?").concat(this.buildQueryString(input)), {
                                method: "GET",
                                headers: this.headers
                            })];
                    case 1:
                        res = _a.sent();
                        console.log("".concat(this.ProductBaseAPi, "?").concat(this.buildQueryString(input)));
                        return [2 /*return*/, res.json()];
                    case 2:
                        err_5 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProductApi;
}());
exports.ProductApi = ProductApi;
