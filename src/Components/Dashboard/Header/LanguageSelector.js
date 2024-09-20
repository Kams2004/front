// src/Components/LanguageSelector.js
import React from 'react';
import { GoogleTranslate } from 'react-google-translate';

const LanguageSelector = () => {
  const handleLanguageChange = (language) => {
    // You can manage the language state here if needed
    GoogleTranslate.setLanguage(language);
  };

  return (
    <div className="language-selector">
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('fr')}>Français</button>
    </div>
  );
};

export default LanguageSelector;
