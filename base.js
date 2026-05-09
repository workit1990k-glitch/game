// ══════════════════════════════════════════════
//  base.js – Page content loader
// ══════════════════════════════════════════════

const contentPages = {

    // ─── HOME ───
    home: `
        <h2 class="page-title">🏠 Home</h2>
        <p class="page-desc">Welcome back! Here's a quick overview of everything.</p>

        <div class="stats-row">
            <div class="stat-box">
                <div class="number">12,847</div>
                <div class="label">Total Players</div>
            </div>
            <div class="stat-box">
                <div class="number">342</div>
                <div class="label">Online Now</div>
            </div>
            <div class="stat-box">
                <div class="number">89</div>
                <div class="label">Matches Today</div>
            </div>
            <div class="stat-box">
                <div class="number">4</div>
                <div class="label">Your Rank</div>
            </div>
        </div>

        <h3 style="color:#e94560; margin-bottom:5px;">Latest News</h3>
        <div class="card-grid">
            <div class="card">
                <h3>🔥 Season 5 is Here!</h3>
                <p>The new season brings updated maps, new weapons, and a fresh ranking system. Jump in now to compete for exclusive rewards.</p>
            </div>
            <div class="card">
                <h3>🎉 Weekend Event</h3>
                <p>Double XP this weekend! Play 5 matches and earn a rare cosmetic item. Don't miss out on this limited-time offer.</p>
            </div>
            <div class="card">
                <h3>🛡️ Anti-Cheat Update</h3>
                <p>We've upgraded our anti-cheat detection system. Fair play is our priority — cheaters will be permanently banned.</p>
            </div>
        </div>
    `,

    // ─── RANKINGS ───
    rankings: `
        <h2 class="page-title">🏆 Global Rankings</h2>
        <p class="page-desc">Top players sorted by total points.</p>

        <table class="rankings-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Player</th>
                    <th>Points</th>
                    <th>Wins</th>
                    <th>Tier</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="rank-num">1</td>
                    <td>⚡ ShadowKing</td>
                    <td>98,420</td>
                    <td>847</td>
                    <td><span class="rank-badge badge-gold">Diamond</span></td>
                </tr>
                <tr>
                    <td class="rank-num">2</td>
                    <td>🔥 BlazeMaster</td>
                    <td>91,330</td>
                    <td>792</td>
                    <td><span class="rank-badge badge-gold">Diamond</span></td>
                </tr>
                <tr>
                    <td class="rank-num">3</td>
                    <td>🎯 AceSniper99</td>
                    <td>87,150</td>
                    <td>734</td>
                    <td><span class="rank-badge badge-gold">Diamond</span></td>
                </tr>
                <tr>
                    <td class="rank-num">4</td>
                    <td>👑 YourName</td>
                    <td>82,900</td>
                    <td>698</td>
                    <td><span class="rank-badge badge-silver">Platinum</span></td>
                </tr>
                <tr>
                    <td class="rank-num">5</td>
                    <td>🌀 NightOwl</td>
                    <td>79,440</td>
                    <td>671</td>
                    <td><span class="rank-badge badge-silver">Platinum</span></td>
                </tr>
                <tr>
                    <td class="rank-num">6</td>
                    <td>💀 ReaperX</td>
                    <td>76,200</td>
                    <td>645</td>
                    <td><span class="rank-badge badge-silver">Platinum</span></td>
                </tr>
                <tr>
                    <td class="rank-num">7</td>
                    <td>🚀 TurboNinja</td>
                    <td>71,880</td>
                    <td>602</td>
                    <td><span class="rank-badge badge-bronze">Gold</span></td>
                </tr>
                <tr>
                    <td class="rank-num">8</td>
                    <td>🎮 PixelQueen</td>
                    <td>68,340</td>
                    <td>578</td>
                    <td><span class="rank-badge badge-bronze">Gold</span></td>
                </tr>
            </tbody>
        </table>
    `,

    // ─── PLAYERS ───
    players: `
        <h2 class="page-title">👥 Players Directory</h2>
        <p class="page-desc">Search and browse all registered players.</p>

        <div class="card-grid">
            <div class="card">
                <h3>⚡ ShadowKing</h3>
                <p>Rank #1 · Diamond Tier<br>Wins: 847 · Losses: 102<br>Win Rate: 89%</p>
            </div>
            <div class="card">
                <h3>🔥 BlazeMaster</h3>
                <p>Rank #2 · Diamond Tier<br>Wins: 792 · Losses: 145<br>Win Rate: 84%</p>
            </div>
            <div class="card">
                <h3>🎯 AceSniper99</h3>
                <p>Rank #3 · Diamond Tier<br>Wins: 734 · Losses: 189<br>Win Rate: 80%</p>
            </div>
            <div class="card">
                <h3>💀 ReaperX</h3>
                <p>Rank #6 · Platinum Tier<br>Wins: 645 · Losses: 210<br>Win Rate: 75%</p>
            </div>
        </div>
    `,

    // ─── SETTINGS ───
    settings: `
        <h2 class="page-title">⚙️ Settings</h2>
        <p class="page-desc">Manage your account preferences.</p>

        <div class="card-grid">
            <div class="card">
                <h3>👤 Profile</h3>
                <p>Change your display name, avatar, and bio information.</p>
            </div>
            <div class="card">
                <h3>🔔 Notifications</h3>
                <p>Configure email alerts, match notifications, and friend requests.</p>
            </div>
            <div class="card">
                <h3>🎨 Appearance</h3>
                <p>Switch between dark and light themes. Customize accent colors.</p>
            </div>
            <div class="card">
                <h3>🔒 Privacy</h3>
                <p>Control who can see your stats, profile, and online status.</p>
            </div>
            <div class="card">
                <h3>🔑 Security</h3>
                <p>Change password, enable two-factor authentication, and manage sessions.</p>
            </div>
            <div class="card">
                <h3>📊 Data & Storage</h3>
                <p>Clear cache, manage saved replays, and download your match history.</p>
            </div>
        </div>
    `
};


// ══════════════════════════════════════════════
//  Functions
// ══════════════════════════════════════════════

const bottomDiv = document.getElementById('bottom');
const sidebarLinks = document.querySelectorAll('#sidebar a');


/**
 * Shows a loading spinner briefly, then injects content
 */
function loadPage(pageName) {

    // 1. Show loader
    bottomDiv.innerHTML = '<div class="loader"></div>';

    // 2. Small delay to simulate loading (feel free to remove setTimeout)
    setTimeout(() => {
        const html = contentPages[pageName];
        if (html) {
            bottomDiv.innerHTML = html;
            // Add fade-in to the first element
            const firstChild = bottomDiv.firstElementChild;
            if (firstChild) firstChild.classList.add('fade-in');
        } else {
            bottomDiv.innerHTML = '<h2>404</h2><p>Page not found.</p>';
        }
    }, 300);

    // 3. Update active link
    sidebarLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageName);
    });
}


// ══════════════════════════════════════════════
//  Event Listeners
// ══════════════════════════════════════════════

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        if (page) loadPage(page);
    });
});


// Load the default page on startup
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});
