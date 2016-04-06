(function () {
  'use strict';

  /* global require */
  var $g = require('gulp');
  var $p = require('gulp-load-plugins')();
  var resolved = require('./resolved');

  $g.task('resolved', function () {
    resolved('./index.yaml', './swagger.json');
  });

  $g.task('lint', function() {
    return $g.src('./*.js')
      .pipe($p.jshint())
      .pipe($p.jshint.reporter());
  });

  $g.task('watch', function () {
    // $g.watch(['./**/*.yaml'], {cwd: '.'}, ['resolved']);
    $p.watch(['./**/*.yaml'], function () {
      $g.start('resolved');
    });
  });

  $g.task('default', ['resolved']);
})();