import React from 'react'
import profile_info from "../../database/profile_info.json";


// Footer item component for consistent styling
const FooterItem = ({ name, link }) => (
    <a
        href={link}
        target="_blank"
        className="hover:text-blue-400 mx-6 font-bold"
    >
        {name}
    </a>
);


// Footer component for consistent styling and mapping
function Footer() {
    const { footer_text } = profile_info;
    return (
        <div
            className="fixed left-0 bottom-0 py-3 w-full bg-white/15 dark:bg-bllue-400 dark:bg-gradient-to-r dark:from-slate-950/50 dark:to-slate-800/50 backdrop-blur-md">
            <div className="max-w-[55ch] mx-auto">
                <p className="text-sm text-gray-400 dark:text-white text-center">
                    {footer_text.map((footer, index) => (
                        <FooterItem key={index} name={footer.name} link={footer.link} />
                    ))}
                </p>
            </div>
        </div>

    )
}

export default Footer