/// navigating between the tabs /// 

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}
// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}
// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}
// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

//*//
//*//
//*//
//*//
//*//
//*//


/// pop up  register /// 

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const matricule = document.querySelector('#matricule');
const msg = document.querySelector('.msg');
var modal = document.getElementById("myModal"); // Get the modal
var btn = document.getElementById("openModal"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  myForm.addEventListener('submit',onSubmit);

// submit & error msg
function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || matricule.value ===''){
        msg.classList.add('error');
        msg.innerHTML='veuillez remplir tous les champs !'
    }
    else{
        modal.style.display="none";
    }
}