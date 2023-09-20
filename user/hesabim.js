// Düzenle düğmesine tıklama olayını dinleyin
const editButton = document.getElementById("edit-button");
editButton.addEventListener("click", () => {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Giriş yapmış bir kullanıcı için bilgileri düzenlenebilir yapın
    usernameInput.removeAttribute("readonly");
    emailInput.removeAttribute("readonly");
    passwordInput.removeAttribute("readonly");
});
