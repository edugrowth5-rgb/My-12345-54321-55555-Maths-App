let fontSize = 16;
const app = {
    currentChapter: 'welcome',
    lang: 'en',
    
    render() {
        const data = appData[this.currentChapter];
        const content = document.getElementById('content-area');
        if (!data) return;
        
        content.style.fontSize = fontSize + 'px';
        
        // Welcome page logic
        if (this.currentChapter === 'welcome') {
            content.innerHTML = `<h2>${data.title[this.lang]}</h2>${data.content[this.lang]}`;
        } else {
            // Chapter rendering logic
            content.innerHTML = `
                <h2>${data.title[this.lang]}</h2>
                <div class="section"><h3>Definition & Classification</h3>${data.definition[this.lang]}</div>
                <div class="section"><h3>Formulas</h3><ul>${data.formulas.map(f => `<li>${f[this.lang]}</li>`).join('')}</ul></div>
                <div class="section"><h3>Solved Examples</h3>${data.solved_examples.map(ex => `
                    <p><strong>Q:</strong> ${ex.q[this.lang]}</p>
                    <div class="steps"><strong>Steps:</strong><ul>${ex.steps[this.lang].map(s => `<li>${s}</li>`).join('')}</ul></div>
                `).join('')}</div>
                <button onclick="alert('Quiz feature coming soon!')">Start Quiz</button>
            `;
        }
    },

    loadSidebar() {
        const nav = document.getElementById('nav-links');
        nav.innerHTML = '';
        
        // "Home" button for Welcome page
        const homeBtn = document.createElement('button');
        homeBtn.innerText = this.lang === 'en' ? "Home" : "मुख्य पृष्ठ";
        homeBtn.onclick = () => { this.currentChapter = 'welcome'; this.render(); };
        nav.appendChild(homeBtn);

        // Chapter buttons
        Object.keys(appData).forEach(key => {
            if (key === 'welcome') return;
            const btn = document.createElement('button');
            btn.innerText = appData[key].title[this.lang];
            btn.onclick = () => { this.currentChapter = key; this.render(); };
            nav.appendChild(btn);
        });
    }
};

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('collapsed'); }
function switchLanguage() { app.lang = (app.lang === 'en') ? 'hi' : 'en'; app.loadSidebar(); app.render(); }
function changeFontSize(val) { fontSize += val; app.render(); }
function toggleFullScreen() { !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen(); }
function filterTopics() {
    const query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('#nav-links button').forEach(btn => {
        btn.style.display = btn.innerText.toLowerCase().includes(query) ? 'block' : 'none';
    });
}
window.onload = () => { app.loadSidebar(); app.render(); };
