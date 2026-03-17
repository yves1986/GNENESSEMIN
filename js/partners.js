// Base de données des partenaires
const partners = [
    // HÔTELS DE LUXE
    {
        id: 1,
        name: "Hôtel Ivoire",
        category: "hotel",
        icon: "🏨",
        description: "Partenariat exclusif - Accès VIP",
        logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Hôtel Tiama",
        category: "hotel",
        icon: "🏨",
        description: "Partenaire officiel - Résidences",
        logo: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Azalaï Hôtels",
        category: "hotel",
        icon: "🏨",
        description: "Chaîne hôtelière partenaire",
        logo: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "SOFITEL Abidjan",
        category: "hotel",
        icon: "⭐",
        description: "Partenariat 5 étoiles",
        logo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

    // ENTREPRISES
    {
        id: 5,
        name: "Groupe Nasa",
        category: "entreprise",
        icon: "🏢",
        description: "Partenariat immobilier d'entreprise",
        logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Entreprise KABI",
        category: "entreprise",
        icon: "⚙️",
        description: "Convention logement employés",
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Orange Côte d'Ivoire",
        category: "entreprise",
        icon: "📱",
        description: "Partenaire télécom - Logements cadres",
        logo: "https://images.unsplash.com/photo-1573164713988-2485fc56a922?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Ecobank CI",
        category: "entreprise",
        icon: "🏦",
        description: "Partenariat bancaire - Financement",
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

    // AGENCES PARTENAIRES
    {
        id: 9,
        name: "Air France - KLM",
        category: "transport",
        icon: "✈️",
        description: "Convention voyages d'affaires",
        logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Avis Rent a Car",
        category: "transport",
        icon: "🚗",
        description: "Location véhicules pour clients",
        logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

// Fonction pour obtenir les partenaires par catégorie
function getPartnersByCategory(category) {
    if (category === 'all') return partners;
    return partners.filter(p => p.category === category);
}

// Statistiques partenaires
const partnerStats = {
    hotels: partners.filter(p => p.category === 'hotel').length,
    entreprises: partners.filter(p => p.category === 'entreprise').length,
    total: partners.length
};