import { Request, Response } from 'express';
import twilio from 'twilio'
import z from 'zod'

const accountSid = process.env.TWILIO_ACCOUNT_SID ?? ''
const authToken = process.env.TWILIO_AUTH_TOKEN ?? ''
const client = twilio(accountSid, authToken)

const sendWhatsappSchema = z.object({
  to: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  message: z.string(),
});

export const sendWhatsapp = async (req: Request, res: Response) => {
  try {
    const { to, message } = sendWhatsappSchema.parse(req.body);
    console.info('--SEND-WHATSAPP--', to, message);

    const response = await client.messages.create({
      body: message,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${to}`,
    });

    res.json({ success: true, sid: response.sid });
    return
  } catch (error: any) {
    console.error('Erro ao enviar mensagem:', error);
    res.status(500).json({ success: false, error: error.message });
    return
  }       
}
