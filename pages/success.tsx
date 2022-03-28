import type { NextPage } from 'next';
import Layout from '../components/layout';

const Success: NextPage = () => {
  return (
    <Layout home={false} pageTitle={'Success'}>
      <p>Form successfully submitted!</p>
    </Layout>
  );
};

export default Success;
