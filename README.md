
Neste exemplo, estou consumindo a api da COVID-19 utilizando JavaScript.

### Tecnologias usadas
#### HTML
#### BOOTSTRAP 4
#### JAVASCRIPT

Link da API utilizado http://coronavirus-19-api.herokuapp.com/countries

### Exemplo em js
```
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
```
Para exemplo estou pesquisando na api os dados referente ao Brasil, mas poderá ser informado qualquer país
no parâmetro da função get().

![git-repositorio](https://user-images.githubusercontent.com/66228224/85183670-e19e2b80-b262-11ea-860f-a9a1e63a7244.png)
