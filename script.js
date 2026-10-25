//Medicines Database
const medicinesData = [
    { name: "Paracetamol 500 mg", brand: "Crocin / Dolo 650", category: "Pain Relief / Fever", keywords: "fever headache pain bodyache paracetamol dolo crocin", eng: 42, jan: 12, gov: 10, save: "76%" },
    { name: "Ibuprofen 400 mg", brand: "Brufen", category: "Pain & Inflammation", keywords: "pain inflammation bodyache swelling ibuprofen brufen", eng: 68, jan: 24, gov: 20, save: "71%" },
    { name: "Cetirizine 10 mg", brand: "Alerid / Zyrtec", category: "Allergy / Cold", keywords: "cold allergy sneezing running nose cetirizine alerid", eng: 52, jan: 18, gov: 15, save: "71%" },
    { name: "Metformin 500 mg", brand: "Glucophage / Glycomet", category: "Diabetes", keywords: "diabetes sugar blood sugar metformin glycomet", eng: 80, jan: 28, gov: 22, save: "72%" },
    { name: "Amoxycillin + Clavulanate 625 mg", brand: "Augmentin", category: "Antibiotic / Infection", keywords: "infection antibiotic fever cough augmentin amoxycillin", eng: 210, jan: 55, gov: 45, save: "78%" },
    { name: "Azithromycin 500 mg", brand: "Azithral / Zithromax", category: "Antibiotic / Throat", keywords: "throat infection cough azithromycin azithral", eng: 120, jan: 35, gov: 28, save: "76%" },
    { name: "Pantoprazole 40 mg", brand: "Pan 40 / Pantocid", category: "Acidity / Gastric", keywords: "acidity gas heartburn stomach pain pantocid pan40", eng: 90, jan: 15, gov: 12, save: "83%" },
    { name: "Atorvastatin 10 mg", brand: "Storvas / Lipitor", category: "Cholesterol / Cardio", keywords: "cholesterol heart atorvastatin lipitor", eng: 140, jan: 25, gov: 20, save: "82%" },
    { name: "Amlodipine 5 mg", brand: "Amlong / Norvasc", category: "Blood Pressure", keywords: "blood pressure bp hypertension amlodipine amlong", eng: 45, jan: 10, gov: 8, save: "78%" },
    { name: "Telmisartan 40 mg", brand: "Telma 40", category: "Blood Pressure", keywords: "blood pressure bp hypertension telmisartan telma", eng: 110, jan: 22, gov: 18, save: "80%" },
    { name: "Diclofenac Sodium 50 mg", brand: "Voveran", category: "Joint & Muscle Pain", keywords: "joint pain arthritis muscle ache diclofenac voveran", eng: 55, jan: 14, gov: 11, save: "75%" },
    { name: "Omeprazole 20 mg", brand: "Omez", category: "Acidity / Gastric", keywords: "acidity gas reflux omez omeprazole", eng: 50, jan: 12, gov: 10, save: "76%" },
    { name: "Rabeprazole 20 mg", brand: "Rablet / Pariet", category: "Acidity / Gastric", keywords: "acidity ulcer reflux rabeprazole rablet", eng: 95, jan: 18, gov: 15, save: "81%" },
    { name: "Levocetirizine 5 mg", brand: "Xyzal", category: "Allergy / Cold", keywords: "allergy cold sneezing levocetirizine xyzal", eng: 60, jan: 16, gov: 13, save: "73%" },
    { name: "Montelukast 10 mg", brand: "Montek LC / Singulair", category: "Asthma / Allergy", keywords: "asthma breathing allergy montelukast montek", eng: 160, jan: 38, gov: 30, save: "76%" },
    { name: "Ciprofloxacin 500 mg", brand: "Cifran", category: "Antibiotic", keywords: "infection bacterial ciprofloxacin cifran", eng: 85, jan: 22, gov: 18, save: "74%" },
    { name: "Cefixime 200 mg", brand: "Taxim-O", category: "Antibiotic", keywords: "throat fever infection cefixime taxim", eng: 130, jan: 42, gov: 35, save: "73%" },
    { name: "Doxycycline 100 mg", brand: "Doxy-1", category: "Antibiotic / Acne", keywords: "acne infection doxycycline", eng: 65, jan: 18, gov: 14, save: "72%" },
    { name: "Glimepiride 2 mg", brand: "Amaryl", category: "Diabetes", keywords: "sugar diabetes glimepiride amaryl", eng: 100, jan: 20, gov: 16, save: "80%" },
    { name: "Rosuvastatin 10 mg", brand: "Rozavel / Crestor", category: "Cholesterol", keywords: "cholesterol rosuvastatin crestor", eng: 180, jan: 30, gov: 25, save: "83%" },
    { name: "Clopidogrel 75 mg", brand: "Clopivas", category: "Blood Thinner", keywords: "heart blood thinner clopidogrel clopivas", eng: 120, jan: 25, gov: 20, save: "79%" },
    { name: "Aspirin 75 mg", brand: "Ecosprin 75", category: "Blood Thinner", keywords: "heart blood thinner aspirin ecosprin", eng: 35, jan: 8, gov: 6, save: "77%" },
    { name: "Ranitidine 150 mg", brand: "Rantac 150", category: "Acidity", keywords: "acidity gas rantac ranitidine", eng: 30, jan: 8, gov: 6, save: "73%" },
    { name: "Domperidone 10 mg", brand: "Domstal", category: "Nausea / Vomiting", keywords: "vomiting nausea domperidone domstal", eng: 40, jan: 10, gov: 8, save: "75%" },
    { name: "Ondansetron 4 mg", brand: "Emeset", category: "Nausea / Vomiting", keywords: "vomiting nausea emeset ondansetron", eng: 45, jan: 12, gov: 10, save: "73%" },
    { name: "Fexofenadine 120 mg", brand: "Allegra 120", category: "Allergy", keywords: "allergy cold fexofenadine allegra", eng: 150, jan: 40, gov: 32, save: "73%" },
    { name: "Vitamin D3 60000 IU", brand: "Uprise-D3", category: "Vitamin / Bones", keywords: "vitamin d calcium bones weakness uprise", eng: 140, jan: 35, gov: 28, save: "75%" },
    { name: "Methylcobalamin 1500 mcg", brand: "Nurokind", category: "Nerve Health / Vitamins", keywords: "nerve pain weakness vitamin b12 nurokind methylcobalamin", eng: 110, jan: 28, gov: 22, save: "75%" },
    { name: "Calcium Carbonate + D3", brand: "Shelcal 500", category: "Bones / Supplements", keywords: "calcium bones joints shelcal", eng: 120, jan: 32, gov: 26, save: "73%" },
    { name: "Folic Acid 5 mg", brand: "Folvite", category: "Supplements / Anemia", keywords: "blood iron folic acid folvite", eng: 45, jan: 10, gov: 8, save: "78%" },
    { name: "Ferrous Ascorbate + Folic Acid", brand: "Orofer XT", category: "Iron / Anemia", keywords: "iron deficiency anemia blood orofer", eng: 160, jan: 45, gov: 36, save: "72%" },
    { name: "Levothyroxine 50 mcg", brand: "Eltroxin / Thyronorm", category: "Thyroid", keywords: "thyroid weight gain eltroxin thyronorm", eng: 150, jan: 25, gov: 20, save: "83%" },
    { name: "Fluconazole 150 mg", brand: "Forcan", category: "Antifungal / Skin", keywords: "fungal infection skin rash fluconazole forcan", eng: 35, jan: 10, gov: 8, save: "71%" },
    { name: "Itraconazole 100 mg", brand: "Canditral", category: "Antifungal / Skin", keywords: "skin infection ringworm itraconazole canditral", eng: 220, jan: 65, gov: 55, save: "70%" },
    { name: "Aceclofenac 100 mg", brand: "Hifenac", category: "Pain Relief", keywords: "joint pain inflammation aceclofenac hifenac", eng: 65, jan: 18, gov: 14, save: "72%" },
    { name: "Mefenamic Acid 250 mg", brand: "Meftal-Spas", category: "Period Pain / Cramps", keywords: "stomach cramps period pain mefenamic meftal", eng: 50, jan: 14, gov: 11, save: "72%" },
    { name: "Tramadol 50 mg", brand: "Contramal", category: "Severe Pain", keywords: "severe pain tramadol contramal", eng: 90, jan: 30, gov: 24, save: "67%" },
    { name: "Norfloxacin 400 mg", brand: "Norflox-TZ", category: "Stomach Infection", keywords: "loose motion stomach infection diarrhea norfloxacin", eng: 75, jan: 20, gov: 16, save: "73%" },
    { name: "Teneligliptin 20 mg", brand: "Zita 20", category: "Diabetes", keywords: "sugar diabetes teneligliptin zita", eng: 140, jan: 32, gov: 26, save: "77%" },
    { name: "Voglibose 0.2 mg", brand: "Voglibose", category: "Diabetes", keywords: "sugar spike diabetes voglibose", eng: 95, jan: 22, gov: 18, save: "77%" },
    { name: "Atenolol 50 mg", brand: "Aten", category: "Blood Pressure / Heart", keywords: "blood pressure heart rate atenolol aten", eng: 40, jan: 10, gov: 8, save: "75%" },
    { name: "Losartan 50 mg", brand: "Losacar", category: "Blood Pressure", keywords: "bp blood pressure losartan losacar", eng: 60, jan: 15, gov: 12, save: "75%" },
    { name: "Spironolactone 25 mg", brand: "Aldactone", category: "Diuretic / BP", keywords: "water retention blood pressure spironolactone", eng: 80, jan: 20, gov: 16, save: "75%" },
    { name: "Furosemide 40 mg", brand: "Lasix", category: "Diuretic / Swelling", keywords: "swelling water retention lasix furosemide", eng: 35, jan: 8, gov: 6, save: "77%" },
    { name: "Prednisolone 10 mg", brand: "Wysolone", category: "Steroid / Inflammation", keywords: "allergy swelling inflammation prednisolone wysolone", eng: 45, jan: 12, gov: 10, save: "73%" },
    { name: "Salbutamol 4 mg", brand: "Asthalin", category: "Respiratory / Asthma", keywords: "asthma breathing cough asthalin salbutamol", eng: 30, jan: 7, gov: 5, save: "76%" },
    { name: "Ambroxol 30 mg", brand: "Mucosolvan", category: "Cough / Cold", keywords: "mucus cough chest congestion ambroxol", eng: 55, jan: 15, gov: 12, save: "72%" },
    { name: "Dicyclomine 20 mg", brand: "Cyclopam", category: "Stomach Pain / Cramps", keywords: "stomach cramp pain colic dicyclomine cyclopam", eng: 45, jan: 12, gov: 10, save: "73%" },
    { name: "Multivitamin Capsules", brand: "Supradyn / Becadexamin", category: "Daily Wellness / Supplements", keywords: "multivitamin energy weakness immunity supradyn", eng: 50, jan: 15, gov: 12, save: "70%" },
    { name: "Silymarin 140 mg", brand: "Silybon", category: "Liver Care", keywords: "liver detox fatty liver silybon silymarin", eng: 180, jan: 45, gov: 38, save: "75%" },
    { name: "Ursodeoxycholic Acid 300 mg", brand: "Udiliv", category: "Liver / Gallbladder", keywords: "gallstones liver udiliv ursodeoxycholic", eng: 350, jan: 95, gov: 80, save: "73%" },
    { name: "Allopurinol 100 mg", brand: "Zyloric", category: "Uric Acid / Gout", keywords: "uric acid joint pain gout allopurinol", eng: 70, jan: 18, gov: 15, save: "74%" },
    { name: "Febuxostat 40 mg", brand: "Feburic", category: "Uric Acid / Gout", keywords: "uric acid gout joint pain febuxostat feburic", eng: 190, jan: 50, gov: 40, save: "74%" },
    { name: "Pregabalin 75 mg", brand: "Gabapin / Lyrica", category: "Nerve Pain", keywords: "nerve pain sciatica pregabalin gabapin", eng: 130, jan: 35, gov: 28, save: "73%" }
];

