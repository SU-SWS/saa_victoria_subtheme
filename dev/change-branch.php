<?php

/**
 * @file
 * Change the VCS branch on an external theme in ACSF.
 */

// Initialize.
$config = (object) [];

// Get common settings/vars.
require "common.inc";

// The action/endpoint from the API.
$endpoint = 'external-theme';

// POST variables.
$post = (object)[
  'vcs_url' => $config->config->vcsUrl,
  'vcs_path' => $config->config->vcsTarget,
];

// CURL headers.
$headers = [
  'Content-Type: application/json',
];

// Authentication.
$user_pass = addslashes($config->config->username) . ":" . addslashes($config->config->apiKey);

// Initialize CURL.
$ch = curl_init();
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_USERPWD, $user_pass);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post));

// Loop through each of the sites configured in config.json and execute the
// action on them through the API.
foreach ($config->sites as $site_name => $site_id) {
  $url = $config->config->api . '/sites/' . $site_id . '/' . $endpoint;
  curl_setopt($ch, CURLOPT_URL, $url);
  $server_output = curl_exec($ch);
  echo "Running on site: " . $site_name;
  var_dump($server_output);
}

// Close it.
curl_close($ch);
