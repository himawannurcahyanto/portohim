import React from "react";
import { GlobalContent } from "../../GlobalContent";
import {WorksData} from "../../../alldata/WorkContent";
import { 
    TitleContent, 
    WrapperContent,
    BoxExpContain,
    ExpTitle,
    ExpWrite,
    ExpImageParted
} from "../style";
import {
    WorkContain,
    CompPict,
    AddedPictWork
} from "./style"

const ManageWorkData = ({ imgMain,compname, major,date,desc,img1, img2 }) => {
    return(
        <WrapperContent>
            <BoxExpContain>
                <WorkContain companypict><CompPict src = {imgMain} /></WorkContain>
                <WorkContain>
                <ExpTitle>{compname}</ExpTitle>
                    <ExpWrite>{major}</ExpWrite>
                    <ExpWrite year>{date}</ExpWrite>
                    <ExpWrite desc>{desc}</ExpWrite>
                    <ExpImageParted>
                    <AddedPictWork src = {img1} />
                    <AddedPictWork src = {img2} />
                    </ExpImageParted>
                </WorkContain>
            </BoxExpContain>
        </WrapperContent>
    );
};

const WorkExp = () => {
    return(
        <GlobalContent>
            <TitleContent>Working Experience</TitleContent>
            {WorksData.map((data, idx) => (
              <ManageWorkData
                key={idx}
                imgMain={data.imgMain}
                compname={data.compname}
                major={data.major}
                date={data.date}
                desc={data.desc}
                img1={data.img1}
                img2={data.img2}
              />
            ))}
        </GlobalContent>
    );
};

export default WorkExp;