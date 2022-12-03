## TrackU App

**TrackU** is a personal project management application that allows users to signIn/signUp and add projects. Users can also provide updates to those projects until completion. The app has a main dashboard which displays a list of projects, each project can be accessed to view the project's title, description, status and progress. The progress is shown through a circular progress bar that changes color as the progress increases. Colors could be:

- **Red**: Progress is 0
- **Orange**: Progress is between 1 and 40.
- **Blue**: Progress is between 41 and 80.
- **Green**: Progress is between 81 and 100.

The app is fully responsive and was created using **Reactjs**, **CSS** and the **[TrackU API](https://tracku-api.cyclic.app/api-docs/)** as the backend. Feel free to check the **[Live-Demo](https://tracku-app.netlify.app/)**.

### Sections

#### Homepage

Greets the users and provides the button to navigate to the registration page.

#### Registration

A form that allows users to sign in(**Default**) or to sign up by clicking the "Don't have an account, Sign up" button.
If the user signs up it will be redirected to the sign in form, so the user can sign in to the main dashboard.

#### Dashboard

The dashboard contains a sidebar with three options: **Projects**, **Settings** and a button to **log out**. The projects option is selected by default and displays all the available projects of the user if any, otherwise a "Please, add a project" message is displayed.
The main dashboard can display a maximum of 5 projects, in case the user has more than 5 projects registered, a pagination component will show up at the bottom of the dashboard to help the user navigate through all projects.

If the user selects a project from the projects list, it will be redirected to the project's page. This page will show all the project's information alongside the **updates sub-section**. In this sub-section, users can add updates which are like comments with a title, a description and an auto-generated date.

Both projects and updates can be edited or deleted by clicking the options menu (**Three dots**) and selecting the desired option, this will redirect the user to the edit form(**Edit option**) or will trigger a modal window to confirm deletion(**Delete option**)

When selecting the settings option in the sidebar, an accordion will show three options: **Update Account**, **Change Password** and **Delete Account**. Each one will display a form to proceed with said action.
