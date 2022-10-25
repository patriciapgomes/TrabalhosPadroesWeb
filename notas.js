        //A vantagem de se colocar o JavaScript num arquivo externo é que ele pode ser aproveitado em
        //outros arquivos também. Aqui você mexe só no JavaScript.
        //Para usar este arquivo em qualquer outro HTML é só incluir a seguinte tag no seu arquivo
        //principal lá em baixo no final do body: 
        //<script src= "notas.js"></script> 

        //Aqui não é necessário declarar variável e nem dizer qual é o tipo dela. Ela vai assumir o valor atribuído a ela.
        //"let" cria uma variável. Por isso, "nome" aqui é uma variável.
        //"prompt" é a função que cria a janelinha para se escrever dentro dela.

        let nome = prompt("Qual é o seu nome?")

        //alert é a função que "pop-up" na tela:
        alert("Olá, " + nome);

        //É importante colocar cada uma dessas letras maiúsculas certinho pois o comando dá errado se esquecermos
        //disso. o "innerHTML" é o conteúdo da tag que está sendo procurado. Ele é que será alterado pelo que está
        //depois do "=". 

        //document.getElementById("media").innerHTML = "Olá, " + nome + "!";
        //document.getElementById("situacao").style.color = "blue";

        //Atenção: Alt+Shift+F indenta tudo de uma vez!!!

        //document.write("olá!") -> serve para apagar o que veio antes.

        //Para que o navegador leia a variável como um número (e não como texto) é necessário
        //acrescentar o "parseFloat" para números com casas decimais ou "parseInt" para números
        //inteiros (ou quando se quiser despresar as casas decimais).

        let nota1 = parseFloat(prompt("Qual foi sua 1ª nota?"));
        let nota2 = parseFloat(prompt("Qual foi sua 2ª nota?"));

        let media = (nota1 + nota2) / 2;

        // neste caso criamos a variável "situacao" com valor vazio dentro da tag script para que
        //dentro das funções "if, then, else" ela possa ter seu valor atribuído, conforme cada caso.

        let situacao = "";

        //No JavaScript o teste lógico vem sempre dentro dos parêntesis
        //No JavaScript não precisa escrever "Então", o programador era preguiçoso. rsrsrsrs
        //O IF é uma bifurcação não se executa as tarefas do IF e do ELSE. se executa do IF e
        //vai embora ou do ELSE e vai embora. ou vai para um lado OU para o outro. 

        if (media >= 6) {
            situacao = "Aprovado";
            color = "blue";
        } else {

            //o "&&" (duplo) serve para concatenar condições no JavaScript
            //&& significa AND (E) e ||significa OR (OU)
            // Alt + Shift + F -> corrige a indentação do documento

            if (media >= 2 && media < 6) {
                situacao = "Exame Final";
                color = "orange";

            } else {
                situacao = "Reprovado";
                color = "red";
            }
        }
        document.getElementById("nota1").innerHTML = nota1;
        document.getElementById("nota2").innerHTML = nota2;
        document.getElementById("media").innerHTML = media;
        document.getElementById("situacao").innerHTML = situacao;
        document.getElementById("situacao").style.color = color; // Este é o comando que muda a cor da fonte em cada caso.