document.getElementById("autofill").addEventListener("click", () =>{
    /* AUTOFILL FORM*/
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {
        firstname: document.getElementById('first_name').value
        /*
        lastname: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        address1: document.getElementById('address_1').value,
        address2: document.getElementById('address_2').value,
        address3: document.getElementById('address_3').value,
        city: document.getElementById('city').value,
        postcode: document.getElementById('postcode').value,
        cardnumber: document.getElementById('card_number').value,
        month: document.getElementById('card_month').value,
        year: document.getElementById('card_year').value,
        cvv: document.getElementById('card_cvv').value,
        */
      }, function(response){
        console.log(response.status)
    })  
    })
})