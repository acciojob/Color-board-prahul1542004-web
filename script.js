//your JS code here. If required.
const container=document.querySelector(".container")
for(let i=0;i<800;i++){
    let boxes=document.createElement("div")
	boxes.classList.add("square")

	boxes.addEventListener("mouseenter",(e)=>{
		let red=Math.floor(Math.random()*256)
		let green=Math.floor(Math.random()*256)
		let blue=Math.floor(Math.random()*256)
		e.target.style.backgroundColor=`rgb(${red},${green},${blue})`
	})
	boxes.addEventListener("mouseout",(e)=>{
		setTimeout(()=>{
			e.target.style.backgroundColor="rgb(53,52,52)"
		},1000)
	})
	container.appendChild(boxes)
}
