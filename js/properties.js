// Base de données des propriétés
const properties = [
    // MOYEN STANDING
    {
        id: 1,
        title: "Appartement Moderne Plateau",
        category: "moyen",
        price: "85 000 FCFA/nuit",
        location: "Plateau, Abidjan",
        beds: 2,
        baths: 1,
        area: "120 m²",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Appartement moderne au cœur du Plateau, idéal pour hommes d'affaires. Entièrement équipé et sécurisé.",
        type: "location"
    },
    {
        id: 2,
        title: "Studio Cosy Marcory",
        category: "moyen",
        price: "45 000 FCFA/nuit",
        location: "Marcory, Abidjan",
        beds: 1,
        baths: 1,
        area: "50 m²",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Studio moderne et fonctionnel, proche de toutes commodités. Idéal pour courts séjours.",
        type: "location"
    },
    {
        id: 3,
        title: "Duplex Yopougon",
        category: "moyen",
        price: "95 000 FCFA/nuit",
        location: "Yopougon, Abidjan",
        beds: 3,
        baths: 2,
        area: "150 m²",
        image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Duplex spacieux avec terrasse, quartier calme et résidentiel.",
        type: "location"
    },

    // HAUT STANDING
    {
        id: 4,
        title: "Résidence Les Jardins",
        category: "haut",
        price: "150 000 FCFA/nuit",
        location: "Cocody Angré",
        beds: 3,
        baths: 2,
        area: "200 m²",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Appartement haut standing avec jardin privé, accès piscine et salle de sport. Partenaire Groupe Nasa.",
        type: "location"
    },
    {
        id: 5,
        title: "Villa KABI Executive",
        category: "haut",
        price: "200 000 FCFA/nuit",
        location: "Bingerville",
        beds: 4,
        baths: 3,
        area: "350 m²",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Villa executive partenaire de l'Entreprise KABI, équipée pour séminaires et réceptions.",
        type: "location"
    },
    {
        id: 6,
        title: "Appartement Riviera 3",
        category: "haut",
        price: "130 000 FCFA/nuit",
        location: "Riviera 3, Cocody",
        beds: 3,
        baths: 2,
        area: "180 m²",
        image: "https://images.unsplash.com/photo-1618221195710-dd0b2e9b5e6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Bel appartement avec vue sur la lagune, prestations haut de gamme.",
        type: "location"
    },

    // LUXE
    {
        id: 7,
        title: "Villa Océane Prestige",
        category: "luxe",
        price: "350 000 FCFA/nuit",
        location: "Angré, Cocody",
        beds: 5,
        baths: 4,
        area: "450 m²",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Villa d'exception avec piscine à débordement, spa privé et vue imprenable. Partenariat Hôtel Ivoire.",
        type: "location"
    },
    {
        id: 8,
        title: "Penthouse Azania",
        category: "luxe",
        price: "250 000 FCFA/nuit",
        location: "Riviera Faya",
        beds: 4,
        baths: 3,
        area: "300 m²",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Penthouse avec terrasse panoramique, jacuzzi et services hôteliers inclus. Partenaire Hôtel Tiama.",
        type: "location"
    },
    {
        id: 9,
        title: "Suite Présidentielle",
        category: "luxe",
        price: "500 000 FCFA/nuit",
        location: "Hôtel Ivoire",
        beds: 3,
        baths: 3,
        area: "250 m²",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Suite présidentielle à l'Hôtel Ivoire, accès exclusif et services VIP. Partenariat officiel.",
        type: "location"
    },

    // VENTES EXPRESS
    {
        id: 10,
        title: "TERRAIN - Riviera 3",
        category: "express",
        price: "25 000 000 FCFA",
        location: "Riviera 3, Cocody",
        beds: 0,
        baths: 0,
        area: "500 m²",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "TERRAIN VIABLE - PROMO EXPRESS ! Terrain constructible de 500m². Titre foncier. Prix défiant toute concurrence.",
        type: "vente",
        promo: "-20%"
    },
    {
        id: 11,
        title: "VILLA - Cocody Angré",
        category: "express",
        price: "65 000 000 FCFA",
        location: "Angré, Cocody",
        beds: 4,
        baths: 3,
        area: "300 m²",
        image: "https://images.unsplash.com/photo-1605276374104-88c88b5b2b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "URGENT - Propriétaire part à l'étranger. Villa 4 pièces, piscine, jardin. Prix négociable.",
        type: "vente",
        promo: "URGENT"
    },
    {
        id: 12,
        title: "APPARTEMENT - Plateau",
        category: "express",
        price: "45 000 000 FCFA",
        location: "Plateau, Abidjan",
        beds: 3,
        baths: 2,
        area: "150 m²",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "OPPORTUNITÉ - Appartement centre-ville, vue imprenable. Prix exceptionnel pour vente rapide.",
        type: "vente",
        promo: "-15%"
    },
    {
        id: 13,
        title: "PENTHOUSE - Location",
        category: "express",
        price: "90 000 FCFA/nuit",
        location: "Cocody",
        beds: 3,
        baths: 2,
        area: "200 m²",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "PROMO LOCATION - Penthouse de luxe à -30% pour les 3 premières réservations. Saisissez cette offre !",
        type: "location",
        promo: "-30%"
    }
];

// Fonction pour obtenir les propriétés par catégorie
function getPropertiesByCategory(category) {
    if (category === 'all') return properties;
    return properties.filter(p => p.category === category);
}

// Fonction pour obtenir les propriétés par type (vente/location)
function getPropertiesByType(type) {
    return properties.filter(p => p.type === type);
}

// Fonction pour obtenir les propriétés en promo/express
function getExpressProperties() {
    return properties.filter(p => p.category === 'express');
}