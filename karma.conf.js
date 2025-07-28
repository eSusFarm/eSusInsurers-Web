// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine','@angular-devkit/build-angular'],
    plugins: [
      require('karma-coveralls'),
      require('karma-coverage'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'coveralls'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    restartOnFileChange: true,
    restartOnFileChange: true,
    customLaunchers: {
      ChromeHeadlessPuppeteer: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
    coverageReporter: {
      type: 'lcovonly', // lcov or lcovonly are required for generating lcov.info files
      dir: 'coverage/',
      subdir: '.',
    },
    karmaCoveralls: {
      // ... karmaCoveralls options (e.g., serviceName, repoToken, etc.)
      serviceName: 'github', // e.g., 'github', 'gitlab', 'bitbucket'
      repoToken: '8akK865BNlAkiccML56tQs363pYFuXt3a', // Get this from Coveralls.io
    },
  });
};