import Quiz from "./modules/start.js";

const containers = document.querySelectorAll(".container");
const botoes = document.querySelectorAll(".botao, .alternativas li");
const quiz = new Quiz(containers, botoes);
quiz.initQuiz();
