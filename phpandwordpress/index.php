<?php
  $title = "The title of my page";
  $templates = array(
    array('id' => 1, 'name' => 'Dark', 'value' => 'css/dark.css'),
    array('id' => 2, 'name' => 'Light', 'value' => 'css/light.css')
  );
  $default_template = 1;

  # Set the template ID to the default template ID
  # If a template ID has ben sent in the request, use
  # that ID instead
  $template = $default_template;
  if (isset($_GET['template'])) {
    $template = $_GET['template'];
  };
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?php echo $title; ?></title>
    <meta name="author" content="">
    <meta name="description" content="">

    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1><?php echo $title; ?></h1>

    <?php for ($i=0; $i < count($templates); $i++) { ?>
      <?php $template = $templates[$i]; ?>

      <button onclick="setTemplate(template['id'])">
        <?php echo $template['name']; ?>
      
        <?php if ($template['id'] == $default_template) { ?>  
          <span>(Default)</span>
        <?php } ?>
      </button>
    <?php } ?>
  </body>
</html>
