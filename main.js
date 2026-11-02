const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const query = document.getElementById('siteSearch').value.trim();
  if (!query) {
    alert('Please enter a song, Bible verse, or devotional to search.');
    return;
  }
  alert('Search is ready to connect to the Christ Rhythm database. Your search: ' + query);
});

document.getElementById('languageSelect').addEventListener('change', (event) => {
  alert('Language selected: ' + event.target.value + '. Translated content will be connected in the multilingual content stage.');
});
