"use strict";
exports.__esModule = true;
exports.Fatora = void 0;
var client_api_1 = require("./ClientApi/client.api");
var invoice_api_1 = require("./InvoiceApi/invoice.api");
var payment_api_1 = require("./PaymentApi/payment.api");
var Fatora = /** @class */ (function () {
    function Fatora(_a) {
        var apiKey = _a.apiKey;
        // Define Headers
        var headers = new Headers();
        headers.set("api_key", apiKey);
        headers.set("Content-Type", "application/json");
        // Define Apis
        this.PaymentApi = new payment_api_1["default"](headers);
        this.InvoiceApi = new invoice_api_1["default"](headers);
        this.ClientApi = new client_api_1["default"](headers);
    }
    return Fatora;
}());
exports.Fatora = Fatora;
