import { TextSizeConfig, TextSizeResult } from "../chrome-ext/lib/evaluator/content-side/text-size";

export interface AnalysisConfig {
    textSize: TextSizeConfig
}

export interface AnalysisResult {
    html: string;
    analysisConfig: AnalysisConfig;

    textSizeResult: TextSizeResult;
}

export interface AppState {
    analyzingStatus: string;
    config: AnalysisConfig;
    result: AnalysisResult | null;
}
