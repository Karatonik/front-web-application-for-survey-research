export interface Survey {
  id: number;
  name: string;
  ownerEmail: string;
  queriesIds: number[];
  resultsIds: number[];
}

export interface SurveyInfo {
  id: number;
  name: string;
}
