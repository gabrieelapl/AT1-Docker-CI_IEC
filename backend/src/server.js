'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const dotenv_1 = __importDefault(require('dotenv'));
const database_1 = require('./config/database');
const routes_1 = require('./routes');
const swagger_ui_express_1 = __importDefault(require('swagger-ui-express'));
const swagger_json_1 = __importDefault(require('./docs/swagger.json'));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(
  '/api-docs',
  swagger_ui_express_1.default.serve,
  swagger_ui_express_1.default.setup(swagger_json_1.default),
);
app.use('/api', routes_1.appRoutes);
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', mensagem: 'Servidor operacional.' });
});
async function main() {
  try {
    await database_1.sequelize.authenticate();
    console.log('Conexao com o banco de dados estabelecida com sucesso.');
    // Sincroniza os models e força a criação/atualização de tabelas
    await database_1.sequelize.sync({ alter: true });
    console.log('Tabelas sincronizadas com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
}
main();
