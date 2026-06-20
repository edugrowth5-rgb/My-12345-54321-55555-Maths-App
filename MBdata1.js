const appData = {
    "welcome": {
        "title": { "en": "Welcome to Success Zone", "hi": "Success Zone में आपका स्वागत है" },
        "content": {
            "en": `
                <div class="welcome-box">
                    <h3>Dear Students,</h3>
                    <p>Welcome to <b>Success Zone</b>! This app is designed to make Mathematics easy, interactive, and accessible for everyone.</p>
                    <p><b>About App:</b> A comprehensive digital guide for competitive maths. Perfect for students from Class 5 to 10 and aspirants preparing for various scholarship and competitive exams.</p>
                    <hr>
                    <h4>Contact Us:</h4>
                    <p>📧 Email: contact@successzone.com</p>
                    <p>📱 Mobile: +91 98765 43210</p>
                    <p>💬 <a href="https://wa.me/919876543210">Chat on WhatsApp</a></p>
                    <p>📍 Address: Prashant Sagar, Education Hub, India</p>
                </div>
            `,
            "hi": `
                <div class="welcome-box">
                    <h3>प्रिय छात्रों,</h3>
                    <p><b>Success Zone</b> में आपका स्वागत है! यह ऐप गणित को आसान, इंटरैक्टिव और सभी के लिए सुलभ बनाने के लिए बनाया गया है।</p>
                    <p><b>ऐप के बारे में:</b> प्रतियोगी गणित (Competitive Maths) के लिए एक व्यापक डिजिटल गाइड। कक्षा 5 से 10 तक के छात्रों और विभिन्न छात्रवृत्ति व प्रतियोगी परीक्षाओं की तैयारी करने वालों के लिए विशेष उपयोगी।</p>
                    <hr>
                    <h4>संपर्क करें:</h4>
                    <p>📧 ईमेल: contact@successzone.com</p>
                    <p>📱 मोबाइल: +91 98765 43210</p>
                    <p>💬 <a href="https://wa.me/919876543210">WhatsApp पर बात करें</a></p>
                    <p>📍 पता: प्रशांत सागर, एजुकेशन हब, भारत</p>
                </div>
            `
        }
    },
    "number_system": {
        "title": { "en": "Number System", "hi": "संख्या पद्धति" },
        "definition": { 
            "en": `
                <p>A Number System is a systematic way to represent numbers and perform mathematical operations accurately. It serves as the foundation for all mathematical calculations.</p>
                
                <h4>1. Foundation Numbers (Class 5-8)</h4>
                <ul>
                    <li><strong>Natural Numbers:</strong> These are the counting numbers that begin from 1 and continue indefinitely (1, 2, 3, 4, ...). They are the most basic numbers used for counting objects.</li>
                    <li><strong>Whole Numbers:</strong> When we include the number zero (0) along with the set of natural numbers, the resulting set is known as whole numbers (0, 1, 2, 3, 4, ...).</li>
                    <li><strong>Integers:</strong> This set includes all whole numbers and their negative counterparts. It contains all positive numbers, negative numbers, and zero (...-3, -2, -1, 0, 1, 2, 3...).</li>
                    <li><strong>Even Numbers:</strong> Any integer that is exactly divisible by 2 is called an even number. These numbers always end with 0, 2, 4, 6, or 8.</li>
                    <li><strong>Odd Numbers:</strong> Any integer that is not divisible by 2 is classified as an odd number. These numbers always end with 1, 3, 5, 7, or 9.</li>
                    <li><strong>Prime Numbers:</strong> A prime number is a natural number greater than 1 that has exactly two distinct positive divisors: 1 and itself (e.g., 2, 3, 5, 7, 11).</li>
                    <li><strong>Composite Numbers:</strong> A composite number is a natural number greater than 1 that has more than two factors. In other words, it can be divided by numbers other than 1 and itself (e.g., 4, 6, 8, 9).</li>
                </ul>

                <h4>2. Advanced Numbers (Class 9-10)</h4>
                <ul>
                    <li><strong>Rational Numbers:</strong> Any number that can be expressed as a fraction p/q, where p and q are integers and the denominator q is not equal to zero.</li>
                    <li><strong>Irrational Numbers:</strong> Numbers that cannot be written as a simple fraction because their decimal representation is non-terminating and non-repeating (e.g., √2, π).</li>
                    <li><strong>Real Numbers:</strong> Real numbers include all the rational and irrational numbers that can be found on the number line.</li>
                </ul>
            `, 
            "hi": `
                <p>संख्या पद्धति (Number System) संख्याओं को दर्शाने और गणितीय गणनाओं को सटीकता से करने का एक व्यवस्थित तरीका है। यह गणित की सभी गणनाओं के लिए आधार का काम करती है।</p>
                
                <h4>1. आधारभूत संख्याएं (कक्षा 5-8)</h4>
                <ul>
                    <li><strong>प्राकृत संख्याएं (Natural Numbers):</strong> ये वे गिनती की संख्याएं हैं जो 1 से शुरू होती हैं और अनंत तक जाती हैं (1, 2, 3, 4, ...)। इनका उपयोग मुख्य रूप से वस्तुओं को गिनने के लिए किया जाता है।</li>
                    <li><strong>पूर्ण संख्याएं (Whole Numbers):</strong> जब हम प्राकृत संख्याओं के समूह में शून्य (0) को भी शामिल कर लेते हैं, तो उस समूह को पूर्ण संख्याएं कहा जाता है (0, 1, 2, 3, 4, ...)।</li>
                    <li><strong>पूर्णांक (Integers):</strong> इस समूह में सभी पूर्ण संख्याएं और उनकी ऋणात्मक संख्याएं शामिल होती हैं। इसमें सभी धनात्मक संख्याएं, ऋणात्मक संख्याएं और शून्य शामिल हैं (...-3, -2, -1, 0, 1, 2, 3...).</li>
                    <li><strong>सम संख्याएं (Even Numbers):</strong> वह पूर्णांक जो 2 से पूरी तरह विभाजित हो जाता है, सम संख्या कहलाती है। ये संख्याएं हमेशा 0, 2, 4, 6, या 8 पर समाप्त होती हैं।</li>
                    <li><strong>विषम संख्याएं (Odd Numbers):</strong> वह पूर्णांक जो 2 से पूरी तरह विभाजित नहीं होता, विषम संख्या कहलाती है। ये संख्याएं हमेशा 1, 3, 5, 7, या 9 पर समाप्त होती हैं।</li>
                    <li><strong>अभाज्य संख्याएं (Prime Numbers):</strong> एक अभाज्य संख्या वह प्राकृत संख्या है जो 1 से बड़ी हो और जिसके केवल दो ही गुणनखंड हों: 1 और वह संख्या स्वयं (जैसे 2, 3, 5, 7, 11)।</li>
                    <li><strong>भाज्य संख्याएं (Composite Numbers):</strong> एक भाज्य संख्या वह प्राकृत संख्या है जो 1 से बड़ी हो और जिसके दो से अधिक गुणनखंड हों। यानी, इसे 1 और स्वयं के अलावा अन्य संख्याओं से भी विभाजित किया जा सकता है (जैसे 4, 6, 8, 9)।</li>
                </ul>

                <h4>2. उच्च स्तरीय संख्याएं (कक्षा 9-10)</h4>
                <ul>
                    <li><strong>परिमेय संख्याएं (Rational Numbers):</strong> वह संख्या जिसे p/q के रूप में लिखा जा सके, जहाँ p और q पूर्णांक हैं और हर (denominator) q का मान शून्य (0) नहीं है।</li>
                    <li><strong>अपरिमेय संख्याएं (Irrational Numbers):</strong> वे संख्याएं जिन्हें साधारण भिन्न के रूप में नहीं लिखा जा सकता क्योंकि उनका दशमलव विस्तार कभी समाप्त नहीं होता और न ही दोहराता है (जैसे √2, π)।</li>
                    <li><strong>वास्तविक संख्याएं (Real Numbers):</strong> वास्तविक संख्याओं के समूह में सभी परिमेय और अपरिमेय संख्याएं शामिल होती हैं जिन्हें संख्या रेखा (Number Line) पर दर्शाया जा सकता है।</li>
                </ul>
            ` 
        },
"formulas": [
            { 
                "en": "Sum of first n natural numbers: S = n(n+1)/2", 
                "hi": "प्रथम n प्राकृतिक संख्याओं का योग: S = n(n+1)/2" 
            },
            { 
                "en": "Sum of first n even numbers: S = n(n+1)", 
                "hi": "प्रथम n सम संख्याओं का योग: S = n(n+1)" 
            },
            { 
                "en": "Sum of first n odd numbers: S = n²", 
                "hi": "प्रथम n विषम संख्याओं का योग: S = n²" 
            },
            { 
                "en": "Sum of squares of first n natural numbers: S = n(n+1)(2n+1)/6", 
                "hi": "प्रथम n प्राकृतिक संख्याओं के वर्गों का योग: S = n(n+1)(2n+1)/6" 
            },
            { 
                "en": "Sum of cubes of first n natural numbers: S = [n(n+1)/2]²", 
                "hi": "प्रथम n प्राकृतिक संख्याओं के घनों का योग: S = [n(n+1)/2]²" 
            },
{ "en": "<h3>Divisibility Rules:</h3>", "hi": "<h3>विभाज्यता के नियम:</h3>" },
            { "en": "Divisibility by 2: The last digit is 0, 2, 4, 6, or 8.", "hi": "2 से विभाज्यता: अंतिम अंक 0, 2, 4, 6, या 8 हो।" },
            { "en": "Divisibility by 3: The sum of all digits is divisible by 3.", "hi": "3 से विभाज्यता: सभी अंकों का योग 3 से विभाजित हो।" },
            { "en": "Divisibility by 4: The last two digits are divisible by 4.", "hi": "4 से विभाज्यता: अंतिम दो अंक 4 से विभाजित हों।" },
            { "en": "Divisibility by 5: The last digit is 0 or 5.", "hi": "5 से विभाज्यता: अंतिम अंक 0 या 5 हो।" },
            { "en": "Divisibility by 6: The number must be divisible by both 2 and 3.", "hi": "6 से विभाज्यता: संख्या 2 और 3 दोनों से विभाजित होनी चाहिए।" },
            { "en": "Divisibility by 8: The last three digits are divisible by 8.", "hi": "8 से विभाज्यता: अंतिम तीन अंक 8 से विभाजित हों।" },
            { "en": "Divisibility by 9: The sum of all digits is divisible by 9.", "hi": "9 से विभाज्यता: सभी अंकों का योग 9 से विभाजित हो।" },
            { "en": "Divisibility by 10: The last digit is 0.", "hi": "10 से विभाज्यता: अंतिम अंक 0 हो।" },
            { "en": "Divisibility by 11: The difference between the sum of digits at odd and even places is 0 or divisible by 11.", "hi": "11 से विभाज्यता: विषम और सम स्थानों के अंकों के योग का अंतर 0 हो या 11 से विभाजित हो।" }
        ],
      "solved_examples": [
    {"q": {"en": "Find the sum of first 10 natural numbers.", "hi": "प्रथम 10 प्राकृतिक संख्याओं का योग?"}, "steps": {"en": ["n=10", "n(n+1)/2", "10*11/2=55"], "hi": ["n=10", "n(n+1)/2", "10*11/2=55"]}},
    {"q": {"en": "Is 123 divisible by 3?", "hi": "क्या 123, 3 से विभाज्य है?"}, "steps": {"en": ["1+2+3=6", "6 is div by 3", "Yes"], "hi": ["1+2+3=6", "6, 3 से विभाज्य है", "हाँ"]}},
    {"q": {"en": "Smallest prime number?", "hi": "सबसे छोटी अभाज्य संख्या?"}, "steps": {"en": ["Prime starts from 2", "1 is not prime", "Answer: 2"], "hi": ["अभाज्य 2 से शुरू होती है", "1 अभाज्य नहीं है", "उत्तर: 2"]}},
    {"q": {"en": "Find 5th even number.", "hi": "5वीं सम संख्या ज्ञात करें।"}, "steps": {"en": ["Formula 2n", "2*5=10", "Answer: 10"], "hi": ["सूत्र 2n", "2*5=10", "उत्तर: 10"]}},
    {"q": {"en": "Is 100 divisible by 4?", "hi": "क्या 100, 4 से विभाज्य है?"}, "steps": {"en": ["Last 2 digits 00", "00 div by 4", "Yes"], "hi": ["अंतिम दो अंक 00", "00, 4 से विभाज्य है", "हाँ"]}},
    {"q": {"en": "Sum of first 5 odd numbers.", "hi": "प्रथम 5 विषम संख्याओं का योग?"}, "steps": {"en": ["n=5", "n^2", "5*5=25"], "hi": ["n=5", "n^2", "5*5=25"]}},
    {"q": {"en": "Factor of 12?", "hi": "12 का गुणनखंड?"}, "steps": {"en": ["1, 2, 3, 4, 6, 12", "All these divide 12", "Correct"], "hi": ["1, 2, 3, 4, 6, 12", "ये सभी 12 को विभाजित करते हैं", "सही"]}},
    {"q": {"en": "Check 71 prime or not?", "hi": "क्या 71 अभाज्य है?"}, "steps": {"en": ["Check factors", "Not divisible by 2,3,5,7", "It is Prime"], "hi": ["गुणनखंड चेक करें", "2,3,5,7 से विभाज्य नहीं", "यह अभाज्य है"]}},
    {"q": {"en": "Place value of 5 in 567.", "hi": "567 में 5 का स्थानीय मान?"}, "steps": {"en": ["5 is at hundreds place", "Value is 500", "Answer: 500"], "hi": ["5 सैकड़े के स्थान पर है", "मान 500 है", "उत्तर: 500"]}},
    {"q": {"en": "10th odd number?", "hi": "10वीं विषम संख्या?"}, "steps": {"en": ["2n-1", "2*10-1", "19"], "hi": ["2n-1", "2*10-1", "19"]}},
    {"q": {"en": "Is 88 div by 11?", "hi": "क्या 88, 11 से विभाज्य है?"}, "steps": {"en": ["88/11=8", "No remainder", "Yes"], "hi": ["88/11=8", "कोई शेष नहीं", "हाँ"]}},
    {"q": {"en": "Difference of 10 and -5?", "hi": "10 और -5 का अंतर?"}, "steps": {"en": ["10 - (-5)", "10 + 5", "15"], "hi": ["10 - (-5)", "10 + 5", "15"]}},
    {"q": {"en": "Square of 12?", "hi": "12 का वर्ग?"}, "steps": {"en": ["12*12", "144", "Answer: 144"], "hi": ["12*12", "144", "उत्तर: 144"]}},
    {"q": {"en": "Cube of 3?", "hi": "3 का घन?"}, "steps": {"en": ["3*3*3", "27", "Answer: 27"], "hi": ["3*3*3", "27", "उत्तर: 27"]}},
    {"q": {"en": "Is 50 div by 5?", "hi": "क्या 50, 5 से विभाज्य है?"}, "steps": {"en": ["Ends with 0", "Divisible by 5", "Yes"], "hi": ["अंतिम अंक 0", "5 से विभाज्य है", "हाँ"]}},
    {"q": {"en": "Smallest composite number?", "hi": "सबसे छोटी भाज्य संख्या?"}, "steps": {"en": ["Starts from 4", "Factors 1,2,4", "Answer: 4"], "hi": ["4 से शुरू होती है", "गुणनखंड 1,2,4", "उत्तर: 4"]}},
    {"q": {"en": "Add 0.5 + 0.5.", "hi": "0.5 + 0.5 जोड़ें।"}, "steps": {"en": ["0.5 + 0.5", "1.0", "Answer: 1"], "hi": ["0.5 + 0.5", "1.0", "उत्तर: 1"]}},
    {"q": {"en": "Is 99 div by 9?", "hi": "क्या 99, 9 से विभाज्य है?"}, "steps": {"en": ["9+9=18", "18 div by 9", "Yes"], "hi": ["9+9=18", "18, 9 से विभाज्य है", "हाँ"]}},
    {"q": {"en": "Next prime after 7?", "hi": "7 के बाद अगली अभाज्य संख्या?"}, "steps": {"en": ["8 no, 9 no, 10 no", "11 is prime", "Answer: 11"], "hi": ["8 नहीं, 9 नहीं, 10 नहीं", "11 अभाज्य है", "उत्तर: 11"]}},
    {"q": {"en": "Even number between 3 and 5?", "hi": "3 और 5 के बीच सम संख्या?"}, "steps": {"en": ["The number is 4", "4 is even", "Answer: 4"], "hi": ["संख्या 4 है", "4 सम है", "उत्तर: 4"]}},
    {"q": {"en": "Is 200 div by 8?", "hi": "क्या 200, 8 से विभाज्य है?"}, "steps": {"en": ["200/8", "25", "Yes"], "hi": ["200/8", "25", "हाँ"]}},
    {"q": {"en": "Smallest natural number?", "hi": "सबसे छोटी प्राकृत संख्या?"}, "steps": {"en": ["Counting starts at 1", "Answer: 1"], "hi": ["गिनती 1 से शुरू", "उत्तर: 1"]}},
    {"q": {"en": "Sum of first 3 squares.", "hi": "प्रथम 3 वर्गों का योग?"}, "steps": {"en": ["1+4+9", "14", "Answer: 14"], "hi": ["1+4+9", "14", "उत्तर: 14"]}},
    {"q": {"en": "Is 555 div by 5?", "hi": "क्या 555, 5 से विभाज्य है?"}, "steps": {"en": ["Ends in 5", "Yes"], "hi": ["अंतिम अंक 5", "हाँ"]}},
    {"q": {"en": "Value of √16?", "hi": "√16 का मान?"}, "steps": {"en": ["4*4=16", "Answer: 4"], "hi": ["4*4=16", "उत्तर: 4"]}},
    {"q": {"en": "15th natural number?", "hi": "15वीं प्राकृत संख्या?"}, "steps": {"en": ["Sequence 1,2,3...", "Answer: 15"], "hi": ["क्रम 1,2,3...", "उत्तर: 15"]}},
    {"q": {"en": "Check 222 div by 6?", "hi": "222 क्या 6 से विभाज्य है?"}, "steps": {"en": ["Div by 2 (yes), Div by 3 (yes)", "Yes"], "hi": ["2 से विभाज्य (हाँ), 3 से (हाँ)", "हाँ"]}},
    {"q": {"en": "Is 10 prime?", "hi": "क्या 10 अभाज्य है?"}, "steps": {"en": ["Factors 1,2,5,10", "No, composite"], "hi": ["गुणनखंड 1,2,5,10", "नहीं, भाज्य है"]}},
    {"q": {"en": "What is 10/2?", "hi": "10/2 क्या है?"}, "steps": {"en": ["5", "Answer: 5"], "hi": ["5", "उत्तर: 5"]}},
    {"q": {"en": "Smallest whole number?", "hi": "सबसे छोटी पूर्ण संख्या?"}, "steps": {"en": ["Whole starts from 0", "Answer: 0"], "hi": ["पूर्ण संख्या 0 से शुरू", "उत्तर: 0"]}},
    {"q": {"en": "Sum of 1+2+3+4?", "hi": "1+2+3+4 का योग?"}, "steps": {"en": ["10", "Answer: 10"], "hi": ["10", "उत्तर: 10"]}},
    {"q": {"en": "Is 33 div by 3?", "hi": "क्या 33, 3 से विभाज्य है?"}, "steps": {"en": ["3+3=6", "Yes"], "hi": ["3+3=6", "हाँ"]}},
    {"q": {"en": "Next even after 8?", "hi": "8 के बाद अगली सम संख्या?"}, "steps": {"en": ["9 is odd", "10 is even"], "hi": ["9 विषम है", "10 सम है"]}},
    {"q": {"en": "Is 1 rational?", "hi": "क्या 1 परिमेय है?"}, "steps": {"en": ["1/1", "Yes"], "hi": ["1/1", "हाँ"]}},
    {"q": {"en": "What is 0*5?", "hi": "0*5 क्या है?"}, "steps": {"en": ["0", "Answer: 0"], "hi": ["0", "उत्तर: 0"]}},
    {"q": {"en": "Check 44 div by 4?", "hi": "44 क्या 4 से विभाज्य है?"}, "steps": {"en": ["11*4=44", "Yes"], "hi": ["11*4=44", "हाँ"]}},
    {"q": {"en": "Square of 5?", "hi": "5 का वर्ग?"}, "steps": {"en": ["25", "Answer: 25"], "hi": ["25", "उत्तर: 25"]}},
    {"q": {"en": "Next odd after 1?", "hi": "1 के बाद अगली विषम?"}, "steps": {"en": ["2 is even", "3 is odd"], "hi": ["2 सम है", "3 विषम है"]}},
    {"q": {"en": "Is 14 div by 7?", "hi": "क्या 14, 7 से विभाज्य है?"}, "steps": {"en": ["14/7=2", "Yes"], "hi": ["14/7=2", "हाँ"]}},
    {"q": {"en": "Value of √25?", "hi": "√25 का मान?"}, "steps": {"en": ["5", "Answer: 5"], "hi": ["5", "उत्तर: 5"]}},
    {"q": {"en": "Sum of 5+5+5?", "hi": "5+5+5 का योग?"}, "steps": {"en": ["15", "Answer: 15"], "hi": ["15", "उत्तर: 15"]}},
    {"q": {"en": "Is 21 div by 7?", "hi": "क्या 21, 7 से विभाज्य है?"}, "steps": {"en": ["21/7=3", "Yes"], "hi": ["21/7=3", "हाँ"]}},
    {"q": {"en": "Check 10 div by 2?", "hi": "10 क्या 2 से विभाज्य है?"}, "steps": {"en": ["Ends in 0", "Yes"], "hi": ["अंतिम 0", "हाँ"]}},
    {"q": {"en": "Square of 2?", "hi": "2 का वर्ग?"}, "steps": {"en": ["4", "Answer: 4"], "hi": ["4", "उत्तर: 4"]}},
    {"q": {"en": "Is 49 div by 7?", "hi": "क्या 49, 7 से विभाज्य है?"}, "steps": {"en": ["7*7=49", "Yes"], "hi": ["7*7=49", "हाँ"]}},
    {"q": {"en": "Next prime after 2?", "hi": "2 के बाद अगली अभाज्य?"}, "steps": {"en": ["3", "Answer: 3"], "hi": ["3", "उत्तर: 3"]}},
    {"q": {"en": "Is 0 div by 2?", "hi": "क्या 0, 2 से विभाज्य है?"}, "steps": {"en": ["0/2=0", "Yes"], "hi": ["0/2=0", "हाँ"]}},
    {"q": {"en": "Sum of 2+2?", "hi": "2+2 का योग?"}, "steps": {"en": ["4", "Answer: 4"], "hi": ["4", "उत्तर: 4"]}},
    {"q": {"en": "Is 13 prime?", "hi": "क्या 13 अभाज्य है?"}, "steps": {"en": ["Factors 1,13", "Yes"], "hi": ["गुणनखंड 1,13", "हाँ"]}},
    {"q": {"en": "Square of 10?", "hi": "10 का वर्ग?"}, "steps": {"en": ["100", "Answer: 100"], "hi": ["100", "उत्तर: 100"]
      
               }
            }
        ]
    }
};
