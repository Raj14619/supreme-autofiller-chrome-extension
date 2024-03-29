chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            document.getElementById("email").value = request.email;
            document.getElementById("TextField0").value = request.firstname;
            document.getElementById("TextField1").value = request.lastname;
            document.getElementById("shipping-address1").value = request.address;
            document.getElementById("TextField2").value = request.city;
            document.getElementById("TextField3").value = request.postcode;
            document.getElementById("TextField4").value = request.phone;

            /*
            document.getElementById("order_email").value = request.email;
            document.getElementById("order_tel").value = request.telephone;
            document.getElementById("order_billing_address").value = request.address1;
            document.getElementById("order_billing_address_2").value = request.address2;
            document.getElementById("order_billing_address_3").value = request.address3;
            document.getElementById("order_billing_city").value = request.city;
            document.getElementById("order_billing_zip").value = request.postcode;
            document.getElementById("credit_card_number").value = request.cardnumber;
            document.getElementById('credit_card_month').value = request.month;
            document.getElementById('credit_card_year').value = request.year;
            document.getElementById("credit_card_verification_value").value = request.cvv; 
            sendResponse({status: "Success!"});
            */
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);