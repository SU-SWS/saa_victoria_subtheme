<?php
/**
 * @file
 */

require "common.inc";
$endpoint = 'external-theme';
$post = [
  'vcs_url': $config->config->vcsUrl,
  'vcs_path': $config->config->vcsTarget,
];
$headers = array(
  'Content-Type: application/json',
);
$user_pass = addslashes($config->config->username) . ":" . addslashes($config->config->apiKey);

$ch = curl_init();
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_USERPWD, $user_pass);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));

foreach ($config->sites as $site_name => $site_id) {
  $url = $config->config->api . '/sites/' . $site_id . '/' . $endpoint;
  curl_setopt($ch, CURLOPT_URL, $url);
  $server_output = curl_exec($ch);
  echo "Running on site: " . $site_name;
  var_dump($server_output);
}

# Close it.
curl_close ($ch);
