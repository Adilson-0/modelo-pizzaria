const button_menu = document.getElementById("menu");
const menu = document.getElementById("opcoes");
const menu_buttons = document.getElementById("opcoes_button");
const body = document.querySelector("body");
const cards = document.getElementById("align_cards");
const pizzaIcon = document.getElementById("pizza_icon");
const background_intro = document.getElementById("intro");
const intro_text = document.getElementById("intro_text");
const modal1_card = document.getElementById("modal_card1");
const modal2_card = document.getElementById("modal_card2");
const modal3_card = document.getElementById("modal_card3");
var count = 0;
var largura = body.clientWidth;


function atualizar(){
    largura = body.clientWidth;
    if(largura < 598){
        background_intro.style.backgroundSize = "220%";
        pizzaIcon.style.display = 'none';
        document.querySelector(".d-block w-100").style.width = '100%';
        intro_text.style.padding = '10%';
    }else{
        let pizzaIcon = document.getElementById("pizza_icon");
        let background_intro = document.getElementById("intro");
        pizzaIcon.style.display = 'block';
        background_intro.style.backgroundSize = "100%";
        intro_text.style.padding = "14%";
    }
    if(largura < 900){
        cards.style.display = 'block';
    }else{
        cards.style.display = 'flex';
    }
    if(largura < 770){
        modal1_card.style.width = 'auto';
        modal2_card.style.width = 'auto';
        modal3_card.style.width = 'auto';
    }else{
        modal1_card.style.width = '30%';
        modal2_card.style.width = '30%';
        modal3_card.style.width = '30%';
    }
}

button_menu.addEventListener('click', () => {
    count++;
    if(count == 1){
        menu.style.display = "block";
    }else if(count > 1){
        menu.style.display = "none";
        count = 0;
    }
});