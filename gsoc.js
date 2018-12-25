var l = []
var a = []
var orgTech = {}

a = document.getElementsByClassName(
    'organization-card__link layout-row flex md-soc-theme'
)
for (i = 0; i < a.length; i++) {
    l.push(a[i].href)
}

var request = new XMLHttpRequest()

request.addEventListener(
    'load',
    function(evt) {
        a = evt.target.response
        let htmlObj = document.createElement('div')
        htmlObj.innerHTML = a
        b = htmlObj.getElementsByClassName('md-display-1')[0]
        c = htmlObj.getElementsByClassName(
            'organization__tag organization__tag--technology'
        )
        e = []
        for (i = 0; i < c.length; i++) {
            e.push(c[i].innerText)
        }
        orgTech[b.innerText] = e
    },
    true
)

for (j = 0; j < l.length; j++) {
    request.open('GET', l[j], false)
    request.send()
}

var data

data = JSON.stringify(orgTech)
console.log(data)
