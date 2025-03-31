document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
