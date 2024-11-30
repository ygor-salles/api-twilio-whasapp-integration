import { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import  { sendWhatsapp, whatsappWebhook } from './routes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome Whatsapp Api-Test' })
});

router.post('/send-whatsapp', sendWhatsapp);
router.post('/whatsapp-webhook', bodyParser.urlencoded({ extended: false }), whatsappWebhook);

export { router };