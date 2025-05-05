

If you have two branches:

    has-changes
    needs-changes

And you want to move the changes from has-changes onto needs-changes, then do the following:

git checkout -b deleteme has-changes # Create temporary branch to build commit on
git reset --soft needs-changes       # Move diff into index
git commit                           # Create the diff patch commit
git checkout needs-changes           # Switch to branch that needs changes
git cherry-pick deleteme             # Apply the diff to the needs-changes
git branch -D deleteme               # Delete the temporary branch


