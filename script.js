
//Função get recebendo o país como parâmetro.
function Get(country) {
    //Variável recebendo a URL da API mais o parâmetro país.
    var url = "http://coronavirus-19-api.herokuapp.com/countries/" + country;

    //Buscando os dados e recebendo em formato json.
    fetch(url).then(res => res.json())
        .then(data => {
            //Variável dados recebendo os dados e criando a tabela no HTML para a exibição dos dados.
            var dados =
            '<td>'+data.country+'</td>'+
            '<td class="bg-info">'+data.cases+'</td>'+
            '<td class="bg-success">'+data.recovered+'</td>'+
            '<td class="bg-warning">'+data.active+'</td>'+
            '<td class="bg-danger">'+data.deaths+'</td>';
         
        //Passando os dados para a DIV conteudo.       
        document.getElementById("conteudo").innerHTML = dados;
        })
}