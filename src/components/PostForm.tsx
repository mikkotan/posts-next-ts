import React, { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

import {
  Form as AForm,
  Input as AInput,
  Button as AButton,
  Radio
} from 'antd';

import { FormValues } from '../interfaces'

const initialValues = {
  title: '',
  description: '',
  link: ''
};

const Form = styled(AForm)`
  width: 610px
`

const Input = styled(AInput)`
  border-radius: 4px
`
const TextArea = styled(AInput.TextArea)`
  border-radius: 4px
`

const Button = styled(AButton)`
  border-radius: 4px
`

const RadioGroup = styled(Radio.Group)`
  .ant-radio-button-wrapper:last-child {
    border-radius: 0 4px 4px 0;
  }

  .ant-radio-button-wrapper:first-child {
    border-radius: 4px 0 0 4px;
  }
`

type Props = {
  onSubmit: Function
}

const PostForm: React.FunctionComponent<Props> = (props) => {
  const [postType, setPostType] = useState('text');

  const formik = useFormik({
    initialValues,
    onSubmit: async (values: FormValues) => {
      await props.onSubmit({
        ...values,
        postType
      });

      formik.resetForm()
    }
  });

  const handleRadioChange = (e: any) => (
    setPostType(e.target.value)
  );

  return (
    <Form layout="vertical" onSubmit={formik.handleSubmit}>
      <Form.Item label="Title">
        <Input
          placeholder="Enter title"
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea
          placeholder="Write description..."
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          rows={4}
        />
      </Form.Item>
      <Form.Item label="Post Type">
        <RadioGroup
          id="postType"
          name="postType"
          defaultValue={postType}
          onChange={handleRadioChange}
        >
          <Radio.Button value="text">Text</Radio.Button>
          <Radio.Button value="video">Video</Radio.Button>
        </RadioGroup>
      </Form.Item>
      {postType === 'video' && (
        <Form.Item label="Video Link">
          <Input
            placeholder="Video URL"
            id="link"
            name="link"
            value={formik.values.link}
            onChange={formik.handleChange}
          />
        </Form.Item>
      )}
      <Form.Item>
        <Button type="primary" htmlType="submit">Publish</Button>
      </Form.Item>
    </Form>
  );
}

export default PostForm;
