import * as yup from 'yup';

export const jobApplicantValidationSchema = yup.object().shape({
  application_date: yup.date().required(),
  position_applied: yup.string().required(),
  resume: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
