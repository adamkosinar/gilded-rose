# Intro

Hello there!

This is my humble attempt to complete your gilded rose kata. It was quite fun project and I enjoyed doing it.

## The approach

I decided to tackle the issue using the strategy pattern. I have created an update strategy per each type of item as I am not allowed 
to change the item class itself. In a nutshell this delegates the logic, that could have been solved by polymorphism should we would be allowed to change  the item class, to strategies and a provider class that
determines what strategy should be used based on the name of the item.

I also took some liberties with the project structure and dependencies as they had to be updated to use not deprecated versions.

I also moved some variables into a config file to make the solution more declarative as I am not a big fan of hardcoded values.

## How to run

all run options are encapsulated in package.json and run via npm.

make sure you have all dependencies installed via npm install.

use **npm run app** to run the app main.

use **npm run test** to run all unit tests

# Gilded Rose

### Guidance Notes

- Clone or fork this repo, and do this exercise in any of the available languages that you are most comfortable using.
- There is no time limit to this exercise, but try to time box it for yourself to avoid spending an inordinate amount of effort on it.
- A history of git commits will be very helpful when we go on to discuss the exercise.
- This exercise is about sparking a conversation, not about the "best" technical implementation.

### Additional notes for Junior developers

- You are not required to finish this exercise.
- Your approach to the problem is more interesting to us than a solution.
- This is mostly a refactoring exercise - you do not need to have any reverence for the current implementation!

### Requirements Specification

Hi and welcome to team Gilded Rose. 

As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

- All items have a SellIn value which denotes the number of days we have to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Aged Brie" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
- Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
- Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

```
"Conjured" items degrade in Quality twice as fast as normal items
```

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However __do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership__ (you can make the UpdateQuality method and Items property static if you like, we'll cover for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.
