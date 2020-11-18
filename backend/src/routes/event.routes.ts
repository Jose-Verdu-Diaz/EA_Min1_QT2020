import { Router } from 'express';
import eventController from '../controllers/event.controller';

const router = Router();

router.get('/', eventController.getEvents);
router.post('/new', eventController.newEvent);

export = router;