const storesCoordinates = [
    { name: "Jan Aushadhi Kendra (Phase 7)", address: "Phase 7, Mohali", lat: 30.7150, lon: 76.7100, timing: "09:00 AM - 8:00 PM" },
    { name: "Govt Civil Hospital Dispensary", address: "Phase 6, Mohali", lat: 30.7300, lon: 76.7000, timing: "09:00 AM - 5:00 PM" },
    { name: "Jan Aushadhi Generic Pharmacy", address: "Sector 70, Mohali", lat: 30.6950, lon: 76.7200, timing: "09:00 AM - 9:00 PM" },
    { name: "District Jan Aushadhi Kendra", address: "Sector 17, Chandigarh", lat: 30.7414, lon: 76.7800, timing: "09:00 AM - 6:00 PM" }
];

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    return (R * c).toFixed(1);
}

function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    if(pageId === 'home') document.getElementById('nav-home')?.classList.add('active');
    if(pageId === 'search') document.getElementById('nav-search')?.classList.add('active');
    if(pageId === 'stores') {
        document.getElementById('nav-stores')?.classList.add('active');
        requestUserGPSLocation();
    }
    if(pageId === 'safety') document.getElementById('nav-safety')?.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function executeSearch(inputId) {
    const inputElement = document.getElementById(inputId);
    const query = inputElement ? inputElement.value.trim() : '';

    document.getElementById('home-search-input').value = query;
    document.getElementById('search-page-input').value = query;

    renderMedicines(query);
    switchPage('search');
}

function renderMedicines(query = '') {
    const container = document.getElementById('dynamic-medicine-list');
    if(!container) return;

    const lowerQuery = query.toLowerCase();
    const filtered = medicinesData.filter(m => {
        const localized = getLocalizedMedicine(m);
        const translatedText = Object.values(m.translations).flatMap(values => Object.values(values)).join(' ');
        const searchableText = `${translatedText} ${m.keywords}`.toLowerCase();
        return searchableText.includes(lowerQuery) || query === '';
    });

    const dictionary = translations[currentLanguage];
    document.getElementById('result-query-text').innerText = query
        ? `${dictionary.resultsFor} "${query}"`
        : `${dictionary.allAvailable} (${medicinesData.length} ${dictionary.available})`;
    document.getElementById('result-count').innerText = `${dictionary.showing} ${filtered.length} ${dictionary.medicines}`;

    if(filtered.length === 0) {
        container.innerHTML = `
            <div style="background: white; padding: 40px; border-radius: 16px; text-align: center; color: #64748b; border: 1px solid #e2e8f0;">
                <p style="font-size: 1.1rem; font-weight: 600;">${dictionary.noMedicine}</p>
                <p style="font-size: 0.85rem; color: #94a3b8; margin-top: 5px;">${dictionary.trySearching}</p>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map(med => `
        <div class="med-card" onclick="openDetails('${med.name}', '${med.brand}', '${med.category}', '${med.eng}', '${med.jan}', '${med.gov}', '${med.save}')">
            <div class="med-info">
                <div class="med-icon"><i class="fa-solid fa-pills"></i></div>
                <div>
                    <div class="med-title-row">
                        <h3>${getLocalizedMedicine(med).name}</h3>
                        <span class="save-badge">${dictionary.saveUpToShort} ${med.save}</span>
                    </div>
                    <p class="med-cat">${getLocalizedMedicine(med).category} • ${dictionary.brandedLabel}: <span style="color: #0f766e; font-weight:500;">${getLocalizedMedicine(med).brand}</span></p>
                    
                    <div class="price-breakdown">
                        <div><small>${dictionary.englishBranded}</small><p>₹${med.eng} <span class="subtext">(10 ${dictionary.tabs})</span></p></div>
                        <div><small>${dictionary.janAushadhi}</small><p style="color:#0d9488;">₹${med.jan} <span class="subtext">(10 ${dictionary.tabs})</span></p></div>
                        <div><small>${dictionary.government}</small><p style="color:#059669;">₹${med.gov} <span class="subtext">(10 ${dictionary.tabs})</span></p></div>
                    </div>
                </div>
            </div>
            <button class="view-btn">${dictionary.viewDetails}</button>
        </div>
    `).join('');
}

function requestUserGPSLocation() {
    const cityTitle = document.getElementById('map-city-title');
    const storeContainer = document.getElementById('dynamic-store-list');
    const pin1Text = document.getElementById('pin-1-text');
    const pin2Text = document.getElementById('pin-2-text');

    if (navigator.geolocation) {
        if(cityTitle) cityTitle.innerText = "DETECTING GPS & CALCULATING DISTANCE...";
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;
                
                if(cityTitle) cityTitle.innerText = `YOUR LIVE LOCATION DETECTED`;

                const sortedStores = storesCoordinates.map(store => {
                    const dist = calculateDistance(userLat, userLon, store.lat, store.lon);
                    return {
                        ...store,
                        distNum: parseFloat(dist),
                        distText: dist + " km",
                        mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lon}`
                    };
                }).sort((a, b) => a.distNum - b.distNum);

                if(pin1Text && sortedStores[0]) pin1Text.innerText = `${sortedStores[0].name} (${sortedStores[0].distText})`;
                if(pin2Text && sortedStores[1]) pin2Text.innerText = `${sortedStores[1].name} (${sortedStores[1].distText})`;

                if(storeContainer) {
                    storeContainer.innerHTML = sortedStores.map(store => `
                        ${(() => { const localizedStore = getLocalizedStore(store); return `
                        <div class="store-card">
                            <div class="med-info">
                                <div class="med-icon" style="background:#f0fdfa; color:#0d9488;"><i class="fa-solid fa-location-dot"></i></div>
                                <div>
                                    <h3>${localizedStore.name}</h3>
                                    <p class="med-cat"><i class="fa-solid fa-map-pin"></i> ${localizedStore.address}</p>
                                        <p class="time-text"><i class="fa-regular fa-clock"></i> ${localizedStore.timing}</p>
                                </div>
                            </div>
                            <div class="store-right">
                                <span class="distance-tag">${store.distText}</span>
                                <a href="${store.mapsUrl}" target="_blank" class="primary-btn sm"><i class="fa-solid fa-location-arrow"></i> ${translations[currentLanguage].directions}</a>
                            </div>
                        </div>`; })()}
                    `).join('');
                }
            },
            (error) => {
                if(cityTitle) cityTitle.innerText = "MOHALI, PUNJAB (DEFAULT)";
                loadDefaultStoresFallback();
            },
            { timeout: 10000, enableHighAccuracy: true }
        );
    } else {
        loadDefaultStoresFallback();
    }
}

function loadDefaultStoresFallback() {
    const storeContainer = document.getElementById('dynamic-store-list');
    const defaultStores = [
        { name: "Jan Aushadhi Kendra", address: "Phase 7, Mohali", distText: "0.8 km", timing: "09:00 AM - 7:00 PM", mapsUrl: "https://www.google.com/maps/search/Jan+Aushadhi+Kendra+Mohali" },
        { name: "Govt Civil Hospital Store", address: "Phase 6, Mohali", distText: "1.5 km", timing: "08:30 AM - 4:00 PM", mapsUrl: "https://www.google.com/maps/search/Government+Hospital+Mohali" }
    ];

    if(storeContainer) {
        storeContainer.innerHTML = defaultStores.map(store => `
            ${(() => { const localizedStore = getLocalizedStore(store); return `
            <div class="store-card">
                <div class="med-info">
                    <div class="med-icon" style="background:#f0fdfa; color:#0d9488;"><i class="fa-solid fa-location-dot"></i></div>
                    <div>
                        <h3>${localizedStore.name}</h3>
                        <p class="med-cat"><i class="fa-solid fa-map-pin"></i> ${localizedStore.address}</p>
                        <p class="time-text"><i class="fa-regular fa-clock"></i> ${localizedStore.timing}</p>
                    </div>
                </div>
                <div class="store-right">
                    <span class="distance-tag">${store.distText}</span>
                    <a href="${store.mapsUrl}" target="_blank" class="primary-btn sm"><i class="fa-solid fa-location-arrow"></i> ${translations[currentLanguage].directions}</a>
                </div>
            </div>`; })()}
        `).join('');
    }
}

let currentDetailMedicine = {
    name: 'Paracetamol 500 mg',
    brand: 'Standard Brand',
    category: 'Pain Relief / Fever'
};

function openDetails(name, brand, category, eng, jan, gov, save) {
    currentDetailMedicine = { name, brand, category };
    const localized = getLocalizedMedicine(currentDetailMedicine);
    const displayName = localized.name;
    document.getElementById('detail-med-name').innerText = displayName;
    document.getElementById('detail-med-cat').innerHTML = `${localized.category} • ${translations[currentLanguage].brandedLabel}: <span style="color: #0f766e; font-weight:500;">${localized.brand}</span>`;
    document.getElementById('detail-save-pct').innerText = save;
    
    document.getElementById('table-brand-name').innerText = brand;
    document.getElementById('table-eng-price').innerText = '₹' + eng;
    document.getElementById('table-jan-price').innerText = '₹' + jan;
    document.getElementById('table-gov-price').innerText = '₹' + gov;
    
    document.getElementById('table-med-name-1').innerText = displayName;
    document.getElementById('table-med-name-2').innerText = displayName;

    switchPage('details');
}

