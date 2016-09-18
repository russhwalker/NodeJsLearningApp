var displayPeople = function (people) {
    var ul = document.querySelector('ul');
    ul.innerHTML = '';
    people.forEach(function (person) {
        var li = document.createElement('li');
        li.innerText = person.name;
        ul.appendChild(li);
    }, this);
};

var getPeople = function () {
    if (!self.fetch) {
        //Apparently Edge doesn't get fetch until Aniversary update
        alert('No fetch api exists in your browser.');
        return;
    }

    var init = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    };
    var url = '/getPeopleData/' + document.getElementById('count').value;
    fetch(url, init)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (json) {
                    displayPeople(json);
                });
            }
            else {
                alert('Fetch failed!');
            }
        });
};

var btnGetPeople = document.getElementById('btnGetPeople');
btnGetPeople.addEventListener('click', getPeople, false);