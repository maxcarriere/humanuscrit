---
title: Contact
layout: page
permalink: /contact/
---

Le projet Humanuscrit est hébergé publiquement sur GitHub.

Pour toute question, remarque ou échange relatif au projet, vous pouvez utiliser le dépôt GitHub :

[https://github.com/maxcarriere/humanuscrit](https://github.com/maxcarriere/humanuscrit)

Les échanges peuvent se faire via les *Issues* ou les discussions du dépôt.

---

## Envoyer un message

Vous pouvez aussi nous contacter par courriel. Le formulaire ci-dessous ouvrira votre logiciel de messagerie avec l’adresse humanuscrit@proton.me.

<form id="contact-form" class="contact-form" action="#" method="get">
  <p>
    <label for="contact-name">Nom</label><br>
    <input type="text" id="contact-name" name="name" size="40" placeholder="Votre nom">
  </p>
  <p>
    <label for="contact-email">Courriel</label><br>
    <input type="email" id="contact-email" name="email" size="40" placeholder="votre@courriel.fr" required>
  </p>
  <p>
    <label for="contact-message">Message</label><br>
    <textarea id="contact-message" name="message" rows="6" cols="40" placeholder="Votre message…"></textarea>
  </p>
  <p>
    <button type="submit">Envoyer</button>
  </p>
</form>

<script>
(function() {
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('contact-name').value || '';
      var email = document.getElementById('contact-email').value || '';
      var message = document.getElementById('contact-message').value || '';
      var subject = 'Contact Humanuscrit';
      var body = 'Nom : ' + name + '\nCourriel : ' + email + '\n\n' + message;
      var mailto = 'mailto:humanuscrit@proton.me?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }
})();
</script>
