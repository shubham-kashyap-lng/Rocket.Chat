import React from "react";
import type { ReactElement } from "react";
import './style.css';
import { Scrollable } from '@rocket.chat/fuselage';
import { useThemeMode } from '@rocket.chat/ui-theming/src/hooks/useThemeMode';


const data = [
    {
        id: 1,
        ques: "How do I register as a provider on the site??",
        ans: "There is a separate registration page to register as a practising medical professional."
    },
    {
        id: 2,
        ques: "How do I register as a member on the site?",
        ans: "There is a separate process and page to register as a member."
    },
    {
        id: 3,
        ques: "Do I have to be registered on Zarcare to use the platform?",
        ans: "There are other elements on our website that you may access."
    },
    {
        id: 4,
        ques: "Can I add my family members to my account?",
        ans: "Yes, there is an option to create multiple member profiles on the site under your specific profile."
    },
    {
        id: 5,
        ques: "Can I use Zarcare on more than one device?",
        ans: "Yes, a user can log in on multiple devices at a time."
    },
    {
        id: 6,
        ques: "How do I use my vouchers on Zarcare?",
        ans: "We may occasionally distribute vouchers. These vouchers may be for a free consultation or a discounted one. You can apply the voucher code on the payment checkout page, where the option to redeem your voucher is available.        "
    },
    {
        id: 7,
        ques: "How do I choose a provider?",
        ans: "All our providers have a star rating and may have reviews. You may use this to select your preferred provider. Alternatively, complete the contact form, and we will get back to you with a recommendation."
    },
    {
        id: 8,
        ques: "How can I share my previous history and consultation with my provider?",
        ans: "You may grant the provider permission to access information on your Zarcare profile information. There is also an option to upload documents when needed."
    },
    {
        id: 9,
        ques: "How do I chat with a provider?",
        ans: "You can chat with a provider on the site by booking an appointment and selecting whether you want to do an audio or a video call."
    },
    {
        id: 10,
        ques: "Can the provider liaise with me via email?",
        ans: "The provider will liaise with you on the Zarcare platform."
    }
]

const FAQPage = (): ReactElement => {

    const [, , theme] = useThemeMode();
    console.log('Theme ->', theme);
    const themeValue = theme === 'dark' ? 'dark' : 'light'

    return (
        <Scrollable vertical>
            <div className={`faq-page ${themeValue}`}>
                <div className="page-title">
                    <div className={`faq-container border-${themeValue}`} >
                        <div className="faq-row">
                            <div className="col-md-12 mt-3 mb-4">
                                <h1 className={`h1-${themeValue}`}>Frequently Asked Question</h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="faq-container-inner">
                    <div className="faq-row">
                        <div className="col-md-12 mt-3 mb-4">
                            <ul className="faq-list">
                                {
                                    data.map(item => {
                                        return (
                                            <li key={item.id}>
                                                <span className={`span-${themeValue}`}>{item.ques}</span>
                                                <p className={`p-${themeValue}`}>{item.ans}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Scrollable>

    )
}

export default FAQPage;