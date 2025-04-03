import Layout from "@/components/layout/Layout";
import Hero from "@/components/layout/Hero";
import { ServiceList } from "@/components/layout/ServiceList";
import { FeatureGrid } from "@/components/layout/FeatureGrid";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServiceList />
      <FeatureGrid />
    </Layout>
  );
}
