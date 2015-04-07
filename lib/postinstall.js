if (process.platform === 'darwin' || process.platform === 'linux') {

  require('child_process')
    .exec('mkdir -p ~/.AnyBar && cp ./lib/icons/webpack-* ~/.AnyBar/',
      function (err, stdout, stderr) {

        err ?
          console.log('\x1b[31m%s\x1b[0m', 'Something went wrong, try to install again.') :
          console.log('\x1b[32m%s\x1b[0m', 'Initialized successfully!');
      });
}
else {

  console.log('\x1b[31m%s\x1b[0m', 'anybar-webpack plugin is for Mac OS and Linux only.')
}