const translations = {
    en: {
        pageTitle: 'MedicineCare - Affordable & Safe', brandTagline: 'Affordable • Safe', navHome: 'Home', navSearch: 'Search',
        navStores: 'Nearby Stores', navSafety: 'Safety & Info', authLogin: 'Login / Sign Up', heroBadge: 'Same Medicine • Different Prices • Big Savings!',
        heroTitle: 'Right Medicine<br>Right Price', heroDescription: 'Compare prices of branded, Jan Aushadhi and Government medicines. Save money. Stay safe.',
        homeSearchPlaceholder: 'Enter disease or medicine...', searchPlaceholder: 'Search by disease, salt or medicine...',
        searchButton: 'Search', saveUpTo: 'Save up to 80%', saveUpToShort: 'Save up to', saveDescription: 'Switch to Jan Aushadhi alternatives and cut your monthly medical bills.',
        comparePrices: 'Compare Prices', compareDescription: 'Find cheapest option across government & generic stores.', genuineMedicine: 'Genuine Medicine',
        genuineDescription: 'Avoid fake drugs with verified batch & salt tracking.', findNearby: 'Find Nearby', nearbyDescription: 'Jan Aushadhi / Govt Stores near your exact location.',
        safeReliable: 'Safe & Reliable', safeDescription: 'Verified sources and trusted information for patients.', healthQuote: 'Because your health should not be expensive!',
        all: 'All', branded: 'Branded (English)', janAushadhi: 'Jan Aushadhi', government: 'Government', allMedicines: 'All Medicines',
        showingMedicines: 'Showing medicines', brandedLabel: 'Branded', directions: 'Directions', backResults: 'Back to Results', saveByChoosing: 'by choosing Jan Aushadhi / Govt',
        priceComparison: 'Price Comparison', source: 'Source', brandSalt: 'Brand / Salt', pricePerPack: 'Price (per pack)', savings: 'Savings',
        englishBranded: 'English (Branded)', chooseWisely: 'Same medicine. Different prices. Choose wisely!',
        consultDoctor: 'Always consult a doctor or pharmacist before switching medicine.', findNearestStores: 'Find Nearest Stores',
        nearestStores: 'Nearest Jan Aushadhi / Government Stores', gpsDescription: 'Use your live GPS location to calculate exact distance.',
        useGps: 'Use Live GPS Location', safetyTitle: 'How We Ensure Safe & Genuine Medicine?',
        safetyDescription: 'Your safety is our utmost priority. Learn about our verification process.', verifiedSources: 'Verified Sources',
        verifiedDescription: 'We show medicines directly from authorized Jan Aushadhi Kendras, Government stores, and trusted pharmaceutical directories.',
        genuineSafetyDescription: 'Only government-approved generic equivalents with identical active pharmaceutical ingredients (salts) are recommended.',
        doctorAdvice: 'Doctor / Pharmacist Advice', doctorDescription: 'Always consult a qualified doctor before switching any medicine or starting a new dosage plan.',
        fakeMedicine: 'Beware of Fake Medicines', fakeDescription: 'Avoid random unverified online sellers. Always check the batch number, manufacturing date, and physical seal.',
        safetyQuote: 'Your health is precious. Choose safe. Choose verified.', closeLogin: 'Close login form', accountLabel: 'MedicineCare account',
        welcomeBack: 'Welcome back', loginSubtitle: 'Save medicines and access your health preferences.', login: 'Login',
        createAccount: 'Create account', fullName: 'Full name', namePlaceholder: 'Enter your name', emailOrPhone: 'Email or phone number',
        identifierPlaceholder: 'you@example.com or 10-digit number', password: 'Password', passwordPlaceholder: 'Minimum 6 characters',
        showPassword: 'Show password', hidePassword: 'Hide password', confirmPassword: 'Confirm password',
        confirmPasswordPlaceholder: 'Re-enter your password', loginSecurely: 'Login securely', sessionNote: 'Your demo session is stored only in this browser.',
        signupSubtitle: 'Get a simpler way to compare and save on medicines.', createAccountButton: 'Create account',
        nameRequired: 'Please enter your full name.', identifierRequired: 'Email or phone number is required.',
        identifierInvalid: 'Enter a valid email or 10-digit Indian phone number.', passwordShort: 'Password must be at least 6 characters.',
        passwordsMismatch: 'Passwords do not match.', accountCreated: 'Account created successfully.', loginSuccess: 'Login successful.',
        logoutConfirm: 'Logout from MedicineCare?', hi: 'Hi', languageSelector: 'Select language', resultsFor: 'Results for', allAvailable: 'All Medicines', available: 'Available',
        showing: 'Showing', medicines: 'medicines', tabs: 'tabs', viewDetails: 'View Details', noMedicine: 'No medicine or disease found.',
        trySearching: 'Try searching', voiceSearch: 'Voice search', voiceSearchUnsupported: 'Voice search is not supported in this browser.',
        voiceSearchError: 'Voice search could not be completed. Please try again.',
        voiceSearchPermissionDenied: 'Microphone permission was denied. Please allow microphone access and try again.'
    },
    hi: {
        pageTitle: 'MedicineCare - सस्ती और सुरक्षित', brandTagline: 'सस्ती • सुरक्षित', navHome: 'होम', navSearch: 'खोजें',
        navStores: 'नज़दीकी स्टोर', navSafety: 'सुरक्षा और जानकारी', authLogin: 'लॉगिन / साइन अप', heroBadge: 'एक ही दवा • अलग कीमतें • बड़ी बचत!',
        heroTitle: 'सही दवा<br>सही दाम', heroDescription: 'ब्रांडेड, जन औषधि और सरकारी दवाओं की कीमतों की तुलना करें। पैसे बचाएं और सुरक्षित रहें।',
        homeSearchPlaceholder: 'बीमारी या दवा दर्ज करें...', searchPlaceholder: 'बीमारी, साल्ट या दवा से खोजें...',
        searchButton: 'खोजें', saveUpTo: '80% तक बचत', saveUpToShort: 'बचत तक', saveDescription: 'जन औषधि के विकल्प चुनें और अपने मासिक मेडिकल खर्च को कम करें।',
        comparePrices: 'कीमतों की तुलना', compareDescription: 'सरकारी और जेनेरिक स्टोर में सबसे सस्ता विकल्प खोजें।', genuineMedicine: 'असली दवा',
        genuineDescription: 'सत्यापित बैच और साल्ट ट्रैकिंग से नकली दवाओं से बचें।', findNearby: 'नज़दीकी खोजें', nearbyDescription: 'अपने स्थान के पास जन औषधि / सरकारी स्टोर खोजें।',
        safeReliable: 'सुरक्षित और भरोसेमंद', safeDescription: 'मरीजों के लिए सत्यापित स्रोत और भरोसेमंद जानकारी।', healthQuote: 'आपका स्वास्थ्य महंगा नहीं होना चाहिए!',
        all: 'सभी', branded: 'ब्रांडेड (अंग्रेज़ी)', janAushadhi: 'जन औषधि', government: 'सरकारी', allMedicines: 'सभी दवाएं',
        showingMedicines: 'दवाएं दिखाई जा रही हैं', backResults: 'परिणामों पर वापस', saveByChoosing: 'जन औषधि / सरकारी चुनकर',
        priceComparison: 'कीमत तुलना', source: 'स्रोत', brandSalt: 'ब्रांड / साल्ट', pricePerPack: 'कीमत (प्रति पैक)', savings: 'बचत',
        englishBranded: 'अंग्रेज़ी (ब्रांडेड)', chooseWisely: 'एक ही दवा। अलग कीमतें। समझदारी से चुनें!',
        consultDoctor: 'दवा बदलने से पहले डॉक्टर या फार्मासिस्ट से सलाह लें।', findNearestStores: 'नज़दीकी स्टोर खोजें',
        nearestStores: 'नज़दीकी जन औषधि / सरकारी स्टोर', gpsDescription: 'सटीक दूरी जानने के लिए अपना लाइव GPS इस्तेमाल करें।',
        useGps: 'लाइव GPS इस्तेमाल करें', safetyTitle: 'हम सुरक्षित और असली दवा कैसे सुनिश्चित करते हैं?',
        safetyDescription: 'आपकी सुरक्षा हमारी प्राथमिकता है। हमारी सत्यापन प्रक्रिया जानें।', verifiedSources: 'सत्यापित स्रोत',
        verifiedDescription: 'हम अधिकृत जन औषधि केंद्रों, सरकारी स्टोर और भरोसेमंद फार्मास्युटिकल निर्देशिकाओं से दवाएं दिखाते हैं।',
        genuineSafetyDescription: 'केवल समान सक्रिय फार्मास्युटिकल सामग्री (साल्ट) वाले सरकारी-अनुमोदित जेनेरिक विकल्प सुझाए जाते हैं।',
        doctorAdvice: 'डॉक्टर / फार्मासिस्ट की सलाह', doctorDescription: 'दवा बदलने या नई खुराक शुरू करने से पहले योग्य डॉक्टर से सलाह लें।',
        fakeMedicine: 'नकली दवाओं से सावधान', fakeDescription: 'असत्यापित ऑनलाइन विक्रेताओं से बचें। बैच नंबर, निर्माण तिथि और सील जरूर जांचें।',
        safetyQuote: 'आपका स्वास्थ्य अनमोल है। सुरक्षित और सत्यापित विकल्प चुनें।', closeLogin: 'लॉगिन फॉर्म बंद करें', accountLabel: 'MedicineCare खाता',
        welcomeBack: 'वापसी पर स्वागत है', loginSubtitle: 'दवाएं सेव करें और अपनी स्वास्थ्य प्राथमिकताओं तक पहुंचें।', login: 'लॉगिन',
        createAccount: 'खाता बनाएं', fullName: 'पूरा नाम', namePlaceholder: 'अपना नाम दर्ज करें', emailOrPhone: 'ईमेल या फोन नंबर',
        identifierPlaceholder: 'you@example.com या 10 अंकों का नंबर', password: 'पासवर्ड', passwordPlaceholder: 'कम से कम 6 अक्षर',
        showPassword: 'पासवर्ड दिखाएं', hidePassword: 'पासवर्ड छिपाएं', confirmPassword: 'पासवर्ड की पुष्टि करें',
        confirmPasswordPlaceholder: 'पासवर्ड फिर से दर्ज करें', loginSecurely: 'सुरक्षित लॉगिन', sessionNote: 'आपका डेमो सेशन केवल इसी ब्राउज़र में सेव है।',
        signupSubtitle: 'दवाओं की तुलना और बचत का आसान तरीका पाएं।', createAccountButton: 'खाता बनाएं', nameRequired: 'कृपया अपना पूरा नाम दर्ज करें।',
        identifierRequired: 'ईमेल या फोन नंबर जरूरी है।', identifierInvalid: 'मान्य ईमेल या 10 अंकों का भारतीय फोन नंबर दर्ज करें।',
        passwordShort: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।', passwordsMismatch: 'पासवर्ड मेल नहीं खाते।', accountCreated: 'खाता सफलतापूर्वक बन गया।',
        loginSuccess: 'लॉगिन सफल रहा।', logoutConfirm: 'MedicineCare से लॉगआउट करें?', hi: 'नमस्ते', languageSelector: 'भाषा चुनें', resultsFor: 'परिणाम',
        allAvailable: 'सभी दवाएं', available: 'उपलब्ध', showing: 'दिखाई जा रही हैं', medicines: 'दवाएं', tabs: 'टैब', brandedLabel: 'ब्रांडेड', directions: 'दिशा-निर्देश',
        viewDetails: 'विवरण देखें', noMedicine: 'कोई दवा या बीमारी नहीं मिली।', trySearching: 'खोजें', voiceSearch: 'वॉइस सर्च',
        voiceSearchUnsupported: 'इस ब्राउज़र में वॉइस सर्च समर्थित नहीं है।', voiceSearchError: 'वॉइस सर्च पूरा नहीं हो सका। कृपया फिर कोशिश करें।',
        voiceSearchPermissionDenied: 'माइक्रोफ़ोन की अनुमति नहीं मिली। माइक्रोफ़ोन एक्सेस की अनुमति देकर फिर कोशिश करें।'
    },
    pa: {
        pageTitle: 'MedicineCare - ਸਸਤੀ ਅਤੇ ਸੁਰੱਖਿਅਤ', brandTagline: 'ਸਸਤੀ • ਸੁਰੱਖਿਅਤ', navHome: 'ਹੋਮ', navSearch: 'ਖੋਜ',
        navStores: 'ਨੇੜਲੇ ਸਟੋਰ', navSafety: 'ਸੁਰੱਖਿਆ ਅਤੇ ਜਾਣਕਾਰੀ', authLogin: 'ਲੌਗਇਨ / ਸਾਈਨ ਅੱਪ', heroBadge: 'ਇੱਕੋ ਦਵਾਈ • ਵੱਖਰੀਆਂ ਕੀਮਤਾਂ • ਵੱਡੀ ਬੱਚਤ!',
        heroTitle: 'ਸਹੀ ਦਵਾਈ<br>ਸਹੀ ਕੀਮਤ', heroDescription: 'ਬ੍ਰਾਂਡਡ, ਜਨ ਔਸ਼ਧੀ ਅਤੇ ਸਰਕਾਰੀ ਦਵਾਈਆਂ ਦੀਆਂ ਕੀਮਤਾਂ ਦੀ ਤੁਲਨਾ ਕਰੋ। ਪੈਸੇ ਬਚਾਓ ਅਤੇ ਸੁਰੱਖਿਅਤ ਰਹੋ।',
        homeSearchPlaceholder: 'ਬਿਮਾਰੀ ਜਾਂ ਦਵਾਈ ਦਰਜ ਕਰੋ...', searchPlaceholder: 'ਬਿਮਾਰੀ, ਸਾਲਟ ਜਾਂ ਦਵਾਈ ਨਾਲ ਖੋਜੋ...',
        searchButton: 'ਖੋਜੋ', saveUpTo: '80% ਤੱਕ ਬੱਚਤ', saveUpToShort: 'ਬੱਚਤ ਤੱਕ', saveDescription: 'ਜਨ ਔਸ਼ਧੀ ਦੇ ਵਿਕਲਪ ਚੁਣੋ ਅਤੇ ਮਹੀਨਾਵਾਰ ਮੈਡੀਕਲ ਖਰਚ ਘਟਾਓ।',
        comparePrices: 'ਕੀਮਤਾਂ ਦੀ ਤੁਲਨਾ', compareDescription: 'ਸਰਕਾਰੀ ਅਤੇ ਜੈਨਰਿਕ ਸਟੋਰਾਂ ਵਿੱਚ ਸਭ ਤੋਂ ਸਸਤਾ ਵਿਕਲਪ ਲੱਭੋ।', genuineMedicine: 'ਅਸਲੀ ਦਵਾਈ',
        genuineDescription: 'ਤਸਦੀਕਸ਼ੁਦਾ ਬੈਚ ਅਤੇ ਸਾਲਟ ਟਰੈਕਿੰਗ ਨਾਲ ਨਕਲੀ ਦਵਾਈਆਂ ਤੋਂ ਬਚੋ।', findNearby: 'ਨੇੜੇ ਲੱਭੋ', nearbyDescription: 'ਆਪਣੀ ਥਾਂ ਦੇ ਨੇੜੇ ਜਨ ਔਸ਼ਧੀ / ਸਰਕਾਰੀ ਸਟੋਰ ਲੱਭੋ।',
        safeReliable: 'ਸੁਰੱਖਿਅਤ ਅਤੇ ਭਰੋਸੇਯੋਗ', safeDescription: 'ਮਰੀਜ਼ਾਂ ਲਈ ਤਸਦੀਕਸ਼ੁਦਾ ਸਰੋਤ ਅਤੇ ਭਰੋਸੇਯੋਗ ਜਾਣਕਾਰੀ।', healthQuote: 'ਤੁਹਾਡੀ ਸਿਹਤ ਮਹਿੰਗੀ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ!',
        all: 'ਸਾਰੇ', branded: 'ਬ੍ਰਾਂਡਡ (ਅੰਗਰੇਜ਼ੀ)', janAushadhi: 'ਜਨ ਔਸ਼ਧੀ', government: 'ਸਰਕਾਰੀ', allMedicines: 'ਸਾਰੀਆਂ ਦਵਾਈਆਂ',
        showingMedicines: 'ਦਵਾਈਆਂ ਦਿਖਾਈਆਂ ਜਾ ਰਹੀਆਂ ਹਨ', backResults: 'ਨਤੀਜਿਆਂ ’ਤੇ ਵਾਪਸ', saveByChoosing: 'ਜਨ ਔਸ਼ਧੀ / ਸਰਕਾਰੀ ਚੁਣ ਕੇ',
        priceComparison: 'ਕੀਮਤ ਦੀ ਤੁਲਨਾ', source: 'ਸਰੋਤ', brandSalt: 'ਬ੍ਰਾਂਡ / ਸਾਲਟ', pricePerPack: 'ਕੀਮਤ (ਪੈਕ ਪ੍ਰਤੀ)', savings: 'ਬੱਚਤ',
        englishBranded: 'ਅੰਗਰੇਜ਼ੀ (ਬ੍ਰਾਂਡਡ)', chooseWisely: 'ਇੱਕੋ ਦਵਾਈ। ਵੱਖਰੀਆਂ ਕੀਮਤਾਂ। ਸਮਝਦਾਰੀ ਨਾਲ ਚੁਣੋ!',
        consultDoctor: 'ਦਵਾਈ ਬਦਲਣ ਤੋਂ ਪਹਿਲਾਂ ਡਾਕਟਰ ਜਾਂ ਫਾਰਮਾਸਿਸਟ ਨਾਲ ਸਲਾਹ ਕਰੋ।', findNearestStores: 'ਨੇੜਲੇ ਸਟੋਰ ਲੱਭੋ',
        nearestStores: 'ਨੇੜਲੇ ਜਨ ਔਸ਼ਧੀ / ਸਰਕਾਰੀ ਸਟੋਰ', gpsDescription: 'ਸਹੀ ਦੂਰੀ ਜਾਣਨ ਲਈ ਲਾਈਵ GPS ਵਰਤੋ।',
        useGps: 'ਲਾਈਵ GPS ਵਰਤੋ', safetyTitle: 'ਅਸੀਂ ਸੁਰੱਖਿਅਤ ਅਤੇ ਅਸਲੀ ਦਵਾਈ ਕਿਵੇਂ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹਾਂ?',
        safetyDescription: 'ਤੁਹਾਡੀ ਸੁਰੱਖਿਆ ਸਾਡੀ ਪਹਿਲ ਹੈ। ਸਾਡੀ ਤਸਦੀਕ ਪ੍ਰਕਿਰਿਆ ਬਾਰੇ ਜਾਣੋ।', verifiedSources: 'ਤਸਦੀਕਸ਼ੁਦਾ ਸਰੋਤ',
        verifiedDescription: 'ਅਸੀਂ ਅਧਿਕਾਰਤ ਜਨ ਔਸ਼ਧੀ ਕੇਂਦਰਾਂ, ਸਰਕਾਰੀ ਸਟੋਰਾਂ ਅਤੇ ਭਰੋਸੇਯੋਗ ਫਾਰਮਾਸਿਊਟੀਕਲ ਡਾਇਰੈਕਟਰੀਆਂ ਤੋਂ ਦਵਾਈਆਂ ਦਿਖਾਉਂਦੇ ਹਾਂ।',
        genuineSafetyDescription: 'ਸਿਰਫ਼ ਇੱਕੋ ਸਰਗਰਮ ਫਾਰਮਾਸਿਊਟੀਕਲ ਸਮੱਗਰੀ (ਸਾਲਟ) ਵਾਲੇ ਸਰਕਾਰੀ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਜੈਨਰਿਕ ਵਿਕਲਪ ਸੁਝਾਏ ਜਾਂਦੇ ਹਨ।',
        doctorAdvice: 'ਡਾਕਟਰ / ਫਾਰਮਾਸਿਸਟ ਦੀ ਸਲਾਹ', doctorDescription: 'ਦਵਾਈ ਬਦਲਣ ਜਾਂ ਨਵੀਂ ਖੁਰਾਕ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਯੋਗ ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ।',
        fakeMedicine: 'ਨਕਲੀ ਦਵਾਈਆਂ ਤੋਂ ਸਾਵਧਾਨ', fakeDescription: 'ਬਿਨਾਂ ਤਸਦੀਕ ਵਾਲੇ ਆਨਲਾਈਨ ਵਿਕਰੇਤਿਆਂ ਤੋਂ ਬਚੋ। ਬੈਚ ਨੰਬਰ, ਬਣਾਉਣ ਦੀ ਮਿਤੀ ਅਤੇ ਸੀਲ ਜਾਂਚੋ।',
        safetyQuote: 'ਤੁਹਾਡੀ ਸਿਹਤ ਕੀਮਤੀ ਹੈ। ਸੁਰੱਖਿਅਤ ਅਤੇ ਤਸਦੀਕਸ਼ੁਦਾ ਚੋਣ ਕਰੋ।', closeLogin: 'ਲੌਗਇਨ ਫਾਰਮ ਬੰਦ ਕਰੋ', accountLabel: 'MedicineCare ਖਾਤਾ',
        welcomeBack: 'ਜੀ ਆਇਆਂ ਨੂੰ', loginSubtitle: 'ਦਵਾਈਆਂ ਸੇਵ ਕਰੋ ਅਤੇ ਆਪਣੀਆਂ ਸਿਹਤ ਪਸੰਦਾਂ ਤੱਕ ਪਹੁੰਚੋ।', login: 'ਲੌਗਇਨ',
        createAccount: 'ਖਾਤਾ ਬਣਾਓ', fullName: 'ਪੂਰਾ ਨਾਮ', namePlaceholder: 'ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ', emailOrPhone: 'ਈਮੇਲ ਜਾਂ ਫੋਨ ਨੰਬਰ',
        identifierPlaceholder: 'you@example.com ਜਾਂ 10 ਅੰਕਾਂ ਦਾ ਨੰਬਰ', password: 'ਪਾਸਵਰਡ', passwordPlaceholder: 'ਘੱਟੋ-ਘੱਟ 6 ਅੱਖਰ',
        showPassword: 'ਪਾਸਵਰਡ ਦਿਖਾਓ', hidePassword: 'ਪਾਸਵਰਡ ਲੁਕਾਓ', confirmPassword: 'ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ',
        confirmPasswordPlaceholder: 'ਪਾਸਵਰਡ ਦੁਬਾਰਾ ਦਰਜ ਕਰੋ', loginSecurely: 'ਸੁਰੱਖਿਅਤ ਲੌਗਇਨ', sessionNote: 'ਤੁਹਾਡਾ ਡੈਮੋ ਸੈਸ਼ਨ ਸਿਰਫ਼ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੇਵ ਹੈ।',
        signupSubtitle: 'ਦਵਾਈਆਂ ਦੀ ਤੁਲਨਾ ਅਤੇ ਬੱਚਤ ਦਾ ਸੌਖਾ ਤਰੀਕਾ ਪਾਓ।', createAccountButton: 'ਖਾਤਾ ਬਣਾਓ', nameRequired: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ।',
        identifierRequired: 'ਈਮੇਲ ਜਾਂ ਫੋਨ ਨੰਬਰ ਲਾਜ਼ਮੀ ਹੈ।', identifierInvalid: 'ਸਹੀ ਈਮੇਲ ਜਾਂ 10 ਅੰਕਾਂ ਦਾ ਭਾਰਤੀ ਫੋਨ ਨੰਬਰ ਦਰਜ ਕਰੋ।',
        passwordShort: 'ਪਾਸਵਰਡ ਘੱਟੋ-ਘੱਟ 6 ਅੱਖਰਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।', passwordsMismatch: 'ਪਾਸਵਰਡ ਮੇਲ ਨਹੀਂ ਖਾਂਦੇ।', accountCreated: 'ਖਾਤਾ ਸਫਲਤਾਪੂਰਵਕ ਬਣ ਗਿਆ।',
        loginSuccess: 'ਲੌਗਇਨ ਸਫਲ ਰਿਹਾ।', logoutConfirm: 'MedicineCare ਤੋਂ ਲੌਗਆਉਟ ਕਰਨਾ ਹੈ?', hi: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', languageSelector: 'ਭਾਸ਼ਾ ਚੁਣੋ', resultsFor: 'ਨਤੀਜੇ',
        allAvailable: 'ਸਾਰੀਆਂ ਦਵਾਈਆਂ', available: 'ਉਪਲਬਧ', showing: 'ਦਿਖਾਈਆਂ ਜਾ ਰਹੀਆਂ ਹਨ', medicines: 'ਦਵਾਈਆਂ', tabs: 'ਟੈਬ', brandedLabel: 'ਬ੍ਰਾਂਡਡ', directions: 'ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼',
        viewDetails: 'ਵੇਰਵੇ ਵੇਖੋ', noMedicine: 'ਕੋਈ ਦਵਾਈ ਜਾਂ ਬਿਮਾਰੀ ਨਹੀਂ ਮਿਲੀ।', trySearching: 'ਖੋਜੋ', voiceSearch: 'ਵੌਇਸ ਖੋਜ',
        voiceSearchUnsupported: 'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੌਇਸ ਖੋਜ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ।', voiceSearchError: 'ਵੌਇਸ ਖੋਜ ਪੂਰੀ ਨਹੀਂ ਹੋ ਸਕੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
        voiceSearchPermissionDenied: 'ਮਾਈਕ੍ਰੋਫੋਨ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਮਿਲੀ। ਮਾਈਕ੍ਰੋਫੋਨ ਐਕਸੈਸ ਦੀ ਇਜਾਜ਼ਤ ਦੇ ਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।'
    }
};

