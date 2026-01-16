const form = document.getElementById("registerForm");  
  
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
