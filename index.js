// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; 
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; 
}


 // Declare a constant called leastFavoriteCustomer
const leastFavoriteCustomer = 'some value'; // Assign an initial value

// Function that attempts to change the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
    // This line will throw an error if uncommented
    leastFavoriteCustomer = 'another value'; // This will cause an error
}