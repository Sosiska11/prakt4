  // Таймер до Нового Года 2025
  function updateCountdown() {
    const newYear = new Date("January 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

    setTimeout(updateCountdown, 1000);
  }

  updateCountdown();

  // Интерактивные функции

  function openGift() {
    const gift = document.getElementById("gift");
    gift.classList.toggle("opened");
    if (gift.classList.contains("opened")) {
      alert("🎁 Ура! Твой подарок — улыбка и праздничное настроение!");
    }
  }

  function changeTheme() {
    const body = document.body;
    if (body.style.background.includes('url')) {
      body.style.background = "#000 url('https://img.freepik.com/free-vector/realistic-christmas-background-with-baubles-branches_79603-2224.jpg') no-repeat center center fixed";
      body.style.backgroundSize = "cover";
    } else {
      body.style.background = "url('https://i.pinimg.com/736x/64/b4/fd/64b4fda80d0900083500e941847545c5.jpg') no-repeat center center fixed";
      body.style.backgroundSize = "cover";
    }
  }

  // Снежинки по клику
  document.addEventListener("click", function(e) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerText = "❄️";
    snowflake.style.left = e.pageX + "px";
    snowflake.style.top = e.pageY + "px";
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
  });