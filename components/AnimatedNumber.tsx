import CountUp from "react-countup";

export interface AnimatedNumberProps {
    value : number;
    precision?: number;
};

import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

export function AnimatedNumber({
    value,
    precision,
} : AnimatedNumberProps) {
    return (
        <CountUp
            preserveValue
            enableScrollSpy
            decimal="."
            decimals={ value % 1 === 0 ? 0 : 2 }
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
        precision : {
            type         : "number",
            displayName  : "Precision",
            defaultValue : 2,
        },
    }
};