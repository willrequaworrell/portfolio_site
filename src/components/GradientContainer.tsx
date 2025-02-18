import { ReactNode } from "react";

interface GradientContainerPropsType {
    children: ReactNode;
}

const GradientContainer = ({children}: GradientContainerPropsType) => {
    return (
        <div className="h-[400vh] bg-gradient-to-b from-[#052B30] via-[#093941] to-[#011f24]">
            {children}
        </div>
    )
}

export default GradientContainer
