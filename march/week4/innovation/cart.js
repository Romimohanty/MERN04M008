    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    let totalCount = parseInt(localStorage.getItem('mainCartCount')) || 0;

    const cards = document.querySelectorAll('.card10, .card11, .card12, .card13');

    cards.forEach(card => {
        const plus = card.querySelector('.plus-btn');
        const minus = card.querySelector('.minus-btn');
        const qtyText = card.querySelector('.qty-val');
        const addBtn = card.querySelector('.add-to-cart-btn');

        if(plus) plus.onclick = () => qtyText.innerText = parseInt(qtyText.innerText) + 1;
        if(minus) minus.onclick = () => {
            let v = parseInt(qtyText.innerText);
            if(v > 1) qtyText.innerText = v - 1;
        };

        if(addBtn) {
            addBtn.onclick = () => {
                const name = card.querySelector('.p-name').innerText;
                const price = card.querySelector('.p-price').innerText;
                const img = card.querySelector('.p-img').src;
                const qty = parseInt(qtyText.innerText);

                const product = {
                    p_name: name,
                    p_price: price,
                    p_img: img,
                    p_qty: qty
                };

                cart.push(product);
                
                totalCount += qty;

                localStorage.setItem('myCart', JSON.stringify(cart));
                localStorage.setItem('mainCartCount', totalCount);

                alert(name + " cart mein add ho gaya! Ab Cart Page check karein.");
                
                location.reload();
            };
        }
    });
