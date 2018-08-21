import { Form } from 'antd';
import CodeGeneratorForm from './CodeGeneratorForm';

const WrappedCodeGeneratorForm = Form.create({
  mapPropsToFields(props) {
    return {
      ticketNumber: Form.createFormField({
        value: props.ticketNumber,
      }),
      branchType: Form.createFormField({
        value: props.branchType,
      }),
      prComment: Form.createFormField({
        value: props.prComment,
      }),
      resolve: Form.createFormField({
        checked: props.resolve,
      }),
    };
  },
})(CodeGeneratorForm);

export default WrappedCodeGeneratorForm;
