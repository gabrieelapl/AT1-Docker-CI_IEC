'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.appRoutes = void 0;
const express_1 = require('express');
const filmeRoutes_1 = require('./filmeRoutes');
const router = (0, express_1.Router)();
exports.appRoutes = router;
router.use('/filmes', filmeRoutes_1.filmeRoutes);
