
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function formatWhatsAppDate(value) {
  if (!value) return 'Non précisée';
  const date = new Date(value + 'T12:00:00');
  return isNaN(date) ? value : date.toLocaleDateString('fr-CH');
}

function buildReservationMessage(data) {
  return [
    'Bonjour Leriko,',
    '',
    'Je souhaite demander une réservation / un devis.',
    '',
    `Type de client : ${data.clientType || 'Non précisé'}`,
    `Nom : ${data.name || 'Non précisé'}`,
    `Entreprise : ${data.company || 'Non précisée'}`,
    `Téléphone : ${data.phone || 'Non précisé'}`,
    `Email : ${data.email || 'Non précisé'}`,
    `Service : ${data.service || 'Non précisé'}`,
    `Date souhaitée : ${formatWhatsAppDate(data.date)}`,
    `Adresse / lieu : ${data.location || 'Non précisé'}`,
    `Fréquence / budget : ${data.frequency || 'Non précisé'}`,
    '',
    'Détails complémentaires :',
    data.message || 'Aucun détail complémentaire.',
  ].join('\n');
}

function buildContactMessage(data) {
  return [
    'Bonjour Leriko,',
    '',
    'Je souhaite être recontacté.',
    '',
    `Nom : ${data.name || 'Non précisé'}`,
    `Entreprise : ${data.company || 'Non précisée'}`,
    `Téléphone : ${data.phone || 'Non précisé'}`,
    `Email : ${data.email || 'Non précisé'}`,
    `Sujet : ${data.subject || 'Non précisé'}`,
    '',
    'Message :',
    data.message || 'Aucun message.',
  ].join('\n');
}

document.addEventListener('DOMContentLoaded', () => {
  const prefillService = getQueryParam('service');

  document.querySelectorAll('[data-whatsapp-form]').forEach((form) => {
    const kind = form.getAttribute('data-form-kind');
    const phone = form.getAttribute('data-whatsapp-phone') || '41767332423';
    const notice = form.querySelector('[data-form-notice]');
    const serviceField = form.querySelector('select[name="service"]');

    if (prefillService && serviceField && !serviceField.value) {
      const normalized = decodeURIComponent(prefillService);
      const option = [...serviceField.options].find((opt) => opt.value === normalized || opt.textContent.trim() === normalized);
      if (option) serviceField.value = option.value;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = Object.fromEntries(new FormData(form).entries());
      const message = kind === 'contact' ? buildContactMessage(data) : buildReservationMessage(data);
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

      if (notice) {
        notice.classList.add('show');
        notice.textContent = 'Votre message est prêt. WhatsApp va s’ouvrir dans un nouvel onglet.';
      }

      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});
