let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};


function subSheets(obj) {
    let list = document.getElementById("list");
    let ul = document.createElement('ul')
    for (key in obj) {
        let li = document.createElement('li')
        li.innerHTML = key;
        ul.appendChild(li)
        if (typeof obj[key] === 'object') {
            let ul2 = document.createElement('ul')
            for (key2 in obj[key]) {
                let li2 = document.createElement('li')
                li2.innerHTML = key2;
                ul2.appendChild(li2)
                if (typeof obj[key][key2] === 'object') {
                    let ul3 = document.createElement('ul')
                    for (key3 in obj[key][key2]) {
                        let li3 = document.createElement('li')
                        li3.innerHTML = key3;
                        ul3.appendChild(li3)
                    }
                    li2.appendChild(ul3)
                }
            }
            li.appendChild(ul2)
        }
    }
    list.appendChild(ul)
}
subSheets(data)
