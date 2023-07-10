const toggleButton = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggleButton.addEventListener("mouseenter", () => {
  toggleButton.classList.add("active");
  navigation.classList.add("active");
});

navigation.addEventListener("mouseleave", () => {
  toggleButton.classList.remove("active");
  navigation.classList.remove("active");
});



