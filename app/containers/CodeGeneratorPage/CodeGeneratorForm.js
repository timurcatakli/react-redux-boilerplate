import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Select, Checkbox } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

class CodeGeneratorForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleFormValues(values);
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    const { resolve, handleResolve } = this.props
    // Only show error after a field is touched.
    const ticketNumberError =
      isFieldTouched('ticketNumber') && getFieldError('ticketNumber');

    const branchTypeError =
      isFieldTouched('branchType') && getFieldError('branchType');

    const prCommentError =
      isFieldTouched('prComment') && getFieldError('prComment');

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Ticket Number"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          validateStatus={ticketNumberError ? 'error' : ''}
          help={ticketNumberError || ''}
        >
          {getFieldDecorator('ticketNumber', {
            rules: [{ required: true, message: 'This field is required!' }],
          })(<Input placeholder="Ticket Number" />)}
        </FormItem>

        <FormItem
          label="Branch Type"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          validateStatus={branchTypeError ? 'error' : ''}
          help={branchTypeError || ''}
        >
          {getFieldDecorator('branchType', {
            rules: [{ required: true, message: 'This field is required!' }],
          })(
            <Select
              size={'default'}
              initialValue="bugfix"
              style={{ width: '100%' }}
            >
              <Option value="bugfix">bugfix</Option>
              <Option value="feature">feature</Option>
            </Select>,
          )}
        </FormItem>

        <FormItem
          label="PR Comment"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          validateStatus={prCommentError ? 'error' : ''}
          help={prCommentError || ''}
        >
          {getFieldDecorator('prComment', {
            rules: [{ required: true, message: 'This field is required!' }],
          })(<TextArea placeholder="PR Comment" rows={4} />)}
        </FormItem>


        <FormItem
          label="Resolved?"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('resolve')(
            <Checkbox
              onChange={handleResolve}
            />
          )}
        </FormItem>

        <FormItem wrapperCol={{ span: 8, offset: 4 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Generate
          </Button>
        </FormItem>
      </Form>
    );
  }
}

CodeGeneratorForm.propTypes = {
  handleResolve: PropTypes.func.isRequired,
  handleFormValues: PropTypes.func.isRequired,
  resolve: PropTypes.bool.isRequired,
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldsError: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired,
    isFieldTouched: PropTypes.func.isRequired,
  }).isRequired,
};

const WrappedCodeGeneratorForm = Form.create()(CodeGeneratorForm);
export default WrappedCodeGeneratorForm;
