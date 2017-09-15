var MWSClient = require('./mws');

module.exports = {

    Client: MWSClient.Client,

    ListOrders: function ListOrders(client) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var req = MWSClient.Orders.requests.ListOrders();
        req.set(args);
        return client.invoke(req);
    },

    GetMatchingProductForId: function GetMatchingProductForId(client) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var req = MWSClient.Products.requests.GetMatchingProductForId();
        req.set(args);
        return client.invoke(req);
    },

    GetCompetitivePricingForASIN: function GetCompetitivePricingForASIN(client) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var req = MWSClient.Products.requests.GetCompetitivePricingForASIN();
        req.set(args);
        return client.invoke(req);
    },

    GetMyFeesEstimate: function GetMyFeesEstimate(client) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var req = MWSClient.Products.requests.GetMyFeesEstimate();
        req.set(args);
        return client.invoke(req);
    },

    GetLowestPricedOffersForASIN: function GetLowestPricedOffersForASIN(client) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var req = MWSClient.Products.requests.GetLowestPricedOffersForASIN();
        req.set(args);
        return client.invoke(req);
    }

}