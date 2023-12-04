## Deployment
The project is deployed at https://github.gatech.edu/pages/adunn39/cs6440-final-project/

## User Instructions

### Login Page
This is the default first page of the app. Refreshing on pages other than the "Create New Account" page will return the user to this page.

Every user will start with 4 default accounts already in the app. These are:
- username: provider1 | password: password1
- username: provider2 | password: password2
- username: provider3 | password: password3
- username: provider4 | password: password4

Each default account has around 25% of the default patient data in the app.

The existing patient data was taken from synthetic patient records provided by Synthea.

Users can access the "Provider Homepage" by pressing the "Login" button on this page after entering a valid username and password into the "Username" and "Password" text boxes.

Users can access the "Create New Account" page by pressing the "Create New Account" button on this page.

### Create New Account Page
Users can create new accounts on this page.

To create a new account, a username and password must be typed into the "Username" and "Password" text boxes.

Then, the "Create Account" button can be pressed to add a new account. This will send the user back to the "Login" page.

Pressing the "Cancel" button will send the user back to the "Login" page without anything changing.

When a new account is added, the account will default to having no patient data. However, providers can enter new patient data further into the app.

### Provider Homepage Page
Users can find the list of patients associated with the logged in provider account here.

Clicking the "Logout" button will send the user back to the "Login" page and the user will have to login with an account again to access the "Provider Homepage".

Clicking a patient on the patient list will send the user to the patient's information page.

Click the "Add New Patient" button will send the user to the "Add New Patient" page.

### Add New Patient Page
Users can add new patient data here. New patients added will show up on the account's homepage.

Clicking the "Homepage" button will send the user back to the "Provider Homepage" page.

Clicking the "Logout" button will send the user back to the "Login" page and the user will have to login with an account again to access the "Provider Homepage".

The new patient form is split into 3 parts:
- Demographics
- Location
- Additional

All 3 parts need to be filled out. Then the user will press the "Finish" button. Pressing the "Finish" button will add the patient data to the account and switch the user to the "Provider Homepage" page.

Once all the required fields of a part are filled out, the user can choose to press the "Next" or "Back" button to switch between the different parts.

Some fields will also required a numerical input to be given.

### Patient Information Page
Users can find detailed information on an individual patient on this page in the form of a table.

Clicking the "Homepage" button will send the user back to the "Provider Homepage" page.

Clicking the "Logout" button will send the user back to the "Login" page and the user will have to login with an account again to access the "Provider Homepage".

## Local Deployment Instructions

Run `npm run dev` after cloning the repository and properly setting up npm to start the app locally running on localhost.

I used `npm run deploy` to deploy the app to github pages. That command also builds the app which can be done separately with `npm run build`

## References
- https://vitejs.dev/
- https://synthetichealth.github.io/synthea/ | https://synthea.mitre.org/downloads
- https://www.youtube.com/watch?v=uDCBSnWkuH0 | Repo associated with video: https://github.com/WebDevSimplified/react-multistep-form
- https://www.youtube.com/watch?v=uEEj2c3_ydg | Repo associated with video: https://github.com/ErickKS/vite-react-router
- https://www.youtube.com/watch?v=EaxC_kOG03E | Repo associated with video: https://github.com/TomDoesTech/React-Sortable-Table