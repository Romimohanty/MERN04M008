//1.## Task 1: GET – Fetch Single User

// 👉 Fetch one user by ID

// - API: `https://jsonplaceholder.typicode.com/users/1`

// ✅ Goal:

// - Display full user details
// - Handle error if user not found
async function getData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await res.json();

         console.log("Name:", data.name);
         console.log("Username:", data.username);
        console.log("Email:", data.email);
        console.log("Phone:", data.phone);
        console.log("Website:", data.website);

        console.log("Address:");
        console.log("Street:", data.address.street);
        console.log("City:", data.address.city);

        console.log("Company:", data.company.name);


    } catch (error) {
        console.log("user not found")
    }
}
getData()

//## Task 2: PATCH – Update Partial Data

// 👉 Update only email or name

// ✅ Goal:

// - Send only one field (e.g., email)
// - Understand difference from PUT
async function patchData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method:"PATCH",
            body: JSON.stringify({
               email:"romi@gamil.com"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }

        });
        let data = await res.json();

        console.log(data);   

    } catch (error) {
        console.log("user not found")
    }
}
patchData()
//3.## Task 3: DELETE – Remove User

// 👉 Delete a user

// - API: `https://jsonplaceholder.typicode.com/users/1`

// ✅ Goal:

// - Use `method: "DELETE"`
// - Show success message
async function deleteData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
        });
        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
deleteData()
