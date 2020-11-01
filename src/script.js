const GREETINGS = [
  'Hello 🇬🇧',
  'Olá 🇵🇹',
  'Hola 🇪🇸',
  'Salut 🇫🇷',
  'Ciao 🇮🇹',
  'Guten Tag 🇩🇪',
  'Yassou 🇬🇷',
  'Namaste 🇮🇳',
  'Nǐ hǎo 🇨🇳',
  'Privet 🇷🇺',
  'Konnichiwa 🇯🇵',
  // Easter eggs
  'Hello World 🖥️',
  'Howdy 🤠',
  'Greetings Earthling 👽',
  '01001000 01101001 ⚡️'
]

window.addEventListener('load', () => {
  const greetingElement = document.getElementById('greeting')
  const randomGreeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
  greetingElement.innerHTML = randomGreeting
});