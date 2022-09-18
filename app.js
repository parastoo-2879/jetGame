const jet = document.getElementById("jet")
const main = document.getElementsByTagName("main")[0]
document.getElementsByTagName("html")[0].addEventListener("mousemove", (event) => {

  jet.style.top = event.clientY + "px"
  jet.style.left = event.clientX + "px"
  // jet.style.transform = "translate(-" + event.clientX + "px,-" + event.clientY + "px)"
})
let stone
for (i = 0; i < 200; i++) {
  stone = document.createElement("span")
  stone.style.top = "-" + Math.random() * 1000 + 3000 + "px"
  stone.style.left = parseInt(Math.random() * 1600) + "px"
  stone.style.animationDelay = (i / (Math.random() * 5)) + "s"
  stone.style.animationName = "stones"
  main.appendChild(stone)
}
// let gover = document.getElementById("gover")
let stones = document.querySelectorAll("main>span")
console.log(stones)
stones.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    alert("GameOver ! click OK if you want continue it.")
  })

})