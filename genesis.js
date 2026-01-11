let listaVersiculos = [];
let capituloAtual = 1;

// textos por capítulo e versículo
const textos = {
  1: { // capítulo 1
    1: "1 No princípio criou Deus o céu e a terra.",
    2: "2 E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.",
    3: "3 E disse Deus: Haja luz; e houve luz.",
    4: "4 E viu Deus que era boa a luz; e fez Deus separação entre a luz e as trevas.",
    5: "5 E Deus chamou à luz Dia; e às trevas chamou Noite. E foi a tarde e a manhã, o dia primeiro.",
    6: "6 E disse Deus: Haja uma expansão no meio das águas, e haja separação entre águas e águas.",
    7: "7 E fez Deus a expansão, e fez separação entre as águas que estavam debaixo da expansão e as águas que estavam sobre a expansão; e assim foi.",
    8: "8 E chamou Deus à expansão Céus, e foi a tarde e a manhã, o dia segundo.",
    9: "9 E disse Deus: Ajuntem-se as águas debaixo dos céus num lugar; e apareça a porção seca; e assim foi.",
    10: "10 E chamou Deus à porção seca Terra; e ao ajuntamento das águas chamou Mares; e viu Deus que era bom.",
    11: "11 E disse Deus: Produza a terra erva verde, erva que dê semente, árvore frutífera que dê fruto segundo a sua espécie, cuja semente está nela sobre a terra; e assim foi.",
    12: "12 E a terra produziu erva, erva dando semente conforme a sua espécie, e a árvore frutífera, cuja semente está nela conforme a sua espécie; e viu Deus que era bom.",
    13: "13 E foi a tarde e a manhã, o dia terceiro.",
    14: "14 E disse Deus: Haja luminares na expansão dos céus, para haver separação entre o dia e a noite; e sejam eles para sinais e para tempos determinados e para dias e anos.",
    15: "15 E sejam para luminares na expansão dos céus, para iluminar a terra; e assim foi.",
    16: "16 E fez Deus os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; e fez as estrelas.",
    17: "17 E Deus os pôs na expansão dos céus para iluminar a terra,",
    18: "18 E para governar o dia e a noite, e para fazer separação entre a luz e as trevas; e viu Deus que era bom.",
    19: "19 E foi a tarde e a manhã, o dia quarto.",
    20: "20 E disse Deus: Produzam as águas abundantemente répteis de alma vivente; e voem as aves sobre a face da expansão dos céus.",
    21: "21 E Deus criou as grandes baleias, e todo o réptil de alma vivente que as águas abundantemente produziram conforme as suas espécies; e toda a ave de asas conforme a sua espécie; e viu Deus que era bom.",
    22: "22 E Deus os abençoou, dizendo: Frutificai e multiplicai-vos, e enchei as águas nos mares; e as aves se multipliquem na terra.",
    23: "23 E foi a tarde e a manhã, o dia quinto.",
    24: "24 E disse Deus: Produza a terra alma vivente conforme a sua espécie; gado, e répteis e feras da terra conforme a sua espécie; e assim foi.",
    25: "25 E fez Deus as feras da terra conforme a sua espécie, e o gado conforme a sua espécie, e todo o réptil da terra conforme a sua espécie; e viu Deus que era bom.",
    26: "26 E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo o réptil que se move sobre a terra.",
    27: "27 E criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.",
    28: "28 E Deus os abençoou, e Deus lhes disse: Frutificai e multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai sobre os peixes do mar e sobre as aves dos céus, e sobre todo o animal que se move sobre a terra.",
    29: "29 E disse Deus: Eis que vos tenho dado toda a erva que dê semente, que está sobre a face de toda a terra; e toda a árvore, em que há fruto que dê semente, ser-vos-á para mantimento.",
    30: "30 E a todo o animal da terra, e a toda a ave dos céus, e a todo o réptil da terra, em que há alma vivente, toda a erva verde será para mantimento; e assim foi.",
    31: "31 E viu Deus tudo quanto tinha feito, e eis que era muito bom; e foi a tarde e a manhã, o dia sexto."
  },

  2: { // capítulo 2
    1: "1 Assim os céus, a terra e todo o seu exército foram acabados.",
    2: "2 E havendo Deus acabado no dia sétimo a obra que fizera, descansou no sétimo dia de toda a sua obra, que tinha feito.",
    3: "3 E abençoou Deus o dia sétimo, e o santificou; porque nele descansou de toda a sua obra que Deus criara e fizera.",
    4: "4 Estas são as origens dos céus e da terra, quando foram criados; no dia em que o Senhor Deus fez a terra e os céus,",
    5: "5 E toda a planta do campo que ainda não estava na terra, e toda a erva do campo que ainda não brotava; porque ainda o Senhor Deus não tinha feito chover sobre a terra, e não havia homem para lavrar a terra.",
    6: "6 Um vapor, porém, subia da terra, e regava toda a face da terra.",
    7: "7 E formou o Senhor Deus o homem do pó da terra, e soprou em suas narinas o fôlego da vida; e o homem foi feito alma vivente.",
    8: "8 E plantou o Senhor Deus um jardim no Éden, do lado oriental; e pôs ali o homem que tinha formado.",
    9: "9 E o Senhor Deus fez brotar da terra toda a árvore agradável à vista, e boa para comida; e a árvore da vida no meio do jardim, e a árvore do conhecimento do bem e do mal.",
    10: "10 E saía um rio do Éden para regar o jardim; e dali se dividia e se tornava em quatro braços.",
    11: "11 O nome do primeiro é Pisom; este é o que rodeia toda a terra de Havilá, onde há ouro.",
    12: "12 E o ouro dessa terra é bom; ali há o bdélio, e a pedra sardônica.",
    13: "13 E o nome do segundo rio é Giom; este é o que rodeia toda a terra de Cuxe.",
    14: "14 E o nome do terceiro rio é Tigre; este é o que vai para o lado oriental da Assíria; e o quarto rio é o Eufrates.",
    15: "15 E tomou o Senhor Deus o homem, e o pôs no jardim do Éden para o lavrar e o guardar.",
    16: "16 E ordenou o Senhor Deus ao homem, dizendo: De toda a árvore do jardim comerás livremente,",
    17: "17 Mas da árvore do conhecimento do bem e do mal, dela não comerás; porque no dia em que dela comeres, certamente morrerás.",
    18: "18 E disse o Senhor Deus: Não é bom que o homem esteja só; far-lhe-ei uma ajudadora idônea para ele.",
    19: "19 Havendo, pois, o Senhor Deus formado da terra todo o animal do campo, e toda a ave dos céus, os trouxe a Adão, para este ver como lhes chamaria; e tudo o que Adão chamou a toda a alma vivente, isso foi o seu nome.",
    20: "20 E Adão pôs os nomes a todo o gado, e às aves dos céus, e a todo o animal do campo; mas para o homem não se achava ajudadora idônea.",
    21: "21 Então o Senhor Deus fez cair um sono pesado sobre Adão, e este adormeceu; e tomou uma das suas costelas, e cerrou a carne em seu lugar;",
    22: "22 E da costela que o Senhor Deus tomou do homem, formou uma mulher, e trouxe-a a Adão.",
    23: "23 E disse Adão: Esta é agora osso dos meus ossos, e carne da minha carne; esta será chamada mulher, porquanto do homem foi tomada.",
    24: "24 Portanto deixará o homem o seu pai e a sua mãe, e apegar-se-á à sua mulher, e serão ambos uma carne.",
    25: "25 E ambos estavam nus, o homem e a sua mulher; e não se envergonhavam."
  },

  3: { // capítulo 3
    1: "1 Ora, a serpente era mais astuta que todas as alimárias do campo que o SENHOR Deus tinha feito. E esta disse à mulher: É assim que Deus disse: Não comereis de toda a árvore do jardim?",
    2: "2 E disse a mulher à serpente: Do fruto das árvores do jardim comeremos,",
    3: "3 Mas do fruto da árvore que está no meio do jardim, disse Deus: Não comereis dele, nem nele tocareis para que não morrais.",
    4: "4 Então a serpente disse à mulher: Certamente não morrereis.",
    5: "5 Porque Deus sabe que no dia em que dele comerdes se abrirão os vossos olhos, e sereis como Deus, sabendo o bem e o mal.",
    6: "6 E viu a mulher que aquela árvore era boa para se comer, e agradável aos olhos, e árvore desejável para dar entendimento; tomou do seu fruto, e comeu, e deu também a seu marido, e ele comeu com ela.",
    7: "7 Então foram abertos os olhos de ambos, e conheceram que estavam nus; e coseram folhas de figueira, e fizeram para si aventais.",
    8: "8 E ouviram a voz do Senhor Deus, que passeava no jardim pela viração do dia; e esconderam-se Adão e sua mulher da presença do Senhor Deus, entre as árvores do jardim.",
    9: "9 E chamou o Senhor Deus a Adão, e disse-lhe: Onde estás?",
    10: "10 E ele disse: Ouvi a tua voz soar no jardim, e temi, porque estava nu, e escondi-me.",
    11: "11 E Deus disse: Quem te mostrou que estavas nu? Comeste tu da árvore de que te ordenei que não comesses?",
    12: "12 Então disse Adão: A mulher que me deste por companheira, ela me deu da árvore, e comi.",
    13: "13 E disse o Senhor Deus à mulher: Por que fizeste isto? E disse a mulher: A serpente me enganou, e eu comi.",
    14: "14 Então o Senhor Deus disse à serpente: Porquanto fizeste isto, maldita serás mais que toda a fera, e mais que todos os animais do campo; sobre o teu ventre andarás, e pó comerás todos os dias da tua vida.",
    15: "15 E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar.",
    16: "16 E à mulher disse: Multiplicarei grandemente a tua dor, e a tua conceição; com dor darás à luz filhos; e o teu desejo será para o teu marido, e ele te dominará.",
    17: "17 E a Adão disse: Porquanto deste ouvidos à voz de tua mulher, e comeste da árvore de que te ordenei, dizendo: Não comerás dela, maldita é a terra por causa de ti; com dor comerás dela todos os dias da tua vida.",
    18: "18 Espinhos, e cardos também, te produzirá; e comerás a erva do campo.",
    19: "19 No suor do teu rosto comerás o teu pão, até que te tornes à terra; porque dela foste tomado; porquanto és pó e em pó te tornarás.",
    20: "20 E chamou Adão o nome de sua mulher Eva; porquanto era a mãe de todos os viventes.",
    21: "21 E fez o Senhor Deus a Adão e à sua mulher túnicas de peles, e os vestiu.",
    22: "22 Então disse o Senhor Deus: Eis que o homem é como um de nós, sabendo o bem e o mal; ora, para que não estenda a sua mão, e tome também da árvore da vida, e coma e viva eternamente,",
    23: "23 O Senhor Deus, pois, o lançou fora do jardim do Éden, para lavrar a terra de que fora tomado.",
    24: "24 E havendo lançado fora o homem, pôs querubins ao oriente do jardim do Éden, e uma espada inflamada que andava ao redor, para guardar o caminho da árvore da vida."
  },

  4: { // capítulo 4
    1: "1 E conheceu Adão a Eva, sua mulher, e ela concebeu e deu à luz a Caim, e disse: Alcancei do SENHOR um homem.",
    2: "2 E deu à luz mais a seu irmão Abel; e Abel foi pastor de ovelhas, e Caim foi lavrador da terra.",
    3: "3 E aconteceu ao cabo de dias que Caim trouxe do fruto da terra uma oferta ao Senhor.",
    4: "4 E Abel também trouxe dos primogênitos das suas ovelhas, e da sua gordura; e atentou o Senhor para Abel e para a sua oferta.",
    5: "5 Mas para Caim e para a sua oferta não atentou. E irou-se Caim fortemente, e descaiu-lhe o semblante.",
    6: "6 E o Senhor disse a Caim: Por que te iraste? E por que descaiu o teu semblante?",
    7: "7 Se bem fizeres, não é certo que serás aceito? E se não fizeres bem, o pecado jaz à porta, e sobre ti será o seu desejo, mas sobre ele deves dominar.",
    8: "8 E falou Caim com o seu irmão Abel; e sucedeu que, estando eles no campo, se levantou Caim contra o seu irmão Abel, e o matou.",
    9: "9 E disse o Senhor a Caim: Onde está Abel, teu irmão? E ele disse: Não sei; sou eu guardador do meu irmão?",
    10: "10 E disse Deus: Que fizeste? A voz do sangue do teu irmão clama a mim desde a terra.",
    11: "11 E agora maldito és tu desde a terra, que abriu a sua boca para receber da tua mão o sangue do teu irmão.",
    12: "12 Quando lavrares a terra, não te dará mais a sua força; fugitivo e vagabundo serás na terra.",
    13: "13 Então disse Caim ao Senhor: É maior a minha maldade que a que possa ser perdoada.",
    14: "14 Eis que hoje me lanças da face da terra, e da tua face me esconderei; e serei fugitivo e vagabundo na terra, e será que todo aquele que me achar, me matará.",
    15: "15 O Senhor, porém, disse-lhe: Portanto qualquer que matar a Caim, sete vezes será castigado. E pôs o Senhor um sinal em Caim, para que o não ferisse qualquer que o achasse.",
    16: "16 E saiu Caim de diante da face do Senhor, e habitou na terra de Node, do lado oriental do Éden.",
    17: "17 E conheceu Caim a sua mulher, e ela concebeu, e deu à luz a Enoque; e ele edificou uma cidade, e chamou o nome da cidade conforme o nome de seu filho Enoque;",
    18: "18 E a Enoque nasceu Irade, e Irade gerou a Meujael, e Meujael gerou a Metusael e Metusael gerou a Lameque.",
    19: "19 E tomou Lameque para si duas mulheres; o nome de uma era Ada, e o nome da outra, Zilá.",
    20: "20 E Ada deu à luz a Jabal; este foi o pai dos que habitam em tendas e têm gado.",
    21: "21 E o nome do seu irmão era Jubal; este foi o pai de todos os que tocam harpa e órgão.",
    22: "22 E Zilá também deu à luz a Tubalcaim, mestre de toda a obra de cobre e ferro; e a irmã de Tubalcaim foi Noema.",
    23: "23 E disse Lameque a suas mulheres Ada e Zilá: Ouvi a minha voz; vós, mulheres de Lameque, escutai as minhas palavras; porque eu matei um homem por me ferir, e um jovem por me pisar.",
    24: "24 Porque sete vezes Caim será castigado; mas Lameque setenta vezes sete.",
    25: "25 E tornou Adão a conhecer a sua mulher; e ela deu à luz um filho, e chamou o seu nome Sete; porque, disse ela, Deus me deu outro filho em lugar de Abel; porquanto Caim o matou.",
    26: "26 E a Sete também nasceu um filho; e chamou o seu nome Enos; então se começou a invocar o nome do Senhor."
    
  },

  5: { // capítulo 5
    1: "1 Este é o livro das gerações de Adão. No dia em que Deus criou o homem, à semelhança de Deus o fez.",
    2: "2 Homem e mulher os criou; e os abençoou e chamou o seu nome Adão, no dia em que foram criados.",
    3: "3 E Adão viveu cento e trinta anos, e gerou um filho à sua semelhança, conforme a sua imagem, e pôs-lhe o nome de Sete.",
    4: "4 E foram os dias de Adão, depois que gerou a Sete, oitocentos anos, e gerou filhos e filhas.",
    5: "5 E foram todos os dias que Adão viveu, novecentos e trinta anos, e morreu.",
    6: "6 E viveu Sete cento e cinco anos, e gerou a Enos.",
    7: "7 E viveu Sete, depois que gerou a Enos, oitocentos e sete anos, e gerou filhos e filhas.",
    8: "8 E foram todos os dias de Sete novecentos e doze anos, e morreu.",
    9: "9 E viveu Enos noventa anos, e gerou a Cainã.",
    10: "10 E viveu Enos, depois que gerou a Cainã, oitocentos e quinze anos, e gerou filhos e filhas.",
    11: "11 E foram todos os dias de Enos novecentos e cinco anos, e morreu.",
    12: "12 E viveu Cainã setenta anos, e gerou a Maalaleel.",
    13: "13 E viveu Cainã, depois que gerou a Maalaleel, oitocentos e quarenta anos, e gerou filhos e filhas.",
    14: "14 E foram todos os dias de Cainã novecentos e dez anos, e morreu.",
    15: "15 E viveu Maalaleel sessenta e cinco anos, e gerou a Jerede.",
    16: "16 E viveu Maalaleel, depois que gerou a Jerede, oitocentos e trinta anos, e gerou filhos e filhas.",
    17: "17 E foram todos os dias de Maalaleel oitocentos e noventa e cinco anos, e morreu.",
    18: "18 E viveu Jerede cento e sessenta e dois anos, e gerou a Enoque.",
    19: "19 E viveu Jerede, depois que gerou a Enoque, oitocentos anos, e gerou filhos e filhas.",
    20: "20 E foram todos os dias de Jerede novecentos e sessenta e dois anos, e morreu.",
    21: "21 E viveu Enoque sessenta e cinco anos, e gerou a Matusalém.",
    22: "22 E andou Enoque com Deus, depois que gerou a Matusalém, trezentos anos, e gerou filhos e filhas.",
    23: "23 E foram todos os dias de Enoque trezentos e sessenta e cinco anos.",
    24: "24 E andou Enoque com Deus; e não apareceu mais, porquanto Deus para si o tomou.",
    25: "25 E viveu Matusalém cento e oitenta e sete anos, e gerou a Lameque.",
    26: "26 E viveu Matusalém, depois que gerou a Lameque, setecentos e oitenta e dois anos, e gerou filhos e filhas.",
    27: "27 E foram todos os dias de Matusalém novecentos e sessenta e nove anos, e morreu.",
    28: "28 E viveu Lameque cento e oitenta e dois anos, e gerou um filho,",
    29: "29 A quem chamou Noé, dizendo: Este nos consolará acerca de nossas obras e do trabalho de nossas mãos, por causa da terra que o Senhor amaldiçoou.",
    30: "30 E viveu Lameque, depois que gerou a Noé, quinhentos e noventa e cinco anos, e gerou filhos e filhas.",
    31: "31 E foram todos os dias de Lameque setecentos e setenta e sete anos, e morreu.",
    32: "32 E era Noé da idade de quinhentos anos, e gerou Noé a Sem, Cão e Jafé."

  },

  6: { // capítulo 6

    1: "1 E aconteceu que, como os homens começaram a multiplicar-se sobre a face da terra, e lhes nasceram filhas,",
    2: "2 Viram os filhos de Deus que as filhas dos homens eram formosas; e tomaram para si mulheres de todas as que escolheram.",
    3: "3 Então disse o Senhor: Não contenderá o meu Espírito para sempre com o homem; porque ele também é carne; porém os seus dias serão cento e vinte anos.",
    4: "4 Havia naqueles dias gigantes na terra; e também depois, quando os filhos de Deus entraram às filhas dos homens e delas geraram filhos; estes eram os valentes que houve na antiguidade, os homens de fama.",
    5: "5 E viu o Senhor que a maldade do homem se multiplicara sobre a terra e que toda a imaginação dos pensamentos de seu coração era só má continuamente.",
    6: "6 Então arrependeu-se o Senhor de haver feito o homem sobre a terra e pesou-lhe em seu coração.",
    7: "7 E disse o Senhor: Destruirei o homem que criei de sobre a face da terra, desde o homem até ao animal, até ao réptil, e até à ave dos céus; porque me arrependo de os haver feito.",
    8: "8 Noé, porém, achou graça aos olhos do Senhor.",
    9: "9 Estas são as gerações de Noé. Noé era homem justo e perfeito em suas gerações; Noé andava com Deus.",
    10: "10 E gerou Noé três filhos: Sem, Cão e Jafé.",
    11: "11 A terra, porém, estava corrompida diante da face de Deus; e encheu-se a terra de violência.",
    12: "12 E viu Deus a terra, e eis que estava corrompida; porque toda a carne havia corrompido o seu caminho sobre a terra.",
    13: "13 Então disse Deus a Noé: O fim de toda a carne é vindo perante a minha face; porque a terra está cheia de violência; e eis que os desfarei com a terra.",
    14: "14 Faze para ti uma arca da madeira de gofer; farás compartimentos na arca e a betumarás por dentro e por fora com betume.",
    15: "15 E desta maneira a farás: De trezentos côvados o comprimento da arca, e de cinqüenta côvados a sua largura, e de trinta côvados a sua altura.",
    16: "16 Farás na arca uma janela, e de um côvado a acabarás em cima; e a porta da arca porás ao seu lado; far-lhe-ás andares, baixo, segundo e terceiro.",
    17: "17 Porque eis que eu trago um dilúvio de águas sobre a terra, para desfazer toda a carne em que há espírito de vida debaixo dos céus; tudo o que há na terra expirará.",
    18: "18 Mas contigo estabelecerei a minha aliança; e entrarás na arca, tu e os teus filhos, tua mulher e as mulheres de teus filhos contigo.",
    19: "19 E de tudo o que vive, de toda a carne, dois de cada espécie, farás entrar na arca, para os conservar vivos contigo; macho e fêmea serão.",
    20: "20 Das aves conforme a sua espécie, e dos animais conforme a sua espécie, de todo o réptil da terra conforme a sua espécie, dois de cada espécie virão a ti, para os conservar em vida.",
    21: "21 E leva contigo de toda a comida que se come e ajunta-a para ti; e te será para mantimento, a ti e a eles.",
    22: "22 Assim fez Noé; conforme a tudo o que Deus lhe mandou, assim o fez."
    
  },
  
  7: { // capítulo 7

    1: "1 Depois disse o SENHOR a Noé: Entra tu e toda a tua casa na arca, porque tenho visto que és justo diante de mim nesta geração.",
    2: "2 De todos os animais limpos tomarás para ti sete e sete, o macho e sua fêmea; mas dos animais que não são limpos, dois, o macho e sua fêmea.",
    3: "3 Também das aves dos céus sete e sete, macho e fêmea, para conservar em vida sua espécie sobre a face de toda a terra.",
    4: "4 Porque, passados ainda sete dias, farei chover sobre a terra quarenta dias e quarenta noites; e desfarei de sobre a face da terra toda a substância que fiz.",
    5: "5 E fez Noé conforme a tudo o que o Senhor lhe ordenara.",
    6: "6 E era Noé da idade de seiscentos anos, quando o dilúvio das águas veio sobre a terra.",
    7: "7 Noé entrou na arca, e com ele seus filhos, sua mulher e as mulheres de seus filhos, por causa das águas do dilúvio.",
    8: "8 Dos animais limpos e dos animais que não são limpos, e das aves, e de todo o réptil sobre a terra,",
    9: "9 Entraram de dois em dois para junto de Noé na arca, macho e fêmea, como Deus ordenara a Noé.",
    10: "10 E aconteceu que passados sete dias, vieram sobre a terra as águas do dilúvio.",
    11: "11 No ano seiscentos da vida de Noé, no mês segundo, aos dezessete dias do mês, naquele mesmo dia se romperam todas as fontes do grande abismo, e as janelas dos céus se abriram,",
    12: "12 E houve chuva sobre a terra quarenta dias e quarenta noites.",
    13: "13 E no mesmo dia entraram na arca Noé, seus filhos Sem, Cão e Jafé, sua mulher e as mulheres de seus filhos.",
    14: "14 Eles, e todo o animal conforme a sua espécie, e todo o gado conforme a sua espécie, e todo o réptil que se arrasta sobre a terra conforme a sua espécie, e toda a ave conforme a sua espécie, pássaros de toda qualidade.",
    15: "15 E de toda a carne, em que havia espírito de vida, entraram de dois em dois para junto de Noé na arca.",
    16: "16 E os que entraram eram macho e fêmea de toda a carne, como Deus lhe tinha ordenado; e o Senhor o fechou dentro.",
    17: "17 E durou o dilúvio quarenta dias sobre a terra, e cresceram as águas e levantaram a arca, e ela se elevou sobre a terra.",
    18: "18 E prevaleceram as águas e cresceram grandemente sobre a terra; e a arca andava sobre as águas.",
    19: "19 E as águas prevaleceram excessivamente sobre a terra; e todos os altos montes que havia debaixo de todo o céu, foram cobertos.",
    20: "20 Quinze côvados acima prevaleceram as águas; e os montes foram cobertos.",
    21: "21 E expirou toda a carne que se movia sobre a terra, tanto de ave como de gado e de feras, e de todo o réptil que se arrasta sobre a terra, e todo o homem.",
    22: "22 Tudo o que tinha fôlego de espírito de vida em suas narinas, tudo o que havia em terra seca, morreu.",
    23: "23 Assim foi destruído todo o ser vivente que havia sobre a face da terra, desde o homem até ao animal, até ao réptil, e até à ave dos céus; e foram extintos da terra; e ficou somente Noé, e os que com ele estavam na arca.",
    24: "24 E prevaleceram as águas sobre a terra cento e cinqüenta dias."


  },

  8: { // capítulo 8

    1: "1 E lembrou-se Deus de Noé, e de todos os seres viventes, e de todo o gado que estavam com ele na arca; e Deus fez passar um vento sobre a terra, e aquietaram-se as águas.",
    2: "2 Cerraram-se também as fontes do abismo e as janelas dos céus, e a chuva dos céus deteve-se.",
    3: "3 E as águas iam-se escoando continuamente de sobre a terra, e ao fim de cento e cinqüenta dias minguaram.",
    4: "4 E a arca repousou no sétimo mês, no dia dezessete do mês, sobre os montes de Ararate.",
    5: "5 E foram as águas indo e minguando até ao décimo mês; no décimo mês, no primeiro dia do mês, apareceram os cumes dos montes.",
    6: "6 E aconteceu que ao cabo de quarenta dias, abriu Noé a janela da arca que tinha feito.",
    7: "7 E soltou um corvo, que saiu, indo e voltando, até que as águas se secaram de sobre a terra.",
    8: "8 Depois soltou uma pomba, para ver se as águas tinham minguado de sobre a face da terra.",
    9: "9 A pomba, porém, não achou repouso para a planta do seu pé, e voltou a ele para a arca; porque as águas estavam sobre a face de toda a terra; e ele estendeu a sua mão, e tomou-a, e recolheu-a consigo na arca.",
    10: "10 E esperou ainda outros sete dias, e tornou a enviar a pomba fora da arca.",
    11: "11 E a pomba voltou a ele à tarde; e eis, arrancada, uma folha de oliveira no seu bico; e conheceu Noé que as águas tinham minguado de sobre a terra.",
    12: "12 Então esperou ainda outros sete dias, e enviou fora a pomba; mas não tornou mais a ele.",
    13: "13 E aconteceu que no ano seiscentos e um, no mês primeiro, no primeiro dia do mês, as águas se secaram de sobre a terra. Então Noé tirou a cobertura da arca, e olhou, e eis que a face da terra estava enxuta.",
    14: "14 E no segundo mês, aos vinte e sete dias do mês, a terra estava seca.",
    15: "15 Então falou Deus a Noé dizendo:",
    16: "16 Sai da arca, tu com tua mulher, e teus filhos e as mulheres de teus filhos.",
    17: "17 Todo o animal que está contigo, de toda a carne, de ave, e de gado, e de todo o réptil que se arrasta sobre a terra, traze fora contigo; e povoem abundantemente a terra e frutifiquem, e se multipliquem sobre a terra.",
    18: "18 Então saiu Noé, e seus filhos, e sua mulher, e as mulheres de seus filhos com ele.",
    19: "19 Todo o animal, todo o réptil, e toda a ave, e tudo o que se move sobre a terra, conforme as suas famílias, saiu para fora da arca.",
    20: "20 E edificou Noé um altar ao Senhor; e tomou de todo o animal limpo e de toda a ave limpa, e ofereceu holocausto sobre o altar.",
    21: "21 E o Senhor sentiu o suave cheiro, e o Senhor disse em seu coração: Não tornarei mais a amaldiçoar a terra por causa do homem; porque a imaginação do coração do homem é má desde a sua meninice, nem tornarei mais a ferir todo o vivente, como fiz.",
    22: "22 Enquanto a terra durar, sementeira e sega, e frio e calor, e verão e inverno, e dia e noite, não cessarão."

  },

  9: { // capítulo 9

    1: "1 E abençoou Deus a Noé e a seus filhos, e disse-lhes: Frutificai e multiplicai-vos e enchei a terra.",
    2: "2 E o temor de vós e o pavor de vós virão sobre todo o animal da terra, e sobre toda a ave dos céus; tudo o que se move sobre a terra, e todos os peixes do mar, nas vossas mãos são entregues.",
    3: "3 Tudo quanto se move, que é vivente, será para vosso mantimento; tudo vos tenho dado como a erva verde.",
    4: "4 A carne, porém, com sua vida, isto é, com seu sangue, não comereis.",
    5: "5 Certamente requererei o vosso sangue, o sangue das vossas vidas; da mão de todo o animal o requererei; como também da mão do homem, e da mão do irmão de cada um requererei a vida do homem.",
    6: "6 Quem derramar o sangue do homem, pelo homem o seu sangue será derramado; porque Deus fez o homem conforme a sua imagem.",
    7: "7 Mas vós frutificai e multiplicai-vos; povoai abundantemente a terra, e multiplicai-vos nela.",
    8: "8 E falou Deus a Noé e a seus filhos com ele, dizendo:",
    9: "9 E eu, eis que estabeleço a minha aliança convosco e com a vossa descendência depois de vós.",
    10: "10 E com toda a alma vivente, que convosco está, de aves, de gado, e de todo o animal da terra convosco; com todos que saíram da arca, até todo o animal da terra.",
    11: "11 E eu convosco estabeleço a minha aliança, que não será mais destruída toda a carne pelas águas do dilúvio, e que não haverá mais dilúvio, para destruir a terra.",
    12: "12 E disse Deus: Este é o sinal da aliança que ponho entre mim e vós, e entre toda a alma vivente, que está convosco, por gerações eternas.",
    13: "13 O meu arco tenho posto nas nuvens; este será por sinal da aliança entre mim e a terra.",
    14: "14 E acontecerá que, quando eu trouxer nuvens sobre a terra, aparecerá o arco nas nuvens.",
    15: "15 Então me lembrarei da minha aliança, que está entre mim e vós, e entre toda a alma vivente de toda a carne; e as águas não se tornarão mais em dilúvio para destruir toda a carne.",
    16: "16 E estará o arco nas nuvens, e eu o verei, para me lembrar da aliança eterna entre Deus e toda a alma vivente de toda a carne, que está sobre a terra.",
    17: "17 E disse Deus a Noé: Este é o sinal da aliança que tenho estabelecido entre mim e entre toda a carne, que está sobre a terra.",
    18: "18 E os filhos de Noé, que da arca saíram, foram Sem, Cão e Jafé; e Cão é o pai de Canaã.",
    19: "19 Estes três foram os filhos de Noé; e destes se povoou toda a terra.",
    20: "20 E começou Noé a ser lavrador da terra, e plantou uma vinha.",
    21: "21 E bebeu do vinho, e embebedou-se; e descobriu-se no meio de sua tenda.",
    22: "22 E viu Cão, o pai de Canaã, a nudez do seu pai, e fê-lo saber a ambos seus irmãos no lado de fora.",
    23: "23 Então tomaram Sem e Jafé uma capa, e puseram-na sobre ambos os seus ombros, e indo virados para trás, cobriram a nudez do seu pai, e os seus rostos estavam virados, de maneira que não viram a nudez do seu pai.",
    24: "24 E despertou Noé do seu vinho, e soube o que seu filho menor lhe fizera.",
    25: "25 E disse: Maldito seja Canaã; servo dos servos seja aos seus irmãos.",
    26: "26 E disse: Bendito seja o Senhor Deus de Sem; e seja-lhe Canaã por servo.",
    27: "27 Alargue Deus a Jafé, e habite nas tendas de Sem; e seja-lhe Canaã por servo.",
    28: "28 E viveu Noé, depois do dilúvio, trezentos e cinqüenta anos.",
    29: "29 E foram todos os dias de Noé novecentos e cinquenta anos, e morreu."

  },

  10: { // capítulo 10

    1: "1 Estas, pois, são as gerações dos filhos de Noé: Sem, Cão e Jafé; e nasceram-lhes filhos depois do dilúvio.",
    2: "2 Os filhos de Jafé são: Gomer, Magogue, Madai, Javã, Tubal, Meseque e Tiras.",
    3: "3 E os filhos de Gomer são: Asquenaz, Rifate e Togarma.",
    4: "4 E os filhos de Javã são: Elisá, Társis, Quitim e Dodanim.",
    5: "5 Por estes foram repartidas as ilhas dos gentios nas suas terras, cada qual segundo a sua língua, segundo as suas famílias, entre as suas nações.",
    6: "6 E os filhos de Cão são: Cuxe, Mizraim, Pute e Canaã.",
    7: "7 E os filhos de Cuxe são: Sebá, Havilá, Sabtá, Raamá e Sabtecá; e os filhos de Raamá: Sebá e Dedã.",
    8: "8 E Cuxe gerou a Ninrode; este começou a ser poderoso na terra.",
    9: "9 E este foi poderoso caçador diante da face do Senhor; por isso se diz: Como Ninrode, poderoso caçador diante do Senhor.",
    10: "10 E o princípio do seu reino foi Babel, Ereque, Acade e Calné, na terra de Sinar.",
    11: "11 Desta mesma terra saiu à Assíria e edificou a Nínive, Reobote-Ir, Calá,",
    12: "12 E Resen, entre Nínive e Calá (esta é a grande cidade).",
    13: "13 E Mizraim gerou a Ludim, a Anamim, a Leabim, a Naftuim,",
    14: "14 A Patrusim e a Casluim (donde saíram os filisteus) e a Caftorim.",
    15: "15 E Canaã gerou a Sidom, seu primogênito, e a Hete;",
    16: "16 E ao jebuseu, ao amorreu, ao girgaseu,",
    17: "17 E ao heveu, ao arqueu, ao sineu,",
    18: "18 E ao arvadeu, ao zemareu, e ao hamateu, e depois se espalharam as famílias dos cananeus.",
    19: "19 E foi o termo dos cananeus desde Sidom, indo para Gerar, até Gaza; indo para Sodoma e Gomorra, Admá e Zeboim, até Lasa.",
    20: "20 Estes são os filhos de Cão segundo as suas famílias, segundo as suas línguas, em suas terras, em suas nações.",
    21: "21 E a Sem nasceram filhos, e ele é o pai de todos os filhos de Éber, o irmão mais velho de Jafé.",
    22: "22 Os filhos de Sem são: Elão, Assur, Arfaxade, Lude e Arã.",
    23: "23 E os filhos de Arã são: Uz, Hul, Geter e Más.",
    24: "24 E Arfaxade gerou a Selá; e Selá gerou a Éber.",
    25: "25 E a Éber nasceram dois filhos: o nome de um foi Pelegue, porquanto em seus dias se repartiu a terra, e o nome do seu irmão foi Joctã.",
    26: "26 E Joctã gerou a Almodá, a Selefe, a Hazarmavé, a Jerá,",
    27: "27 A Hadorão, a Usal, a Dicla,",
    28: "28 A Obal, a Abimael, a Sebá,",
    29: "29 A Ofir, a Havilá e a Jobabe; todos estes foram filhos de Joctã.",
    30: "30 E foi a sua habitação desde Messa, indo para Sefar, montanha do oriente.",
    31: "31 Estes são os filhos de Sem segundo as suas famílias, segundo as suas línguas, nas suas terras, segundo as suas nações.",
    32: "32 Estas são as famílias dos filhos de Noé segundo as suas gerações, nas suas nações; e destes foram divididas as nações na terra depois do dilúvio."

  },

  11: { // capítulo 11

    1: "1 E era toda a terra de uma mesma língua e de uma mesma fala.",
    2: "2 E aconteceu que, partindo eles do oriente, acharam um vale na terra de Sinar; e habitaram ali.",
    3: "3 E disseram uns aos outros: Eia, façamos tijolos e queimemo-los bem. E foi-lhes o tijolo por pedra, e o betume por cal.",
    4: "4 E disseram: Eia, edifiquemos nós uma cidade e uma torre cujo cume toque nos céus, e façamo-nos um nome, para que não sejamos espalhados sobre a face de toda a terra.",
    5: "5 Então desceu o Senhor para ver a cidade e a torre que os filhos dos homens edificavam;",
    6: "6 E o Senhor disse: Eis que o povo é um, e todos têm uma mesma língua; e isto é o que começam a fazer; e agora, não haverá restrição para tudo o que eles intentarem fazer.",
    7: "7 Eia, desçamos e confundamos ali a sua língua, para que não entenda um a língua do outro.",
    8: "8 Assim o Senhor os espalhou dali sobre a face de toda a terra; e cessaram de edificar a cidade.",
    9: "9 Por isso se chamou o seu nome Babel, porquanto ali confundiu o Senhor a língua de toda a terra, e dali os espalhou o Senhor sobre a face de toda a terra.",
    10: "10 Estas são as gerações de Sem: Sem era da idade de cem anos e gerou a Arfaxade, dois anos depois do dilúvio.",
    11: "11 E viveu Sem, depois que gerou a Arfaxade, quinhentos anos, e gerou filhos e filhas.",
    12: "12 E viveu Arfaxade trinta e cinco anos, e gerou a Selá.",
    13: "13 E viveu Arfaxade depois que gerou a Selá, quatrocentos e três anos, e gerou filhos e filhas.",
    14: "14 E viveu Selá trinta anos, e gerou a Éber;",
    15: "15 E viveu Selá, depois que gerou a Éber, quatrocentos e três anos, e gerou filhos e filhas.",
    16: "16 E viveu Éber trinta e quatro anos, e gerou a Pelegue.",
    17: "17 E viveu Éber, depois que gerou a Pelegue, quatrocentos e trinta anos, e gerou filhos e filhas.",
    18: "18 E viveu Pelegue trinta anos, e gerou a Reú.",
    19: "19 E viveu Pelegue, depois que gerou a Reú, duzentos e nove anos, e gerou filhos e filhas.",
    20: "20 E viveu Reú trinta e dois anos, e gerou a Serugue.",
    21: "21 E viveu Reú, depois que gerou a Serugue, duzentos e sete anos, e gerou filhos e filhas.",
    22: "22 E viveu Serugue trinta anos, e gerou a Naor.",
    23: "23 E viveu Serugue, depois que gerou a Naor, duzentos anos, e gerou filhos e filhas.",
    24: "24 E viveu Naor vinte e nove anos, e gerou a Terá.",
    25: "25 E viveu Naor, depois que gerou a Terá, cento e dezenove anos, e gerou filhos e filhas.",
    26: "26 E viveu Terá setenta anos, e gerou a Abrão, a Naor, e a Harã.",
    27: "27 E estas são as gerações de Terá: Terá gerou a Abrão, a Naor, e a Harã; e Harã gerou a Ló.",
    28: "28 E morreu Harã estando seu pai Terá ainda vivo, na terra do seu nascimento, em Ur dos caldeus.",
    29: "29 E tomaram Abrão e Naor mulheres para si: o nome da mulher de Abrão era Sarai, e o nome da mulher de Naor era Milca, filha de Harã, pai de Milca e pai de Iscá.",
    30: "30 E Sarai foi estéril, não tinha filhos.",
    31: "31 E tomou Terá a Abrão seu filho, e a Ló, filho de Harã, filho de seu filho, e a Sarai sua nora, mulher de seu filho Abrão, e saiu com eles de Ur dos caldeus, para ir à terra de Canaã; e vieram até Harã, e habitaram ali.",
    32: "32 E foram os dias de Terá duzentos e cinco anos, e morreu Terá em Harã."

  },

  12: { // capítulo 12

    1: "1 Ora, o SENHOR disse a Abrão: Sai-te da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei.",
    2: "2 E far-te-ei uma grande nação, e abençoar-te-ei e engrandecerei o teu nome; e tu serás uma bênção.",
    3: "3 E abençoarei os que te abençoarem, e amaldiçoarei os que te amaldiçoarem; e em ti serão benditas todas as famílias da terra.",
    4: "4 Assim partiu Abrão como o Senhor lhe tinha dito, e foi Ló com ele; e era Abrão da idade de setenta e cinco anos quando saiu de Harã.",
    5: "5 E tomou Abrão a Sarai, sua mulher, e a Ló, filho de seu irmão, e todos os bens que haviam adquirido, e as almas que lhe acresceram em Harã; e saíram para irem à terra de Canaã; e chegaram à terra de Canaã.",
    6: "6 E passou Abrão por aquela terra até ao lugar de Siquém, até ao carvalho de Moré; e estavam então os cananeus na terra.",
    7: "7 E apareceu o Senhor a Abrão, e disse: À tua descendência darei esta terra. E edificou ali um altar ao Senhor, que lhe aparecera.",
    8: "8 E moveu-se dali para a montanha do lado oriental de Betel, e armou a sua tenda, tendo Betel ao ocidente, e Ai ao oriente; e edificou ali um altar ao Senhor, e invocou o nome do Senhor.",
    9: "9 Depois caminhou Abrão dali, seguindo ainda para o lado do sul.",
    10: "10 E havia fome naquela terra; e desceu Abrão ao Egito, para peregrinar ali, porquanto a fome era grande na terra.",
    11: "11 E aconteceu que, chegando ele para entrar no Egito, disse a Sarai, sua mulher: Ora, bem sei que és mulher formosa à vista;",
    12: "12 E será que, quando os egípcios te virem, dirão: Esta é sua mulher. E matar-me-ão a mim, e a ti te guardarão em vida.",
    13: "13 Dize, peço-te, que és minha irmã, para que me vá bem por tua causa, e que viva a minha alma por amor de ti.",
    14: "14 E aconteceu que, entrando Abrão no Egito, viram os egípcios a mulher, que era mui formosa.",
    15: "15 E viram-na os príncipes de Faraó, e gabaram-na diante de Faraó; e foi a mulher tomada para a casa de Faraó.",
    16: "16 E fez bem a Abrão por amor dela; e ele teve ovelhas, vacas, jumentos, servos e servas, jumentas e camelos.",
    17: "17 Feriu, porém, o Senhor a Faraó e a sua casa, com grandes pragas, por causa de Sarai, mulher de Abrão.",
    18: "18 Então chamou Faraó a Abrão, e disse: Que é isto que me fizeste? Por que não me disseste que ela era tua mulher?",
    19: "19 Por que disseste: É minha irmã? Por isso a tomei por minha mulher; agora, pois, eis aqui tua mulher; toma-a e vai-te.",
    20: "20 E Faraó deu ordens aos seus homens a respeito dele; e acompanharam-no, a ele, e a sua mulher, e a tudo o que tinha."

  },

  13: { // capítulo 13

    1: "1 Subiu, pois, Abrão do Egito para o lado do sul, ele e sua mulher, e tudo o que tinha, e com ele Ló.",
    2: "2 E era Abrão muito rico em gado, em prata e em ouro.",
    3: "3 E fez as suas jornadas do sul até Betel, até ao lugar onde a princípio estivera a sua tenda, entre Betel e Ai;",
    4: "4 Até ao lugar do altar que outrora ali tinha feito; e Abrão invocou ali o nome do Senhor.",
    5: "5 E também Ló, que ia com Abrão, tinha rebanhos, gado e tendas.",
    6: "6 E não tinha capacidade a terra para poderem habitar juntos; porque os seus bens eram muitos; de maneira que não podiam habitar juntos.",
    7: "7 E houve contenda entre os pastores do gado de Abrão e os pastores do gado de Ló; e os cananeus e os perizeus habitavam então na terra.",
    8: "8 E disse Abrão a Ló: Ora, não haja contenda entre mim e ti, e entre os meus pastores e os teus pastores, porque somos irmãos.",
    9: "9 Não está toda a terra diante de ti? Eia, pois, aparta-te de mim; e se escolheres a esquerda, irei para a direita; e se a direita escolheres, eu irei para a esquerda.",
    10: "10 E levantou Ló os seus olhos, e viu toda a campina do Jordão, que era toda bem regada, antes do Senhor ter destruído Sodoma e Gomorra, e era como o jardim do Senhor, como a terra do Egito, quando se entra em Zoar.",
    11: "11 Então Ló escolheu para si toda a campina do Jordão, e partiu Ló para o oriente, e apartaram-se um do outro.",
    12: "12 Habitou Abrão na terra de Canaã e Ló habitou nas cidades da campina, e armou as suas tendas até Sodoma.",
    13: "13 Ora, eram maus os homens de Sodoma, e grandes pecadores contra o Senhor.",
    14: "14 E disse o Senhor a Abrão, depois que Ló se apartou dele: Levanta agora os teus olhos, e olha desde o lugar onde estás, para o lado do norte, e do sul, e do oriente, e do ocidente;",
    15: "15 Porque toda esta terra que vês, te hei de dar a ti, e à tua descendência, para sempre.",
    16: "16 E farei a tua descendência como o pó da terra; de maneira que se alguém puder contar o pó da terra, também a tua descendência será contada.",
    17: "17 Levanta-te, percorre essa terra, no seu comprimento e na sua largura; porque a ti a darei.",
    18: "18 E Abrão mudou as suas tendas, e foi, e habitou nos carvalhais de Manre, que estão junto a Hebrom; e edificou ali um altar ao Senhor."

  },

  14: { // capítulo 14

    1: "1 E aconteceu nos dias de Anrafel, rei de Sinar, Arioque, rei de Elasar, Quedorlaomer, rei de Elão, e Tidal, rei de Goim,",
    2: "2 Que estes fizeram guerra a Bera, rei de Sodoma, a Birsa, rei de Gomorra, a Sinabe, rei de Admá, e a Semeber, rei de Zeboim, e ao rei de Belá (esta é Zoar).",
    3: "3 Todos estes se ajuntaram no vale de Sidim (que é o Mar Salgado).",
    4: "4 Doze anos haviam servido a Quedorlaomer, mas ao décimo terceiro ano rebelaram-se.",
    5: "5 E ao décimo quarto ano veio Quedorlaomer, e os reis que estavam com ele, e feriram aos refains em Asterote-Carnaim, e aos zuzins em Hã, e aos emins em Savé-Quiriataim,",
    6: "6 E aos horeus no seu monte Seir, até El-Parã que está junto ao deserto.",
    7: "7 Depois tornaram e vieram a En-Mispate (que é Cades), e feriram toda a terra dos amalequitas, e também aos amorreus, que habitavam em Hazazom-Tamar.",
    8: "8 Então saiu o rei de Sodoma, e o rei de Gomorra, e o rei de Admá, e o rei de Zeboim, e o rei de Belá (esta é Zoar), e ordenaram batalha contra eles no vale de Sidim,",
    9: "9 Contra Quedorlaomer, rei de Elão, e Tidal, rei de Goim, e Anrafel, rei de Sinar, e Arioque, rei de Elasar; quatro reis contra cinco.",
    10: "10 E o vale de Sidim estava cheio de poços de betume; e fugiram os reis de Sodoma e de Gomorra, e caíram ali; e os restantes fugiram para um monte.",
    11: "11 E tomaram todos os bens de Sodoma, e de Gomorra, e todo o seu mantimento e foram-se.",
    12: "12 Também tomaram a Ló, que habitava em Sodoma, filho do irmão de Abrão, e os seus bens, e foram-se.",
    13: "13 Então veio um, que escapara, e o contou a Abrão, o hebreu; ele habitava junto dos carvalhais de Manre, o amorreu, irmão de Escol, e irmão de Aner; eles eram confederados de Abrão.",
    14: "14 Ouvindo, pois, Abrão que o seu irmão estava preso, armou os seus criados, nascidos em sua casa, trezentos e dezoito, e os perseguiu até Dã.",
    15: "15 E dividiu-se contra eles de noite, ele e os seus criados, e os feriu, e os perseguiu até Hobá, que fica à esquerda de Damasco.",
    16: "16 E tornou a trazer todos os seus bens, e tornou a trazer também a Ló, seu irmão, e os seus bens, e também as mulheres, e o povo.",
    17: "17 E o rei de Sodoma saiu-lhe ao encontro (depois que voltou de ferir a Quedorlaomer e aos reis que estavam com ele) até ao Vale de Savé, que é o vale do rei.",
    18: "18 E Melquisedeque, rei de Salém, trouxe pão e vinho; e era este sacerdote do Deus Altíssimo.",
    19: "19 E abençoou-o, e disse: Bendito seja Abrão pelo Deus Altíssimo, o Possuidor dos céus e da terra;",
    20: "20 E bendito seja o Deus Altíssimo, que entregou os teus inimigos nas tuas mãos. E Abrão deu-lhe o dízimo de tudo.",
    21: "21 E o rei de Sodoma disse a Abrão: Dá-me a mim as pessoas, e os bens toma para ti.",
    22: "22 Abrão, porém, disse ao rei de Sodoma: Levantei minha mão ao Senhor, o Deus Altíssimo, o Possuidor dos céus e da terra,",
    23: "23 Jurando que desde um fio até à correia de um sapato, não tomarei coisa alguma de tudo o que é teu; para que não digas: Eu enriqueci a Abrão;",
    24: "24 Salvo tão-somente o que os jovens comeram, e a parte que toca aos homens que comigo foram, Aner, Escol e Manre; estes que tomem a sua parte."

  },

  15: { // capítulo 15

    1: "1 Depois destas coisas veio a palavra do SENHOR a Abrão em visão, dizendo: Não temas, Abrão, eu sou o teu escudo, o teu grandíssimo galardão.",
    2: "2 Então disse Abrão: Senhor DEUS, que me hás de dar, pois ando sem filhos, e o mordomo da minha casa é o damasceno Eliézer?",
    3: "3 Disse mais Abrão: Eis que não me tens dado filhos, e eis que um nascido na minha casa será o meu herdeiro.",
    4: "4 E eis que veio a palavra do Senhor a ele dizendo: Este não será o teu herdeiro; mas aquele que de tuas entranhas sair, este será o teu herdeiro.",
    5: "5 Então o levou fora, e disse: Olha agora para os céus, e conta as estrelas, se as podes contar. E disse-lhe: Assim será a tua descendência.",
    6: "6 E creu ele no Senhor, e imputou-lhe isto por justiça.",
    7: "7 Disse-lhe mais: Eu sou o Senhor, que te tirei de Ur dos caldeus, para dar-te a ti esta terra, para herdá-la.",
    8: "8 E disse ele: Senhor DEUS, como saberei que hei de herdá-la?",
    9: "9 E disse-lhe: Toma-me uma bezerra de três anos, e uma cabra de três anos, e um carneiro de três anos, uma rola e um pombinho.",
    10: "10 E trouxe-lhe todos estes, e partiu-os pelo meio, e pôs cada parte deles em frente da outra; mas as aves não partiu.",
    11: "11 E as aves desciam sobre os cadáveres; Abrão, porém, as enxotava.",
    12: "12 E pondo-se o sol, um profundo sono caiu sobre Abrão; e eis que grande espanto e grande escuridão caiu sobre ele.",
    13: "13 Então disse a Abrão: Saibas, de certo, que peregrina será a tua descendência em terra alheia, e será reduzida à escravidão, e será afligida por quatrocentos anos,",
    14: "14 Mas também eu julgarei a nação, à qual ela tem de servir, e depois sairá com grande riqueza.",
    15: "15 E tu irás a teus pais em paz; em boa velhice serás sepultado.",
    16: "16 E a quarta geração tornará para cá; porque a medida da injustiça dos amorreus não está ainda cheia.",
    17: "17 E sucedeu que, posto o sol, houve escuridão, e eis um forno de fumaça, e uma tocha de fogo, que passou por aquelas metades.",
    18: "18 Naquele mesmo dia fez o Senhor uma aliança com Abrão, dizendo: « tua descendência tenho dado esta terra, desde o rio do Egito até ao grande rio Eufrates;",
    19: "19 E o queneu, e o quenezeu, e o cadmoneu,",
    20: "20 E o heteu, e o perizeu, e os refains,",
    21: "21 E o amorreu, e o cananeu, e o girgaseu, e o jebuseu."

  },

  16: { // capítulo 16

    1: "1 Ora Sarai, mulher de Abrão, não lhe dava filhos, e ele tinha uma serva egípcia, cujo nome era Agar.",
    2: "2 E disse Sarai a Abrão: Eis que o Senhor me tem impedido de dar à luz; toma, pois, a minha serva; porventura terei filhos dela. E ouviu Abrão a voz de Sarai.",
    3: "3 Assim tomou Sarai, mulher de Abrão, a Agar egípcia, sua serva, e deu-a por mulher a Abrão seu marido, ao fim de dez anos que Abrão habitara na terra de Canaã.",
    4: "4 E ele possuiu a Agar, e ela concebeu; e vendo ela que concebera, foi sua senhora desprezada aos seus olhos.",
    5: "5 Então disse Sarai a Abrão: Meu agravo seja sobre ti; minha serva pus eu em teu regaço; vendo ela agora que concebeu, sou menosprezada aos seus olhos; o Senhor julgue entre mim e ti.",
    6: "6 E disse Abrão a Sarai: Eis que tua serva está na tua mão; faze-lhe o que bom é aos teus olhos. E afligiu-a Sarai, e ela fugiu de sua face.",
    7: "7 E o anjo do Senhor a achou junto a uma fonte de água no deserto, junto à fonte no caminho de Sur.",
    8: "8 E disse: Agar, serva de Sarai, donde vens, e para onde vais? E ela disse: Venho fugida da face de Sarai minha senhora.",
    9: "9 Então lhe disse o anjo do SENHOR: Torna-te para tua senhora, e humilha-te debaixo de suas mãos.",
    10: "10 Disse-lhe mais o anjo do Senhor: Multiplicarei sobremaneira a tua descendência, que não será contada, por numerosa que será.",
    11: "11 Disse-lhe também o anjo do Senhor: Eis que concebeste, e darás à luz um filho, e chamarás o seu nome Ismael; porquanto o Senhor ouviu a tua aflição.",
    12: "12 E ele será homem feroz, e a sua mão será contra todos, e a mão de todos contra ele; e habitará diante da face de todos os seus irmãos.",
    13: "13 E ela chamou o nome do Senhor, que com ela falava: Tu és Deus que me vê; porque disse: Não olhei eu também para aquele que me vê?",
    14: "14 Por isso se chama aquele poço de Beer-Laai-Rói; eis que está entre Cades e Berede.",
    15: "15 E Agar deu à luz um filho a Abrão; e Abrão chamou o nome do seu filho que Agar tivera, Ismael.",
    16: "16 E era Abrão da idade de oitenta e seis anos, quando Agar deu à luz Ismael."

  },

  17: { // capítulo 17

    1: "1 Sendo, pois, Abrão da idade de noventa e nove anos, apareceu o SENHOR a Abrão, e disse-lhe: Eu sou o Deus Todo-Poderoso, anda em minha presença e sê perfeito.",
    2: "2 E porei a minha aliança entre mim e ti, e te multiplicarei grandissimamente.",
    3: "3 Então caiu Abrão sobre o seu rosto, e falou Deus com ele, dizendo:",
    4: "4 Quanto a mim, eis a minha aliança contigo: serás o pai de muitas nações;",
    5: "5 E não se chamará mais o teu nome Abrão, mas Abraão será o teu nome; porque por pai de muitas nações te tenho posto;",
    6: "6 E te farei frutificar grandissimamente, e de ti farei nações, e reis sairão de ti;",
    7: "7 E estabelecerei a minha aliança entre mim e ti e a tua descendência depois de ti em suas gerações, por aliança perpétua, para te ser a ti por Deus, e à tua descendência depois de ti.",
    8: "8 E te darei a ti e à tua descendência depois de ti, a terra de tuas peregrinações, toda a terra de Canaã em perpétua possessão e ser-lhes-ei o seu Deus.",
    9: "9 Disse mais Deus a Abraão: Tu, porém, guardarás a minha aliança, tu, e a tua descendência depois de ti, nas suas gerações.",
    10: "10 Esta é a minha aliança, que guardareis entre mim e vós, e a tua descendência depois de ti: Que todo o homem entre vós será circuncidado.",
    11: "11 E circuncidareis a carne do vosso prepúcio; e isto será por sinal da aliança entre mim e vós.",
    12: "12 O filho de oito dias, pois, será circuncidado, todo o homem nas vossas gerações; o nascido na casa, e o comprado por dinheiro a qualquer estrangeiro, que não for da tua descendência.",
    13: "13 Com efeito será circuncidado o nascido em tua casa, e o comprado por teu dinheiro; e estará a minha aliança na vossa carne por aliança perpétua.",
    14: "14 E o homem incircunciso, cuja carne do prepúcio não estiver circuncidada, aquela alma será extirpada do seu povo; quebrou a minha aliança.",
    15: "15 Disse Deus mais a Abraão: A Sarai tua mulher não chamarás mais pelo nome de Sarai, mas Sara será o seu nome.",
    16: "16 Porque eu a hei de abençoar, e te darei dela um filho; e a abençoarei, e será mãe das nações; reis de povos sairão dela.",
    17: "17 Então caiu Abraão sobre o seu rosto, e riu-se, e disse no seu coração: A um homem de cem anos há de nascer um filho? E dará à luz Sara da idade de noventa anos?",
    18: "18 E disse Abraão a Deus: Quem dera que viva Ismael diante de teu rosto!",
    19: "19 E disse Deus: Na verdade, Sara, tua mulher, te dará um filho, e chamarás o seu nome Isaque, e com ele estabelecerei a minha aliança, por aliança perpétua para a sua descendência depois dele.",
    20: "20 E quanto a Ismael, também te tenho ouvido; eis aqui o tenho abençoado, e fá-lo-ei frutificar, e fá-lo-ei multiplicar grandissimamente; doze príncipes gerará, e dele farei uma grande nação.",
    21: "21 A minha aliança, porém, estabelecerei com Isaque, o qual Sara dará à luz neste tempo determinado, no ano seguinte.",
    22: "22 Ao acabar de falar com Abraão, subiu Deus de diante dele.",
    23: "23 Então tomou Abraão a seu filho Ismael, e a todos os nascidos na sua casa, e a todos os comprados por seu dinheiro, todo o homem entre os da casa de Abraão; e circuncidou a carne do seu prepúcio, naquele mesmo dia, como Deus falara com ele.",
    24: "24 E era Abraão da idade de noventa e nove anos, quando lhe foi circuncidada a carne do seu prepúcio.",
    25: "25 E Ismael, seu filho, era da idade de treze anos, quando lhe foi circuncidada a carne do seu prepúcio.",
    26: "26 Naquele mesmo dia foram circuncidados Abraão e Ismael seu filho,",
    27: "27 E todos os homens da sua casa, os nascidos em casa, e os comprados por dinheiro ao estrangeiro, foram circuncidados com ele."

   
  },

  18: { // capítulo 18

    1: "1 Depois apareceu-lhe o Senhor nos carvalhais de Manre, estando ele assentado à porta da tenda, no calor do dia.",
    2: "2 E levantou os seus olhos, e olhou, e eis três homens em pé junto a ele. E vendo-os, correu da porta da tenda ao seu encontro e inclinou-se à terra.",
    3: "3 E disse: Meu Senhor, se agora tenho achado graça aos teus olhos, rogo-te que não passes de teu servo.",
    4: "4 Que se traga já um pouco de água, e lavai os vossos pés, e recostai-vos debaixo desta árvore;",
    5: "5 E trarei um bocado de pão, para que esforceis o vosso coração; depois passareis adiante, porquanto por isso chegastes até vosso servo. E disseram: Assim faze como disseste.",
    6: "6 E Abraão apressou-se em ir ter com Sara à tenda, e disse-lhe: Amassa depressa três medidas de flor de farinha, e faze bolos.",
    7: "7 E correu Abraão às vacas, e tomou uma vitela tenra e boa, e deu-a ao moço, que se apressou em prepará-la.",
    8: "8 E tomou manteiga e leite, e a vitela que tinha preparado, e pôs tudo diante deles, e ele estava em pé junto a eles debaixo da árvore; e comeram.",
    9: "9 E disseram-lhe: Onde está Sara, tua mulher? E ele disse: Ei-la aí na tenda.",
    10: "10 E disse: Certamente tornarei a ti por este tempo da vida; e eis que Sara tua mulher terá um filho. E Sara escutava à porta da tenda, que estava atrás dele.",
    11: "11 E eram Abraão e Sara já velhos, e adiantados em idade; já a Sara havia cessado o costume das mulheres.",
    12: "12 Assim, pois, riu-se Sara consigo, dizendo: Terei ainda deleite depois de haver envelhecido, sendo também o meu senhor já velho?",
    13: "13 E disse o Senhor a Abraão: Por que se riu Sara, dizendo: Na verdade darei eu à luz ainda, havendo já envelhecido?",
    14: "14 Haveria coisa alguma difícil ao Senhor? Ao tempo determinado tornarei a ti por este tempo da vida, e Sara terá um filho.",
    15: "15 E Sara negou, dizendo: Não me ri; porquanto temeu. E ele disse: Não digas isso, porque te riste.",
    16: "16 E levantaram-se aqueles homens dali, e olharam para o lado de Sodoma; e Abraão ia com eles, acompanhando-os.",
    17: "17 E disse o Senhor: Ocultarei eu a Abraão o que faço,",
    18: "18 Visto que Abraão certamente virá a ser uma grande e poderosa nação, e nele serão benditas todas as nações da terra?",
    19: "19 Porque eu o tenho conhecido, e sei que ele há de ordenar a seus filhos e à sua casa depois dele, para que guardem o caminho do Senhor, para agir com justiça e juízo; para que o Senhor faça vir sobre Abraão o que acerca dele tem falado.",
    20: "20 Disse mais o Senhor: Porquanto o clamor de Sodoma e Gomorra se tem multiplicado, e porquanto o seu pecado se tem agravado muito,",
    21: "21 Descerei agora, e verei se com efeito têm praticado segundo o seu clamor, que é vindo até mim; e se não, sabê-lo-ei.",
    22: "22 Então viraram aqueles homens os rostos dali, e foram-se para Sodoma; mas Abraão ficou ainda em pé diante da face do Senhor.",
    23: "23 E chegou-se Abraão, dizendo: Destruirás também o justo com o ímpio?",
    24: "24 Se porventura houver cinquenta justos na cidade, destruirás também, e não pouparás o lugar por causa dos cinquenta justos que estão dentro dela?",
    25: "25 Longe de ti que faças tal coisa, que mates o justo com o ímpio; que o justo seja como o ímpio, longe de ti. Não faria justiça o Juiz de toda a terra?",
    26: "26 Então disse o Senhor: Se eu em Sodoma achar cinquenta justos dentro da cidade, pouparei a todo o lugar por amor deles.",
    27: "27 E respondeu Abraão dizendo: Eis que agora me atrevi a falar ao Senhor, ainda que sou pó e cinza.",
    28: "28 Se porventura de cinquenta justos faltarem cinco, destruirás por aqueles cinco toda a cidade? E disse: Não a destruirei, se eu achar ali quarenta e cinco.",
    29: "29 E continuou ainda a falar-lhe, e disse: Se porventura se acharem ali quarenta? E disse: Não o farei por amor dos quarenta.",
    30: "30 Disse mais: Ora, não se ire o Senhor, se eu ainda falar: Se porventura se acharem ali trinta? E disse: Não o farei se achar ali trinta.",
    31: "31 E disse: Eis que agora me atrevi a falar ao Senhor: Se porventura se acharem ali vinte? E disse: Não a destruirei por amor dos vinte.",
    32: "32 Disse mais: Ora, não se ire o Senhor, que ainda só mais esta vez falo: Se porventura se acharem ali dez? E disse: Não a destruirei por amor dos dez.",
    33: "33 E retirou-se o Senhor, quando acabou de falar a Abraão; e Abraão tornou-se ao seu lugar."

  },

  19: { // capítulo 19

    1: "1 E vieram os dois anjos a Sodoma à tarde, e estava Ló assentado à porta de Sodoma; e vendo-os Ló, levantou-se ao seu encontro e inclinou-se com o rosto à terra;",
    2: "2 E disse: Eis agora, meus senhores, entrai, peço-vos, em casa de vosso servo, e passai nela a noite, e lavai os vossos pés; e de madrugada vos levantareis e ireis vosso caminho. E eles disseram: Não, antes na rua passaremos a noite.",
    3: "3 E porfiou com eles muito, e vieram com ele, e entraram em sua casa; e fez-lhes banquete, e cozeu bolos sem levedura, e comeram.",
    4: "4 E antes que se deitassem, cercaram a casa, os homens daquela cidade, os homens de Sodoma, desde o moço até ao velho; todo o povo de todos os bairros.",
    5: "5 E chamaram a Ló, e disseram-lhe: Onde estão os homens que a ti vieram nesta noite? Traze-os fora a nós, para que os conheçamos.",
    6: "6 Então saiu Ló a eles à porta, e fechou a porta atrás de si,",
    7: "7 E disse: Meus irmãos, rogo-vos que não façais mal;",
    8: "8 Eis aqui, duas filhas tenho, que ainda não conheceram homens; fora vo-las trarei, e fareis delas como bom for aos vossos olhos; somente nada façais a estes homens, porque por isso vieram à sombra do meu telhado.",
    9: "9 Eles, porém, disseram: Sai daí. Disseram mais: Como estrangeiro este indivíduo veio aqui habitar, e quereria ser juiz em tudo? Agora te faremos mais mal a ti do que a eles. E arremessaram-se sobre o homem, sobre Ló, e aproximaram-se para arrombar a porta.",
    10: "10 Aqueles homens porém estenderam as suas mãos e fizeram entrar a Ló consigo na casa, e fecharam a porta;",
    11: "11 E feriram de cegueira os homens que estavam à porta da casa, desde o menor até ao maior, de maneira que se cansaram para achar a porta.",
    12: "12 Então disseram aqueles homens a Ló: Tens alguém mais aqui? Teu genro, e teus filhos, e tuas filhas, e todos quantos tens nesta cidade, tira-os fora deste lugar;",
    13: "13 Porque nós vamos destruir este lugar, porque o seu clamor tem aumentado diante da face do Senhor, e o Senhor nos enviou a destruí-lo.",
    14: "14 Então saiu Ló, e falou a seus genros, aos que haviam de tomar as suas filhas, e disse: Levantai-vos, saí deste lugar, porque o Senhor há de destruir a cidade. Foi tido porém por zombador aos olhos de seus genros.",
    15: "15 E ao amanhecer os anjos apertaram com Ló, dizendo: Levanta-te, toma tua mulher e tuas duas filhas que aqui estão, para que não pereças na injustiça desta cidade.",
    16: "16 Ele, porém, demorava-se, e aqueles homens lhe pegaram pela mão, e pela mão de sua mulher e de suas duas filhas, sendo-lhe o Senhor misericordioso, e tiraram-no, e puseram-no fora da cidade.",
    17: "17 E aconteceu que, tirando-os fora, disse: Escapa-te por tua vida; não olhes para trás de ti, e não pares em toda esta campina; escapa lá para o monte, para que não pereças.",
    18: "18 E Ló disse-lhe: Ora, não, meu Senhor!",
    19: "19 Eis que agora o teu servo tem achado graça aos teus olhos, e engrandeceste a tua misericórdia que a mim me fizeste, para guardar a minha alma em vida; mas eu não posso escapar no monte, para que porventura não me apanhe este mal, e eu morra.",
    20: "20 Eis que agora aquela cidade está perto, para fugir para lá, e é pequena; ora, deixe-me escapar para lá (não é pequena?), para que minha alma viva.",
    21: "21 E disse-lhe: Eis aqui, tenho-te aceitado também neste negócio, para não destruir aquela cidade, de que falaste;",
    22: "22 Apressa-te, escapa-te para ali; porque nada poderei fazer, enquanto não tiveres ali chegado. Por isso se chamou o nome da cidade Zoar.",
    23: "23 Saiu o sol sobre a terra, quando Ló entrou em Zoar.",
    24: "24 Então o Senhor fez chover enxofre e fogo, do Senhor desde os céus, sobre Sodoma e Gomorra;",
    25: "25 E destruiu aquelas cidades e toda aquela campina, e todos os moradores daquelas cidades, e o que nascia da terra.",
    26: "26 E a mulher de Ló olhou para trás e ficou convertida numa estátua de sal.",
    27: "27 E Abraão levantou-se aquela mesma manhã, de madrugada, e foi para aquele lugar onde estivera diante da face do Senhor;",
    28: "28 E olhou para Sodoma e Gomorra e para toda a terra da campina; e viu que a fumaça da terra subia, como a de uma fornalha.",
    29: "29 E aconteceu que, destruindo Deus as cidades da campina, lembrou-se Deus de Abraão, e tirou a Ló do meio da destruição, derrubando aquelas cidades em que Ló habitara.",
    30: "30 E subiu Ló de Zoar, e habitou no monte, e as suas duas filhas com ele; porque temia habitar em Zoar; e habitou numa caverna, ele e as suas duas filhas.",
    31: "31 Então a primogênita disse à menor: Nosso pai já é velho, e não há homem na terra que entre a nós, segundo o costume de toda a terra;",
    32: "32 Vem, demos de beber vinho a nosso pai, e deitemo-nos com ele, para que em vida conservemos a descendência de nosso pai.",
    33: "33 E deram de beber vinho a seu pai naquela noite; e veio a primogênita e deitou-se com seu pai, e não sentiu ele quando ela se deitou, nem quando se levantou.",
    34: "34 E sucedeu, no outro dia, que a primogênita disse à menor: Vês aqui, eu já ontem à noite me deitei com meu pai; demos-lhe de beber vinho também esta noite, e então entra tu, deita-te com ele, para que em vida conservemos a descendência de nosso pai.",
    35: "35 E deram de beber vinho a seu pai também naquela noite; e levantou-se a menor, e deitou-se com ele; e não sentiu ele quando ela se deitou, nem quando se levantou.",
    36: "36 E conceberam as duas filhas de Ló de seu pai.",
    37: "37 E a primogênita deu à luz um filho, e chamou-lhe Moabe; este é o pai dos moabitas até ao dia de hoje.",
    38: "38 E a menor também deu à luz um filho, e chamou-lhe Ben-Ami; este é o pai dos filhos de Amom até ao dia de hoje."

  },

  20: { // capítulo 20

    1: "1 E partiu Abraão dali para a terra do sul, e habitou entre Cades e Sur; e peregrinou em Gerar.",
    2: "2 E havendo Abraão dito de Sara, sua mulher: É minha irmã; enviou Abimeleque, rei de Gerar, e tomou a Sara.",
    3: "3 Deus, porém, veio a Abimeleque em sonhos de noite, e disse-lhe: Eis que morto serás por causa da mulher que tomaste; porque ela tem marido.",
    4: "4 Mas Abimeleque ainda não se tinha chegado a ela; por isso disse: Senhor, matarás também uma nação justa?",
    5: "5 Não me disse ele mesmo: É minha irmã? E ela também disse: É meu irmão. Em sinceridade do coração e em pureza das minhas mãos tenho feito isto.",
    6: "6 E disse-lhe Deus em sonhos: Bem sei eu que na sinceridade do teu coração fizeste isto; e também eu te tenho impedido de pecar contra mim; por isso não te permiti tocá-la.",
    7: "7 Agora, pois, restitui a mulher ao seu marido, porque profeta é, e rogará por ti, para que vivas; porém se não lha restituíres, sabe que certamente morrerás, tu e tudo o que é teu.",
    8: "8 E levantou-se Abimeleque pela manhã de madrugada, chamou a todos os seus servos, e falou todas estas palavras em seus ouvidos; e temeram muito aqueles homens.",
    9: "9 Então chamou Abimeleque a Abraão e disse-lhe: Que nos fizeste? E em que pequei contra ti, para trazeres sobre o meu reino tamanho pecado? Tu me fizeste aquilo que não deverias ter feito.",
    10: "10 Disse mais Abimeleque a Abraão: Que tens visto, para fazer tal coisa?",
    11: "11 E disse Abraão: Porque eu dizia comigo: Certamente não há temor de Deus neste lugar, e eles me matarão por causa da minha mulher.",
    12: "12 E, na verdade, é ela também minha irmã, filha de meu pai, mas não filha da minha mãe; e veio a ser minha mulher;",
    13: "13 E aconteceu que, fazendo-me Deus sair errante da casa de meu pai, eu lhe disse: Seja esta a graça que me farás em todo o lugar aonde chegarmos, dize de mim: É meu irmão.",
    14: "14 Então tomou Abimeleque ovelhas e vacas, e servos e servas, e os deu a Abraão; e restituiu-lhe Sara, sua mulher.",
    15: "15 E disse Abimeleque: Eis que a minha terra está diante da tua face; habita onde for bom aos teus olhos.",
    16: "16 E a Sara disse: Vês que tenho dado ao teu irmão mil moedas de prata; eis que ele te seja por véu dos olhos para com todos os que contigo estão, e até para com todos os outros; e estás advertida.",
    17: "17 E orou Abraão a Deus, e sarou Deus a Abimeleque, e à sua mulher, e às suas servas, de maneira que tiveram filhos;",
    18: "18 Porque o Senhor havia fechado totalmente todas as madres da casa de Abimeleque, por causa de Sara, mulher de Abraão."

   
  },




  
  
};

