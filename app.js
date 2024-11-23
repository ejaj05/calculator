let btns = document.querySelectorAll(".btn")
let input = document.querySelector("#display")
let string = ""
btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if(event.target.innerHTML === 'Del'){
            string = string.slice(0, -1)
            input.value = string
        }
        else if(event.target.innerHTML ==='Ac'){
            string = ""
            input.value = string
        }
        else if(event.target.innerHTML === '='){
            let result = eval(string)
            input.value = result
        }
        else{
            string += event.target.innerHTML
            input.value = string
        }
    })
})