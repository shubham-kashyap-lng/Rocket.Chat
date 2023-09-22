import { API } from '../api';
import { serverFetch as fetch } from '@rocket.chat/server-fetch';
import { Users } from '@rocket.chat/models';
import { IUser } from '@rocket.chat/core-typings';

API.v1.addRoute(
    'testing',
    { authRequired: true },
	{
		async get() {
			
     		const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const resInfo = await res.json();
			

			// const user: IUser | null = await Users.findOneById(this.userId);
				
			return API.v1.success({ resInfo });
		},
	},
)
