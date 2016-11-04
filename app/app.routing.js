"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var precisionTargetCustomers_component_1 = require('./main/precisionTargetCustomers.component');
var appRoutes = [
    { path: 'precisionTargetCustomers', component: precisionTargetCustomers_component_1.PrecisionTargetCustomersComponent },
    { path: '', component: app_component_1.AppComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map