const localizedMedicineNames = {
    hi: {
        Paracetamol: 'पैरासिटामोल', Ibuprofen: 'इबुप्रोफेन', Cetirizine: 'सेटिरीज़िन', Metformin: 'मेटफॉर्मिन',
        Amoxycillin: 'एमोक्सिसिलिन', Clavulanate: 'क्लैवुलानेट', Azithromycin: 'एज़िथ्रोमाइसिन', Pantoprazole: 'पैंटोप्राज़ोल',
        Atorvastatin: 'एटोरवास्टेटिन', Amlodipine: 'एम्लोडिपिन', Telmisartan: 'टेल्मिसार्टन', Diclofenac: 'डिक्लोफेनाक',
        Sodium: 'सोडियम', Omeprazole: 'ओमेप्राज़ोल', Rabeprazole: 'रैबेप्राज़ोल', Levocetirizine: 'लेवोसेटिरीज़िन',
        Montelukast: 'मोंटेलुकास्ट', Ciprofloxacin: 'सिप्रोफ्लॉक्सासिन', Cefixime: 'सेफिक्सिम', Doxycycline: 'डॉक्सीसाइक्लिन',
        Glimepiride: 'ग्लिमेपिराइड', Rosuvastatin: 'रोसुवास्टेटिन', Clopidogrel: 'क्लोपिडोग्रेल', Aspirin: 'एस्पिरिन',
        Ranitidine: 'रैनिटिडिन', Domperidone: 'डोमपेरिडोन', Ondansetron: 'ओन्डैनसेट्रॉन', Fexofenadine: 'फेक्सोफेनाडिन',
        Vitamin: 'विटामिन', Methylcobalamin: 'मिथाइलकोबालामिन', Calcium: 'कैल्शियम', Carbonate: 'कार्बोनेट',
        Folic: 'फोलिक', Acid: 'एसिड', Ferrous: 'फेरस', Ascorbate: 'एस्कॉर्बेट', Levothyroxine: 'लेवोथायरोक्सिन',
        Fluconazole: 'फ्लुकोनाज़ोल', Itraconazole: 'इट्राकोनाज़ोल', Aceclofenac: 'ऐसिक्लोफेनाक', Mefenamic: 'मेफेनामिक',
        Tramadol: 'ट्रामाडोल', Norfloxacin: 'नॉरफ्लॉक्सासिन', Teneligliptin: 'टेनिलिग्लिप्टिन', Voglibose: 'वोग्लिबोज़',
        Atenolol: 'एटेनोलोल', Losartan: 'लोसार्टन', Spironolactone: 'स्पाइरोनोलैक्टोन', Furosemide: 'फ्यूरोसेमाइड',
        Prednisolone: 'प्रेडनिसोलोन', Salbutamol: 'सैल्बुटामोल', Ambroxol: 'एम्ब्रोक्सोल', Dicyclomine: 'डाइसाइक्लोमिन',
        Multivitamin: 'मल्टीविटामिन', Capsules: 'कैप्सूल', Silymarin: 'सिलीमारिन', Ursodeoxycholic: 'उर्सोडिऑक्सिकोलिक',
        Allopurinol: 'एलोप्यूरिनोल', Febuxostat: 'फेबक्सोस्टैट', Pregabalin: 'प्रेगाबालिन'
    },
    pa: {
        Paracetamol: 'ਪੈਰਾਸੀਟਾਮੋਲ', Ibuprofen: 'ਆਈਬੂਪ੍ਰੋਫੇਨ', Cetirizine: 'ਸੇਟੀਰੀਜ਼ਿਨ', Metformin: 'ਮੈਟਫੋਰਮਿਨ',
        Amoxycillin: 'ਐਮੋਕਸੀਸਿਲਿਨ', Clavulanate: 'ਕਲੈਵੂਲਾਨੇਟ', Azithromycin: 'ਐਜ਼ੀਥਰੋਮਾਈਸਿਨ', Pantoprazole: 'ਪੈਂਟੋਪ੍ਰਾਜ਼ੋਲ',
        Atorvastatin: 'ਐਟੋਰਵਾਸਟੇਟਿਨ', Amlodipine: 'ਐਮਲੋਡੀਪਿਨ', Telmisartan: 'ਟੈਲਮਿਸਾਰਟਨ', Diclofenac: 'ਡਾਈਕਲੋਫੇਨਾਕ',
        Sodium: 'ਸੋਡੀਅਮ', Omeprazole: 'ਓਮੇਪ੍ਰਾਜ਼ੋਲ', Rabeprazole: 'ਰੈਬੇਪ੍ਰਾਜ਼ੋਲ', Levocetirizine: 'ਲੇਵੋਸੇਟੀਰੀਜ਼ਿਨ',
        Montelukast: 'ਮੋਂਟੇਲੂਕਾਸਟ', Ciprofloxacin: 'ਸਿਪ੍ਰੋਫਲੋਕਸਾਸਿਨ', Cefixime: 'ਸੇਫਿਕਸਿਮ', Doxycycline: 'ਡੌਕਸੀਸਾਈਕਲਿਨ',
        Glimepiride: 'ਗਲਾਈਮੇਪਿਰਾਈਡ', Rosuvastatin: 'ਰੋਸੂਵਾਸਟੇਟਿਨ', Clopidogrel: 'ਕਲੋਪੀਡੋਗ੍ਰੇਲ', Aspirin: 'ਐਸਪਿਰਿਨ',
        Ranitidine: 'ਰੈਨਿਟਿਡਿਨ', Domperidone: 'ਡੌਮਪੇਰੀਡੋਨ', Ondansetron: 'ਓਂਡੈਨਸੈਟਰੋਨ', Fexofenadine: 'ਫੈਕਸੋਫੇਨਾਡਿਨ',
        Vitamin: 'ਵਿਟਾਮਿਨ', Methylcobalamin: 'ਮੈਥਾਈਲਕੋਬਾਲਾਮਿਨ', Calcium: 'ਕੈਲਸ਼ੀਅਮ', Carbonate: 'ਕਾਰਬੋਨੇਟ',
        Folic: 'ਫੋਲਿਕ', Acid: 'ਐਸਿਡ', Ferrous: 'ਫੈਰਸ', Ascorbate: 'ਐਸਕੋਰਬੇਟ', Levothyroxine: 'ਲੇਵੋਥਾਇਰੋਕਸਿਨ',
        Fluconazole: 'ਫਲੂਕੋਨਾਜ਼ੋਲ', Itraconazole: 'ਇਟਰਾਕੋਨਾਜ਼ੋਲ', Aceclofenac: 'ਐਸੀਕਲੋਫੇਨਾਕ', Mefenamic: 'ਮੇਫੇਨਾਮਿਕ',
        Tramadol: 'ਟ੍ਰਾਮਾਡੋਲ', Norfloxacin: 'ਨੌਰਫਲੋਕਸਾਸਿਨ', Teneligliptin: 'ਟੈਨਿਲਿਗਲਿਪਟਿਨ', Voglibose: 'ਵੋਗਲੀਬੋਜ਼',
        Atenolol: 'ਐਟੇਨੋਲੋਲ', Losartan: 'ਲੋਸਾਰਟਨ', Spironolactone: 'ਸਪਾਇਰੋਨੋਲੈਕਟੋਨ', Furosemide: 'ਫਿਊਰੋਸੇਮਾਈਡ',
        Prednisolone: 'ਪ੍ਰੈਡਨਿਸੋਲੋਨ', Salbutamol: 'ਸੈਲਬਿਊਟਾਮੋਲ', Ambroxol: 'ਐਂਬਰੋਕਸੋਲ', Dicyclomine: 'ਡਾਈਸਾਈਕਲੋਮਿਨ',
        Multivitamin: 'ਮਲਟੀਵਿਟਾਮਿਨ', Capsules: 'ਕੈਪਸੂਲ', Silymarin: 'ਸਿਲੀਮਾਰਿਨ', Ursodeoxycholic: 'ਉਰਸੋਡੀਓਕਸੀਕੋਲਿਕ',
        Allopurinol: 'ਐਲੋਪਿਊਰੀਨੋਲ', Febuxostat: 'ਫੇਬੂਕਸੋਸਟੈਟ', Pregabalin: 'ਪ੍ਰੈਗਾਬਾਲਿਨ'
    }
};

