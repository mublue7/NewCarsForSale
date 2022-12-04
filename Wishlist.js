let wishList = [];

function setup() 
{
    var products = document.querySelectorAll(".but");
    for (let i = 0; i < products.length; i++)
    {
        products[i].onclick = function(e) {
            addItem(e);
        }
    }
//Function setup adds event handlers to the Add to list Buttons while querySelectorAll gets the collection of elements for each button
}

function addItem (e) {
    var aside = document.getElementById("wishlist");
    var productId = e.target.getAttribute("id");
    if(!wishList.find(element => element === productId)){
        wishList.push(productId);
        var productDiv = document.getElementById("product" + productId);
        var wishDiv = document.createElement("div");
        wishDiv.setAttribute("id", "wish" + productId);
        wishDiv.innerHTML += productDiv.innerHTML;
        aside.appendChild(wishDiv);
        var inputTag = document.createElement("input");
        inputTag.setAttribute("id", "remove" + productId);
        inputTag.setAttribute("type", "button");
        inputTag.setAttribute("value", "Remove");
        inputTag.setAttribute("class", "removebut");
        inputTag.onclick = function() {
            document.getElementById("wish" + productId).remove();
            wishList = wishList.filter(function(element) {
                return element !== productId
            })
        }
        wishDiv.appendChild(inputTag);
    }
//Additem(e) function adds items to the wish list
//When a product is added to the list, there is a button called "Remove" that shows up to remove the prodcut from the wish list. The remove button is used to expand the assignment
//I created the "Remove" button by creating InputTag.setAttribute to identify the remove button. Document.getElementById is used to return an element with a specific value
}
window.addEventListener("load", setup);