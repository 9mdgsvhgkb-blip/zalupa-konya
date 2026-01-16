const form = document.getElementById("registerForm");
const sendCodeBtn = document.getElementById("sendCodeBtn");
const codeBlock = document.getElementById("codeBlock");

sendCodeBtn.addEventListener("click", async () => {
    const email = form.email.value;
    if (!email) {
        alert("Введите email");
        return;
    }

    try {
        const res = await fetch("/api/send_code", {
            method: "POST",
            body: new URLSearchParams({ email })
        });
        const data = await res.json();
        if (res.ok && data.success) {
            alert("Код отправлен на почту!");
            codeBlock.style.display = "block"; // показываем поле для кода
        } else {
            alert(data.detail || "Ошибка отправки кода");
        }
    } catch (err) {
        console.error(err);
        alert("Сервер недоступен");
    }
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const res = await fetch("/api/register", {
            method: "POST",
            body: formData
        });
        const data = await res.json();

        if (res.ok && data.success) {
            window.location.href = "/dashboard/";
        } else {
            alert(data.detail || "Ошибка регистрации");
        }
    } catch (err) {
        console.error(err);
        alert("Сервер недоступен");
    }
});