function translateMedicineName(name) {
    const replacements = localizedMedicineNames[currentLanguage];
    if (!replacements) return name;

    return name.replace(/[A-Za-z]+/g, word => replacements[word] || word);
}

const localizedMedicineCategories = {
    hi: {
        'Pain Relief / Fever': 'दर्द निवारण / बुखार', 'Pain & Inflammation': 'दर्द और सूजन', 'Allergy / Cold': 'एलर्जी / सर्दी',
        'Diabetes': 'मधुमेह', 'Antibiotic / Infection': 'एंटीबायोटिक / संक्रमण', 'Antibiotic / Throat': 'एंटीबायोटिक / गला',
        'Acidity / Gastric': 'एसिडिटी / गैस्ट्रिक', 'Cholesterol / Cardio': 'कोलेस्ट्रॉल / हृदय', 'Blood Pressure': 'रक्तचाप',
        'Joint & Muscle Pain': 'जोड़ों और मांसपेशियों का दर्द', 'Acidity': 'एसिडिटी', 'Asthma / Allergy': 'अस्थमा / एलर्जी',
        'Antibiotic': 'एंटीबायोटिक', 'Antibiotic / Acne': 'एंटीबायोटिक / मुंहासे', 'Cholesterol': 'कोलेस्ट्रॉल',
        'Blood Thinner': 'खून पतला करने वाली दवा', 'Nausea / Vomiting': 'मतली / उल्टी', 'Allergy': 'एलर्जी',
        'Vitamin / Bones': 'विटामिन / हड्डियां', 'Nerve Health / Vitamins': 'नसों का स्वास्थ्य / विटामिन',
        'Bones / Supplements': 'हड्डियां / सप्लीमेंट', 'Supplements / Anemia': 'सप्लीमेंट / एनीमिया',
        'Iron / Anemia': 'आयरन / एनीमिया', 'Thyroid': 'थायरॉइड', 'Antifungal / Skin': 'एंटीफंगल / त्वचा',
        'Pain Relief': 'दर्द निवारण', 'Period Pain / Cramps': 'मासिक धर्म का दर्द / ऐंठन', 'Severe Pain': 'तेज दर्द',
        'Stomach Infection': 'पेट का संक्रमण', 'Blood Pressure / Heart': 'रक्तचाप / हृदय', 'Diuretic / BP': 'मूत्रवर्धक / रक्तचाप',
        'Diuretic / Swelling': 'मूत्रवर्धक / सूजन', 'Steroid / Inflammation': 'स्टेरॉयड / सूजन',
        'Respiratory / Asthma': 'श्वसन / अस्थमा', 'Cough / Cold': 'खांसी / सर्दी', 'Stomach Pain / Cramps': 'पेट दर्द / ऐंठन',
        'Daily Wellness / Supplements': 'दैनिक स्वास्थ्य / सप्लीमेंट', 'Liver Care': 'लिवर स्वास्थ्य', 'Liver / Gallbladder': 'लिवर / पित्ताशय',
        'Uric Acid / Gout': 'यूरिक एसिड / गाउट', 'Nerve Pain': 'नसों का दर्द'
    },
    pa: {
        'Pain Relief / Fever': 'ਦਰਦ ਤੋਂ ਰਾਹਤ / ਬੁਖਾਰ', 'Pain & Inflammation': 'ਦਰਦ ਅਤੇ ਸੋਜ', 'Allergy / Cold': 'ਐਲਰਜੀ / ਜ਼ੁਕਾਮ',
        'Diabetes': 'ਸ਼ੂਗਰ', 'Antibiotic / Infection': 'ਐਂਟੀਬਾਇਓਟਿਕ / ਇਨਫੈਕਸ਼ਨ', 'Antibiotic / Throat': 'ਐਂਟੀਬਾਇਓਟਿਕ / ਗਲਾ',
        'Acidity / Gastric': 'ਐਸਿਡਿਟੀ / ਗੈਸਟਰਿਕ', 'Cholesterol / Cardio': 'ਕੋਲੈਸਟ੍ਰੋਲ / ਦਿਲ', 'Blood Pressure': 'ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ',
        'Joint & Muscle Pain': 'ਜੋੜਾਂ ਅਤੇ ਮਾਸਪੇਸ਼ੀਆਂ ਦਾ ਦਰਦ', 'Acidity': 'ਐਸਿਡਿਟੀ', 'Asthma / Allergy': 'ਦਮਾ / ਐਲਰਜੀ',
        'Antibiotic': 'ਐਂਟੀਬਾਇਓਟਿਕ', 'Antibiotic / Acne': 'ਐਂਟੀਬਾਇਓਟਿਕ / ਮੁਹਾਸੇ', 'Cholesterol': 'ਕੋਲੈਸਟ੍ਰੋਲ',
        'Blood Thinner': 'ਖੂਨ ਪਤਲਾ ਕਰਨ ਵਾਲੀ ਦਵਾਈ', 'Nausea / Vomiting': 'ਮਤਲੀ / ਉਲਟੀ', 'Allergy': 'ਐਲਰਜੀ',
        'Vitamin / Bones': 'ਵਿਟਾਮਿਨ / ਹੱਡੀਆਂ', 'Nerve Health / Vitamins': 'ਨਸਾਂ ਦੀ ਸਿਹਤ / ਵਿਟਾਮਿਨ',
        'Bones / Supplements': 'ਹੱਡੀਆਂ / ਸਪਲੀਮੈਂਟ', 'Supplements / Anemia': 'ਸਪਲੀਮੈਂਟ / ਅਨੀਮੀਆ',
        'Iron / Anemia': 'ਆਇਰਨ / ਅਨੀਮੀਆ', 'Thyroid': 'ਥਾਇਰਾਇਡ', 'Antifungal / Skin': 'ਐਂਟੀਫੰਗਲ / ਚਮੜੀ',
        'Pain Relief': 'ਦਰਦ ਤੋਂ ਰਾਹਤ', 'Period Pain / Cramps': 'ਮਾਹਵਾਰੀ ਦਾ ਦਰਦ / ਮਰੋੜ', 'Severe Pain': 'ਤੇਜ਼ ਦਰਦ',
        'Stomach Infection': 'ਪੇਟ ਦੀ ਇਨਫੈਕਸ਼ਨ', 'Blood Pressure / Heart': 'ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ / ਦਿਲ', 'Diuretic / BP': 'ਮੂਤਰਵਰਧਕ / ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ',
        'Diuretic / Swelling': 'ਮੂਤਰਵਰਧਕ / ਸੋਜ', 'Steroid / Inflammation': 'ਸਟੀਰੌਇਡ / ਸੋਜ',
        'Respiratory / Asthma': 'ਸਾਹ ਪ੍ਰਣਾਲੀ / ਦਮਾ', 'Cough / Cold': 'ਖੰਘ / ਜ਼ੁਕਾਮ', 'Stomach Pain / Cramps': 'ਪੇਟ ਦਰਦ / ਮਰੋੜ',
        'Daily Wellness / Supplements': 'ਰੋਜ਼ਾਨਾ ਸਿਹਤ / ਸਪਲੀਮੈਂਟ', 'Liver Care': 'ਜਿਗਰ ਦੀ ਦੇਖਭਾਲ', 'Liver / Gallbladder': 'ਜਿਗਰ / ਪਿੱਤ ਦੀ ਥੈਲੀ',
        'Uric Acid / Gout': 'ਯੂਰਿਕ ਐਸਿਡ / ਗਾਊਟ', 'Nerve Pain': 'ਨਸਾਂ ਦਾ ਦਰਦ'
    }
};

