/*jslint browser: true*/
/*global $, jQuery, console, alert*/


function submit() {
    'use strict';

    var json = {
        "people": {
            "person": [{
                "name": "Peter",
                "age": 43,
                "sex": "male"
            },
            {
                "name": "Sara",
                "age": 65,
                "sex": "female"
            },
            {
                "name": "Ahmed",
                "age": 20,
                "sex": "male"
            },
            {
                "name": "Amr",
                "age": "10",
                "sex": "male"
            }]
        }
    };

    var searchValue = document.getElementById("searchBox").value;
    var found = 0;

    if (searchValue == "") {
        alert("You should enter a name!");
    }
    else {

        for (var i = 0; i < json.people.person.length; i++) {
            if (json.people.person[i].name == searchValue) {
                document.getElementById("name").innerHTML = "Name is: " + json.people.person[i].name;
                document.getElementById("age").innerHTML = "Age is: " + json.people.person[i].age;
                document.getElementById("sex").innerHTML = "Sex is: " + json.people.person[i].sex;

                found ++;
            }
        }
        if(found == 0){alert("The name you have entered is not found!")};
    }
}

