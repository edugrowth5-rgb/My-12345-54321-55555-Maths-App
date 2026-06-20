let fontSize = 16;
const app = {
    currentChapter: 'number_system',
    lang: 'en',
    currentQ: 0,
    score: 0,
    quizActive: false,

    // 1. Initial Content Render (Solved Examples)
    render() {
        this.quizActive = false;
        const data = appData[this.currentChapter];
        const content = document.getElementById('content-area');
        if (!data) return;
        
        content.style.fontSize = fontSize + 'px';
        
        if (this.currentChapter === 'welcome') {
            content.innerHTML = `<h2>${data.title[this.lang]}</h2>${data.content[this.lang]}`;
        } else {
            content.innerHTML = `
                <h2>${data.title[this.lang]}</h2>
                <div class="section"><h3>Definition</h3>${data.definition[this.lang]}</div>
                <div class="section"><h3>Formulas</h3><ul>${data.formulas.map(f => `<li>${f[this.lang]}</li>`).join('')}</ul></div>
                <div class="section"><h3>Solved Examples (50 Unique)</h3>${data.solved_examples.map((ex, index) => `
                    <p><strong>Q${index + 1}:</strong> ${ex.q[this.lang]}</p>
                    <div class="steps"><ul>${ex.steps[this.lang].map(s => `<li>${s}</li>`).join('')}</ul></div>
                `).join('')}</div>
                <button onclick="app.startQuiz()" style="background:#25D366; color:white; padding:15px; width:100%; font-size:18px; border:none; border-radius:8px; cursor:pointer;">Start Quiz</button>
            `;
        }
    },

    // 2. Quiz Logic
    startQuiz() {
        this.quizActive = true;
        this.currentQ = 0;
        this.score = 0;
        this.showQuestion();
    },

    showQuestion() {
        const quiz = quizData[this.currentChapter];
        const content = document.getElementById('content-area');
        const item = quiz[this.currentQ];

        content.innerHTML = `
            <h3>Quiz: ${appData[this.currentChapter].title[this.lang]}</h3>
            <p><strong>Q${this.currentQ + 1}/${quiz.length}</strong></p>
            <div class="section">
                <p>${item.q[this.lang]}</p>
                ${item.options[this.lang].map((opt, j) => `
                    <button class="option-btn" id="opt${j}" onclick="app.handleAnswer(${j})">${opt}</button>
                `).join('')}
            </div>
            
            <div id="next-container" style="display:none; margin-top:15px;">
                <button onclick="app.nextQuestion()" style="background:#25D366; color:white; width:100%; padding:12px; border:none; border-radius:5px;">Next Question</button>
            </div>

            <div style="margin-top:20px; display:flex; gap:10px;">
                <button onclick="app.goBack()" ${this.currentQ === 0 ? 'disabled' : ''}>Back</button>
                <button onclick="app.quitQuiz()" style="background:#ff4757; color:white;">Quit Quiz</button>
            </div>
        `;
    },

    handleAnswer(optIndex) {
        const quiz = quizData[this.currentChapter][this.currentQ];
        const correctAns = quiz.ans;
        
        // Disable buttons
        quiz.options[this.lang].forEach((_, j) => {
            document.getElementById(`opt${j}`).disabled = true;
        });

        // Color Feedback
        document.getElementById(`opt${optIndex}`).classList.add(optIndex === correctAns ? 'correct' : 'wrong');
        if (optIndex !== correctAns) {
            document.getElementById(`opt${correctAns}`).classList.add('correct');
        } else {
            this.score++;
        }

        // Show Next Button
        document.getElementById('next-container').style.display = 'block';
    },

    nextQuestion() {
        if (this.currentQ < quizData[this.currentChapter].length - 1) {
            this.currentQ++;
            this.showQuestion();
        } else {
            this.submitQuiz();
        }
    },

    goBack() {
        if (this.currentQ > 0) { this.currentQ--; this.showQuestion(); }
    },

    quitQuiz() {
        if (confirm("Are you sure? Progress will be lost.")) {
            this.render();
        }
    },

    submitQuiz() {
        const total = quizData[this.currentChapter].length;
        document.getElementById('content-area').innerHTML = `
            <div class="section" style="text-align:center;">
                <h2>Quiz Completed!</h2>
                <p>Your Final Score: ${this.score} / ${total}</p>
                <button onclick="app.render()" style="padding:10px 20px;">Done (Back to Home)</button>
            </div>
        `;
    },

    // 3. Navigation
    loadSidebar() {
        const nav = document.getElementById('nav-links');
        nav.innerHTML = '';
        const homeBtn = document.createElement('button');
        homeBtn.innerText = this.lang === 'en' ? "Home" : "मुख्य पृष्ठ";
        homeBtn.onclick = () => { this.currentChapter = 'welcome'; this.render(); };
        nav.appendChild(homeBtn);

        Object.keys(appData).forEach(key => {
            if (key === 'welcome') return;
            const btn = document.createElement('button');
            btn.innerText = appData[key].title[this.lang];
            btn.onclick = () => { this.currentChapter = key; this.render(); };
            nav.appendChild(btn);
        });
    }
};

// Global Helpers
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('collapsed'); }
function switchLanguage() { app.lang = (app.lang === 'en') ? 'hi' : 'en'; app.loadSidebar(); app.render(); }
function changeFontSize(val) { fontSize += val; app.render(); }

// Fullscreen function 
function toggleFullScreen() {
    const elem = document.documentElement;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

window.onload = () => { app.loadSidebar(); app.render(); };
