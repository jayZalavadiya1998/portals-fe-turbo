import { ILoginRequest } from '../../models';
import { APIConstant, BaseService, IResponse } from '@repo/common/common-library';
export class loginService {
	static login = async (data: ILoginRequest) => {
		const response = await BaseService.post<IResponse>(
			APIConstant.patientLoginUrl,
			data,
			true
		);
		return response;
	};
}
