import Router from 'express';
import controller from '../../controller/user/user';

const router = Router();

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/auth', controller.auth);

export default router;
