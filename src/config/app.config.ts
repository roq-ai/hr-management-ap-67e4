interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Job Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own application status',
    'Read company information',
    'Read job positions',
    'Update personal information',
  ],
  ownerAbilities: ['Manage user data', 'Manage employee data', 'Manage job applicant data', 'Manage HR manager data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e6daa718-71c2-4f68-9dda-5f30a272d0f8',
};
