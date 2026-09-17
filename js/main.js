// ===== CHARGEMENT DES DONNÉES =====
document.addEventListener('DOMContentLoaded', function () {
    // Charger les résidences sur page d'accueil
    if (document.getElementById('residences-grid')) {
        displayProperties(getResidences().slice(0, 3), 'residences-grid');
    }

    // Charger les maisons sur page d'accueil
    if (document.getElementById('maisons-grid')) {
        displayProperties(getMaisons().slice(0, 3), 'maisons-grid');
    }

    // Charger les terrains sur page d'accueil
    if (document.getElementById('terrains-grid')) {
        displayProperties(getTerrains().slice(0, 3), 'terrains-grid');
    }

    // Charger les locations sur page d'accueil
    if (document.getElementById('location-grid')) {
        displayProperties(getLocations().slice(0, 3), 'location-grid');
    }

    // Charger tous les biens en location sur page location.html
    if (document.getElementById('location-full-grid')) {
        displayProperties(getLocations(), 'location-full-grid');
        initFilters();
    }

    // Charger les témoignages
    if (document.getElementById('testimonials-grid')) {
        displayTestimonials();
    }

    // Charger les partenaires
    if (document.getElementById('partners-grid')) {
        displayPartners();
    }

    // Charger les résidences sur residences.html
    if (document.getElementById('residences-full-grid')) {
        const filter = new URLSearchParams(window.location.search).get('filter') || 'all';
        filterProperties(filter, 'residences-full-grid');
    }

    // Charger la sélection Express Vente sur express-vente.html
    if (document.getElementById('express-grid')) {
        filterExpress('all');
    }

    // Charger les maisons sur maisons.html
    if (document.getElementById('maisons-full-grid')) {
        displayProperties(getMaisons(), 'maisons-full-grid');
    }

    // Charger les terrains sur terrains.html
    if (document.getElementById('terrains-full-grid')) {
        displayProperties(getTerrains(), 'terrains-full-grid');
    }
});

// ===== AFFICHER LES PROPRIÉTÉS =====
function displayProperties(properties, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    properties.forEach(prop => {
        const card = document.createElement('div');
        card.className = 'property-card';

        let detailsHtml = '';
        if (prop.beds) detailsHtml += `<span>🛏️ ${prop.beds} ch</span>`;
        if (prop.baths) detailsHtml += `<span>🚿 ${prop.baths} sdb</span>`;
        detailsHtml += `<span>📐 ${prop.area}</span>`;

        let categoryLabel = '';
        if (prop.category === 'residence') categoryLabel = 'Résidence';
        else if (prop.category === 'maison') categoryLabel = 'Maison';
        else if (prop.category === 'terrain') categoryLabel = 'Terrain';
        else categoryLabel = 'Location';

        if (prop.duration === 'court') categoryLabel = 'Location courte durée';
        else if (prop.duration === 'long') categoryLabel = 'Location longue durée';

        card.innerHTML = `
            <div class="property-image" style="background-image: url('${prop.image}')">
                <span class="property-category">${categoryLabel}</span>
            </div>
            <div class="property-info">
                <h3>${prop.title}</h3>
                <div class="property-location">📍 ${prop.location}</div>
                <div class="property-details">
                    ${detailsHtml}
                </div>
                <div class="property-price">${prop.price}</div>
                <div class="property-description">${prop.description.substring(0, 100)}...</div>
                <div class="property-buttons">
                    <button class="btn btn-outline-dark" onclick="showDetails(${prop.id})">Détails</button>
                    <a href="https://wa.me/2250710076550?text=Bonjour%20Yves%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20${encodeURIComponent(prop.title)}" 
                       class="btn btn-primary" target="_blank">📱 WhatsApp</a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// ===== AFFICHER LES DÉTAILS (MODAL) =====
function showDetails(id) {
    const prop = getAllProperties().find(p => p.id === id);

    if (!prop) return;

    let detailsHtml = '';
    if (prop.beds) detailsHtml += `<span>🛏️ ${prop.beds} chambres</span>`;
    if (prop.baths) detailsHtml += `<span>🚿 ${prop.baths} salles de bain</span>`;
    detailsHtml += `<span>📐 ${prop.area}</span>`;

    const modalHtml = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal()">✕</button>
                <img src="${prop.image}" alt="${prop.title}" class="modal-image">
                <div class="modal-body">
                    <h2>${prop.title}</h2>
                    <div class="modal-price">${prop.price}</div>
                    <div class="modal-location">📍 ${prop.location}</div>
                    <div class="modal-details">${detailsHtml}</div>
                    <div class="modal-description">
                        <strong>Description complète :</strong>
                        <p>${prop.description}</p>
                    </div>
                    <div class="modal-buttons">
                        <a href="https://wa.me/2250710076550?text=Bonjour%20Yves%2C%20je%20souhaite%20plus%20d'informations%20sur%20${encodeURIComponent(prop.title)}" 
                           class="btn btn-primary" target="_blank">📱 Contacter via WhatsApp</a>
                        <button class="btn btn-outline-dark" onclick="closeModal()">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Supprimer l'ancien modal s'il existe
    const oldModal = document.querySelector('.modal-overlay');
    if (oldModal) oldModal.remove();

    // Ajouter le nouveau modal
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) modal.remove();
    document.body.style.overflow = '';
}

// ===== AFFICHER LES TÉMOIGNAGES =====
function displayTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    const temoignagesList = getTemoignages();
    container.innerHTML = '';

    temoignagesList.forEach(t => {
        const stars = '★'.repeat(Math.floor(t.rating)) + '☆'.repeat(5 - Math.floor(t.rating));

        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <img src="${t.image}" alt="${t.name}" class="testimonial-image">
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-location">${t.location}</div>
            <div class="testimonial-rating">${stars} ${t.rating}/5</div>
        `;
        container.appendChild(card);
    });
}

