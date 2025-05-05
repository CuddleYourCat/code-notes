6:03 .gitconfig
[color.decorate]
    branch = 41
    HEAD = #xxx bold

19:33 git grep -P  (perl mode)
[grep]
lineNumber = true
patternType = perl

25:19 git reflog --date-iso --pretty

34:44 git diff —word-diff

37:31 git blame -c-c-c
42:48 merging files 
45:00 merging files: conflict
[merge]
conflictstyle = diff3

51:45 merge tools
52:05 rerere
[rerere]
enabled = true

56:00 .gitignore
[core]
    excludesfile = ~/.gitignore_global

57:22 conditional includes 
[user]
    name = Tracey Stobbs
[includeIf "gitdir:/git/Ecm3/"]
    path = .gitconfig.ddcms
[includeIf "gitdir:CuddleYourCat/"]
    path = .gitconfig.personal



