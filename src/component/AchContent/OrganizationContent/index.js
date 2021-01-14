import React from "react";
import { GlobalContent } from "../../GlobalContent";
import {OrganizationData} from "../../../alldata/OrganizationContent"
import {
    TitleContent,
    WrapperContent,
    BoxExpContain,
    ExpTitle,
    ExpWrite} from "../../ExpContent/style";
import {
    WorkContain,
    CompPict,
    AddedPictWork
} from "../CompetContent/style"

const ManageOrganizationData = ({ imgMain,title, compname,date,desc,img1, img2 }) => {
    return(
        <WrapperContent>
            <BoxExpContain>
                <WorkContain companypict><CompPict src = {imgMain} /></WorkContain>
                <WorkContain>
                <ExpTitle>{title}</ExpTitle>
                    <ExpWrite>{compname}</ExpWrite>
                    <ExpWrite year>{date}</ExpWrite>
                    <ExpWrite desc>{desc}</ExpWrite>
                    <AddedPictWork src = {img1} />
                    <AddedPictWork src = {img2} />
                </WorkContain>
            </BoxExpContain>
        </WrapperContent>
    );
};

const OrganizationContent = () => {
    return(
        <GlobalContent>
            <TitleContent>Organization</TitleContent>
            {OrganizationData.map((data, idx) => (
              <ManageOrganizationData
                key={idx}
                imgMain={data.imgMain}
                title={data.title}
                compname={data.position}
                date={data.date}
                desc={data.desc}
                img1={data.img1}
                img2={data.img2}
              />
            ))}
        </GlobalContent>
    );
};
export default OrganizationContent;