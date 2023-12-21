module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET_KEY"),
        region: env("AWS_REGION", "eu-central-1"),
        params: {
          Bucket: env("AWS_BUCKET", "surfcamp-strapi-images"),
        },
      },
    },
  },
});
