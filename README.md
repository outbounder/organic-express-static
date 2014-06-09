# organic-express-static

Organelle for mounting hash of pairs (mount point / relative local path) to be served as static resources.

## dna

    {
      "source": "plasma/organic-express-static",
      "reactOn": "ExpressServer",
      "mount": {
        "/url": "relative/path/to/cwd",
        "/url2": "relative/path/to/cwd2",
      }
    }

### `reactOn` property

Should be either `ExpressServer` chemical with [expected structure](https://github.com/outbounder/organic-express-server#emitready-chemical) or array of chemicals where the first one is mapped as `ExpressServer` chemical.

### `mount` property

A hash of `"mountPoint": "local/path"` pairs which will be passed as configuration to `st` middleware as

    {
      "path": localPath+"/",
      "url": mountPoint+"/",
      "passthrough": true,
      "index": false,
      "cache": false
    }