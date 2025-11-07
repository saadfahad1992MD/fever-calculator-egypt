# Fever Calculator - Egypt Version Implementation

## Overview

This version of the Fever Calculator automatically detects the visitor's location and displays region-specific medications. When visitors access the website from Egypt, they will see Egypt-approved medications. Visitors from other countries will see the original Saudi/Gulf medications.

## Implementation Details

### 1. Geolocation Detection

**File:** `src/utils/geolocation.js`

The system uses IP-based geolocation to detect the user's country. It tries multiple free geolocation services for reliability:
- ipapi.co (primary)
- ip-api.com (fallback)
- ipwhois.app (second fallback)

The detected country code is cached in localStorage to avoid repeated API calls.

### 2. Medication Data

**Egypt Medications (Arabic):** `src/data/medicationsEgypt.js`
**Egypt Medications (English):** `src/data/medicationsEgyptEnglish.js`

Egypt-specific medications include:

#### Paracetamol:
- Cetal 250mg/5ml syrup
- Abimol 150mg/5ml syrup
- Panadol Baby & Infant suspension
- Cetal 120mg suppositories
- Abimol 300mg suppositories

#### Ibuprofen:
- Brufen 100mg/5ml syrup

#### Diclofenac Suppositories:
- Voltaren 12.5mg
- Voltaren 25mg

### 3. Modified Components

**AppWrapper.jsx:**
- Added country detection on component mount
- Passes `country` prop to child components (App.jsx and AppEnglish.jsx)
- Shows loading state while detecting country

**App.jsx (Arabic) and AppEnglish.jsx (English):**
- Accept `country` prop
- Dynamically select medication data based on country:
  - If `country === 'EG'`: Use Egypt medications
  - Otherwise: Use default (Saudi/Gulf) medications
- All medication references updated to use dynamic data

### 4. How It Works

1. User visits the website
2. AppWrapper component loads and triggers geolocation detection
3. System detects country code (e.g., "EG" for Egypt, "SG" for Singapore)
4. Country code is cached in localStorage
5. Based on country code, appropriate medication data is loaded
6. Calculator displays region-specific medications

### 5. Testing

To test the Egypt version:

**Option 1: Manual Override**
Open browser console and run:
```javascript
localStorage.setItem('userCountry', 'EG');
location.reload();
```

**Option 2: VPN**
Use a VPN to connect from Egypt and access the website.

**Option 3: Clear Cache**
To reset and re-detect:
```javascript
localStorage.removeItem('userCountry');
location.reload();
```

### 6. Deployment

The website can be deployed to any static hosting service:

**Build for production:**
```bash
pnpm build
```

**Deploy to Vercel:**
```bash
pnpm deploy:vercel
```

**Deploy to Netlify:**
```bash
pnpm deploy:netlify
```

## Important Notes

1. **Original Version Intact:** The original medication data and functionality remain unchanged. The system only adds Egypt-specific data without modifying the default behavior.

2. **Fallback Behavior:** If geolocation detection fails, the system defaults to showing the original Saudi/Gulf medications.

3. **Privacy:** The geolocation is based on IP address only. No personal data is collected or stored.

4. **Caching:** Country detection result is cached in localStorage to improve performance and reduce API calls.

5. **Image Placeholders:** Some Egypt medications use placeholder images from similar medications. You may want to replace these with actual product images.

## Future Enhancements

1. Add more Egypt-specific medication brands
2. Add actual product images for Egypt medications
3. Support for additional countries/regions
4. Admin panel to manage medication data
5. Manual country selector as an override option

## Files Modified

- `src/AppWrapper.jsx` - Added country detection
- `src/App.jsx` - Added country prop and dynamic medication selection
- `src/AppEnglish.jsx` - Added country prop and dynamic medication selection

## Files Added

- `src/utils/geolocation.js` - Geolocation detection utility
- `src/data/medicationsEgypt.js` - Egypt medications (Arabic)
- `src/data/medicationsEgyptEnglish.js` - Egypt medications (English)
- `EGYPT_VERSION_README.md` - This documentation

## Contact

For questions or issues, please contact the development team.
