(function () {

  const studyList = [
    "deterministic",
    "breakpoint",
    "step over",
    "step into",
    "step out",
    "debugger",
    "Node vs. Chrome debugging",
    "skipFiles in launch.json",
    "when to use console.log"
  ];

  window.onload = function() {
    main();
  };

  function main() {
    const list = renderList(studyList);
    addToPage(list);
  }

  function renderList(items) {
    const $ul = document.createElement("ul");
    
    for (let item of items) {
      const $li = document.createElement("li");
      $li.innerText = item;
      $ul.append($li);
    }

    return $ul;
  }

  function addToPage(content) {
    const $el = document.getElementById("app");
    $el.append(content);
  }
}());