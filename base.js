// base.js
document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    if (!main) return;

    // 1. Insert layout. Panels now live directly in #bottom.
    main.innerHTML = `
        <div id="sidebar">
            <div class="nav-item" data-target="home">Home</div>
            <div class="nav-item" data-target="gathering">Gathering</div>
            <div class="nav-item" data-target="battle">Battle</div>
            <div class="nav-item" data-target="items">Items</div>
        </div>
        <div id="right-panel">
            <div id="top"></div> <!-- Left empty for your main game view/canvas -->
            <div id="bottom">
                <div id="home" class="content-panel">🏠 Home Content</div>
                <div id="gathering" class="content-panel">🌿 Gathering Content</div>
                <div id="battle" class="content-panel">⚔️ Battle Content</div>
                <div id="items" class="content-panel">🎒 Items Content</div>
            </div>
        </div>
    `;

    // 2. Handle clicks: just toggle .active class (no DOM moving)
    main.addEventListener('click', (e) => {
        const navItem = e.target.closest('.nav-item');
        if (!navItem) return;

        const targetId = navItem.dataset.target;
        
        // Update sidebar active state
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        navItem.classList.add('active');

        // Update bottom panel visibility
        document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(targetId).classList.add('active');
    });

    // Auto-load Home on start
    main.querySelector('.nav-item[data-target="home"]').click();
});
