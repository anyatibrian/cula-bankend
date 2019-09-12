"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("../../database/models"));
var crud_utils_1 = __importDefault(require("../../utils/crud.utils"));
var UserProfiles = /** @class */ (function (_super) {
    __extends(UserProfiles, _super);
    function UserProfiles() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = 'SaccoProfile';
        _this.updateModelInformation = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, district, accountNo, county, village, country, division, subcounty, path, id, updateProfile, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, district = _a.district, accountNo = _a.accountNo, county = _a.county, village = _a.village, country = _a.country, division = _a.division, subcounty = _a.subcounty, path = req.file.path, id = req.user.id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, models_1.default[this.model].update({
                                profileImage: path,
                                accountNo: accountNo,
                                district: district,
                                county: county,
                                village: village,
                                country: country,
                                division: division,
                                subcounty: subcounty,
                            }, {
                                where: { saccoId: id },
                            })];
                    case 2:
                        updateProfile = _b.sent();
                        if (updateProfile) {
                            return [2 /*return*/, res.status(200).json({
                                    message: 'your profile has been updated successfully',
                                })];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        err_1.status = 500;
                        err_1.message = 'failed to update your profile information';
                        return [2 /*return*/, res.json(err_1)];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getSingleModelInformation = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var id, userProfiles, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.user.id;
                        return [4 /*yield*/, models_1.default[this.model].findOne({
                                include: [
                                    {
                                        model: models_1.default.User,
                                        as: 'sacco',
                                    },
                                ],
                                where: { saccoId: id },
                            })];
                    case 1:
                        userProfiles = _a.sent();
                        if (userProfiles) {
                            return [2 /*return*/, res.status(200).json({
                                    message: 'your profile informations',
                                    profile: userProfiles,
                                })];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        err_2.status = 500;
                        err_2.message = "your don't have any information ";
                        return [2 /*return*/, res.status(500).json(err_2)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return UserProfiles;
}(crud_utils_1.default));
exports.default = UserProfiles;
