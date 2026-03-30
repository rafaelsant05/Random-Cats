async function carregarGato() {
    const imgElemento = document.getElementById('foto-gato');
    
    try {
       
        const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
        
        
        const dados = await resposta.json();
        
        
        imgElemento.src = dados[0].url;
        
    } catch (erro) {
        console.error("Erro ao carregar:", erro);
        alert("Não foi possível carregar o gatinho. Verifique sua internet!");
    }
}


document.getElementById('btn-novo').addEventListener('click', carregarGato);

carregarGato();