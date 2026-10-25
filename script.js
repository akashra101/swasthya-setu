// 50+ Medicines Database
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

// Store Database with fixed Coordinates for Distance Calculation
const storesCoordinates = [
    { name: "Jan Aushadhi Kendra (Phase 7)", address: "Phase 7, Mohali", lat: 30.7150, lon: 76.7100, timing: "09:00 AM - 8:00 PM" },
    { name: "Govt Civil Hospital Dispensary", address: "Phase 6, Mohali", lat: 30.7300, lon: 76.7000, timing: "09:00 AM - 5:00 PM" },
    { name: "Jan Aushadhi Generic Pharmacy", address: "Sector 70, Mohali", lat: 30.6950, lon: 76.7200, timing: "09:00 AM - 9:00 PM" },
    { name: "District Jan Aushadhi Kendra", address: "Sector 17, Chandigarh", lat: 30.7414, lon: 76.7800, timing: "09:00 AM - 6:00 PM" }
];

// Haversine formula to calculate exact distance in KM
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

// Switch pages function
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

// Unified Search Execution Function
function executeSearch(inputId) {
    const inputElement = document.getElementById(inputId);
    const query = inputElement ? inputElement.value.trim() : '';

    document.getElementById('home-search-input').value = query;
    document.getElementById('search-page-input').value = query;

    renderMedicines(query);
    switchPage('search');
}

// Render medicines into DOM based on query
function renderMedicines(query = '') {
    const container = document.getElementById('dynamic-medicine-list');
    if(!container) return;

    const lowerQuery = query.toLowerCase();
    const filtered = medicinesData.filter(m => 
        m.name.toLowerCase().includes(lowerQuery) || 
        m.category.toLowerCase().includes(lowerQuery) ||
        m.brand.toLowerCase().includes(lowerQuery) ||
        m.keywords.toLowerCase().includes(lowerQuery) ||
        query === ''
    );

    document.getElementById('result-query-text').innerText = query ? `Results for "${query}"` : `All Medicines (${medicinesData.length} Available)`;
    document.getElementById('result-count').innerText = `Showing ${filtered.length} medicines`;

    if(filtered.length === 0) {
        container.innerHTML = `
            <div style="background: white; padding: 40px; border-radius: 16px; text-align: center; color: #64748b; border: 1px solid #e2e8f0;">
                <p style="font-size: 1.1rem; font-weight: 600;">Koi medicine ya disease nahi mili.</p>
                <p style="font-size: 0.85rem; color: #94a3b8; margin-top: 5px;">Try searching: <strong>Fever, Diabetes, Acidity, BP, Infection, Pain</strong></p>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map(med => `
        <div class="med-card" onclick="openDetails('${med.name}', '${med.brand}', '${med.category}', '${med.eng}', '${med.jan}', '${med.gov}', '${med.save}')">
            <div class="med-info">
                <div class="med-icon"><i class="fa-solid fa-pills"></i></div>
                <div>
                    <div class="med-title-row">
                        <h3>${med.name}</h3>
                        <span class="save-badge">Save up to ${med.save}</span>
                    </div>
                    <p class="med-cat">${med.category} • Branded: <span style="color: #0f766e; font-weight:500;">${med.brand}</span></p>
                    
                    <div class="price-breakdown">
                        <div><small>English (Branded)</small><p>₹${med.eng} <span class="subtext">(10 tabs)</span></p></div>
                        <div><small>Jan Aushadhi</small><p style="color:#0d9488;">₹${med.jan} <span class="subtext">(10 tabs)</span></p></div>
                        <div><small>Government</small><p style="color:#059669;">₹${med.gov} <span class="subtext">(10 tabs)</span></p></div>
                    </div>
                </div>
            </div>
            <button class="view-btn">View Details</button>
        </div>
    `).join('');
}

// Live GPS & Real Distance Calculation
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
                        <div class="store-card">
                            <div class="med-info">
                                <div class="med-icon" style="background:#f0fdfa; color:#0d9488;"><i class="fa-solid fa-location-dot"></i></div>
                                <div>
                                    <h3>${store.name}</h3>
                                    <p class="med-cat"><i class="fa-solid fa-map-pin"></i> ${store.address}</p>
                                    <p class="time-text"><i class="fa-regular fa-clock"></i> ${store.timing}</p>
                                </div>
                            </div>
                            <div class="store-right">
                                <span class="distance-tag">${store.distText}</span>
                                <a href="${store.mapsUrl}" target="_blank" class="primary-btn sm"><i class="fa-solid fa-location-arrow"></i> Directions</a>
                            </div>
                        </div>
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
            <div class="store-card">
                <div class="med-info">
                    <div class="med-icon" style="background:#f0fdfa; color:#0d9488;"><i class="fa-solid fa-location-dot"></i></div>
                    <div>
                        <h3>${store.name}</h3>
                        <p class="med-cat"><i class="fa-solid fa-map-pin"></i> ${store.address}</p>
                        <p class="time-text"><i class="fa-regular fa-clock"></i> ${store.timing}</p>
                    </div>
                </div>
                <div class="store-right">
                    <span class="distance-tag">${store.distText}</span>
                    <a href="${store.mapsUrl}" target="_blank" class="primary-btn sm"><i class="fa-solid fa-location-arrow"></i> Directions</a>
                </div>
            </div>
        `).join('');
    }
}

