import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  industry: yup.string().nullable(),
  size: yup.number().integer().nullable(),
  founded_year: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
