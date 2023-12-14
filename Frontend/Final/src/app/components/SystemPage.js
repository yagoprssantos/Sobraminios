"use client";

import Layout from "./Layout";

export default function SystemPage({ children, title }) {
  return (
    <Layout pageTitle={title}>
      <div className="lg:p-48 min-h-screen flex flex-col bg-white">
        <div className="m-auto">{children}</div>
      </div>
    </Layout>
  );
}
