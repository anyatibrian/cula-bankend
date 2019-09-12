"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var checkAuth_1 = require("../../middleware/checkAuth");
var imagehandler_middle_1 = require("../../middleware/imagehandler.middle");
var profile_controllers_1 = __importDefault(require("./profile.controllers"));
exports.profileRoutes = express_1.default.Router();
var profile = new profile_controllers_1.default();
var upload = multer_1.default({ storage: imagehandler_middle_1.diskStorage });
exports.profileRoutes
    .route('/profiles')
    .all(checkAuth_1.checkAuth)
    .post(profile.createNewModel)
    .get(profile.getSingleModelInformation)
    .put(upload.single('profileImage'), profile.updateModelInformation);
