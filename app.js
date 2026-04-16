import { CHARACTERS } from "./data.js";
import { renderCards } from "./components/card.js";
import { displayPaginator } from "./components/paginator.js";

const app = document.getElementById('app');

// Crear elementos basicos para el layout
const cardsContainer = document.createElement('section');
cardsContainer.className = 'cards';

app.appendChild(cardsContainer);


renderCards(cardsContainer, CHARACTERS);
displayPaginator();