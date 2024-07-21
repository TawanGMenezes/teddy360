
export type PartnerModel = {
  createdAt?: string;
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
  clients?: (number | string)[];
  projects?: (number | string)[];
  id?: string;
};
