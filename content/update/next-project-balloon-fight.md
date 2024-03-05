---
title: 'Next Project - Balloon Fight'
description: 'Balloons w/ weapons trying to creatively poke other'
tags: ['Balloon Fight']
category: 'development'
featuredImageURL: 'https://res.cloudinary.com/dksdnxvzm/image/upload/v1701619061/balloon_fight_projectile_block_ea6c139171.jpg'
publishedAt: '2022-09-04T20:26:41.929Z'
---

![image](https://i.imgur.com/pJb0qeh.gif)
Play as a balloon... in a smash bros environment... Chivalry-like melee physics... absurd level mechanics... and staple guns? This project has been archived for a couple years now but it's now being worked on again. Future posts will go more into details about this project but for now, I'll write about the context, the present, and the goals for it mainly through GIFs.

It started as a collaboration between me and Freddy. Starting with 2D but quickly turned to 3D to really overdo it with the physics. The core inspirations come from arena-style games like Duck Game and Super Smash Bros to physics-heavy games like Exanima, Chivalry, and TABS (showing physics is hilarious) all the way to the AI design pattern in Halo using behavior trees all came together while building this.

Within a month it was prototyped, as seen below:

![First balloon and rope physics](https://i.imgur.com/wLpfwll.gif)
_First balloon and rope physics_

![image](https://i.imgur.com/TizACRf.gif)
_New rope phyiscs_

![image](https://i.imgur.com/s0icsQ8.gif)
_Interaction_

![image](https://i.imgur.com/yBoiMaU.jpg)
_Menu for the prototype build_

Now it has been recreated with Unity3D's latest version, with a new style in mind, and more of a concrete game design goal.

### Game Stages

To prevent this project from collecting any more dust, I wrote the progress needed and chunked it into stages. It'll probably take 4 stages until a demo (I really don't know :/ ) and each stage consist of a list of mechanics, design, and bugs to work on. Here is Stage One which is being worked on now:

- Basic destroyable behavior for any object including balloons
- Differentiate sharp and blunt collisions
- Replace GameManager.cs events with the EventChannel SO system (inspired by Unity)
- Create a playable scene full of dummy AI in which they don't move, are given an item, and an interval amount to use the action of the item to imitate fighting
- Sound FX
- Menu to make Stage One playable so a player can attack/defend against the dummy AI

### Newer Style

It is still early in development but already it is very different from the original prototype with the new direction, e.g., balloons actually being shaped like balloons... I'll write more updates soon going over more specifics but here are some GIFs of Stage One now:

![image](https://i.imgur.com/1Mow6Ce.gif)
_Attempting to grab the wall but left hand collisions were not working :/_

![image](https://i.imgur.com/0IXFe7O.gif)
_Two-way physics with interactables_

![image](https://i.imgur.com/Lxnkiuh.gif)
_First dummy balloon getting yeeted after throw action was built_
