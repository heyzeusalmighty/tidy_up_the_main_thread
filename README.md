## Put Redux into a Worker

If its not UI work, keep it off the main thread.  This project is POC to shove all of Redux into a web worker.  Built from CRA and then ejected so theres still some cruft from that.

The main app uses [Comlink](https://github.com/GoogleChromeLabs/comlink) to communicate with the spun up web worker.

Steps:
1. `npm start`