<footer class="site__footer">
    <div class="site__footer__colonne">
        <section class="footer__article">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eos fugit perspiciatis ipsam itaque maxime reiciendis laborum laudantium illum porro. Ratione mollitia qui magni hic numquam impedit sit dignissimos atque!
        </section>
        <section class="footer__lien">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, alias nihil modi autem pariatur id eaque molestias, quis omnis rerum necessitatibus quibusdam magnam voluptatum perferendis obcaecati excepturi sint ullam non.
        </section>
        <section class="footer__adresse">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem non at expedita minima optio eligendi, sit natus minus quia eius ipsam praesentium illo quo magni explicabo, delectus alias cumque exercitationem.
        </section>
    </div>
    <div class="site__footer__ligne">
        <section class="footer__description">
            <p>4W4-Conception d'interface et développement Web - TIM - Collège de Maisonneuve</p>
        </section>
        <section class="footer__copyright">
            <p>&copy; Tous droit réservé - TIM - Collège de Maisonneuve</p>
        </section>
        <section class="footer__auteur">
            <p>Auteur : Eddy Martin</p>
        </section>
        <section class="footer__menu">
        <?php    
        $icone = '<svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#f00"><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>';
         wp_nav_menu(array(
                        "menu"=>"simple",
                        "container"=>"nav",
                        "container_class"=>"footer__menu__nav",
                        "menu_class"=>"footer__menu__nav__ul",
                        "link_before"=>$icone)); ?>
                <div class="footer__recherche">
        </section>
        <section class="footer__recherche">
            <?php get_search_form(); ?>
        </section>
    </div>
</footer>

</body>
<?php wp_footer(); ?>
</html>