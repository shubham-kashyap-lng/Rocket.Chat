import { Statistics, Users } from '@rocket.chat/models';

import { settings } from '../../../settings/server';
import { statistics } from '../../../statistics/server';
import { Info } from '../../../utils/rocketchat.info';
import { LICENSE_VERSION } from '../license';

export type WorkspaceRegistrationData<T> = {
	uniqueId: string;
	workspaceId: string;
	address: string;
	contactName: string;
	contactEmail: T;
	seats: number;

	organizationType: string;
	industry: string;
	orgSize: string;
	country: string;
	language: string;
	allowMarketing: string;
	accountName: string;
	agreePrivacyTerms: string;
	website: string;
	siteName: string;
	workspaceType: unknown;
	deploymentMethod: string;
	deploymentPlatform: string;
	version: string;
	licenseVersion: number;
	enterpriseReady: boolean;
	setupComplete: boolean;
	connectionDisable: boolean;
	npsEnabled: string;
	MAC: number;
};

export async function buildWorkspaceRegistrationData<T extends string | undefined>(contactEmail: T): Promise<WorkspaceRegistrationData<T>> {
	const stats = (await Statistics.findLast()) || (await statistics.get());

	const address = settings.get<string>('Site_Url');
	const siteName = settings.get<string>('Site_Name');
	const workspaceId = settings.get<string>('Cloud_Workspace_Id');
	const allowMarketing = settings.get<string>('Allow_Marketing_Emails');
	const accountName = settings.get<string>('Organization_Name');
	const website = settings.get<string>('Website');
	const npsEnabled = settings.get<string>('NPS_survey_enabled');
	const agreePrivacyTerms = settings.get<string>('Cloud_Service_Agree_PrivacyTerms');
	const setupWizardState = settings.get<string>('Show_Setup_Wizard');

	const firstUser = await Users.getOldest({ projection: { name: 1, emails: 1 } });
	const contactName = firstUser?.name || '';

	const { organizationType, industry, size: orgSize, country, language, serverType: workspaceType, registerServer } = stats.wizard;
	const seats = await Users.getActiveLocalUserCount();

	return {
		uniqueId: stats.uniqueId,
		workspaceId,
		address,
		contactName,
		contactEmail,
		seats,
		allowMarketing,
		accountName,
		organizationType: String(organizationType),
		industry: String(industry),
		orgSize: String(orgSize),
		country: String(country),
		language: String(language),
		agreePrivacyTerms,
		website,
		siteName,
		workspaceType: String(workspaceType),
		deploymentMethod: stats.deploy.method,
		deploymentPlatform: stats.deploy.platform,
		version: stats.version ?? Info.version,
		licenseVersion: LICENSE_VERSION,
		enterpriseReady: true,
		setupComplete: setupWizardState === 'completed',
		connectionDisable: !registerServer,
		npsEnabled,
		// TODO: add MAC count
		MAC: 0,
	};
}
