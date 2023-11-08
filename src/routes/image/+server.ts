import fs from 'fs';

import { decode } from '@jsquash/png';

export function GET() {
	return new Promise((resolve, reject) => {
		fs.readFile('./src/lib/images/svelte-welcome.png', (err, buffer) => {
			if (err) {
				console.log(err);
				reject(err);
			}

			decode(buffer).then((data) => {
				console.log(data);
			});

			resolve(buffer);
		});
	}).then((buffer) => new Response(buffer as Buffer));
}
