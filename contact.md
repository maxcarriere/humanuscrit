---
title: Contact
layout: page
permalink: /contact/
---

## Contact

Pour toute question, retour ou échange autour du projet Humanuscrit, vous pouvez nous écrire directement ou utiliser le formulaire ci-dessous.

---

### Email

<div class="contact-email" markdown="0">
  <a id="email-link" href="#" aria-label="Envoyer un email">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 32" width="400" height="32" role="img" aria-label="Adresse email">
      <text x="0" y="24" font-family="'EB Garamond', Georgia, 'Times New Roman', serif" font-size="22" fill="#0d0d0d">contact.humanuscrit@gmail.com</text>
    </svg>
  </a>
  <button class="contact-copy-btn" onclick="copyEmail()" title="Copier l'adresse email">
    &#x1F4CB; Copier l'adresse
  </button>
  <span class="copy-feedback" id="copy-feedback"></span>
</div>

---

### Formulaire de contact

<div class="contact-form" markdown="0">
  <form id="contact-form" onsubmit="sendForm(event)">
    <label for="contact-name">Nom <small>(optionnel)</small> :</label>
    <input type="text" id="contact-name" name="name" placeholder="Votre nom">

    <label for="contact-message">Message :</label>
    <textarea id="contact-message" name="message" rows="6" placeholder="Votre message..."></textarea>

    <button type="submit" class="contact-submit-btn">Envoyer via votre client mail</button>
  </form>
</div>

<script>
(function() {
  var p = ['contact.humanuscrit', 'gmail.com'];
  var addr = p[0] + '@' + p[1];

  var link = document.getElementById('email-link');
  if (link) link.href = 'mailto:' + addr;

  window.copyEmail = function() {
    navigator.clipboard.writeText(addr).then(function() {
      var fb = document.getElementById('copy-feedback');
      fb.textContent = 'Copié !';
      fb.classList.add('visible');
      setTimeout(function() {
        fb.classList.remove('visible');
        fb.textContent = '';
      }, 2000);
    });
  };

  window.sendForm = function(e) {
    e.preventDefault();
    var name = document.getElementById('contact-name').value;
    var message = document.getElementById('contact-message').value;
    var body = '';
    if (name) body += 'Nom : ' + name + '\n\n';
    body += message;
    window.location.href = 'mailto:' + addr
      + '?subject=' + encodeURIComponent('Contact Humanuscrit')
      + '&body=' + encodeURIComponent(body);
  };
})();
</script>