// ===== AFFICHER LES PARTENAIRES =====
function displayPartners(partenairesList = getPartenaires()) {
    const container = document.getElementById('partners-grid');
    if (!container) return;

    container.innerHTML = '';

    partenairesList.forEach(p => {
        const card = document.createElement('div');
        card.className = 'partner-card';
        card.innerHTML = `
            <div class="partner-icon">${p.icon}</div>
            <h4>${p.name}</h4>
            <p>${p.description}</p>
        `;
        container.appendChild(card);
    });
}

// ===== FILTRES PARTENAIRES (partenaires.html) =====
function filterPartners(category) {
    const partenairesList = category === 'all'
        ? getPartenaires()
        : getPartenaires().filter(p => p.category === category);

    displayPartners(partenairesList);
    setActiveFilter(category);
}

// ===== FILTRES RÉSIDENCES PAR STANDING (residences.html) =====
function loadProperties(containerId, filter = 'all') {
    let residencesList = getResidences();
    if (filter !== 'all') {
        residencesList = residencesList.filter(r => r.standing === filter);
    }

    displayProperties(residencesList, containerId);
}

function filterProperties(filter, containerId) {
    loadProperties(containerId, filter);
    setActiveFilter(filter);
}

// ===== FILTRES EXPRESS VENTE (express-vente.html) =====
function filterExpress(type) {
    let expressList = getExpressProperties();
    if (type !== 'all') {
        expressList = expressList.filter(p => p.type === type);
    }

    displayProperties(expressList, 'express-grid');
    setActiveFilter(type);
}

// Met en surbrillance le bouton de filtre correspondant (attribut data-filter)
function setActiveFilter(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
}

// ===== FILTRES POUR LOCATION =====
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filter = this.dataset.filter;

            // Mettre à jour l'état actif des boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filtrer les biens
            let filteredLocations = getLocations();
            if (filter !== 'all') {
                filteredLocations = getLocations().filter(l => l.duration === filter);
            }

            displayProperties(filteredLocations, 'location-full-grid');
        });
    });
}

// ===== STYLES MODAL À AJOUTER DYNAMIQUEMENT =====
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    }
    
    .modal-content {
        background: white;
        width: 90%;
        max-width: 750px;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 24px;
        position: relative;
        animation: slideUp 0.3s ease;
    }
    
    .modal-close {
        position: absolute;
        top: 16px;
        right: 16px;
        background: var(--secondary);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10;
        transition: transform 0.3s;
    }
    
    .modal-close:hover {
        transform: rotate(90deg);
    }
    
    .modal-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    
    .modal-body {
        padding: 32px;
    }
    
    .modal-body h2 {
        color: var(--primary);
        margin-bottom: 8px;
    }
    
    .modal-price {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--secondary);
        margin-bottom: 16px;
    }
    
    .modal-location {
        color: var(--gray);
        margin-bottom: 16px;
    }
    
    .modal-details {
        display: flex;
        gap: 20px;
        margin-bottom: 24px;
        padding-bottom: 24px;
        border-bottom: 1px solid #eee;
    }
    
    .modal-description {
        margin-bottom: 32px;
    }
    
    .modal-description p {
        color: var(--gray-dark);
        margin-top: 8px;
        line-height: 1.6;
    }
    
    .modal-buttons {
        display: flex;
        gap: 16px;
    }
    
    .modal-buttons .btn {
        flex: 1;
        text-align: center;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        .modal-body {
            padding: 20px;
        }
        
        .modal-price {
            font-size: 1.4rem;
        }
        
        .modal-buttons {
            flex-direction: column;
        }
    }
`;
document.head.appendChild(modalStyles);