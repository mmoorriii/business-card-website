var btnThemeToggle = document.querySelector('.switch-btn');

// получаем сохраненную тему из локального хранилища
var savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
   // если сохраненная тема "dark", добавляем класс "dark" к body
   document.querySelector('.panel').classList.add("light");
}

btnThemeToggle.addEventListener("click", function () {
   var panel = document.querySelector('.panel');
   panel.classList.toggle("light");

   // сохраняем выбранную тему в локальном хранилище
   if (panel.classList.contains("light")) {
      localStorage.setItem("theme", "light");
   } else {
      localStorage.setItem("theme", "dark");
   }
});