// ================== FORM VALIDATION ==================

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");

  submitBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (!username || !email || !phone || !password || !confirm) {
      message.style.color = "red";
      message.textContent = "All fields are required.";
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      message.style.color = "red";
      message.textContent = "Phone number must be 10 digits.";
      return;
    }

    if (!/^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/.test(email)) {
      message.style.color = "red";
      message.textContent = "Invalid email format.";
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/.test(password)) {
      message.style.color = "red";
      message.textContent =
        "Password must be 7+ chars with capital, digit & special (&,$,#,@).";
      return;
    }

    if (password !== confirm) {
      message.style.color = "red";
      message.textContent = "Passwords do not match.";
      return;
    }

    message.style.color = "green";
    message.textContent = "Registration Successful!";
  });
});

// ================== IMAGE CHANGE ==================

let imageChanged = false;

function changeImage() {
  const img = document.getElementById("demoImg");

  if (!imageChanged) {
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png";
  } else {
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/120px-JavaScript-logo.png";
  }

  imageChanged = !imageChanged;
}

// ================== DOM ADD / DELETE ==================

function addText() {
  const container = document.getElementById("textContainer");
  const textNode = document.createTextNode("Hello Student! ");
  container.appendChild(textNode);
}

function deleteText() {
  const container = document.getElementById("textContainer");
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// ================== jQuery ==================

$(document).ready(function () {
  $("#jqBtn").on("click", function () {
    $(this).text("Clicked using jQuery");
  });

  $("#jqBtn").attr("title", "This is a jQuery button");
});
