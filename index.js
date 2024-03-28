// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");
        
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemList = document.createElement("ul");

        // Loop through the items in the category and create list items
        menu[category].forEach(itemName => {
            // Create a list item element
            const listItem = document.createElement("li");

            // Set the text content of the list item element to the item name
            listItem.textContent = itemName;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", () => addToOrder(itemName));

            // Append the list item to the list of items
            itemList.appendChild(listItem);
        });

        // Append a list of items element to the menu container
        menuContainer.appendChild(itemList);
    }
}


// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderList = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");

    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;
    orderItem.addEventListener('click', () => {
        orderList.removeChild(orderItem); // Remove the clicked order item
        updateTotal(); // Update the total after removing the item
    });
    orderList.appendChild(orderItem);

    const totalPrice = parseFloat(orderTotal.textContent) || 0;
    const itemPrice = 150;
    const newTotalPrice = totalPrice + itemPrice;

    orderTotal.textContent = newTotalPrice.toFixed(2);
}

function updateTotal() {
    const orderTotal = document.getElementById('order-total');
    const orderItems = document.getElementById('order-items').getElementsByTagName('li');
    let totalPrice = 0;

    // Calculate the total price based on the remaining order items
    for (let i = 0; i < orderItems.length; i++) {
        totalPrice += 150; // Assuming each item costs $150
    }

    orderTotal.textContent = totalPrice.toFixed(2);
}

function initMenuSystem(menu) {
    displayMenuItems(menu);
}
   
initMenuSystem(menu);

function placeOrder(menu) {
        alert('Thank you for shopping with us!');
        placeOrder.innerHTML = 'Are you sure?';
    }

alert('Welcome!');
