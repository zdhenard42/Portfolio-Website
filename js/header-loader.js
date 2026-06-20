document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    fetch('header.html')
        .then((res) => res.text())
        .then((html) => {
            placeholder.innerHTML = html;
            placeholder.querySelectorAll('script').forEach((oldScript) => {
                const newScript = document.createElement('script');
                if (oldScript.src) {
                    newScript.src = oldScript.src;
                } else {
                    newScript.textContent = oldScript.textContent;
                }
                oldScript.replaceWith(newScript);
            });
        })
        .catch((error) => console.error('Failed to load header:', error));
});
