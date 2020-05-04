const names = [
  "Jaime",
  "Nahuel",
  "Jorge",
  "Lorena",
  "Nebo",
  "Faustina",
  "Adri",
  "Gus",
  "Letticia",
  "Mónica",
  "Piccolino",
  "Melón",
  "Soffie",
  "Poly"
]

const randomMessage = () => {
  const name = names[Math.floor(Math.random() * names.length)]
  console.log(`Hello ${name}`)
}

module.exports = { randomMessage }