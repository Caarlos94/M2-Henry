var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  // TU CÓDIGO AQUÍ
  for(let i=0; i<startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...elements]
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#") return "id"
  if(selector[0] === ".") return "class"
  for(let word of selector){
    if(word === ".") return "tag.class"
  }
  return "tag" 
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  var select = selector.slice(1, selector.length)
  
  if (selectorType === "id") { 
    var matchFunction = function (el) {
      if(el.id === select) {
        return true
      } else return false
    };
  } else if (selectorType === "class") {
    var matchFunction = function (el) {
      let classes = el.classList;
      for(let clas of classes){
        if (clas === select) {
          return true;
        }
      } return false
    };
  } else if (selectorType === "tag.class") {
    var matchFunction = function (el) {
      var [tagBuscado, classBuscado] = selector.split(".");
      return matchFunctionMaker(tagBuscado)(el) && matchFunctionMaker(`.${classBuscado}`)(el)
    };
  } else if (selectorType === "tag") {
    var matchFunction = function (el) {
      if(el.tagName.toLowerCase() === selector) {
        return true
      } else return false
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
