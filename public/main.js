const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenu = document.getElementById("ct-toggle-menu");

document.addEventListener("click", (e) => {
    if (toggleTopMenu.contains(e.target)) {
        // Click to Toggle top menu icon
        topMenu.classList.toggle("hidden");
        topMenu.classList.toggle("ct-topmenu-expanded");
    } else {
        // Click outside from Toggle top menu
        if (topMenu.classList.contains("ct-topmenu-expanded")) {
            topMenu.classList.remove("ct-topmenu-expanded");
            topMenu.classList.add("hidden");
        }
    }
});
