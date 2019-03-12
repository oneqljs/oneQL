const helloResolvers = {
  Query: {
    hello: (_parent, _args, _context) => {
      // console.log('parent ---', parent, ' args---', args, ' context ---', context)
      // console.log(JSON.stringify(context))
      return 'Hello world!'
    }
  }
}

export default helloResolvers