const localizedBrandNames = {
    hi: {
        'Crocin / Dolo 650': 'क्रोसिन / डोलो 650', Brufen: 'ब्रूफेन', 'Alerid / Zyrtec': 'एलेरिड / ज़ीरटेक',
        'Glucophage / Glycomet': 'ग्लूकोफेज / ग्लाइकोमेट', Augmentin: 'ऑगमेंटिन', 'Azithral / Zithromax': 'एज़िथ्रल / ज़िथ्रोमैक्स',
        'Pan 40 / Pantocid': 'पैन 40 / पैंटोसिड', 'Storvas / Lipitor': 'स्टोरवास / लिपिटर', 'Amlong / Norvasc': 'एमलॉन्ग / नॉरवास्क',
        'Telma 40': 'टेल्मा 40', Voveran: 'वोवेरान', Omez: 'ओमेज़', 'Rablet / Pariet': 'रैबलेट / पैरिएट', Xyzal: 'ज़ायज़ल',
        'Montek LC / Singulair': 'मोंटेक एलसी / सिंगुलैर', Cifran: 'सिफ्रान', 'Taxim-O': 'टैक्सिम-ओ', 'Doxy-1': 'डॉक्सी-1',
        Amaryl: 'एमरिल', 'Rozavel / Crestor': 'रोज़ावेल / क्रेस्टर', Clopivas: 'क्लोपिवास', 'Ecosprin 75': 'इकोस्प्रिन 75',
        'Rantac 150': 'रैंटैक 150', Domstal: 'डॉम्स्टल', Emeset: 'एमेसेट', 'Allegra 120': 'एलेग्रा 120',
        'Uprise-D3': 'अपरीज़-डी3', Nurokind: 'न्यूरोकाइंड', 'Shelcal 500': 'शेल्कल 500', Folvite: 'फोलवाइट',
        'Orofer XT': 'ओरोफर एक्सटी', 'Eltroxin / Thyronorm': 'एल्ट्रोक्सिन / थायरोनॉर्म', Forcan: 'फोरकैन',
        Canditral: 'कैंडिट्रल', Hifenac: 'हिफेनाक', 'Meftal-Spas': 'मेफ्टल-स्पास', Contramal: 'कॉन्ट्रामल',
        'Norflox-TZ': 'नॉरफ्लॉक्स-टीजेड', 'Zita 20': 'ज़िटा 20', Voglibose: 'वोग्लिबोज़', Aten: 'एटेन',
        Losacar: 'लोसाकार', Aldactone: 'एल्डैक्टोन', Lasix: 'लैसिक्स', Wysolone: 'वायसोलोन', Asthalin: 'एस्थालिन',
        Mucosolvan: 'म्यूकोसोल्वान', Cyclopam: 'साइक्लोपाम', 'Supradyn / Becadexamin': 'सुप्राडिन / बेकाडेक्सामिन',
        Silybon: 'सिलीबॉन', Udiliv: 'उडिलिव', Zyloric: 'ज़ाइलोरिक', Feburic: 'फेब्यूरिक', 'Gabapin / Lyrica': 'गैबापिन / लिरिका'
    },
    pa: {
        'Crocin / Dolo 650': 'ਕਰੋਸਿਨ / ਡੋਲੋ 650', Brufen: 'ਬਰੂਫੇਨ', 'Alerid / Zyrtec': 'ਐਲਰਿਡ / ਜ਼ਿਰਟੇਕ',
        'Glucophage / Glycomet': 'ਗਲੂਕੋਫੇਜ / ਗਲਾਈਕੋਮੇਟ', Augmentin: 'ਔਗਮੈਂਟਿਨ', 'Azithral / Zithromax': 'ਐਜ਼ੀਥਰਲ / ਜ਼ਿਥਰੋਮੈਕਸ',
        'Pan 40 / Pantocid': 'ਪੈਨ 40 / ਪੈਂਟੋਸਿਡ', 'Storvas / Lipitor': 'ਸਟੋਰਵਾਸ / ਲਿਪਿਟਰ', 'Amlong / Norvasc': 'ਐਮਲੌਂਗ / ਨੋਰਵਾਸਕ',
        'Telma 40': 'ਟੈਲਮਾ 40', Voveran: 'ਵੋਵੇਰਾਨ', Omez: 'ਓਮੇਜ਼', 'Rablet / Pariet': 'ਰੈਬਲੈਟ / ਪੈਰੀਏਟ', Xyzal: 'ਜ਼ਾਈਜ਼ਲ',
        'Montek LC / Singulair': 'ਮੋਂਟੇਕ ਐਲਸੀ / ਸਿੰਗੁਲੇਅਰ', Cifran: 'ਸਿਫਰਾਨ', 'Taxim-O': 'ਟੈਕਸਿਮ-ਓ', 'Doxy-1': 'ਡੌਕਸੀ-1',
        Amaryl: 'ਐਮਰਿਲ', 'Rozavel / Crestor': 'ਰੋਜ਼ਾਵੇਲ / ਕ੍ਰੈਸਟਰ', Clopivas: 'ਕਲੋਪੀਵਾਸ', 'Ecosprin 75': 'ਈਕੋਸਪ੍ਰਿਨ 75',
        'Rantac 150': 'ਰੈਂਟੈਕ 150', Domstal: 'ਡੌਮਸਟਲ', Emeset: 'ਐਮੇਸੈਟ', 'Allegra 120': 'ਐਲੈਗਰਾ 120',
        'Uprise-D3': 'ਅਪ੍ਰਾਈਜ਼-ਡੀ3', Nurokind: 'ਨਿਊਰੋਕਾਈਂਡ', 'Shelcal 500': 'ਸ਼ੈਲਕਲ 500', Folvite: 'ਫੋਲਵਾਈਟ',
        'Orofer XT': 'ਓਰੋਫਰ ਐਕਸਟੀ', 'Eltroxin / Thyronorm': 'ਐਲਟਰੌਕਸਿਨ / ਥਾਇਰੋਨੌਰਮ', Forcan: 'ਫੋਰਕੈਨ',
        Canditral: 'ਕੈਂਡਿਟਰਲ', Hifenac: 'ਹਾਈਫੇਨਾਕ', 'Meftal-Spas': 'ਮੇਫਟਲ-ਸਪਾਸ', Contramal: 'ਕੌਂਟਰਾਮਲ',
        'Norflox-TZ': 'ਨੌਰਫਲੌਕਸ-ਟੀਜ਼ੈੱਡ', 'Zita 20': 'ਜ਼ੀਟਾ 20', Voglibose: 'ਵੋਗਲੀਬੋਜ਼', Aten: 'ਐਟੇਨ',
        Losacar: 'ਲੋਸਾਕਾਰ', Aldactone: 'ਐਲਡੈਕਟੋਨ', Lasix: 'ਲੈਸਿਕਸ', Wysolone: 'ਵਾਈਸੋਲੋਨ', Asthalin: 'ਐਸਥਾਲਿਨ',
        Mucosolvan: 'ਮਿਊਕੋਸੋਲਵਾਨ', Cyclopam: 'ਸਾਈਕਲੋਪੈਮ', 'Supradyn / Becadexamin': 'ਸੁਪ੍ਰਾਡਿਨ / ਬੇਕਾਡੈਕਸਾਮਿਨ',
        Silybon: 'ਸਿਲੀਬੋਨ', Udiliv: 'ਯੂਡਿਲਿਵ', Zyloric: 'ਜ਼ਾਈਲੋਰਿਕ', Feburic: 'ਫੇਬਿਊਰਿਕ', 'Gabapin / Lyrica': 'ਗੈਬਾਪਿਨ / ਲਿਰਿਕਾ'
    }
};

