---
title: 'Stage One - Systems Architecture'
description: 'In other words: What Do What. Things work... but how?'
tags: ['Balloon Fight']
category: 'development'
featuredImageURL: 'https://res.cloudinary.com/dksdnxvzm/image/upload/v1701622291/balloon_fight_system_board_ad99313dec.jpg'
publishedAt: '2022-09-29T16:47:33.389Z'
---

**This update is more technical than it is game content and mechanics so could be boring**

Welcome to What Do What 101. In today's TedX talk (emphasis on the X), I'll brush over the central systems that make up Balloon Fight and the design patterns being used like DRY, SOLID, KISS, etc... as well as the goals for them in future stages.

### Master

The Master abstracts the controls from the balloon and has a PlayerMaster and AIMaster derive from it to control the balloon.

![image](https://i.imgur.com/krxywZK.png)
_Here is the layout for reference_

The BalloonController can be thought of as a puppet and the Master as the puppet master. There is no dependence on either, however, once the Master holds the strings, it controls the BalloonController.

This is abstracted like this for two reasons:

- Modularity and separation of balloon inputs (easier to read)
- Easily support Player and AI-controlled balloons with little to no dependencies

This also means balloons can easily switch Masters mid-round based on the modularity design. Why? Could be a cool item that grants control over another balloon :)

### Player Master

The player-owned Master only needs the input of a player to be created and then uses that input for an FSM that maps out how a player can control a balloon through states. This is a visual graph coming in a later Stage so for now, the player logic is hard-coded to the PlayerMaster step functions.

### AI Master

The AI-owned Master is completely different from PlayerMaster since it doesn't rely on controller input to play. It rather takes only one field: AISO. Which stands for AI ScriptableObject. Basically, an AI asset file that, as of this moment, uses a behavior tree for its personality. For now Stage One only supports "Dummy AI" which are just balloons given an item that they use at a random interval timer to simulate fighting. Stage Three will hopefully support AI behavior trees, until then, they have smooth brains :(

### Interaction

![image](https://i.imgur.com/9LWTjAu.jpg)
_For the visual learners_

InteractionController exposes functions to interact with the world for the Master to utilize. The biggest chunk of interactions will come from items.

### Items

This has two main classes:

- ItemSO: a ScriptableObject that contains all the properties of an item
- ItemBehaviour: Monobehaviour that connects the ItemSO asset to the world

ItemSO will grow exponentially throughout the Stages and there is a lot planned but for Stage One, we're scratching the surface with ItemActionSO abstract class that all action types will derive from. MeleeActionSO for all melee-style items, HoldActionSO for something like a shield, and the list goes on. Items will get their own post but for now just know that the InteractionController and PhysicsAnimator does stuff with them!

### Physics Animations!

This is what makes something like Balloon Fight work and that is having an animation system that not only animates ropes BUT obeys physics. Two things:

- Bezier curves
- PID Controllers

![image](https://i.imgur.com/kgn7VOV.gif)
_PhysicsAnimator demonstration_

Using a Bezier curve to create a path, the physics item will use three forces to "animate" along the path. These forces use PID controllers to stabilize them:

- First force: this applies a force using the position of the nearest forward point on the line and the tangent angle of it ( position + tangentAngle)
- Second force: this acts as a drag force or "gravity" so the item stays glued to the line
- Third force: this is a torque force applied to the item to match the rotational value of the line at the point the item is at

![image](https://i.imgur.com/sqsLXOs.gif)
_End product with all three forces_

This is the foundation of Balloon Fight because it is how balloons... fight...

The core of this is in Stage One already but will be improved in later stages and detailed further in a dedicated post. Here is an illustration of the system:

![image](https://i.imgur.com/fdtD06O.jpg)

PhaseDataSO was just designed by Freddy and will enable fine control of a PhysicsAnimationClipSO with phases a designer can implement. This will be a Stage Two or Stage Three mechanic.

### Events WIP

This one is short but I thought Unity's implementation of events through ScriptableObjects in what they call channels was pretty cool so one of the final steps of Stage One is to implement that system. It can be seen here and here is a simple illustration of it:

![image](https://i.imgur.com/YF7CaIk.png)
