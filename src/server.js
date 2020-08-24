// Servidor
const express = require('express');
const server = express();

// Importação das Páginas
const { landingPage, studyPage, classesPage, saveClasses } = require('./pages')


// Configurar Nunjucks (templates engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início e configuração do servidor
server

// Receber os dados do req.body
.use(express.urlencoded( { extended: true }))

// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", landingPage)
.get("/study", studyPage)
.get("/dar-aulas", classesPage)
.post("/save-classes", saveClasses)

// Start no servidor
.listen(5500);

