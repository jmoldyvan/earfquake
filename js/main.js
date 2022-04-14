// have an input area for magnitude
// list out the titles for correspoinding mag
//if whole number select magnitude by first charr 
// 

const fireball_url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02'
// const fireball_url = 'https://earthquake.usgs.gov/fdsnws/event/1/application.json?eventtypes'
document.querySelector('.initiate').addEventListener('click', search)
the_input = document.querySelector('.the_input')
const resetbutton = document.querySelector('.resetbutton')
let monster_list = document.querySelector('.monster_list')

fetch(fireball_url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        let typeObj = data.features;
        let proparr = []
        typeObj.forEach(elem => {
            propObj = elem['properties']
            proparr.push(propObj)
        });
        mt_dict = []
        proparr.forEach(elem => {
            magObj = elem.mag
            titleObj = elem.title
            mt_dict.push({
                key: magObj,
                value: titleObj
            })
        })
        console.log(proparr)
        console.log(mt_dict)
    })

    .catch(err => {
        console.log(`error ${err}`)
    });



function search() {
    the_input = document.querySelector('.the_input').value
    console.log(the_input)
    mt_dict.forEach(elem => {
        if (the_input == elem.key) {
            let newline = document.createElement('h3')
            newline.value = elem.value
            newline.innerHTML = elem.value
            monster_list.appendChild(newline)
            resetbutton.addEventListener('click', event => {
                newline.remove()
            })
        }
    })

}

    // loop throught the data.features get the values
    // 