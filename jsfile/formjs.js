document.getElementById("hireForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Display collected data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  
    // You can perform additional actions with the collected data, such as sending it to a server via AJAX
  
    // Reset form fields
    document.getElementById("hireForm").reset();
  });
  