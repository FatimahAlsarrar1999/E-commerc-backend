import 'dotenv/config'

export const dev = {
  app: {
    port: Number(process.env.PORT),
    defaultImagePath: process.env.DEFAULT_IMAGE_PATH,
    jwtUserKey: process.env.JWT_SECRET ,
    jwtResetPasswordKey: process.env.JWT_RESET_PASSWORD_KEY,
    jwtAccessKey: process.env.JWT_ACCESS_KEY,
    smtpUsername: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
  }, 
  db: {
    url: process.env.MONGODB_URL,
  },
}
