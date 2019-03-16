(function() {
    // Read current state from database
    var state = $.getIniDbString('states', 'currentState', 'undefined');
    $.bind('command', function(event) {
		var command = event.getCommand(),
			args = event.getArgs(),
			argument = String(event.getArguments()),
            sender = event.getSender();

        // Mode handling
        if (command.equalsIgnoreCase('mode')) {
            if (args.length < 1) {$.say("Mode currently set to " + state); 
            return;
            }
            state = String(args[0].toLowerCase());
            $.setIniDbString('states', 'currentState', state);
            $.say("Mode successfully changed to " + state);
        }

        // Setting and editing data
        // World Record
        if (command.equalsIgnoreCase('setwr')) {
            if (args.length < 2) {$.say("Usage:!setwr {Mode Name} {World Record Data}.");
            return;
            }
            var modeName = String(args[0]).toLowerCase(),
                wrData = argument.slice(modeName.length+1);
            $.setIniDbString('wrTable', modeName, wrData);
            $.say("World record data for "+ modeName + " successfully set!");
        }
        // Personal Best
        if (command.equalsIgnoreCase('setpb')) {
            if (args.length < 2) {$.say("Usage:!setpb {Mode Name} {PB Data}.");
            return;
            }
            var modeName = String(args[0]).toLowerCase(),
                pbData = argument.slice(modeName.length+1);
            $.setIniDbString('pbTable', modeName, pbData);
            $.say("Personal best data for "+ modeName + " successfully set!");
        }
        // Goal
        if (command.equalsIgnoreCase('setgoal')) {
            if (args.length < 2) {$.say("Usage:!setgoal {Mode Name} {Goal Data}.");
            return;
            }
            var modeName = String(args[0]).toLowerCase(),
                goalData = argument.slice(modeName.length+1);
            $.setIniDbString('goalTable', modeName, goalData);
            $.say("Goal data for "+ modeName + " successfully set!");
        }

        // Reading data
        // World Record
        if (command.equalsIgnoreCase('wr')) {
            var modeName = state,
                wrData = $.getIniDbString('wrTable', modeName, 'undefined');
            if (modeName == 'unset') {
                $.say("Please set a mode.");
                return;
            }
            $.say(wrData);
            return;
        }

        // Personal Best
        if (command.equalsIgnoreCase('pb')) {
            var modeName = state,
                pbData = $.getIniDbString('pbTable', modeName, 'undefined');
            if (modeName == 'unset') {
                $.say("Please set a mode.");
                return;
            }
            $.say(pbData);
            return;
        }

        // Goal
        if (command.equalsIgnoreCase('goal')) {
            var modeName = state,
                goalData = $.getIniDbString('goalTable', modeName, 'undefined');
            if (modeName == 'unset') {
                $.say("Please set a mode.");
                return;
            }
            $.say(goalData);
            return;
        }
    });

// Register commands and set premission levels
    $.bind('initReady', function() {
        $.registerChatCommand('./custom/speedrunCommands.js', 'setwr', 0); // Level 0 is broadcaster
        $.registerChatCommand('./custom/speedrunCommands.js', 'setpb', 0);
        $.registerChatCommand('./custom/speedrunCommands.js', 'setgoal', 0);
        $.registerChatCommand('./custom/speedrunCommands.js', 'mode', 2); // Level 2 is moderator
        $.registerChatCommand('./custom/speedrunCommands.js', 'wr', 7); // Level 7 is viewer
        $.registerChatCommand('./custom/speedrunCommands.js', 'pb', 7);
        $.registerChatCommand('./custom/speedrunCommands.js', 'goal', 7);
    });
})();