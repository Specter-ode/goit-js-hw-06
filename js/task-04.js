const counter = {
    conterValue: 0,
    decrement() {
        this.conterValue -=1;
    },
    increment() {
        this.conterValue +=1;
    }
}
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementButton.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.conterValue;
})

incrementButton.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.conterValue;
})
