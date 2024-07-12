const basePath = 'http://*.localhost:8000' || '';
export const APIConstant = {
	basePath: basePath.replace('*', window.location.hostname.split('.')[0]),

	//* Theme Start
	theme_Toggle: 'portals/common/theme-toggle/<str:user_id>',
	//* Theme End

	//* Authentication Start
	refreshTokenUrl: 'portals/common/token/refresh/',
	loginUrl: 'portals/common/login',

	resetPatientPasswordUrl: 'portals/common/patient/reset-password?token=',
	resetPhysicianPasswordUrl: 'portals/common/physician/reset-password?token=',
	resetPharmacyPasswordUrl: 'portals/common/patient/reset-password?token=',
	resetPasswordUrl: 'portals/common/reset-password?token=',
	resetPasswordUrlPost: 'portals/common/<str:role>/reset-password/',
	changePasswordUrl: 'portals/common/change-password/?token=',
	changePasswordUrlPost: 'portals/common/change-password/',
	patientVerification: 'portals/patient/verification/',
	//* Authentication End

	create_patient_user: 'portals/patient/create-patient-user/',
	logoutUrl: 'portals/common/logout/',
	forgotPasswordUrl: 'portals/common/forgot-password/',
	patientProfile: 'portals/patient/<int:patient_id>/details/',
	updatePatientBasicDetails: 'portals/patient/<int:patient_id>/update-details/',
	tosConfig: 'portals/client/enrollment-configration',

	//* prescription List
	prescriptions: 'portals/patient/rx/<int:patient_id>/medications/?search=',
	expiring_prescriptions:
		'portals/patient/rx/<int:patient_id>/expiring-medications/?search=',
	expired_prescriptions:
		'portals/patient/rx/<int:patient_id>/<str:role>/expired-medications/?search=',
	//* Get Patient Notes

	//* Patient Login API start
	patientLoginUrl: 'portals/patient/login/',
	//* Patient Contact API start
	patientContacts: 'portals/patient/<int:patient_id>/contacts/?search=',
	createPatientContact: 'portals/patient/add-contact/',
	updatePatientContact: 'portals/patient/<int:rec_id>/update-contact/',
	deletePatientContact: 'portals/patient/<int:rec_id>/delete-contact/',

	//* Options APIs start
	contact_type_options:
		'portals/common/lookup-item/list?lookup_id__key=CONTACT_TYPE',
	relation_ship_options:
		'portals/common/lookup-item/list?lookup_id__key=RELATIONSHIP_TYPE',
	subject_options:
		'portals/common/lookup-item/list?lookup_id__key=NOTE_SUBJECT',
	address_type_options:
		'portals/common/lookup-item/list?lookup_id__key=ADDRESS_TYPE',
	document_type_options:
		'portals/common/lookup-item/list?lookup_id__key=DOCUMENTS_TYPE',
	state_list: 'portals/common/state/',
	city_list: 'portals/common/states/<int:stateId>/cities/',
	zip_code_list: 'portals/common/cities/<int:cityId>/zip_code/',
	allergy_options_list: 'portals/common/lookup-item/list?lookup_id__key=ALLERGIES',
	comorbid_options_list: 'portals/common/lookup-item/list?lookup_id__key=COMORBID_CONDITIONS',
	high_risk_options_list: 'portals/common/lookup-item/list?lookup_id__key=HIGH_RISK_CONDITIONS',
	active_med_list: 'portals/patient/<int:patient_id>/patient-drug-list/',
	active_address_list: 'portals/patient/<int:patient_id>/patient-address-list/',
	physician_workspace_options: 'portals/physician/<str:physician_id>/physician-workspace/list/',
	physician_assoc_options: 'portals/physician/client-physician-patient/list/',
	granted_access_physicians: 'portals/physician/get-granted-physician-user/?search=',
	patient_pharmacy_users_list: 'portals/patient/patient-pharmacy-user/',
	physician_pharmacy_users_list: 'portals/physician/physiciyan-pharmacy-users/',
	physician_assistant_users_list: 'portals/common/physician-assistant/<int:physician_id>',
	pharmacy_active_patient_user_list: 'portals/pharmacy/pharmacy-patient-user/',
	physician_active_patient_user_list: 'portals/physician/physician-patient-user/<int:physician_id>',
	//*Options APIs end

	//* Patient Documents API paths start
	get_documents_api: '/portals/patient/<int:patient_id>/documents/?search=',
	upload_document: 'portals/patient/<int:patient_id>/document-upload/',
	get_document: 'portals/patient/<int:patient_id>/document/<int:document_id>',
	get_update_document: 'portals/patient/<int:document_id>/get-update-document',
	delete_document: 'portals/patient/<int:document_id>/delete-document',
	//* Patient Documents Api paths End

	//* patient Notes API start
	patientNotesList: 'portals/patient/<int:patient_id>/notes/?search=',
	createPatient: 'portals/patient/create-note/',
	updatePatient: 'portals/patient/<int:rec_id>/update-note/',
	deleteNotes: 'portals/patient/<int:rec_id>/delete-note/',
	//* patient Notes API end

	patientPhysicians: 'portals/patient/<int:patient_id>/patient-physician/?search=',

	// * Contact Verification APIs Start
	sendOtp: "portals/common/send-otp/",
	verifyOtp: "portals/common/verify-otp/",
	// * Contact Verification APIs End


	//* Patient Address API Start
	createPatientAddress: 'portals/patient/add-address/',
	patientAddress: 'portals/patient/<int:patient_id>/address/?search=',
	updatePatientAddress: '/portals/patient/<int:rec_id>/update-address/',
	deletePatientAddress: '/portals/patient/<int:rec_id>/delete-address/',
	//* Patient Address API END

	//* Patient Clinical Conditions API Start
	//*Allergies APIs start
	get_patient_allergies: 'portals/patient/<int:patient_id>/patient-allergies/?search=',
	create_patient_allergy: 'portals/patient/create-patient-allergy/',
	update_patient_allergy: 'portals/patient/<int:rec_id>/update-patient-allergy/',
	delete_patient_allergy: 'portals/patient/<int:rec_id>/delete-patient-allergy/',
	//*Allergies APIs end

	//*Comorbid Condtions APIs start
	get_patient_comrobid_conditions: 'portals/patient/<int:patient_id>/patient-comorbid-conditions/?search=',
	create_patient_comorbid_conditions: 'portals/patient/create-patient-comorbid-conditions/',
	update_patient_comorbid_conditions: 'portals/patient/<int:rec_id>/update-patient-comorbid-conditions/',
	delete_patient_comorbid_conditions: 'portals/patient/<int:rec_id>/delete-patient-comorbid-conditions/',
	//*Comorbid Condtions APIs end

	//*High Risk Conditions APIs start
	get_patient_high_risk_conditions: 'portals/patient/<int:patient_id>/patient-high-risk-conditions/?search=',
	create_high_risk_conditions: 'portals/patient/create-patient-high-risk-conditions/',
	update_high_risk_conditions: 'portals/patient/<int:rec_id>/update-patient-high-risk-conditions/',
	delete_high_risk_conditions: 'portals/patient/<int:rec_id>/delete-patient-high-risk-conditions/',
	//*High Risk Conditions APIs end
	//* Patient Clinical Conditions API End

	// * Patient Refill request API Start
	create_refill_request: 'portals/patient/<int:patient_id>/create-refill-request/',
	// * Patient Refill request API End

	//* Pharmacy Portal API start
	pharmacyLoginUrl: 'portals/pharmacy/login/',
	pharmacy_dashboard_get_count: 'portals/pharmacy/pharmacy-dashboard/<str:chat_profile_id>',
	import_enrollment_data: 'portals/client/patient-demographics-import/<str:timezone>/<int:pharmacy_user_id>',
	import_rx_data: 'portals/client/patient-rx-import/<str:timezone>',
	create_pharmacy_user: 'portals/pharmacy/create-pharmacy-user/',
	create_physician_user_group: 'portals/physician/create-physician-user-group/',
	update_physician_user_group: 'portals/pharmacy/physician-user-list/<int:physician_user_id>',
	showPatientsListingData: '/portals/pharmacy/patients-listing/?search=',
	physician_user_list: '/portals/pharmacy/physician-user-list/?search=',

	manage_user_list: 'portals/common/manage-user/list/?search=',
	get_update_user: 'portals/common/<int:id>/user/',
	delete_user: 'portals/common/<int:id>/delete-user/',

	// * Manage Import APIs
	patient_import_logs: 'portals/pharmacy/patient-import-logs/?search=',
	rx_import_logs: 'portals/pharmacy/rx-import-logs/?search=',
	// * Manage Import APIs

	// * Accommodation API starts
	create_accommodation: 'portals/pharmacy/<int:pharmacy_id>/create-room-and-beds/',
	get_accommodation_list: 'portals/pharmacy/<int:pharmacy_id>/pharmacy-accommodation/?search=',
	get_bed_list: 'portals/pharmacy/<int:room_id>/get-update-accommodation/',
	update_bed_list: 'portals/pharmacy/<int:room_id>/get-update-accommodation/',

	// * Accommodation API end

	// * Pharmacy Portal API end

	//*	Report API start
	expiring_prescriptions_report: '/portals/pharmacy/expiring-prescriptions-report/?search=',
	expired_prescriptions_report: '/portals/pharmacy/expired-prescriptions-report/?search=',
	refill_requests_report: 'portals/pharmacy/patient-refill-request-list/?search=',
	//* Report API end
	//* Update Refill request API Start
	update_refill_request: 'portals/pharmacy/<int:request_id>/update_refill_request/<int:user_id>',
	//* Update Refill request API End 

	//* User List  API Start
	user_role_list: 'portals/common/user-roles/',
	//* user List API End

	//* Physician Portal API Path Starts

	physician_login_url: 'portals/physician/login/',
	physician_patients: 'portals/physician/<int:physician_assistant_user_id>/physician-patients/list/?search=',
	physician_dashboard_get_count: 'portals/physician/<int:physician_assistant_user_id>/physician-dashboard/',
	physician_group_refill_requests: 'portals/physician/<int:physician_assistant_user_id>/physician-group-refill-request-list/?search=',
	physician_assistant_based_physicians: 'portals/physician/physician-group/<int:physician_assistant_user_id>',

	//* Physician Portal API Path Ends

	// Chat API Path Starts
	chat_list: 'portals/common/chats/<int:user_id>/?search=',
	message_list: 'portals/common/chats/<int:chat_id>/participants/<int:participant_id>/messages/<int:skip_count>/<str:isBookmark>/',
	chat_notifications: 'portals/common/chats/notifications/<int:user_id>/',
	archived_chat_list: 'portals/common/chats/archived/<str:user_id>/?search=',
	archive_unarchive_chat: 'portals/common/archive-unarchive-chat/',
	bookmark_unbookmark_Message: 'portals/common/chats/<str:message_id>/bookmark-unbookmark/<str:chat_id>/<str:participant_id>',
	pin_unpin_chat: 'portals/common/pin-chat',
	message_patient_physician_list: 'portals/patient/<int:patient_id>/message-physician-list/',
	message_pharmacy_physician_list: 'portals/pharmacy/message-physician-list/',
	// Chat API Path Ends

	//patient in-bound And out-bound Fax Api Start
	patient_inbound_list: 'portals/patient/<int:patient_id>/patient-inbound-fax/?search=',
	patient_outbound_list: 'portals/patient/<int:patient_id>/patient-outbound-fax/?search=',
	//patient in-bound And out-bound Fax Api Start


	// physician in-Bound And Out-Bound Fax Api start
	physician_in_Bound_fax: 'portals/physician/<int:physician_assistant_user_id>/physician-inbound-fax/?search=',
	expried_rx_uplod_fax_file: 'portals/physician/upload-return_pdf/',
	physician_out_Bound_fax: 'portals/physician/<int:physician_assistant_user_id>/physician-outbound-fax/?search=',
	// physician in-Bound And Out-Bound Fax Api End

	// in_Boun And Out- Bound Common API Start
	fax_Common_template_data: 'portals/common/<str:rec_id>/get-fax-template',
	// physician in-Bound And Out-Bound Fax Api End

	//pharmacy in-bound And out-bound Fax Api Start
	pharmacy_in_Bound_fax: 'portals/pharmacy/<str:pharmacy_id>/pharmacy-inbound-fax/?search=',
	pharmacy_Out_Bound_fax: 'portals/pharmacy/<str:pharmacy_id>/pharmacy-outbound-fax/?search=',
	Pharmacy_in_Bound_Action: 'portals/pharmacy/<str:rec_id>/approve-and-decline-fax/',
	//pharmacy in-bound And out-bound Fax Api End

	//Archive Api Start
	pharmacy_Rx_Archive_fax: 'portals/pharmacy/<str:pharmacy_id>/pharmacy-rx-archive/?search=',
	pharmacy_Refill_Archive_fax: 'portals/pharmacy/pharmacy-refill-request-archive/?search=',
	patient_Archive_list: 'portals/patient/<int:patient_id>/patient-rx-archive-fax/?search=',
	physician_Archive_list: 'portals/physician/<int:physician_assistant_user_id>/physician-rx-archive-fax/?search=',
	pharmacy_infusion_Archive_list: 'portals/pharmacy/infusion-appointment-archive/?search=',
	//Archive Fax Api End


	// Patient Appointments Start
	patientAppointmentsList: 'portals/patient/<int:patient_id>/infusion-appointment/?search=',
	createNewAppointment: 'portals/patient/create-infusion-appointment/',
	getPharmacyList: 'portals/common/pharmacy-branches/',
	getAppointmentTime: 'portals/common/pharmacy-branches/',
	getNurseList: 'portals/common/<int:pharmacy_id>/pharmacy-nurses/',
	getDrugList: 'portals/patient/<int:patient_id>/patient-drug-list/',
	// Patient Appointments End

	// pharmacy Appointments Manage Start
	pharmacyAppointmentsList: 'portals/pharmacy/patient-infusion-appointment/?search=',
	patientAppointmentUpdate: "portals/pharmacy/<int:rec_id>/get-update-infusion/",
	getRoomList: "portals/common/<int:pharmacy_id>/pharmacy_room/",
	getBedList: "portals/common/<int:room_id>/beds/",
	// pharmacy Appointments Manage End

};
