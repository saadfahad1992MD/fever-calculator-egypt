// Egypt-specific medication data (English version)
// Using existing images where brands are the same, placeholders for Egypt-specific brands

import adolSyrupImg from '../assets/medications/adol_syrup.webp'
import adolDropsImg from '../assets/medications/adol_drops_new_updated.webp'
import panadolMotherChildImg from '../assets/medications/panadol_baby_infant.jpeg'
import panadolBabySuspensionImg from '../assets/medications/panadol_baby_suspension.webp'
import brufenImg from '../assets/medications/brufen.webp'

// Import suppository images
import adol125SuppImg from '../assets/suppositories/adol_125.jpg'
import voltaren12_5SuppImg from '../assets/suppositories/voltaren_12_5.jpg'
import voltaren25SuppImg from '../assets/suppositories/voltaren_25.webp'

export const medicationsEgyptEnglish = {
  paracetamol: [
    {
      id: 'cetal_syrup',
      name: 'Cetal Syrup',
      ingredient: 'Paracetamol',
      concentration: 250, // mg per 5ml
      volume: 5, // ml
      form: 'Syrup',
      image: adolSyrupImg, // Using similar image as placeholder
      ageRestriction: ''
    },
    {
      id: 'abimol_syrup',
      name: 'Abimol Syrup',
      ingredient: 'Paracetamol',
      concentration: 150, // mg per 5ml
      volume: 5, // ml
      form: 'Syrup',
      image: adolSyrupImg, // Using similar image as placeholder
      ageRestriction: ''
    },
    {
      id: 'panadol-baby-egypt',
      name: 'Panadol',
      ingredient: 'Paracetamol',
      concentration: 120, // mg per 5ml
      volume: 5, // ml
      form: 'Syrup',
      image: panadolBabySuspensionImg,
      ageRestriction: ''
    }
  ],
  ibuprofen: [
    {
      id: 'brufen_egypt',
      name: 'Brufen',
      ingredient: 'Ibuprofen',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'Syrup',
      image: brufenImg,
      ageRestriction: 'Age over 6 months'
    }
  ]
}

export const suppositoriesEgyptEnglish = {
  paracetamol: [
    // 120mg suppositories
    {
      id: 'cetal_120_supp',
      name: 'Cetal 120',
      ingredient: 'Paracetamol',
      concentration: 120,
      form: 'suppository',
      image: adol125SuppImg, // Using similar image as placeholder
      ageRestriction: '6-12.9',
      weightRange: '6-12.9 kg'
    },
    // 300mg suppositories
    {
      id: 'abimol_300_supp',
      name: 'Abimol 300',
      ingredient: 'Paracetamol',
      concentration: 300,
      form: 'suppository',
      image: adol125SuppImg, // Using similar image as placeholder
      ageRestriction: '13-22',
      weightRange: '13-22 kg'
    }
  ],
  diclofenac: [
    // 12.5mg suppositories
    {
      id: 'voltaren_12_5_supp_egypt',
      name: 'Voltaren 12.5',
      ingredient: 'Diclofenac',
      concentration: 12.5,
      form: 'suppository',
      image: voltaren12_5SuppImg,
      ageRestriction: '8-16',
      weightRange: '8-16 kg'
    },
    // 25mg suppositories
    {
      id: 'voltaren_25_supp_egypt',
      name: 'Voltaren 25',
      ingredient: 'Diclofenac',
      concentration: 25,
      form: 'suppository',
      image: voltaren25SuppImg,
      ageRestriction: '17-25',
      weightRange: '17-25 kg'
    }
  ]
}
