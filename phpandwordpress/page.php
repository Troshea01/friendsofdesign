<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <?php get_template_part('components/layout/head'); ?>
  </head>
  <body <?php body_class(); ?>>

    <header>
      <?php get_header(); ?>
    </header>

    <main id="main" class="site-main" role="main">
      <?php
        if ( have_posts() ) :
          while ( have_posts() ) : the_post();
            get_template_part('components/content/content', 'page');
          endwhile;
        endif;
      ?>
    </main>

    <footer>
      <?php get_footer(); ?>
    </footer>
  </body>
</html>