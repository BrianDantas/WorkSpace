const prompt = require("prompt-sync")();
let rotinaM = 0;
let rotinaT = 0;
let noite = 0;
let dia = 0;
let acordar2 = "inicio";

while (dia > 100) {
  console.log(
    "Vida de Estagiario - Neste jogo voce e so mais um ninguem, sem importancia. Igual voce agora!!!"
  );
  console.log(
    "O jogo se passar na cidade de SP - Voce tem 18 anos - Concluiu seu tecnico em informatica e faz estagio na empresa RED-TechEd"
  );
  console.log(
    "Voce e de uma cidade no interior e atualmente mora em uma republica mista."
  );
  console.log("\n");
  console.log(
    "Sempre antes de uma alternativa tem um numero, responda seu argumento de acordo com o numero. BOA SORTE"
  );
  console.log("\n");
  console.log(
    "Sao 6AM seu despertador tocou, voce pode acordar agora igual um besta ou quer mais um cochilinho rapido?"
  );
  acordar2 = parseInt(
    prompt("1-SIM cochilar um pouco! 2-NAO, sou besta vou levantar! ")
  );
  console.log("\n");

  if (acordar2 == 2) {
    rotinaM = 0;
    console.log(
      "Voce ja era otario antes e agora esta um belo otario de pé, embora ninguem sim porta."
    );
    let escolha1 = parseInt(
      prompt(
        "O que o energumeno deseja fazer? 1-TOMAR BANHO 2-TOMAR CAFÉ 3-SAIR PARA CORRER"
      )
    );
    console.log("\n");

    switch (escolha1) {
      case 1:
        console.log(
          "Enquanto toma banho voce sentiu uma fraqueza, provavelmente porque nao comeu seu cafe. "
        );
        console.log(
          "Parabens caiu de boca no box e cortou ela, ja era feio antes, agora... "
        );
        console.log("\n");
        console.log(
          "Aprendendo a licao voce foi tomar seu cafe, e percebeu que ja eram 8:40am e saiu correndo e comendo para o estagio. "
        );
        console.log("\n");
        console.log(
          "Enquanto corria de bicicleta para nao atrasar voce passou a principal e foi atropelado!!!"
        );
        console.log(
          "Voce acorda no hospital as 11PM, sua mae esta chorando enquanto o medico falava que voce nao sobreviveria..."
        );
        console.log(
          "Voce dorme novamente, mas, quando acordou voce percebeu que estava morto..."
        );
        console.log("\n");
        console.log(
          "GAME OVER! Tente Novamente e saiba ter escolhas melhores. "
        );
        dia = dia + 101;
        break;
      case 2:
        console.log(
          "Voce vai para a cozinha e percebe que a Michele (Gatinha mais chapa quente do pedaco) esta ali meio triste voce ve e decide falar com ela. "
        );
        console.log("\n");
        console.log(
          "Escolha um dialogo! Lembre suas escolhas tem peso, ou seja toma cuidado amigo"
        );
        falarM = parseInt(prompt("1-BOM DIA! 2-Oi sumida rsrs"));
        switch (falarM) {
          case 1:
            console.log(
              "Ela olha para voce levantando sem responder, enquando caminha em direcao o namorado dela"
            );
            console.log(
              "voce olha para ele que esta a te encarar, e assustado voce levanta e vai tomar banho. "
            );
            console.log("\n");
            console.log(
              "Voce esta voltando para o quarto rapido e fedendo com medo do namorado de michele estar vindo atras de voce, nao notou um movel novo da dona carminha(gentil idosa da casa)"
            );
            console.log(
              "#PAAAAAAAAAAAAAAAAA esse foi o som de voce batendo o dedinho, que fez voce cair de cabeca e desmaiar"
            );
            console.log(
              "Parabens seu trouxa, voce acabou de acordar no hospital morto."
            );
            console.log("\n");
            console.log(
              "GAME OVER! Tente Novamente e saiba ter escolhas melhores. "
            );
            dia = dia + 102;
            break;
          case 2:
            console.log(
              "Oi sumida!! No momento em que voce termina a sentenca sua sentenca foi dada"
            );
            console.log(
              "Mais rapido que sua cueca pesando, veio o tapa do namorado de michele, vulgo Guidao..."
            );
            console.log(
              "Guidao, marombeiro de 2 metros que pegava 200KG em cada braco..."
            );
            console.log(
              "Parabens nao sobro muito para acordar morto no hospital"
            );
            console.log("\n");
            console.log(
              "GAME OVER! Tente Novamente e saiba ter escolhas melhores. "
            );
            dia = dia + 102;
            break;
        }
      case 3:
        console.log(
          "Voce caminha para pegar seus tenis e nota uma discucao na cozinha"
        );
        console.log(
          "Alem de corno é curiso entao decide ir ver, chegando perto voce ve o Guidao famigerado namorado de Michele. Uma vizinha de porta."
        );
        console.log(
          "COVARDEMENTE voce se afasta e comeca a sair descuidado para pegar seu tenis"
        );
        console.log(
          "#PAAAAAAAAAAAAAAAAA esse foi o som de voce batendo o dedinho no movel novo da dona carminha(gentil idosa da casa) voce caiu de cabeca e desmaiou"
        );
        console.log(
          "Parabens inseto, voce acabou de acordar no hospital morto."
        );
        console.log("\n");
        console.log(
          "GAME OVER! Tente Novamente e saiba ter escolhas melhores. "
        );

        break;
        dia = dia + 102;
        break;
    }
  } else if (acordar2 == 1) {
    console.log(
      "Enquanto voce cochilava parece que uma discussao de casal envolvendo a Michele o Guidao, (casal amigavel do quarto ao lado)"
    );
    console.log(
      "Foi responsavel por desencadeiar um incendio no novo movel de centro de dona Carminha (gentil senhora moradora)"
    );
    console.log(
      "Apos um barulho que o acordou voce notou que a casa tinha desmoronado, e logo voce rapaz de sorte estava preso nos escombros..."
    );
    console.log(
      "Aproximadamente as 00Hrs seu corpo foi tirado ja sem vida das cinzas e tijolos"
    );
    console.log("\n");
    console.log(
      "GAME OVER! Tente Novamente, para conseguir finais melhores!!! "
    );
    dia = dia + 102;

    rotinaM = 20;
  }
}
console.log(
  "Espero que tenha se divertido, provavelmente acordou morto, mas tente novamente pode ser que morra dormindo em chamas :o ;( "
);

/*ATENCAO CARO CORRETO, NAO SOU NENHUM PSICOPATA ANORMAL, OU MESMO NORMAL. 
    OS FINAIS TRAGICOS FORAM EM DECORRENCIA DA FALTA DE TEMPO, JURU QUE MINHA IDEIA ERA BEM MELHOR.
    ABRACOS E CUIDADO COM MOVEIS DE CENTROS, ELES SAO TRAICOEIROS 
    */
