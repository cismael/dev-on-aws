const {
  PutObjectCommand,
  S3Client
} = require('@aws-sdk/client-s3')

module.exports.save = async (name, data) => {
  const params = {
    Bucket: 'pizza-luvrs-bucket-demo',
    Key: `pizzas/${name}.png`,
    Body: Buffer.from(data, 'base64'),
    ContentEncoding: 'base64',
    ContentType: 'image/png'
  }
  const client = new S3Client({ region: 'eu-west-3' })
  const command = new PutObjectCommand(params)
  await client.send(command)

  return `//pizza-luvrs-bucket-demo.s3.eu-west-3.amazonaws.com/${params.Key}`
}