"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackagelockHash = void 0;
var crypto_1 = __importDefault(require("crypto"));
var fs_1 = __importDefault(require("fs"));
exports.getPackagelockHash = function (packagelockPath) {
    if (!packagelockPath)
        return;
    var hashSum = crypto_1.default.createHash('md5');
    var contents = fs_1.default.readFileSync(packagelockPath, 'utf-8');
    hashSum.update(Buffer.from(contents));
    return hashSum.digest('hex');
};
