const languageSelect = document.getElementById('languages');

languageSelect.addEventListener('change', (e) => {
  const selectedLang = e.target.value;
  
  if (selectedLang === 'English') {
    // Navigate to English version
    window.location.href = './en/index.html';
  } else if (selectedLang === 'Greek') {
    // Navigate back to Greek version (root)
    window.location.href = '../index.html';
  }
  
  // Save preference
  localStorage.setItem('preferredLanguage', selectedLang);
});

// Set the dropdown to match current language on page load
window.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const isEnglish = currentPath.includes('/en/');
  
  const languageSelect = document.getElementById('languages');
  languageSelect.value = isEnglish ? 'English' : 'Greek';
});