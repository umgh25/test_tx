import Layout from '@/components/layout/Layout'
import Hero from '@/components/layout/Hero'

import { ServiceList }from '@/components/layout/service-list'
import { FeatureGrid } from '@/components/layout/feature-grid'


export default function Home() {
  return (
    
    <Layout>
    <Hero />
    
    <ServiceList />
    <FeatureGrid />
    
      
    </Layout>
  );
}
