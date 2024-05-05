
const { spawn } = require('child_process');
const path = require('path');

function start() {
    let args = [path.join(__dirname, 'plugins.js'), ...process.argv.slice(2)];
    console.log([process.argv[0], ...args].join('\n'));
    let childProcess = spawn(process.argv[0], args, {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    });

    childProcess.on('message', data => {
        if (data === 'reset') {
            console.log('Reviving Bot...');
            childProcess.kill();
            start();
        }
    });

    childProcess.on('exit', code => {
        console.error('Child process exited with code:', code);
        if (code === '.' || code === 1 || code === 0) {
            start();
        }
    });
}

function startWebInterface() {
    const url = 'file://' + path.join(__dirname, 'proto/index.html'); // Adjust the path accordingly
    const webProcess = spawn('xdg-open', [url]); // Change 'xdg-open' to the appropriate command for your system
    webProcess.on('error', err => {
        console.error('Error opening web interface:', err);
    });
}

// Starting both child process and web interface
start();
startWebInterface();

