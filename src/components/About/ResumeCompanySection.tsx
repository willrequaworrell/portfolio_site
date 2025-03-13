import { useState } from "react"
import { companySectionType } from "../../util/ResumeData"
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

interface ResumeCompanySectionPropsType {
    companySection: companySectionType
}



const ResumeCompanySection = ({companySection}: ResumeCompanySectionPropsType) => {
    const [showDetail, setShowDetail] = useState<boolean>(false)

    return (
        <div className="relative flex flex-col bg-[#093941] rounded-xl p-2 gap-y-2">
            {showDetail ? (
                <FaMinusSquare 
                    onClick={() => setShowDetail(false)}
                    className="absolute text-xl top-3 right-3 hover:text-slate-600 hover:scale-120" 
                />
            ) : (
                <FaPlusSquare 
                    onClick={() => setShowDetail(true)}
                    className="absolute text-xl top-3 right-3 hover:text-slate-600 hover:scale-120" 
                />
            )}
            
            <p className="font-bold mb-2 text-[max(1.25vw,13px)]">{companySection.company}</p>
            {companySection.roles.map(role => (
                <div key={role.roleName}>
                    <div className="flex justify-between w-full">
                        <p className=" w-1/2 italic text-[max(1vw,12px)]">{role.roleName}</p>
                        <p className="italic text-[max(1vw,12px)]">{role.startDate} - {role.endDate}</p>
                    </div>

                    {showDetail && role.descriptionBullets.map(bullet => (
                        <div key={bullet} className="flex w-full pl-4 gap-x-4 text-[max(.75vw,12px)]">
                            <p>◎</p>
                            <p >{bullet}</p>
                        </div>
                    ))}

                </div>
            ))}
            
        </div>
    )
}

export default ResumeCompanySection

