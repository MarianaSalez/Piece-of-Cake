const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRoutes= require('./recipesRoutes')
const dietRoutes= require('./dietRoutes')


const router = Router();
router.use('/recipes', recipesRoutes)
router.use('/diets', dietRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
