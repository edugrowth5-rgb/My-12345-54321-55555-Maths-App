const appData = {
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
            { 
                "q": { "en": "Find the sum of the first 10 natural numbers.", "hi": "प्रथम 10 प्राकृतिक संख्याओं का योग ज्ञात करें।" }, 
                "steps": { 
                    "en": ["Identify n: Here n = 10", "Use the formula: n(n+1)/2", "Substitute: 10 * (10+1) / 2", "Calculation: 10 * 11 / 2 = 55"],
                    "hi": ["n को पहचानें: यहाँ n = 10 है", "सूत्र का उपयोग करें: n(n+1)/2", "मान रखें: 10 * (10+1) / 2", "गणना करें: 10 * 11 / 2 = 55"]
                }
            }
        ]
    }
};
