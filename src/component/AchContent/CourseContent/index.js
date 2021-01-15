import React from "react";
import {TitleContent} from "../../ExpContent/style";
import { GlobalContent } from "../../GlobalContent";
import { CourseData } from "../../../alldata/CourseContent";
import {TableStyle,PubTable} from "./style"

const ManageCourseTableData = ({data1,data2,data3,data4}) => {   
    return(
        <tr>
            <td>{data1}</td>
            <td>{data2}</td>
            <td>{data3}</td>
        </tr>
    )
};

const CourseContent = () => {
    return(
        <GlobalContent>
            <TitleContent>Course</TitleContent>
            <PubTable>
                <TableStyle>
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Date</th>
                                <th>Credits</th>
                            </tr>
                        </thead>
                        <tbody>
                            { CourseData.map((data,idx) => (
                                <ManageCourseTableData
                                    key={idx}
                                    data1={data.course}
                                    data2={data.date}
                                    data3={data.credit}
                                />
                            ))}
                        </tbody>
                </TableStyle>
            </PubTable>
        </GlobalContent>
    );
};

export default CourseContent;