import ImageUploader from "../components/image-uploader";
import Nav from "../components/nav";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-10">
        <h1 className="text-3xl text-center font-bold">
          Upload image to Cloudinary
        </h1>
        <div className="py-10 flex justify-center items-center">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
