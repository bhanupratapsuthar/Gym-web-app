import React from "react";

const TermsConditions = () => {
    return (
        <div className="bg-slate-900 text-gray-100 min-h-screen">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-slate-900 to-orange-700 p-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold italic">Terms & Conditions</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex flex-col gap-6 font-medium tracking-wide text-gray-300">
                    <p>
                        ROYAL GYM retains copyright on all the text, graphics, and trademarks displayed on this site.
                        All the text, graphics, and trademarks displayed on this site are owned by ROYAL GYM and used
                        under license by ROYAL GYM affiliates.
                    </p>
                    <p>
                        You may print copies of the information on this site for your personal use and store the files
                        on your computer for personal use. You may not distribute text or graphics to others without
                        the express written consent of ROYAL GYM and ROYAL GYM affiliates. Also, you may not, without
                        our permission, copy and distribute this information on any other server, or modify or reuse
                        text or graphics on this or any another system.
                    </p>
                    <p>
                        No reproduction of any part of the site may be sold or distributed for commercial gain, nor
                        shall it be modified or incorporated in any other work, publication, or site, whether in hard
                        copy or electronic format, including postings to any other site. ROYAL GYM reserves all
                        other rights.
                    </p>
                    <p>
                        The information on this site has been included in good faith and is for general
                        purposes only. It should not be relied upon for any specific purpose and no
                        representation or warranty is given as regards its accuracy or completeness.
                    </p>
                    <p>
                        No information on this site shall constitute an invitation to invest in ROYAL GYM or
                        any of its affiliates. Neither ROYAL GYM and ROYAL GYM affiliates, nor their or
                        their affiliates’ officers, employees, or agents shall be liable for any loss, damage
                        or expense arising out of any access to or use of this site or any site linked to
                        it, including, without limitation, any loss of profit, indirect, incidental, or otherwise.
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gray-800 text-gray-400 py-4 text-center">
                <p>&copy; 2024 Royal Gym. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default TermsConditions;
