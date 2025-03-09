export interface ILinkData {
  title: string;
  url: string;
  userID: string;
}

export interface IDeleteData {
  userID: string;
  linkID: string;
}

export interface ILinkToModify {
  linkID: string;
  update: {
    title?: string;
    url?: string;
  };
}
