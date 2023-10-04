import React from "react";
import type { ReactElement } from "react";
import './style.css';
import { useThemeMode } from '@rocket.chat/ui-theming/src/hooks/useThemeMode';
import { Button } from "@rocket.chat/fuselage";
import { useSetModal } from '@rocket.chat/ui-contexts';
import CancelPaymentModal from '../cards/CancelPaymentModal';

const MyPlanPage = (): ReactElement => {
    const [, , theme] = useThemeMode();
    const setModal = useSetModal();
	const openCancelPaymentModal = (): void => setModal(<CancelPaymentModal onClose={(): void => setModal(null)} />);

    const themeValue = theme === 'dark' ? 'dark' : 'light'
    const planDesc = [
        'Regular Advice',
        'Investment Report Monthly',
        'Loan and card offers',
        'Weekly 1-1 call',
        'Monthly investment review',
        'Monthly investment review'
    ]

    return (
        <section className={`myplan ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className='myplan-container'>
                <div className='myplan-row'>
                    <div className='col-md-12'>
                        <div className={`myplan-block myplan-block-${themeValue}`}>
                            <div className={`myplan-content myplan-content-${themeValue}`}>
                                <h2 className={`h2-${themeValue}`}>Premium</h2>
                                <ul>
                                    {
                                        planDesc.map((item, index) => {
                                            return (
                                                <li key={index}><h4 className={`h2-${themeValue}`}>{item}</h4></li>
                                            )
                                        })
                                    }
                                </ul>
                                <Button mb='2.5rem' alignSelf="flex-end" className='cancel-button' danger borderRadius='0.8rem' maxWidth='12rem' onClick={openCancelPaymentModal}>Cancel Subscription</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyPlanPage;