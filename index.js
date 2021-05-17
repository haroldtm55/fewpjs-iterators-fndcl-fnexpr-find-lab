function superbowlWin(objectArray) {
  
  
  const resultOrUndefined = objectArray.find(({result}) => result === "W")

  if (resultOrUndefined === undefined) {
    return undefined
     
  }
  else return resultOrUndefined.year
  
}
