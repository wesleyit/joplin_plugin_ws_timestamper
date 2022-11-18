import joplin from 'api';
import { ToolbarButtonLocation } from 'api/types';


function getTimeStamp() {
	const d = new Date();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let year = d.getFullYear();
	let month = months[d.getMonth()];
	let day = d.getDate();
	let wday = days[d.getDay()];

	let timestamp = `\[ ${wday}, ${day} of ${month}, ${year} \]\n\n`.toLowerCase();
	return timestamp;
}


joplin.plugins.register({
	onStart: async function () {

		await joplin.commands.register({
			name: 'wstimestamper',
			label: 'WS Timestamper',
			iconName: 'fas fa-calendar',
			execute: async () => {
				await joplin.commands.execute("insertText", getTimeStamp());
				await joplin.commands.execute('editor.focus');
			},
		});

		await joplin.views.toolbarButtons.create('wstimestamper', 'wstimestamper', ToolbarButtonLocation.EditorToolbar);
	},

});
