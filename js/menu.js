function setActiveNavItem() {
  const currentPath = window.location.pathname
    .split('/')
    .pop() || 'index.html';

  console.log('Current page:', currentPath);

  document.querySelectorAll('.navbar li.nav-item').forEach(item => {
    const link = item.querySelector('a');
    if (!link) {
      console.log('No link found in nav-item', item);
      return;
    }

    // Ignore external links
    if (link.origin !== window.location.origin) {
      console.log('Skipping external link:', link.href);
      return;
    }

    const linkPath = link.pathname.split('/').pop();
    console.log('Checking link:', linkPath);

    if (linkPath === currentPath) {
      console.log('MATCH FOUND → activating:', linkPath);
      item.classList.add('active-x');
      link.classList.add('active-x');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNavItem);