function translateMedicineNameFor(language, name) {
    const replacements = localizedMedicineNames[language];
    if (!replacements) return name;
    return name.replace(/[A-Za-z]+/g, word => replacements[word] || word);
}

function getLocalizedMedicine(medicine) {
    if (!medicine.translations) {
        medicine.translations = {
            name: { en: medicine.name, hi: translateMedicineNameFor('hi', medicine.name), pa: translateMedicineNameFor('pa', medicine.name) },
            category: {
                en: medicine.category,
                hi: localizedMedicineCategories.hi[medicine.category] || medicine.category,
                pa: localizedMedicineCategories.pa[medicine.category] || medicine.category
            },
            brand: {
                en: medicine.brand,
                hi: localizedBrandNames.hi[medicine.brand] || medicine.brand,
                pa: localizedBrandNames.pa[medicine.brand] || medicine.brand
            }
        };
    }
    const localized = medicine.translations;
    return {
        name: localized.name[currentLanguage] || localized.name.en,
        category: localized.category[currentLanguage] || localized.category.en,
        brand: localized.brand[currentLanguage] || localized.brand.en
    };
}

const localizedStoreDetails = {
    'Jan Aushadhi Kendra': {
        name: { hi: 'जन औषधि केंद्र', pa: 'ਜਨ ਔਸ਼ਧੀ ਕੇਂਦਰ' },
        address: { hi: 'फेज़ 7, मोहाली', pa: 'ਫੇਜ਼ 7, ਮੋਹਾਲੀ' }
    },
    'Govt Civil Hospital Store': {
        name: { hi: 'सरकारी सिविल अस्पताल स्टोर', pa: 'ਸਰਕਾਰੀ ਸਿਵਲ ਹਸਪਤਾਲ ਸਟੋਰ' },
        address: { hi: 'फेज़ 6, मोहाली', pa: 'ਫੇਜ਼ 6, ਮੋਹਾਲੀ' }
    },
    'Jan Aushadhi Kendra (Phase 7)': {
        name: { hi: 'जन औषधि केंद्र (फेज़ 7)', pa: 'ਜਨ ਔਸ਼ਧੀ ਕੇਂਦਰ (ਫੇਜ਼ 7)' },
        address: { hi: 'फेज़ 7, मोहाली', pa: 'ਫੇਜ਼ 7, ਮੋਹਾਲੀ' }
    },
    'Govt Civil Hospital Dispensary': {
        name: { hi: 'सरकारी सिविल अस्पताल डिस्पेंसरी', pa: 'ਸਰਕਾਰੀ ਸਿਵਲ ਹਸਪਤਾਲ ਡਿਸਪੈਂਸਰੀ' },
        address: { hi: 'फेज़ 6, मोहाली', pa: 'ਫੇਜ਼ 6, ਮੋਹਾਲੀ' }
    },
    'Jan Aushadhi Generic Pharmacy': {
        name: { hi: 'जन औषधि जेनेरिक फार्मेसी', pa: 'ਜਨ ਔਸ਼ਧੀ ਜੈਨਰਿਕ ਫਾਰਮੇਸੀ' },
        address: { hi: 'सेक्टर 70, मोहाली', pa: 'ਸੈਕਟਰ 70, ਮੋਹਾਲੀ' }
    },
    'District Jan Aushadhi Kendra': {
        name: { hi: 'जिला जन औषधि केंद्र', pa: 'ਜ਼ਿਲ੍ਹਾ ਜਨ ਔਸ਼ਧੀ ਕੇਂਦਰ' },
        address: { hi: 'सेक्टर 17, चंडीगढ़', pa: 'ਸੈਕਟਰ 17, ਚੰਡੀਗੜ੍ਹ' }
    }
};

