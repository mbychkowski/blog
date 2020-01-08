const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "image-store-api-prod-attachmentsbucket-5tpvezevme8f"
  },
}

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : prod;

export default {
  ...config
}