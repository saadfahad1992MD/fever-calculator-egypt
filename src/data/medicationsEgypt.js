// Egypt-specific medication data
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

export const medicationsEgypt = {
  paracetamol: [
    {
      id: 'cetal_syrup',
      name: 'سيتال شراب',
      ingredient: 'باراسيتامول',
      concentration: 250, // mg per 5ml
      volume: 5, // ml
      form: 'شراب',
      image: adolSyrupImg, // Using similar image as placeholder
      ageRestriction: ''
    },
    {
      id: 'abimol_syrup',
      name: 'أبيمول شراب',
      ingredient: 'باراسيتامول',
      concentration: 150, // mg per 5ml
      volume: 5, // ml
      form: 'شراب',
      image: adolSyrupImg, // Using similar image as placeholder
      ageRestriction: ''
    },
    {
      id: 'panadol-baby-egypt',
      name: 'بانادول',
      ingredient: 'باراسيتامول',
      concentration: 120, // mg per 5ml
      volume: 5, // ml
      form: 'شراب',
      image: panadolBabySuspensionImg,
      ageRestriction: ''
    }
  ],
  ibuprofen: [
    {
      id: 'brufen_egypt',
      name: 'بروفين',
      ingredient: 'آيبوبروفين',
      concentration: 100, // mg per 5ml
      volume: 5, // ml
      form: 'شراب',
      image: brufenImg,
      ageRestriction: 'العمر أكبر من 6 أشهر'
    }
  ]
}

export const suppositoriesEgypt = {
  paracetamol: [
    // 120mg suppositories
    {
      id: 'cetal_120_supp',
      name: 'سيتال 120',
      ingredient: 'باراسيتامول',
      concentration: 120,
      form: 'تحميلة',
      image: adol125SuppImg, // Using similar image as placeholder
      ageRestriction: '6-12.9',
      weightRange: '6-12.9 كيلوغرام'
    },
    // 300mg suppositories
    {
      id: 'abimol_300_supp',
      name: 'أبيمول 300',
      ingredient: 'باراسيتامول',
      concentration: 300,
      form: 'تحميلة',
      image: adol125SuppImg, // Using similar image as placeholder
      ageRestriction: '13-22',
      weightRange: '13-22 كيلوغرام'
    }
  ],
  diclofenac: [
    // 12.5mg suppositories
    {
      id: 'voltaren_12_5_supp_egypt',
      name: 'فولتارين 12.5',
      ingredient: 'ديكلوفيناك',
      concentration: 12.5,
      form: 'تحميلة',
      image: voltaren12_5SuppImg,
      ageRestriction: '8-16',
      weightRange: '8-16 كيلوغرام'
    },
    // 25mg suppositories
    {
      id: 'voltaren_25_supp_egypt',
      name: 'فولتارين 25',
      ingredient: 'ديكلوفيناك',
      concentration: 25,
      form: 'تحميلة',
      image: voltaren25SuppImg,
      ageRestriction: '17-25',
      weightRange: '17-25 كيلوغرام'
    }
  ]
}
