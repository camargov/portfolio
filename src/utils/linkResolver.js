exports.linkResolver = (doc) => {
    // URL for a category type
    if (doc.type === 'about_me') {
      return `/about`
    }
  
    // URL for a product type
    if (doc.type === 'project') {
      return `/proyecto/${doc.uid}`
    }
  
    // Backup for all other types
    return '/'
}