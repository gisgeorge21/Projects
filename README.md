
Clone the application to your local using the command

`git clone https://github.com/gisgeorge21/Projects.git`

Now you will be in the `master` branch of the repo. You can see the above folder structure in your local.

Update the master branch from the remote using the command

`git pull origin master`

Now your branch is updated with latest changes.

Now we need to work on our task/bugs, for that, create new branch from the `master` using the command

`git checkout -b <your_branch_name>`

PS: Keep the branch name always unique, ie if you create a branch name with `animation-issue`, next time you create a branch, dont use the same name as `animation-issue` , it will cause errors if the branch is already present in the remote

Then, do your code changes, after the change do the following command,

1. stage all the unstaged files or new files using the command

`git add .`

2. commit all your changes 

`git commit -am "<your_commit_message>"`, 

3. Update your local branch with the command

`git pull origin master`

by upodating the branch, if someone makes any changes the same file that you worked, it will see a s conflicts. So you can see the conflicts in your file, resolve the conflics, then run the app and make sure everything is working fine, 
 do the process form step 2.
 
 ie, `git commit -am "resolved conflicst"`
 
 4. Push your changes to your branch to remnote using
 
 `git push origin <your_branch_name>`
 
 Then open the broweser of git, your can see a new bra ch is created in the repo with your changes
 
 Create pull request to master, there will be `create pull request ` button in the git. 
 
 create it, verify al the changes, you an see all the difference from =your local branch to the masster. 
 
 If everything seems ok to you, then click `merge` button. now all your changes is upated in `master` branch.
 So if you checkout to master and pull it, you can see master with all your changes .
 
 Thats how its work,
 
 
 So the main goal ist to make everyone to work as inependent with their own branch, and merge the chages to master , So for viewing the lastet update on our app, we need to view only the master. We can make build from the master and deploy
 
 Adding a reference for git command https://dzone.com/articles/top-20-git-commands-with-examples
 
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
