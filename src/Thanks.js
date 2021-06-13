import "@shopify/polaris/dist/styles.css";
import {
  Page,
  Card,
} from "@shopify/polaris";
import React from "react";

function Thanks() {
  return (
    <Page title="Basma Challenge">
        <Card title="Subscription Succeful" sectioned>
            <p>Thank you for your subscribtion.</p>
            <p>Please check your email to verirfy your account</p>
        </Card>
    </Page>
  );
}

export default Thanks;