function getLocalizedStore(store) {
    const localized = localizedStoreDetails[store.name];
    return {
        name: localized?.name[currentLanguage] || store.name,
        address: localized?.address[currentLanguage] || store.address,
        timing: store.timing
    };
}

function refreshDetailMedicineName() {
    const localized = getLocalizedMedicine(currentDetailMedicine);
    const displayName = localized.name;
    document.getElementById('detail-med-name').innerText = displayName;
    document.getElementById('table-med-name-1').innerText = displayName;
    document.getElementById('table-med-name-2').innerText = displayName;
    document.getElementById('detail-med-cat').innerHTML = `${localized.category} • ${translations[currentLanguage].brandedLabel}: <span style="color: #0f766e; font-weight:500;">${localized.brand}</span>`;
}

let currentLanguage = localStorage.getItem('medicineCareLanguage') || 'en';

medicinesData.forEach(medicine => getLocalizedMedicine(medicine));

function changeLanguage(language) {
    if (!translations[language]) return;
    currentLanguage = language;
    const dictionary = translations[language];
    document.documentElement.lang = language;
    document.getElementById('language-selector').value = language;
    document.getElementById('page-title').textContent = dictionary.pageTitle;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const value = dictionary[element.dataset.i18n];
        if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        element.placeholder = dictionary[element.dataset.i18nPlaceholder];
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
        element.setAttribute('aria-label', dictionary[element.dataset.i18nAriaLabel]);
    });
    localStorage.setItem('medicineCareLanguage', language);
    renderMedicines(document.getElementById('search-page-input')?.value.trim() || '');
    loadDefaultStoresFallback();
    refreshDetailMedicineName();
    updateAuthTrigger();
    if (typeof setAuthMode === 'function') setAuthMode(authMode, true);
}

let activeVoiceRecognition = null;
let voiceSearchStarting = false;

function getSpeechRecognitionConstructor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function showVoiceSearchError(message, error) {
    if (error) console.error('Voice search error:', error);
    alert(message);
}

async function requestMicrophonePermission() {
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
        return true;
    }

    if (!window.isSecureContext && window.location.protocol !== 'file:') {
        showVoiceSearchError('Voice search requires HTTPS or localhost.');
        return false;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(track => track.stop());
        return true;
    } catch (error) {
        const message = error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError'
            ? translations[currentLanguage].voiceSearchPermissionDenied
            : translations[currentLanguage].voiceSearchError;
        showVoiceSearchError(message, error);
        return false;
    }
}

async function startVoiceSearch(inputId) {
    const SpeechRecognition = getSpeechRecognitionConstructor();
    const input = document.getElementById(inputId);
    if (!input || voiceSearchStarting) return;

    if (!SpeechRecognition) {
        showVoiceSearchError(translations[currentLanguage].voiceSearchUnsupported);
        return;
    }

    if (activeVoiceRecognition) {
        activeVoiceRecognition.abort();
        activeVoiceRecognition = null;
    }

    voiceSearchStarting = true;
    const permissionGranted = await requestMicrophonePermission();
    if (!permissionGranted) {
        voiceSearchStarting = false;
        return;
    }

    const recognition = new SpeechRecognition();
    const languageCodes = { en: 'en-IN', hi: 'hi-IN', pa: 'pa-IN' };
    const micButton = document.querySelector(`[data-voice-input="${inputId}"]`);
    recognition.lang = languageCodes[currentLanguage] || 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    activeVoiceRecognition = recognition;
    voiceSearchStarting = false;
    micButton?.classList.add('listening');

    recognition.onresult = event => {
        const transcript = event.results[0][0].transcript.trim();
        input.value = transcript;
        executeSearch(inputId);
    };
    recognition.onerror = event => {
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            showVoiceSearchError(translations[currentLanguage].voiceSearchPermissionDenied, event.error);
        } else if (event.error !== 'aborted' && event.error !== 'no-speech') {
            showVoiceSearchError(translations[currentLanguage].voiceSearchError, event.error);
        }
    };
    recognition.onend = () => {
        micButton?.classList.remove('listening');
        if (activeVoiceRecognition === recognition) activeVoiceRecognition = null;
    };

    try {
        recognition.start();
    } catch (error) {
        micButton?.classList.remove('listening');
        activeVoiceRecognition = null;
        console.error('Unable to start voice search:', error);
        showVoiceSearchError(translations[currentLanguage].voiceSearchError, error);
    }
}

const AUTH_STORAGE_KEY = 'medicineCareUser';
let authMode = 'login';

function getStoredUser() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || 'null');
    } catch (error) {
        console.error('Unable to read the saved session.', error);
        return null;
    }
}

function updateAuthTrigger() {
    const trigger = document.getElementById('auth-trigger');
    const label = document.getElementById('auth-trigger-label');
    const user = getStoredUser();
    if (!trigger || !label) return;

    if (user) {
        label.textContent = user.name ? `${translations[currentLanguage].hi}, ${user.name.split(' ')[0]}` : 'Profile';
        trigger.innerHTML = `<i class="fa-regular fa-user"></i><span id="auth-trigger-label">${label.textContent}</span>`;
        trigger.title = 'Logout';
    } else {
        label.textContent = translations[currentLanguage].authLogin;
        trigger.innerHTML = `<i class="fa-regular fa-user"></i><span id="auth-trigger-label">${label.textContent}</span>`;
        trigger.removeAttribute('title');
    }
}

function setAuthMode(mode, preserveStatus = false) {
    authMode = mode;
    const isSignup = mode === 'signup';
    const dictionary = translations[currentLanguage];
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.toggle('active', tab.id === `${mode}-tab`));
    document.querySelectorAll('.auth-tab').forEach(tab => tab.setAttribute('aria-selected', String(tab.id === `${mode}-tab`)));
    document.querySelectorAll('.signup-only').forEach(field => { field.hidden = !isSignup; });
    document.getElementById('auth-title').textContent = isSignup ? dictionary.createAccount : dictionary.welcomeBack;
    document.getElementById('auth-subtitle').textContent = isSignup ? dictionary.signupSubtitle : dictionary.loginSubtitle;
    document.getElementById('auth-submit').textContent = isSignup ? dictionary.createAccountButton : dictionary.loginSecurely;
    document.getElementById('auth-password').autocomplete = isSignup ? 'new-password' : 'current-password';
    if (!preserveStatus) clearAuthMessages();
}

function clearAuthMessages() {
    document.querySelectorAll('.field-error').forEach(error => { error.textContent = ''; });
    document.querySelectorAll('#auth-form input').forEach(input => input.classList.remove('invalid'));
    const status = document.getElementById('auth-status');
    status.textContent = '';
    status.className = 'auth-status';
}

function setFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(`${inputId}-error`);
    if (input) input.classList.toggle('invalid', Boolean(message));
    if (error) error.textContent = message;
}

function validateAuthForm() {
    const name = document.getElementById('auth-name').value.trim();
    const identifier = document.getElementById('auth-identifier').value.trim();
    const password = document.getElementById('auth-password').value;
    const confirmPassword = document.getElementById('auth-confirm-password').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;
    let valid = true;

    const dictionary = translations[currentLanguage];
    if (authMode === 'signup' && name.length < 2) { setFieldError('auth-name', dictionary.nameRequired); valid = false; }
    if (!identifier) { setFieldError('auth-identifier', dictionary.identifierRequired); valid = false; }
    else if (!emailPattern.test(identifier) && !phonePattern.test(identifier.replace(/\s|-/g, ''))) { setFieldError('auth-identifier', dictionary.identifierInvalid); valid = false; }
    if (password.length < 6) { setFieldError('auth-password', dictionary.passwordShort); valid = false; }
    if (authMode === 'signup' && password !== confirmPassword) { setFieldError('auth-confirm-password', dictionary.passwordsMismatch); valid = false; }
    return valid ? { name, identifier, password } : null;
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('auth-identifier').focus();
}

function handleAuthTrigger() {
    if (getStoredUser()) {
        if (confirm(translations[currentLanguage].logoutConfirm)) {
            localStorage.removeItem(AUTH_STORAGE_KEY);
            updateAuthTrigger();
        }
        return;
    }
    setAuthMode('login');
    openAuthModal();
}

function submitAuth(event) {
    event.preventDefault();
    clearAuthMessages();
    const user = validateAuthForm();
    if (!user) return;

    const savedUser = { name: authMode === 'signup' ? user.name : (getStoredUser()?.name || user.identifier.split('@')[0]), identifier: user.identifier };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(savedUser));
    updateAuthTrigger();
    const status = document.getElementById('auth-status');
    status.textContent = authMode === 'signup' ? translations[currentLanguage].accountCreated : translations[currentLanguage].loginSuccess;
    status.className = 'auth-status success';
    setTimeout(closeAuthModal, 700);
}

document.addEventListener('DOMContentLoaded', () => {
    renderMedicines();
    loadDefaultStoresFallback();
    changeLanguage(currentLanguage);
    updateAuthTrigger();

    document.getElementById('auth-trigger')?.addEventListener('click', handleAuthTrigger);
    document.getElementById('auth-close')?.addEventListener('click', closeAuthModal);
    document.querySelector('[data-close-auth]')?.addEventListener('click', closeAuthModal);
    document.getElementById('login-tab')?.addEventListener('click', () => setAuthMode('login'));
    document.getElementById('signup-tab')?.addEventListener('click', () => setAuthMode('signup'));
    document.getElementById('auth-form')?.addEventListener('submit', submitAuth);
    document.getElementById('password-toggle')?.addEventListener('click', () => {
        const password = document.getElementById('auth-password');
        const toggle = document.getElementById('password-toggle');
        password.type = password.type === 'password' ? 'text' : 'password';
        toggle.innerHTML = password.type === 'password' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
        toggle.setAttribute('aria-label', password.type === 'password' ? 'Show password' : 'Hide password');
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && document.getElementById('auth-modal').classList.contains('open')) closeAuthModal();
    });

    document.getElementById('home-search-input')?.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') executeSearch('home-search-input');
    });

    document.getElementById('search-page-input')?.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') executeSearch('search-page-input');
    });

    document.querySelectorAll('[data-voice-input]').forEach(button => {
        button.addEventListener('click', () => startVoiceSearch(button.dataset.voiceInput));
    });
});
