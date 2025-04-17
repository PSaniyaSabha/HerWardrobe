let count = 0;
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        document.getElementById('cart-count').innerText = count;
        alert("Added to cart!");
    });
});
