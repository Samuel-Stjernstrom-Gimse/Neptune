const moonData = `{
  "moons": [
    {
      "name": "Triton",
      "meanDistanceFromNeptune": " 354,760 km",
      "orbitalPeriodAroundNeptune": "5.87685 Earth days",
      "meanDiameter": "2,700 km (1,678 miles)",
      "yearDiscovered": 1846
    },
    {
      "name": "Nereid",
      "meanDistanceFromNeptune": " Distance from Neptune 5,513,400 km",
      "orbitalPeriodAroundNeptune": " Orbit 360.1362 Earth days",
      "meanDiameter": " Diameter 340 km ",
      "yearDiscovered": " year Discovered 1949"
    },
    {
      "name": "Naiad",
      "meanDistanceFromNeptune": "48,200 km (29,950 miles)",
      "orbitalPeriodAroundNeptune": "0.294396 Earth days",
      "meanDiameter": "58 km (36.04 miles)",
      "yearDiscovered": 1989
    },
    {
      "name": "Thalassa",
      "meanDistanceFromNeptune": "50,000 km (31,069 miles)",
      "orbitalPeriodAroundNeptune": "0.311485 Earth days",
      "meanDiameter": "80 km (49.7 miles)",
      "yearDiscovered": 1989
    },
    {
      "name": "Despina",
      "meanDistanceFromNeptune": "52,600 km (32,684 miles)",
      "orbitalPeriodAroundNeptune": "0.334655 Earth days",
      "meanDiameter": "148 km (92 miles)",
      "yearDiscovered": 1989
    },
    {
      "name": "Galatea",
      "meanDistanceFromNeptune": "62,000 km (38,525 miles)",
      "orbitalPeriodAroundNeptune": "0.428745 Earth days",
      "meanDiameter": "158 km (98.2 miles)",
      "yearDiscovered": 1989
    },
    {
      "name": "Larissa",
      "meanDistanceFromNeptune": "73,600 km (45,733 miles)",
      "orbitalPeriodAroundNeptune": "0.554654 Earth days",
      "meanDiameter": "193 km (119.9 miles)",
      "yearDiscovered": 1989
    },
    {
      "name": "Proteus",
      "meanDistanceFromNeptune": "117,600 km (73,073 miles)",
      "orbitalPeriodAroundNeptune": "1.122315 Earth days",
      "meanDiameter": "418 km (259.7 miles)",
      "yearDiscovered": 1989
    },
    {
      "name": "Halimede",
      "meanDistanceFromNeptune": "15,730,000 km (9,774,168 miles)",
      "orbitalPeriodAroundNeptune": "1,879.7 Earth days",
      "meanDiameter": "30 km (18.64 miles)",
      "yearDiscovered": 2002
    },
    {
      "name": "Sao",
      "meanDistanceFromNeptune": "22,420,000 km (13,931,142 miles)",
      "orbitalPeriodAroundNeptune": "2,914.1 Earth days",
      "meanDiameter": "20 km (12.42 miles)",
      "yearDiscovered": 2002
    },
    {
      "name": "Laomedeia",
      "meanDistanceFromNeptune": "23,570,000 km (14,645,718 miles)",
      "orbitalPeriodAroundNeptune": "3,167.9 Earth days",
      "meanDiameter": "20 km (12.42 miles)",
      "yearDiscovered": 2002
    },
    {
      "name": "Psamathe",
      "meanDistanceFromNeptune": "46,700,000 km",
      "orbitalPeriodAroundNeptune": "9,115.9 Earth days",
      "meanDiameter": "20 km (12.42 miles)",
      "yearDiscovered": 2003
    },
    {
      "name": "Neso",
      "meanDistanceFromNeptune": "48,390,000 km (30,068,151 miles)",
      "orbitalPeriodAroundNeptune": "9,374 Earth days",
      "meanDiameter": "30 km (18.64 miles)",
      "yearDiscovered": 2002
    },
    {
      "name": "S/2004 N1",
      "meanDistanceFromNeptune": "105,300 km (65,430 miles)",
      "orbitalPeriodAroundNeptune": "0.95 Earth days",
      "meanDiameter": "36 km (22.37 miles)",
      "yearDiscovered": 2004
    }
  ]
}`

const moonObject = JSON.parse(moonData)



for (let moonNum = 0; moonNum <= 13; moonNum++) {

    const content = document.getElementById(`moon-${moonNum}`)

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

    moonName.id = `moon-n-${moonName}`
    moonMeanDistanceFromNeptune.id = `moon-n-${moonName}`
    moonOrbitalPeriodAroundNeptune.id = `moon-n-${moonName}`
    moonMeanDiameter.id = `moon-n-${moonName}`
    moonYearDiscovered.id = `moon-n-${moonName}`

    content.appendChild(moonName)
    content.appendChild(moonMeanDistanceFromNeptune)
    content.appendChild(moonOrbitalPeriodAroundNeptune)
    content.appendChild(moonMeanDiameter)
    content.appendChild(moonYearDiscovered)

    content.addEventListener("mouseover", () => {
        moonName.textContent = moonObject.moons[moonNum].name
        moonMeanDistanceFromNeptune.textContent = "" + moonObject.moons[moonNum].meanDistanceFromNeptune
        moonOrbitalPeriodAroundNeptune.textContent = moonObject.moons[moonNum].orbitalPeriodAroundNeptune
        moonMeanDiameter.textContent = moonObject.moons[moonNum].meanDiameter
        moonYearDiscovered.textContent = moonObject.moons[moonNum].yearDiscovered
        console.log(`Mouse over moon ${moonNum}`)
    })

    content.addEventListener("mouseout", () => {
        moonName.textContent = ""
        moonMeanDistanceFromNeptune.textContent = ""
        moonOrbitalPeriodAroundNeptune.textContent = ""
        moonMeanDiameter.textContent = ""
        moonYearDiscovered.textContent = ""
        console.log(`Mouse exit moon ${moonNum}`)
    })
}
