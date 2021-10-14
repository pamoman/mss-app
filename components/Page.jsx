/*
 * Page
 */

import Seo from '@components/shared/Seo';

const Page = ({ children, seo }) => {

    return (
        <>
            <Seo {...seo} />
            {children}
        </>
    )
};

export default Page;