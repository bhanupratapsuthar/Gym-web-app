import React from "react";
import { ChevronDown } from "lucide-react";

const MemberShips = () => {
    const faqs = [
        {
            question: "How old do I have to be to join Fitness?",
            answer: "To join you must be 16 years old and above. We will only entertain members under 16 if they are obese, are under doctor advisement and take up personal training. All membership agreements for children under 16 years of age need to be authorised and signed by a legal guardian."
        },
        {
            question: "How much is membership at Fitness First?",
            answer: "Membership rates vary depending on the type of package that is best suited for you. Please contact your preferred Fitness First club where our staff will be happy to discuss the various membership options available. Find a club"
        },
        {
            question: "Can I put my membership on hold?",
            answer: "Yes you can. We call our hold option - freeze. At Fitness First, we believe that exercise is a lifelong habit. That's why when it comes to freezing of your membership, it will only be for medical reasons or outstation / overseas assignments for more than 2 weeks with written notice. For further information, please refer to our reception team. A freeze fee will be charged."
        },
        {
            question: "Am I obligated to a long-term contract when I join Fitness First?",
            answer: "Not at all! As a member of IHRSA (International Health, Racquet & Sportsclub Association), Fitness First adheres strictly to the rules of conduct which does not encourage the sale of long term contracts as it does not benefit the end-customer. For more information and how to educate yourself and your rights as a purchaser on this matter, please refer to IHRSA or visit us at the club for more details."
        },
        {
            question: "What if I want to cancel my membership?",
            answer: (
                <>
                    We hope you have really benefited from your time with us. However if you have to cancel your membership, please visit your nearest club where one of our receptionists will arrange someone to take you through the cancellation procedure.
                    <br /><br />
                    <span className="text-sm italic">
                        Please note that cancellation is by appointment only. For all the details around cancelling please refer to our Terms and Conditions (Section 3).
                    </span>
                </>
            )
        },
        {
            question: "How do I feedback about your products and services?",
            answer: "We welcome your feedback and we want to hear about ways we can assist you with any concerns you may have. Please have a chat with one of our club staff. If you would prefer to speak with club management, please let our reception team know. If they aren't immediately available, the reception team will ensure you are contacted by them as soon as possible.\n\nYou can also fill up the Hey Manager feedback form strategically placed in all clubs. Alternatively, please email your query via our online contact form. We also love to know what we're doing well too! So do tell us about your successes or about a Fitness First team member who's made a difference."
        },
        {
            question: "What are the Terms and Conditions of a membership?",
            answer: "We call this our Club Rules and you can download a copy of it here"
        },
        {
            question: "Can I freeze my membership because I cannot attend the club at the moment?",
            answer: "At Fitness First, we believe that exercise is a lifelong habit. That is why when it comes to freezing of your membership, it will only be for medical reasons or outstation/overseas assignments for more than 2 weeks with written notice. For further information, please contact our Front Of House."
        },
        {
            question: "Are there extras to pay for once I've joined Fitness First?",
            answer: "No. However, if you wish to maximise results with minimum time, we also offer Personal Training and Nutrition Counseling sessions as well as certain special paid Group Training workouts. In addition to that we also offer free Group Exercise classes and the use of the fitness equipment, which as member of Fitness First, you will be able take advantage of our many other unique and entirely complimentary benefits such as complimentary Wi-Fi, free tea and coffee."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Membership FAQ
                    </h1>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about your fitness journey with us
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <ChevronDown className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {faq.question}
                                        </h3>
                                        <div className="text-gray-600 leading-relaxed">
                                            {typeof faq.answer === 'string' 
                                                ? faq.answer.split('\n\n').map((paragraph, i) => (
                                                    <p key={i} className="mb-2 last:mb-0">
                                                        {paragraph}
                                                    </p>
                                                ))
                                                : faq.answer
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemberShips;