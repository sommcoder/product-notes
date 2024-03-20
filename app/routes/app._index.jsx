import { useActionData, useNavigation, useLoaderData } from "@remix-run/react";
import { Page, Layout, BlockStack } from "@shopify/polaris";
import { authenticate } from "../shopify.server";

// provides data to the component:
export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

// updates persistent data:
export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
};

// is the component / UI:
export default function Index() {
  const nav = useNavigation();
  const actionData = useActionData();
  const loaderData = useLoaderData();

  return (
    <Page>
      <ui-title-bar title="Menu-ify"></ui-title-bar>
      <Layout>
        <Layout.Section>Menu Creator</Layout.Section>
      </Layout>
    </Page>
  );
}
