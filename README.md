# spec-untp

UN Transparency Protocol (UNTP) documentation website.

All contributions to this project are done as GitHub [Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests). This means that you make your changes in a separate branch and then request for your changes to be "merged" via an approval workflow.

## Markdown

All content on the UNTP website is writting [using the Markdown notation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), a very simple text based editor. If unfamilair with markdown, we suggest you experiemtn with it on a [markdown playground](https://kip2.github.io/MarkdownToHTML/) so that you understand how to create headings, bulleted lists, tables, and so on.

## Simple Changes

If you only need to make some very simple changes to an existing page (eg fix some typos or modify some content) then the simplest solutoin is just to use the online editor. On the bottom left of any [UNTP website](https://uncefact.github.io/spec-untp/docs/about/) page there is an `Edit this page` link.

1. Click on the `Edit this page` link - you'll be presented with an editable version of the page in Markdown. Note that you can toggle between `Edit` and `Preview` tabs so that you can see how your Markdown will look. Complete all your changes to the page.
2. Click on the `Commit changes...` green button on the top right of the page. You'll get a pop-up with a commit message. Type a description of your changes (eg "fixed some typos") and ensure that the `Create a new branch for this commit and start a pull request` option is selected. Then click on the `Signoff and propose changes` green button. And on the next page you can edit your commit message if you wish - then click the `Create pull request` green button.
3. That's it, you're done. The pull request will be verified (no broken links etc) and then queued for approval and release.

## More Complex Changes.

If you are going to be a regular contributor and/or you want to propose more significant multi-page changes in one request, then you should set yourself up with a local copy of the website where you can make as many changes as you like and test them before pushing a pull request to the main repository.

1. If you dont already have a GutHub Desktop client installed then get one from the [GitHub download site](https://desktop.github.com/download/). Sign into GitHub through your desktop (`GitHub Desktop` -> `Settings` -> `Accounts`). This will ensure that you can see all the GitHub repositories that you also have access to online.
2. Clone the UNTP repository using the `File`->`Clone Repository...` button top left of your GitHub Desktop client. You'll need to choose a local folder to put your UNTP repository clone. We suggest you create a `GitHub` folder and keep all cloned repositories in it. 
> *Checkout GitHub Desktop [Cloning a repository](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop#cloning-a-repository) help page for step-by-step instructions.*
3. Once you've cloned the UNTP repository you'll see the full folder structure of the UNTP site under your `GitHub` local folder. Now you'll need to create your own branch in which to make changes. This is important - you should **not** make changes in the main branch as you will not be allowed to push them to the site. To make a local branch using your GitHub Desktop, make sure your current repository is `spec-untp` the then click on `current branch` and select `new branch`. Give it any name like "untp-spec-changes" and create the branch as a copy of `main`. 
> *Checkout GitHub Desktop [Creating a branch](https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop#creating-a-branch) help page for step-by-step instructions.*
4. Now you have two branches - `main` and your local branch. When you select any branch, GitHub will ensure that the files you synchronised to your local folder are for that branch. So you always work on the same folder structure but the files you see will relfect the state of whichever branch you have selected in your Desktop client.
5. You'll find the files that you need to change by navigating `spec-untp`->`website`->`docs`. There you'll see a list of folders that correspond to the UNTP site structure (about, specification, etc). Inside each folder is an `index.md` file - that's the content that appears at the heading level (eg [Business Case](https://uncefact.github.io/spec-untp/docs/business-case/)). Inside that folder you'll see the files that represent the pages under that heading. Any files with a `.md` suffix are the Markdown files that hold the text fot that page. Any other files such as `.png` files contain images that are referenced from that page.
6. Make the changes you need to make to the files using any editor you like, ([Sublime Text](https://www.sublimetext.com/download)) is not a bad option. At this point we **strongly recommend** that you have a local copy of the website running on your laptop - follow the instructions for [setting up the local website](running-a-local-untp-website) below. Whenever you save a change to a `.md` file you should immediately see that change reflected on your local UNTP website copy. This is a good way to test that your changes look right and there aren't broken links.
7. If you have a large amount of change to many un-related pages then we suggest that you create a separate branch for each. But lets keep it simple for now and assume you've changed a page or two. Then `commit` those changes in your local GitHub Desktop and provide a commit message just like you did for the online [simple changes](#simple-changes) edit. That will save create a versioned change on your local GitHub.
> *Checkout GitHub Desktop [Write a commit message and push your changes](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop#write-a-commit-message-and-push-your-changes) help page for step-by-step instructions.*
8. Now create a `Pull request` on your desktop. That will trigger the creation of a pull request on the "origin" GitHub repository where UNTP is maintained. You'll be redirected to the UNTP GitHub site online and will see the same pull request screen that you saw with the [simple process](#simple-changes) described above.
> *Checkout GitHub Desktop [Creating a pull request](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop#creating-a-pull-request) help page for step-by-step instructions.*
9. You're done - your changes will be verified and queued for approval.

## Running a local UNTP website

The UNTP website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 

> *Note: You can copy code snipets below and paste them to your terminal, just remove `$` sign, that indicates that those are commands to execute in a terminal*

To run it locally:

1. if you don't already have node.js and NPM isnatlled then install them using the [Node Installer](https://nodejs.org/en/download/prebuilt-installer) - select the "prebuilt installer" and chose the right optoins for your mac or pc.
2. Open your command line / terminal window. On Mac you'll find it in `Applications`->`Utilities`->`Terminal`.
3. Find the GitHub folder that has the cloned UNTP repository you created as described in the [complex changes](#more-complex-changes) section. Hint `ls` command will list the files in the current folder and `cd someFolder` will move you to that folder. `cd ..` will move you back up a folder level. Use `ls` and `cd` till you are in the `website` folder of the UNTP repository.
```
$ cd ~/GitHub/spec-untp/website/
```
4. If you don't already have Yarn installed then type `npm install --global yarn`. Yarn is a dependency manager that will keep all your local bits and pieces of website software up to date.
```
$ npm install --global yarn
```
5. Type `yarn install --frozen-lockfile` to install the dependencies needed for the website (which includes docusaurus).
```
$ yarn install --frozen-lockfile
```
6. Type `yarn start`. This will launch the website and open it in a browser windo on your local machine at `http://localhost:3000/spec-untp/`. Whenever you make changes to UNTP Markdown files, you'll see the change on your local website.
```
$ yarn start
```
7. To stop the website, enter "Ctrl+C" in the terminal window. You can start it again anytime by navigating to the `website` folder as described above and typing `yarn start`. You don't need to re-install node or yarn or docusaurus.
