import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  name: yup.string().required(),
  dashboard_type: yup.string().required(),
  status: yup.string().required(),
  description: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
