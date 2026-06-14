const close = document.querySelector('.close-img');
const cancel = document.querySelector('.cancel-btn');
const submit = document.querySelector('.submit-btn');
const frame = document.querySelector(".frame");
const start = document.querySelector(".start-btn");
const numbersContainer = document.querySelector(".numbers");

let content = '';
for (let i = 1; i <= 10; i++) {

    content += `
        <div class="num">
${i}</div>
    `;

}
numbersContainer.innerHTML = content;

const numbers = document.querySelectorAll(".num");

function resetRating() {

    valueRate = 0;

    numbers.forEach((num) => {
        num.style.border = '1px solid #2E3650';
    });
}

var valueRate = 0
numbers.forEach(function (num) {
    num.addEventListener("click", () => {
        if (valueRate == 0) {
            valueRate = num.innerHTML;
            num.style.border = '1px solid #B1B9D8';

        }
        else {
            alert("Click cancel to rate again")
        }
    })

});


function closeModal() {
frame.style.display = 'none';
start.style.display = 'block';
resetRating();
  valueRate = 0
}

close.addEventListener('click', closeModal);
cancel.addEventListener('click', closeModal);


submit.addEventListener('click', () => {
    if (valueRate == 0) {
        alert("Please rate first")

    }
    else {

       closeModal();
    }


}
)

start.addEventListener('click', () => {
    start.style.display = 'none';
    frame.style.display = 'flex'
})
window.addEventListener('click', (e) => {
    if (e.target == frame) {
        start.style.display = 'block';
        frame.style.display = 'none'
    }
})


