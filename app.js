//  Init Github
const github = new Github;
// Init UI
const ui = new UI;


// Seach input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
      // Make HTTP call
      github.getUser(userText)
      .then(data => {
          if (data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger');
                
          } else {
                // Show Profile
                ui.showProfile(data.profile);
                // Show Profile
                ui.showRepos(data.repos);
          }
      })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});