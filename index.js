const moonData = `{
  "moons": [
    {
      "name": " Triton",
      "meanDistanceFromNeptune": " Distance from Neptune 354,760 km",
      "orbitalPeriodAroundNeptune": " Orbit 5.87685 Earth days",
      "meanDiameter": " Diameter 2,700 km ",
      "yearDiscovered": " Discovered 1846"
    },
    {
      "name": "Nereid",
      "meanDistanceFromNeptune": " Distance from Neptune 5,513,400 km",
      "orbitalPeriodAroundNeptune": " Orbit: 360.1362 Earth days",
      "meanDiameter": " Diameter 340 km ",
      "yearDiscovered": " Discovered 1949"
    },
    {
      "name": "Naiad",
      "meanDistanceFromNeptune": " Distance from Neptune 48,200 km ",
      "orbitalPeriodAroundNeptune": " Orbit 0.294396 Earth days",
      "meanDiameter": " Diameter 58 km ",
      "yearDiscovered": " Discovered 1989"
    },
    {
      "name": "Thalassa",
      "meanDistanceFromNeptune": " Distance from Neptune 50,000 km ",
      "orbitalPeriodAroundNeptune": " Orbit 0.311485 Earth days",
      "meanDiameter": " Diameter 80 km",
      "yearDiscovered": " Discovered 1989"
    },
    {
      "name": "Despina",
      "meanDistanceFromNeptune": " Distance from Neptune 52,600 km ",
      "orbitalPeriodAroundNeptune": " Orbit 0.334655 Earth days",
      "meanDiameter": "Diameter 148 km ",
      "yearDiscovered": " Discovered 1989"
    },
    {
      "name": "Galatea",
      "meanDistanceFromNeptune": " Distance from Neptune 62,000 km ",
      "orbitalPeriodAroundNeptune": " Orbit 0.428745 Earth days",
      "meanDiameter": " Diameter 158 km ",
      "yearDiscovered": " Discovered 1989"
    },
    {
      "name": "Larissa",
      "meanDistanceFromNeptune": " Distance from Neptune 73,600 km ",
      "orbitalPeriodAroundNeptune": " Orbit 0.554654 Earth days",
      "meanDiameter": " Diameter 193 km ",
      "yearDiscovered": " Discovered 1989"
    },
    {
      "name": "Proteus",
      "meanDistanceFromNeptune": " Distance from Neptune 117,600 km ",
      "orbitalPeriodAroundNeptune": " Orbit 1.122315 Earth days",
      "meanDiameter": " Diameter 418 km ",
      "yearDiscovered": " Discovered 1989"
    },
    {
      "name": "Halimede",
      "meanDistanceFromNeptune": " Distance from Neptune 15,730,000 km ",
      "orbitalPeriodAroundNeptune": " Orbit 1,879.7 Earth days",
      "meanDiameter": " Diameter 30 km ",
      "yearDiscovered": " Discovered 2002"
    },
    {
      "name": "Sao",
      "meanDistanceFromNeptune": " Distance from Neptune 22,420,000 km ",
      "orbitalPeriodAroundNeptune": " Orbit 2,914.1 Earth days",
      "meanDiameter": " Diameter 20 km ",
      "yearDiscovered": " Discovered 2002"
    },
    {
      "name": "Laomedeia",
      "meanDistanceFromNeptune": " Distance from Neptune 23,570,000 km ",
      "orbitalPeriodAroundNeptune": " Orbit 3,167.9 Earth days",
      "meanDiameter": " Diameter 20 km ",
      "yearDiscovered": " Discovered 2002"
    },
    {
      "name": "Psamathe",
      "meanDistanceFromNeptune": " Distance from Neptune 46,700,000 km",
      "orbitalPeriodAroundNeptune": " Orbit 9,115.9 Earth days",
      "meanDiameter": " Diameter 20 km",
      "yearDiscovered": " Discovered 2003"
    },
    {
      "name": "Neso",
      "meanDistanceFromNeptune": " Distance from Neptune 48,390,000 km ",
      "orbitalPeriodAroundNeptune": " Orbit 9,374 Earth days",
      "meanDiameter": " Diameter 30 km ",
      "yearDiscovered": " Discovered 2002"
    },
    {
      "name": "S/2004 N1",
      "meanDistanceFromNeptune": " Distance from Neptune 105,300 km ",
      "orbitalPeriodAroundNeptune": " Orbit 0.95 Earth-days",
      "meanDiameter": " Diameter 36 km ",
      "yearDiscovered": " Discovered 2004"
    }
  ]
}`

const moonObject = JSON.parse(moonData)



for (let moonNum = 0; moonNum <= 13; moonNum++) {

    const content = document.getElementById(`moon-${moonNum}`)

    const moonTitle = document.createElement("h3")
    const moonName = document.createElement("h1")
    const moonMeanDistanceFromNeptune = document.createElement( "h2")
    const moonOrbitalPeriodAroundNeptune = document.createElement( "h2")
    const moonMeanDiameter = document.createElement( "h2")
    const moonYearDiscovered = document.createElement( "h2")

    moonName.classList.add("moon-text", "moon-text-h1")
    moonName.classList.add("moon-text")
    moonMeanDistanceFromNeptune.classList.add("moon-text")
    moonOrbitalPeriodAroundNeptune.classList.add("moon-text")
    moonMeanDiameter.classList.add("moon-text")
    moonYearDiscovered.classList.add("moon-text")
    moonTitle.classList.add("moon-title")


    moonName.id = `moon-n-${moonName}`
    moonMeanDistanceFromNeptune.id = `moon-n-${moonName}`
    moonOrbitalPeriodAroundNeptune.id = `moon-n-${moonName}`
    moonMeanDiameter.id = `moon-n-${moonName}`
    moonYearDiscovered.id = `moon-n-${moonName}`



    content.appendChild(moonTitle)
    content.appendChild(moonName)
    content.appendChild(moonMeanDistanceFromNeptune)
    content.appendChild(moonOrbitalPeriodAroundNeptune)
    content.appendChild(moonMeanDiameter)
    content.appendChild(moonYearDiscovered)

    moonTitle.innerText = moonObject.moons[moonNum].name

    content.addEventListener("mouseover", () => {
        moonName.textContent = moonObject.moons[moonNum].name
        moonMeanDistanceFromNeptune.textContent = "" + moonObject.moons[moonNum].meanDistanceFromNeptune
        moonOrbitalPeriodAroundNeptune.textContent = moonObject.moons[moonNum].orbitalPeriodAroundNeptune
        moonMeanDiameter.textContent = moonObject.moons[moonNum].meanDiameter
        moonYearDiscovered.textContent = moonObject.moons[moonNum].yearDiscovered
        moonTitle.innerText = ""
        console.log(`Mouse over moon ${moonNum}`)
    })

    content.addEventListener("mouseout", () => {
        moonTitle.innerText = moonObject.moons[moonNum].name
        moonName.textContent = ""
        moonMeanDistanceFromNeptune.textContent = ""
        moonOrbitalPeriodAroundNeptune.textContent = ""
        moonMeanDiameter.textContent = ""
        moonYearDiscovered.textContent = ""
        console.log(`Mouse exit moon ${moonNum}`)
    })

    moonTitle.addEventListener("mouseover", (event) =>{
        event.stopPropagation()
    })


}
