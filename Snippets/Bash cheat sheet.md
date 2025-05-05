## Command Substitution  $(...)
# Value expansions ($...) must always be double-quoted.

[[ arg = arg ]] A test
[[ string ]] A test whether string is empty or not

## Special Parameters:
"$#" | results in a number indicating the count of positional parameters
"$?" | the exit code of the last command that finished (0 indcates success, anything else fail)
"$_" | last argument of the previous command


## Operators:

${parameter#pattern} 	
"${url#*/}" 	
https://guide.bash.academy/variables.html => /guide.bash.academy/variables.html
Remove the shortest string that matches the pattern if it's at the start of the value.

${parameter##pattern} 	
"${url##*/}" 	
https://guide.bash.academy/variables.html => variables.html
Remove the longest string that matches the pattern if it's at the start of the value.

${parameter%pattern} 	
"${url%/*}" 	
https://guide.bash.academy/variables.html => https://guide.bash.academy
Remove the shortest string that matches the pattern if it's at the end of the value.

${parameter%%pattern} 	
"${url%%/*}" 	
https://guide.bash.academy/variables.html => https:
Remove the longest string that matches the pattern if it's at the end of the value.

${parameter/pattern/replacement} 	
"${url/./-}" 	
https://guide.bash.academy/variables.html => https://guide-bash.academy/variables.html
Replace the first string that matches the pattern with the replacement.

${parameter//pattern/replacement} 	
"${url//./-}" 	
https://guide.bash.academy/variables.html => https://guide-bash-academy/variables-html
Replace each string that matches the pattern with the replacement.

${parameter/#pattern/replacement} 	
"${url/#*:/http:}" 	
https://guide.bash.academy/variables.html => http://guide.bash.academy/variables.html
Replace the string that matches the pattern at the beginning of the value with the replacement.

${parameter/%pattern/replacement} 	
"${url/%.html/.jpg}" 	
https://guide.bash.academy/variables.html => https://guide.bash.academy/variables.jpg
Replace the string that matches the pattern at the end of the value with the replacement.

${#parameter} 	"${#url}" 	
https://guide.bash.academy/variables.html => 40
Expand the length of the value (in bytes).

${parameter:start[:length]} 	
"${url:8}" 	
https://guide.bash.academy/variables.html => guide.bash.academy/variables.html
Expand a part of the value, starting at start, length bytes long. You can even count start from the end rather than the beginning by using a (space followed by a) negative value.

${parameter[^|^^|,|,,][pattern]} 	
"${url^^[ht]}" 	
http://guide.bash.academy/variables.html => HTTps://guide.basH.academy/variables.HTml
Expand the transformed value, either upper-casing or lower-casing the first or all characters that match the pattern. You can omit the pattern to match any character.