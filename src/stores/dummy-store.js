var riot = require('riot');

function DummyStore() {
  riot.observable(this);
}

// stores are singletons
module.exports = new DummyStore();
