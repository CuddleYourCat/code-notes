

# VS Code - Workspaces

## Create a workspace folder - don't just rely on the code-workspace file

I set up a folder to store my workspaces.  This allows me to have common files (and folders) listed as a top level directory before I add in any other folders.  It also gives me easy access to the workspace config file to:
- change settings based on what I am currently doing
- add another folder I am frequently accessing
- exclude files and folders that I find distracting

In my code-workspace file, I name this folder `.` making it always show at the top of the tree in the Explorer view.

The basic setup looks like this:
```json
{
	"folders": [
		{
			"name": ".",
			"path": "."
		}
	],
	"settings": {
		"files.exclude": {			
		},
		
	}
}
```

## Have global gitconfig on hand and easily accessible.         

    
I like to have direct access to my global gitconfig file so I can easily slip into the file to add aliases or make other changes.  This file is in my `$HOME` folder, and I don't want to include the entire folder in my workspace.  

I make a hard symbolic link and place that in my Workspace

```bash
mklink /H destinationfile                       sourceFile
mklink /H "path to workspace folder\gitconfig" .gitconfig
```

```powershell
New-Item -Path "path to workspace folder\gitconfig" -ItemType SymbolicLink -Value $HOME\.gitconfig
```
It's important to use the correct path to the workspace folder, copy-pasting to another folder doesn't work.


