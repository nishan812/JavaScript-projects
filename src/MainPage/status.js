
// For normal Project List
normalProjectsListSorting.forEach((itemBody) => {
    itemBody.forEach((item) => {
      const anchor = item.firstElementChild;
      if (anchor.getAttribute("href") === "#") {
        anchor.parentElement.style.backgroundColor = "#A94438";
      }else{
          anchor.parentElement.style.backgroundColor = "#74E291";
      }
    });
  });
  
  // For api project list
  apiProjectsListSorting.forEach((itemBody) => {
    itemBody.forEach((item) => {
      const anchor = item.firstElementChild;
      if (anchor.getAttribute("href") === "#") {
          anchor.parentElement.style.backgroundColor = "#A94438";
        }else{
            anchor.parentElement.style.backgroundColor = "#74E291";
        }
    });
  });
  
  // For intermediate project list
  intermediateProjectsListSorting.forEach((itemBody) => {
    itemBody.forEach((item) => {
      const anchor = item.firstElementChild;
      if (anchor.getAttribute("href") === "#") {
          anchor.parentElement.style.backgroundColor = "#A94438";
        }else{
            anchor.parentElement.style.backgroundColor = "#74E291";
        }
    });
  });
  
  
  // const statusBody = document.querySelector(".statusInfoBox");
  // setTimeout(() => {
  //   statusBody.style.display="none";
  // }, 6000);