export interface ICommonProps {
  enableLoader: (loading: boolean) => void;
}

export interface IModalProps {
  openModal?: boolean;
  closeModal?: () => void;
}

export interface IResponse<T = any> {
	results: T
	state: string
	message: string
	count: number
  participants:any

}

export interface IPagedResponse<T> extends IResponse<T> {
  count: number;
}

export interface IToken {
  username: string;
  exp: number;
  permission_list: [];
  email: string;
  orig_iat: number;
}