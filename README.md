# Cards Library

A small project for handling common stuff on card games.

This library aims to create a set of useful functions to manage card games, the idea will follow this structure.

## Game

The game will contain every information about (guess?) the game itself.

### Players

Well description is not needed, a player can have points and can "access" groups.

### Groups

Groups can be teams or squads in some games. Useful if the game uses multiple players together vs. others.

### Stacks

A stack is a collection of cards.

#### Cards

Base unit of the game. This will contain some information about:

##### Suit
##### Rank

A card needs this data in order to be correctly rendered.
Also points are calculated in some games differently, so is good to set point values on each property.