// inicia com o capítulo 1
window.onload = () => {
  
};

function trocarCapitulo(capitulo) {
  capituloAtual = Number(capitulo);

  // limpa seleção anterior
  listaVersiculos = [];
  document.getElementById("versiculos").innerHTML = "";

  gerarBotoesDoCapitulo(capituloAtual);
}

function gerarBotoesDoCapitulo(capitulo) {
  const area = document.getElementById("botoes");
  area.innerHTML = "";

  const totalVersiculos = Object.keys(textos[capitulo]).length;

  for (let i = 1; i <= totalVersiculos; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-light btn-versiculo";
    btn.innerText = i;

    btn.onclick = function () {
      toggleVersiculo(i, btn);
    };

    area.appendChild(btn);
  }
}

function toggleVersiculo(numero, botao) {
  const index = listaVersiculos.findIndex(v => v.numero === numero);

  if (index !== -1) {
    // remove
    listaVersiculos.splice(index, 1);
    botao.classList.remove("ativo");
  } else {
    // adiciona
    listaVersiculos.push({
      numero: numero,
      texto: textos[capituloAtual][numero]
    });
    botao.classList.add("ativo");
  }

  listaVersiculos.sort((a, b) => a.numero - b.numero);
  renderizar();
}

function renderizar() {
  const container = document.getElementById("versiculos");
  container.innerHTML = "";

  listaVersiculos.forEach(v => {
    const p = document.createElement("p");
    p.innerText = v.texto;
    container.appendChild(p);
  });
}
