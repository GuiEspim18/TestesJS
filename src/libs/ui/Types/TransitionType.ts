import { TTimeMeasure } from "./TimeMeasureType"
import { TTimingFunction } from "./TimingFunctionType"
import { TTransitionProperty } from "./TransitionPropertyType"

export type TTransition = {
    property?: TTransitionProperty,
    duration: {
        value: number,
        measure?: TTimeMeasure
    },
    timingFunction?: TTimingFunction,
    delay?: {
        value: number,
        measure?: TTimeMeasure
    }
};