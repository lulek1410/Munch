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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicatePropValue_1 = __importDefault(require("./ErrorHandler/handleDuplicatePropValue"));
const auth0_1 = require("../middleware/auth0");
const itemName = "Drink";
const handleMenuItemRouting = (app, model, itemName, route) => {
    app.get(`/${route}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const drinks = (yield model.find());
            if (req.query.sort) {
                const sortString = req.query.sort;
                const sortQuery = sortString
                    .substring(1, sortString.length - 1)
                    .replace(/"/g, "")
                    .split(",");
                const sortBy = sortQuery[0];
                const sortDirection = sortQuery[1] === "ASC" ? 1 : -1;
                drinks.sort((a, b) => {
                    return a[sortBy]
                        ? a[sortBy].localeCompare(b[sortBy]) *
                            sortDirection
                        : sortDirection;
                });
            }
            const size = drinks.length;
            res.header("Content-Range", `pages 0/${size}/${size}`);
            res.status(200).json(drinks);
        }
        catch (error) {
            console.log(error);
            res.status(400).json("Could not GET /drinks");
        }
    }));
    app.post(`/${route}`, auth0_1.validateAccessToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield model.create(req.body);
            res.status(201).json("OK");
        }
        catch (error) {
            (0, handleDuplicatePropValue_1.default)(error, res, itemName);
        }
    }));
    app.delete(`/${route}`, auth0_1.validateAccessToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const ids = req.query.filter.split(`"`).filter((value) => {
                return value.length === 24;
            });
            yield model.deleteMany({ _id: { $in: ids } });
            res.status(200).json("OK");
        }
        catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }));
    app.delete(`/${route}/:id`, auth0_1.validateAccessToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield model.findByIdAndDelete(req.params.id);
            res.status(200).json("OK");
        }
        catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }));
    app.get(`/${route}/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield model.findById(req.params.id);
            res.status(200).json(result);
        }
        catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }));
    app.put(`/${route}/:id`, auth0_1.validateAccessToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield model.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(req.body);
        }
        catch (error) {
            (0, handleDuplicatePropValue_1.default)(error, res, itemName);
        }
    }));
};
exports.default = handleMenuItemRouting;
