// Configuration (vers ligne 15-20)
const CONFIG = {
    phone: '2250710076550',        // Nouveau numéro (format international sans +)
    email: 'dgnenessemin@byupathway.edu',  // Nouvel email
    agentName: 'Yves Gnenessemin',
    address: 'Cocody Riviera 3, Abidjan'
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Mettre à jour les infos de contact
    updateContactInfo();

    // Initialiser les animations
    initAnimations();

    // Mettre à jour le bandeau info express
    updateInfoExpress();
});

// Mettre à jour les informations de contact
function updateContactInfo() {
    // Mettre à jour le numéro de téléphone
    document.querySelectorAll('.agent-phone').forEach(el => {
        el.textContent = CONFIG.phone.replace('225', '+225 ');
    });

    // Mettre à jour l'email
    document.querySelectorAll('.agent-email').forEach(el => {
        el.textContent = CONFIG.email;
    });
}

// Fonction WhatsApp
function openWhatsApp(propertyTitle = '') {
    let message = `Bonjour ${CONFIG.agentName}, je suis intéressé par vos services immobiliers.`;

    if (propertyTitle) {
        message = `Bonjour ${CONFIG.agentName}, je suis intéressé par ${propertyTitle}. Pouvez-vous me donner plus d'informations ?`;
    }

    window.open(`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Charger les propriétés dans une grille
function loadProperties(containerId, category = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const props = category === 'all' ? properties : properties.filter(p => p.category === category);

    container.innerHTML = '';

    props.forEach((prop, index) => {
        const card = createPropertyCard(prop, index);
        container.appendChild(card);
    });
}

// Créer une carte de propriété
function createPropertyCard(prop, index) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const categoryClass = `category-${prop.category}`;
    const categoryText = prop.category === 'express' ? 'EXPRESS ' + (prop.promo || '') : prop.category.toUpperCase();

    card.innerHTML = `
        <div class="property-image" style="background-image: url('${prop.image}')">
            <span class="property-category ${categoryClass}">${categoryText}</span>
        </div>
        <div class="property-info">
            <h3>${prop.title}</h3>
            <div class="property-details">
                ${prop.beds ? `<span><i>🛏️</i> ${prop.beds} ch</span>` : ''}
                ${prop.baths ? `<span><i>🚿</i> ${prop.baths} sdb</span>` : ''}
                <span><i>📐</i> ${prop.area}</span>
            </div>
            <div class="property-price">${prop.price}</div>
            <p class="property-location">📍 ${prop.location}</p>
            <button class="btn" onclick="showDetails(${prop.id})">Voir détails</button>
            <button class="btn btn-wa" onclick="openWhatsApp('${prop.title}')">📱 WhatsApp</button>
        </div>
    `;

    return card;
}

// Afficher les détails dans le modal
function showDetails(id) {
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    const modal = document.getElementById('property-modal');
    const modalImage = document.getElementById('modal-image');
    const modalBody = document.getElementById('modal-body');

    modalImage.src = prop.image;
    modalImage.alt = prop.title;

    modalBody.innerHTML = `
        <h2 style="color: var(--vert-fonce); margin-bottom: 1rem;">${prop.title}</h2>
        <p style="font-size: 1.2rem; color: var(--vert-clair); margin-bottom: 1rem;">${prop.price}</p>
        <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
            ${prop.beds ? `<span><i>🛏️</i> ${prop.beds} chambres</span>` : ''}
            ${prop.baths ? `<span><i>🚿</i> ${prop.baths} salles de bain</span>` : ''}
            <span><i>📐</i> ${prop.area}</span>
        </div>
        <p style="margin-bottom: 1rem;"><strong>📍 Localisation:</strong> ${prop.location}</p>
        <p style="margin-bottom: 2rem;"><strong>📝 Description:</strong> ${prop.description}</p>
        ${prop.promo ? `<p class="promo-badge-modal">🔥 OFFRE SPÉCIALE: ${prop.promo}</p>` : ''}
        <button class="btn btn-wa" onclick="openWhatsApp('${prop.title}')" style="width: 100%;">
            📱 Contacter via WhatsApp
        </button>
    `;

    modal.classList.add('active');
}

// Fermer le modal
function closeModal() {
    const modal = document.getElementById('property-modal');
    if (modal) modal.classList.remove('active');
}

// Filtrer les propriétés
function filterProperties(category, containerId = 'properties-grid') {
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category) ||
            (category === 'all' && btn.textContent === 'Tous')) {
            btn.classList.add('active');
        }
    });

    // Charger les propriétés filtrées
    loadProperties(containerId, category);
}

// Mettre à jour le bandeau info express
function updateInfoExpress() {
    const expressProps = getExpressProperties();
    const scrollingText = document.querySelector('.scrolling-text');

    if (scrollingText && expressProps.length > 0) {
        let html = '';
        expressProps.forEach(prop => {
            html += `<span><i>🔥</i> ${prop.promo || 'EXPRESS'} : ${prop.title} - ${prop.price}</span>`;
        });
        scrollingText.innerHTML = html;
    }
}

// Initialiser les animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.property-card, .partner-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Fermer le modal en cliquant à l'extérieur
window.onclick = function (event) {
    const modal = document.getElementById('property-modal');
    if (event.target === modal) {
        closeModal();
    }
};