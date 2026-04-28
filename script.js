document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(location.search);
    if (!['ts', 'php', 'py',].includes(urlParams.get('l'))) {
        return;
    }
    const lngItems = document.querySelectorAll('.js-lng-list__item');
    const buttons = {};
    const skills = {};
    lngItems.forEach(btn => {
        buttons[btn.dataset.lng] = btn;
        const skillEl = document.querySelector(`.js-lng-skill__item[data-lng="${btn.dataset.lng}"]`);
        if (skillEl) {
            skills[btn.dataset.lng] = skillEl;
            skillEl.remove();
        }
        btn.remove();
    });
    const lngItemsBox = document.querySelector('.js-lng-list__box');
    const skillsBox = document.querySelector('.js-lng-skill__box');
    if (urlParams.get('l') === 'ts') {
        lngItemsBox.innerHTML = `${
            buttons.ts.outerHTML}${
            buttons.php.outerHTML}${
            buttons.py.outerHTML}${
            buttons.sql.outerHTML}`;
        skillsBox.innerHTML = `${
            skills.ts.outerHTML}${
            skills.php.outerHTML}${
            skills.py.outerHTML}`;
    } else if (urlParams.get('l') === 'php') {
        lngItemsBox.innerHTML = `${
            buttons.php.outerHTML}${
            buttons.ts.outerHTML}${
            buttons.py.outerHTML}${
            buttons.sql.outerHTML}`;
        skillsBox.innerHTML = `${
            skills.php.outerHTML}${
            skills.ts.outerHTML}${
            skills.py.outerHTML}`;
    } else if (urlParams.get('l') === 'py') {
        lngItemsBox.innerHTML = `${
            buttons.py.outerHTML}${
            buttons.ts.outerHTML}${
            buttons.php.outerHTML}${
            buttons.sql.outerHTML}`;
        skillsBox.innerHTML = `${
            skills.py.outerHTML}${
            skills.ts.outerHTML}${
            skills.php.outerHTML}`;
    }
});