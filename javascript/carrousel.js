(function(){
    
    console.log('vive le carrousel')
    let boite__carrousel = document.querySelector('.boite__carrousel')
    let boite__carrousel__ferme = document.querySelector('.boite__carrousel__ferme')
    let boite__carrousel__navigation = document.querySelector('.boite__carrousel__navigation')
    let boite__carrousel__img = document.querySelector('.boite__carrousel__img')
    let galerie__img = document.querySelectorAll('.galerie img')
    console.log( galerie__img.length)
    /* Création d'un élément img */

    /* on parcour chacune des img de la galerie */
    let index = 0
    for (const img of galerie__img) {

        /* insertion des radio bouton dans boite__carrousel__navigation */
        let bouton = document.createElement('input')
        bouton.setAttribute('type','radio')
        bouton.setAttribute('checked','')
        bouton.setAttribute('name','bouton')
        bouton.setAttribute('class','bouton')
        bouton.dataset.index = index
        boite__carrousel__navigation.append(bouton)

        /* insertion des elmImg de la galerie__img dans boite__carrousel__img */
        let elmImg  = document.createElement('img')

        //console.log(img.src)
        elmImg.img.setAttribute('src', img.src)
        /* Dans l'article de la boîte modale on ajoute la balise img */
        boite__carrousel__img.append(elmImg)


        bouton.addEventListener('mousedown', function(){
           // elmImg.setAttribute('src', galerie__img[this.dataset.index].getAttribute('src'))
        })

        img.addEventListener('mousedown', function(){
           // console.log(this.tagName)
          //  boite__carrousel.classList.add('boite__carrousel__ouvrir')
           // console.log(this.getAttribute('src'))
           // elmImg.setAttribute('src', this.getAttribute('src'))
        })
       index++ 
    }

    boite__carrousel__ferme.addEventListener('mousedown', function(){
        boite__carrousel.classList.remove('boite__carrousel__ouvrir')
    })



})()