import Head from "next/head";
import SubmitDesign from "~/components/SubmitDesign";
import UploadDesign from "~/components/UploadDesign";
import { UploadButton, UploadDropzone } from "~/utils/uploadthing";

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
        <div className="my-5 flex flex-col items-center justify-center">
          <p>Logo goes here</p>
          <div className="w-3/4 md:w-1/2">
            <UploadDropzone
              className="  ut-label:text-pink-600 ut-button:bg-pink-600 ut-button:hover:bg-pink-500 ut-button:after:bg-pink-500 ut-uploading:"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
