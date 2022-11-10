import express from 'express';
import { regusuario, showuser, shuserone, deluser, upuser  } from '../controllers/userscontroller.js'
import { regevento, showevento, showonevento, delonevent, upevento} from '../controllers/eventscontollers.js';
import {db} from '../mongodb.js';

export const router = express.Router();

//rutas collection eventos

router.post('/regevento', regevento);
router.get('/shevento', showevento);
router.get('/shevento/:id', showonevento);
router.delete('/delevento/:id', delonevent);
router.put('/upevento/:id', upevento);

//rutas collection usuarios
router.post('/reguser', regusuario);
router.get('/shuser', showuser);
router.get('/shuser/:id', shuserone);
router.delete('/deluser/:id',deluser);
router.put('/upuser/:id', upuser);

export default router;