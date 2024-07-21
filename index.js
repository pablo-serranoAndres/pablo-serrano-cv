const copyEmail = () => {
  const email = document.getElementById("email");

  navigator.clipboard.writeText(email.innerText);

  email.innerHTML = "Copied to clipboard!";

  setTimeout(() => {
    email.innerHTML = "serranoandrespablo@gmail.com";
  }, 2000);
};
