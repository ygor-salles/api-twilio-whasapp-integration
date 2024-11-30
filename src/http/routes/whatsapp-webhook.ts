import { bot } from '@/functions/bot'
import type { Request, Response } from 'express'

export const whatsappWebhook = async (req: Request, res: Response) => {
  const messageReq = req.body.Body
  const from = req.body.From
  const to = req.body.To

  console.log(`${to} ==> Mensagem recebida de ${from}: ${messageReq}`)

  const messageResp = bot(messageReq)

  res.set('Content-Type', 'text/xml')
  res.send(`
      <Response>
          <Message>${messageResp}</Message>
      </Response>
  `)
}
