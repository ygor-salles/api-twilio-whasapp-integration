import { Request, Response } from "express"

export const whatsappWebhook = async (req: Request, res: Response) => {
  const message = req.body.Body; 
  const from = req.body.From; 
  const to = req.body.To; 
  
  console.log(`${to} ==> Mensagem recebida de ${from}: ${message}`);

  res.set('Content-Type', 'text/xml');
  res.send(`
      <Response>
          <Message>Recebemos sua mensagem: "${message}". Obrigado por entrar em contato!</Message>
      </Response>
  `);
}
