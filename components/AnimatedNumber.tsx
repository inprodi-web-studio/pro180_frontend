import CountUp from "react-countup";

export interface AnimatedNumberProps {
    value : number;
};

import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

export function AnimatedNumber({
    value,
} : AnimatedNumberProps) {
    return (
        <CountUp
            preserveValue
            enableScrollSpy
            decimal="."
            decimals={2}
            delay={0.5}
            duration={2}
            start={0}
            separator=","
            end={value ?? 0}
            className="vizion-animated-number"
        />
    );
};

export const AnimatedNumberConfig : ExtendedCodeComponentMeta = {
    id            : "animated-number",
    name          : "AnimatedNumber",
    importPath    : "/components/AnimatedNumber.tsx",
    isDefaultExport : false,
    displayName   : "Animated Number",
    props : {
        value : {
            type         : "number",
            displayName  : "Value",
            defaultValue : 0,
        },
    }
};