// Open details page with dynamic data
function openDetails(name, brand, category, eng, jan, gov, save) {
    document.getElementById('detail-med-name').innerText = name;
    document.getElementById('detail-med-cat').innerHTML = `${category} • Branded: <span style="color: #0f766e; font-weight:500;">${brand}</span>`;
    document.getElementById('detail-save-pct').innerText = save;
    
    document.getElementById('table-brand-name').innerText = brand;
    document.getElementById('table-eng-price').innerText = '₹' + eng;
    document.getElementById('table-jan-price').innerText = '₹' + jan;
    document.getElementById('table-gov-price').innerText = '₹' + gov;
    
    document.getElementById('table-med-name-1').innerText = name;
    document.getElementById('table-med-name-2').innerText = name;

    switchPage('details');
}

// Frontend demo authentication. Replace this storage layer with an API in production.
const AUTH_STORAGE_KEY = 'dawaiSahiUser';
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
        label.textContent = user.name ? `Hi, ${user.name.split(' ')[0]}` : 'Profile';
        trigger.innerHTML = `<i class="fa-regular fa-user"></i><span id="auth-trigger-label">${label.textContent}</span>`;
        trigger.title = 'Logout';
    } else {
        label.textContent = 'Login / Sign Up';
        trigger.innerHTML = '<i class="fa-regular fa-user"></i><span id="auth-trigger-label">Login / Sign Up</span>';
        trigger.removeAttribute('title');
    }
}

function setAuthMode(mode) {
    authMode = mode;
    const isSignup = mode === 'signup';
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.toggle('active', tab.id === `${mode}-tab`));
    document.querySelectorAll('.auth-tab').forEach(tab => tab.setAttribute('aria-selected', String(tab.id === `${mode}-tab`)));
    document.querySelectorAll('.signup-only').forEach(field => { field.hidden = !isSignup; });
    document.getElementById('auth-title').textContent = isSignup ? 'Create your account' : 'Welcome back';
    document.getElementById('auth-subtitle').textContent = isSignup ? 'Get a simpler way to compare and save on medicines.' : 'Save medicines and access your health preferences.';
    document.getElementById('auth-submit').textContent = isSignup ? 'Create account' : 'Login securely';
    document.getElementById('auth-password').autocomplete = isSignup ? 'new-password' : 'current-password';
    clearAuthMessages();
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

    if (authMode === 'signup' && name.length < 2) { setFieldError('auth-name', 'Please enter your full name.'); valid = false; }
    if (!identifier) { setFieldError('auth-identifier', 'Email or phone number is required.'); valid = false; }
    else if (!emailPattern.test(identifier) && !phonePattern.test(identifier.replace(/\s|-/g, ''))) { setFieldError('auth-identifier', 'Enter a valid email or 10-digit Indian phone number.'); valid = false; }
    if (password.length < 6) { setFieldError('auth-password', 'Password must be at least 6 characters.'); valid = false; }
    if (authMode === 'signup' && password !== confirmPassword) { setFieldError('auth-confirm-password', 'Passwords do not match.'); valid = false; }
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
        if (confirm('Logout from DawaiSahi?')) {
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
    status.textContent = authMode === 'signup' ? 'Account created successfully.' : 'Login successful.';
    status.className = 'auth-status success';
    setTimeout(closeAuthModal, 700);
}

// Listen for Enter key press on inputs
document.addEventListener('DOMContentLoaded', () => {
    renderMedicines();
    loadDefaultStoresFallback();
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
});