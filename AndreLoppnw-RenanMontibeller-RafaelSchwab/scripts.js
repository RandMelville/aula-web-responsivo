document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enviar").addEventListener("click", function() {
        var emailPlaceholder = document.getElementById("email").value;
        alert("Email preenchido no placeholder: " + emailPlaceholder);
    });
});
