import { AuthHook } from '@repo/common/common-library';
import React from 'react';

export const checkPermission = (
	permission: Record<string, string[]>,
	requiredPermission: string[]
): boolean => {
	return requiredPermission.every(x => {
		const permissionPath = x.split('.');
		if (permissionPath.length > 1 && permission[permissionPath[0]]) {
			return (permission[permissionPath[0]] || []).some(
				x => x.indexOf(permissionPath[1]) > -1
			);
		}
		return false;
	});
};

interface IProps {
	requiredPermission: string[];
	children: any;
}

export const PermissionGate = (props: IProps) => {
	const { user } = AuthHook();
	const hasPermission = checkPermission(
		user?.permission_list || {},
		props.requiredPermission
	);

	return hasPermission ? <>{props.children}</> : null;
};
