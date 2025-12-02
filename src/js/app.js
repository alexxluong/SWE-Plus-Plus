document.addEventListener('DOMContentLoaded', () => {
  const homeBtn = document.getElementById('show-homePage');
  const aboutPageBtn = document.getElementById('show-aboutPage');
  const logoutBtn = document.getElementById('show-logoutPage');

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      alert('Hello — welcome to the site!');
    });
  }

  if (aboutPageBtn) {
    aboutPageBtn.addEventListener('click', () => {
      const now = new Date().toLocaleTimeString();
      alert('Current time: ' + now);
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      const now = new Date().toLocaleTimeString();
      alert('Logout button clicked');
    });
  }
});