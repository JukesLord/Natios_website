// Keep track of current page
let currentPage = 1;

// Show next page
function nextPage() {
  const currentPageElement = document.getElementById(`page${currentPage}`);
  currentPageElement.classList.remove("active");
  currentPageElement.classList.add("inactive");
  currentPage++;
  const nextPageElement = document.getElementById(`page${currentPage}`);
  nextPageElement.classList.remove("inactive");
  nextPageElement.classList.add("active");
}

// Show summary
function showSummary() {
  // Get the selected options for each question
  const question1 = document.querySelector('input[name="question1"]:checked').value;
  const question2 = document.querySelector('input[name="question2"]:checked').value;
  const question3 = document.querySelector('input[name="question3"]:checked').value;
  
// Add the selected options to the summary
  const summaryContent = document.getElementById("summaryContent");
  summaryContent.innerHTML = `Question 1: ${question1}<br>Question 2: ${question2}<br>Question 3: ${question3}`;
  
  // Slide in the summary page
  const currentPageElement = document.getElementById(`page${currentPage}`);
  currentPageElement.classList.remove("active");
  currentPageElement.classList.add("inactive");
  const summaryPage = document.getElementById("summary");
  summaryPage.classList.remove("inactive");
  summaryPage.classList.add("active");
}


let box = document.querySelector('.web-content');
let pos = box.offsetTop;

$(window).bind('mousewheel', function(event) {
  setTimeout(() => {
    
  
  if (event.originalEvent.wheelDelta >= 0) {
      console.log('Scroll up');
          window.scrollTo({
          top: 0,
          behavior: 'smooth'
          });
          window.onscroll=function(){};
  }
  else {
      console.log('Scroll down');
      window.scrollTo({
          top: pos,
          behavior: 'smooth'
          });
          window.onscroll=function(){};
  }
}, 100);
  });

var x=window.scrollX;
var y=window.scrollY;
window.onscroll=function(){window.scrollTo(x, y);};

setTimeout(() => {
  console.log("this is the first message");
}, 5000);