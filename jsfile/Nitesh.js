// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll Window
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    section.forEach(sec =>{
        let top = window-scrollY;
        let offset =sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            // active navbar link
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
            // active section for animationon scroll 
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeat on scroll use this 
        else{
            sec.classList.remove('show-animate');
        }
    })
}


window.onscroll = () => {
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation on footer
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight );
}

// form action 
document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var location = document.getElementById("location").value;
    var subject = document.getElementById("subject").value;
  
    // Display collected data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Number: " + number);
    console.log("Location: " + location);
    console.log("Subject: " + subject);
  
    // You can perform additional actions with the collected data, such as sending it to a server via AJAX
  
    // Reset form fields
    document.getElementById("hireForm").reset();
  });



//   card animation
