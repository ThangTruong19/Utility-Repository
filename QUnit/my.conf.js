// module.exports = function(config) {
//     config.set({
//       basePath: '',
//       autoWatch: true,
//       frameworks: ['qunit'],
//       files: [
//         '*.js',
//         'test/spec/*.js'
//       ],
//       browsers: ['PhantomJS'],
  
//       reporters: ['progress', 'coverage'],
//       preprocessors: { '*.js': ['coverage'] },
  
//       singleRun: true
//     });
//   };
  module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['qunit'],
        files: [
          'app/**/*.js',
          'test/spec/*.js'
        ],
        preprocessors: {
          '**/app/*.js': ['coverage']
       },
        plugins: [
            'karma-qunit',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],
        reporters: ['progress', 'coverage'],
        port: 9878,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autowatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'text-summary' }
            ]
        }
    });
};