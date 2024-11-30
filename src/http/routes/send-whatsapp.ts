import { clientTwilio } from '@/config/twilio'
import type { Request, Response } from 'express'

import z from 'zod'

const sendWhatsappSchema = z.object({
  to: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  message: z.string(),
})

export const sendWhatsapp = async (req: Request, res: Response) => {
  try {
    const { to, message } = sendWhatsappSchema.parse(req.body)
    console.info('--SEND-WHATSAPP--', to, message)

    const response = await clientTwilio.messages.create({
      body: message,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${to}`,
    })

    res.json({ success: true, sid: response.sid })
    return
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    console.error('Erro ao enviar mensagem:', error)
    res.status(500).json({ success: false, error: error.message })
    return
  }
}
