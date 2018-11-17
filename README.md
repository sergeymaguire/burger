# burger
A application using handlebars

This application allows you to create a hamburger.  You can create a hamburger to your own liking in the form then click the add burger button,
this will display the hamburger below with an option to eat the burger by clicking on the devour button under the burgers to eat section.
It also has a number by the hamburger indicating the order of when the burger was made(the first hamburger will have a 1 by it because it was the first one made)
When you devour the hamburger it will then move under the burgers devoured section.  There are two ways I can run this application one way is to 
locally host it on localhost:3000 the other way is to use it on heroku.  This also is linked to MySQL. In the table called burgers there are four colunms
one containing the ID(primary key), The burger name, the devoured column which is set to an integer that will change depending if the burger has been 
eaten or not(0 being ready to eat and 1 being devoured) and finally there a timestamp column which shows when the burger was created.
There is also a validation check which requires you to input text so you can not submit an empty form as a hamburger.  This was a relatively challenging app to create.  There are a few things on the CSS side that I could do to make my app more appealing and user friendly as for error check and validation I really could not think of anything to check execpt the user pressing enter or clicking the button when the form is empty.
