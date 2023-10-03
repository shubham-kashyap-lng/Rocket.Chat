import { Sidebar, Button } from '@rocket.chat/fuselage';
import { useUser, useTranslation, useRole, useRouter } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React, { memo } from 'react';

import UserAvatarWithStatus from './UserAvatarWithStatus';
import UserMenu from './UserMenu';
import Administration from './actions/Administration';
import CreateRoom from './actions/CreateRoom';
import Directory from './actions/Directory';
import Home from './actions/Home';
import Login from './actions/Login';
import Search from './actions/Search';
import Sort from './actions/Sort';

/**
 * @deprecated Feature preview
 * @description Should be removed when the feature became part of the core
 * @memberof navigationBar
 */

const Header = (): ReactElement => {
	const t = useTranslation();
	const user = useUser();
	const isAdmin = useRole('admin');
	const isOwner = user?.roles?.includes('owner');

	const router = useRouter();
	const handleClick = () => {
		return router.navigate('/myplan/emailId')
	}
	const handleClickFAQ = () => {
		return router.navigate('/faqpage/emailId');
	}

	return (
		<Sidebar.TopBar.Section>
			{user ? <UserMenu user={user} /> : <UserAvatarWithStatus />}
			<Sidebar.TopBar.Actions>
				<Home title={t('Home')} />
				<Search title={t('Search')} />

				{user && !isAdmin &&
					(
						<Button medium backgroundColor='#01A19A' color='#233502' onClick={handleClickFAQ}>FAQ</Button>
					)
				}
				{user && !isAdmin && !isOwner &&
					(
						<Button medium backgroundColor='#99CA41' color='#233502' onClick={handleClick}>My Plan</Button>
					)
				}
				
				{user && isAdmin && (
					<>
						<Directory title={t('Directory')} />
						<Sort title={t('Display')} />
						<CreateRoom title={t('Create_new')} data-qa='sidebar-create' />
						<Administration title={t('Administration')} />
					</>
				)}
				{!user && <Login title={t('Login')} />}
			</Sidebar.TopBar.Actions>
		</Sidebar.TopBar.Section>
	);
};

export default memo(Header);
