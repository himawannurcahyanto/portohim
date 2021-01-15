import React from "react";
import PaperContent from "./PaperContent";
import CompetContent from "./CompetContent";
import PublicationContent from "./PublicationContent";
import OrganizationContent from "./OrganizationContent";
import CourseContent from "./CourseContent"

const AchContent = () => {
    return(
        <>
            <PublicationContent />
            <PaperContent />
            <CompetContent />
            <OrganizationContent />
            <CourseContent/>
        </>
    );
};

export default AchContent;