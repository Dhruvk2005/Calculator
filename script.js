let buttons = document.querySelectorAll(".button");
let display = document.getElementById("display");
let string = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "=") {
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
        } else if (value === "AC") {
            string = "";
        }
         else if (value === "CE") {
            string = string.slice(0,-1)
        }
         else if (value === "X") {
            string += "*";
        } else {
            string += value;
        }

        display.value = string;
    });
});
