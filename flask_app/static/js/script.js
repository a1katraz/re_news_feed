document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded and ready to use!');
    addInputBox();
    //const slider = document.getElementById('mySlider');
    //    slider.addEventListener('click', toggleSlide);

    //const toggleSlider = document.getElementById('toggleSlider');
    //const output = document.getElementById('toggleStatus');

    // Update the output value based on the toggle slider state
    //toggleSlider.addEventListener('change', function() {
    //    output.innerHTML = toggleSlider.checked ? 'YES' : 'NO';
    //});
    
    function addInputBox(){
        const tableBody = document.querySelector('#main-table tbody');
        const rows = tableBody.getElementsByTagName('tr');
       
        for(let i=0; i<rows.length; i++){
            const cells = rows[i].getElementsByTagName('td');
            usefulcell = cells[6]
            
            inputBox = document.createElement('input');
            inputBox.id = `check-box-${i+1}`;
            inputBox.type = `checkbox`;
            usefulcell.appendChild(inputBox);

            spanLabel = document.createElement('span');
            spanLabel.id = `check-box-status-${i+1}`;
            spanLabel.textContent = `NO`;
            usefulcell.appendChild(spanLabel);
            
        }     
    }
    
    document.getElementById('main-table').addEventListener('change', function(event) {
          // Check if a button was clicked
          if (event.target.tagName === 'INPUT') {
              var checkboxId = event.target.getAttribute('id');
              toggleCheckBox(checkboxId);
          }
      });

    function toggleCheckBox(checkboxId) {
          // Get the box element by ID
            var checkbox = document.getElementById(checkboxId);
            var labelname = checkboxId.replace('check-box', 'check-box-status')
            var spanlabel = document.getElementById(labelname);
            
            spanlabel.innerHTML = checkbox.checked ? 'YES' : 'NO';
          // Change the styles to highlight the selected box
          //box.style.backgroundColor = 'yellow';
          //box.style.color = 'red';
          //alert(`Highlighted ${boxId}`);
      }
});