import { useState } from "react";

import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import { RcFile } from "antd/lib/upload/interface";

import MDEditor from "@uiw/react-md-editor";

import { IPost, ICategory } from "interfaces";

import { supabaseClient } from "@/utilities/supabaseClient";
import { normalizeFile } from "@/utilities/normalize";

export const PostCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<IPost>();

  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item label="Images">
          <Form.Item
            name="images"
            valuePropName="fileList"
            normalize={normalizeFile}
            noStyle
          >
            <Upload.Dragger
              name="file"
              listType="picture"
              multiple
              customRequest={async ({ file, onError, onSuccess }) => {
                try {
                  const rcFile = file as RcFile;
                  const BUCKET_NAME = "refine"; // Set your bucket name
                  const storage = supabaseClient.storage.from(BUCKET_NAME);

                  const filePath = `public/${rcFile.name}`;

                  await storage.upload(filePath, file, {
                    cacheControl: "3600",
                    upsert: true,
                  });

                  const { data } = await storage.getPublicUrl(
                    `public/${rcFile.name}`
                  );

                  const xhr = new XMLHttpRequest();
                  onSuccess && onSuccess({ url: data?.publicUrl }, xhr);

                  console.log("Starting file upload...");
                  console.log("File path:", filePath);
                  console.log("File:", file);
                } catch (error) {
                  console.error("Error during file upload:", error);
                  onError &&
                    onError(new Error(`Upload Error: ${error.message}`));
                }
              }}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
};
