(function(){
    
    console.log('vive le carrousel')
    let galerie__img = document.querySelectorAll('.galerie img')
    console.log( galerie__img.length)
    let boite__carrousel = document.querySelector('.boite__carrousel')
    let boite__carrousel__ferme = document.querySelector('.boite__carrousel__ferme')
    let boite__carrousel__navigation = document.querySelector('.boite__carrousel__navigation')
    let boite__carrousel__img = document.querySelector('.boite__carrousel__img')
    
    /* Création d'un élément img */
     let elmImg  = document.createElement('img')
    /* Dans l'article de la boîte modale on ajoute la balise img */
    boite__carrousel.append(elmImg)
    /* on parcour chacune des img de la galerie */
    let index = 0
    for (const img of galerie__img) {
        /* Insertion de chacune des images de la galerie  dans la boite__carrousel */
        let elmImg = document.createElement('img')
        elmImg.setAttribute('src', img.getAttribute('src'))
        console.log("elmImg src = " + elmImg.getAttribute('src'))
        boite__carrousel__img.append(elmImg)

        /* Creation des boutons radio */
        let bouton = document.createElement('input')
        bouton.setAttribute('type','radio')
        bouton.setAttribute('class','bouton')
        bouton.setAttribute('name','bouton')
        bouton.setAttribute('checked','')
        bouton.dataset.index = index++
        boite__carrousel__navigation.append(bouton)

        /* On écoute mousedown sur chacun des boutons */
        bouton.addEventListener('change', function(e){
            e.preventDefault
            console.log(e)
            console.log(this.getAttribute('checked'))
            boite__carrousel__img.children[this.dataset.index].classList.remove('img--ouvrir')
            boite__carrousel__img.children[this.dataset.index].classList.add('img--ouvrir')
           
        })


        /* Ouvrir la boite__carrousel */
        img.addEventListener('mousedown', function(){
            console.log(this.tagName)
            boite__carrousel.classList.add('boite__carrousel__ouvrir')
            console.log(this.getAttribute('src'))
            elmImg.setAttribute('src', this.getAttribute('src'))
        })
    }

    boite__carrousel__ferme.addEventListener('mousedown', function(){
        boite__carrousel.classList.remove('boite__carrousel__ouvrir')
    })



})()