import { Box, Button, Margins, Icon } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import React from 'react';
import { useSetModal } from '@rocket.chat/ui-contexts';
import CancelPaymentModal from './CancelPaymentModal';
import { useEndpoint } from '@rocket.chat/ui-contexts';
import { useQuery } from '@tanstack/react-query';


const MyPaymentsCard = (): ReactElement => {
	
	const setModal = useSetModal();
	const openCancelPaymentModal = (): void => setModal(<CancelPaymentModal onClose={(): void => setModal(null)} />);

	const getDummyData = useEndpoint('GET', '/v1/testing');
	const resultData: any = useQuery(['dummyData'], () => getDummyData(), {
		keepPreviousData: true,
	});	

	return (
		<Box bg='tint' height='100%' >
			<Margins block='x90'>
				<Box is='div' m='auto' height='75%' width='75%' z={99} bg='light' color='default' >
					<Box>
						<Box bg='#5627d8'>
							<Box is='header'
								minHeight='x64'
								p={16}
								mb={10}
								textAlign='center'
								fontSize='hero'
								data-qa-id='my-subscription-header'
							>
								STANDARD
							</Box>

							<Box is='header'
								minHeight='x64'
								p={16}
								mb={16}
								textAlign='center'
								fontSize='h3'
								data-qa-id='my-subscription-header'
							>
								Quisque Vestibulum
							</Box>
						</Box>
						<Box is='div' display='flex' justifyContent='center' alignItems='center' p={32} >
							<Box fontSize='x64' color='green'>19$</Box><Box alignSelf='end' fontSize='x32' >Per Month</Box>
						</Box>

						<Box is='div'>
							{/* <ul>
								{resultData?.data?.resInfo.map((user: any) => {
									return (
										<li><strong>Name:</strong> {user?.name} <strong>UsernName:</strong>  {user?.username}</li>
									)
								})}
							</ul> */}
							<Box display='flex' flexDirection='column' m='auto' width='50%' pis={50}>
								<Box display='flex' alignItems='center' ><Icon name='success-circle' size='x40' />
									<Box fontSize='h3' pis={10}>2X Speed</Box></Box>
								<Box display='flex' alignItems='center' ><Icon name='success-circle' size='x40' />
									<Box fontSize='h3' pis={10}>High Performance</Box></Box>
								<Box display='flex' alignItems='center' ><Icon name='success-circle' size='x40' />
									<Box fontSize='h3' pis={10}>Near-instant Provisioning</Box></Box>
							</Box>
						</Box>
						<Box display='flex' justifyContent='center' p={16} pbs={20}>
							<Button m='2px' danger onClick={openCancelPaymentModal}>Cancel Subscription</Button>
						</Box>
					</Box>
				</Box>
			</Margins>
		</Box>
	);
};

export default MyPaymentsCard;
