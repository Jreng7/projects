

export default async (req, res, next) => {
  const authenticated = false

  if (authenticated) {
    return next()
  }
}