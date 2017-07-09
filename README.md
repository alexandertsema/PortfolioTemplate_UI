# PortfolioTemplate_UI

## Overview

This projects implements a web client of my personal website with portfolio

live demo: http://new.alexandertsema.com

### Architecture

TBD

### Motivation

TBD

## Tech stack

* Angular 2

### Tools

* Visual Studio Code
* Angular CLI

### Notes

IIS URL rewrite:

<VirtualHost *:80>
    ServerName my-app

    DocumentRoot /path/to/app

    <Directory /path/to/app>
        RewriteEngine on

        # Don't rewrite files or directories
        RewriteCond %{REQUEST_FILENAME} -f [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^ - [L]

        # Rewrite everything else to index.html to allow html5 state links
        RewriteRule ^ index.html [L]
    </Directory>
</VirtualHost>