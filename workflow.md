# Monotype UI Library Git strategy

## Overview

With the potential for more developers working with the UI Library and the potential for developers across the company to fix any bugs there is a need to define a workflow on how to use git and GitHub for the UI Library.

## Branches

### Master

The master is the ‘single source of truth’ you should never commit directly to it, but merge code into from another branch. 

## Branching

Always branch from master.

### Branch naming conventions

#### Creating a new pattern

If you are adding a new pattern, amending how a pattern works then you need to give a short descriptive name prefixed with `feature.`. For example `feature.social-buttons`.

#### Making a fix to existing pattern code

If you are amending a pattern so that it fixes a bug or fixing any of the tooling (`gulpjs`) code then you need to give a short descriptive name prefixed with `hotfix.`. For example `hotfix.gulp-sass`.


## Creating a new branch

To create a new branch in the terminal, first make sure you are on the development branch of the repo.

`$ git checkout master`

Make sure this is up-to-date

`$ git pull`

You now have to create a new branch

`$ git checkout -b your_branch`

note: If you’re working on a new feature or bug and find something else that needs adding that is separate make sure you create a new branch (from Master) for this.

## Pushing ‘up stream’

When you have finished and have committed your work locally you will need to push the branch to github.  

- `$ git push origin <branch-name>`
- `$ git push --set-upstream origin <branch-name>`

Will create a remote branch of your local branch on Github and will push any of the changes you have made.


## Pull Request and Peer Reviews

When you’ve pushed the branch you will need to log into GitHub and create a pull request.

Please try to replicate a pull request with these template questions

#### What's this PR do?
#### Where should the reviewer start?
#### How should this be manually tested?
#### Any background context you want to provide?
#### What are the relevant tickets?
#### Screenshots (if appropriate)
#### Questions:

This will then be peer reviewed by the team. If this is an urgent fix please get in touch with a member of the review team to check it.


### Workflow

- `$ cd your/local/domain/UILibrary`
- `$ git pull`
- `$ git checkout -b <branch-name>`
- work on the branch
- commit locally
- `$ git push origin <branch-name>`
- log in to Github
- create the pull request


## Peer Review

If no-one in The Working Group (TGW) is assigned to a pull request then you can assign yourself to check it out. If you created the pull request it is best practice to ask someone else to check your code.

### Testing the Pull Request
You will need to run the changes locally to make sure the changes / additions in the code within the PR work and do not break anything else.

The steps to do this are:

- make sure you’re in the UI Library folder  
- `$ git fetch origin`
- `$ git checkout <branch-name> origin/<branch-name>`
- teet the code
- if if passes:
	- `$ git merge master`
	- `$ git checkout master`  
	- `$ git merge --no-ff <branch-name>`
	- `$ git push origin master`
	- comment on the Pull Request
- if it fails:   
	- comment on the Pull Request.

### Create a release

When you merge a pull request you will also need to update the UI Library’s version number (so that it can be used in mtcore). To do this refer to the readme.md of the UI Library.