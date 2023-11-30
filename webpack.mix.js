const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .vue(); // This line is important for handling .vue files
