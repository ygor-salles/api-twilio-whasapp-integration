export function bot(message: string | null | undefined): string {
  if (!message)
    return 'Desculpe, não recebi sua mensagem. Tente novamente ou envie "Oi" para voltar ao menu.'

  const firstContact = new Set(['oi', 'ola', 'olá', 'bom dia', 'boa tarde', 'boa noite'])
  const seeMenu = new Set(['1', 'cardápio', 'cardapio'])
  const order = new Set(['2', 'pedido', 'fazer pedido', 'pedir'])
  const speakToAttendant = new Set(['3', 'falar com atendente', 'atendente', 'me atender'])
  const finishAttendant = new Set([
    'finalizar',
    'encerrar',
    'cancelar',
    'finalizar meu pedido',
    'encerrar meu pedido',
    'cancelar meu pedido',
    'não quero mais',
    'nao quero mais',
  ])

  if (firstContact.has(message.toLowerCase())) {
    return `Olá! Bem-vindo ao Delivery Bot 🤖. Selecione uma das opções abaixo: \n\n1️⃣ Visualizar Cardápio \n2️⃣ Fazer Pedido \n3️⃣ Falar com Atendente
    `
  }

  if (seeMenu.has(message.toLowerCase())) {
    return `Segue o link do cardápio do nosso cardápio digital logo abaixo 👇\n\nhttps://appetito.app.br
    `
  }

  if (order.has(message.toLowerCase())) {
    return `Para agilizar seu pedido acesse o link do cardápio abaixo efaça seu pedido por ele 👇\n\nhttps://appetito.app.br
    `
  }

  if (speakToAttendant.has(message.toLowerCase())) {
    return 'Ok, mandarei um alerta para alguém te atender 🙂\n\n🕑 Aguarde que um humano irá te retornar'
  }

  if (finishAttendant.has(message.toLowerCase())) {
    return 'Ok, estarei encerrando seu pedido'
  }

  return 'Desculpe, não entendi sua mensagem. Tente novamente ou envie "Oi" para voltar ao menu.'
}
