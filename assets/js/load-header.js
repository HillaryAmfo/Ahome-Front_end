// /assets/js/load-header.js

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/assets/html/header.html');
    const html = await res.text();

    document.getElementById('header-placeholder').innerHTML = html;

    // Wait a moment, then load the header JS
    const script = document.createElement('script');
    script.src = '/assets/js/header.js';
    script.onload = () => console.log('✅ header.js loaded');
    script.onerror = () => console.error('❌ Failed to load header.js');
    document.body.appendChild(script);
  } catch (error) {
    console.error('❌ Error loading header:', error);
  }
});
