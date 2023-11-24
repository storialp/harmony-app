import Head from "next/head";
import SubmitDesign from "~/components/SubmitDesign";
import UploadDesign from "~/components/UploadDesign";

export default function Home() {
  return (
    <>
      <Head>
        <title>Harmony - from design to prod *fast*</title>
        <meta
          name="description"
          content="Get a technical spec document from just a picture of your design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-5 flex items-center justify-center">
          Logo goes here
        </div>
        <UploadDesign />
        <SubmitDesign />
      </main>
    </>
  );
}
