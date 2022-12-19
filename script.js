function CarregaDicionario() {
  
  var biografias = {
      bio01: {
      nome: "Gilberto Gil",     
      imagem: "imagens/gilberto.jpg",     
      descricao: "Gil nasceu em 1942 na Bahia e desde sempre mostrou que tinha dentro dele o bichinho da música. Ao lado de Caetano, o baiano se empenhou para levar a frente a sua Tropicália e acabou entrando na história da música popular brasileira. ",
      
      },
      bio02: {
      nome: "Caetano Veloso",
      imagem: "imagens/caetano.jpg",
      descricao: "Caetano Veloso nasceu em 7 de agosto de 1942 em Santo Amaro, na Bahia, como o quinto dos sete filhos de José Teles Velloso. É impossível falar de Tropicália sem mencionar Caetano Veloso. Ele e Gilberto Gil foram os principais nomes da questionadora geração de 60 que lutava corajosamente pela liberdade e contra a ditadura",
      
      },     
      bio03: {      
      nome: "Rita Lee",
      imagem: "imagens/rita.jpg",
      descricao:  "Nascida em 1947, em uma família de classe média paulistana, Rita é a filha mais nova do dentista Charles Fenley Jones. Em 1967, o grupo estava ao lado de Gilberto Gil no III Festival da Música Popular Brasileira durante a apresentação da canção Domingo no Parque. Vanguardistas, os integrantes da banda também participaram do disco icônico Tropicália ou Panis et Circensis.Rita Lee acabou saindo dos Mutantes e seguiu uma memorável carreira solo investindo mais no ritmo pop.",
      
      },

      bio04: {
      nome: "Tom Zé",
      imagem: "imagens/tom.jpg",
      descricao: "Controverso, questionador, polêmico, esse é Tom Zé, um baiano nascido em Irara, no recôncavo baiano, em 1936. Filho de um sujeito que ganhou a loteria federal, a família de Zé nunca teve dificuldades financeiras e aceitou rapidamente quando o adolescente resolveu cursar música na Universidade da Bahia.Foram seis anos estudando e conhecendo gente jovem igualmente interessada pelo universo artístico. Foi durante esse período que conheceu outros integrantes da Tropicália e juntos fizeram o espetáculo Nós, Por Exemplo. Essa parceria foi tão forte que culminou na gravação do CD Tropicália ou Panis et Circensis.",
      
       },

      bio05: {
      nome:"Nara Leão",
      imagem: "imagens/nara.jpg",
      descricao: "Nara nasceu em Vitória em 1942. A musa da bossa nova também participou ativamente da Tropicália. No final da década de 60, Nara se aproximou dos compositores baianos e participou da gravação do disco Tropicalia ou Panis et Circenses. Sua voz ficou eternizada pela canção Lindoneia.",
     
      },
  
      bio06: {
      nome: "Gal Costa",
      imagem: "imagens/gal.jpg",
      descricao: "Gal Costa, nasceu em Salvador, Bahia, no dia 26 de setembro de 1945. Sua carreira musical está intimamente ligada à Tropicália, o movimento que ajudou a criar. Em 1965, Gal foi para o Rio de Janeiro, onde lançou seu primeiro disco, ao lado de Caetano Veloso. No ano a seguir, se apresentou no I Festival Internacional da Canção com Gilberto Gil e Torquato Neto. Na ocasião, os três cantaram Minha Senhora.",
    
  },
     bio07: {
      nome: "Torquato Pereira",
      imagem: "imagens/torquato.png",
      descricao: "Torquato nasceu no Piauí, em 1944, filho de um promotor público, e foi durante a adolescência estudar em Salvador. Foi lá que conheceu a turma animada que estava querendo revolucionar a música e juntos começaram a ensaiar os primeiros passos da Tropicália. Jornalista, letrista, compositor, ele forneceu uma série de músicas para grandes nomes da MPB.",
     
  },
     bio08: {
      nome: "Mutantes",
      imagem: "imagens/mutantes.jpg",
      descricao: "Os Mutantes é uma banda brasileira de rock psicodélico formada durante o Movimento Tropicalista no ano de 1966, em São Paulo, por Arnaldo Baptista, Rita Lee e Sérgio Dias. Também participaram do grupo Liminha e Dinho Leme",
      
  },
     bio09: {
      nome: "Jorge Ben Jor",
      imagem: "imagens/jorge.jpg",
      descricao: "Jorge Bem Jor, nasceu no bairro da Madureira, no Rio de Janeiro, no dia 29 de dezembro de 1945.  Tropicalia, bebeu de Jorge Ben muita da sua irreverência musical.  ",
  },
};


var content = document.getElementById("content");

  for (var bio in biografias) {content.innerHTML +='<div class="card">' +'<img src="' + biografias[bio].imagem + '"/>' + "<details>" + "<summary>" +
      biografias[bio].nome + "</summary>" + "<p>" +
      biografias[bio].descricao + "</p>" +"</details></div>";
  };
  

}

CarregaDicionario();