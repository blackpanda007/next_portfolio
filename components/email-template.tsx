import * as React from "react";

interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
  lastname,
  email,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <div style={{ marginTop: "20px" }}>
      <p>
        <strong>Name:</strong> {firstname} {lastname}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
    </div>
  </div>
);
