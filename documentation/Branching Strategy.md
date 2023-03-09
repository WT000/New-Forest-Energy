## Git Branches

The structure for this project is required to be split into three sprints which involve separate major stages of development. Due to multiple objectives needing to be completed in only three sprints, the [**GitHub Flow Branching Strategy**](https://docs.github.com/en/get-started/quickstart/github-flow) using Agiles principles deemed the most suitable for this project as a large number of tasks need to be completed within three week sprints.

Only one branch for production code is needed as this project is being developed for the web which in following the git strategy guidelines it will have continuous integration and continuous deployment.

As such, the following rules should be adhered to:

-   The main branch must only contain deployable code.
-   Newly created branches should be created for each issue and adhere to the naming conventions.
-   Commits to local branches should be made regularly as possible and kept up to date.
-   Avoid using “And” in your commit messages as commits should ideally be made per change.
-   Open a pull request once you are sure the work in your branch is completed.
-   Your branch should then be merged to the main branch once the branch has passed the automated Github Actions tests and checks, and also reviewed by other project collaborators and approved.
-   Merged branches must be deleted.
-   Branches that have had no activity for two weeks must be investigated into whether they should be deleted.

### Branch Naming Conventions

When creating a new branch, name it according to the convention below:

`<memberName>-<typeName>/#<issueNumber>-<summary>`

Identify what type of issue your branch is covering:

-   `feature`: For creating a new feature.
-   `fix`: Fixing a bug or a feature that was not working as intended.
-   `enhance`: Change to the style of the webpage only.
-   `test`: Tests that were not included in the creation of a feature.
-   `docs`: Creation or changes to documentation.

### Branch Protections

To prevent the complications of unwanted, unfinished or unreviewed code being pushed to the main branch and staging branch we have involved a branch protection for this git repository so that direct commits without pull requests to these two branches will result in an error.

## Pull Requests

In abiding to the Agiles principles, each new feature will be worked on separately to the main branch by being in its own isolated branch.

Using this method we can create pull requests when a branch contains completed work which can then be merged into the main branch. This strategy prevents an abundant occurrence of merge conflicts, ensuring the main branch is continuously able to be deployed whilst keeping the project organised.

Before a pull request is made, make sure you conform to these steps:

-   Ensure unnecessary code is removed such as debugging statements and code that has been commented out. Commented out instructions are allowed.
-   Test the front end features (if any) to check if your code has caused unwanted changes in the browser.
-   If changes are made to the UI and front end make sure the appearance remains professional, unbroken and visually pleasing.
-   Make sure to write timestamps If any changes are made to the database structure.
-   Ensure features on the main and isolated branches are included in the tests run by Github Actions.
-   Be as descriptive as possible when writing the title for a pull request.
-   To make sure the issue closes after the pull request is completed be sure to include `Closes #<issueNumber>` at the end of the description.

### Pull Request Checklist

-   [ ] I have adhered to the git strategy, naming conventions and coding guidelines.
-   [ ] I have reviewed my code and checked for abnormalities.
-   [ ] I have included clear and concise comments where necessary.
-   [ ] I have reviewed how this code is displayed in Storybook and have been tested in Cypress.
-   [ ] I have confirmed that all tests pass.
-   [ ] I have updated the documentation to correspond to the changes made.
-   [ ] I have made my pull request description as clear and concise as possible.
-   [ ] I have inputted a closing tag for my corresponding issue number within the pull request description.

### Branch Protection

Enabling branch protection allows us to prevent contributors from pushing un-tested and unwanted code to the Main and Staging branch. Developers will safely commit to these two branches through merge requests to allow verification from other contributors before allowing the branches to merge.

## Merging To Main

Before merging a feature in your branch to the main or staging branch, make sure that:

-   The tests run by GitHub Actions have passed.
-   Your pull request has been reviewed by at least one other contributor.
-   Any suggestions that have been in the pull request reviews have been considered and implemented if appropriate.

## Removing Redundant Branches

When a feature branch has been merged to the main branch, it will be deleted to keep the project less cluttered and allow the names of these branches to be reused if they need reworking. Removing these branches allow for only active branches to be present, easier to find and able to be worked on.

Un-merged branches that have had no activity for two weeks will be investigated to find out if they are still necessary to keep such as if the branch is being/ has been developed but is more suitable to merge at a later date.

## Staging Branch

The staging branch allows for completed features to be “tested” in the staging branch before merging to the main branch. This allows new changes to be validated in a mock version of the main repository so that it can stay in a deployable state.
