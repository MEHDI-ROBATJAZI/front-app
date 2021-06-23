
export default function calculateSectionsHeight( n ){
  const header = document.getElementById('header').clientHeight
  const allSections = document.getElementsByClassName('section');
  const section1 = allSections[0].clientHeight
  const section2 = allSections[1].clientHeight
  const section3 = allSections[2].clientHeight
  // const footer = document.getElementById('footer').clientHeight
  const footer = document.getElementById('footer').clientHeight
  
  
  switch(n){
    case 1:
      const flag1 = header+section1
      window.scrollTo({behavior:"smooth" , top: flag1 })
      break
    case 2:
      const flag2 = header+section1+section2
      window.scrollTo({behavior:"smooth" , top: flag2 })
      break
    case 3:
      const flag3 = header+section1 + section2 + section3
      window.scrollTo({behavior:"smooth" , top: flag3 })
      break
    default : break
  }

}