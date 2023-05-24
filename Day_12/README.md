What I learnt on 20th of may 2023

# Regular Expression
<p>A regular expression or RegExp is a small programming language that helps to find pattern in data.</p>

## RegExp Parameters
<p>A regular expression takes two parameters. One required search pattern and an optional flag</p>

### Pattern
<p>A pattern could be a text or any form of pattern which have similarities. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for</p>

### Flags
<p>Flags are optional parameters in regular expression which determines the type of searching. Examples:</p>
<ul>
  <li>g: a global flag which means looking for a pattern in whole text</li>
  <li>i: case insensitive flag(it searches for both lowercase and uppercase)</li>
  <li>m: multiline</li>
</ul>

### Creating a pattern with and without RegExp Constructor
### RegExpp Object Methods

[]: A set of characters
    [a-c] means, a or b or c
    [a-z] means, any letter a to z
    [A-Z] means, any character A to Z
    [0-3] means, 0 or 1 or 2 or 3
    [0-9] means any number 0 to 9
    [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
     r'^substring' eg r'^love', a sentence which starts with a word love
     r'[^abc] mean not a, not b, not c.
$: ends with
     r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
     r'[a]*' means a optional or it can occur many times.
+: one or more times
     r'[a]+' means at least once or more times
?: zero or one times
     r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
     r'apple|banana' mean either of an apple or a banana
(): Capture and group
