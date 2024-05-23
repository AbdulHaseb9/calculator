var button = document.querySelectorAll("button");
var inp = document.querySelector("#input");

for (const btns of button) {
    btns.addEventListener("click", (e) => {
        // if (e.target.value === "=") {
        //     document.querySelector(".history").innerHTML = inp.value
        //     inp.value = eval(inp.value);
        //     return;
        // }
        // console.log(e.target.value);
        // inp.value += e.target.value;
        switch (e.target.value) {
            case "=":
                document.querySelector(".history").innerHTML = inp.value
                inp.value = eval(inp.value)
                break;
            case "C":
                inp.value = ""
                break;
            case "D":
                inp.value = inp.value.slice(0, -1)
                break;
            default:
                inp.value += e.target.value
                break;
        }
    });
}