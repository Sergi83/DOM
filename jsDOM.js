// 1. створити список з допомогою роботи з домом, 
// пронумерувати список та вивести всі його значення. 

// Населення відобразити в млн "40 млн". 

// Київ та Україна підсвітити синьо-жовтим кольором.

const CountryList = [

    {
        country: "Україна",
        capital: "Київ",
        count: 40000000,
    },

    {
        country: "Грузія",
        capital: "Тбілісі",
        count: 10000000,
    },

    {
        country: "Великобританія",
        capital: "Лондон",
        count: 100000000,
    },

    {
        country: "США",
        capital: "Вашингтон",
        count: 300000000,
    }
];


function createCountryList() {
    // create ordered list for objects inside the CountryList array
    let numList = document.createElement("ol");

    // add styles
    // numList.setAttribute(
    //     "style", ""
    //     );


    console.log(CountryList, 'country list array of objects');
    console.log(numList, 'numList - new list created');

    for (let i = 0; i < CountryList.length; i++) {
        // create items inside numList (number of objects inside the array)
        let listObj = document.createElement("li");

        // create another lists inside numList (later will be the list of values from CountryList's objects)
        let subListKey = document.createElement("ul");

        for (let key in CountryList[i]) {

            let valueCL = CountryList[i][key];
            

            let countryKey = document.createElement("li");
            
            

            switch (true) {
            case (valueCL == "Україна" || valueCL == "Київ"):
                // color task
                // countryKey = document.querySelector('.color');

                // add class that will used in the CSS document 
                countryKey.classList.add('color');

                countryKey.innerHTML = valueCL;
            
                subListKey.append(countryKey);
                break;
                case (valueCL > 1000000):
                    // mln task: dismiss zeros and create a string instead;
                    valueCL /= 1000000;
                    valueCL = ''+ valueCL + " млн";
                    
            default:
                // add value from CountryList objects inside new item
                countryKey.innerHTML = valueCL;
                
                // add values (items) of the key's inside subListKey (unordered list)
                subListKey.append(countryKey);
                break;

            }

        }
        // combine all lists and values together - create the list that you can see in console
        listObj.append(subListKey);
        numList.append(listObj);
    }
    // write the Country list inside the html doc in a browser
    document.body.append(numList);
};

// call function that make list and write it in browser
console.log(createCountryList());






// 	2. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).


// create a button and add it to html body
let btn = document.createElement('button');
btn.innerHTML = "random color";
document.body.append(btn);
btn.onclick = randomColor;

function getList() {
    let list = document.getElementById("container"); //1.  отримує наш елемент який ми хочемо змінити
    console.log(list);
    for (let i = 1; i < 6; i++) {   
        // 2. створюєм цикл який в майбутньому нам створить 10 айтемів

        let li = document.createElement('li'); // 3. створюєм новий елемент (div, span, li, ul, i)

        
        li.innerText = `Choose color ${i}`; // 4. innerText(innerHtml) - який створюєм контент для нашого елемента

        // 5. add id to each list item
        li.id = `item${i}`;

        list.appendChild(li); // 6. додаємо елемент всередину нашого ul abo "list"

    }
    
};

let colors = ["red", "green", "blue", "yellow", "white"]


function randomColor () {
    for (let color of colors) {

        let min = 0;
        let max = 5;
        // find random number (0, 5)
        let random = Math.floor(Math.random() * (max - min + 1)) + min;

        // get an id (random from 0 to 5)
        let elem = document.getElementById(`item${random}`);
        //  let elem = document.querySelector('#some-id');


        // get background style
        // elem.style.background = color;
        

        elem.style.setProperty("background-color", `${color}`);
    };
}


console.log(getList(), 'getList function');
