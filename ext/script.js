document.getElementById('autofill').addEventListener('click', () =>{
    /* AUTOFILL FORM*/
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {
        firstname: document.getElementById('first_name').value,
        lastname: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postcode: document.getElementById('postcode').value,
        phone: document.getElementById('phone').value
        
        /*email: document.getElementById('email').value,
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

      });  
    });
  });
    
document.getElementById('save').addEventListener('click', () => {
      chrome.storage.sync.set({
        firstname: document.getElementById('first_name').value,
        lastname: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postcode: document.getElementById('postcode').value,
        phone: document.getElementById('phone').value


      }, function() {
        console.log("Saved")
      })
}) 

  
document.getElementById('load').addEventListener('click', () => {
  chrome.storage.sync.get([
      'firstname',
      'lastname',
      'email',
      'address',
      'city',
      'postcode',
      'phone'
  ], function(result) {
    document.getElementById('first_name').value = result.firstname,
    document.getElementById('last_name').value = result.lastname,
    document.getElementById('email').value = result.email,
    document.getElementById('address').value = result.address,
    document.getElementById('city').value = result.city,
    document.getElementById('postcode').value = result.postcode,
    document.getElementById('phone').value = result.phone


  })
})


