exports.linkResolver = (doc) => {
    // URL for about type
    if (doc.type === 'about_me') {
      return '/about'
    }
  
    // URL for a project type
    if (doc.type === 'project') {
      return `/project/${doc.uid}`
    }
  
    // URL for homepage type
    return '/'
}