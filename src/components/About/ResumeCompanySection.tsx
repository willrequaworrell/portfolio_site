import { useState } from "react"
import { companySectionType } from "../../util/ResumeData"
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import { motion } from "framer-motion";

interface ResumeCompanySectionPropsType {
    companySection: companySectionType
}

const containerTransition = {
    layout: {
      type: "tween",
      duration: 0.3,
      ease: "easeOut"
    }
}
const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

const ResumeCompanySection = ({companySection}: ResumeCompanySectionPropsType) => {
    const [showDetail, setShowDetail] = useState<boolean>(false)

    return (
        <>
            <motion.div 
                layout
                transition={containerTransition}
                variants={containerVariants}
                className="relative flex flex-col bg-[#093941] rounded-xl p-4 gap-y-2"
            >
                
                <motion.div layout  className="flex justify-between font-bold pr-2 mb-2 text-[max(1.25vw,13px)]">
                    <p>{companySection.company}</p> 
                    {showDetail ? (
                        <motion.div layout={false}>
                        <FaMinusSquare 
                            onClick={() => setShowDetail(false)}
                            className="text-xl hover:text-slate-600 hover:scale-120 transition-all" 
                        />
                        </motion.div>
                    ) : (
                        <motion.div layout={false}>
                        <FaPlusSquare 
                            onClick={() => setShowDetail(true)}
                            className="text-xl hover:text-slate-600 hover:scale-120 transition-all" 
                        />
                        </motion.div>
                    )}
                </motion.div>

                {companySection.roles.map(role => (
                    <div key={role.roleName}>
                        <div className="flex justify-between w-full px-4">
                            <motion.p layout className=" w-1/2 italic text-[max(1vw,12px)]">{role.roleName}</motion.p>
                            <motion.p layout className="italic text-[max(1vw,12px)]">{role.startDate} - {role.endDate}</motion.p>
                        </div>

                        {showDetail && role.descriptionBullets.map(bullet => (
                            <div key={bullet} className="flex w-full pl-4 gap-x-4 text-[max(.75vw,12px)]">
                                <p>◎</p>
                                <p >{bullet}</p>
                            </div>
                        ))}

                    </div>
                ))}
                
            </motion.div>
            <div className="bg-slate-600"/>
        </>
    )
}

export default ResumeCompanySection

