// ===== DONNÉES DES BIENS =====

// Résidences
const residences = [
    {
        id: 1,
        title: "Appartement Moderne Plateau",
        category: "residence",
        price: "85 000 FCFA/nuit",
        location: "Plateau, Abidjan",
        beds: 2,
        baths: 1,
        area: "120 m²",
        image: "images/villa.jpg",
        description: "Appartement moderne au cœur du Plateau, idéal pour hommes d'affaires. Entièrement équipé et sécurisé avec vue imprenable sur la ville.",
        type: "location",
        duration: "court"
    },
    {
        id: 2,
        title: "Résidence Les Jardins",
        category: "residence",
        price: "150 000 FCFA/nuit",
        location: "Cocody Angré",
        beds: 3,
        baths: 2,
        area: "200 m²",
        image: "images/bcl869-hotel-4340863_1920.jpg",
        description: "Appartement haut standing avec jardin privé, accès piscine et salle de sport. Parfait pour les séjours d'affaires.",
        type: "location",
        duration: "court"
    },
    {
        id: 3,
        title: "Appartement Riviera 3",
        category: "residence",
        price: "130 000 FCFA/nuit",
        location: "Riviera 3, Cocody",
        beds: 3,
        baths: 2,
        area: "180 m²",
        image: "images/pexels-bed-1839183.jpg",
        description: "Bel appartement avec vue sur la lagune, prestations haut de gamme. Quartier résidentiel calme et sécurisé.",
        type: "location",
        duration: "court"
    }
];

// Maisons à vendre
const maisons = [
    {
        id: 4,
        title: "Villa Océane Prestige",
        category: "maison",
        price: "350 000 000 FCFA",
        location: "Angré, Cocody",
        beds: 5,
        baths: 4,
        area: "450 m²",
        image: "images/maisons/villa1.jpg",
        description: "Villa d'exception avec piscine à débordement, spa privé et vue imprenable. Prestations luxueuses, matériaux nobles.",
        type: "vente"
    },
    {
        id: 5,
        title: "Villa KABI Executive",
        category: "maison",
        price: "200 000 000 FCFA",
        location: "Bingerville",
        beds: 4,
        baths: 3,
        area: "350 m²",
        image: "images/maisons/villa2.jpg",
        description: "Villa moderne avec grand jardin, piscine et dépendances. Idéal pour famille nombreuse ou réceptions.",
        type: "vente"
    },
    {
        id: 6,
        title: "Maison de standing Marcory",
        category: "maison",
        price: "95 000 000 FCFA",
        location: "Marcory, Abidjan",
        beds: 3,
        baths: 2,
        area: "220 m²",
        image: "images/maisons/villa3.jpg",
        description: "Maison contemporaine, prestations de qualité. Proche de toutes commodités, quartier recherché.",
        type: "vente"
    }
];

// Terrains
const terrains = [
    {
        id: 7,
        title: "Terrain Riviera 3",
        category: "terrain",
        price: "25 000 000 FCFA",
        location: "Riviera 3, Cocody",
        area: "500 m²",
        image: "images/terrains/terrain1.jpg",
        description: "Terrain constructible viabilisé. Titre foncier disponible. Quartier résidentiel en pleine expansion.",
        type: "vente"
    },
    {
        id: 8,
        title: "Terrain Angré",
        category: "terrain",
        price: "45 000 000 FCFA",
        location: "Angré, Cocody",
        area: "800 m²",
        image: "images/terrains/terrain2.jpg",
        description: "Grand terrain plat, idéal pour villa ou lotissement. Proche de toutes commodités.",
        type: "vente"
    },
    {
        id: 9,
        title: "Terrain Bingerville",
        category: "terrain",
        price: "18 000 000 FCFA",
        location: "Bingerville",
        area: "450 m²",
        image: "images/terrains/terrain3.jpg",
        description: "Terrain calme, vue sur lagune. Cadre verdoyant, parfait pour maison de famille.",
        type: "vente"
    }
];

// Locations (courte et longue durée)
const locations = [
    {
        id: 10,
        title: "Penthouse de Luxe",
        category: "location",
        price: "90 000 FCFA/nuit",
        location: "Cocody",
        beds: 3,
        baths: 2,
        area: "200 m²",
        image: "images/residences/appartment1.jpg",
        description: "Penthouse avec terrasse panoramique, jacuzzi et services hôteliers inclus. Vue exceptionnelle sur la ville.",
        type: "location",
        duration: "court"
    },
    {
        id: 11,
        title: "Studio Cosy Marcory",
        category: "location",
        price: "450 000 FCFA/mois",
        location: "Marcory, Abidjan",
        beds: 1,
        baths: 1,
        area: "50 m²",
        image: "images/residences/appartment2.jpg",
        description: "Studio moderne et fonctionnel, proche de toutes commodités. Idéal pour jeune actif ou étudiant.",
        type: "location",
        duration: "long"
    },
    {
        id: 12,
        title: "Duplex Yopougon",
        category: "location",
        price: "750 000 FCFA/mois",
        location: "Yopougon, Abidjan",
        beds: 3,
        baths: 2,
        area: "150 m²",
        image: "images/maisons/villa1.jpg",
        description: "Duplex spacieux avec terrasse, quartier calme et résidentiel. Idéal pour famille.",
        type: "location",
        duration: "long"
    }
];

// ===== TÉMOIGNAGES =====
const temoignages = [
    {
        id: 1,
        name: "Marthe R.",
        location: "Haïti",
        text: "J'ai utilisé les services de cette entreprise durant mes nombreux séjours professionnels en Haïti. Un service irréprochable !",
        rating: 4.6,
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 2,
        name: "Daniela J.",
        location: "Paris",
        text: "Les services d'Yves ont transformé mon expérience de location. Mes hôtes sont ravis, et moi aussi !",
        rating: 4.6,
        image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        id: 3,
        name: "Elvis G.",
        location: "Abidjan",
        text: "Grâce à Yves, j'ai pu augmenter significativement mes revenus locatifs sans me soucier de la gestion quotidienne. Professionnel et fiable.",
        rating: 4.8,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 4,
        name: "Jean K.",
        location: "Cocody",
        text: "Une équipe réactive et compétente. Yves m'a trouvé la villa parfaite en moins d'une semaine !",
        rating: 5.0,
        image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
        id: 5,
        name: "Aïcha S.",
        location: "Plateau",
        text: "Professionnalisme et transparence. Je recommande vivement les services de Gnenessemin Immobilier.",
        rating: 4.7,
        image: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
        id: 6,
        name: "Mohamed T.",
        location: "Riviera",
        text: "Excellent accompagnement pour l'achat de mon terrain. Yves est un agent de confiance.",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/men/12.jpg"
    }
];

// ===== PARTENAIRES =====
const partenaires = [
    { id: 1, name: "Hôtel Ivoire", icon: "🏨", description: "Partenariat exclusif" },
    { id: 2, name: "Hôtel Tiama", icon: "🏨", description: "Partenaire officiel" },
    { id: 3, name: "Groupe Nasa", icon: "🏢", description: "Logements d'entreprise" },
    { id: 4, name: "Orange CI", icon: "📱", description: "Partenaire télécom" },
    { id: 5, name: "Ecobank", icon: "🏦", description: "Solutions financières" },
    { id: 6, name: "Air France", icon: "✈️", description: "Voyages d'affaires" }
];

// Fonctions pour récupérer les données
function getResidences() { return residences; }
function getMaisons() { return maisons; }
function getTerrains() { return terrains; }
function getLocations() { return locations; }
function getTemoignages() { return temoignages; }
function getPartenaires() { return partenaires; }