let buttons = document.querySelectorAll('.buttons span');
let value = document.getElementById('value');
let toggle = document.querySelector('.toggleBtn');
let body = document.body;

let string = "";

/* =========================
   Restore Dark Mode on Load
========================= */
if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
}

/* =========================
   Button Click
========================= */
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;

        if (btnText === 'Clear') {
            string = "";
            value.innerHTML = string;
        }
        else if (btnText === '=') {
            try {
                string = eval(string);
                value.innerHTML = string;
            } catch {
                value.innerHTML = "Error";
            }
        }
        else {
            string += btnText;
            value.innerHTML = string;
        }
    });
});

/* =========================
   Dark Mode Toggle + Save
========================= */
toggle.onclick = function () {
    body.classList.toggle('dark');

    // Save mode in localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
};