
    // let currentTotal = parseInt(localStorage.getItem('mainCartCount')) || 0;

    // const cards = document.querySelectorAll('.card10, .card11, .card12, .card13');

    // cards.forEach(card => {
    //     const plus = card.querySelector('.plus-btn');
    //     const minus = card.querySelector('.minus-btn');
    //     const qtyText = card.querySelector('.qty-val');
    //     const addBtn = card.querySelector('.add-to-cart-btn');

    //     if(plus) plus.onclick = () => qtyText.innerText = parseInt(qtyText.innerText) + 1;
    //     if(minus) minus.onclick = () => {
    //         let v = parseInt(qtyText.innerText);
    //         if(v > 1) qtyText.innerText = v - 1;
    //     };

    //     if(addBtn) {
    //         addBtn.onclick = () => {
    //             let qtyToAdd = parseInt(qtyText.innerText);
                
    //             currentTotal += qtyToAdd;

    //             localStorage.setItem('mainCartCount', currentTotal);

    //             alert(qtyToAdd + " item(s) add ho gaye! Ab aap Main Page par check kar sakte hain.");
    //             qtyText.innerText = "1"; 
    //         };
    //     }
    // });









    
    // let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    // let totalCount = parseInt(localStorage.getItem('mainCartCount')) || 0;

    // const cards1 = document.querySelectorAll('.card10, .card11, .card12, .card13');

    // cards.forEach(card => {
    //     const addBtn = card.querySelector('.add-btn');

    //     if(addBtn) {
    //         addBtn.onclick = () => {
    //             const name = card.querySelector('.p-name').innerText;
    //             const price = card.querySelector('.p-price').innerText;
    //             const img = card.querySelector('.p-img').src;
    //             const qty = parseInt(card.querySelector('.qty-val').innerText);

    //             const product = { name, price, img, qty };

    //             cart.push(product);
    //             totalCount += qty;

    //             localStorage.setItem('myCart', JSON.stringify(cart));
    //             localStorage.setItem('mainCartCount', totalCount);

    //             alert(name + " cart mein add ho gaya!");
    //             location.reload();  
    //         };
    //     }
    // });



    // 1. Browser ki memory se purana cart nikalna (agar pehle se kuch hai)
    // Hum 'myCart' naam ki ek LIST (Array) bana rahe hain
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    let totalCount = parseInt(localStorage.getItem('mainCartCount')) || 0;

    const cards = document.querySelectorAll('.card10, .card11, .card12, .card13');

    cards.forEach(card => {
        const plus = card.querySelector('.plus-btn');
        const minus = card.querySelector('.minus-btn');
        const qtyText = card.querySelector('.qty-val');
        const addBtn = card.querySelector('.add-to-cart-btn');

        // Plus/Minus Buttons ka logic
        if(plus) plus.onclick = () => qtyText.innerText = parseInt(qtyText.innerText) + 1;
        if(minus) minus.onclick = () => {
            let v = parseInt(qtyText.innerText);
            if(v > 1) qtyText.innerText = v - 1;
        };

        // JAB ADD TO CART DABAYEIN:
        if(addBtn) {
            addBtn.onclick = () => {
                // Mithai ki details uthayein (Classes se)
                const name = card.querySelector('.p-name').innerText;
                const price = card.querySelector('.p-price').innerText;
                const img = card.querySelector('.p-img').src; // Photo ka link
                const qty = parseInt(qtyText.innerText);

                // Ek "Samaan ka Box" (Object) banayein
                const product = {
                    p_name: name,
                    p_price: price,
                    p_img: img,
                    p_qty: qty
                };

                // Is box ko apni Cart List mein daal dein
                cart.push(product);
                
                // Total number update karein (jo upar red badge mein dikhta hai)
                totalCount += qty;

                // Browser ki memory (LocalStorage) mein PERMANENTLY save karein
                localStorage.setItem('myCart', JSON.stringify(cart));
                localStorage.setItem('mainCartCount', totalCount);

                alert(name + " cart mein add ho gaya! Ab Cart Page check karein.");
                
                // Page refresh karein taaki upar counter update ho jaye
                location.reload();
            };
        }
    });
