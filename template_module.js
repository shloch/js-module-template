//public methods can access private methods

const Module = (function () {
  const myModule = {};
  const _privateMethod = function () {

  };
  myModule.publicMethod = function () {

  };
  myModule.anotherPublicMethod = function () {

  };
  return myModule; // returns the Object with public methods
})();

// usage
Module.publicMethod();
