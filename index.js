
//
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let todayDate =  new Date(year, 1, 1)
    let total = (todayDate - this.startDate) / (365 * 24 * 60 * 60 * 1000)
    return parseInt(total)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let vertValue;
    let horValue;
    function verticalValues(pickUp, dropOff){
      if (pickUp > dropOff) {
        return vertValue = (pickUp - dropOff)
      } else {
        return vertValue = (dropOff - pickUp)
      }
    }
    function horizontalValues(pickUp, dropOff) {
      let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
      let start;
      let finish;
      for (var i = 0 ; i < eastWest.length; i++) {
        if (eastWest[i] === pickUp) {
          start = i+1;
        }
        if (eastWest[i] === dropOff) {
          finish = i+1;
        }
      }
      if (start > finish) {
        return horValue = (start - finish)
      } else {
        return horValue = (finish - start);
      }
    }
    verticalValues(this.beginningLocation["vertical"], this.endingLocation["vertical"])
    horizontalValues(this.beginningLocation["horizontal"], this.endingLocation["horizontal"])
    return horValue + vertValue
  }

  estimatedTime(offPeak = false) {
    let distance = this.blocksTravelled()
    if (offPeak) {
      return (distance/2)
    } else {
       return (distance/3);
    }
  }


}
