var riot = require('riot');
var RiotControl = require('riotcontrol');

// require() all files in the tag folder
// NOTE: need to do this, or else mounting the app tag will not mount the child tags
var context = require.context('./tags');
context.keys().forEach(key => {
  context(key);
});

// at least one store must be added to RiotControl, or else RiotControl won't wire itself up to process events
var dummyStore = require('./stores/dummy-store');
RiotControl.addStore(dummyStore);

// mount the app tag, which is the root tag for the app
// NOTE: this will mount all child tags as well
riot.mount('app');
