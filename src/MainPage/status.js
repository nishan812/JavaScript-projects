// For normal Project List
normalProjectsListSorting.forEach((itemBody) => {
  itemBody.forEach((item) => {
    const anchor = item.firstElementChild;
    if (anchor.getAttribute("href") === "#") {
      anchor.parentElement.style.textDecoration = "line-through";
    }
  });
});

// For api project list
apiProjectsListSorting.forEach((itemBody) => {
  itemBody.forEach((item) => {
    const anchor = item.firstElementChild;
    if (anchor.getAttribute("href") === "#") {
      anchor.parentElement.style.textDecoration = "line-through";
    }
  });
});

// For intermediate project list
intermediateProjectsListSorting.forEach((itemBody) => {
  itemBody.forEach((item) => {
    const anchor = item.firstElementChild;
    if (anchor.getAttribute("href") === "#") {
      anchor.parentElement.style.textDecoration = "line-through";
    }
  });
});
