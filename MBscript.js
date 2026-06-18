let fontSize = 16;
const app = {
    currentChapter: 'number_system',
    lang: 'en',
    
    render() {
        const data = appData[this.currentChapter];
        const content = document.getElementById('content-area');
        if (!data) return;
        
        content.style.fontSize = fontSize + 'px';
        content.innerHTML = `
            <h2>${data.title[this.lang]}</h2>
            <div class="section"><h3>Definition</h3>${data.definition[this.lang]}</div>
            <div class="section"><h3>Formulas</h3><ul>${data.formulas.map(f => `<li>${f[this.lang]}</li>`).join('')}</ul></div>
            <div class="section"><h3>Solved Examples</h3>${data.solved_examples.map(ex => `
                <p><strong>Q:</strong> ${ex.q[this.lang]}</p>
                <div class="steps"><strong>Steps:</strong><ul>${ex.steps[this.lang].map(s => `<li>${s}</li>`).join('')}</ul></div>
            `).join('')}</div>
            <button onclick="alert('Quiz feature coming soon!')">Start Quiz</button>
        `;
    },

    loadSidebar() {
        const nav = document.getElementById('nav-links');
        nav.innerHTML = '';
        Object.keys(appData).forEach(key => {
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

window.onload = () => { app.loadSidebar(); app.render(); };
