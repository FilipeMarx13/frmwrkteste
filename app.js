
const urlposts = 'https://jsonplaceholder.typicode.com/posts';
const listaposts = document.getElementById("tabelaPosts");

fetch(urlposts) //request
    .then((response) => response.json()) //converter o resultado
    .then( (data) => { //resultado convertido
        let aidis = data; // setando em uma variavel - resultado é um array
        aidis.map((a) => { //açoes para cada item do array
            //let nodeLista = document.createElement("LI"); // Para cada item do array criar uma tag li
            let tabela = document.getElementById('tabela');
            let line = document.createElement('tr');
            let userId = document.createElement("td");
            let id = document.createElement("td");
            let title = document.createElement("td");
            let body = document.createElement("td");

            userId.innerHTML = a.userId; //Passar os dados para a tag criada
            id.innerHTML = a.id;
            title.innerHTML = a.title;
            body.innerHTML = a.body;

            listaposts.appendChild(line);
            listaposts.appendChild(userId);
            listaposts.appendChild(id);
            listaposts.appendChild(title);
            listaposts.appendChild(body);


        });
    })
    .catch( (err) => console.warn(err)); //tratando erros

const urlalbums = 'https://jsonplaceholder.typicode.com/albums';
const listaalbums = document.getElementById("tabelaAlbum");

fetch(urlalbums) //request
    .then((response) => response.json()) //converter o resultado
    .then( (data) => { //resultado convertido
        let aidis = data; // setando em uma variavel - resultado é um array
        aidis.map((a) => { //açoes para cada item do array
            var test = 'test';
            let tabela = document.getElementById('tabela');
            let line = document.createElement('tr');
            let userId = document.createElement("td"); // Para cada item do array criar uma tag li
            let id = document.createElement("td");
            let title = document.createElement("td");

            userId.innerHTML = a.userId; //Passar os dados para a tag criada
            id.innerHTML = a.id;
            title.innerHTML = a.title;

            listaalbums.appendChild(line);// colocar as tags <tr> dentro da UL
            listaalbums.appendChild(userId);
            listaalbums.appendChild(id);
            listaalbums.appendChild(title);
        });
    })
    .catch( (err) => console.warn(err)); //tratando erros

const urltodos = 'https://jsonplaceholder.typicode.com/todos';
const listatodos = document.getElementById("tabelaTodos");

fetch(urltodos) //request
    .then((response) => response.json()) //converter o resultado
    .then( (data) => { //resultado convertido
        let aidis = data; // setando em uma variavel - resultado é um array
        aidis.map((a) => { //açoes para cada item do array

            let tabela = document.getElementById('tabela');
            let line = document.createElement('tr');
            let userId = document.createElement("td");
            let id = document.createElement("td");
            let title = document.createElement("td");
            let completed = document.createElement("td");

            let change = document.querySelectorAll('td');
            change.forEach(completed => {
              if (completed == true){
                a.style.color = 'green';
                completed.innerHTML = a.completed;
              }


            });



            userId.innerHTML = a.userId; //Passar os dados para a tag criada
            id.innerHTML = a.id;
            title.innerHTML = a.title;
            completed.innerHTML = a.completed;


            listatodos.appendChild(line);
            listatodos.appendChild(userId);
            listatodos.appendChild(id);
            listatodos.appendChild(title);
            listatodos.appendChild(completed);

        });
    })
    .catch( (err) => console.warn(err)); //tratando erros
