import { useState, useEffect } from 'react'
import App from './App.jsx'
import AppEnglish from './AppEnglish.jsx'
import { LanguageSelector } from './LanguageSelector.jsx'
import { getUserCountry } from './utils/geolocation.js'

export function AppWrapper() {
  const [language, setLanguage] = useState('ar')
  const [country, setCountry] = useState('DEFAULT')
  const [isLoadingCountry, setIsLoadingCountry] = useState(true)

  // Detect user's country on mount
  useEffect(() => {
    async function detectCountry() {
      try {
        const detectedCountry = await getUserCountry()
        setCountry(detectedCountry)
        console.log('User country detected:', detectedCountry)
      } catch (error) {
        console.error('Error detecting country:', error)
        setCountry('DEFAULT')
      } finally {
        setIsLoadingCountry(false)
      }
    }
    
    detectCountry()
  }, [])

  // Check if language was previously selected
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    // Set document direction based on current language
    document.documentElement.dir = (savedLanguage || 'ar') === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = savedLanguage || 'ar'
  }, [])

  const handleSelectLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('selectedLanguage', lang)
    // Set document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const handleChangeLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar'
    setLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
    // Set document direction
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLanguage
  }

  // Show loading state while detecting country
  if (isLoadingCountry) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        {language === 'ar' ? 'جاري التحميل...' : 'Loading...'}
      </div>
    )
  }

  // Language selector removed - Arabic is default

  if (language === 'ar') {
    return <App onChangeLanguage={handleChangeLanguage} country={country} />
  }

  return <AppEnglish onChangeLanguage={handleChangeLanguage} country={country} />
}
