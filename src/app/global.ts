export const urlApi = 'http://localhost:8080/api';
export const httpConfig = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers': 'Authorization'
  }
};

export const genderList: string[] = ["female", "male", "other"];
export const educationList: string[] = ["basic", "juniorHighSchool", "highSchool", "vocationalSchool", "technicalEducation", "BachelorDegree", "engineer",
  "master", "doctor", "professor", "other"];
export const laborSectorList: string[] = ["unemployment", "automotive", "industries", "food", "lightIndustry", "other", "AGDRTV"
  , " telecommunication", " transport", " trade", " architecture", " pharmacy", "tourism", "banking", " electrician", " publicSector"];
export const maritalStatusList: string[] = ["single", "married", " widower", " borrowed", "separated", " another"];

export const accountType: string[] = ["admin", "consumer", "creator"];

export function RemoveElementFromStringArray(stringArray: string[], element: string): string[] {
  stringArray.forEach((value, index) => {
    if (value == element) stringArray.splice(index, 1);
  });
  return stringArray;
}

