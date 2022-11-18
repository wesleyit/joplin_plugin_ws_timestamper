import joplin from 'api';
import { MenuItemLocation, ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
    onStart: async function () {
        await joplin.commands.register({
            name: 'wesley',
            label: 'My wesley',
            iconName: 'fas fa-music',
            execute: async () => {
                alert('Testing plugin command wesley');
            },
        });

        // Add the first command to the note toolbar
        await joplin.views.toolbarButtons.create('myButton1', 'wesley', ToolbarButtonLocation.NoteToolbar);

        // Also add the commands to the menu
        await joplin.views.menuItems.create('myMenuItem1', 'wesley', MenuItemLocation.Tools);

    },
});
