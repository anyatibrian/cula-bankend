"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var celebrate_1 = require("celebrate");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var checkAuth_1 = require("./middleware/checkAuth");
var user_routes_1 = require("./resources/userAuth/user.routes");
var profile_routes_1 = require("./resources/userprofiles/profile.routes");
var prefix = '/api/v1/';
// setting up the application
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.set('secretOrkey', 'getSomeNinjas');
app.use(express_1.default.static('uploads'));
// setting up the application with body parser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// the initial app setup
app.get('/', checkAuth_1.checkAuth, function (req, res) {
    return res.status(200).json({
        message: 'your welcome to the app',
        userInfo: req.user,
    });
});
// the users routes
app.use(prefix + "users", user_routes_1.UserRoutes);
app.use(prefix + "users", profile_routes_1.profileRoutes);
app.use(celebrate_1.errors());
exports.default = app;
