"use server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

// const acceptedTypes = ["application/pdf", ".doc", ".docx"];

const maxFileSize = 1024 * 1024 * 10;

export async function SignedUrlAction(fileSize, fileType, checksum) {
  // const session = await auth()
  //if !session return {faliure: "not authenticated"}
  //   console.log(fileType);
  //   if (!acceptedTypes.includes(fileType)) {
  //     return { failure: "Invalid file type" };
  //   }

  if (fileSize > maxFileSize) {
    return { failure: "File too large" };
  }

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: "test_file",
    ContentType: fileType,
    ContentLength: fileSize,
    ChecksumSHA256: checksum,
    // Metadata:{
    //     userId: session.user.id
    // }
  });

  const url = await getSignedUrl(s3, command, {
    expiresIn: 60,
  });

  return { success: { url } };
}
