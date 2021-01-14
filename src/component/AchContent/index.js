import React from "react";
import PaperContent from "./PaperContent";
import CompetContent from "./CompetContent";
import PublicationContent from "./PublicationContent";
import OrganizationContent from "./OrganizationContent";

const AchContent = () => {
    return(
        <>
            <PublicationContent />
            <PaperContent />
            <CompetContent />
            <OrganizationContent />
        </>
    );
};

export default AchContent;