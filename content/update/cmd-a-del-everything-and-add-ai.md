---
title: 'CMD + A + DEL Everything & Add AI'
description: 'Better animations, better systems, Papa Johns...'
tags: ['Balloon Fight']
category: 'development'
featuredImageURL: 'https://res.cloudinary.com/dksdnxvzm/image/upload/v1701623189/balloon_fight_nerf_gun_a69eb61cd5.jpg'
publishedAt: '2023-02-12T17:06:40.396Z'
---

TL;DR: Stage One is done and Stage Two is already halfway through. Below is a screenshot of Stage One's changelog as well as Stage Two's current progress but these are the main changes:

- Removed PhysicsAnimator system and am now using kinematic rigibodies with Unity's Animator
- Added an event system that uses ScriptableObjects
- Added an AudioManager system that uses the new event system to emit sounds from a pool; Fancy
- Added item SFX
- Added a Behavior Tree editor to design AI

![image](https://i.imgur.com/BSYJOYz.png)
_Stage One changelog_

![image](https://i.imgur.com/dWy7dkx.png)
_Stage Two current changelog (in progress)_

### New Animation System

I go into detail about the PhysicsAnimator in this post. However, it had a couple flaws. This project needs to have a balance between player-controlled actions and physics, and the PhysicsAnimator was more physics-based than player-controlled. This lead to unwanted behavior sometimes and some items just not working right with the curve system.

To get the balance back, I am using Unity's Animator and making the items kinematic while animating. This not only achieves more accuracy in the desired action but the future netcode will be easier to send the item state over the network without the additional physics properties. Any physics interactions when equipped will be simulated like you see in most games, e.g., sword clashes with a wall it will bounce back.

![image](https://i.imgur.com/umUebDT.gif)
_Animator with a kinematic rigidbody_

### Adam & Eve

The recent GIF brings up the next topic: AI and Behavior Trees.

The goal of AI is to make personalities rather than types or general AI with a variable skill. Types meaning: a grunt, an elite, or a jackel like in Halo. AI in Balloon Fight will work differently and you will be able to pick from an array of different AI characters. E.G., If you play with Bob, Bob plays as Bob all the time. He might be scared when you have a ranged weapon and only attack at close range. Whereas the Rick AI prioritizes ranged weapons on the map and will go pick one up ASAP to attack you without getting too close. These are oversimplifications but the general idea.

This goal needs an AI model to support these personalities, create them efficiently and also support AI mods so players can form their own.

I decided to use the behavior tree (BT\*) model.

With a BT, AI Masters (read more about masters here) can use a BT asset to run the AI logic. This makes DX better, forcing code to be written in a modular way so that AI design can all be visual. This checks the efficiency part and also checks mod support as a BT editor can be implemented in-game letting the player design and generate BT assets for custom AI.

![image](https://i.imgur.com/uCE1htg.gif)
_Example of the first BT for Dummy_AI_

This is what this BT does:

- Interacts with the item in front of the AI balloon
- Repeat the action of the item on a set interval
  Very simple BT example and you can see what this looks like in-game from the first GIF in this article. Better AI will be designed in a later stage.

### Nerf Gun

With all the new systems in, audio, scriptable object events, kinematic animator, and behavior trees, making items has been a lot easier. More items will come in a later stage but here's a nerf gun for now.

![image](https://i.imgur.com/YMFPyCC.gif)
_IDK why there is recoil for a nerf gun_
