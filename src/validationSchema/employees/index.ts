import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  hire_date: yup.date().required(),
  job_title: yup.string().required(),
  salary: yup.number().integer().required(),
  department: yup.string().required(),
  report_to: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
