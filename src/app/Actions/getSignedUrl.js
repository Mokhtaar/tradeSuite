"use server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

const { AWS_BUCKET_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME } =
  process.env;
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

if (
  !AWS_BUCKET_REGION ||
  !AWS_ACCESS_KEY ||
  !AWS_SECRET_KEY ||
  !AWS_BUCKET_NAME
) {
  throw new Error("Missing required environment variables");
}

const s3 = new S3Client({
  region: AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

// const acceptedTypes = ["application/pdf", ".doc", ".docx"];

const maxFileSize = 1024 * 1024 * 10;

export async function SignedUrlAction(fileSize, fileType, checksum) {
  console.log(fileSize, fileType, checksum);
  // const session = await auth()
  //if !session return {faliure: "not authenticated"}
  //   console.log(fileType);

  //   if (!acceptedTypes.includes(fileType)) {
  //     return { failure: "Invalid file type" };
  //   }

  if (fileSize > maxFileSize) {
    return { failure: "File too large" };
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: generateFileName(),
    ContentType: fileType,
    // ContentLength: fileSize,
    // ChecksumSHA256: checksum,
    // Metadata:{
    //     userId: session.user.id
    // }
  });

  const url = await getSignedUrl(s3, putObjectCommand, {
    expiresIn: 60,
  });

  return { success: { url } };
}

// "use server";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// const s3 = new S3Client({
//   region: process.env.AWS_BUCKET_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//   },
// });
// export async function SignedUrlAction() {
//   // const session = await auth()
//   //if !session return {faliure: "not authenticated"}
//   const putObjectCommand = new PutObjectCommand({
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: "test_file",
//   });

//   const url = await getSignedUrl(s3, putObjectCommand, {
//     expiresIn: 60,
//   });
//   return { success: { url } };
// }
