let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let randomButton = document.querySelector("#random")

let students = [
  {
    profileImage: "https://cdn.glitch.com/25159976-a4ca-4711-953a-d4379cf8a50f%2FIMG_1248.jpeg?v=1585085094683",
  name: "Nancy Martinez",
  quote: "Embrace the void and have the courage to exist",
    superlative: "Most Caring",
  },
  {
    profileImage: "https://cdn.glitch.com/25159976-a4ca-4711-953a-d4379cf8a50f%2FIMG_1255.jpg?v=1585085109691",
    name: "Naomi Delgado",
    quote: "Support is free",
    superlative: "Most athletic",
  },
  {
    profileImage: "https://cdn.glitch.com/25159976-a4ca-4711-953a-d4379cf8a50f%2FIMG_1249.jpg?v=1585085216916",
    name: "Daniela Avila",
    quote: "Self love is the best kind of love",
    superlative: "Nicest Smile",
  },
  {
    profileImage: "https://cdn.glitch.com/25159976-a4ca-4711-953a-d4379cf8a50f%2FIMG_1256.jpg?v=1585085238748",
    name: "Lisnell Nunez",
    quote: "The best is yet to be",
    superlative: "Most likely to succeed",
  },
  {
    profileImage: "https://cdn.glitch.com/25159976-a4ca-4711-953a-d4379cf8a50f%2FIMG_1250.jpg?v=1585085248697",
    name: "Yadira Carillo",
    quote: "Change your world",
    superlative: "Most Hardworking",
  },
  {
    profileImage: "https://cdn.glitch.com/25159976-a4ca-4711-953a-d4379cf8a50f%2FIMG_1251.jpg?v=1585085263125",
    name: "Desyrae Chandler",
    quote: "The past is your anchor",
    superlative: "Most likely to become rich",
  },
  {
    profileImage: "https://cdn.glitch.com/25159976-a4ca-4711-953a-d4379cf8a50f%2FIMG_1253.jpg?v=1585085276268",
    name: "Eric Castro",
    quote: "Positivity always wins",
    superlative: "Social Butterfly",
  },
  {
    profileImage: "https://cdn.glitch.com/25159976-a4ca-4711-953a-d4379cf8a50f%2FIMG_1254.jpg?v=1585085289487",
    name: "Nayeli Robles",
    quote: "Keep looking up",
    superlative: "Nicest Hair",
  },
]

let count = 0
   document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name 
    
nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})

randomButton.addEventListener("click",()=>{
 console.log(students[Math.floor(Math.random () * students.length)]); 
})

//the random button works only when the console is open it doesn't change anything on the screen unfortunately. //