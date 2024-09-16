module.exports = {
    // Specify the location of the test file
    testMatch: ['**/specs/*.spec.js'],
    // test report generator
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './report', // report directory
                filename: 'report.html', // report file name
                pageTitle: 'SuperTest and Jest API Test Report', // report title
                overwrite: true, // enable report file overwrite
                expand: true, // enable report file expansion
                openReport: true,
            },
        ],
    ]
};
