import Head from 'next/head';
import Overview from '../components/Overview';

const OverviewPage = ({data}) => (
  <>
    <Head>
      <link rel="stylesheet" href="/static/react-vis.css" />
    </Head>
    <Overview data={data}/>
  </>
);

export default OverviewPage;

export async function getStaticProps() {
  const response = await fetch('http://localhost:8080/api/link/user/getUserLinks')
  const data = await response.json()
  console.log(data)
  //debugger
  return {
    props: {
      userLinks: data
    }
  }
}
