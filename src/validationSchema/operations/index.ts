import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  operation_type: yup.string().required(),
  operation_status: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  car_id: yup.string().nullable().required(),
  staff_id: yup.string().nullable().required(),
});
