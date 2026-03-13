import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      appTitle: "Kids Learn & Fun Time!",
      menu: {
        alphabets: "ABC Learning",
        numbers: "Numbers Fun",
        stories: "Story Time",
        games: "Fun Games",
        draw: "Draw & Trace"
      },
      alphabets: {
        title: "Learn the Alphabet!",
        clickLetter: "Click on any letter to learn more!"
      },
      numbers: {
        title: "Learn Numbers!",
        clickNumber: "Click on any number to learn more!"
      },
      stories: {
        title: "Story Time",
        previous: "Previous Story",
        next: "Next Story",
        story1: {
          title: "The Friendly Lion 🦁",
          content: "Once upon a time, there was a lion named Leo who loved to make friends. Every day, Leo would visit different animals in the jungle and play with them. He learned that being kind was more important than being strong!"
        },
        story2: {
          title: "The Magic Rainbow 🌈",
          content: "Little Lily found a magical rainbow that could grant wishes. But instead of wishing for toys, she wished for all children to be happy. The rainbow was so touched that it painted beautiful colors across the sky forever!"
        },
        story3: {
          title: "The Brave Little Star ⭐",
          content: "High up in the sky lived a tiny star named Sparkle. Though small, Sparkle shined the brightest to help lost travelers find their way home. Remember, being small doesn't mean you can't do big things!"
        },
        story4: {
          title: "The Curious Bunny 🐰",
          content: "Bella the bunny loved asking questions. 'Why is the sky blue?' 'How do flowers grow?' Her curiosity helped her discover amazing things and she became the smartest bunny in the forest!"
        },
        story5: {
          title: "The Helpful Elephant 🐘",
          content: "Emma the elephant used her long trunk to help everyone in the jungle. She helped birds build nests, gave water to flowers, and even saved a baby monkey from a tree. Everyone loved Emma because she had the biggest heart!"
        },
        story6: {
          title: "The Dancing Butterfly 🦋",
          content: "Betty the butterfly loved to dance in the garden. Her colorful wings sparkled in the sunlight. She taught all her friends that dancing makes everyone happy, and soon the whole garden was filled with joy!"
        },
        story7: {
          title: "The Wise Owl 🦉",
          content: "Oliver the owl lived in an old oak tree. He loved reading books all night long. He learned that knowledge is the greatest treasure, and he shared his wisdom with all the young animals in the forest!"
        },
        story8: {
          title: "The Singing Frog 🐸",
          content: "Freddy the frog had the most beautiful voice. Every evening, he sang songs by the pond. His music made everyone smile and taught them that everyone has a special gift to share with the world!"
        }
      },
      games: {
        title: "Fun Learning Games!",
        chooseGame: "Choose a game to play!",
        matching: "Letter Matching",
        findLetter: "Find the Letter",
        quiz: "Quick Quiz",
        score: "Score",
        playAgain: "Play Again",
        backToGames: "Back to Games",
        findInstruction: "Find the letter",
        correct: "Correct! 🎉",
        tryAgain: "Try Again! 💪"
      },
      draw: {
        title: "Draw & Trace Letters!",
        clear: "Clear"
      },
      backHome: "Back to Home"
    }
  },
  es: {
    translation: {
      appTitle: "¡Aprende y Diviértete!",
      menu: {
        alphabets: "Aprender ABC",
        numbers: "Números Divertidos",
        stories: "Hora del Cuento",
        games: "Juegos Divertidos",
        draw: "Dibujar y Trazar"
      },
      alphabets: {
        title: "¡Aprende el Alfabeto!",
        clickLetter: "¡Haz clic en cualquier letra para aprender más!"
      },
      numbers: {
        title: "¡Aprende los Números!",
        clickNumber: "¡Haz clic en cualquier número para aprender más!"
      },
      stories: {
        title: "Hora del Cuento",
        previous: "Cuento Anterior",
        next: "Siguiente Cuento",
        story1: {
          title: "El León Amigable 🦁",
          content: "Había una vez un león llamado Leo que amaba hacer amigos. Cada día, Leo visitaba diferentes animales en la selva y jugaba con ellos. ¡Aprendió que ser amable era más importante que ser fuerte!"
        },
        story2: {
          title: "El Arcoíris Mágico 🌈",
          content: "La pequeña Lily encontró un arcoíris mágico que podía conceder deseos. Pero en lugar de desear juguetes, deseó que todos los niños fueran felices. ¡El arcoíris se conmovió tanto que pintó hermosos colores en el cielo para siempre!"
        },
        story3: {
          title: "La Pequeña Estrella Valiente ⭐",
          content: "En lo alto del cielo vivía una pequeña estrella llamada Brillo. Aunque pequeña, Brillo brillaba más fuerte para ayudar a los viajeros perdidos a encontrar su camino a casa. ¡Recuerda, ser pequeño no significa que no puedas hacer grandes cosas!"
        },
        story4: {
          title: "El Conejito Curioso 🐰",
          content: "A Bella la conejita le encantaba hacer preguntas. '¿Por qué el cielo es azul?' '¿Cómo crecen las flores?' ¡Su curiosidad la ayudó a descubrir cosas asombrosas y se convirtió en la conejita más inteligente del bosque!"
        }
      },
      games: {
        title: "¡Juegos de Aprendizaje Divertidos!",
        chooseGame: "¡Elige un juego para jugar!",
        matching: "Emparejar Letras",
        findLetter: "Encuentra la Letra",
        quiz: "Prueba Rápida",
        score: "Puntuación",
        playAgain: "Jugar de Nuevo",
        backToGames: "Volver a Juegos",
        findInstruction: "Encuentra la letra",
        correct: "¡Correcto! 🎉",
        tryAgain: "¡Inténtalo de Nuevo! 💪"
      },
      draw: {
        title: "¡Dibuja y Traza Letras!",
        clear: "Borrar"
      },
      backHome: "Volver al Inicio"
    }
  },
  fr: {
    translation: {
      appTitle: "Apprendre et S'amuser!",
      menu: {
        alphabets: "Apprendre l'ABC",
        numbers: "Chiffres Amusants",
        stories: "Heure du Conte",
        games: "Jeux Amusants",
        draw: "Dessiner et Tracer"
      },
      alphabets: {
        title: "Apprends l'Alphabet!",
        clickLetter: "Clique sur n'importe quelle lettre pour en savoir plus!"
      },
      numbers: {
        title: "Apprends les Chiffres!",
        clickNumber: "Clique sur n'importe quel chiffre pour en savoir plus!"
      },
      stories: {
        title: "Heure du Conte",
        previous: "Histoire Précédente",
        next: "Histoire Suivante",
        story1: {
          title: "Le Lion Amical 🦁",
          content: "Il était une fois un lion nommé Léo qui aimait se faire des amis. Chaque jour, Léo visitait différents animaux dans la jungle et jouait avec eux. Il a appris qu'être gentil était plus important qu'être fort!"
        },
        story2: {
          title: "L'Arc-en-ciel Magique 🌈",
          content: "La petite Lily a trouvé un arc-en-ciel magique qui pouvait exaucer des vœux. Mais au lieu de souhaiter des jouets, elle a souhaité que tous les enfants soient heureux. L'arc-en-ciel a été si touché qu'il a peint de belles couleurs dans le ciel pour toujours!"
        },
        story3: {
          title: "La Petite Étoile Courageuse ⭐",
          content: "Haut dans le ciel vivait une petite étoile nommée Étincelle. Bien que petite, Étincelle brillait le plus fort pour aider les voyageurs perdus à retrouver leur chemin. Souviens-toi, être petit ne signifie pas que tu ne peux pas faire de grandes choses!"
        },
        story4: {
          title: "Le Lapin Curieux 🐰",
          content: "Bella le lapin adorait poser des questions. 'Pourquoi le ciel est-il bleu?' 'Comment poussent les fleurs?' Sa curiosité l'a aidée à découvrir des choses incroyables et elle est devenue le lapin le plus intelligent de la forêt!"
        }
      },
      games: {
        title: "Jeux d'Apprentissage Amusants!",
        chooseGame: "Choisis un jeu pour jouer!",
        matching: "Associer les Lettres",
        findLetter: "Trouve la Lettre",
        quiz: "Quiz Rapide",
        score: "Score",
        playAgain: "Rejouer",
        backToGames: "Retour aux Jeux",
        findInstruction: "Trouve la lettre",
        correct: "Correct! 🎉",
        tryAgain: "Réessaie! 💪"
      },
      draw: {
        title: "Dessine et Trace les Lettres!",
        clear: "Effacer"
      },
      backHome: "Retour à l'Accueil"
    }
  },
  hi: {
    translation: {
      appTitle: "बच्चों का सीखना और मज़ा!",
      menu: {
        alphabets: "ABC सीखें",
        numbers: "संख्या मज़ा",
        stories: "कहानी का समय",
        games: "मज़ेदार खेल",
        draw: "बनाओ और ट्रेस करो"
      },
      alphabets: {
        title: "वर्णमाला सीखें!",
        clickLetter: "अधिक जानने के लिए किसी भी अक्षर पर क्लिक करें!"
      },
      numbers: {
        title: "संख्याएँ सीखें!",
        clickNumber: "अधिक जानने के लिए किसी भी संख्या पर क्लिक करें!"
      },
      stories: {
        title: "कहानी का समय",
        previous: "पिछली कहानी",
        next: "अगली कहानी",
        story1: {
          title: "दोस्ताना शेर 🦁",
          content: "एक बार की बात है, लियो नाम का एक शेर था जो दोस्त बनाना पसंद करता था। हर दिन, लियो जंगल में विभिन्न जानवरों से मिलने जाता था और उनके साथ खेलता था। उसने सीखा कि मजबूत होने से अधिक महत्वपूर्ण दयालु होना है!"
        },
        story2: {
          title: "जादुई इंद्रधनुष 🌈",
          content: "छोटी लिली को एक जादुई इंद्रधनुष मिला जो इच्छाएं पूरी कर सकता था। लेकिन खिलौनों की इच्छा करने के बजाय, उसने सभी बच्चों के खुश रहने की इच्छा की। इंद्रधनुष इतना प्रभावित हुआ कि उसने हमेशा के लिए आकाश में सुंदर रंग चित्रित किए!"
        },
        story3: {
          title: "बहादुर छोटा तारा ⭐",
          content: "आकाश में ऊंचे स्पार्कल नाम का एक छोटा तारा रहता था। छोटे होने के बावजूद, स्पार्कल खोए हुए यात्रियों को घर का रास्ता खोजने में मदद करने के लिए सबसे चमकीला चमकता था। याद रखें, छोटे होने का मतलब यह नहीं है कि आप बड़ी चीजें नहीं कर सकते!"
        },
        story4: {
          title: "जिज्ञासु खरगोश 🐰",
          content: "बेला खरगोश को सवाल पूछना बहुत पसंद था। 'आसमान नीला क्यों है?' 'फूल कैसे उगते हैं?' उसकी जिज्ञासा ने उसे अद्भुत चीजें खोजने में मदद की और वह जंगल की सबसे चतुर खरगोश बन गई!"
        }
      },
      games: {
        title: "मज़ेदार सीखने के खेल!",
        chooseGame: "खेलने के लिए एक खेल चुनें!",
        matching: "अक्षर मिलान",
        findLetter: "अक्षर खोजें",
        quiz: "त्वरित प्रश्नोत्तरी",
        score: "स्कोर",
        playAgain: "फिर से खेलें",
        backToGames: "खेलों पर वापस जाएं",
        findInstruction: "अक्षर खोजें",
        correct: "सही! 🎉",
        tryAgain: "फिर से प्रयास करें! 💪"
      },
      draw: {
        title: "अक्षर बनाओ और ट्रेस करो!",
        clear: "साफ़ करें"
      },
      backHome: "होम पर वापस जाएं"
    }
  },
  zh: {
    translation: {
      appTitle: "儿童学习与娱乐!",
      menu: {
        alphabets: "学习ABC",
        numbers: "数字乐趣",
        stories: "故事时间",
        games: "趣味游戏",
        draw: "绘画和描摹"
      },
      alphabets: {
        title: "学习字母表!",
        clickLetter: "点击任何字母了解更多!"
      },
      numbers: {
        title: "学习数字!",
        clickNumber: "点击任何数字了解更多!"
      },
      stories: {
        title: "故事时间",
        previous: "上一个故事",
        next: "下一个故事",
        story1: {
          title: "友好的狮子 🦁",
          content: "从前，有一只名叫里奥的狮子喜欢交朋友。每天，里奥都会拜访丛林里的不同动物并与它们一起玩耍。他学到了善良比强壮更重要！"
        },
        story2: {
          title: "神奇的彩虹 🌈",
          content: "小莉莉发现了一道可以实现愿望的神奇彩虹。但她没有许愿要玩具，而是希望所有孩子都快乐。彩虹非常感动，永远在天空中画出美丽的色彩！"
        },
        story3: {
          title: "勇敢的小星星 ⭐",
          content: "高高的天空中住着一颗名叫闪闪的小星星。虽然很小，但闪闪发出最亮的光芒帮助迷路的旅行者找到回家的路。记住，渺小并不意味着你不能做大事！"
        },
        story4: {
          title: "好奇的兔子 🐰",
          content: "兔子贝拉喜欢问问题。'为什么天空是蓝色的？''花是怎么长出来的？'她的好奇心帮助她发现了令人惊奇的事物，她成为了森林里最聪明的兔子！"
        }
      },
      games: {
        title: "趣味学习游戏!",
        chooseGame: "选择一个游戏来玩!",
        matching: "字母配对",
        findLetter: "找字母",
        quiz: "快速问答",
        score: "得分",
        playAgain: "再玩一次",
        backToGames: "返回游戏",
        findInstruction: "找字母",
        correct: "正确! 🎉",
        tryAgain: "再试一次! 💪"
      },
      draw: {
        title: "绘画和描摹字母!",
        clear: "清除"
      },
      backHome: "返回主页"
    }
  },
  ar: {
    translation: {
      appTitle: "التعلم والمرح للأطفال!",
      menu: {
        alphabets: "تعلم الحروف",
        numbers: "متعة الأرقام",
        stories: "وقت القصة",
        games: "ألعاب ممتعة",
        draw: "ارسم وتتبع"
      },
      alphabets: {
        title: "تعلم الأبجدية!",
        clickLetter: "انقر على أي حرف لمعرفة المزيد!"
      },
      numbers: {
        title: "تعلم الأرقام!",
        clickNumber: "انقر على أي رقم لمعرفة المزيد!"
      },
      stories: {
        title: "وقت القصة",
        previous: "القصة السابقة",
        next: "القصة التالية",
        story1: {
          title: "الأسد الودود 🦁",
          content: "ذات مرة، كان هناك أسد يدعى ليو يحب تكوين الأصدقاء. كل يوم، كان ليو يزور حيوانات مختلفة في الغابة ويلعب معهم. تعلم أن اللطف أهم من القوة!"
        },
        story2: {
          title: "قوس قزح السحري 🌈",
          content: "وجدت ليلي الصغيرة قوس قزح سحري يمكنه تحقيق الأمنيات. لكن بدلاً من تمني الألعاب، تمنت أن يكون جميع الأطفال سعداء. تأثر قوس قزح كثيراً لدرجة أنه رسم ألواناً جميلة في السماء إلى الأبد!"
        },
        story3: {
          title: "النجمة الصغيرة الشجاعة ⭐",
          content: "عالياً في السماء عاشت نجمة صغيرة تدعى سباركل. على الرغم من صغر حجمها، كانت سباركل تتألق بشكل أكثر إشراقاً لمساعدة المسافرين الضائعين في العثور على طريق العودة إلى المنزل. تذكر، أن تكون صغيراً لا يعني أنه لا يمكنك فعل أشياء عظيمة!"
        },
        story4: {
          title: "الأرنب الفضولي 🐰",
          content: "كانت بيلا الأرنب تحب طرح الأسئلة. 'لماذا السماء زرقاء؟' 'كيف تنمو الزهور؟' ساعدها فضولها على اكتشاف أشياء مذهلة وأصبحت أذكى أرنب في الغابة!"
        }
      },
      games: {
        title: "ألعاب تعليمية ممتعة!",
        chooseGame: "اختر لعبة للعب!",
        matching: "مطابقة الحروف",
        findLetter: "ابحث عن الحرف",
        quiz: "اختبار سريع",
        score: "النتيجة",
        playAgain: "العب مرة أخرى",
        backToGames: "العودة إلى الألعاب",
        findInstruction: "ابحث عن الحرف",
        correct: "صحيح! 🎉",
        tryAgain: "حاول مرة أخرى! 💪"
      },
      draw: {
        title: "ارسم وتتبع الحروف!",
        clear: "مسح"
      },
      backHome: "العودة إلى الصفحة الرئيسية"
    }
  },
  de: {
    translation: {
      appTitle: "Kinder Lernen & Spaß!",
      menu: {
        alphabets: "ABC Lernen",
        numbers: "Zahlen Spaß",
        stories: "Geschichtenzeit",
        games: "Lustige Spiele",
        draw: "Zeichnen & Nachzeichnen"
      },
      alphabets: {
        title: "Lerne das Alphabet!",
        clickLetter: "Klicke auf einen Buchstaben, um mehr zu erfahren!"
      },
      numbers: {
        title: "Lerne Zahlen!",
        clickNumber: "Klicke auf eine Zahl, um mehr zu erfahren!"
      },
      stories: {
        title: "Geschichtenzeit",
        previous: "Vorherige Geschichte",
        next: "Nächste Geschichte",
        story1: {
          title: "Der Freundliche Löwe 🦁",
          content: "Es war einmal ein Löwe namens Leo, der es liebte, Freunde zu finden. Jeden Tag besuchte Leo verschiedene Tiere im Dschungel und spielte mit ihnen. Er lernte, dass Freundlichkeit wichtiger ist als Stärke!"
        },
        story2: {
          title: "Der Magische Regenbogen 🌈",
          content: "Die kleine Lily fand einen magischen Regenbogen, der Wünsche erfüllen konnte. Aber anstatt sich Spielzeug zu wünschen, wünschte sie sich, dass alle Kinder glücklich sind. Der Regenbogen war so gerührt, dass er für immer wunderschöne Farben an den Himmel malte!"
        },
        story3: {
          title: "Der Mutige Kleine Stern ⭐",
          content: "Hoch oben im Himmel lebte ein kleiner Stern namens Sparkle. Obwohl klein, leuchtete Sparkle am hellsten, um verirrten Reisenden zu helfen, nach Hause zu finden. Denk daran: Klein zu sein bedeutet nicht, dass du keine großen Dinge tun kannst!"
        },
        story4: {
          title: "Das Neugierige Häschen 🐰",
          content: "Bella das Häschen liebte es, Fragen zu stellen. 'Warum ist der Himmel blau?' 'Wie wachsen Blumen?' Ihre Neugier half ihr, erstaunliche Dinge zu entdecken, und sie wurde das klügste Häschen im Wald!"
        }
      },
      games: {
        title: "Lustige Lernspiele!",
        chooseGame: "Wähle ein Spiel zum Spielen!",
        matching: "Buchstaben Zuordnen",
        findLetter: "Finde den Buchstaben",
        quiz: "Schnelles Quiz",
        score: "Punktzahl",
        playAgain: "Nochmal Spielen",
        backToGames: "Zurück zu Spielen",
        findInstruction: "Finde den Buchstaben",
        correct: "Richtig! 🎉",
        tryAgain: "Versuch es nochmal! 💪"
      },
      draw: {
        title: "Zeichne und Zeichne Buchstaben nach!",
        clear: "Löschen"
      },
      backHome: "Zurück zur Startseite"
    }
  },
  te: {
    translation: {
      appTitle: "పిల్లల అభ్యాసం & వినోదం!",
      menu: {
        alphabets: "ABC నేర్చుకోండి",
        numbers: "సంఖ్యల వినోదం",
        stories: "కథల సమయం",
        games: "వినోద ఆటలు",
        draw: "గీయండి & అనుసరించండి"
      },
      alphabets: {
        title: "వర్ణమాల నేర్చుకోండి!",
        clickLetter: "మరింత తెలుసుకోవడానికి ఏదైనా అక్షరంపై క్లిక్ చేయండి!"
      },
      numbers: {
        title: "సంఖ్యలు నేర్చుకోండి!",
        clickNumber: "మరింత తెలుసుకోవడానికి ఏదైనా సంఖ్యపై క్లిక్ చేయండి!"
      },
      stories: {
        title: "కథల సమయం",
        previous: "మునుపటి కథ",
        next: "తదుపరి కథ",
        story1: {
          title: "స్నేహపూర్వక సింహం 🦁",
          content: "ఒకప్పుడు లియో అనే సింహం స్నేహితులను చేసుకోవడం చాలా ఇష్టపడేది. ప్రతిరోజూ, లియో అడవిలో వివిధ జంతువులను సందర్శించి వాటితో ఆడేది. బలంగా ఉండటం కంటే దయగా ఉండటం చాలా ముఖ్యం అని అది నేర్చుకుంది!"
        },
        story2: {
          title: "మాయా ఇంద్రధనస్సు 🌈",
          content: "చిన్న లిల్లీకి కోరికలు తీర్చగల మాయా ఇంద్రధనస్సు దొరికింది. కానీ బొమ్మల కోసం కోరుకోవడానికి బదులు, ఆమె అన్ని పిల్లలు సంతోషంగా ఉండాలని కోరుకుంది. ఇంద్రధనస్సు చాలా భావోద్వేగానికి గురై ఆకాశంలో శాశ్వతంగా అందమైన రంగులు చిత్రించింది!"
        },
        story3: {
          title: "ధైర్యవంతమైన చిన్న నక్షత్రం ⭐",
          content: "ఆకాశంలో ఎత్తుగా స్పార్కిల్ అనే చిన్న నక్షత్రం నివసించేది. చిన్నదైనప్పటికీ, తప్పిపోయిన ప్రయాణికులకు ఇంటికి వెళ్ళే మార్గాన్ని కనుగొనడానికి స్పార్కిల్ అత్యంత ప్రకాశవంతంగా ప్రకాశిస్తుంది. గుర్తుంచుకోండి, చిన్నగా ఉండటం వల్ల మీరు పెద్ద పనులు చేయలేరు అని కాదు!"
        },
        story4: {
          title: "ఆసక్తిగల కుందేలు 🐰",
          content: "బెల్లా కుందేలు ప్రశ్నలు అడగడం చాలా ఇష్టపడేది. 'ఆకాశం ఎందుకు నీలంగా ఉంటుంది?' 'పువ్వులు ఎలా పెరుగుతాయి?' ఆమె ఆసక్తి ఆమెకు అద్భుతమైన విషయాలను కనుగొనడంలో సహాయపడింది మరియు ఆమె అడవిలో అత్యంత తెలివైన కుందేలు అయింది!"
        }
      },
      games: {
        title: "వినోద అభ్యాస ఆటలు!",
        chooseGame: "ఆడటానికి ఒక ఆటను ఎంచుకోండి!",
        matching: "అక్షరాల సరిపోలిక",
        findLetter: "అక్షరాన్ని కనుగొనండి",
        quiz: "త్వరిత క్విజ్",
        score: "స్కోర్",
        playAgain: "మళ్లీ ఆడండి",
        backToGames: "ఆటలకు తిరిగి వెళ్ళండి",
        findInstruction: "అక్షరాన్ని కనుగొనండి",
        correct: "సరైనది! 🎉",
        tryAgain: "మళ్లీ ప్రయత్నించండి! 💪"
      },
      draw: {
        title: "అక్షరాలు గీయండి & అనుసరించండి!",
        clear: "క్లియర్ చేయండి"
      },
      backHome: "హోమ్‌కు తిరిగి వెళ్ళండి"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
