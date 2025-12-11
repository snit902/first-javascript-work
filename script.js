<script>
  const toggleBtn = document.getElementById('dark-mode-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Optioneel: onthoud de voorkeur in cookies/localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Laad voorkeur bij pagina load
  window.onload = () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  }
</script>

function begroetingOpTijd() {
    const nu = new Date();
    const uur = nu.getHours();
    let begroeting = "";

    if (uur >= 6 && uur < 12) {
        begroeting = "Goedemorgen";
    } else if (uur >= 12 && uur < 18) {
        begroeting = "Goedemiddag";
    } else if (uur >= 18 && uur < 24) {
        begroeting = "Goedenavond";
    } else {
        begroeting = "Goedenacht";
    }

    document.getElementById("begroeting").textContent = begroeting;
}

// Voer de functie uit wanneer de pagina geladen is
window.onload = begroetingOpTijd;


