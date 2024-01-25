            // JavaScript to toggle the drawer visibility
            document.getElementById("menu-icon").addEventListener("click", function () {
                var drawer = document.getElementById("drawer");
                if (drawer.style.right === "0px" || drawer.style.right === "") {
                    drawer.style.right = "-100%";
                } else {
                    drawer.style.right = "0px";
                }
            });