# Andrew Alliance Test
Hello fellow interviewers, first of all, thank you for your time and I hope you enjoy my test.

To have a quick start I cloned the Microsoft Node/Typescript repo `Microsoft/TypeScript-Node-Starter` (well, finally we need to thank them because of Typescript, also the old IE8 and Windows Vista are in the past).

My intention with this readme is to tell my journey creating the project, what I learned, what surprised me and make this boring code test more enjoyable.

## PR (#1)
Something before the start, I try to stay KISS, building only the functionality I need, after some time there will be time to improve code, but for now... time is gold.

I Started by cleaning a little bit of the repo, deleting some files, also dependencies that I´m not using right now, maybe later, but we´ll see. 

## PR (#2)
After the cleaning, I was eager to continue, so I created the PR and squash-merged the code, but, I forgot to run the server and check that was up and running. I know, beginner's error, but no worries, we can fix it!

## PR (#3)
Well, here we are, coding, so far I have added some basic routes, also improved the structure of the project by implementing more typings, trying to stay simple as possible, but, adding some fancy code. After all, I want to impress you and show you more of what I´m capable of.

## PR (#4)
Now my next task is to emulate results from a database adding JSON files, and now I´m debating my self if I should create one big file of records, or create multiple files. I think I will choose multiple files, just to spice the project by adding more routes so looks more like a REST API.

I took advantage of the code I was doing and I started to add Unite tests to the middleware and other functions :) I like to create them in a BDD way I feel are more readable therefore easier to understand. I know a little bit out of the scope of this PR, but always some tests are good to season the code [~~ Insert a salt bae gif throwing PRs ~~]

## PR (#5)
Following the code, now I'm going to create the functionality to read JSON files and return the requested data.
My first task was to organize the DBs, I already had the files with my desired structure, now I improved the code by adding interfaces to the object, also to facilitate the work and make it securer,  I changed the files from JSON to TS exporting the data :). I feel better with that change and the code feels more resilient.

## PR (#6)
Ok, readers, I think I'm almost finishing the backend side (I hope... normally I could forget something...). In this PR I'm planning to add one last route that will receive all the answers from the frontend and send calculate the scoring I'm planning to respond with the quiz, showing the right information and the percentage of success.
I was struggling to test the service because I was including the raw data, so to avoid more complications, I decided to create a DataManager class on the DB folder that is in charge to distribute data, at the end looks more like a DB query like this and now I can mock easier the results! :partyEmoji: 

## PR (#7)
Last but not least, I created this PR for any change required now that I´m going to integrate the API with the FrontEnd.
The first chance will be to add a status on all quizzes because I don't think I will do all questions.
Also, I added `api` as a prefix to the URLs so it's easier to create a proxy in the FrontEnd. 