<?php
/**
 * @file
 */

// Variables and paths.
$config_file = "config.json";
$config_dir = dirname(__FILE__);
$config_path = $config_dir . "/" . $config_file;

// Need config to proceed.
if (!is_file($config_path)) {
  throw new Exception("Could not find config file. Please create $config_file");
}

// Get the config file contents.
$config_contents = file_get_contents($config_path);
$config = json_decode($config_contents);

if (is_null($config)) {
  throw new Exception(json_last_error_msg());
}
