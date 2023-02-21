export default class Quiz {
  constructor(containers, buttons) {
    this.containers = containers;
    this.buttons = buttons;
    this.pontos = 0;
    this.cont = 0;
  }
  initQuiz() {
    this.bindEvents();
    this.clickEvents();
  }
  bindEvents() {
    this.verificaBotao = this.verificaBotao.bind(this);
    this.changeContainer = this.changeContainer.bind(this);
  }
  clickEvents() {
    this.buttons.forEach((element) =>
      element.addEventListener("click", this.verificaBotao)
    );
  }
  verificaBotao(event) {
    if (event.currentTarget.classList.contains("botao")) this.changeContainer();
    else this.verificaResposta(event.currentTarget);
  }

  //VERIFICA SE RESPOSTA É CORRETA OU ERRADA
  verificaResposta(alternativa) {
    if (alternativa.classList.contains("x")) {
      this.pontos++;
      alternativa.classList.add("correto");
      setTimeout(this.changeContainer, 400);
    } else {
      alternativa.classList.add("errado");
      setTimeout(this.changeContainer, 400);
    }
  }

  //MUDANÇA DE CONTAINERS AO CLIQUE
  changeContainer() {
    if (this.containers[this.cont + 1] == undefined) {
      this.limpaQuiz();
      this.containers[this.cont].classList.remove("ativo");
      this.cont = 0;
      this.containers[this.cont].classList.add("ativo");
    }
    else if(this.containers[this.cont + 2] == undefined){
      this.resultado();
      this.containers[this.cont].classList.remove("ativo");
      this.cont++;
      this.containers[this.cont].classList.add("ativo");
    }else {
      this.containers[this.cont].classList.remove("ativo");
      this.cont++;
      this.containers[this.cont].classList.add("ativo");
    }
  }
  resultado(){
    const result = document.querySelector('.resultado');
    result.children[0].innerText = `Você acertou ${this.pontos} de 5 questões`;
    if(this.pontos == 5) result.children[1].innerText = 'Parabens! você sabe tudo sobre pokemons';
    else if(this.pontos >= 3) result.children[1].innerText = 'Quase la! estude mais os pokemons para ser um mestre';
    else result.children[1].innerText = 'Xii... ainda há muito o que aprender :(';
  }
  limpaQuiz(){
    this.buttons.forEach((element)=> element.classList.remove('correto'));
    this.buttons.forEach((element)=> element.classList.remove('errado'));
    this.pontos = 0;
  }
}
