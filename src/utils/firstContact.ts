export function firstContact(message: string): string | undefined {
  console.log('caiu 1')
  if (
    message.toLowerCase() === 'oi' ||
    message.toLowerCase() === 'ol' ||
    message.toLowerCase() === 'dia' ||
    message.toLowerCase() === 'tarde' ||
    message.toLowerCase() === 'noite'
  ) {
    console.log('caiu 2')
    return `Olá! Bem-vindo ao Delivery Bot. Selecione uma das opções abaixo:

      1️⃣ Visualizar Cardápio
      2️⃣ Fazer Pedido
      3️⃣ Falar com Atendente
    `
  }
}
