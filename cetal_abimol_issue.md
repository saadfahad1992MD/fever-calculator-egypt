# Cetal and Abimol Suppositories Issue

## Date: November 8, 2025

## Problem
After updating the medication data to only include:
- Cetal 120mg (available in Egypt)
- Abimol 300mg (available in Egypt)

And removing unavailable products:
- Cetal 200, 350mg (NOT available)
- Abimol 120, 200mg (NOT available)

The website is NOT showing Cetal 120 or Abimol 300 in the suppositories section.

## What's Showing
Currently visible paracetamol suppositories:
1. Fevadol 100mg ✅
2. Tylenol 100mg ✅
3. Adol 125mg ✅
4. Fevadol 200mg ✅
5. Tylenol 200mg ✅
6. Adol 250mg ✅
7. Fevadol 350mg ✅
8. Tylenol 350mg ✅

Missing:
- Cetal 120mg ❌
- Abimol 300mg ❌

## Files Modified
1. `/home/ubuntu/fever-calc-egypt/src/data/medicationsEgyptEnglish.js` - Updated
2. `/home/ubuntu/fever-calc-egypt/src/data/medicationsEgypt.js` - Updated
3. Images copied:
   - `cetal_120_supp.webp`
   - `abimol_300_supp.webp`

## Possible Causes
1. Component not reading from the correct data source
2. Data structure mismatch
3. Build cache issue
4. Component filtering logic excluding these medications

## Next Steps
Need to investigate why Cetal and Abimol are not appearing despite being in the data files.
