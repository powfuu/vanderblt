window.addEventListener('load', ()=>{
    var home = document.getElementById("home");
    var years = document.getElementById("years");
    var company = document.getElementById("company");
    var orders = document.getElementById("orders");
    var dealers = document.getElementById("dealers");
    var contact = document.getElementById("contact");

    home.addEventListener('click', ()=>{
        window.location.href = "/html/home/home.html";
    });
    years.addEventListener('click', ()=>{
        window.location.href = "/html/years/years.html";
    });
    company.addEventListener('click', ()=>{
        window.location.href = "/html/company/company.html";
    });
    orders.addEventListener('click', ()=>{
        window.location.href = "/html/orders/orders.html";
    });
    dealers.addEventListener('click', ()=>{
        window.location.href = "/html/dealers/dealers.html";
    });
    contact.addEventListener('click',()=>{
        window.location.href = "/html/contact/contact.html"
    });
});