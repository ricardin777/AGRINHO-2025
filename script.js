// Inicializa o mapa
var map = L.map('map').setView([-25.4284, -49.2733], 13); // Coordenadas de Curitiba

// Adiciona o layer de tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Dados dos locais
var locations = [
    {
        name: "Fazenda São João",
        type: "Milho",
        time: "2 horas",
        benefits: "Geração de emprego e alimento para a cidade",
        coords: [-25.4321, -49.2783],
        iconUrl: 'https://example.com/icons/fazenda.png' // Substitua pelo caminho do seu ícone
    },
    {
        name: "Mercado Municipal",
        type: "Diversos",
        time: "1 hora",
        benefits: "Distribuição para consumidores urbanos",
        coords: [-25.4284, -49.2733],
        iconUrl: 'https://example.com/icons/mercado.png' // Substitua pelo caminho do seu ícone
    }
];

// Função para criar ícones personalizados
function createIcon(url) {
    return L.icon({
        iconUrl: url,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
}

// Adiciona marcadores ao mapa
locations.forEach(function(location) {
    var marker = L.marker(location.coords, { icon: createIcon(location.iconUrl) }).addTo(map);
    marker.bindPopup(location.name);

    marker.on('mouseover', function() {
        document.getElementById('product-info').innerHTML = `
            <strong>Produto:</strong> ${location.type}<br>
            <strong>Tempo de Transporte:</strong> ${location.time}<br>
            <strong>Benefícios:</strong> ${location.benefits}
        `;
    });

    marker.on('mouseout', function() {
        document.getElementById('product-info').innerHTML = 'Passe o mouse sobre um ícone para ver os detalhes.';
    });
});