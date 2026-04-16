export const renderCards = (container, item) => {
    container.innerHTML = '';
    item.forEach(character => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}" class="card-image w-full h-auto">
            <div class="card-content p-4">
                <h2 class="card-title text-xl font-bold mb-2">${character.name}</h2>        
                <p class="card-description text-gray-300 font-mono">${character.species} - ${character.status}</p>                
        
        `;
        container.appendChild(card);
    });
}