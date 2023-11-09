var allProducts = document.querySelectorAll(".list-group li")
    var div1 = document.querySelector(".div1")
    var btn1 = document.querySelector(".btn")
    var totalPrice = 0

    allProducts.forEach(function (item) {
        item.onclick = function (){
            totalPrice +=  +(item.getAttribute("price"))
            div1.innerHTML += item.textContent + " "

            if (div1.innerHTML != ""){
                btn1.style.display = "block"
                
            }
   
       
        }
    })

    btn1.onclick = function (){
        console.log(totalPrice)
        var totalParagraph = document.createElement("p");

        // Set the text content of the paragraph element to the total price
        totalParagraph.textContent = totalPrice;

        // Append the paragraph element to the div1 element
        div1.appendChild(totalParagraph);
    }


