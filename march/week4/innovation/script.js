
let loginForm = document.querySelector("#login-form");
let loginInputs = document.querySelectorAll("#login-form input");

if(loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let email = loginInputs[0].value.trim();
        let password = loginInputs[1].value.trim();

        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (storedUsers.length === 0) {
            alert("No users registered yet!");
            return;
        }

        let user = storedUsers.find((obj) => obj.email === email);    

        if (!user) {
            alert("Email not found. Please register.");
        } 
        else if (user.password === password) {
            alert("Welcome " + user.firstname + "! Login successful!");
        } 
        else {
            alert("Incorrect password.");
        }
    });
}  













    // Ye function check karega ki memory mein kitne items hain aur counter dikhayega
    function updateMainCartBadge() {
        const badge = document.getElementById('cart-count'); // Aapne jo naya span banaya hai
        const savedCount = localStorage.getItem('mainCartCount') || 0;

        if (parseInt(savedCount) > 0) {
            badge.innerText = savedCount;
            badge.style.display = 'block'; // Red gola dikhayein
        } else {
            badge.style.display = 'none'; // Agar 0 hai toh chhupa dein
        }
    }

    // 1. Jaise hi Main Page load ho, counter update karein
    window.onload = updateMainCartBadge;

    // 2. Agar user doosre tab mein kuch add kare toh bhi update ho (Optional)
    window.addEventListener('storage', updateMainCartBadge);



    // 1. Purana data nikalna
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    let totalCount = parseInt(localStorage.getItem('mainCartCount')) || 0;

    const cards1 = document.querySelectorAll('.card10, .card11, .card12, .card13');

    cards.forEach(card => {
        const addBtn = card.querySelector('.add-btn');
        // ... (plus/minus ka code wahi rahega) ...

        if(addBtn) {
            addBtn.onclick = () => {
                const name = card.querySelector('.p-name').innerText;
                const price = card.querySelector('.p-price').innerText;
                const img = card.querySelector('.p-img').src;
                const qty = parseInt(card.querySelector('.qty-val').innerText);

                // Object banayein
                const product = { name, price, img, qty };

                // Cart list mein add karein
                cart.push(product);
                totalCount += qty;

                // Browser ki memory mein save karein
                localStorage.setItem('myCart', JSON.stringify(cart));
                localStorage.setItem('mainCartCount', totalCount);

                alert(name + " cart mein add ho gaya!");
                location.reload(); // Counter update karne ke liye
            };
        }
    });
