# SpeedrunCommands - PhantomBot Custom Module

*Custom script for PhantomBot that creates "mode" functionality for dynamic command data population in Twitch chat.*  

---

### Installation  

1. Download *speedrunCommands.js* and place in *{PhantomBotDir}/scripts/custom*  
2. Start PhantomBot and enable module  

### Usage  

**Setting and editing command data**:  
`!setwr {mode} {world record data}` - Sets the data PhantomBot will retrieve when the `!wr` command is used. If `{mode}` does not already exist, it will be created.  
`!setpb {mode} {personal best data}` - Sets personal best data for the `!pb` command. If `{mode}` does not already exist, it will be created.    
`!setgoal {mode} {goal data}` - Sets goal data for the `!goal` command. If `{mode}` does not already exist, it will be created.  

**Changing bot modes**:  
`!mode {mode}` - Changes PhantomBot's mode. This determines which data PhantomBot retrieves for the `!wr`, `!pb` and `!goal` commands. It is ideal to create a new mode for each game/category. Be sure to use a good, consistent naming scheme for your modes. For example,  

*Final Fantasy VII Any% No Slots* - `!mode ff7-noslots`  
*The Legend of Zelda: A Link to the Past 100%* - `!mode alttp-hundo`  

**Retrieving and displaying information in Twitch chat**:  
`!mode` - Phantombot returns the current mode.  
`!wr` - PhantomBot returns stored world record information for the current mode.  
`!pb` - PhantomBot returns stored personal best information for the current mode.  
`!goal` - PhantomBot returns stored goal information for the current mode.  

Whenever the mode is changed, it is written to Phantombot's local database meaning the bot will "remember" which mode is active, regardless of whether the bot is shut off or restarted.
